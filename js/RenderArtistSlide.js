axios.get(`${host}/music/artist`)
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
                    <h5>ARTIST</h5>
                    <div class="buy-tickets">
                        <a>VIEW ALL TRACK</a>
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
    let artistName;
    await axios.get(`${host}/music/artist`)
    .then(res=>{
        let item = res.data.find(item=>item._id===id);
        artistName = item.name;
        console.log(artistName);
        localStorage.setItem('artistName',artistName);
        console.log(localStorage.getItem('artistName'));

    })
    .catch(err=>console.log('ERROR',err));
    localStorage.setItem('artist',id);
   
    window.location=`./artisttracks.html?id=${id}`;
 }