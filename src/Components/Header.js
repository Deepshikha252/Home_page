import BannerImg from "../assets/img/BannerImg.png";



function Header() {
  return (
    <>
      <div className="relative bg-[#bd1e59] text-white items-center justify-end p-4 flex flex-col max-w-full h-[500px]  sm:h-[600px]  ">
        <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-6">
          <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3" />
          <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
          <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
          <span className="bg-white rounded-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 opacity-50" />
        </div>
      </div>

      <div className="relative bg-[#bd1e59] text-white p-8 flex flex-col items-center justify-center max-w-full h-[500px] sm:h-[600px] lg:h-[700px]">
  <img
    src={BannerImg}
    alt=""
    className="absolute inset-0 z-0 object-cover w-full h-full"
  />
  <div className="relative z-10 max-w-3xl p-2 mx-auto mt-32 text-center">
    <h1 className="mb-5 text-4xl font-bold md:text-5xl">
      Big Heading Text
    </h1>
    <h2 className="mb-2 text-xl md:text-2xl md:mt-4">
      Subheading text line goes here.
    </h2>
    <p className="p-4 mb-4 md:mt-6 md:text-lg">
      Small descriptive text in 3-4 lines can go here.<br />
      They can be a single line or short paragraph too.
    </p>
    <button className="p-2 text-black transition-transform duration-200 bg-yellow-400 rounded-md hover:bg-neutral-800 hover:text-white">
      Know More
    </button>
  </div>
</div>



    </>
  );
}

export default Header;
