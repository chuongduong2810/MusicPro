axios.get(`${host}/music/artist`)
    .then(res => {
        res.data.map((item, index) => {
            document.getElementById('artist').innerHTML += `
                <option value="${item.name}">${item.name}</option>
                `;
        })
    })
    .catch(err => {
        console.log("Error Render Track", err);
    })