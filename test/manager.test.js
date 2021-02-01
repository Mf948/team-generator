const Employee = require("../lib/employe")
const manager = require("../lib/manager")

describe("testinng employee class", ()=>{
    it("when you pass a name in the constructor it should return a name", ()=>{
        const newEmployee = new Employee ("carlos", )
        console.log('newEmployee', newEmployee)
        expect(newEmployee.name).toBe("carlos")
    })
it("when Office number method gets called it should return the numer of the office",()=>{
  let officeNumber = 2
    const newManager = new manager ('name','id','email',officeNumber,"manager")
    expect(newManager.getOfficeNumber()).toBe(officeNumber)
})
it("when role method gets called it should return a role name",()=>{
      const newManager = new manager ('name','id','email',"officeNumber")
      expect(newManager.getRole()).toBe("manager")
  })
})