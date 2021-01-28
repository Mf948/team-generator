const inquire = require("inquirer")
const { describe } = require("yargs")

inquire.prompt([

    {
        type: "input",
        name: "mail",
        message:"what is your email",
        validate: function (input) 
        {
         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)
          {
            return (true)
          }
            alert("You have entered an invalid email address!")
            return (false)
        }
    }
]).then(function(response){
    const data =  `${response.mail}`
})