document.getElementById('run-code').addEventListener('click', function() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;

    const outputFrame = document.getElementById('output');
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;

    output.open();
    output.write(`
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    output.close();
});

document.getElementById('save-btn').addEventListener('click', function() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;

    const codeSnippets = {
        html: htmlCode,
        css: cssCode,
        js: jsCode,
    };

    localStorage.setItem('codeSnippets', JSON.stringify(codeSnippets));
    alert('Code saved successfully!');
});

// Load saved code snippets on page load
window.onload = function() {
    const savedCode = JSON.parse(localStorage.getItem('codeSnippets'));
    if (savedCode) {
        document.getElementById('html-code').value = savedCode.html;
        document.getElementById('css-code').value = savedCode.css;
        document.getElementById('js-code').value = savedCode.js;
    }
};