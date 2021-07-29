class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}
class Bootcamp {
  constructor(name, level, students) {
    this.name = name;
    this.level = level;
    this.students = students[];
  }
  registerStudent(studentToRegister) {
    const newEmail = studentToRegister.email;
    const checkEmail = this.students.filter((x) => {
      return x === newEmail;
    });
    if (studentToRegister === checkEmail) {
      console.log(
        `${studentToRegister.email} already has an email address registered in this bootcamp.`
      );
    } else {
      this.students.push([studentToRegister]);
    }
    return this.students;
  }
}




const student1 = new Student('Jim', 'jimdandy@hotmail.com', 'Chicago');
const student2 = new Student('Calvin', 'calvinad@gmail.com', 'Dallas');
const student3 = new Student('Molly', 'mollyg@gmail.com', 'New Orleans');
const student4 = new Student('Molly', 'mollyg@gmail.com', 'New Orleans');
const webDevFundamentals = new Bootcamp('Web Development Fundamentals', 'Beginner');
const node = new Bootcamp('Node.js', 'Advanced');
const fullStack = new Bootcamp('Full Stack', 'Advanced');
const frontEnd = new Bootcamp('React', 'Intermediate');

fullStack.registerStudent(student1);



