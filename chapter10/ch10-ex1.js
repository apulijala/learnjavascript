 weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    return {
      name(number) { return names[number]; },
    
      number(name) { return names.indexOf(name); }
    };

  } // ();

  let myName = weekDay.name;
  console.log(myName(1));
 // console.log(" My Name is " + myName(2));
  
  // console.log(weekDay.name(weekDay.number("Sunday")));
  // → Sunday