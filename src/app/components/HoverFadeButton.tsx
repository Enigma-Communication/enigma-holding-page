import { useState } from 'react';
import type { ButtonHTMLAttributes, CSSProperties, FocusEvent, MouseEvent, PointerEvent, ReactNode } from 'react';

interface HoverFadeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
  baseBorderColor?: string;
  baseBackgroundColor?: string;
  baseTextColor?: string;
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  onActiveChange?: (active: boolean) => void;
}

export function HoverFadeButton({
  active,
  children,
  baseBackgroundColor,
  baseBorderColor,
  baseTextColor,
  className,
  hoverBackgroundColor,
  hoverBorderColor,
  hoverTextColor,
  style,
  onBlur,
  onFocus,
  onActiveChange,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
  ...props
}: HoverFadeButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const resolvedActive = active ?? isActive;

  const setActiveState = (nextActive: boolean) => {
    setIsActive(nextActive);
    onActiveChange?.(nextActive);
  };

  const mergedStyle: CSSProperties = {
    backgroundColor: resolvedActive ? hoverBackgroundColor : baseBackgroundColor,
    borderColor: resolvedActive ? hoverBorderColor : baseBorderColor,
    color: resolvedActive ? hoverTextColor : baseTextColor,
    transition: 'background-color 0.7s ease-out, color 0.7s ease-out, border-color 0.7s ease-out',
    ...style,
  };

  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    setActiveState(true);
    onPointerEnter?.(event);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLButtonElement>) => {
    setActiveState(false);
    onPointerLeave?.(event);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveState(true);
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveState(false);
    onMouseLeave?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    setActiveState(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    setActiveState(false);
    onBlur?.(event);
  };

  return (
    <button
      {...props}
      className={className}
      style={mergedStyle}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </button>
  );
}
