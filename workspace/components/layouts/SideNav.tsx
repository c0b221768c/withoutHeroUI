'use client'

import { useState } from 'react'
import { navItems } from '@/utils/nav'
import { NavItem as NavItemComponent } from '@/components/ui/NavItem'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'

// ✅ SideNav コンテナのクラス定義
const sideNavVariants = cva(
  'relative flex flex-col h-full transition-all duration-300 ease-in-out bg-blue-600 text-white',
  {
    variants: {
      collapsed: {
        true: 'w-16',
        false: 'w-64',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

// ✅ トグルボタンのアイコン選択
const ToggleIcon = ({ collapsed }: { collapsed: boolean }) => {
  return collapsed ? (
    <ChevronRightIcon className="w-4 h-4 text-white" />
  ) : (
    <ChevronLeftIcon className="w-4 h-4 text-white" />
  )
}

export const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [hovering, setHovering] = useState(false)

  const toggle = () => setCollapsed((prev) => !prev)

  const handleMouseEnter = () => setHovering(true)
  const handleMouseLeave = () => setHovering(false)

  const shouldShowToggle = hovering

  return (
    <aside
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={sideNavVariants({ collapsed })}
    >
      <nav className="flex-1 mt-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavItemComponent
              key={item.href}
              href={item.href}
              label={item.label}
              icon={<Icon className="w-5 h-5" />}
              collapsed={collapsed}
            />
          )
        })}
      </nav>

      {shouldShowToggle && (
        <button
          onClick={toggle}
          className="absolute -right-3 top-4 z-10 p-1 rounded-full bg-blue-400 border border-white shadow"
        >
          <ToggleIcon collapsed={collapsed} />
        </button>
      )}
    </aside>
  )
}