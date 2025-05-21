'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'

const navItemVariants = cva(
  'group flex items-center rounded-md px-3 py-2 transition-colors duration-200',
  {
    variants: {
      active: {
        true: 'bg-primary text-white',
        false: 'text-white/80 hover:bg-white/10',
      },
      collapsed: {
        true: 'justify-center',
        false: 'justify-start gap-2',
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
    },
  }
)

type NavItemProps = {
  href: string
  label: string
  icon: React.ReactNode
  collapsed: boolean
  className?: string
} & VariantProps<typeof navItemVariants>

export const NavItem = ({
  href,
  label,
  icon,
  collapsed,
  className,
}: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        navItemVariants({ active: isActive, collapsed }),
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon}
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  )
}