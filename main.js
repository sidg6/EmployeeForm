
var requestURL = "http://localhost:8080/EmployeeForm/json_demo.json"
var xmlhttp = new XMLHttpRequest();

var readData;
var modifyData;
var employeeToDelete;

const readDataFromServer = (pageToLoad) => {
	xmlhttp.onreadystatechange = () =>{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var myJsonData = xmlhttp.response;
			var cacheEmployeeData = myJsonData.Employees;
			fetchData(cacheEmployeeData, pageToLoad);
		}
	};
		xmlhttp.open("GET",requestURL);
		xmlhttp.responseType= 'json';
		xmlhttp.send();
	}

const fetchData = (cacheEmployeeData, pageToLoad) => {
	if(cacheEmployeeData!=undefined){
		var data = cacheEmployeeData;
		readData = data;
		modifyData=readData;
		for(var i=0;i<modifyData.length;i++){
			if(pageToLoad === "editEmployeePage"){
				var parent = document.getElementById("employeeDataBody");
				var parentChild = document.createElement("tr");
				parent.appendChild(parentChild);
			}
			populateData(parentChild, modifyData[i], i, pageToLoad)
		}
	}
}

const populateData = (parent, data, i, pageToLoad) => {
	if(pageToLoad === "editEmployeePage"){
		var child = document.createElement("td");
		var child1 = document.createElement("td");
		var child2 = document.createElement("td");
		var child3 = document.createElement("td");
		var child3Child = document.createElement("i");

		parent.appendChild(child);
		child.className = "user-id";
		document.getElementsByClassName("user-id")[i].innerHTML = data.userId;
		
		parent.appendChild(child1);
		child1.className = "title";
		document.getElementsByClassName("title")[i].innerHTML = data.jobTitleName;
		
		parent.appendChild(child2);
		child2.className = "full-name";
		document.getElementsByClassName("full-name")[i].innerHTML = data.preferredFullName;

		parent.appendChild(child3);
		child3.className = "user-edit";
		child3Child.className = "fa fa-edit";
		child3.appendChild(child3Child);
		document.getElementsByClassName("user-edit")[i].addEventListener("click",function(){
			employeeDetailsPage(data,pageToLoad);
			document.getElementById("editEmployee").style.display = "block";

		});

		document.getElementsByClassName("user-edit")[i].insertAdjacentHTML("afterend", "<td class=\"delete-user\"><i class='fa fa-trash'></i></td>");
		document.getElementsByClassName("delete-user")[i].addEventListener("click",function(){
			myModal(data);
			document.getElementById("deleteModal").style.display = "block";
		});
	}
}

const sendData = (data) => {
	xmlhttp.open("POST",requestURL);
	xmlhttp.responseType= 'json';
	xmlhttp.send(data);
	console.log("Create user "+ JSON.stringify(data));
	localStorage.setItem("create",JSON.stringify(data));
}



const employeeDetailsPage = (myData,pageToLoad) => {
	var data;
	if(pageToLoad === "editEmployeePage"){
		data = myData;
		document.getElementById("deleteModal").disabled = true;
	}else{
		var readLocalStorage = localStorage.getItem("create");
		var parsedData = JSON.parse(readLocalStorage);
		data = parsedData;
		localStorage.clear();
	}
	document.getElementById("userId").value = data.userId;
	document.getElementById("jobTitle").value = data.jobTitleName
	document.getElementById("firstName").value = data.firstName;
	document.getElementById("lastName").value = data.lastName;
	document.getElementById("fullName").value = data.preferredFullName;
	document.getElementById("employeeCode").value = data.employeeCode;
	document.getElementById("region").value = data.region;
	document.getElementById("mobileNumber").value = data.phoneNumber;
	document.getElementById("emailId").value = data.emailAddress;
}


const myModal = (data) => {
	var employeeToBeDeleted = data.preferredFullName;
	document.getElementsByClassName("person-deleted")[0].innerHTML = "\""+employeeToBeDeleted+"\"";
	document.getElementsByClassName("person-deleted")[0].style.color="#aaa222";
	document.getElementById("editEmployee").style.display = "none";
	employeeToDelete = data;
}

const closeModal = () => {
	document.getElementById("deleteModal").style.display = "none";
}


const closeModalByClickingOutside = (e) => {
	if(e.target == document.getElementById("deleteModal")){
		document.getElementById("deleteModal").style.display = "none";
	}
}

window.addEventListener("click", closeModalByClickingOutside);
const deleteEmployee = () => {
	var checkDeleteEmployee = employeeToDelete.employeeCode;
	var size = readData.length;
	for(var i=0;i<size;i++){
		if(checkDeleteEmployee === readData[i].employeeCode){
			modifyData = readData.filter(function (obj){
				return obj.employeeCode != readData[i].employeeCode;
			});
		}
	}
	document.getElementById("employeeDataBody").innerHTML="";
	fetchData(modifyData, "editEmployeePage");
	console.log("After Deletion "+ JSON.stringify(modifyData));
}


const editEmployee = (data) => {
	var updateEmployee = data.employeeCode;
	var oldModifiedData = modifyData;
	var size = oldModifiedData.length;
	for(var i=0;i<size;i++){
		if(updateEmployee === oldModifiedData[i].employeeCode){
			modifyData = oldModifiedData.filter(function (obj){
				return obj.employeeCode != oldModifiedData[i].employeeCode;
			});
		}
	}
	modifyData.push(data);
	document.getElementById("employeeDataBody").innerHTML="";
	fetchData(modifyData, "editEmployeePage");
	console.log("Edit Employee Details "+JSON.stringify(modifyData));
}









