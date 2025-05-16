
import Apartment from "./Apartment.js";
import Human from "./Human.js";
import Building from "./Building.js";


const h = new Human('Liza', 'female')
const h1 = new Human('Vova', 'male')
const h2 = new Human('Liza', 'female')



const building = new Building(5);

const a1 = new Apartment();
const a2 = new Apartment();
const a3 = new Apartment();

a1.setResident(h);
a2.setResident(h1);

building.addApartment(a1);
building.addApartment(a2);
building.addApartment(a3);









// const s = new Student('John', 'Dou', 1997);
//
// s.present()
// s.setGrade(90)
//
// s.absent()
//
// s.present()
// s.setGrade(100)
//
// s.present()
// s.setGrade(100)
//
// console.log(s.summary());
//
//
// console.log(s);
// console.log(s.avgGrade);
// console.log(s.avgAttendance);