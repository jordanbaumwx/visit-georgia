const Hero = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-50 sm:rounded-2xl text-white py-12 px-4 sm:px-8">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold> sm:leading-[3rem]">
          Visit Georgia <br />
          <span className="text-red-400">Ready. Set. Georgia.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl">
          As we’ve all imagined the places and people we want to see, our love
          for exploration has become clear. Georgia puts it all within reach,
          and there is no one Georgia experience. It’s the Georgia you go out
          and live. These are your moments waiting to happen. So, get Ready.
          Set. Georgia.
        </p>
      </div>
    </div>
  );
};

export default Hero;
