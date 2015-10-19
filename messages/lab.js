//get JSON data
jsondata = new XMLHttpRequest();
jsondata.open("GET", "data.json");
jsondata.send();
parsed = JSON.parse(jsondata);

//display JSON data in "messages" div
msg = document.getElementById("messages");
for (count = 0; count < parsedObjects.length; count++){
	msg.innerHTML += "<p>" + parsedObjects[count]["content"] +
		" " + parsedObjects[count]["username"] + "</p>";
}
