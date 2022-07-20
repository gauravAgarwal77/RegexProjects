// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'CLEAR') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }



// function display(value)
// {
//     document.getElementById("screen").value += value;
// }

// function clearScreen() {
//     document.getElementById("screen").value = "";
// }

//  calculate() {
//     var p = document.getElementById("screen").value;
//     var q = eval(p);
//     dfunctionocument.getElementById("screen").value = q;
// }


//function for displaying values
function display(val)
{
document.getElementById("screen").value+=val;
 }


function clearScreen() {
         document.getElementById("screen").value = "";
     }

     function solve(){

        let x = document.getElementById('screen').value
    
        let y = eval(x);
    
        document.getElementById('screen').value = y.toFixed(4);
    
        return y
    
    }