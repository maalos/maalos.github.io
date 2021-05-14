var app = document.getElementById('header');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('I make websites.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I code Python programs.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I code Discord bots.')
    .pauseFor(2000)
    .deleteAll()
    .start();
