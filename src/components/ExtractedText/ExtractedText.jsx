import ExtractedTextResults from "../ExtractedTextResults/ExtractedTextResults";

function ExtractedText() {
  return (
    <div>
      <div className="flex">
        <div className="flex-grow">
          <h2 className="mb-2 text-lg font-bold">Texto extraído del PDF:</h2>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <ExtractedTextResults />
      </div>
    </div>
  );
}

export default ExtractedText;
