let input = document.querySelector('input');
let first = "";
function myfunction(obj) {
    first += obj.value;
    input.value = first;
}
function result() {
    let str = first.split('');
    let firsthalf = '';
    let i = 0;
    while (str[i] == '.' || str[i] == '0' || str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' || str[i] == '6' || str[i] == '7' || str[i] == '8' || str[i] == '9') {
        firsthalf += str[i];
        i++;
    }
    firsthalf = parseInt(firsthalf, 10);
    let temp = i;
    i++;
    let secondhalf = '';
    while (i < str.length) {
        secondhalf += str[i];
        i++;
    }
    secondhalf = parseInt(secondhalf, 10);
    let endresult;

    if (str[temp] == '+') {
        endresult = firsthalf + secondhalf;
    } else if (str[temp] == '-') {
        endresult = firsthalf - secondhalf;
    } else if (str[temp] == '*') {
        endresult = firsthalf * secondhalf;
    } else if (str[temp] == '/') {
        endresult = firsthalf / secondhalf;
    }

    input.value = endresult;

    first = endresult;
}
function clear() {
    console.log("yes");
}