import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      className="fw-bold"
      options={{
        strings: ["Software Engineer", "Freelancer", "Front end Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
