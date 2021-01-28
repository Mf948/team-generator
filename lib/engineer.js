const Employee = require("./employe");

class Engineer extends Employee{
    constructor(name,id,email,github, role ){
        this.github = github
        this.role = "Engineer"
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return thid.role
    }
}
  
