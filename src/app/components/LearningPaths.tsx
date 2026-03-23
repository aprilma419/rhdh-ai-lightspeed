export default function LearningPaths() {
  return (
    <div className="p-8">
      <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#151515] mb-6">
        Learning Paths
      </h1>
      <p className="font-['Red_Hat_Text:Regular',sans-serif] text-[16px] text-[#707070] mb-8">
        Structured learning paths to help you master different technologies and skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Red Hat OpenShift Basics",
            level: "Beginner",
            duration: "4 hours",
            modules: 8,
            progress: 0,
          },
          {
            title: "Kubernetes Administration",
            level: "Intermediate",
            duration: "6 hours",
            modules: 12,
            progress: 45,
          },
          {
            title: "CI/CD with Jenkins",
            level: "Intermediate",
            duration: "5 hours",
            modules: 10,
            progress: 100,
          },
          {
            title: "Ansible Automation",
            level: "Advanced",
            duration: "8 hours",
            modules: 15,
            progress: 20,
          },
        ].map((path, index) => (
          <button
            key={index}
            className="bg-white border border-[#e0e0e0] rounded-lg p-6 text-left hover:border-[#06c] hover:shadow-lg transition-all"
            onClick={() => alert(`Continue learning: ${path.title}`)}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#151515] mb-2">
                  {path.title}
                </h3>
                <div className="flex items-center gap-4 text-[14px] text-[#707070]">
                  <span
                    className={`px-3 py-1 rounded-full font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold ${
                      path.level === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : path.level === "Intermediate"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {path.level}
                  </span>
                  <span className="font-['Red_Hat_Text:Regular',sans-serif]">{path.duration}</span>
                  <span className="font-['Red_Hat_Text:Regular',sans-serif]">{path.modules} modules</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-['Red_Hat_Text:Regular',sans-serif] text-[14px] text-[#707070]">
                  Progress
                </span>
                <span className="font-['Red_Hat_Text:SemiBold',sans-serif] font-semibold text-[14px] text-[#151515]">
                  {path.progress}%
                </span>
              </div>
              <div className="w-full h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#06c] transition-all"
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
