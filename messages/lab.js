//get JSON data
jsondata = new XMLHttpRequest();

jsondata.onreadystatechange = function() {
	if (jsondata.readyState == 4 && jsondata.status == 200){
		parsed = JSON.parse(jsondata.responseText);
		display(parsed);
	}
}

jsondata.open("GET", "data.json", true);
jsondata.send();

//display JSON data in "messages" div
function display(arrayData) {
	msg = document.getElementById("messages");
	for (count = 0; count < arrayData.length; count++){
		msg.innerHTML += "<p>" + arrayData[count]["content"] +
			" " + arrayData[count]["username"] + "</p>";
	}
}