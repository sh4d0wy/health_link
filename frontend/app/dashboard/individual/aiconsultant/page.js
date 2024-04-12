"use client";

import { useState } from "react";
import axios from "axios";
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Page() {
  const [userInput, setUserInput] = useState("");

  const handleChangeMessage = (event) => {
    setUserInput(event.target.value);
  };

  // Huggu@@271

  const handleSendMessage = async () => {

    if (userInput.length) {
      const chatarea = document.getElementById("chatarea");
      const headingtag = document.createElement("h1");
      headingtag.classList.add("self-end");
      headingtag.innerHTML = userInput;
      chatarea.appendChild(headingtag);

      await axios
        .post("https://ill-plum-parka.cyclic.app/generate", {
          description: userInput,
          details: userInput,
        })
        .then(function (response) {
          console.log(response.data);
          const chatarea = document.getElementById("chatarea");
          const headingtag = document.createElement("h1");
          
          headingtag.innerHTML = response.data.output;
          chatarea.appendChild(headingtag);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <h1 className="text-lg font-medium mx-2 border-b-2 border-black">
        AI Consultant
      </h1>

      <>
        {/* component */}
        <div className="flex h-full antialiased text-gray-800">
          <div className="flex flex-row h-full w-full overflow-hidden">
            <div className="flex flex-col flex-auto h-full p-6 gap-2">
              <div className="overflow-y-scroll">
                <div
                  id="chatarea"
                  className="flex flex-col flex-auto flex-shrink-0 h-[60vh] rounded-2xl bg-gray-100 p-4"
                >
                  <h1>Hello, i am your AI consultant,</h1>
                  
                </div>
              </div>
              <div className="flex flex-row items-center  h-16 rounded-xl bg-white w-full px-4 py-2">
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      onChange={handleChangeMessage}
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={handleSendMessage}
                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
