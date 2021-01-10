axios.get(`${host}/music/Track`)
    .then(res => {
        res.data.map((item, index) => {
            document.getElementById('listTrackAdmin').innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <img src="${host}/imageDATA/${item.artworkImage}" alt="${item.name}" />
                    </td>
                    <td>${item.name}</td>
                    <td>${item.album.name}</td>
                    <td>${item.artist.name}</td>
                    <td>${item.genre.toUpperCase()}</td>
                    <td>
                        <audio controls>
                            <source src="${host}/musicData/${item.fileName}" type="audio/mpeg">
                        </audio>
                    </td>
                    <td>
                        <a class="btn btn-warning" href="./admin_updateproduct.html"
                            onclick="getIdProduct('${item._id}')">Chỉnh sửa</a>
                        <a class="btn btn-danger" href="./admin_updateproduct.html"
                            onclick="getIdProduct('${item._id}')">Xem</a>
                    </td>
                </tr>
                `;
        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })