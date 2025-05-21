// app/(dashboard)/layout.tsx
import { AppShell } from '@/components/views/AppShell'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}