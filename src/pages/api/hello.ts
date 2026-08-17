/**
    API Routes in Next.js
    How it Works?
    API Routes in Next.js are created by adding a typescript file inside the 'pages/api' directory.
    The file name becomes the endpoint of the API.
    Any file inside the folder 'pages/api' is mapped to /api/* and will be treated as an API endpoint instead of a page.
    For example, if you create a file named 'hello.js' inside the 'pages/api' directory, the endpoint will be '/api/hello'
*/
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) : void {
    res.status(200).json({ message: 'Hello, Next.js API!' });
}