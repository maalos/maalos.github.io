fetch('https://maalos.ga/projects/motd/motd.txt')
  .then(res => res.blob())
  .then(blob => {
    let objectURL = URL.createObjectURL(blob);
    let motd = new Text();
    motd.src = objectURL;
    document.getElementById('motd').innerHTML = motd;
});
