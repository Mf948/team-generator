const Employee = require("../lib/employe")
const intern = require("../lib/intern")
describe("testinng employee class", ()=>{
    it("when you pass a name in the constructor it should return a name", ()=>{
        const newEmployee = new Employee ("carlos", )
        console.log('newEmployee', newEmployee)
        expect(newEmployee.name).toBe("carlos")
    })
it("when getSchool method gets called return shool ",()=>{
    school = "hardvard"
    const newintern = new intern ('name','id','email',school)
    expect(newintern.getSchool()).toBe(school)
})
it("when role method gets called it should return a role name",()=>{
    const newintern = new intern ('name','id','email',"school")
    expect(newintern.getRole()).toBe("intern")
})
})