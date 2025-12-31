import Link from 'next/link';


interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost'; // Added accent and ghost
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // Added icon prop for convenience
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 overflow-hidden group';

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-accent-red to-accent-orange text-white 
      shadow-[0_4px_14px_0_rgba(200,64,52,0.39)] 
      hover:shadow-[0_6px_20px_rgba(200,64,52,0.23)] 
      hover:scale-[1.02] active:scale-[0.98]
      border border-transparent
    `,
    secondary: `
      bg-charcoal text-white 
      shadow-lg hover:shadow-xl 
      hover:scale-[1.02] active:scale-[0.98]
      border border-transparent
    `,
    outline: `
      bg-transparent text-white border-2 border-white/30
      hover:bg-white hover:text-charcoal hover:border-white
      backdrop-blur-sm shadow-sm hover:shadow-lg
      hover:scale-[1.02] active:scale-[0.98]
    `,
    accent: `
      bg-white text-accent-red border border-gray-200
      hover:border-accent-red hover:bg-accent-red hover:text-white
      shadow-sm hover:shadow-md
      hover:scale-[1.02] active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-gray-600 hover:text-accent-red
      hover:bg-accent-red/5
    `
  };

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Shine effect element
  const sineElement = (
    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
  );

  const content = (
    <span className="relative flex items-center gap-2 z-10 w-full justify-center">
      {children}
      {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {sineElement}
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {sineElement}
      {content}
    </button>
  );
}
