// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

// const newEmployee = new Employee("John", 1, "john@email.com")

// const newManager = new Manager("Mary", 2, "mary@mail.com", 12345)

// console.log(newEmployee.officeNumber);

// console.log(newManager.officeNumber);