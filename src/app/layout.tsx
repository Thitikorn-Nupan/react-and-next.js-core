"use client";
import {Inter} from 'next/font/google'
import {ReactNode, useState} from "react";
import Link from "next/link";
import Image from "next/image";
// add all css class
import './globals.css'
import Head from "next/head";

const inter = Inter({subsets: ['latin']}) // work with import './globals.css'

// Defines the common layout structure (header, footer, etc.) for pages.
type RouteLink = {
    label: string
    to: string
}
export default function RootLayout({children}: { children: ReactNode }): JSX.Element {
    console.log('RootLayout render')
    const [subRouterLinkClick, setSubRouterLinkClick] = useState(false)
    const routeLinks: { routeLink: RouteLink, routeLinks: RouteLink[] }[] = [
        {routeLink: {label: 'home', to: '/home'}, routeLinks: []},
        {routeLink: {label: 'about', to: '/about'}, routeLinks: []},
        {routeLink: {label: 'contact', to: '/contact'}, routeLinks: []},
        {
            routeLink: {label: 'program', to: ''}, routeLinks: [
                {label: 'table', to: '/table'},
                {label: 'blog', to: '/blog'},
                {label: 'post', to: '/post'},
                {label: 'shallow routing', to: '/shallow-routing'},
                {label: 'apply api', to: '/apply-api'},
            ]
        },
    ]

    const navigationBar = (): JSX.Element => {
        console.log('Navigation bar')
        return (
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image width={50} height={50} src="https://flowbite.com/images/logo.svg" className="h-8"
                               alt="Flowbite Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {routeLinks.map((data, index) => (
                                data.routeLinks.length === 0 ?
                                    (
                                        <li key={index}>
                                            <Link
                                                href={data.routeLink.to}
                                                className="cursor-pointer block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                aria-current="page">{data.routeLink.label}
                                            </Link>
                                        </li>
                                    ) :
                                    (
                                        <li key={index}>
                                            <button
                                                onClick={() => setSubRouterLinkClick(!subRouterLinkClick)}
                                                id="dropdownNavbarLink"
                                                data-dropdown-toggle="dropdownNavbar"
                                                className="cursor-pointer flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                                {data.routeLink.label}
                                                <svg
                                                    className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                                </svg>
                                            </button>
                                            <div id="dropdownNavbar"
                                                 className={"z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 " + (subRouterLinkClick ? "absolute" : "hidden")}>
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                    aria-labelledby="dropdownLargeButton">
                                                    {data.routeLinks.map((data, index) => (
                                                        <li key={index + 100}>
                                                            <Link
                                                                href={data.to}
                                                                onClick={() => setSubRouterLinkClick(!subRouterLinkClick)}
                                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                {data.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    )
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    // src/page.tsx render on here (src/layout.tsx) tru {children}
    return (
        <html lang="en">
        <body className={inter.className}>
        {/**
         The <Head> component in Next.js is used to modify the <head> section of a page.
         This tag will allow you to set title, metadata, external links and other essential SEO feature to your webpage.
         */}
        {/**
         now it's not working
        <Head>
            {   // Note!!, Define Navigation bar inside header will be common develop use
                navigationBar()
            }
        </Head>
        */}
        {
            navigationBar()
        }
        {  // All router render thu  {children} **  Place children where you want to render a page or nested layout
            children
        }
        </body>
        </html>
    )
}
