'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
/**
   For example, to create an index page (/shallow-routing):
   Shallow routing is a routing method in Next.js in which the URL update occur without re-rendering or reloading the entire page.
   This method avoid re-executing of data fetching methods like getServerSideProps, getStaticProps, and getInitialProps.
   It provides a way to modify the URL and route state without losing the current page's context or performance.
*/
export default function ShallowRoutingComponent() {
    console.log('ShallowRoutingComponent render')
    // Router change => re-render
    const router = useRouter();
    const [step, setStep] = useState(1);

    const handleIncrementRouteChange = () => {
        const nextStep = step + 1;
        setStep(nextStep); // Update local state
        router.push(`/shallow-routing?step=${nextStep}`); // Update the URL without reloading the page
    };

    const handleDecrementRouteChange = () => {
        const nextStep = step - 1;
        setStep(nextStep); // Update local state
        router.push(`/shallow-routing?step=${nextStep}` );
    };

    const handleQueryParamStudentByIdInternalRouteChange = () => {
        router.push('/shallow-routing/'+step);
    };

    const handleQueryParamStudentByIdExternalRouteChange = () => {
        router.push('/table/student_server_side/'+step);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                 role="alert">
                <span className="font-medium">Current Step {step}</span>
            </div>
            <div className="relative flex ">
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <button type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={handleIncrementRouteChange}>
                        Increment Step
                    </button>
                    <button type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={handleDecrementRouteChange}>
                        Decrement Step
                    </button>
                    <button type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={handleQueryParamStudentByIdInternalRouteChange}>
                        Open Table Student By ID as /shallow-routing/{step}
                    </button>
                    <button type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={handleQueryParamStudentByIdExternalRouteChange}>
                        Open Table Student By ID as /table/student_server_side/{step}
                    </button>
                </div>
            </div>
        </main>
    )
}
