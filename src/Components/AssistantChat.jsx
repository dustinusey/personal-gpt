const AssistantChat = (props) => {
  return (
    <div className="flex mb-5">
      <div className="flex items-start gap-2.5 mr-auto">
        {/* img goes here */}
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 hue-rotate-[30deg]"
          alt=""
        />
        <div className="flex flex-col w-full leading-1.5 px-4 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              assistant
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AssistantChat;
