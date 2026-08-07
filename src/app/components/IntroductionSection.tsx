interface IntroductionSectionProps {
  textColor: string;
}

export function IntroductionSection({ textColor }: IntroductionSectionProps) {
  return (
    <section className="introduction-section" style={{ color: textColor }}>
      <h1 className="introduction-section__heading">
        <span className="introduction-section__heading-line">Welcome</span>
        <span className="introduction-section__heading-line introduction-section__heading-line--middle">
          to the home of
        </span>
        <span className="introduction-section__heading-line introduction-section__heading-line--final">
          Unignorability<span className="introduction-section__registered">&reg;</span>
        </span>
      </h1>

      <div className="introduction-section__copy">
        <p>
          A creative agency and a media agency, both driven by a singular focus: to make our clients&rsquo; brands
          Unignorable.
        </p>
        <p>
          Born over 30 years ago in the hardworking city of Newcastle, and with a decade of established scale in
          Sydney, we&rsquo;re a diverse collective of some of the smartest and most experienced strategic, creative
          and media thinkers in Australia &ndash; united by a commitment to creating and growing Unignorable brands,
          and connecting them with customers in Unignorable ways.
        </p>
      </div>
    </section>
  );
}
