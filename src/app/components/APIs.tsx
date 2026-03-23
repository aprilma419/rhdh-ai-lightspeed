export default function APIs() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        APIs
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Explore and manage your organization's API endpoints and documentation.
      </p>

      <div className="space-y-4">
        {[
          { name: "REST API v1", endpoint: "/api/v1", status: "Active", requests: "1.2M/day" },
          { name: "GraphQL API", endpoint: "/graphql", status: "Active", requests: "450K/day" },
          { name: "Webhook Service", endpoint: "/webhooks", status: "Active", requests: "89K/day" },
          { name: "Admin API", endpoint: "/api/admin", status: "Active", requests: "12K/day" },
          { name: "Legacy API v0", endpoint: "/api/v0", status: "Deprecated", requests: "3K/day" },
        ].map((api, index) => (
          <button
            key={index}
            className="w-full bg-white border border-[#e0e0e0] rounded-lg p-6 text-left hover:border-[#06c] transition-all flex items-center justify-between"
            onClick={() => alert(`View API documentation for ${api.name}`)}
          >
            <div className="flex-1">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#151515] mb-1">
                {api.name}
              </h3>
              <p className="font-['Red_Hat_Text:Mono',monospace] text-[14px] text-[#707070]">{api.endpoint}</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[16px] text-[#151515]">
                  {api.requests}
                </p>
                <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[12px] text-[#707070]">Requests</p>
              </div>
              <span
                className={`px-4 py-1 rounded-full font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[14px] ${
                  api.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {api.status}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
