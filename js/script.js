function submit(){
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;

    if(a == ""){
        document.getElementById("fullname").innerHTML = "first name";
        return false;
    }
    if(b == ""){
        document.getElementById("lastname").innerHTML = "last name";
        return false;
    }
}