let pick1=document.querySelector(".settime")
setTimeout(Run,9900);
function Run(){
    pick1.style.display="none";
}

let pick=document.querySelector(".b")
let pick3=document.querySelector(".starts");
let pick2=document.querySelector(".m1");
let pick4=document.querySelector("#btn1");
let pick5=document.querySelector("#btn2");
let pick6=document.querySelector("#btn3");
let pick7=document.querySelector("#btn4");
// let a=[];
let b=0;
Show =()=>{
pick2.style.display="block";
pick3.style.display="none";
end.style.display="none";
pick.style.display="none";
}
Submit =()=>{
    b=0;
    if(pick4.checked){
        next()
    }
    else if(pick5.checked){
        next()
    }
    else if(pick6.checked){
        next()
    }
    else if(pick7.checked){
        // console.log(a[0])
        b++
        next()
    }
}
let pick8=document.querySelector(".m2");
let pick9=document.querySelector("#btn5");
let pick10=document.querySelector("#btn6");
let pick11=document.querySelector("#btn7");
let pick12=document.querySelector("#btn8");
next =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="block";
    Submit1 =()=>{
        if(pick9.checked){
            // console.log(a[0])
            next1()
        }
        else if(pick10.checked){
            next1()
        }
        else if(pick11.checked){
            b++
            next1()
        }
        else if(pick12.checked){
            next1()
        }
    }
}
let pick13=document.querySelector(".m3");
let pick14=document.querySelector("#btn9");
let pick15=document.querySelector("#btn10");
let pick16=document.querySelector("#btn11");
let pick17=document.querySelector("#btn12");
next1 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="block";
    Submit2 =()=>{
        if(pick14.checked){
            // console.log(a[0])
            next2()
        }
        else if(pick15.checked){
            next2()
        }
        else if(pick16.checked){
            next2()
        }
        else if(pick17.checked){
            b++
            next2()
        }
    }
}
let pick18=document.querySelector(".m4");
let pick19=document.querySelector("#btn13");
let pick20=document.querySelector("#btn14");
let pick21=document.querySelector("#btn15");
let pick22=document.querySelector("#btn16");
next2 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="block";
    Submit3 =()=>{
        if(pick19.checked){
            next3()
        }
        else if(pick20.checked){
            b++
            // consol.log(a[0])
            next3()
        }
        else if(pick21.checked){
        next3()
    }
    else if(pick22.checked){
        next3()
    }
}
}
let pick23=document.querySelector(".m5");
let pick24=document.querySelector("#btn17");
let pick25=document.querySelector("#btn18");
let pick26=document.querySelector("#btn19");
let pick27=document.querySelector("#btn20");
next3 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="block";
Submit4 =()=>{
    if(pick24.checked){
        next4()
    }
    else if(pick25.checked){
        // console.log(a[0])
        next4()
    }
    else if(pick26.checked){
        b++
        next4()
    }
    else if(pick27.checked){
        next4()
    }
}
}
let pick28=document.querySelector(".m6");
let pick29=document.querySelector("#btn21");
let pick30=document.querySelector("#btn22");
let pick31=document.querySelector("#btn23");
let pick32=document.querySelector("#btn24");
next4 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="block";
Submit5 =()=>{
    if(pick29.checked){
        next5()
    }
    else if(pick30.checked){
        // console.log(a[0])
        b++
        next5()
    }
    else if(pick31.checked){
        next5()
    }
    else if(pick32.checked){
        next5()
    }
}
}
let pick33=document.querySelector(".m7");
let pick34=document.querySelector("#btn25");
let pick35=document.querySelector("#btn26");
let pick36=document.querySelector("#btn27");
let pick37=document.querySelector("#btn28");
next5 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="block";
Submit6 =()=>{
    if(pick34.checked){
        next6()
    }
    else if(pick35.checked){
        // console.log(a[0])
        next6()
    }
    else if(pick36.checked){
        b++
        next6()
    }
    else if(pick37.checked){
        next6()
    }
}
}
let pick38=document.querySelector(".m8");
let pick39=document.querySelector("#btn29");
let pick40=document.querySelector("#btn30");
let pick41=document.querySelector("#btn31");
let pick42=document.querySelector("#btn32");
next6 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="block";
Submit7 =()=>{
    if(pick39.checked){
        next7()
    }
    else if(pick40.checked){
        // console.log(a[0])
        next7()
    }
    else if(pick41.checked){
        b++
        next7()
    }
    else if(pick42.checked){
        next7()
    }
}
}
let pick43=document.querySelector(".m9");
let pick44=document.querySelector("#btn33");
let pick45=document.querySelector("#btn34");
let pick46=document.querySelector("#btn35");
let pick47=document.querySelector("#btn36");
next7 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="block";
Submit8 =()=>{
    if(pick44.checked){
        b++
        next8()
    }
    else if(pick45.checked){
        // console.log(a[0])
        next8()
    }
    else if(pick46.checked){
        next8()
    }
    else if(pick47.checked){
        next8()
    }
}
}
let pick48=document.querySelector(".m10");
let pick49=document.querySelector("#btn37");
let pick50=document.querySelector("#btn38");
let pick51=document.querySelector("#btn39");
let pick52=document.querySelector("#btn40");
next8 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="block";
Submit9 =()=>{
    if(pick49.checked){
        next9()
    }
    else if(pick50.checked){
        // console.log(a[0])
        b++
        next9()
    }
    else if(pick51.checked){
        next9()
    }
    else if(pick52.checked){
        next9()
    }
}
}
let pick53=document.querySelector(".m11");
let pick54=document.querySelector("#btn41");
let pick55=document.querySelector("#btn42");
let pick56=document.querySelector("#btn43");
let pick57=document.querySelector("#btn44");
next9 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="block";
Submit10 =()=>{
    if(pick54.checked){
        next10()
    }
    else if(pick55.checked){
        // console.log(a[0])
        next10()
    }
    else if(pick56.checked){
        b++
        next10()
    }
    else if(pick57.checked){
        next10()
    }
}
}
let pick58=document.querySelector(".m12");
let pick59=document.querySelector("#btn45");
let pick60=document.querySelector("#btn46");
let pick61=document.querySelector("#btn47");
let pick62=document.querySelector("#btn48");
next10 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="block";
Submit11 =()=>{
    if(pick59.checked){
        b++
        next11()
    }
    else if(pick60.checked){
        // console.log(a[0])
        next11()
    }
    else if(pick61.checked){
        next11()
    }
    else if(pick62.checked){
        next11()
    }
}
}
let pick63=document.querySelector(".m13");
let pick64=document.querySelector("#btn49");
let pick65=document.querySelector("#btn50");
let pick66=document.querySelector("#btn51");
let pick67=document.querySelector("#btn52");
next11 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="block";
Submit12 =()=>{
    if(pick64.checked){
        next12()
    }
    else if(pick65.checked){
        // console.log(a[0])
        next12()
    }
    else if(pick66.checked){
        next12()
    }
    else if(pick67.checked){
        b++
        next12()
    }
}
}
let pick68=document.querySelector(".m14");
let pick69=document.querySelector("#btn53");
let pick70=document.querySelector("#btn54");
let pick71=document.querySelector("#btn55");
let pick72=document.querySelector("#btn56");
next12 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="block";
Submit13 =()=>{
    if(pick69.checked){
        b++
        next13()
    }
    else if(pick70.checked){
        // console.log(a[0])
        next13()
    }
    else if(pick71.checked){
        next13()
    }
    else if(pick72.checked){
        next13()
    }
}
}
let pick73=document.querySelector(".m15");
let pick74=document.querySelector("#btn57");
let pick75=document.querySelector("#btn58");
let pick76=document.querySelector("#btn59");
let pick77=document.querySelector("#btn60");
next13 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="block";
Submit14 =()=>{
    if(pick74.checked){
        next14()
    }
    else if(pick75.checked){
        // console.log(a[0])
        next14()
    }
    else if(pick76.checked){
        b++
        next14()
    }
    else if(pick77.checked){
        next14()
    }
}
}
let pick78=document.querySelector(".m16");
let pick79=document.querySelector("#btn61");
let pick80=document.querySelector("#btn62");
let pick81=document.querySelector("#btn63");
let pick82=document.querySelector("#btn64");
next14 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="block";
Submit15 =()=>{
    if(pick79.checked){
        next15()
    }
    else if(pick80.checked){
        b++
        // console.log(a[0])
        next15()
    }
    else if(pick81.checked){
        next15()
    }
    else if(pick82.checked){
        next15()
    }
}
}
let pick111=document.querySelector(".m17");
let pick222=document.querySelector("#btn65");
let pick333=document.querySelector("#btn66");
let pick444=document.querySelector("#btn67");
let pick555=document.querySelector("#btn68");
next15 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="none";
    pick111.style.display="block";
