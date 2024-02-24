import {User, Student} from "./user.js";
import {sayHi} from "./say-hi.js";
let user = new User("John");
console.log(user.name);



let student = new Student("Joan", "KhPI");
console.log(student.name, student.university);
sayHi(student.name);