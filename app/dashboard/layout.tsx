'use client'
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';


import Sidebar from "@/components/sidebar";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (pathname === '/dashboard') {
            router.push('/dashboard/home');
        }
    }, [pathname]);

    const [sidebarOpen, setSidebarOpen] = useState(false);



    return (
        <React.Fragment>
            <div className='bg-[#f5f5f5]'>
                <div className="flex h-screen overflow-hidden">
                    <Sidebar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


