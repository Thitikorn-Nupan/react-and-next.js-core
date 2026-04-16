"use client"
import {useRouter} from "next/navigation";

/**
 * A page is UI that is rendered on a specific route. To create a page,
 * Add a page file inside the app directory and default export a React component.
 * Example you can render this page.tsx by *** localhost:3000/post/
 */
export default function PostComponent() {
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div
                    className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                    role="alert">
                    <span className="font-medium">Post Component Render</span>
                </div>
            </div>
            <button type="button"
                    onClick={() => router.push('/')}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Back To Main Page
            </button>
        </main>
    )
}