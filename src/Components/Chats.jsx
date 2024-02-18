import axios from "axios";
import { useState } from "react";
import AssistantChat from "./AssistantChat";
import SendChat from "./SendChat";
import UserChat from "./UserChat";

const Chats = (props) => {
  const [userChats, setUserChats] = useState([]);
  const [assistantChats, setAssistantChats] = useState([]);
  const [thinking, isThinking] = useState(false);

  function handleChatRequest(prompt) {
    props.setUserChats([...props.userChats, { message: chatValue }]);
    setChatValue("");

    props.isThinking(true);

    async function pingChatGPT(prompt) {
      console.log(import.meta.env.VITE_OPENAI_KEY);
      const data = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          max_tokens: 1000,
          model: "gpt-3.5-turbo-1106",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        { headers: { Authorization: import.meta.env.VITE_OPENAI_KEY } }
      );
      props.isThinking(false);
      const response = await data.data.choices[0].message.content;
      props.setAssistantChats([...props.assistantChats, { message: response }]);
    }

    pingChatGPT(chatValue);
  }

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
          handleChatRequest={handleChatRequest}
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
