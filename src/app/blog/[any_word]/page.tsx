"use client"; // if you declare "use client" it'll see log on web blow
import {usePathname} from 'next/navigation';

/**
 Example you can render this page.tsx by *** localhost:3000/blog/<any word>
 [any_world] it's call variable folder name.
 */
export default function BlogNestedComponent() : JSX.Element {
    console.log('BlogNestedComponent render')
    const pathname = usePathname();
    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
             role="alert">
            <span className="font-medium">Blog {'=>'} [{pathname}] Component Render</span>
        </div>
    )
}