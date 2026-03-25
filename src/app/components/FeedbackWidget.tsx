import { useState, useEffect, useCallback } from "react";

interface FeedbackData {
  comment: string;
  elementInfo: string;
  url: string;
  timestamp: string;
  screenshot?: string;
}

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackMode, setFeedbackMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  const handleElementClick = useCallback((e: MouseEvent) => {
    if (!feedbackMode) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.target as HTMLElement;
    const elementInfo = getElementInfo(target);
    setSelectedElement(elementInfo);
    setFeedbackMode(false);
    setIsOpen(true);
    
    // Remove highlight
    if (hoveredElement) {
      hoveredElement.style.outline = "";
    }
  }, [feedbackMode, hoveredElement]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (!feedbackMode) return;
    
    const target = e.target as HTMLElement;
    if (target === hoveredElement) return;
    
    // Remove previous highlight
    if (hoveredElement) {
      hoveredElement.style.outline = "";
    }
    
    // Add new highlight
    target.style.outline = "2px solid #0066cc";
    setHoveredElement(target);
  }, [feedbackMode, hoveredElement]);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if (!feedbackMode) return;
    
    const target = e.target as HTMLElement;
    target.style.outline = "";
  }, [feedbackMode]);

  useEffect(() => {
    if (feedbackMode) {
      document.addEventListener("click", handleElementClick, true);
      document.addEventListener("mouseover", handleMouseOver, true);
      document.addEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "crosshair";
    } else {
      document.removeEventListener("click", handleElementClick, true);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "";
      if (hoveredElement) {
        hoveredElement.style.outline = "";
      }
    }

    return () => {
      document.removeEventListener("click", handleElementClick, true);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.body.style.cursor = "";
    };
  }, [feedbackMode, handleElementClick, handleMouseOver, handleMouseOut, hoveredElement]);

  const getElementInfo = (element: HTMLElement): string => {
    const tag = element.tagName.toLowerCase();
    const classes = element.className ? `.${element.className.split(" ").join(".")}` : "";
    const id = element.id ? `#${element.id}` : "";
    const text = element.textContent?.slice(0, 50) || "";
    const rect = element.getBoundingClientRect();
    
    return `Element: <${tag}${id}${classes}>
Text: "${text}${text.length >= 50 ? "..." : ""}"
Position: ${Math.round(rect.top)}px from top, ${Math.round(rect.left)}px from left
Size: ${Math.round(rect.width)}x${Math.round(rect.height)}px`;
  };

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    setIsSubmitting(true);

    const feedbackData: FeedbackData = {
      comment,
      elementInfo: selectedElement || "No element selected",
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    // Create GitHub Issue via URL (opens in new tab)
    const issueTitle = `[Feedback] ${comment.slice(0, 50)}${comment.length > 50 ? "..." : ""}`;
    const issueBody = `## Feedback Comment
${feedbackData.comment}

## Element Context
\`\`\`
${feedbackData.elementInfo}
\`\`\`

## Page URL
${feedbackData.url}

## Timestamp
${feedbackData.timestamp}

---
*Submitted via RHDH AI Lightspeed Feedback Widget*`;

    const githubIssueUrl = `https://github.com/aprilma419/rhdh-ai-lightspeed/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}&labels=feedback,ui`;
    
    // Open GitHub issue page in new tab
    window.open(githubIssueUrl, '_blank');

    setShowSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
      setComment("");
      setSelectedElement(null);
    }, 2000);
  };

  const startFeedbackMode = () => {
    setIsOpen(false);
    setFeedbackMode(true);
  };

  const cancelFeedback = () => {
    setFeedbackMode(false);
    setIsOpen(false);
    setComment("");
    setSelectedElement(null);
  };

  return (
    <>
      {/* Feedback Mode Indicator */}
      {feedbackMode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <div className="size-2 bg-white rounded-full"></div>
          <span className="text-sm font-medium">Click on any element to leave feedback</span>
          <button 
            onClick={cancelFeedback}
            className="ml-2 text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating Feedback Button - Left edge tab, below Tech Radar */}
      {!feedbackMode && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-[480px] left-0 z-[9998] bg-primary hover:bg-primary/90 text-white p-3 rounded-r-lg shadow-lg flex items-center gap-2 transition-all duration-200 overflow-hidden group w-[44px] hover:w-[170px]"
        >
          <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Leave feedback</span>
        </button>
      )}

      {/* Feedback Side Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[9998] bg-black/20 transition-opacity"
            onClick={cancelFeedback}
          />
          
          {/* Drawer */}
          <div className="fixed left-0 top-0 bottom-0 z-[9999] w-[360px] bg-white shadow-2xl flex flex-col animate-[slideInLeft_0.2s_ease-out]">
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center justify-between shrink-0">
              <h3 className="font-medium text-lg text-foreground">Leave Feedback</h3>
              <button onClick={cancelFeedback} className="text-muted-foreground hover:text-foreground p-1">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {showSuccess ? (
                <div className="flex flex-col items-center py-12">
                  <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-foreground">Feedback submitted!</p>
                  <p className="text-sm text-muted-foreground">Thank you for your input</p>
                </div>
              ) : (
                <>
                  {/* Instructions */}
                  <p className="text-sm text-muted-foreground">
                    Select a UI element to provide context for your feedback, then describe the issue or suggestion.
                  </p>

                  {/* Select Element Button */}
                  {!selectedElement && (
                    <button
                      onClick={startFeedbackMode}
                      className="w-full py-4 px-4 border-2 border-dashed border-border rounded-xl text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <span>Click to select a UI element</span>
                    </button>
                  )}

                  {/* Selected Element Info */}
                  {selectedElement && (
                    <div className="bg-secondary/30 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Selected Element</span>
                        <button
                          onClick={startFeedbackMode}
                          className="text-xs text-primary hover:underline"
                        >
                          Change
                        </button>
                      </div>
                      <pre className="text-xs text-foreground whitespace-pre-wrap font-mono">{selectedElement}</pre>
                    </div>
                  )}

                  {/* Comment Input */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your feedback
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Describe the issue or suggestion..."
                      className="w-full px-4 py-3 border border-border rounded-xl bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      rows={5}
                    />
                  </div>

                  {/* Page URL */}
                  <div className="text-xs text-muted-foreground bg-secondary/20 rounded-lg px-3 py-2">
                    <span className="font-medium">Page:</span> {window.location.pathname}
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            {!showSuccess && (
              <div className="px-5 py-4 border-t border-border flex justify-end gap-3 shrink-0">
                <button
                  onClick={cancelFeedback}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!comment.trim() || isSubmitting}
                  className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Opening...
                    </>
                  ) : (
                    <>
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Open GitHub Issue
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
