var calculation = [];

document.getElementById('1').addEventListener('click', function(event) {
    calculation.push('1');
  }, false);
  document.getElementById('2').addEventListener('click', function(event) {
    calculation.push('2');
  }, false);
document.getElementById('3').addEventListener('click', function(event) {
    calculation.push('3');
  }, false);
document.getElementById('4').addEventListener('click', function(event) {
    calculation.push('4');
  }, false);
document.getElementById('5').addEventListener('click', function(event) {
    calculation.push('5');
  }, false);
document.getElementById('6').addEventListener('click', function(event) {
    calculation.push('6');
  }, false);
document.getElementById('7').addEventListener('click', function(event) {
    calculation.push('7');
  }, false);
document.getElementById('8').addEventListener('click', function(event) {
    calculation.push('8');
  }, false);
document.getElementById('9').addEventListener('click', function(event) {
    calculation.push('9');
  }, false);
document.getElementById('0').addEventListener('click', function(event) {
    calculation.push('0');
  }, false);
document.getElementById('plus').addEventListener('click', function(event) {
    calculation.push('+');
  }, false);
document.getElementById('minus').addEventListener('click', function(event) {
    calculation.push('-');
  }, false);
document.getElementById('multiply').addEventListener('click', function(event) {
    calculation.push('*');
  }, false);
document.getElementById('divide').addEventListener('click', function(event) {
    calculation.push('/');
  }, false);
document.getElementById('equals').addEventListener('click', function(event) {
      alert(calculation);
    }, false);
