import { useContext } from "react";
import { AppState } from "../App";

const UserChat = () => {
  const { signedIn } = useContext(AppState);
  return (
    <div className="flex">
      <div className="flex items-start gap-2.5 ml-auto">
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Jese image"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {signedIn && (
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                User
              </span>
            )}
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            user chat
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserChat;
