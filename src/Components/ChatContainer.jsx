import { useContext } from "react";
import { AppState } from "../App";
import ChatHistory from "./ChatHistory";
import Chats from "./Chats";

const ChatContainer = () => {
  const { signedIn } = useContext(AppState);

  return (
    <div className="text-gray-200 mt-[60px] h-[calc(100vh-45px)] flex px-0 py-3">
      {/* {signedIn && <ChatHistory />} */}
      <Chats />
    </div>
  );
};
export default ChatContainer;
