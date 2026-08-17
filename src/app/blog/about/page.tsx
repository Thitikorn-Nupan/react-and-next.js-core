/**
    Example you can render this page.tsx by *** localhost:3000/blog/about/
 */
export default function BlogAboutComponent() : JSX.Element {
    console.log('BlogAboutComponent render')
    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium">Blog {'=>'} About Component Render</span>
        </div>
    )
}