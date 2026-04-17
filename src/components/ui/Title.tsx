interface TitleProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  1: "text-5xl md:text-7xl font-black tracking-tighter",
  2: "text-2xl md:text-3xl font-bold tracking-tight",
  3: "text-xl font-bold",
  4: "text-base font-bold uppercase tracking-widest",
};

const accentClasses = {
  1: "border-l-4 border-[var(--primary)] pl-4",
  2: "border-l-4 border-[var(--secondary)] pl-3",
  3: "text-[var(--muted)]",
  4: "text-[var(--muted)]",
};

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

export default function Title({ level = 1, children, className = "" }: TitleProps) {
  const Tag = tags[level];
  return (
    <Tag
      className={`text-[var(--fg)] ${sizeClasses[level]} ${accentClasses[level]} ${className}`}
    >
      {children}
    </Tag>
  );
}
