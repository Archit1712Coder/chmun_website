import Navbar from "@/components/Navbar";
import { Button } from "../components/ui/button";

function Committees() {
  const committees = [
    {
      abbr: "AIPPM",
      fullForm: "All India Political Parties Meet",
      agenda:
        "Deliberation on UCC with special emphasis on the recent WAQF bill",
      bgImage: "/aippm.avif",
    },
    {
      abbr: "UNSC",
      fullForm: "United Nations Security Council",
      agenda: "Addressing Global Security Threats",
      bgImage: "/unsc.avif",
    },
    {
      abbr: "DISEC",
      fullForm: "Disarmament and International Security Committee",
      agenda: "Nuclear Disarmament Strategies",
      bgImage: "disec.jpg",
    },
    {
      abbr: "UNODC",
      fullForm: "United Nations Office on Drugs and Crime",
      agenda: "Combating Transnational Organized Crime",
      bgImage: "unodc.jpeg",
    },
    {
      abbr: "CCC",
      fullForm: "Crisis Committee Council",
      agenda: "Managing Global Crises",
      bgImage: "ccc.jpeg",
    },
    {
      abbr: "UNHRC",
      fullForm: "United Nations Human Rights Council",
      agenda: "Promoting Global Human Rights",
      bgImage: "unhrc.jpeg",
    },
  ];

  return (
    <div className="bg-black text-white pt-20">
      <Navbar />
      {committees.map((committee, index) => (
        <section
          key={committee.abbr}
          className="relative w-full h-[600px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${committee.bgImage})` }}
        >
          {/* Diagonal Slash with Transparency */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent clip-path-diagonal"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl w-full pl-8 sm:pl-12 lg:pl-16 text-left">
            <h2 className="text-7xl md:text-9xl font-black tracking-tight">
              {committee.abbr}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mt-2">
              {committee.fullForm}
            </p>
            <p className="text-2xl md:text-2xl text-gray-200 mt-12">
              Agenda: {committee.agenda}
            </p>
            <Button className="mt-10 bg-white text-black hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Learn More
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Committees;
