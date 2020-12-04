var OptionButton=document.querySelector("#option-btn");
var HeaderUrl = document.querySelector("#HeaderUrl");
var btnTranslate=document.querySelector("#btnTranslate");
var inputField= document.querySelector('#input-field');
var OutputDiv = document.querySelector('#outputDiv')

// box-shadow: 10px 10px 5px #1A3552
var API_URL="https://api.funtranslations.com/translate/yoda.json"
OptionButton.addEventListener('change',()=>{
    if(OptionButton.value === "Yoda Translation"){
     API_URL="https://api.funtranslations.com/translate/yoda.json"
     HeaderUrl.src="/Images/Master-Yoda-PNG-HD.png"
        
    }
    else{
        API_URL="https://api.funtranslations.com/translate/groot.json"
        HeaderUrl.src="/Images/groot.png"
        for(i =0;i<=100;i++){
            HeaderUrl.style.opacity=i+"%"    
        }
        
        HeaderUrl.style.maxWidth="170px"
    }
})
inputField.addEventListener('change',()=>{
    OutputDiv.innerText="";
})
btnTranslate.addEventListener('mouseenter',()=>{
    btnTranslate.style.boxShadow = "0px 0px 7px 7px #1A3552,0px 0px 2px 2px #1A3552 inset";
    
})
btnTranslate.addEventListener('mouseleave',()=>{
    btnTranslate.style.boxShadow = "";
})
inputField.addEventListener('mouseenter',()=>{
   inputField.style.boxShadow = "0px 0px 7px 7px #1A3552,0px 0px 2px 2px #1A3552 inset";
    
})
inputField.addEventListener('mouseleave',()=>{
    inputField.style.boxShadow = "";
})
OutputDiv.addEventListener('mouseenter',()=>{
    OutputDiv.style.boxShadow = "0px 0px 7px 7px #1A3552,0px 0px 2px 2px #1A3552 inset";
     
 })
 OutputDiv.addEventListener('mouseleave',()=>{
    OutputDiv.style.boxShadow = "";
 })
function ClickEventHandler(){
    var inputText = inputField.value
    callUrl= API_URL + "?" + "text=" + inputText
    fetch(callUrl)
    .then(response => response.json())
    .then(json => GetOutputInDiv(json))
    .catch(ExcetptionHandler)
}
function ExcetptionHandler(){
    console.log("Hourly Limit Reached !!")
    OutputDiv.innerText="Hourly Limit Reached !!"
}
function GetOutputInDiv(json){
    console.log(json)
    OutputDiv.innerHTML=json.contents.translated
}
btnTranslate.addEventListener('click',ClickEventHandler)
