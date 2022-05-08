// Add your code here

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    })
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj);
            const p = document.createElement("p");
            p.textContent = obj.id;
            document.body.appendChild(p)
        })
        .catch(err => {
            const p = document.createElement("p");
            p.textContent = err.message;
            document.body.appendChild(p)
        })
}

/* Following the example from the module:

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    }); */

// But I like this one better. It's like you're only writing one function with everything else inside:

/* 
    fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            dogName: "Byron",
            dogBreed: "Poodle",
        }),
    });

*/