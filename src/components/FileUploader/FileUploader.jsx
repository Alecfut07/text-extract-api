import { Button } from "@material-tailwind/react";

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
    <div className="mb-4 flex-grow flex justify-center mt-4">
      <div className="flex items-center">
        <input
          type="file"
          name="file"
          accept=".pdf"
          title="Seleccionar archivo PDF"
          className="min-w-96 rounded border px-3 py-2"
          onChange={handleFileChange}
        />
        <Button
          type="submit"
          variant="gradient"
          color="green"
          className="ml-2"
          disabled={!file}
        >
          Extraer texto
        </Button>
      </div>
    </div>
  );
}

export default FileUploader;
