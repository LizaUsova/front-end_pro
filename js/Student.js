function Student(name, lastName, yearOfBirth, studentGrades) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.studentGrades = studentGrades;
    this.attendance = new Array(25)
    this.currentAttendanceIndex = 0;

}

Student.prototype.present = function () {
    if(this.currentAttendanceIndex >= this.attendance.length) throw new Error('Attendance record is full');

    this.attendance[this.currentAttendanceIndex] = true;
    this.currentAttendanceIndex++;
}

Student.prototype.absent  = function () {
    if(this.currentAttendanceIndex >= this.attendance.length) throw new Error('Attendance record is full');

    this.attendance[this.currentAttendanceIndex] = false;
    this.currentAttendanceIndex++;
}

Student.prototype.getAge = function () {
        if(typeof this.yearOfBirth !== 'number') throw new Error('Year of birth should be a number');
        const currentYear  = new Date().getFullYear();
        const age = currentYear - this.yearOfBirth;
    }

    Student.prototype.getAverageScore = function () {
        if(!Array.isArray(this.studentGrades)) throw new Error('Student grades should be array');
        if(this.studentGrades.length === 0) throw new Error('Array of grades cannot be empty')

        const sum = this.studentGrades.reduce((acc, item) => acc + item, 0);
        const average = sum / this.studentGrades.length;
        console.log(average);
    }

    Student.prototype.summary = function () {
        const filled = this.attendance.slice(0, this.currentAttendanceIndex);
        const presentCount = filled.filter(val => val === true).length;
        const averageAttendance = presentCount / filled.length;
        const roundedAverage = Number(averageAttendance.toFixed(1));

        const sumGarde = this.studentGrades.reduce((acc, item) => acc + item, 0);
        const averageGrade = sumGarde / this.studentGrades.length;

        console.log(`Середній бал: ${averageGrade.toFixed(2)}`);
        console.log(`Середня відвідуваність: ${roundedAverage}`);

        if(averageGrade >= 90 && roundedAverage >= 0.9) {
            console.log('Молодець!')
        } else if ((averageGrade >= 90 && roundedAverage <= 0.9) || (averageGrade <= 90 && roundedAverage >= 0.9)) {
            console.log('Добре, але можна краще')
        } else {
            console.log('Редиска!')
        }
    }


export default Student