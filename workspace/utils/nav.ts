import { HomeIcon, MemberIcon, DeviceIcon, LogIcon } from '@/components/icons'
import React from 'react'

export type NavItem = {
  label: string
  href: string
  icon: React.ElementType
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '/home', icon: HomeIcon },
  { label: 'Member', href: '/member', icon: MemberIcon },
  { label: 'Device', href: '/device', icon: DeviceIcon  },
  { label: 'Log', href: '/log', icon: LogIcon },
] as const;