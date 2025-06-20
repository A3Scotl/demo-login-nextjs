export function Link({ 
  href = "#", 
  children, 
  variant = "default",
  className = "",
  ...props 
}) {
  const variants = {
    default: "text-blue-600 hover:text-blue-700 transition-colors",
    muted: "text-gray-600 hover:text-blue-600 transition-colors"
  };
  
  return (
    <a 
      href={href}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
