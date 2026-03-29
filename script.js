// your code here
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const urlText = document.getElementById("url");

form.addEventListener("submit",function(e){
	e.preventDefault();

	let name = nameInput.value.trim();
	let year = yearInput.value.trim();

	let base = "https://localhost:8080/";
    let query = [];

	if(name){
		query.push("name="+encodeURIComponent(name))
	}
	if(year){
	    query.push("year=" + encodeURIComponent(year));
    }

    if(query.length > 0){
        urlText.textContent = base + "?" + query.join("&");
    }else{
        urlText.textContent = base;
    }
	
})