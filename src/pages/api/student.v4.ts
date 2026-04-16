import {NextApiRequest, NextApiResponse} from "next";
import {StudentService} from "@/services/student.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) : void {
    const { method } = req;
    const body = req.body; // way to get body ex,  { age: 20, fullname: 'alex slider 1', id: 1, image: '/linux.png' }
    switch (method) {
        case 'GET':
            res.status(200).json({
                data: StudentService.getStudents()
            });
            break;
        case 'POST':
            if (body) {
                const newStudent : Student = {
                    id: body.id,
                    image: body.image,
                    fullname: body.fullname,
                    age: body.age
                }
                StudentService.addStudent(newStudent)
                res.status(201).json({
                    data : true
                });
            }
            break;
        case 'PUT':
            const searchParams = req.query; // ex , { 'id' => '5' }
            if (body) {
                const newStudent : Student = {
                    id: 0,
                    image: body.image,
                    fullname: body.fullname,
                    age: body.age
                }
                const id = Number(searchParams['id']);
                res.status(202).json({
                    data : StudentService.editStudent(newStudent!,id)
                });
            }
            break;
        default:
            break;
    }
}