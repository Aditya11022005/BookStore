// components/ui/Button.jsx
export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border hover:bg-muted",
    ghost: "hover:bg-muted",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
