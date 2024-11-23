const CardsSection = () => (
  <div className="flex justify-center gap-11 font-bold h-[130px]">
    {/* Card 1 */}
    <div className="bg-white text-black rounded px-8 py-5">
      <h1 className="font-extrabold">Training Courses</h1>
      <p className="h-11 w-[220px] p">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-yellow-500 text-black rounded px-8 py-5">
      <h1 className="font-extrabold">2,769 Online Courses</h1>
      <p className="h-11 w-[220px]">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-blue-400 text-black rounded px-8 py-5">
      <h1 className="font-extrabold">Training Courses</h1>
      <p className="h-11 w-[220px]">
        The gradual accumulation of information about atomic and small-scale behaviour...
      </p>
    </div>
  </div>
);

export default CardsSection;
