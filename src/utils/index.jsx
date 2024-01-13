
//  -----------------------------

export const handleImagePaste = (event, onImagePaste) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let item of items) {
        if (item.kind === 'file') {
            const file = item.getAsFile();
            onImagePaste(file);
        }
    }
};
