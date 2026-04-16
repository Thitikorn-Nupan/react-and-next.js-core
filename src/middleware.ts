/*
   Middleware in API routes are reuseable functions executed before the main request handler logic.
   These functions are commonly used for tasks like authentication, logging, rate limiting, input validation,
   or other pre-processing tasks. Middleware will help you centralize common logic and ensure consistency across multiple API routes.
*/
import {NextApiRequest, NextApiResponse} from "next";

export default function authMiddleware(handler : any) {
    return (req: NextApiRequest, res: NextApiResponse) => {
        const headerApiKey = req.headers.apikey;
        const queryApiKey = req.query.apiKey;
        // Check if API key is present in header or query
        if ( (!headerApiKey && !queryApiKey) ||
            (headerApiKey !== process.env.API_KEY &&
                queryApiKey !== process.env.API_KEY) ) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return handler(req, res);
    };
}

// Optional: Configure which paths the middleware runs on
export const config = {
    matcher: '/api/student.v3',
}