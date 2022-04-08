class registerPage {
    openURL(){
        browser.url("https://brick-qa-assignment.herokuapp.com");
    }

    get firstName(){
        return $("#firstName")
    }

    get lastName(){
        return $("#lastName")
    }

    get yourEmail(){
        return $("#email")
    }

    get yourPhoneNumber(){
        return $("#phoneNumber")
    }

    get yourAddress(){
        return $("#address")
    }

    get password(){
        return $("#password")
    }

    get confirmPassword(){
        return $("#confirm_password")
    }

    get btnRegister(){
        return $(".register:nth-child(1)")
    }

    get linkLogin(){
        return $("p:nth-child(2) > a:nth-child(1)")
    }
}

export default new registerPage();