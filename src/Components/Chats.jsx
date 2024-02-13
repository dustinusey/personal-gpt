import { useContext } from "react";
import { AppState } from "../App";
import SendChat from "./SendChat";
import UserChat from "./UserChat";

const Chats = () => {
  const { userChats } = useContext(AppState);
  return (
    <div className="bg-gray-900 p-5 w-full">
      <div className="flex flex-col justify-between h-[calc(100vh-140px)]">
        <div className="w-full h-full flex flex-col">
          <p className="mb-auto text-center text-sm text-gray-500">
            You&apos;re now chatting with your personal AI Assistant
          </p>
          <div className="my-2">
            {userChats.map((chat, index) => {
              <UserChat key={index} message={chat.message} />;
            })}
          </div>
        </div>
        <SendChat />
      </div>
    </div>
  );
};
export default Chats;
