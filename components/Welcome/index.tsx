import Button from "components/shared/Button";

const Welcome = ({
  setUnderstandState,
}: {
  setUnderstandState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleUnderstand = () => {
    localStorage.setItem("understand", JSON.stringify(true));
    setUnderstandState(true);
  };

  return (
    <section>
      <div className="w-full opacity-95 absolute top-0 left-0 z-50 h-screen bg-black overflow-hidden "></div>
      <div className=" z-[100] absolute left-0 top-0 w-full h-screen flex justify-center items-center py-16 text-[rgb(241,75,103)]">
        <div className="text-center container mx-auto   ">
          <h1 className="py-6 text-xl font-bold">Warning!</h1>
          <p className="py-6">
            Except for some, none of what has been written is true.
          </p>
          <div>
            <Button text={"I Understand"} onClick={handleUnderstand} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
