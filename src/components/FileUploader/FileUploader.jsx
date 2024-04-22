import { Button } from "@material-tailwind/react";

function FileUploader() {
  return (
    <div className="mb-4 flex-grow flex justify-center mt-4">
      <div className="flex items-center">
        <input
          type="file"
          name="file"
          accept=".pdf"
          title="Seleccionar archivo PDF"
          className="min-w-96 rounded border px-3 py-2"
        />
        <Button type="submit" variant="gradient" color="green" className="ml-2">
          Extraer texto
        </Button>
      </div>
    </div>
  );
}

export default FileUploader;
