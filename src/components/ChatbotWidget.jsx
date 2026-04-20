// components/ChatbotWidget.jsx
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    if (!document.getElementById("omnidimension-web-widget")) {
      const script = document.createElement("script");
      script.id = "omnidimension-web-widget";
      script.async = true;
      script.src =
        "https://backend.omnidim.io/web_widget.js?secret_key=8163c7c987363ed490e774d4ea24702b";
      document.body.appendChild(script);

      script.onload = () => {
        const interval = setInterval(() => {
          const iframe = document.querySelector("iframe[src*='omnidim']");
          if (iframe) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

            // Rename Header
            const header = iframeDoc?.querySelector("header div");
            if (header && header.textContent.includes("VitalSync")) {
              header.textContent = "VitalSync Advisor";
            }

            // Rename Welcome Message
            const messages = iframeDoc?.querySelectorAll(".chat-message") || [];
            messages.forEach(msg => {
              if (msg.textContent.includes("PulseAI")) {
                msg.innerHTML = msg.innerHTML.replace("PulseAI", "PulseAI");
              }
            });

            if (header || messages.length > 0) {
              // We don't clear interval because messages might load later
              // But we can stop if we've done it once for the header
            }
          }
        }, 1000);
      }
    }

    return () => {
      const script = document.getElementById("omnidimension-web-widget");
      if (script) {
        script.remove();
      }

      const iframe = document.querySelector("iframe[src*='omnidim']");
      if (iframe) {
        iframe.remove();
      }
    };
  }, []);

  return null;
};

export default ChatbotWidget;
