// ------ERROR TYPES------
// 0: Power operator must succeed number
// 1: Cannot have two operands next to each other

function calculate(input){
    let result = 0;

    input = input.replace(/ /g,'');
    let charSet = input.split("");

    if(isNaN(parseInt(charSet[0]))){
        return "Must start with number";
    }

    let joinedSet = [];

}

function joinNumsAndPowers(charSet){
    let joinedSet =[];
    let addItem = "";

    for(i=0; i<charSet.length; i++){
        if(!isNan(parseInt(charSet[i]))){
            addItem += charSet[i]
        }else if(charSet[i]==="^"){
            if(isNan(charSet[i-1])){
                return "0";
            }
            addItem+=charSet[i];
        }else{
            if(addItem===""){
                return "1";
            }
            joinedSet.push(addItem);
            addItem = "";
            addItem+=charSet[i];
            joinedSet.push(addItem);
            addItem = "";
        }
    }
    joinedSet.push(addItem);
}