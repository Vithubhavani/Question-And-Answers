const qn=document.querySelectorAll(".question");
    

qn.forEach(function(question){
const btn=question.querySelector(".btn");
btn.addEventListener("click",function(){
    const answer=question.querySelector(".answer");
  
    
    if(answer.style.display==="none"){
        answer.style.display="block";
        btn.innerText="-";
    }

    else{
        answer.style.display="none";
        btn.innerText="+";
    }
})
})