axios.get(`${host}/music/Album`)
    .then(res => {
        let j = 0;
        res.data.map(item => {
            if (j > 8) {
                return;
            }
            document.getElementById('flexiselDemo1').innerHTML += `
                <li>
                    <a href="browse.html"><img src="${host}/imageDATA/${item.image}" /></a>
                    <div class="slide-title">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="date-city">
                        <h5>Jan-02-16</h5>
                        <div class="buy-tickets">
                            <a href="browse.html">LISTEN NOW</a>
                        </div>
                    </div>
                </li>
                `;
            j++;
        })

    })
    .catch(err => {
        console.log("Error Render Featured Album", err);
    })