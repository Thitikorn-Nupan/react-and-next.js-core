/**
    Example you can render this page.tsx by *** localhost:3000/blog/<any word>
 */
export default function TableNestedComponent({ params }: { params: { any_word: string } }) : JSX.Element { // name any_word map dir name as any_word
    console.log('TableNestedComponent render')
    return (
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span className="font-medium">Table {'=>'} [{params.any_word}] Component Render</span>
        </div>
    )
}