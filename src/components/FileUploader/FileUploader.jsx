function FileUploader({ onChange, file }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile === undefined || selectedFile === null) {
      alert("Por favor, selecciona un archivo.");
    } else {
      onChange(selectedFile);
    }
  };

  return (
    <div className="mb-4 mt-4 flex flex-grow justify-center">
      <div className="flex items-center">
        <input
          type="file"
          name="file"
          accept=".pdf"
          title="Seleccionar archivo PDF"
          className="min-w-96 rounded border px-3 py-2"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default FileUploader;
