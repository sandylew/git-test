class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        const emailCheck = this.students.filter(student => student.email === studentToRegister.email)
        if (emailCheck.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} (${studentToRegister.email}) to ${this.name} class.`);
        } else {
            console.log(`${studentToRegister.email} is already registered to ${this.name}.`);
        }
        return this.students;
    }
}