function Foo() {
    if (!new.target) {
      console.log("false");
    }
  }

  // new Foo() 
  Foo() 

  

  /*let person2 = Object.assign({}, person1)
  person1.name = 'Doe'
  console.log(person2);*/