const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center w-full bg-black">
      <div className="w-[80%] pt-30">
        <img
          src={"/files/user.gif"}
          alt="demo gif"
          className="h-10 rounded-full"
        />
        <h1 className="text-white">About Me</h1>
      </div>
    </section>
  );
};

export default About;
