var ranges = [[65, 91], [75,100], [85,120],[90,130]];
var script1 = {
    name : "Script One",
    ranges : ranges
}

var script2 = {
    name : "Script Two",
    ranges : ranges
}

scripts = [script1, script2];

function characterScript(characterCode) {
    for (script of scripts) {
        if (script.ranges.some(

            ([from, to]) => {
                 return characterCode > from && characterCode < to;
            }
        )) 
        {
            return script;
        }
    }
    return null;
}
console.log(characterScript(85));

function countBy(items, groupName) {
    
    let result = [];
    for (item of items) {
        name = groupName(item);
        var i = result.findIndex( arg => arg.name == name );
        if (i < 0) {
            result.push({name : name , count : 1});
        }else {
            result[i].count++;
        }
    }
    return result;
}


console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
