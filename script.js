let score={
    red:0,
    blue:0,
    green:0,
    yellow:0
};
function OpeningCeremony(){
    setTimeout(()=>{console.log("Let the games begin")},1000);
    setTimeout(()=>{Race100M(score)},3000);
}
function Race100M(score){
    var event="Race100M"
    console.log("Event : "+event)
    console.log("")
    console.log("previous score :")
    let colors=Object.keys(score);
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    })
    console.log("")

    colors.forEach((c)=>{
        score[c]=getRndInteger(10,15);
    })
    var color1;
    var min1=16;
    var color2;
    var arr=[];
    colors.forEach((c)=>{
        if(min1>score[c]){
            min1=score[c];
            color1=c;
        }
        arr.push(score[c]);
    })
    arr.sort((a,b)=>{return a-b})
    colors.forEach((c)=>{
        if(score[c]==arr[1]){
            color2=c;
        }
    })
    score[color1]=min1+50;
    score[color2]=arr[1]+25;
    console.log("updated score :")
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    })
    console.log("")



    let list=Object.keys(score).sort((a,b)=>{return score[a]-score[b]});
    console.log(list[3]+" won the event "+event);
    console.log("")

    setTimeout(()=>{LongJump(score)},2000);
}
function LongJump(score){
    var event="LongJump"
    console.log("Event : "+event)
    console.log("")

    console.log("previous score :")
    var colors=Object.keys(score)
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    })
    console.log("")

    var arr=["red","blue","green","yellow"];
    var rand=getRndInteger(0,3);
    var p=score[arr[rand]];
    p+=150;
    score[arr[rand]]=p;
    console.log("updated score :")
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    })   
    console.log("")

    let list=Object.keys(score).sort((a,b)=>{return score[a]-score[b]});
    console.log(list[3]+" won the event "+event);
    console.log("")
 
    setTimeout(()=>{HighJump(score)},0)
}
function HighJump(score){
    var event="HighJump"
    console.log("Event : "+event)
    console.log("")

    console.log("previous score :")
    let colors=Object.keys(score);
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    }) 
    console.log("")

    var color=prompt("enter the color");
    flag=0;
    colors.forEach((c)=>{
        if(c==color){
            flag=1;
            var p=score[c]
            p+=100;
            score[c]=p;
        }
    })
    if(flag==0){
        console.log("Event was Cancelled");
    }
    console.log("updated score :")
    colors.forEach((c)=>{
        console.log(c+" "+score[c])
    });
    console.log("")

        let list=Object.keys(score).sort((a,b)=>{return score[a]-score[b]});
    console.log(list[3]+" won the event "+event);
    console.log("")

    setTimeout(()=>{AwardCeremony(score)},0)
}
function AwardCeremony(score){
    var event="Award Ceremony"
    console.log("Event :"+event)
    let list=Object.keys(score).sort((a,b)=>{return score[b]-score[a]});
    let colors=Object.keys(list);
    var arr=["first","second","third","fourth"]
    var i=0;
    colors.forEach((c)=>{
        console.log(`${list[c]} came ${arr[i++]} with ${score[list[c]]} points`)
    })
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
console.log(OpeningCeremony())
