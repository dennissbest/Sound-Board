// Create an array of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'laugh', 'boing'];

// For each sound, create a button, add a class 'btn", update the text, appdend to DOM
sounds.forEach((sound) => {
    // Create a button
    const btn = document.createElement('button');

    // Add a class of 'btn' to the button element
    btn.classList.add('btn');

    // Set the button label text to be the same as the string value in the sounds array
    btn.innerText = sound;

    // Add an event listener to this button
    btn.addEventListener('click', () => {
        // I ended up removing the stop sounds button as I liked the idea of the choas of them "talking" over eachtoehr 
        document.getElementById(sound).play();
    });

    // Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}
