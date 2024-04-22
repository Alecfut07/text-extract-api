import { Carousel, IconButton } from "@material-tailwind/react";

function ExtractedTextStringResults({ data }) {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) =>
        data.length > 1 ? (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-2/4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        ) : null
      }
      nextArrow={({ handleNext }) =>
        data.length > 1 ? (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 top-2/4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        ) : null
      }
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="mb-4 p-4">
        <div className="rounded bg-gray-100">
          <ul className="p-4">
            {Object.entries(data).map(([key, value]) => (
              <li key={key} className="mb-2">
                <div className="flex justify-center">
                  <span className="mr-1 font-bold">{key}:</span>
                  <div className="text-left">
                    {typeof value === "object" ? (
                      <pre className="text-sm">
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    ) : (
                      <span className="text-sm">{value}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Carousel>
  );
}

export default ExtractedTextStringResults;
