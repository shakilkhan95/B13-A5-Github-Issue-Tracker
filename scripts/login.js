document.getElementById('sign-in-btn').addEventListener('click', () => {
    const defaultUserName = 'admin';
    const defaultPass = 'admin123';
    const userNameInput = document.getElementById('user-name');
    const userName = userNameInput.value;
    const passInput = document.getElementById('password');
    const userPass = passInput.value;
    
    //condition if the username isn't valid
    if(userName !== defaultUserName){
        alert('Wrong user name. Please enter valid user name');
        return;
    }

    // condition if password isn't valid 
    if(userPass !== defaultPass){
        alert("Wrong password. Please enter valid password");
        return;
    }

    window.location.href = "../main.html";
});