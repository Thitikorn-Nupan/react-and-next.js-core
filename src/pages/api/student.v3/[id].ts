// Dynamic API Route
// :3000/api/student.v3/<param>
import {NextApiRequest, NextApiResponse} from "next";
import {StudentService} from "@/services/student.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) : void {
    const { method } = req;
    const searchParams = req.query; // { 'id' => '5' }
    switch (method) {
        case 'DELETE':
            res.status(200).json({
                data: StudentService.deleteStudent(Number(searchParams['id']))
            });
            break;
        case 'GET':
            res.status(200).json({
                data: StudentService.getStudentById(Number(searchParams['id']))
            });
            break;
        default:
            break;
    }
}