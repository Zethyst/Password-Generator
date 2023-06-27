const lengthSlider=document.querySelector(".pass-length input"),
options=document.querySelector(".option input"),
copyIcon=document.querySelector(".copy"),
passwordInput=document.querySelector("#pwd"),
passIndicator=document.querySelector(".pass-indicator"),
generateBtn=document.querySelector(".button button");
const pupperCase = document.getElementById('uppercase');
const plowerCase = document.getElementById('lowercase');
const pNumber = document.getElementById('numbers');
const pSymbol = document.getElementById('symbols');


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

class Password{
    
    static generatePwd(len, initPwd){
        let pass = "";
        for (let i=0;i<len;i++){
            pass += initPwd.charAt(Math.floor(Math.random() * initPwd.length));
        }
        Password.updatePassIndicator();
        return pass;
    }

    static updatePassIndicator = ()=>{
        passIndicator.id=
            lengthSlider.value<=4
            ?"weak"
            : lengthSlider.value <=10
            ? "medium"
            : lengthSlider.value <=15
            ? "strong"
            : "superstrong";
    };
}

submit.addEventListener('click', ()=>{
    let initPwd = "";
    (pupperCase.checked) ? initPwd += uppercase : "";
    (plowerCase.checked) ? initPwd += lowercase : "";
    (pNumber.checked) ? initPwd += number : "";
    (pSymbol.checked) ? initPwd += symbol : "";

    passwordInput.value = Password.generatePwd(lengthSlider.value,initPwd);
});

const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText=lengthSlider.value;
}
updateSlider();

const copyPassword = () =>{
    navigator.clipboard.writeText(passwordInput.value);
    Icon=document.querySelector(".copy i"),
    Icon.innerText="check";
    Icon.style.color="rgb(33, 163, 33)";
    setTimeout(()=>{
        Icon.innerText="content_copy";
        Icon.style.color="rgb(41, 41, 41)";
    },1500);
};

copyIcon.addEventListener("click",copyPassword);
lengthSlider.addEventListener("input",updateSlider);