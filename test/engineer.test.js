const Employee = require("../lib/employe")
const Engineer = require('../lib/engineer')
describe("testinng employee class", ()=>{
    it("when you pass a name in the constructor it should return a name", ()=>{
        const newEmployee = new Engineer ("carlos", 123, 'carlos@gmail.com',"mf948" )
        console.log('newEmployee', newEmployee)
        expect(newEmployee.github).toBe('mf948')
    })
it('when getGithub Function gets called it should return a github username',()=>{
  let github = "mf948"
    newEmployee = new Engineer ("carlos", 123, 'carlos@gmail.com',"mf948")
    expect(newEmployee.getGithub()).toBe(github)
})
it('when Function GetEmail is called return email',()=>{
    let email = 'carlos@gmail.com"'
    const newEmployee = new Employee ('carlos',123,email)
    expect(newEmployee.getEmail()).toBe(email)
})
it("when getRole function gets called it shoudl return a role name",()=>{
    let role = 'Engineer'
    const newEmployee = new Engineer ('carlos',123,'carlos@gmail.com',role)
    expect(newEmployee.getRole()).toBe(role)
    
})
})