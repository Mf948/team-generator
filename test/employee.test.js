const Employee = require("../lib/employe")
describe("testinng employee class", ()=>{
    it("when you pass a name in the constructor it should return a name", ()=>{
        const newEmployee = new Employee ("carlos", )
        console.log('newEmployee', newEmployee)
        expect(newEmployee.name).toBe("carlos")
    })
it("  when you pass a id in the constructor it should return a id ",()=>{
    let testValue = 123
    const newEmployee = new Employee ("carlos", testValue, 'carlos@gmail.com')

    expect(newEmployee.id).toBe(testValue)
})
it("when you call the GetName Function it should return name ",()=>{

    newEmployee = new Employee  ("carlos", 123, 'carlos@gmail.com')
    expect(newEmployee.getName()).toBe("carlos")
})
})