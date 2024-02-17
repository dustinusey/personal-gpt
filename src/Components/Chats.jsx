import { useState } from "react";
import AssistantChat from "./AssistantChat";
import SendChat from "./SendChat";
import UserChat from "./UserChat";

const Chats = () => {
  const [userChats, setUserChats] = useState([]);
  const [assistantChats, setAssistantChats] = useState([]);
  const [thinking, isThinking] = useState(false);

  return (
    <div className="bg-gray-900 p-5 w-full">
      <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
        <div className="w-full h-full flex flex-col">
          <p className="mb-auto text-center text-sm text-gray-500">
            You&apos;re now chatting with your personal AI Assistant
          </p>
          <div className="my-2">
            {userChats.map((chat, index) => {
              return (
                <>
                  <UserChat key={index} message={chat.message} />
                  {!thinking && (
                    <AssistantChat
                      key={index}
                      message={assistantChats[index].message}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <SendChat
          thinking={thinking}
          isThinking={isThinking}
          assistantChats={assistantChats}
          setAssistantChats={setAssistantChats}
          userChats={userChats}
          setUserChats={setUserChats}
        />
      </div>
    </div>
  );
};
export default Chats;
