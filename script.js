function copyCode() {
    // Get the code element
    var codeElement = document.getElementById('code');

    // Create a range object
    var range = document.createRange();
    range.selectNode(codeElement);

    // Remove any existing selection
    window.getSelection().removeAllRanges();

    // Add the range to the selection
    window.getSelection().addRange(range);

    try {
      // Copy the selected text
      document.execCommand('copy');
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }

    // Clear the selection
    window.getSelection().removeAllRanges();
  }
