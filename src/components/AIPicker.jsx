import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI...."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title={"Asking AI..."}
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              title={"AI Logo"}
              type={"outline"}
              handleClick={() => handleSubmit("logo")}
              className="text-xs"
            />
            <CustomButton
              title={"AI Full"}
              type={"filled"}
              handleClick={() => handleSubmit("full")}
              className="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
