export default function Navbar() {
  return (
    <>
      <nav className="flex lg:w-[164px] shrink-0">
        <div className=" flex lg:flex-col lg:w-[164px] w-full sm:h-[119px] h-[56px] lg:h-full lg:fixed lg:top-0">
          <div className="flex lg:flex-col bg-[#161D2F] lg:my-[32px] sm:mx-[25px] sm:my-[23px] lg:ml-[32px] sm:rounded-[20px] items-center lg:mr-[36px] grow">
            <div className="flex lg:flex-col lg:h-full w-full justify-between lg:justify-start items-center">
              <img
                src="/Movie.svg"
                className=" lg:mt-[35.41px] lg:mb-[74.99px] w-[32px] h-[25.6] lg:ml-0 ml-[24px]"
              ></img>

              <div className="flex lg:flex-col items-center gap-[40px]">
                <img src="/Home.svg" className="w-[20px] h-[20px]"></img>
                <img src="/Film.svg" className="w-[20px] h-[20px]"></img>
                <img src="/TV.svg" className="w-[20px] h-[20px]"></img>
                <img src="/Bookmark.svg" className="w-[20px] h-[20px]"></img>
              </div>
              <img
                src="/Profile.png"
                className="sm:w-[40px] sm:h-[40px] w-[24px] h-[24px] lg:mb-[32px] lg:m-auto mr-[24px] "
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
