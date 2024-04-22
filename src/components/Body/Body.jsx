import { useState } from "react";
import { Formik, Form } from "formik";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Swal from "sweetalert2";
import FileUploader from "../FileUploader/FileUploader";
import CustomTabs from "../CustomTabs/CustomTabs";
import PDFViewer from "../PDFViewer/PDFViewer";
import ExtractedTextResults from "../ExtractedTextResults/ExtractedTextResults";
import PDFService from "../../services/PDFService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function Body() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [textExtracted, setTextExtracted] = useState(false);
  const [activeTab, setActiveTab] = useState("Vista Previa");

  const initialValues = {
    file: null,
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    // setTextExtracted(false);
    setData([]);
    setActiveTab("Vista Previa");
  };

  const parseJSON = (result) => {
    // Extraiga la cadena JSON del generated_content.
    const jsonString = result.generated_content.match(/\[.*\]/s)[0];
    // Elimina los indicadores del bloque de código Markdown.
    const cleanedJsonString = jsonString.replace(/^```json|```$/g, "");
    // Aplicar parse al JSON data.
    const jsonData = JSON.parse(cleanedJsonString);
    setData(jsonData);
  };

  const convertPDF = async (values) => {
    try {
      setLoading(true);
      const result = await PDFService.convertirPDF(values.file);
      parseJSON(result);
      // setTextExtracted(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Extracción del texto",
        text: "Fue exitosa!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        text: "Algo salió mal!",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (values) => {
    values.file = file;
    setActiveTab("Texto Extraído");
    convertPDF(values);
  };

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
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <FileUploader onChange={handleFileChange} file={file} />
                </Form>
              )}
            </Formik>
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
                <PDFViewer file={file} />
              ) : (
                <LoadingSpinner
                  loading={loading}
                  Componente={<ExtractedTextResults data={data} />}
                />
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Body;
