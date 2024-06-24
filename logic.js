document.getElementById('run').addEventListener('click', function() {
    // Get the content of the code editor
    var code = document.getElementById('code-input').value;

    // Display the combined code in the iframe
    document.getElementById('outputFrame').srcdoc = code;
});
 