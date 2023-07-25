// TODO: add code here
window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            function sortArray(json,prop){
                json.sort((a,b)=>{
                  //if(typeof a[prop] ==='string')
                    //return b[prop].localeCompare(a[prop]);
                  return b[prop] - a[prop];
                });
              }
            sortArray(json,"hoursInSpace");
            
            const p = document.createElement("p");
            const h1 = document.querySelector("h1");
            p.innerHTML = "Astronaut Count: " + json.length;
              h1.appendChild(p);

            for (let i = 0; i < json.length; i++) {
                let astroStatus; 
                    if (json[i].active === true) {
                        astroStatus = "active";
                    } else {
                        astroStatus = "";
                    }
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li class="${astroStatus}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                `;      
            }
        }); 
    });
});