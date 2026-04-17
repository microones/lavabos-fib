import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface BigButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
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
  "inline-flex items-center justify-center border-2 px-8 py-4 text-lg font-bold tracking-wide transition-all duration-200 hover:-translate-y-[2px] active:translate-y-0 cursor-pointer select-none";

export default function BigButton({
  children,
  variant = "primary",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: BigButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
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
