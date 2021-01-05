fetch('https://maalos.ga/projects/motd/motd.txt',)
    .then(res => res.blob())
    .then(blob => blob.text())
    .then(text => {
    document.getElementById('motd').innerHTML = motd;
})
