axios.get(`${host}/music/album`)
    .then(res => {
        res.data.map((item) => {
            if (item.name == album) {
                item.tracks.map((item2, index) => {
                    document.getElementById('listTrackGenre').innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>
                                <img src="${host}/imageDATA/${item2.artworkImage}" alt="${item2.name}" />
                            </td>
                            <td>${item2.name}</td>
                            <td>
                                <audio controls>
                                    <source src="${host}/musicData/${item2.fileName}" type="audio/mpeg">
                                </audio>
                            </td>
                        </tr>
                    `;
                })
            }

        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })