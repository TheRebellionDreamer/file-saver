const saveFileAs = (file: Blob, name: string) => {
	const href = URL.createObjectURL(file);
	const link = window.document.createElement('a');

	link.setAttribute('href', href);
	link.setAttribute('download', name);

	link.click();
	link.remove();

	URL.revokeObjectURL(href);
};

export default saveFileAs;
