import { useState } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import FileUploader from "../FileUploader/FileUploader";
import CustomTabs from "../CustomTabs/CustomTabs";
import PDFViewer from "../PDFViewer/PDFViewer";
import ExtractedTextResults from "../ExtractedTextResults/ExtractedTextResults";

function Body() {
  const [activeTab, setActiveTab] = useState("Vista Previa");

  const handleTabChange = (value) => setActiveTab(value);

  return (
    <div className="mx-auto  py-12">
      <div className="flex flex-row justify-between">
        {/* Lado izquierdo */}
        <div className="w-1/2 flex justify-center">
          <div className="p-4">
            <h2 className="font-bold text-xl text-center">
              Extraiga texto de archivos PDF con facilidad
            </h2>
            <p className="text-center">
              Simplemente elija un archivo PDF y haga clic en el botón extraer
              texto para comenzar.
            </p>
            <FileUploader />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-lg">Vista Previa</h3>
                <p>
                  Vea una vista previa del contenido del archivo PDF
                  seleccionado.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Texto Extraído</h3>
                <p>
                  Muestra cada conjunto del texto extraído del archivo PDF en un
                  cuadrado separado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="w-1/2 p-4">
          <Card>
            <CardHeader size="lg">
              <CustomTabs activeTab={activeTab} onChange={handleTabChange} />
            </CardHeader>
            <CardBody className="w-full max-h-screen overflow-auto mt-6">
              {activeTab === "Vista Previa" ? (
                <PDFViewer />
              ) : (
                <ExtractedTextResults />
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Body;
