//  An abstraction is a way of hiding the implementation details and showing only the functionality to the users
//  Abstraction hides certain details and only show the essential features of the object.
//  Abstraction:

function Employee (name, age, baseSalary) {
    this.name = name;
    this.age  = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1500;
    let calculateFinalSalary = function () {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is : '+finalSalary);
    }

    this.getEmployeeDetails = function () {
        console.log('Name : '+ this.name +' | Age : '+this.age);
        calculateFinalSalary();
    }
}
const employee = new Employee("John Doe", 23, 15000);
console.log(employee.getEmployeeDetails());