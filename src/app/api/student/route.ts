// Next.js มีฟีเจอร์ API Routes ที่ช่วยให้สร้าง API Endpoint ได้ง่าย ๆ ในโปรเจ็ค โดยใน Next.js จะใช้ชื่อโฟลเดอร์ในการเข้าถึง path ต่าง ๆ และไฟล์ที่สามารถเข้าถึงได้จากภายนอกจะมีชื่อว่า route.js หรือ route.ts
export async function GET() {
    return Response.json({message: `Hello World`,});
}