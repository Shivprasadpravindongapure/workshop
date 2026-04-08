import React from 'react';
import './Button.css';

/**
 * Reusable Button component.
 *
 * Props:
 *  - children: button label
 *  - variant: 'primary' | 'secondary' | 'danger' (default: 'primary')
 *  - size: 'sm' | 'md' | 'lg' (default: 'md')
 *  - fullWidth: boolean
 *  - disabled: boolean
 *  - type: 'button' | 'submit' | 'reset' (default: 'button')
 *  - onClick: function
 *  - id: string (for testing / accessibility)
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  id,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      id={id}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
