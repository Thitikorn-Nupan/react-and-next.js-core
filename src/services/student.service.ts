export class StudentService {

    private static students : Student[] = StudentService.loadStudents()

    public static loadStudents() : Student[] {
        const students : Student[] = []
        for (let i = 0; i < 10; i++) {
            students.push({age: 19, fullname: "alex slider "+(i+1), id: i+1, image: "/linux.png"})
        }
        return students
    }

    public static getStudents()  : Student[] {
        return this.students
    }

    public static getStudentById(id: number) : Student | null {
        const student = StudentService.students.find((student : Student) => student.id === id)
        if (student) {
            return student
        }
        return null;
    }

    public static addStudent (student : Student) : void {
        StudentService.students.push(student)
    }

    public static editStudent (newStudent : Student,id : number) : boolean {
        const student = StudentService.students.find((student : Student) => student.id === id)
        if (student) {
            student.fullname = newStudent.fullname
            student.age = newStudent.age
            student.image = newStudent.image
            return true
        } else {
            return false
        }
    }

    public static deleteStudent (id: number) : boolean {
        const lengthOld = StudentService.students.length
        StudentService.students = StudentService.students.filter((student : Student) => student.id !== id)
        const lengthNew = StudentService.students.length
        return lengthOld != lengthNew
    }
}