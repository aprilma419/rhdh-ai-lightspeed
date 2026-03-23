export default function Catalog() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        Catalog
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Browse and discover available components, APIs, and services in your organization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "User Service", type: "Service", description: "Authentication and user management service" },
          { name: "Payment API", type: "API", description: "Process payments and manage transactions" },
          { name: "Analytics Dashboard", type: "Component", description: "Real-time analytics and reporting" },
          { name: "Notification Service", type: "Service", description: "Send emails, SMS, and push notifications" },
          { name: "Data Pipeline", type: "Pipeline", description: "ETL pipeline for data processing" },
          { name: "Image Processing", type: "Service", description: "Resize, crop, and optimize images" },
        ].map((item, index) => (
          <button
            key={index}
            className="bg-white border border-[#e0e0e0] rounded-lg p-6 text-left hover:border-[#06c] hover:shadow-lg transition-all"
            onClick={() => alert(`View details for ${item.name}`)}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="size-[40px] rounded-lg bg-[#06c] flex items-center justify-center text-white font-bold text-[18px]">
                {item.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#151515]">
                  {item.name}
                </h3>
                <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[12px] text-[#707070]">{item.type}</p>
              </div>
            </div>
            <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#151515] leading-[21px]">
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
