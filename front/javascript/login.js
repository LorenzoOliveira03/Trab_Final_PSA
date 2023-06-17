const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        e.preventDefault();
        alert("Please fill all the fields");
    }

    if (email !== "" && password !== "") {
        (async () => {
            console.log("here");
            const accessToken = await axios.post(
                "http://localhost:3000/login",
                {
                    username: email,
                    password: password,
                }
            );
            console.log(accessToken);
            return accessToken;
        })();
    }
});
