"use client"
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

// Defines the common layout structure (header, footer, etc.) for pages. , Nesting layouts If you add layout.tsx you have to render children component
export default function BlogLayout({children,}: { children: ReactNode }): JSX.Element {
    // src/blog/page.tsx render on here (src/blog/layout.tsx)
    console.log('BlogLayout render')
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                {children}
            </div>
            <button type="button"
                    onClick={() => router.push('/')}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Back To Main Page
            </button>
        </main>
    )
}