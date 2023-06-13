console.log('hello world')
const input=document.getElementById('phone');
const label=document.getElementById('label')
const fun1=()=>{
    if(input.value.length==1){
        input.value="("+input.value;
    }
    if(input.value.length==4){
        input.value=input.value+")"
    }
 if(input.value.length==8){
    input.value=input.value+"-"

 }
}
input.addEventListener('input', fun1)