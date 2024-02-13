import { useContext, useState } from "react";
import { AppState } from "../App";

const SendChat = () => {
  const { userChats, addUserChats } = useContext(AppState);
  const [chatValue, setChatValue] = useState("");

  function handleSendChat(e) {
    e.preventDefault();
    addUserChats([...userChats, { message: chatValue }]);
    setChatValue("");
  }

  return (
    <form
      onSubmit={(e) => {
        handleSendChat(e);
      }}
      className="mt-auto"
    >
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          onKeyDown={(e) => {
            setChatValue(e.target.value);
          }}
          value={chatValue}
          type="text"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 outline-none"
          placeholder="What can I help you with?"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-[7px] bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v13m0-13 4 4m-4-4-4 4"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
export default SendChat;
