axios.get(`${host}/music/Album`)
    .then(res => {
        let j = 0;
        res.data.map(item => {
            if (j > 8) {
                return;
            }
            let date = item.createdate.slice(0,10);
            console.log(date)
            document.getElementById('flexiselDemo1').innerHTML += `
                <li onclick="handleOnClick('${item._id}')">
                    <a><img src="${host}/imageDATA/${item.image}" /></a>
                    <div class="slide-title">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="date-city">
                        <h5>${date}</h5>
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

 async function handleOnClick(id) { 
    console.log('Clicked',id);
    let albumName;
    await axios.get(`${host}/music/album`)
    .then(res=>{
        let item = res.data.find(item=>item._id===id);
        albumName = item.name;
        console.log(albumName);
        localStorage.setItem('albumName',albumName);
        console.log(localStorage.getItem('albumName'));

    })
    .catch(err=>console.log('ERROR',err));
    localStorage.setItem('album',id);
   
    window.location=`./AlbumTracks.html?id=${id}`;
 }