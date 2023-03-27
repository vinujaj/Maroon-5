document.getElementById("secondDiv").style.display = "none";

function validateForm(){
    let allAreFilled = true;
    document.getElementById("mainForm").querySelectorAll("[required]").forEach(function(i) {
        if (!allAreFilled) return;
        if (!i.value) allAreFilled = false;
    })
    if (!allAreFilled) {
        if (document.getElementById("name").value == "") {
            alert("Please enter your name.");
        }

        if(document.getElementById("email").value == ""){
            alert("Please enter your email.");
            
        }

        var subj = document.getElementById("subject");
        var selectedValue = subj.options[subj.selectedIndex].value;
        if (subj.selectedIndex == 0){
            alert("Please select a subject.");
        }

        if(document.getElementById("message").value == ""){
            alert("Please enter your message.");
        }
    }else{
             
        alert('Thank you for your inquiry.');
        copyToLabel();
    }
                         
}
function copyToLabel(){
         
    document.getElementById("secondDiv").style.display = "block";
    document.getElementById("mainDiv").style.display = "none";


    //Reference the TextBox.
        var txtName = document.getElementById("name");
        var txtEmail = document.getElementById("email");
        var txtSubject = document.getElementById("subject");
        var txtDetails = document.getElementById("message");
     
        var lblName = document.getElementById("lblName");
        var lblEmail = document.getElementById("lblEmail");
        var lblSubject = document.getElementById("lblSubject");
        var lblDetails = document.getElementById("lblDetails");
     
        lblName.innerHTML = txtName.value;
        lblEmail.innerHTML = txtEmail.value;
        lblSubject.innerHTML = txtSubject.value;
        lblDetails.innerHTML = txtDetails.value;

              
}
function showMainDiv(){
    //Show Main Div
    document.getElementById("mainDiv").style.display = "block";
    //Hide Second Div
    document.getElementById("secondDiv").style.display = "none";
}
function sendByMail(){
    //Hide Main Div
    document.getElementById("mainDiv").style.display = "none";
    //Hide Main Div
    document.getElementById("secondDiv").style.display = "none";


}