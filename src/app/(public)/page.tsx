import { Button } from "@/components/Button";

function Home() {
  const name = "Muhammad Hamza";
  return (
    <>
      <h1 className="text-center p-2 text-2xl">
        Assalam u Alaikum
      </h1>
        <h1 className="text-blue-500 text-center text-5xl"> {name}</h1>
      <div className="flex gap-2 justify-center mt-5">
        <Button label="Greetings" />
        <Button label="Download for windows" />
      </div>
    </>
  );
}

export default Home;
