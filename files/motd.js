fetch('https://maalos.ga/files/motd.txt',)
    .then(res => res.blob())
    .then(blob => blob.text())
    .then(text => {
    document.getElementById('motd').innerHTML = text;
})
