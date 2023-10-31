const employees = [
    {id: 1, name: 'David', age: 25,},
    {id: 2, name: 'Amber', age: 24,},
    {id: 3, name: 'Celine', age: 28,},
    {id: 4, name: 'ZeroTwo', age: 27,},
    {id: 5, name: 'Louis', age: 29,},
]

// Easy I
// Write the function to check id of all employees, 
// if id of all employees are positive print 'Not found invalid ID'.
// but if id of some employees is zero or negative print 'Found invalid ID'.
function checkInvalidId(employee){
    return employee.id > 0 
}
if (employees.every(checkInvalidId)) console.log('Not found invalid ID')
else console.log('Found invalid ID')

// Easy II
// Write the function to check name of all employees, 
// if name of all employees are string print 'Not found error name'.
// but if name of some employees isn't string print 'Found error name'.
const checkNameError = (employee) => typeof employee.name === 'string'
if (employees.every(checkNameError)) console.log('Not found error name')
else console.log('Found error name')

// Medium I
// Write the function to check age of all employees, 
// if age of all employees more than or equal 20 print 'All of them become one's legal age'.
// but if age of some employees less than 20 print 'Some of them become one's legal age'.
// but if age of all employees less than 20 print 'None of them become one's legal age'.
if (employees.every((employee) => employee.age >= 20)) console.log("All of them become one's legal age")
else if (employees.every((employee) => employee.age < 20)) console.log("None of them become one's legal age")
else console.log("Some of them become one's legal age")