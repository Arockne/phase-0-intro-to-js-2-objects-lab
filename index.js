// Write your solution in this file!
const employee = {
  name: 'Daniel',
  streetAddress: '1234 example lane, Denver CO, 80128'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}