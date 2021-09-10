fetch("https://jsonplaceholder.typicode.com/users").then(
    res => {
        res.json().then(
            data => {
                console.log(data);

                if(data.length > 0) {
                    var temp = "";
                    var index = 1;
                    data.forEach((itemData) => {
                        temp += "<tr>";
                        temp += "<th scope='row'>" + index +"</th>";
                        temp += "<td>" + itemData.name + "</td>";
                        temp += "<td>" + itemData.username + "</td>";
                        temp += "<td>" + itemData.email + "</td>";
                        temp += "</tr>";
                        index++;
                    });
                    document.getElementById('data').innerHTML = temp;
                }
            }
        )
    }
)