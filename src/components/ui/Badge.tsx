type Variant = "default" | "warning" | "info" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  default:
    "bg-[var(--primary)] text-[var(--on-primary)] border-[var(--primary)]",
  warning:
    "bg-[var(--muted)] text-[var(--on-primary)] border-[var(--muted)]",
  info:
    "bg-[var(--secondary)] text-[var(--on-secondary)] border-[var(--secondary)]",
  muted:
    "bg-transparent text-[var(--muted)] border-[var(--border)]",
};

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
