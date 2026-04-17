import { ElementType, ComponentPropsWithoutRef } from "react";

type BoxProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Box<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: BoxProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={`border border-[var(--border)] bg-[var(--card-bg)] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
