var score = localStorage.getItem("score");

console.log(score);

document.getElementById("count").value = score

    if(score>=100){
        document.getElementById("comment").innerText = "완벽한 공격이었어요!";
    
    }

    else if(score>=70){
        document.getElementById("comment").innerText = "좋아요! 어디가서 안꿀리겠어요";
    }

    else if(score >= 50){
        document.getElementById("comment").innerText = "조금만 더 하면 주전도 할수있을듯?";
    }

    else if(score>= 30){
        document.getElementById("comment").innerText = "멋진데요? 뭐 저에게 블락당하겠지만요";

    }

    else{
        document.getElementById("comment").innerText = "와우... 한번 더?";
       
    }


