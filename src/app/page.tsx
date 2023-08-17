"use client";

import Container from "@/components/Container";
import Keyboard from "@/components/Keyboard";
import DrumControl from "@/components/DrumControl";
import BgImage from "@/components/BgImage";
import { useDrumMachine } from "@/hooks";

/**
 * Home component represents the main page of the application.
 *
 * @module Home
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const {
    tuneName,
    soundsGroup,
    volume,
    play,
    choosePiano,
    chooseHeater,
    changeVolume,
  } = useDrumMachine();

  return (
    <>
      <BgImage imgSrc="/images/pexels-pixabay-164745.jpg" />
      <section
        id="drum-machine-section"
        className="w-full pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 md:pb-10"
      >
        <Container className="flex flex-1 h-full">
          <div
            id="drum-machine-wrap"
            className="flex items-center justify-center w-full"
          >
            <article
              id="drum-machine"
              className="flex flex-col md:flex-row items-start justify-between md:w-full max-w-xl backdrop-blur-lg backdrop-brightness-150 bg-neutral-50/40 dark:bg-neutral-50/40 px-4 py-4 sm:py-6 md:px-6 lg:p-8 rounded-xl shadow-xl gap-8"
            >
              <Keyboard soundsGroup={soundsGroup} play={play} />
              <DrumControl
                volume={volume}
                changeVolume={changeVolume}
                tuneName={tuneName}
                chooseHeater={chooseHeater}
                choosePiano={choosePiano}
              />
            </article>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
