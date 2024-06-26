interface Person  {
    name: string,
    age: number,
}
interface Employee{
    employeeId:number
}
type employee = Person & Employee

let employee: employee = {
    name: 'MinhKngu',
    age: 18,
    employeeId: 2,
  };

  console.log(employee);
  