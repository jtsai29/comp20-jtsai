//get JSON data
jsondata = new XMLHttpRequest();

jsondata.onreadystatechange = function() {
	if (jsondata.readyState == 4){
		parsed = JSON.parse(jsondata.responseText);
	}
}

jsondata.open("GET", "data.json", true);
jsondata.send();

//display JSON data in "messages" div
msg = document.getElementById("messages");
for (count = 0; count < parsed.length; count++){
	msg.innerHTML += "<p>" + parsed[count]["content"] +
		" " + parsed[count]["username"] + "</p>";
}
