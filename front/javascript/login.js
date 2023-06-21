const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        e.preventDefault();
        alert("Please fill all the fields");
    }

    if (email !== "" && password !== "") {
        try {
            (async () => {
                console.log("here");
                const accessToken = await axios.post(
                    "http://localhost:3000/login",
                    {},
                    {
                        auth: {
                            username: email,
                            password: password,
                        },
                    }
                );
                console.log(accessToken);
                if (accessToken != null) {
                    window.location.href =
                        "http://127.0.0.1:5500/front/html/reembolso-pendente.html";
                }
                return accessToken;
            })();
        } catch (error) {
            alert("Invalid credentials");
        }
    }

    e.preventDefault();
});
