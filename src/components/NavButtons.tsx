import Link from "next/link"

type NavButtonItem = {
  href: string
  label: string
}

interface NavButtonsProps {
  items: NavButtonItem[]
  className?: string
}

export default function NavButtons({ items, className = "" }: NavButtonsProps) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center space-y-4 " +
        "md:flex-row md:space-x-4 md:space-y-0 " +
        className
      }
    >
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <button className="w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center">
            {item.label}
          </button>
        </Link>
      ))}
    </div>
  )
}