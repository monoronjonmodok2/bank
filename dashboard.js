const depozit = document.getElementById("deposit");

depozit.addEventListener('click', function(){
    // depozit blance section
    const InputDepozit = parseFloat(document.getElementById('depozitMoney').value);
    const allDipozit = parseFloat(document.getElementById('allDipozit').innerText);
     
    // total blance section
    const totalBlnce = parseFloat(document.getElementById('total').innerText);


    
    
    document.getElementById('depozitMoney').value=' ';
    if(InputDepozit >= 5){
        const totalDepozit = allDipozit+InputDepozit;
        document.getElementById('allDipozit').innerHTML=totalDepozit;
        alert('depozit blannce is succes');
        document.getElementById('total').innerText=totalBlnce+InputDepozit;

        if(totalDepozit===100 ){
            alert('your blance 100');
        }
        else if(totalDepozit=== 500){
            alert('your blance is 500')
        }
        else if(totalDepozit=== 1000){
            alert('your blance is 1000')
        }
     }

    else{
        alert('minmum blance is 5 taka ')
    }

})


// withdro section part

const withdro = document.getElementById('clickWithdro');
withdro.addEventListener('click', function(){
    const withdroInput =parseFloat( document.getElementById("withdroInput").value);
    const withdroOutt = parseFloat(document.getElementById('withdrowOut').innerText);
    const totalBlance = parseFloat(document.getElementById('total').innerText);

    if(withdroInput>=50 && totalBlance >= withdroInput ){
        const withdro = withdroOutt+withdroInput;
        document.getElementById('withdrowOut').innerText=withdro;
        document.getElementById('total').innerText= totalBlance-withdroInput;

        alert('your withdrow is succes')
        


    }
    else if(withdroInput<50){
        alert('you minimum withdro blnace 50')
    }
    else if (totalBlance <= withdroInput){
        alert('your balance too low');
    }

    
    document.getElementById('withdroInput').value="";
    





} )

