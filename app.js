/*let person={
    name:"ahsan",
    year:"forth_semeter",
    Roll_non:"12312",
setYear(saal){
    this.year=saal;
    
},

};
console.log(this.year);
/*let person = {
    name: "ahsan",
    year: "forth_semeter",
    Roll_non: "12312",
    setYear(saal) {
      this.year = saal;
      console.log(this.year);
    }
  };
  
  console.log(person.year); // Output: "forth_semeter"
  
  person.setYear("fifth_semeter");
  console.log(person.year); // Output: "fifth_semeter"*/
 /* var a=new Date();
  d=a.getFullYear();

  console.log('date is today' + " "+(d))
  let students={
    NAME:"AHSAN",
    CLASS:"FORTH_SEMESTER",

  };
  let out_put=Object.keys(students).map(function(e){
    return students[e]
  })
  console.log(out_put);
   console.log(students);*/
   let boy={
    name:"ahsan",
    Roll_no:222016,
    full_name:function(){
      return this.full_name + "and" +this.Roll_no;
    }
  
   };

 
  