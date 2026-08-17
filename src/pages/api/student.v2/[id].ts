// :3000/api/student.v2/<param>
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) : void {
    const { method } = req;
    switch (method) {
        case 'DELETE':
            const searchParams = req.query; // { 'id' => '5' }
            res.status(200).json({
                message: `DELETE method called`,
                reqBody: req.body,
                reqQueryParam: searchParams['id'],
            });
            break;
        default:
            break;
    }
}