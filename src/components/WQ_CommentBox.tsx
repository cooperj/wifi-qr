import { useState } from "react";

function WQ_CommentBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="tablet:p-10 tablet:pt-0 pt-5 flex flex-col w-full">
      <div className="mb-5 text-xl print:hidden border-dashed border-2 border-gray-300 rounded p-1">
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
            className="text-md rounded outline-2 outline-gray-300 outline-dashed print:outline-none resize-none w-full"
            rows={2}
          />
        ) : (
          <p className="h-12 outline-2 outline"> </p>
        )}
      </div>
    </div>
  );
}

export default WQ_CommentBox;
