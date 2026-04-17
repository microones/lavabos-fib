import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface SmallButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] border-[var(--primary)] hover:opacity-90",
  secondary:
    "bg-[var(--secondary)] text-[var(--on-secondary)] border-[var(--secondary)] hover:opacity-90",
  ghost:
    "bg-transparent text-[var(--fg)] border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
};

const base =
  "inline-flex items-center justify-center border px-3 py-1.5 text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer select-none";

export default function SmallButton({
  children,
  variant = "ghost",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  external = false,
}: SmallButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
