//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets5;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {
    let stack = [];
    let openBrack = ["(","[","{"];
    let closeBrack = [")","]","}"];
    const pairedBracks = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (i = 0; i < brackets.length; i++) {
        let item = brackets[i];

        if (openBrack.includes(item)){
            stack.push(item);
            continue;
        }

        if (closeBrack.includes(item)){
            popped = stack.pop();
            if (pairedBracks[popped] != item) return false; // closing bracket doesn't match previous bracket
            continue;
        }

        return false; // if anything other than a bracket is detected
    }
    return stack[0] === undefined ? true : (false, "all brackets not closed");
}