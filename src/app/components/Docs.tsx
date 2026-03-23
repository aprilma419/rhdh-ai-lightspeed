export default function Docs() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        Documentation
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Access comprehensive documentation, guides, and tutorials for all your development needs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#151515]">
            Getting Started
          </h2>
          {[
            "Quick Start Guide",
            "Installation Instructions",
            "Configuration Setup",
            "First Application Tutorial",
          ].map((doc, index) => (
            <button
              key={index}
              className="w-full bg-white border border-[#e0e0e0] rounded-lg p-4 text-left hover:border-[#06c] transition-all flex items-center gap-3"
              onClick={() => alert(`Opening: ${doc}`)}
            >
              <div className="size-[40px] rounded-lg bg-[#f2f2f2] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#06c" strokeWidth="2" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#06c" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-['Red_Hat_Text:Medium',sans-serif] font-medium text-[16px] text-[#151515]">
                {doc}
              </p>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#151515]">
            API Reference
          </h2>
          {[
            "REST API Documentation",
            "GraphQL Schema Reference",
            "Authentication Guide",
            "Error Codes & Troubleshooting",
          ].map((doc, index) => (
            <button
              key={index}
              className="w-full bg-white border border-[#e0e0e0] rounded-lg p-4 text-left hover:border-[#06c] transition-all flex items-center gap-3"
              onClick={() => alert(`Opening: ${doc}`)}
            >
              <div className="size-[40px] rounded-lg bg-[#f2f2f2] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#06c" strokeWidth="2" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#06c" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-['Red_Hat_Text:Medium',sans-serif] font-medium text-[16px] text-[#151515]">
                {doc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
