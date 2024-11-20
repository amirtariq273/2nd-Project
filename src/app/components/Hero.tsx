const Hero = () => (
  <div className="text-center py-20">
    <p className="text-xl text-blue-400">Welcome</p>{" "}
    <h1 className="text-5xl font-bold text-white mb-5">
      Selling on the internet like a pro
    </h1>
    <p className="text-lg text-gray-400 mb-10">
      We know how large objects will act, but things on a small scale just do
      not act that way.
    </p>
    <div className="flex justify-center gap-5">
      <a
        href="#"
        className="bg-blue-500 text-white px-6 py-3 rounded font-bold"
      >
        Get Quote Now
      </a>
      <a
        href="#"
        className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded font-bold"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default Hero;
