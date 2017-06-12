let calculation = [];
let number = '';
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
      calculation.push(number);
      calculation.push('+');
      number = '';
      }
  }, false);
document.getElementById('minus').addEventListener('click', function(event) {
  if (number){
      calculation.push(number);
      calculation.push('-');
      number = '';
      }
  }, false);
document.getElementById('multiply').addEventListener('click', function(event) {
  if (number){
      calculation.push(number);
      calculation.push('*');
      number = '';
      }
  }, false);
document.getElementById('divide').addEventListener('click', function(event) {
  if (number){
      calculation.push(number);
      calculation.push('/');
      number = '';
      }
  }, false);
document.getElementById('equals').addEventListener('click', function(event) {
      calculation.push(number);
      document.getElementById('input').appendChild(document.createTextNode(calculation));
      document.getElementById('answer').appendChild(document.createTextNode('ans'));
    }, false);
