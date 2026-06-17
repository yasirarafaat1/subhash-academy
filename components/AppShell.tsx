'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NoticePushAuto from '@/components/NoticePushAuto'

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdminPage = pathname === '/dataPanel'

    return (
        <div className="flex min-h-screen flex-col">
            {!isAdminPage && <Navbar />}
            <main className="flex-1">
                {!isAdminPage && <NoticePushAuto />}
                {children}
            </main>
            {!isAdminPage && <Footer />}
        </div>
    )
}
