//login
btnLogin = document.querySelector('#btnlogin');

if(btnLogin != null)
{
    btnLogin.addEventListener('click',function(){
        let uname = document.getElementById('name').value;
        let pass = document.getElementById('pwd').value;
        console.log(uname);
        fetch('http://localhost/api/login_method?username='+uname+'&password='+pass)
        .then(res=>res.json()).then((RES)=>{
            if(RES.Code == 1)
            {
                localStorage.setItem('userId',RES.Data.id);
                alert("login success");
            }
            else{
                alert("Invalid data")
            }
        })

    })
}




//register
function RegAPI() {
    console.log("btn called");
    let name = document.getElementById('name').value;
    console.log(name);
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;

    const Data = {username:name,email:email,password:pwd,mobile:mobile}
    console.log(Data);

    fetch('http://localhost/api/registration_api',{method:'POST',
    headers:{
        'content-Type':'application/json',
    },body:JSON.stringify({allData:Data})}).then((res)=>res.json()).then((Response)=>{
    console.log(Response);
    if (Response.Code == 1)
    {
        localStorage.setItem('userId',Response.Data);
    }
    else{
        console.log("something went wrong!");
    }
})
}