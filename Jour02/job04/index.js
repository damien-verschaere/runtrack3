var input = document.getElementById('text');

function appendCharacter(c) {
    switch (c) {
        case 8: // Backspace
            input.value = input.value.slice(0, -1);
            break;
        default:
            input.value = input.value + String.fromCharCode(c);
    }
}

// Keypress gets the keyCode of the current character not key.
// e.g. pressing the 'A' key will result in 'a' unless 'Shift' is also held.
window.addEventListener('keypress', function (e) {
    console.log(e.charCode);
    console.log(e.keyCode);
    appendCharacter(e.keyCode);
});

// Use Keydown to get special keys like Backspace, Enter, Esc.
window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 8: // Backspace
            e.preventDefault(); // Stops the backspace key from acting like the back button.
            appendCharacter(e.keyCode);
            break;
    }
});