axios.get(`${host}/music/artist`)
    .then(res => {
        res.data.map((item, index) => {
            document.getElementById('listArtistAdmin').innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <img src="${host}/imageDATA/${item.image}" alt="${item.name}" />
                    </td>
                    <td>${item.name}</td>
                    <td>
                        <a class="btn btn-warning" href="./admin_updateproduct.html"
                            onclick="getIdProduct('${item.name}')">Chỉnh sửa</a>
                        <a class="btn btn-danger" onclick="getTrackArtist('${item.name}')">Xem</a>
                    </td>
                </tr>
                `;
        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })
function getTrackArtist(artist) {
    localStorage.setItem("artist_admin", artist);
    window.location = `TrackArtist.html?Artist=${artist}`;
}