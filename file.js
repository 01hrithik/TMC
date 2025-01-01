// Function to handle file upload and display thumbnails
function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileDisplay');

    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        const listItem = document.createElement('li');
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        // Create a thumbnail for images or PDFs
        const fileThumb = document.createElement('img');
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                fileThumb.src = event.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            // If not an image, use a generic PDF icon
            fileThumb.src = 'https://img.icons8.com/ios-filled/50/000000/pdf.png';
        }

        // Create a label with the file name
        const fileName = document.createElement('span');
        fileName.textContent = file.name;

        // Add a remove button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            listItem.remove();
        };

        fileItem.appendChild(fileThumb);
        fileItem.appendChild(fileName);
        fileItem.appendChild(removeBtn);

        listItem.appendChild(fileItem);
        fileList.appendChild(listItem);
    }
}
