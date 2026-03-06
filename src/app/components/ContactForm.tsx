import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ContactFormProps {
  textColor: string;
  borderColor: string;
  selectedLocations?: string[];
  onToggleLocation?: (loc: string) => void;
  formValues?: FormData;
  onFormFieldChange?: (field: keyof FormData, value: string) => void;
}

const LOCATION_EVENT = 'enigma:location-change';
const FORM_INTERACTING_EVENT = 'enigma:contact-form-interacting';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  enquiryType: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  enquiryType: '',
  message: '',
};

const encode = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

const ENQUIRY_OPTIONS = [
  'Creative Agency',
  'Brand Design',
  'Media Agency',
  'Property & Place',
  'Production',
  'Digital, Data & Technology',
  'Government',
  'Press Enquiry',
  'Jobs',
  'Other',
] as const;

export function ContactForm({
  textColor,
  borderColor,
  selectedLocations,
  onToggleLocation,
  formValues,
  onFormFieldChange,
}: ContactFormProps) {
  const [localFormData, setLocalFormData] = useState<FormData>(EMPTY_FORM);
  const formData = formValues ?? localFormData;

  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle');
  const [formError, setFormError] = useState<string>('');

  // If parent supplies handlers, keep state in App so preview + main stay in sync.
  // Also enforce a single selection.
  const [localLocation, setLocalLocation] = useState<string>('');

  const setFormField = (field: keyof FormData, value: string) => {
    if (onFormFieldChange) {
      onFormFieldChange(field, value);
      return;
    }
    setLocalFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    if (onFormFieldChange) {
      (Object.keys(EMPTY_FORM) as Array<keyof FormData>).forEach((field) => {
        onFormFieldChange(field, EMPTY_FORM[field]);
      });
      return;
    }
    setLocalFormData(EMPTY_FORM);
  };

  // Dispatch event when user starts or stops interacting with the form
  const broadcastFormInteracting = (interacting: boolean) => {
    window.dispatchEvent(new CustomEvent(FORM_INTERACTING_EVENT, { detail: interacting }));
  };

  // Handlers for focus/blur on form controls to track interaction state
  const handleFocus = () => {
    broadcastFormInteracting(true);
  };
  const handleBlur = () => {
    // Delay to ensure if focus moves between controls, we don't prematurely signal stop interacting
    setTimeout(() => {
      // Check if document.activeElement is inside the form
      const active = document.activeElement;
      const form = document.getElementById('contact-form');
      if (!form || !active || !form.contains(active)) {
        broadcastFormInteracting(false);
      }
    }, 0);
  };

  useEffect(() => {
    // If the parent controls the selection (selectedLocations + onToggleLocation),
    // we don't need to sync via window events.
    if (selectedLocations && onToggleLocation) return;

    const handler = (e: Event) => {
      const ce = e as CustomEvent<string>;
      if (typeof ce.detail === 'string') setLocalLocation(ce.detail);
    };

    window.addEventListener(LOCATION_EVENT, handler);
    return () => window.removeEventListener(LOCATION_EVENT, handler);
  }, [selectedLocations, onToggleLocation]);

  const getSelectedLocation = () => {
    if (selectedLocations && selectedLocations.length > 0) return selectedLocations[0];
    return localLocation;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const location = getSelectedLocation();

    // Basic required validation (HTML required covers most, but location is custom)
    if (!formData.firstName.trim()) return setFormError('Please enter your first name.');
    if (!formData.lastName.trim()) return setFormError('Please enter your last name.');
    if (!formData.email.trim()) return setFormError('Please enter your email.');
    if (!formData.enquiryType.trim()) return setFormError('Please select an enquiry type.');
    if (!formData.message.trim()) return setFormError('Please enter a message.');
    if (!location) return setFormError('Please select a location.');

    setFormError('');

    const payload = {
      'form-name': 'contact',
      'bot-field': '',
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      enquiryType: formData.enquiryType,
      message: formData.message,
      location,
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error('Netlify form submission failed');
      }

      console.log('Form submitted:', payload);

      // Show success message, then fade back to the form
      setSubmitState('success');
      window.setTimeout(() => {
        setSubmitState('idle');
      }, 2500);

      // Clear form after submit
      resetForm();

      // Clear selected location too (respect parent-controlled mode)
      if (onToggleLocation) {
        onToggleLocation('');
      } else {
        setLocalLocation('');
        broadcastLocation('');
      }
    } catch (error) {
      console.error(error);
      setFormError('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.target.name as keyof FormData;
    setFormField(field, e.target.value);
  };

  const handleCheckboxChange = (locationLabel: string) => {
    // Compute next selection (single-select)
    const next = getSelectedLocation() === locationLabel ? '' : locationLabel;

    if (onToggleLocation) {
      // Parent-controlled
      onToggleLocation(next);
      return;
    }

    // Local fallback + sync across duplicate renders (base + lens)
    setLocalLocation(next);
    broadcastLocation(next);
  };

  const isChecked = (locationLabel: string) => getSelectedLocation() === locationLabel;

  const monoFont = "'Courier Prime', 'OCR B', 'Courier New', monospace";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-4 md:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left Column - Heading */}
        <div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 tracking-tight"
            style={{
              color: textColor,
              fontFamily: "'Enigma-EnigmaLargeRoman', serif",
            }}
          >
            Contact us
          </h2>
          <p
            className="text-xs md:text-sm leading-relaxed max-w-md"
            style={{ color: textColor, fontFamily: monoFont }}
          >
            Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!
          </p>
        </div>

        {/* Right Column - Form */}
        <form
          id="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" value="" />
          <input type="hidden" name="location" value={getSelectedLocation()} />
          {submitState === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="py-10 md:py-14"
            >
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: textColor, fontFamily: monoFont }}
              >
                Thank you for your enquiry, someone will be in contact soon.
              </p>
            </motion.div>
          ) : (
          <>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[10px] md:text-xs mb-2 tracking-wider"
                style={{ color: textColor, fontFamily: monoFont }}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full pb-2 bg-transparent border-0 border-b outline-none focus:border-opacity-100 transition-all text-sm md:text-base"
                style={{
                  color: textColor,
                  borderBottomColor: textColor,
                  borderBottomWidth: '1px',
                  fontFamily: monoFont,
                }}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-[10px] md:text-xs mb-2 tracking-wider"
                style={{ color: textColor, fontFamily: monoFont }}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full pb-2 bg-transparent border-0 border-b outline-none focus:border-opacity-100 transition-all text-sm md:text-base"
                style={{
                  color: textColor,
                  borderBottomColor: textColor,
                  borderBottomWidth: '1px',
                  fontFamily: monoFont,
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[10px] md:text-xs mb-2 tracking-wider"
              style={{ color: textColor, fontFamily: monoFont }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pb-2 bg-transparent border-0 border-b outline-none focus:border-opacity-100 transition-all text-sm md:text-base"
              style={{
                color: textColor,
                borderBottomColor: textColor,
                borderBottomWidth: '1px',
                fontFamily: monoFont,
              }}
            />
          </div>

          {/* Enquiry Type */}
          <div>
            <label
              htmlFor="enquiryType"
              className="block text-[10px] md:text-xs mb-2 tracking-wider"
              style={{ color: textColor, fontFamily: monoFont }}
            >
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
              className="w-full pb-2 bg-transparent border-0 border-b outline-none focus:border-opacity-100 transition-all text-sm md:text-base"
              style={{
                color: textColor,
                borderBottomColor: textColor,
                borderBottomWidth: '1px',
                fontFamily: monoFont,
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
              }}
            >
              <option value="" disabled>
                Select enquiry type
              </option>
              {ENQUIRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt} style={{ color: '#111' }}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[10px] md:text-xs mb-2 tracking-wider"
              style={{ color: textColor, fontFamily: monoFont }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pb-2 bg-transparent border-0 border-b outline-none focus:border-opacity-100 transition-all resize-none text-sm md:text-base"
              style={{
                color: textColor,
                borderBottomColor: textColor,
                borderBottomWidth: '1px',
                fontFamily: monoFont,
              }}
            />
          </div>

          {formError ? (
            <p className="text-xs md:text-sm" style={{ color: textColor, fontFamily: monoFont, opacity: 0.9 }}>
              {formError}
            </p>
          ) : null}

          {/* Checkboxes and Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="locationOption"
                  value="Sydney"
                  checked={isChecked('Sydney')}
                  onChange={() => handleCheckboxChange('Sydney')}
                  className="w-4 h-4 cursor-pointer"
                  style={{
                    accentColor: textColor,
                  }}
                />
                <span className="text-xs md:text-sm" style={{ color: textColor, fontFamily: monoFont }}>
                  Sydney
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="locationOption"
                  value="Newcastle"
                  checked={isChecked('Newcastle')}
                  onChange={() => handleCheckboxChange('Newcastle')}
                  className="w-4 h-4 cursor-pointer"
                  style={{
                    accentColor: textColor,
                  }}
                />
                <span className="text-xs md:text-sm" style={{ color: textColor, fontFamily: monoFont }}>
                  Newcastle
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="locationOption"
                  value="Brisbane"
                  checked={isChecked('Brisbane')}
                  onChange={() => handleCheckboxChange('Brisbane')}
                  className="w-4 h-4 cursor-pointer"
                  style={{
                    accentColor: textColor,
                  }}
                />
                <span className="text-xs md:text-sm" style={{ color: textColor, fontFamily: monoFont }}>
                  Brisbane
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="px-6 md:px-8 py-2 border rounded-full text-[10px] md:text-xs tracking-widest hover:opacity-80 transition-opacity w-full sm:w-auto"
                style={{
                  color: textColor,
                  borderColor,
                  fontFamily: monoFont,
                }}
            >
              SEND
            </button>
          </div>
          </>
          )}
        </form>
      </div>
    </motion.div>
  );
}

function broadcastLocation(location: string) {
  window.dispatchEvent(new CustomEvent<string>(LOCATION_EVENT, { detail: location }));
}
