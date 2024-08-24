document.getElementById('copyButton').addEventListener('click', function() {
    // Get the text area element
    var textArea = document.getElementById('scriptText');

    // Select the text
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Alert the user that the text has been copied
    alert('Text copied to clipboard!');
});
