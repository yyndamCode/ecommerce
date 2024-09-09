import MenuBar from "./MenuBar";
import AutoplaySwiper from "./AutoplaySwiper";

function Hero() {
  return (
    <section className="relative ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <MenuBar />
        </div>
        <div className="md:col-span-3 mt-[40px] w-full h-auto relative  ">
          <AutoplaySwiper spaceBetween={0} slidesPerView={1} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
