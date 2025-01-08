function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    } 

    emailjs.send("service_7ro3744", "template_8pj0jgd", params).then(alert("Email sent"))


}