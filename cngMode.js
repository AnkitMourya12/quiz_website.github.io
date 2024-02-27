let modeBtn=document.querySelector("#mode");
let curMode="light";
modeBtn.addEventListener("click", ()=>{
    //console.log("u r try to chng mode");
    if(curMode==="light"){
        curMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        curMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(curMode);
})
