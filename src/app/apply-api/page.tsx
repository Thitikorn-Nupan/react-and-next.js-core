"use client"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

/**
  Example you can render this page.tsx by *** localhost:3000/apply-api/
*/
export default function ApplyAPIComponent(): JSX.Element {
    const router = useRouter();
    const [response, setResponse] = useState(null);

    useEffect(() => console.log(response) ,[response])

    const callApi = async (method : string) : Promise<void> => {
        try {
            let res;
            const student : Student = {
                id: 11,
                image: "/linux.png",
                fullname: "test test",
                age: 19
            }
            switch (method) {
                case "POST":
                    res = await fetch('/api/student.v3', {
                        method,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body : JSON.stringify(student)
                    });
                    break;
                case "PUT":
                    res = await fetch('/api/student.v3?id='+1, {
                        method,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body : JSON.stringify(student)
                    });
                    break;
                case "DELETE":
                    res = await fetch('/api/student.v3/'+1, {method});
                    break;
            }
            setResponse(await res?.json());
        } catch (error) {
            console.log('error => ', error);
        }
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div
                    className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                    role="alert">
                    <span className="font-medium">Apply API Component Render</span>
                </div>
            </div>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
                <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
            </ul>
            <div className="inline-flex rounded-md shadow-xs" role="group">
                <button type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => callApi('POST')}>
                    Create
                </button>
                <button type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => callApi('PUT')}>
                    Update
                </button>
                <button type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => callApi('DELETE')}>
                    Delete
                </button>
            </div>
            <button type="button"
                    onClick={() => router.push('/')}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Back To Main Page
            </button>
        </main>
    )
}