"user client";

export function ChatBox({
  conversation,
}: {
  conversation: { text: string; role: boolean }[];
}) {
  return (
    <div>
      {conversation &&
        conversation.map((item, index) => {
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
