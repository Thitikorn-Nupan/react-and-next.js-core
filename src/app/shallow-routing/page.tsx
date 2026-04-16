import Image from 'next/image'

/**
 * A page is UI that is rendered on a specific route. To create a page,
 * Add a page file inside the app directory and default export a React component.
 * For example, to create an index page (/):
 */
// Note ,In Next.js 13, logs typically "disappear" because of the distinction between Server Components and Client Components introduced with the App Router. If you want to see check on terminal or cmd
/**
   By default, layouts and pages are Server Components, which lets you fetch data and render parts of your UI on the server,
   optionally cache the result, and stream it to the client. When you need interactivity or browser APIs,
   you can use Client Components to layer in functionality.
* */
export default function RootComponent() {
    console.log('RootComponent render')
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mt-[500px]"
                    src={"/next.svg"}
                    alt="Next.js Logo"
                    width={580}
                    height={137}
                    priority
                />
            </div>
        </main>
    )
}
