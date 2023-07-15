import { useState } from "react";

function WQ_CommentBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="tablet:px-10 flex flex-col w-full">
      <div className="text-xl print:hidden border-dashed border-2 border-gray-300 rounded p-1">
        <input
          type="checkbox"
          id="commentToggle"
          name="commentToggle"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <label htmlFor="commentToggle" className="select-none">
          {" "}
          Add a Comment?
        </label>
      </div>

      <div>
        {isChecked ? (
          <textarea
            className="mt-5 font-sans font-normal text-lg rounded outline-2 outline-gray-300 outline-dashed print:outline-none resize-none w-full"
            rows={2}
          />
        ) : "" }
      </div>
    </div>
  );
}

export default WQ_CommentBox;
