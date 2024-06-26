// Khai báo interface cho các đối tượng
interface obj1 {
    a: number;
  }
  
  interface obj2 {
    b: string;
  }
  
  function combine(objA: obj1, objB: obj2): object {
    return { ...objA, ...objB };
  }
  
  const objA: obj1 = {
        a: 1 
    };
  const objB: obj2 = { 
        b: 'hello'
 };
  
  console.log(combine(objA, objB))