export default function TechRadar() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        Tech Radar
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Discover and evaluate emerging technologies, tools, and practices for your organization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {["Adopt", "Trial", "Assess", "Hold"].map((status, index) => (
          <div key={status} className="bg-white border-2 border-[#e0e0e0] rounded-lg p-4">
            <h3
              className={`font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[18px] mb-2 ${
                index === 0
                  ? "text-green-600"
                  : index === 1
                  ? "text-blue-600"
                  : index === 2
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </h3>
            <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#707070]">
              {index === 0
                ? "Ready for production use"
                : index === 1
                ? "Worth pursuing with caution"
                : index === 2
                ? "Worth exploring to understand"
                : "Proceed with caution"}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {[
          { name: "Kubernetes", category: "Platforms", status: "Adopt", ring: 0 },
          { name: "GraphQL", category: "Languages & Frameworks", status: "Adopt", ring: 0 },
          { name: "Service Mesh", category: "Techniques", status: "Trial", ring: 1 },
          { name: "WebAssembly", category: "Languages & Frameworks", status: "Assess", ring: 2 },
          { name: "Micro Frontends", category: "Techniques", status: "Trial", ring: 1 },
          { name: "Blockchain", category: "Platforms", status: "Hold", ring: 3 },
          { name: "Rust", category: "Languages & Frameworks", status: "Assess", ring: 2 },
          { name: "GitOps", category: "Techniques", status: "Adopt", ring: 0 },
        ].map((tech, index) => (
          <button
            key={index}
            className="w-full bg-white border border-[#e0e0e0] rounded-lg p-4 text-left hover:border-[#06c] transition-all flex items-center justify-between"
            onClick={() => alert(`View details for ${tech.name}`)}
          >
            <div className="flex items-center gap-4">
              <div
                className={`size-[48px] rounded-lg flex items-center justify-center font-bold text-white ${
                  tech.ring === 0
                    ? "bg-green-600"
                    : tech.ring === 1
                    ? "bg-blue-600"
                    : tech.ring === 2
                    ? "bg-orange-600"
                    : "bg-red-600"
                }`}
              >
                {tech.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#151515]">
                  {tech.name}
                </h3>
                <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#707070]">
                  {tech.category}
                </p>
              </div>
            </div>
            <span
              className={`px-4 py-2 rounded-full font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[14px] ${
                tech.status === "Adopt"
                  ? "bg-green-100 text-green-800"
                  : tech.status === "Trial"
                  ? "bg-blue-100 text-blue-800"
                  : tech.status === "Assess"
                  ? "bg-orange-100 text-orange-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {tech.status}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
