 weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];
    return {
      name(number) { return names[number]; },
    
      number(name) { return names.indexOf(name); }
    };

  }();

  let myName = weekDay.name;
  console.log(myName(1));

  function evalAndReturnX(code){
        eval(code);
        return x;
  }

  console.log(evalAndReturnX("var x=2"));