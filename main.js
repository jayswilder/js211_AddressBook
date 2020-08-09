window.onload = function () {
    fetchContactInfoData()
}


const fetchContactInfoData = () => {

    fetch("https://randomuser.me/api/?results=100")
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error("ERROR")
            }
            return response.json()
        })
        .then(data => {
            console.log(data.results);
            const displayContactsToHtml = data.results.map(user => {
                // console.log(user.login.username)
                return `
                <div class="container">
                    <div class="photos">
                        <img src='${user.picture.large}'>
                        <br>
                        <p>
                        <span class="bold"> <p>${user.name.first}</p> <p class="person">${user.name.last}</p></span> 
                        </p>
                    </div>
                    <div class="contact-information" id="${user.login.username}">
                        <ul>
                            <li> 
                                <span class="bold"> Gender: </span> ${user.gender}
                            </li>
                            <li>
                                <span class="bold"> Location: </span> ${user.location.country}
                            </li>
                            <li>
                                <span class="bold"> Age: </span> ${user.dob.age}
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <span class="bold"> D.O.B.: </span> ${user.dob.date}
                            </li>
                            <li>
                                <span class="bold"> Cell: </span> ${user.cell}
                            </li>
                            <li>
                                <span class="bold"> Email: </span> ${user.email}
                            </li>   
                        </ul>
                        </div>
                        <button onclick="showInfo(${user.login.username})">
                        <p>S</p>
                        <p>h</p>
                        <p>o</p>
                        <p>w</p>
                        <br>
                        <p>I</p>
                        <p>n</p>
                        <p>f</p>
                        <p>o</p>
                        </button>
                </div>
                `
            }).join('')
            // console.log(displayContactsToHtml)
            document
                .getElementById('displayContacts')
                .insertAdjacentHTML('afterend', displayContactsToHtml);
        })
        .catch(error => {
            console.log(error);
        })
};

function showInfo(id) {
    // console.log(id)
    id.style.visibility = "visible";
}