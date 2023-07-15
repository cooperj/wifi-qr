import QRCode from "react-qr-code";

function CreateWifiUri(ssid: string, password: string) {
  if (!ssid || !password) {
    return "https://github.com/cooperj/wifi-qr";
  } else {
    return `WIFI:S:${ssid};T:WPA;P:${password};;`;
  }
}

function WQ_Code(props: any) {
  return (
    <>
      <QRCode
        value={CreateWifiUri(props.ssid, props.pwd)}
        bgColor="#FFFFFF"
        fgColor="#000000"
        size={256}
      />
    </>
  );
}

export default WQ_Code;
