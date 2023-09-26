
const getLogin = document.getElementById('login');
getLogin.addEventListener('click', function(){
    const useremail = document.getElementById('username')
    const email = useremail.value;
    const userPass = document.getElementById('password').value;
    if(email==="demo@gmail.com" && userPass === "123"){
        alert('login succes')
    }
    else{
        alert('you are rong');
    }

})