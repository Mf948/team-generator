const inquire = require("inquirer")
const { describe } = require("yargs")
const fs  = require('fs')
inquire.prompt([
    {
        type: "input",
        name: "manageremail",
        message: "Enter your manager's email: ",
        // tough one to validate emailaddress
         validate: input=>{
           var e = /\S+@\S+\.\S+/
           if (e.test(input)===true){
             return true
           }
           return "please enter valid email address"
         }
      },
]).then(function(response){
    const data =  `${response.manageremail} `
    fs.writeFile("index.html", data, function(error){
                //True             //False (else)
        error ? console.error(error) : console.log('success')
    })
})