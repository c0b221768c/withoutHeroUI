'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { navItems } from '@/utils/nav'
import { NavItem } from '@/components/ui/NavItem'
import { cva } from 'class-variance-authority'

const sideNavVariants = cva(
  'relative shrink-0 transition-all duration-300 flex',
  {
    variants: {
      open: {
        true: 'w-60',  // 240px
        false: 'w-15', // 60px
      },
    },
    defaultVariants: {
      open: true,
    },
  }
)

const toggleBarVariants = cva(
  'transition-all duration-300 flex items-center justify-center cursor-pointer select-none',
  {
    variants: {
      open: {
        true: 'bg-gray-200',
        false: 'bg-gray-100',
      },
    },
    defaultVariants: {
      open: true,
    },
  }
)

export default function SideNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  return (
    <aside className={sideNavVariants({ open })}>
      {/* ▼ ナビ本体 */}
      <nav className="flex flex-col bg-black text-white w-full pt-8 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            collapsed={!open}
          />
        ))}
      </nav>

      {/* ▼ 開閉バー */}
      <div
        onClick={() => setOpen(!open)}
        className={toggleBarVariants({ open })}
      >
        <span className="text-black text-sm font-bold pointer-events-none">
          {open ? '«' : '»'}
        </span>
      </div>
    </aside>
  )
}