Submit16 =()=>{
    if(pick222.checked){
        b++
        next16()
    }
    else if(pick333.checked){
        // console.log(a[0])
        next16()
    }
    else if(pick444.checked){
        next16()
    }
    else if(pick555.checked){
        next16()
    }
}
}
let pick83=document.querySelector(".m18");
let pick84=document.querySelector("#btn69");
let pick85=document.querySelector("#btn70");
let pick86=document.querySelector("#btn71");
let pick87=document.querySelector("#btn72");
next16 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="none";
    pick111.style.display="none";
    pick83.style.display="block";
Submit17 =()=>{
    if(pick84.checked){
        next17()
    }
    else if(pick85.checked){
        // console.log(a[0])
        next17()
    }
    else if(pick86.checked){
        b++
        next17()
    }
    else if(pick87.checked){
        next17()
    }
}
}
let pick88=document.querySelector(".m19");
let pick89=document.querySelector("#btn73");
let pick90=document.querySelector("#btn74");
let pick91=document.querySelector("#btn75");
let pick92=document.querySelector("#btn76");
next17 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="none";
    pick83.style.display="none";
    pick111.style.display="none";
    pick88.style.display="block";
Submit18 =()=>{
    if(pick89.checked){
        next18()
    }
    else if(pick90.checked){
        // console.log(a[0])
        b++
        next18()
    }
    else if(pick91.checked){
        next18()
    }
    else if(pick92.checked){
        next18()
    }
}
}
let pick93=document.querySelector(".m20");
let pick94=document.querySelector("#btn77");
let pick95=document.querySelector("#btn78");
let pick96=document.querySelector("#btn79");
let pick97=document.querySelector("#btn80");
next18 =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="none";
    pick83.style.display="none";
    pick88.style.display="none";
    pick111.style.display="none";
    pick93.style.display="block";
Submit19 =()=>{
    if(pick94.checked){
        nextlast()
    }
    else if(pick95.checked){
        nextlast()
        // console.log(a[0])
    }
    else if(pick96.checked){
        nextlast()
    }
    else if(pick97.checked){
        b++
        nextlast()
    }
}
}
let end=document.querySelector("h6");
nextlast =()=>{
    pick2.style.display="none";
    pick3.style.display="none";
    pick8.style.display="none";
    pick13.style.display="none";
    pick18.style.display="none";
    pick23.style.display="none";
    pick28.style.display="none";
    pick33.style.display="none";
    pick38.style.display="none";
    pick43.style.display="none";
    pick48.style.display="none";
    pick53.style.display="none";
    pick58.style.display="none";
    pick63.style.display="none";
    pick68.style.display="none";
    pick73.style.display="none";
    pick78.style.display="none";
    pick83.style.display="none";
    pick88.style.display="none";
    pick111.style.display="none";
    pick93.style.display="none";
    pick.style.display="block";
Submit20 =()=>{
    end.style.display="block";
    end.innerHTML=`You Got ${b}/20 Number(s)`
    Tryagain()
}
}
Tryagain =()=>{
    pick3.style.display="block";
    pick.style.display="none";
}