// Require statements
const inquirer = require("inquirer");
const mysql = require("mysql");
const logo = require("asciiart-logo")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ripremus23",
    database: "employees"
});



// function init

// function init () {
//     const logoText = logo({ name: "Employee Manager" }).render();
//     console.log(logoText);

//     // Load our prompts
//     loadPrompts();
// }

// function loadPrompts() {
//     inquirer.prompt ({
//         type: 'list',
//         name: "choice",
//         message: "What would you like to do?",
//         choice: [{
//             name: "View All Employees",
//             value: "VIEW_EMPLOYEES"
//         }]
//     })

//     // Switch statement
//     switch (choice) {
//         case "VIEW_EMPLOYEES":
//             return viewEmployees();
//     }



// }

// DB.viewEmployees()


inquirer.prompt({
    type: 'list',
    name: "choice",
    message: "What would you like to do?",
    choices: ["View Employees", "View Roles", "View Departments", "Add Employees", "Add Roles", "Add Departments", "Update Employee Roles"]
}).then(function (answerData) {
    console.log(answerData)

    if (answerData.choice === "View Employees") {
        connection.query("SELECT * FROM employee;", (error, employees) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(employees)
        })
    }

    else if (answerData.choice === "View Roles") {
        connection.query("SELECT * FROM role;", (error, roles) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(roles)
        })
    }

    else if (answerData.choice === "View Departments") {
        connection.query("SELECT * FROM department;", (error, departments) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(departments)
        })
    }
    // want to put parameter "answerdata" here in values 
    else if (answerData.choice === "Add Employees") {
        inquirer.prompt([
            {
            type: 'input',
            name: 'first_name',
            message: 'First name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Last name'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Role id'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Manager id'
        }
        
    ]
        
        
        )
        .then(answer => {
        connection.query("INSERT INTO employee SET ?;", {first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role_id, manager_id: answer.manager_id}, (error, employees) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(employees)
        })
    })
    }

    // else if (answerData.choice === "Add Roles") {
    //     connection.query("INSERT INTO role (title, salary, department_id) VALUES ();", (error, role) => {
    //         if (error) {
    //             console.error('An error occurred while executing the query')
    //             throw error
    //         }
    //         console.table(role)
    //     })
    // }

    else if (answerData.choice === "Add Roles") {
        inquirer.prompt([
            {
            type: 'input',
            name: 'title',
            message: 'Title'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Salary'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Department id'
        }
        
    ]
        
        
        )
        .then(answer => {
        connection.query("INSERT INTO role SET ?;", {title: answer.title, salary: answer.salary, department_id: answer.department_id}, (error, role) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(role)
        })
    })
    }
    // else if (answerData.choice === "Add Departments") {
    //     connection.query("INSERT INTO department VALUES ();", (error, department) => {
    //         if (error) {
    //             console.error('An error occurred while executing the query')
    //             throw error
    //         }
    //         console.table(department)
    //     })
    // }
    else if (answerData.choice === "Add Departments") {
        inquirer.prompt([
            {
            type: 'input',
            name: 'department',
            message: 'Department name'
        }
        
    ]
        
        
        )
        .then(answer => {
        connection.query("INSERT INTO department SET ?;", {name: answer.department}, (error, department) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(department)
        })
    })
    }

    // else if (answerData.choice === "Update Employees Roles") {
    //     connection.query("UPDATE role SET ?);", (error, employeeRoles) => {
    //         if (error) {
    //             console.error('An error occurred while executing the query')
    //             throw error
    //         }
    //         console.table(employeeRoles)
    //     })
    // }

    else if (answerData.choice === "Update Employee Roles") {
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Update Title'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Update Salary'
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Update Department id'
            }
            
        
        
    ]
        
        
        )
        .then(answer => {
        connection.query("INSERT INTO role SET ?;", {title: answer.title, salary: answer.salary, department_id: answer.department_id}, (error, role) => {
            if (error) {
                console.error('An error occurred while executing the query')
                throw error
            }
            console.table(role)
        })
    })
    }
})