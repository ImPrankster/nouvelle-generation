"user client";

import { CgSpinner } from "react-icons/cg";

export function ChatBox({
  conversation,
}: {
  conversation: { text: string | null; role: boolean }[];
}) {
  return (
    <div>
      {conversation &&
        conversation.map((item, index) => {
          if (item.text === null) {
            return (
              <div className="chat chat-start" key={index}>
                <div className="chat-bubble chat-bubble-primary">
                  <CgSpinner className="animate-spin text-2xl" />
                </div>
              </div>
            );
          }
          if (item.role) {
            return (
              <div className="chat chat-end" key={index}>
                <div className="chat-bubble">{item.text}</div>
              </div>
            );
          }

          if (!item.role) {
            return (
              <div className="chat chat-start" key={index}>
                <div className="chat-bubble chat-bubble-primary">
                  {item.text}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
