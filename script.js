// your code here
   document.getElementById("button").addEventListener("click", function(){

        const name = document.getElementById("name").value;
        const year = document.getElementById("year").value;
        let url = "https://localhost:8080/";

        if(name && year){
            url += "?name=" + name + "&year=" + year;
        }else if (name){
            url += "?name=" + name;
        } else if (year){
                url += "?year=" + year;
        }

        document.getElementById("url").innerText = url;
        });