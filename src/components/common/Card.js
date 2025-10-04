import React from 'react';

/**
 * Custom Card component with consistent styling
 * @param {object} props - Component props
 * @param {string} props.variant - Card variant (default, primary, secondary, success, danger, warning, info, light, dark)
 * @param {boolean} props.shadow - Whether to show shadow
 * @param {boolean} props.border - Whether to show border
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card component
 */
const Card = ({
  variant = 'default',
  shadow = true,
  border = true,
  className = '',
  children,
  ...rest
}) => {
  const cardClasses = [
    'card',
    variant !== 'default' && `border-${variant}`,
    shadow && 'shadow-sm',
    !border && 'border-0',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

/**
 * Card Header component
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Header content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card Header component
 */
export const CardHeader = ({ className = '', children, ...rest }) => (
  <div className={`card-header ${className}`} {...rest}>
    {children}
  </div>
);

/**
 * Card Body component
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Body content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card Body component
 */
export const CardBody = ({ className = '', children, ...rest }) => (
  <div className={`card-body ${className}`} {...rest}>
    {children}
  </div>
);

/**
 * Card Footer component
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Footer content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card Footer component
 */
export const CardFooter = ({ className = '', children, ...rest }) => (
  <div className={`card-footer ${className}`} {...rest}>
    {children}
  </div>
);

/**
 * Card Title component
 * @param {object} props - Component props
 * @param {string} props.as - HTML element to render (h1, h2, h3, etc.)
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Title content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card Title component
 */
export const CardTitle = ({ as: Component = 'h5', className = '', children, ...rest }) => (
  <Component className={`card-title ${className}`} {...rest}>
    {children}
  </Component>
);

/**
 * Card Text component
 * @param {object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Text content
 * @param {object} props.rest - Additional props
 * @returns {JSX.Element} - Card Text component
 */
export const CardText = ({ className = '', children, ...rest }) => (
  <p className={`card-text ${className}`} {...rest}>
    {children}
  </p>
);

export default Card;
