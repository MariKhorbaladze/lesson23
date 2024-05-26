const xhr = new XMLHttpRequest();
xhr.open ('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onload = () => {
    console.log(xhr);
    if (xhr.status = 200) { 
        const data = (JSON.parse(xhr.response));
        const div = document.createElement("div");
        div.setAttribute("id", "wrapper");
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element);
            const box = document.createElement("div")
            box.setAttribute("id","wrapper_box");
            
            const name = document.createElement('p')
            name.setAttribute('id', 'card_name')
            name.textContent = element.name;
            box.appendChild(name)

            const email = document.createElement('p')
            email.setAttribute('id', 'card_email')
            email.textContent = element.email;
            box.appendChild(email)



            const address = document.createElement('p')
            address.setAttribute('id', 'card_address')
            address.textContent = `${element.address.city}, ${element.address.street}, ${element.address.suite}, ${element.address.zipcode}.`;
            box.appendChild(address)

            div.appendChild(box)
            document.body.appendChild(div)
            console.log(data)
        }
    } else { 
        console.log("Error");
    }
    
}

