// "use client"; // if you declare "use client" it'll see log on web blow
import { usePathname } from 'next/navigation';
import {useRouter} from "next/router";

/**
 * A page is UI that is rendered on a specific route. To create a page,
 * Add a page file inside the app directory and default export a React component.
 * Example you can render this page.tsx by *** localhost:3000/blog/<any word>
 */
export default function BlogNestedComponent() {
    console.log('BlogNestedComponent render')
    // const pathname = usePathname();
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium">Blog {'=>'} [{id}] Component Render</span>
        </div>
    )
}