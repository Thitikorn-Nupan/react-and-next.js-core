import Image from "next/image";

/**
    Example you can render this page.tsx by *** localhost:3000/table/student_server_side
 */
export default async function StudentServerSideComponent() :Promise<JSX.Element > {
    const students : Student[] = await loadStudents()

    async function loadStudents() {
        const students : Student[] = []
        for (let i = 0; i < 10; i++) {
            students.push({age: 19, fullname: "alex slider "+(i+1), id: i+1, image: "/linux.png"})
        }
        return students
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <h5 className={"mb-4"}>Student Table Server Side</h5>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fullname
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {students && students.map((student: Student, index: number) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {student.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        <Image className="w-10 h-10 rounded-full" width={45} height={45} src={student.image} alt="..."/>
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.fullname}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.age}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    )
}