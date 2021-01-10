axios.get(`${host}/music/genre/${Genre}`)
    .then(res => {
        res.data.map((item, index) => {
            document.getElementById('listTrackGenre').innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <img src="${host}/imageDATA/${item.artworkImage}" alt="${item.name}" />
                    </td>
                    <td>${item.name}</td>
                    <td>
                        <audio controls>
                            <source src="${host}/musicData/${item.fileName}" type="audio/mpeg">
                        </audio>
                    </td>
                </tr>
                `;
        })

    })
    .catch(err => {
        console.log("Error Render Track", err);
    })