import SendChat from "./SendChat";
import UserChat from "./UserChat";

const Chats = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-5 w-full">
      <div className="max-w-screen-md m-auto flex flex-col justify-between h-[calc(100vh-140px)]">
        <div className="w-full h-full flex flex-col">
          <p className="mb-auto text-center text-sm text-gray-500">
            You&apos;re now chatting with your personal AI Assistant
          </p>
          <div className="my-2">
            <UserChat />
          </div>
        </div>
        <SendChat />
      </div>
    </div>
  );
};
export default Chats;
