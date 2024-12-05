/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
  experienceTeachingReact: 0,
  experienceTeachingJava: 2,
};

cpp.setTeacher(teacher);
react.setTeacher(teacher);
java.setTeacher(teacher);

console.log(cpp.getRequirements()); // Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Available Teacher: John

console.log(react.getRequirements()); // Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // No available teacher

console.log(java.getRequirements()); // Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Available Teacher: John
