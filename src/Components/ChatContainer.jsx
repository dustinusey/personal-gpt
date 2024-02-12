import { useContext } from "react";
import { AppState } from "../App";
import ChatHistory from "./ChatHistory";
import Chats from "./Chats";

const ChatContainer = () => {
  const { signedIn } = useContext(AppState);

  return (
    <div
      className={`${
        !signedIn && "max-w-screen-lg"
      } text-gray-200 max-w-screen-xl m-auto mt-[68px] h-[calc(100vh-68px)] flex px-5 py-3`}
    >
      {signedIn && <ChatHistory />}
      <Chats />
    </div>
  );
};
export default ChatContainer;
