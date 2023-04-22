function getInputValue(id) {


    let value = document.getElementById(id).value;

    return value;

}

function User(e, p) {

    // this.name = n;
    this.email = e;
    this.password = p;
    // this.username = u;
    // this.mobile = m;
    // this.description = d;

}

async function Register(event) {

    event.preventDefault();

    // const name = getInputValue("name")
    const email = getInputValue("email")
    const password = getInputValue("pass")
    // const username = getInputValue("user")
    // const mobile = getInputValue("mob")
    // const description = getInputValue("desc")


    let user_data = new User(email, password)
    console.log(user_data);



    const register_url = `https://masaihospital.onrender.com/user/register`


    let res = await fetch(register_url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(user_data),
        headers: {

            "Content-Type": "application/json",
        },

    });

    let data = await res.json()
    console.log(data)


}

async function login(event) {

    event.preventDefault();
    let Login_data = {

        username: document.getElementById("email").value,
        password: document.getElementById("pass").value,


    };

    const login_url = `https://masaihospital.onrender.com/user/login`

    let res = await fetch(login_url, {

        method: "POST",
        mode: "cors",
        body: JSON.stringify(Login_data),

        headers: {

            "Content-Type": "application/json",
        },

    });

    let data = await res.json()
    let token = data.token
    console.log("data :", data)

    getProfile(Login_data.username, token);



}

async function getProfile(username, token) {

    let api = `https://masaihospital.onrender.com/user/${username}`



    let res = await fetch(api, {

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`
        },

    });

    let data = await res.json();
    console.log("data :", data)
    window.location.href = "movie.html"

}