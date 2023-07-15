function WQ_Input(props: any) {
  const updateInput = (event: any) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="mb-10 w-full">
      <h1 className="text-4xl text-center tablet:text-left tablet:text-8xl font-bold select-none">
        {props.name}
      </h1>
      <input
        type="text"
        className="font-sans font-normal h-auto px-2 py-4 outline-dashed text-2xl text-center tablet:text-left tablet:text-4xl rounded outline-2 outline-gray-300 print:outline-none w-full"
        value={props.value}
        onChange={updateInput}
      />
    </div>
  );
}

export default WQ_Input;
