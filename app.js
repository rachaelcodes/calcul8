let calculation = [];
let number = '';
let answer = 0;
document.getElementById('1').addEventListener('click', function(event) {
    number+='1';
    document.getElementById('input').appendChild(document.createTextNode('1'));
  }, false);
  document.getElementById('2').addEventListener('click', function(event) {
    number+='2';
    document.getElementById('input').appendChild(document.createTextNode('2'));
  }, false);
document.getElementById('3').addEventListener('click', function(event) {
    number+='3';
    document.getElementById('input').appendChild(document.createTextNode('3'));
  }, false);
document.getElementById('4').addEventListener('click', function(event) {
    number+='4';
    document.getElementById('input').appendChild(document.createTextNode('4'));
  }, false);
document.getElementById('5').addEventListener('click', function(event) {
    number+='5';
    document.getElementById('input').appendChild(document.createTextNode('5'));
  }, false);
document.getElementById('6').addEventListener('click', function(event) {
    number+='6';
    document.getElementById('input').appendChild(document.createTextNode('6'));
  }, false);
document.getElementById('7').addEventListener('click', function(event) {
    number+='7';
    document.getElementById('input').appendChild(document.createTextNode('7'));
  }, false);
document.getElementById('8').addEventListener('click', function(event) {
    number+='8';
    document.getElementById('input').appendChild(document.createTextNode('8'));
  }, false);
document.getElementById('9').addEventListener('click', function(event) {
    number+='9';
    document.getElementById('input').appendChild(document.createTextNode('9'));
  }, false);
document.getElementById('0').addEventListener('click', function(event) {
    number+='0';
    document.getElementById('input').appendChild(document.createTextNode('0'));
  }, false);
document.getElementById('point').addEventListener('click', function(event) {
    number+='.';
    document.getElementById('input').appendChild(document.createTextNode('.'));
  }, false);
document.getElementById('toggle').addEventListener('click', function(event) {
      if (parseFloat(number) > 0){
        number = '-'+number;
          if (document.getElementsByClassName('op').length>0) {
            document.getElementsByClassName('op')[document.getElementsByClassName('op')
            .length-1].appendChild(document.createTextNode('-'));
          }
          else {
            document.getElementById('input').insertBefore(document.createTextNode('-'),
            document.getElementById('input').firstChild);
          }
      }
      else if (parseFloat(number) < 0) {
        number = number.slice(1);
        if (document.getElementsByClassName('op').length>0) {
          document.getElementsByClassName('op')[document.getElementsByClassName('op')
          .length-1].removeChild(document.getElementsByClassName('op')[document.getElementsByClassName('op')
          .length-1].lastChild);
        }
        else {
          document.getElementById('input').removeChild(document.getElementById('input').firstChild);
        }
      }
    }, false);

document.getElementById('plus').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('+');
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('+'));
      number = '';
      }
  }, false);
document.getElementById('minus').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('-');
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('-'));
      number = '';
      }
  }, false);
document.getElementById('multiply').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('*');
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('x'));
      number = '';
      }
  }, false);
document.getElementById('divide').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('/');
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('\u00f7'));
      number = '';
      }
  }, false);
document.getElementById('equals').addEventListener('click', function(event) {
      if(number===''){
        calculation.pop();
        document.getElementById('input').removeChild(document.getElementById('input').lastChild);
      }
      else {calculation.push(parseFloat(number));}
      console.log(calculation);
      calc(calculation);
      document.getElementById('answer').appendChild(document.createTextNode(answer));
      number = '';
      calculation=[];
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
