// Route Handlers
// Route Handlers in Next.js are used to create server-side API endpoints that can handle requests from the frontend or any external client.
// These handlers are defined using a file-based routing system and can be used to define server-side logic for fetching data, submitting forms, or implementing server-side operations.
// Next.js มีฟีเจอร์ API Routes ที่ช่วยให้สร้าง API Endpoint ได้ง่าย ๆ ในโปรเจ็ค โดยใน Next.js จะใช้ชื่อโฟลเดอร์ในการเข้าถึง path ต่าง ๆ และไฟล์ที่สามารถเข้าถึงได้จากภายนอกจะมีชื่อว่า route.js หรือ route.ts
// 3000:api/student/
// Route Handlers in Next.js are created by adding a 'route.js' or 'route.ts' file inside the app directory.
// Any route.js/ts file inside the app/api directory is treated as an API endpoint.
// Any next.js component can call this API using the specified endpoint.
// For example, if you create a route.js file at 'app/api/hello/route.js', the endpoint will be '/api/hello'.
import {NextRequest} from "next/server";

export async function GET() : Promise<Response> {
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

export async function POST(request: Request) : Promise<Response> {
    const body = await request.json(); // way to get body ex , { age: 20, fullname: 'alex slider 1', id: 1, image: '/linux.png' }
    return Response.json({
        message: `POST method called`,
        reqBody: body,
    });
}

export async function PUT(request: NextRequest) : Promise<Response> { // use NextRequest instead Request to get query param
    const body = await request.json(); // way to get body
    const searchParams = request.nextUrl.searchParams; // { 'id' => '5' }
    return Response.json({
        message: `PUT method called`,
        reqBody: body,
        reqQueryParam: searchParams.get('id'),
    });
}

