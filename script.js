// Create an array of sounds
const sounds = ['applause', 'boo', 'victory', 'wrong', 'laugh', 'boing'];

// For each sound, create a button, add a class 'btn", update the text, appdend to DOM
sounds.forEach((sound) => {
    // Create a button
    const btn = document.createElement('button');

    // Add a class of 'btn' to the button element
    btn.classList.add('btn');

    // Set the button label text to be the same as the string value in the sounds array
    btn.innerText = sound;

    // Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});
