export default function Clusters() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        Clusters
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Manage and monitor your Kubernetes and OpenShift clusters.
      </p>

      <div className="space-y-4">
        {[
          {
            name: "Production Cluster",
            status: "Healthy",
            nodes: 12,
            pods: 248,
            cpu: 68,
            memory: 72,
          },
          {
            name: "Staging Cluster",
            status: "Healthy",
            nodes: 6,
            pods: 124,
            cpu: 42,
            memory: 55,
          },
          {
            name: "Development Cluster",
            status: "Warning",
            nodes: 4,
            pods: 89,
            cpu: 85,
            memory: 78,
          },
          {
            name: "Testing Cluster",
            status: "Healthy",
            nodes: 3,
            pods: 45,
            cpu: 32,
            memory: 41,
          },
        ].map((cluster, index) => (
          <button
            key={index}
            className="w-full bg-white border border-[#e0e0e0] rounded-lg p-6 text-left hover:border-[#06c] transition-all"
            onClick={() => alert(`View cluster details: ${cluster.name}`)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="size-[48px] rounded-lg bg-[#06c] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" fill="white" />
                    <circle cx="6" cy="6" r="2" fill="white" />
                    <circle cx="18" cy="6" r="2" fill="white" />
                    <circle cx="6" cy="18" r="2" fill="white" />
                    <circle cx="18" cy="18" r="2" fill="white" />
                    <line x1="12" y1="9" x2="12" y2="6" stroke="white" strokeWidth="1.5" />
                    <line x1="12" y1="15" x2="12" y2="18" stroke="white" strokeWidth="1.5" />
                    <line x1="9" y1="12" x2="6" y2="12" stroke="white" strokeWidth="1.5" />
                    <line x1="15" y1="12" x2="18" y2="12" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#151515]">
                    {cluster.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`px-3 py-1 rounded-full font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[12px] ${
                        cluster.status === "Healthy"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {cluster.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[20px] text-[#151515]">
                    {cluster.nodes}
                  </p>
                  <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[12px] text-[#707070]">Nodes</p>
                </div>
                <div className="text-center">
                  <p className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[20px] text-[#151515]">
                    {cluster.pods}
                  </p>
                  <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[12px] text-[#707070]">Pods</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#707070]">
                    CPU Usage
                  </span>
                  <span className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[14px] text-[#151515]">
                    {cluster.cpu}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      cluster.cpu > 80 ? "bg-orange-500" : "bg-[#06c]"
                    }`}
                    style={{ width: `${cluster.cpu}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#707070]">
                    Memory Usage
                  </span>
                  <span className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[14px] text-[#151515]">
                    {cluster.memory}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      cluster.memory > 80 ? "bg-orange-500" : "bg-[#06c]"
                    }`}
                    style={{ width: `${cluster.memory}%` }}
                  />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
