import { useState } from "react";
import { Field } from "formik";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import FileUploader from "../FileUploader/FileUploader";

function CustomStepper({ onChange, file }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="flex w-full flex-col items-center px-1 py-8">
      <div className="mb-8 flex flex-col items-center">
        {activeStep === 0 && <FileUploader onChange={onChange} file={file} />}
        {activeStep === 1 && (
          <div className="mb-4">
            <label>Busqueda:</label>
            <Field
              as="textarea"
              name="search"
              className="min-h-32 w-full min-w-96 rounded border"
            />
          </div>
        )}
        {activeStep === 2 && (
          <div className="mb-4">
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
        )}
      </div>
      <div className="w-full px-1 py-4">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <label>1</label>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Paso 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Subir PDF
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <label>2</label>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Paso 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Escriba lo que desea buscar.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <label>3</label>
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Paso 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Haga clic en extraer texto.
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>
      <div className="mt-32 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep} className="mr-32">
          Anterior
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default CustomStepper;
