const url = "https://reqres.in/api/users";

function fetchData() {

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error('Check request paramters');
            }
            return response.json();
        })
        .then(data => {

            console.log(data.data)
            const html = data.data.map(user => {
                    return `<div class="user">
                    <p>Name: ${user.first_name}</p>
                    <p>Surname: ${user.last_name}</p>
                    <p>Email: ${user.email}</p>
                    <p><img src ="${user.avatar}" alt=""/>
                    </div>`
                })
                .join("");
            console.log(html);
            document.querySelector('#app').insertAdjacentHTML("afterbegin", html);

        })
        .catch((error) => {
            console.error('Error:', error);
        });


}
fetchData();