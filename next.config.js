/*
Redirecting in Next.js using redirect() method
The redirects option in the next.config.js file allows you to redirect an incoming request path to a different destination path.
This is useful when you change the URL structure of pages or have a list of redirects that are known ahead of time.
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/blogggg",        // The path redirect from
                destination: "/blog",     // The path redirect to
                permanent: true,           // Permanent redirecting
            },
            {
                source: "/blog/abouttt",
                destination: "/blog/about",
                permanent: true,
            }
        ];
    },
}

module.exports = nextConfig
