// Next.js มีฟีเจอร์ API Routes ที่ช่วยให้สร้าง API Endpoint ได้ง่าย ๆ ในโปรเจ็ค โดยใน Next.js จะใช้ชื่อโฟลเดอร์ในการเข้าถึง path ต่าง ๆ และไฟล์ที่สามารถเข้าถึงได้จากภายนอกจะมีชื่อว่า route.js หรือ route.ts
// 3000:api/student/
import {NextRequest} from "next/server";

export async function GET() {
    const students : Student[] = await loadStudents()
    async function loadStudents() {
        const students : Student[] = []
        for (let i = 0; i < 10; i++) {
            students.push({age: 19, fullname: "alex slider "+(i+1), id: i+1, image: "/linux.png"})
        }
        return students
    }
    return Response.json({data: students,});
}

export async function POST(request: Request) {
    const body = await request.json(); // way to get body
    // console.log(body); // { age: 20, fullname: 'alex slider 1', id: 1, image: '/linux.png' }
    return Response.json({
        message: `POST method called`,
        reqBody: body,
    });
}

export async function PUT(request: NextRequest) { // use NextRequest instead Request to get query param
    const body = await request.json(); // way to get body
    const searchParams = request.nextUrl.searchParams;
    // console.log(searchParams); // URLSearchParams { 'id' => '5' }
    return Response.json({
        message: `PUT method called`,
        reqBody: body,
        reqQueryParam: searchParams.get('id'),
    });
}


export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams);
    return Response.json({
        message: `DELETE method called`,
    });
}