// req ex, 3000:api/student/<id as 1 , 2 , 3 , ...>
export async function DELETE(  request: Request, { params }: { params: { id: string } }) : Promise<Response> {
    const id = params.id; // Access the parameter from the slash path
    return Response.json({
        message: `DELETE method called`,
        reqParam : id
    });
}