import { useState, useEffect, useCallback } from "react";

interface FeedbackModeProps {
  isActive: boolean;
  onClose: () => void;
  repoOwner: string;
  repoName: string;
}

interface FeedbackData {
  domPath: string;
  elementText: string;
  url: string;
  viewportWidth: number;
  viewportHeight: number;
  timestamp: string;
}

export default function FeedbackMode({ isActive, onClose, repoOwner, repoName }: FeedbackModeProps) {
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const getDomPath = (element: HTMLElement): string => {
    const path: string[] = [];
    let current: HTMLElement | null = element;
    
    while (current && current !== document.body) {
      let selector = current.tagName.toLowerCase();
      if (current.id) {
        selector += `#${current.id}`;
      } else if (current.className && typeof current.className === 'string') {
        const classes = current.className.split(' ').filter(c => c).slice(0, 3).join('.');
        if (classes) selector += `.${classes}`;
      }
      path.unshift(selector);
      current = current.parentElement;
    }
    
    return path.join(' > ');
  };

  const handleElementClick = useCallback((e: MouseEvent) => {
    if (!isActive) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.target as HTMLElement;
    
    // Ignore clicks on the feedback UI itself
    if (target.closest('[data-feedback-ui]')) return;
    
    setSelectedElement(target);
    setFeedbackData({
      domPath: getDomPath(target),
      elementText: target.textContent?.slice(0, 100) || "",
      url: window.location.href,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      timestamp: new Date().toISOString(),
    });
    setShowModal(true);
  }, [isActive]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (!isActive) return;
    const target = e.target as HTMLElement;
    if (target.closest('[data-feedback-ui]')) return;
    target.style.outline = "2px solid #0066cc";
    target.style.outlineOffset = "2px";
  }, [isActive]);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if (!isActive) return;
    const target = e.target as HTMLElement;
    target.style.outline = "";
    target.style.outlineOffset = "";
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener("click", handleElementClick, true);
      document.addEventListener("mouseover", handleMouseOver, true);
      document.addEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "crosshair";
    }

    return () => {
      document.removeEventListener("click", handleElementClick, true);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "";
    };
  }, [isActive, handleElementClick, handleMouseOver, handleMouseOut]);

  const submitFeedback = async () => {
    if (!feedbackData || !comment.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const issueBody = `## UI Feedback

**Comment:** ${comment}

### Element Details
- **DOM Path:** \`${feedbackData.domPath}\`
- **Element Text:** ${feedbackData.elementText || "N/A"}
- **URL:** ${feedbackData.url}
- **Viewport:** ${feedbackData.viewportWidth}x${feedbackData.viewportHeight}
- **Timestamp:** ${feedbackData.timestamp}

---
*Submitted via RHDH AI Lightspeed Feedback Tool*`;

    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          title: `[UI Feedback] ${comment.slice(0, 50)}${comment.length > 50 ? "..." : ""}`,
          body: issueBody,
          labels: ["feedback", "ui"],
        }),
      });

      if (response.status === 201) {
        setSubmitStatus("success");
        setTimeout(() => {
          setShowModal(false);
          setComment("");
          setSubmitStatus("idle");
        }, 2000);
      } else {
        // If API fails (likely due to auth), show manual option
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (!feedbackData) return;
    
    const text = `## UI Feedback

**Comment:** ${comment}

### Element Details
- **DOM Path:** \`${feedbackData.domPath}\`
- **Element Text:** ${feedbackData.elementText || "N/A"}
- **URL:** ${feedbackData.url}
- **Viewport:** ${feedbackData.viewportWidth}x${feedbackData.viewportHeight}
- **Timestamp:** ${feedbackData.timestamp}`;

    navigator.clipboard.writeText(text);
    alert("Feedback copied to clipboard! You can paste it in a GitHub issue.");
  };

  const openGitHubIssue = () => {
    const title = encodeURIComponent(`[UI Feedback] ${comment.slice(0, 50)}${comment.length > 50 ? "..." : ""}`);
    const body = encodeURIComponent(`## UI Feedback

**Comment:** ${comment}

### Element Details
- **DOM Path:** \`${feedbackData?.domPath}\`
- **Element Text:** ${feedbackData?.elementText || "N/A"}
- **URL:** ${feedbackData?.url}
- **Viewport:** ${feedbackData?.viewportWidth}x${feedbackData?.viewportHeight}
- **Timestamp:** ${feedbackData?.timestamp}

---
*Submitted via RHDH AI Lightspeed Feedback Tool*`);

    window.open(
      `https://github.com/${repoOwner}/${repoName}/issues/new?title=${title}&body=${body}&labels=feedback,ui`,
      "_blank"
    );
    setShowModal(false);
    setComment("");
  };

  if (!isActive && !showModal) return null;

  return (
    <>
      {/* Feedback Mode Indicator */}
      {isActive && !showModal && (
        <div 
          data-feedback-ui
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-[#0066cc] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-3"
        >
          <div className="flex items-center gap-2">
            <div className="size-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium">Feedback Mode: Click on any element to comment</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Feedback Modal */}
      {showModal && (
        <div 
          data-feedback-ui
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
              setComment("");
            }
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl w-[480px] max-w-[90vw] overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-medium text-foreground">Leave Feedback</h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setComment("");
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-4">
              {/* Selected Element Info */}
              <div className="bg-secondary/30 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Selected Element</p>
                <p className="text-sm text-foreground font-mono truncate">{feedbackData?.domPath}</p>
              </div>

              {/* Comment Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Comment
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Describe the issue or suggestion..."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                  Feedback submitted successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-lg text-sm">
                  Could not submit automatically. Use the options below to submit manually.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border bg-secondary/20 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!comment.trim()}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors disabled:opacity-50"
                >
                  Copy to Clipboard
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={openGitHubIssue}
                  disabled={!comment.trim()}
                  className="px-4 py-2 text-sm bg-[#24292f] text-white rounded-lg hover:bg-[#32383f] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Open GitHub Issue
                </button>
                <button
                  onClick={submitFeedback}
                  disabled={!comment.trim() || isSubmitting}
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
