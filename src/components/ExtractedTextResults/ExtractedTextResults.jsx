import { data } from "../../data/example";

function ExtractedTextResults() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {data.map((registro, index) => (
        <div key={index} className="mb-4 p-4">
          <div className="rounded bg-gray-100">
            <ul className="p-4">
              {Object.entries(registro).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <span className="font-bold">{key}:</span>{" "}
                  {typeof value === "object" ? (
                    <pre className="text-sm">
                      {JSON.stringify(value, null, 2)}
                    </pre>
                  ) : (
                    <span className="text-sm">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExtractedTextResults;
