document.addEventListener('DOMContentLoaded', function() {
    console.log('Webimatr site is ready!');
});

function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges(); // Clear any existing selections
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Clear the selection after copying
    alert('Code copied to clipboard!');
}
