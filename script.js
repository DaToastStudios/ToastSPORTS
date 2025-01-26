function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch((err) => {
        console.error('Failed to copy: ', err);
    });
}
