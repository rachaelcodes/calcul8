let calculation = [];
let number = '';
let answer = 0;
document.getElementById('1').addEventListener('click', function(event) {
    number+='1';
  }, false);
  document.getElementById('2').addEventListener('click', function(event) {
    number+='2';
  }, false);
document.getElementById('3').addEventListener('click', function(event) {
    number+='3';
  }, false);
document.getElementById('4').addEventListener('click', function(event) {
    number+='4';
  }, false);
document.getElementById('5').addEventListener('click', function(event) {
    number+='5';
  }, false);
document.getElementById('6').addEventListener('click', function(event) {
    number+='6';
  }, false);
document.getElementById('7').addEventListener('click', function(event) {
    number+='7';
  }, false);
document.getElementById('8').addEventListener('click', function(event) {
    number+='8';
  }, false);
document.getElementById('9').addEventListener('click', function(event) {
    number+='9';
  }, false);
document.getElementById('0').addEventListener('click', function(event) {
    number+='0';
  }, false);
document.getElementById('point').addEventListener('click', function(event) {
    number+='.';
  }, false);

document.getElementById('plus').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('+');
      document.getElementById('input').appendChild(document.createTextNode(number + "+"));
      number = '';
      }
  }, false);
document.getElementById('minus').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('-');
      document.getElementById('input').appendChild(document.createTextNode(number + "-"));
      number = '';
      }
  }, false);
document.getElementById('multiply').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('*');
      document.getElementById('input').appendChild(document.createTextNode(number + "x"));
      number = '';
      }
  }, false);
document.getElementById('divide').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('/');
      document.getElementById('input').appendChild(document.createTextNode(number + '\u00f7' ));
      number = '';
      }
  }, false);
document.getElementById('equals').addEventListener('click', function(event) {
    document.getElementById('input').appendChild(document.createTextNode(number));
      calculation.push(parseFloat(number));
      console.log(calculation);
      calc(calculation);
      //document.getElementById('input').appendChild(document.createTextNode(calculation));
      document.getElementById('answer').appendChild(document.createTextNode(answer));
    }, false);

function calc(array) {
  for(var i = 0; i<array.length; i++){
    if(array[i]=='*'){
      array.splice(i-1, 3, (array[i-1]*array[i+1]));
      i--;
    }
    else if(array[i]=='/'){
      array.splice(i-1, 3, (array[i-1]/array[i+1]));
      i--;
    }
  }
  for(var j = 0; j<array.length; j++){
    if(array[j]=='+'){
      array.splice(j-1, 3, (array[j-1]+array[j+1]));
      j--;
    }
    else if(array[j]=='-'){
      array.splice(j-1, 3, (array[j-1]-array[j+1]));
      j--;
    }
  }
  answer = array;
  return answer;
}
