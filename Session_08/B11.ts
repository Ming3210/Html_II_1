interface Person {
    name: string;
    age: number;
  }
  
  interface Address {
    street: string;
    city: string;
  }
  
  type PersonWithAddress = Person & Address;
  
  let fullInfo: PersonWithAddress = {
    name: 'Minh',
    age: 30,
    street: 'Địa ngục (666 = 36),Việt Nam',
    city: 'Anytown'
  };
  
  console.log(fullInfo)