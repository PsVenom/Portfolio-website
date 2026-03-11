import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import Intro from "./intro";
// import { Anim } from "../components/Mid/Animate";
import { Anim } from "../../components/Landing/Animate";
import { useViewport } from "react-viewport-hooks";
import LoadingScreen from "../../components/LoadingScreen";
import { AnimatePresence } from "motion/react";


function MainView() {
  const [scroll, setScroll] = useState(0.1);
  const [isLoading, setIsLoading] = useState(true);
  // Manually track scroll since body is the scroll container
  const {vh} = useViewport();
  const len = vh;

  const handleSceneReady = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // const scrollableHeight = document.body.scrollHeight - window.innerHeight;
      // scrollableHeight is replaced with 900*vh. This hardcoded value will be changed later
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      // modifying the progress variable. We need all values > 0.57 to be equal to 1
      const progress = scrolled < len ? scrolled / len : 1;
      console.log(progress, len, "check progress")
      setScroll(progress);
    };

    // Listen to body scroll events
    document.body.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const navigation = [
  { name: 'About Me', href: '#/about' },
  { name: 'My Projects', href: 'https://github.com/PsVenom' },
  { name: 'Contact', href: '#/contact' },
]

  return (
    <>
      <AnimatePresence>
        <LoadingScreen isVisible={isLoading} />
      </AnimatePresence>
            <nav aria-label="Global" className="fixed top-0 flex items-center justify-center p-6 lg:px-8 order-10 z-10">
            <div className="flex lg:gap-x-18 gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="nav" style={{ fontSize: '1rem' }}>
                  {item.name}
                </a>
              ))}
          </div>
          </nav>      
      <div className="sticky h-dvh w-dvw">
        <div className="heroim sticky w-full h-full ">
          {/* <div className="row-span-2 col-span-3 fixed"></div>*/}

          <div className="fixed inset-y-0 right-4 left-4 bottom-0 -order-2">
                <Anim onSceneReady={handleSceneReady}/>
          </div>
             <Intro />
                    
        </div>
      </div>
    </>
  );
}

export default MainView;
