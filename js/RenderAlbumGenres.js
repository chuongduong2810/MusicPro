axios.get(`${host}/music/Album`)
    .then(res => {
        let j = 0;
        res.data.map(item => {
            if (j > 8) {
                return;
            }
            document.getElementById('flexiselDemo1').innerHTML += `
                <li onclick="handleOnClick('${item._id}')">
                    <a><img src="${host}/imageDATA/${item.image}" /></a>
                    <div class="slide-title">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="date-city">
                        <h5>Jan-02-16</h5>
                        <div class="buy-tickets">
                            <a>LISTEN NOW</a>
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


function handleOnClick(id) { 
    console.log('Clicked',id)
    localStorage.setItem('album',id);
    window.location=`./AlbumTracks.html?id=${id}`;
 }