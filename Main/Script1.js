function Validating() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let staffName = document.getElementById("staffName").value;
    let complaint = document.getElementById("complaint").value;
    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
    let staffNameStatus = false;
    let complaintStatus = false;
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");    
    const emailError = document.getElementById("emailError");
    const staffNameError = document.getElementById("staffNameError");
    const complaintError = document.getElementById("complaintError");
    let alphaExp = /^[a-zA-Z]+$/;
    let numExp = /^[0-9]+$/;
    let mailExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const staffNameExp = /^[a-zA-Z]+$/;
    const complaintExp = /^[a-zA-Z]$/;
   

    
    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please Enter Your Name";
    } else {
        if (name.match(alphaExp)){
        document.getElementById("nameError").innerHTML = "";
            nameStatus = true;
        }else {
        document.getElementById("nameError").innerHTML = "Please Enter Charecters";            
        nameStatus = false;
        }
    }

    // Mobile validation
    if (mobile === "") {
        document.getElementById("mobileError").innerHTML = "Please Enter Your Mobile Number";
    } else {
        if (mobile.match(numExp)){
            if(mobile.length === 10) {
                document.getElementById("mobileError").innerHTML = "";
                mobileStatus = true;
            }else {
                document.getElementById("mobileError").innerHTML = "Digits Only";
                mobileStatus = false;
            }
        }else {
        document.getElementById("mobileError").innerHTML = "Please Enter Started & Ended With Digits";            
        mobileStatus = false;
        }
    }

        //EMail Validation
        if (email === "") {
        document.getElementById("emailError").innerHTML = "Please Enter Your Email Address";
    } else {
        if (email.match(mailExp)){
        document.getElementById("emailError").innerHTML = "";
            emailStatus = true;
        }else {
        document.getElementById("emailError").innerHTML = "@gmail.com Is Mandatory";            
        emailStatus = false;
        }
    }

    // StaffName validation
        if (StaffName < 1 || isNaN(StaffName)) {
        alert("StaffName should be a charecters.");
        return false;
    }

    //Complaint
    if (complaint === "") {
        document.getElementById("complaintError").innerHTML = "Please Define Your Complaint";
    } else {
        if (complaint.match(complaintExp)){
        document.getElementById("complaintError").innerHTML = "";
        complaintStatus = true;
        }else {
        document.getElementById("complaintError").innerHTML = "Define Your Complaint Done By Our Staff";
        complaintStatus = false;
        }
    }


    if(nameStatus === true && mobileStatus === true && emailStatus === true && staffNameStatus === true && complaintStatus === true) {
        return true;
    } else{
        return false;
    }
}