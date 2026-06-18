import HeroContent from "../content/heroContent";



const Hero = () => {
  return (
    <div >
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-0 left-0 h-full w-full z-0 object-cover"
      >
        <source src="/ground1.mp4" type="video/mp4" />
      </video> */}
       <HeroContent />
    </div>
  );
};

export default Hero;