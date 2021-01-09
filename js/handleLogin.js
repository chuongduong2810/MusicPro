$("#login").on("click", function (e) {
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    axios.post(`${host}/user/login`, {
        email,
        password,
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
})