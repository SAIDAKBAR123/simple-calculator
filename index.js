function number(value){
  document.form1.result.value +=value;
}
function cle(value){
  document.form1.result.value = value;
}
function log(){
  if( document.form1.result.value!==null ||  document.form1.result.value!=='0')
  document.form1.result.value =Math.log10(document.form1.result.value);
}
function evalua(){
  document.form1.result.value = eval(document.form1.result.value);
}