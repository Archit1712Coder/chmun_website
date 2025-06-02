import { Button } from "../../components/ui/button";

function AIPPM() {
  return (
    <div
      className="min-h-screen bg-black text-white pt-20"
      style={{
        backgroundImage: `url(/aippm.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tight text-center mt-16 mb-8">
          All India Political Parties Meet
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 text-center mb-12">
          <strong>Agenda:</strong> Discussing National Policy Reforms
        </p>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-16">
          The All India Political Parties Meet (AIPPM) brings together
          representatives of Indian political parties to debate and formulate
          national policy reforms. Delegates engage in dynamic discussions,
          representing diverse political ideologies to address critical issues
          facing the nation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://example.com/aippm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Matrix
            </Button>
          </a>
          <a
            href="https://example.com/aippm-bg-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Background Guide
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AIPPM;
