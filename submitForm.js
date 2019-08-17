var formData={};
var submitForm = (pageType) => {
	if((document.getElementById("userId").value!="")){
		if((/^[a-z]+$/i).test(document.getElementById("userId").value)){
			formData.userId = document.getElementById("userId").value;
			if((document.getElementById("userId").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("userId");
			if((document.getElementById("userId").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the Alphabets only</span>");
				document.getElementById("userId").focus();
			}
		}
	}else{
			var parent = document.getElementById("userId");
			if((document.getElementById("userId").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the user id</span>");
				document.getElementById("userId").focus();
			}
		}
	if((document.getElementById("jobTitle").value!="")){
		if((/^[a-z]{1,}\s{0,1}[a-z]+$/i).test(document.getElementById("jobTitle").value)){
			formData.jobTitleName=document.getElementById("jobTitle").value;
			if((document.getElementById("jobTitle").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("jobTitle");
			if((document.getElementById("jobTitle").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the Alphabets only</span>");
				document.getElementById("jobTitle").focus();
			}
		}
	}else{
			var parent = document.getElementById("jobTitle");
			if((document.getElementById("jobTitle").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the job title</span>");
				document.getElementById("jobTitle").focus();
			}
		}
	if((document.getElementById("firstName").value!="")){
		if((/^[a-z]+$/i).test(document.getElementById("firstName").value)){
			formData.firstName=document.getElementById("firstName").value;
			if((document.getElementById("firstName").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("firstName");
			if((document.getElementById("firstName").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the Alphabets only</span>");
				document.getElementById("firstName").focus();
			}
		}
	}else{
			var parent = document.getElementById("firstName");
			if((document.getElementById("firstName").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the first name</span>");
				document.getElementById("firstName").focus();
			}
		}
	if((document.getElementById("lastName").value!="")){
		if((/^[a-z]+$/i).test(document.getElementById("lastName").value)){
			formData.lastName=document.getElementById("lastName").value;
			if((document.getElementById("lastName").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("lastName");
			if((document.getElementById("lastName").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the Alphabets only</span>");
				document.getElementById("lastName").focus();
			}
		}
	}else{
			var parent = document.getElementById("lastName");
			if((document.getElementById("lastName").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the last name</span>");
				document.getElementById("lastName").focus();
			}
		}
	if((document.getElementById("lastName").value!="") && (document.getElementById("firstName").value!="")){
		if((/^[a-z]+$/i).test(document.getElementById("firstName").value) && (/^[a-z]+$/i).test(document.getElementById("lastName").value)){
			formData.preferredFullName = document.getElementById("firstName").value + " "+
			 document.getElementById("lastName").value;
		}
	}
	if((document.getElementById("employeeCode").value!="")){
		if((/^[a-z]*\d+$/i).test(document.getElementById("employeeCode").value)){
			formData.employeeCode=document.getElementById("employeeCode").value;
			if((document.getElementById("employeeCode").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("employeeCode");
			if((document.getElementById("employeeCode").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the alphabets with number only. Example abc12</span>");
				document.getElementById("employeeCode").focus();
			}
		}
	}else{
			var parent = document.getElementById("employeeCode");
			if((document.getElementById("employeeCode").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the employee code</span>");
				document.getElementById("employeeCode").focus();
			}
		}

	if((document.getElementById("region").value!="")){
		if((/^[a-z]{1,}\s{0,1}[a-z]+$/i).test(document.getElementById("region").value)){
			formData.region=document.getElementById("region").value;
			if((document.getElementById("region").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("region");
			if((document.getElementById("region").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the Alphabets only</span>");
				document.getElementById("region").focus();
			}
		}
	}else{
			var parent = document.getElementById("region");
			if((document.getElementById("region").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the region</span>");
				document.getElementById("region").focus();
			}
		}
	if((document.getElementById("mobileNumber").value!="")){
		if((/^\d+$/i).test(document.getElementById("mobileNumber").value) && (document.getElementById("mobileNumber").value.length == 10)){
			formData.phoneNumber=document.getElementById("mobileNumber").value;
			if((document.getElementById("mobileNumber").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else if(!(isNaN(document.getElementById("mobileNumber").value))){
			var parent = document.getElementById("mobileNumber");
			if((document.getElementById("mobileNumber").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Mobile number must be of 10 digit only</span>");
				document.getElementById("mobileNumber").focus();
			}else{
				document.getElementById("mobileNumber").nextElementSibling.innerHTML= "Mobile number must be of 10 digit only";
			}
		}else{
			var parent = document.getElementById("mobileNumber");
			if((document.getElementById("mobileNumber").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Mobile number must be a number</span>");
				document.getElementById("mobileNumber").focus();
			}else{
				document.getElementById("mobileNumber").nextElementSibling.innerHTML= "Mobile number must be a number";
			}
		}
	}else{
			var parent = document.getElementById("mobileNumber");
			if((document.getElementById("mobileNumber").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the mobile number</span>");
				document.getElementById("mobileNumber").focus();
			}
		}
	if((document.getElementById("emailId").value!="")){
		if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i).test(document.getElementById("emailId").value)){
			formData.emailAddress=document.getElementById("emailId").value;
			if((document.getElementById("emailId").nextSibling.className=="error")){
				document.getElementsByClassName("error")[0].remove();
			}
		}else{
			var parent = document.getElementById("emailId");
			if((document.getElementById("emailId").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the proper email id format</span>");
				document.getElementById("emailId").focus();
			}
		}
	}else{
			var parent = document.getElementById("emailId");
			if((document.getElementById("emailId").nextSibling.className==null)){
				parent.insertAdjacentHTML("afterend", "<span class='error'>Please enter the email id</span>");
				document.getElementById("emailId").focus();
			}
		}
		if(document.getElementsByClassName("error")[0]==null){
			if(pageType == "createEmployee"){
				sendData(formData);
			}else if(pageType == "editEmployeePage"){
				editEmployee(formData);
			}
			
	}else{
		return false;
	}
}






