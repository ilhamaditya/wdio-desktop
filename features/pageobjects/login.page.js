class loginPage {
    get inputEmail(){
        return $("#your_email")
    }

    get inputPassword(){
        return $("#password")
    }
  
    get btnLogin(){
        return $(".register:nth-child(1)")
    }

    get btnOK(){
        return $(".swal2-confirm.swal2-styled")
    }
    

}

export default new loginPage();