import Student from "./Student.js";

const student1Grades = [100, 100, 80, 80, 100]
const student2Grades = [20, 100, 80, 80, 100]
const student1 = new Student('Liza', 'Usova', 1986,  student1Grades);
const student2 = new Student('Ihor', 'Usov', 1992,  student2Grades);

student1.getAge()
student1.getAverageScore()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.absent()
student1.summary()

student2.getAge()
student2.getAverageScore()
student2.present()
student2.present()
student2.present()
student2.absent()
student2.absent()
student2.summary()
