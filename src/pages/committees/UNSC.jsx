import { Button } from "../../components/ui/button";

function UNSC() {
  return (
    <div
      className="min-h-screen bg-black text-white pt-20"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x1080?text=UNSC+Background')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tight text-center mt-16 mb-8">
          United Nations Security Council
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 text-center mb-12">
          <strong>Agenda:</strong> Addressing Global Security Threats
        </p>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-16">
          The United Nations Security Council (UNSC) is responsible for
          maintaining international peace and security, addressing global
          threats through diplomacy and resolutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://example.com/unsc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-black hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Matrix
            </Button>
          </a>
          <a
            href="https://example.com/unsc-bg-guide"
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

export default UNSC;
