let calculation = [];
let number = '';
let answer = 0;
let del = 0;
let cleared = 1;
document.getElementById('1').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='1';
    document.getElementById('answer').appendChild(document.createTextNode('1'));
  }, false);
  document.getElementById('2').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='2';
    document.getElementById('answer').appendChild(document.createTextNode('2'));
  }, false);
document.getElementById('3').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='3';
    document.getElementById('answer').appendChild(document.createTextNode('3'));
  }, false);
document.getElementById('4').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='4';
    document.getElementById('answer').appendChild(document.createTextNode('4'));
  }, false);
document.getElementById('5').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='5';
    document.getElementById('answer').appendChild(document.createTextNode('5'));
  }, false);
document.getElementById('6').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='6';
    document.getElementById('answer').appendChild(document.createTextNode('6'));
  }, false);
document.getElementById('7').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='7';
    document.getElementById('answer').appendChild(document.createTextNode('7'));
  }, false);
document.getElementById('8').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='8';
    document.getElementById('answer').appendChild(document.createTextNode('8'));
  }, false);
document.getElementById('9').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='9';
    document.getElementById('answer').appendChild(document.createTextNode('9'));
  }, false);
document.getElementById('0').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='0';
    document.getElementById('answer').appendChild(document.createTextNode('0'));
  }, false);
document.getElementById('point').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
    number+='.';
    document.getElementById('answer').appendChild(document.createTextNode('.'));
  }, false);
document.getElementById('toggle').addEventListener('click', function(event) {
    if (cleared === 0){clearDiv();}
      if ((parseFloat(number) > 0) || (number.length==0)){
        number = '-'+number;
        document.getElementById('answer').insertBefore(document.createTextNode('-'),
        document.getElementById('answer').firstChild);
      }
      else if (parseFloat(number) < 0) {
        number = number.slice(1);
          document.getElementById('answer').removeChild(document.getElementById('answer').firstChild);
      }
    }, false);

document.getElementById('plus').addEventListener('click', function(event) {
  if (number){
    calculation.push(parseFloat(number));
    calculation.push('+');
    document.getElementById('input').appendChild(document.createTextNode(number));
    document.getElementById('input').appendChild(document.createElement('span'));
    document.getElementById('input').lastChild.classList.add('op');
    document.getElementsByClassName('op')[document.getElementsByClassName('op')
      .length-1].appendChild(document.createTextNode('+'));
    number = '';
    del = 0;
    while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
  }
  else if (del === 1){
      calculation.push('+');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('+'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
  }, false);
document.getElementById('minus').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('-');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('-'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
    else if (del === 1){
        calculation.push('-');
        document.getElementById('input').appendChild(document.createTextNode(number));
        document.getElementById('input').appendChild(document.createElement('span'));
        document.getElementById('input').lastChild.classList.add('op');
        document.getElementsByClassName('op')[document.getElementsByClassName('op')
          .length-1].appendChild(document.createTextNode('-'));
        number = '';
        del = 0;
        while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
        }
  }, false);
document.getElementById('multiply').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('*');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('x'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
    if (del===1){
      calculation.push('*');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('x'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
  }, false);
document.getElementById('divide').addEventListener('click', function(event) {
  if (number){
      calculation.push(parseFloat(number));
      calculation.push('/');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('\u00f7'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
  if (del===1){
      calculation.push('/');
      document.getElementById('input').appendChild(document.createTextNode(number));
      document.getElementById('input').appendChild(document.createElement('span'));
      document.getElementById('input').lastChild.classList.add('op');
      document.getElementsByClassName('op')[document.getElementsByClassName('op')
        .length-1].appendChild(document.createTextNode('\u00f7'));
      number = '';
      del = 0;
      while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
      }
  }, false);
document.getElementById('AC').addEventListener('click', function(event){
  number = '';
  calculation = [];
  answer = 0;
  while (document.getElementById('input').firstChild) {document.getElementById('input').removeChild(document.getElementById('input').firstChild)};
  while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
}, false);
document.getElementById('C').addEventListener('click', function(event){
  if (number===''){
    calculation.pop();
    document.getElementById('input').removeChild(document.getElementById('input').lastChild);
    del = 1;
  }
  else {
    number = '';
    while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
    del = 0;
  }
}, false);
document.getElementById('equals').addEventListener('click', function(event) {
      if (number == '-'){number = ''}
      calculation.push(parseFloat(number));
      while (isNaN(calculation[calculation.length-1])){
        calculation.pop();
      }
      calc(calculation);
      if(document.getElementById('input').lastChild.className === 'op'){
        document.getElementById('input').removeChild(document.getElementById('input').lastChild);
      }
      document.getElementById('answer').appendChild(document.createTextNode(answer));
      number = '';
      calculation=[];
      cleared = 0;
    }, false);

function calc(array) {
  if (number) {document.getElementById('input').appendChild(document.createTextNode(number));}
  while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
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
function clearDiv(){
  while (document.getElementById('input').firstChild) {document.getElementById('input').removeChild(document.getElementById('input').firstChild)};
  while (document.getElementById('answer').firstChild) {document.getElementById('answer').removeChild(document.getElementById('answer').firstChild)};
  cleared = 1;
}
