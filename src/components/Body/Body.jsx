import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import FileUploader from "../FileUploader/FileUploader";

function Body() {
  return (
    <div className="mx-auto  py-12">
      <div className="flex flex-row justify-between">
        {/* Lado izquierdo */}
        <div className="w-1/2 p-4">
          <h2 className="font-bold text-xl">
            Extract Text from PDF Files with Ease
          </h2>
          <p>
            Simply choose a PDF file and click the extract text button to get
            started.
          </p>
          <FileUploader />
        </div>

        {/* Lado derecho */}
        <div className="w-1/2 p-4">
          <Card>
            <CardHeader size="lg">
              <h2 className="font-bold text-xl">PDF Preview</h2>
            </CardHeader>
            <CardBody>
              <iframe className="w-full h-96"></iframe>
              {/* Reemplaza "URL_DEL_PDF" con la URL o la ruta local de tu PDF */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Body;
