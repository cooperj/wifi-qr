import { useState } from "react";
import WQ_Code from "./components/WQ_Code";
import WQ_Input from "./components/WQ_Input";
import WQ_CommentBox from "./components/WQ_CommentBox";

function App() {
  const [ssid, setSsid] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="flex justify-center items-center flex-col m-0">
      <div className="print:hidden font-sans text-lg rounded-2xl border-black border-4 p-10 text-center w-full mb-10">
        <div className="flex justify-center">
          <img
            src="/android-chrome-512x512.png"
            alt="Holding Phone"
            className="h-[40px] pr-5"
          />
          <h1 className="text-4xl font-bold mb-10">Wifi QR Card</h1>
        </div>

        <p className="mb-3">
          This is a tool by{" "}
          <a
            className="text-teal-700 hover:underline font-bold"
            href="https://joshc.uk/?ref=wifi-qr"
            target="_blank"
          >
            Josh Cooper
          </a>{" "}
          to create 'cards' with the connection details for a wifi network in a
          convenient way for a user.
        </p>
        <p className="mb-10">
          It is also open-sourced and hosted on{" "}
          <a
            className="text-teal-700 hover:underline font-bold"
            href="https://github.com/cooperj/wifi-qr"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mb-3">
          The user can choose whether to manually enter the SSID and Password or
          Scan the QR code.
        </p>
        <p className="mb-3">
          Fill in the dashed fields with the required connection details, then
          use your browsers print feature to create the card. I recommend you
          use either A4 landscape or A5 portrait.
        </p>
      </div>

      <main className="flex flex-col rounded-2xl border-black border-4 p-10 tablet:py-5 justify-between items-center w-full mb-20 print:m-0 print:h-fit print:w-full">
        <div className="flex flex-col tablet:flex-row justify-around items-center w-full tablet:p-10">
          <div className="w-full tablet:mr-10 mb-0 flex flex-col items-center justify-center">
            <WQ_Input name="SSID" value={ssid} setValue={setSsid} />
            <WQ_Input name="Password" value={pwd} setValue={setPwd} />
          </div>

          <div className="mt-0">
            <WQ_Code ssid={ssid} pwd={pwd} />
          </div>
        </div>
        <WQ_CommentBox />
      </main>
    </div>
  );
}

export default App;
