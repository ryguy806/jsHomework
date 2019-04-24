//staring array
var input = [-1, 5, "cat", false, 10.2, true, "dog"];

//expanded object
var expanded = expand(input);

printArray(input);
printObject(expanded);

function printObject(obj){
    var object = document.getElementById("object");

    for(var property in obj){
        object.innerHTML += "<li>" + property + ": [" + obj[property].toString() + "]<br><br></li>";
    }
}

function printArray(param){
    var doc = document.getElementById("original");
    doc.innerHTML = "<li>Array: [" + param.toString() + "]</li>";
}

function expand(param){
    var obj = {
        strings: [],
        numbers: [],
        booleans: []
    };
    param.forEach(function(val){parse(val, obj)});
    return obj;
}

function parse(param, obj){
    if(typeof param == "string"){
        obj.strings.push(param);
    }
    else if(typeof param == "number"){
        obj.numbers.push(param);
    }
    else if(typeof param == "boolean"){
        obj.booleans.push(param);
    }
}