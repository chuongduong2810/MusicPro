axios.get(`${host}/music/Album`)
    .then(res => {
        let j = 0;
        res.data.map(item => {
            if (j > 4) {
                return;
            }
            let date = item.createdate.slice(0,10);
            console.log(date)
            document.getElementById('slider4').innerHTML += `
                <li onclick = handleOnClick('${item._id}')>
                    <div class="banner-img">
                        <img src="${host}/imageDATA/${item.image}" class="img-responsive" alt="banner1">
                    </div>
                    <div class="banner-info">
                        <a class="trend" href="#">TRENDING</a>
                        <h3>${item.name}</h3>
                        <p>Album by <span>${item.artist.name}</span></p>
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