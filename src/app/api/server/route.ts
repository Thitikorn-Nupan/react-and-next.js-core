// Now, if you visit the URL '/api/basic', you will see the following JSON response:
import {NextApiRequest, NextApiResponse} from "next";

export async function GET() {
    return Response.json({
        message: `Hello World`,
    });
}