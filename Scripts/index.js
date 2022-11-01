document.querySelector("#buton").addEventListener("click",handleSubmit)

function handleSubmit(){
    event.preventDefault()
    let Email=document.getElementById("email").value
    let pass=document.getElementById("password").value
    if(!check1(Email)){
        document.getElementById("emailError").innerText="@ is not present"
    }
    else if(check2(Email)){
        document.getElementById("emailError").innerText="Domain can not start with dot ."
    }
    else if(check3(Email))
    {
        document.getElementById("emailError").innerText="No character before @"
    }
    else if(check5(Email)){
        document.getElementById("emailError").innerText="Email cannot start with ."
    }
    else if(check6(Email)){
        document.getElementById("emailError").innerText="Only allows character, digit, underscore, and dash"
    }
    else if(check7(Email)){
        document.getElementById("emailError").innerText="Double dots are not allowed"
    }
    else if(check4(Email)){
        document.getElementById("emailError").innerText=`${check4(Email)} is not a valid tld`
    }
    
    if(pass.length<=6)
    {
        document.getElementById("passError").innerText="Length of password should be greater than 6."
    }
    ///if()

    else if(passCheck1(pass)){
        document.getElementById("passError").innerText="At-least one uppercase alphabet password"
    }
    else if(passCheck2(pass)){
        document.getElementById("passError").innerText="At-least one numeric value must be used in the password"
    }

}

function check1(Email){
    for(let i=0;i<Email.length;i++){
        if(Email[i]=="@"){
            return true
        }
    }
    return false
}

function check2(Email){
    for(let i=0;i<Email.length;i++){
        if(Email[i]=="@"){
             if(Email[i+1]==".")
             {
                return true
             }
        }
    }
    return false
}

function check3(Email){
    if(Email[0]=="@")
    return true
    else
    return false
}

function check4(Email){
    //alert("yes")
    let bag=""
    let count=0
    for(let i=0;i<Email.length;i++){
        if(Email[i]=="."){
             count++
        }
        if(count==1){
            bag=bag+Email[i]
        }
    }
    //console.log(bag)
    if(bag=="com"||bag=="in"||bag=="org"||bag==".com"){
        return false
    }
    else
    return bag
}


function check5(Email){
    if(Email[0]==".")
    return true
    else
    return false
}

function check6(Email){
    for(let i=0;i<Email.length;i++){
        if(Email[i]=="*"){
            return true
        }
    }
    return false
}


function check7(Email){
    for(let i=0;i<Email.length;i++){
        if(Email[i]=="."){
            if(Email[i+1]=="."){
                return true
            }
        }
    }
    return false
}

function passCheck1(pass){
    let count=0
    for(let i=0;i<pass.length;i++){
        if(pass[i]==pass[i].toUpperCase()){
            count++
        }
    }
    if(count==0)
    return true
    else
    return false

}

function passCheck2(pass){
    let count=0
    for(let i=0;i<pass.length;i++){
        if(Number(pass[i])){
            count++
        }
    }
    if(count==0)
    return true
    else
    return false
}