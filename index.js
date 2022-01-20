const API_URL = 'https://jsonplaceholder.typicode.com/';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState == 4 && this.status == 200) {

        const data = (this.response);
        console.log(data);

    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}users`);
xhr.send();