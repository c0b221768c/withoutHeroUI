'use client'

import { ReactNode } from 'react'
import { Header } from '@/components/layouts/Header'
import { SideNav}

interface AppShellProps {
  children: ReactNode
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex flex-col h-screen">
      {/* 上部固定ヘッダー */}
      <Header />

      {/* 下部: サイドバー＋メイン */}
      <div className="flex flex-1 overflow-hidden">
        <SideNav />

        <main className="bg-black w-full">
          {children}
        </main>
      </div>
    </div>
  )
}