export default function Navbar() {
  return (
    <nav className="md:flex hidden w-[164px]">
      <div className=" flex flex-col w-[164px] h-full fixed top-0">
        <div className="flex flex-col bg-[#161D2F] my-[32px] ml-[32px] rounded-[20px] items-center mr-[36px] grow">
          <img
            src="/Movie.svg"
            className=" mt-[35.41px] mb-[74.99px] w-[32px] h-[25.6] "
          ></img>

          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col items-center gap-[40px]">
              <img src="/Home.svg" className="w-[20px] h-[20px]"></img>
              <img src="/Film.svg" className="w-[20px] h-[20px]"></img>
              <img src="/TV.svg" className="w-[20px] h-[20px]"></img>
              <img src="/Bookmark.svg" className="w-[20px] h-[20px]"></img>
            </div>
            <img src="/Profile.png" className="w-[40px] h-[40px] mb-[32px]"></img>
          </div>

        </div>
      </div>
    </nav>
  );
}
