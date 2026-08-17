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
    const { method } = req;
    switch (method) {
        case 'GET':
            const students : Student[] = []
            for (let i = 0; i < 10; i++) {
                students.push({age: 19, fullname: "alex slider "+(i+1), id: i+1, image: "/linux.png"})
            }
            res.status(200).json({data: students});
            break;
        case 'POST':
            const body = req.body; // way to get body ex,  { age: 20, fullname: 'alex slider 1', id: 1, image: '/linux.png' }
            res.status(201).json({
                message: `POST method called`,
                reqBody: body,
            });
            break;
        case 'PUT':
            const searchParams = req.query; // ex , { 'id' => '5' }
            res.status(200).json({
                message: `PUT method called`,
                reqBody: req.body,
                reqQueryParam: searchParams['id'],
            });
            break;
        default:
            break;
    }
}