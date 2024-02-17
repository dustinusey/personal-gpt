import { useContext } from "react";
import { AppState } from "../App";

const UserChat = (props) => {
  const { signedIn, user } = useContext(AppState);
  return (
    <div className="flex mb-5">
      <div className="flex items-start gap-2.5 ml-auto">
        {signedIn && (
          <img
            className="w-8 h-8 rounded-full"
            src={user.photoURL}
            alt={`Image for ${user.displayName}`}
          />
        )}
        <div className="flex flex-col w-full leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {signedIn && (
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {user.displayName}
              </span>
            )}
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserChat;
