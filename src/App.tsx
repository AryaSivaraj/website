import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import OtherCapabilities from "./components/other-capabilities/OtherCapabilities";
import Works from "./components/works/Works";
import WhatTheySayAboutMe from "./components/about-me/WhatTheySayAboutMe";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import SectionFooter from "./components/section-footer/SectionFooter";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  const introCompRef = useRef(null);
  const worksCompRef = useRef(null);
  const otherCapabilitiesRef = useRef(null);
  const aboutMeCompRef = useRef(null);
  const getInTouchCompRef = useRef(null);

  const isMobile = window.innerWidth < 769;

  const refArray = [
    introCompRef,
    worksCompRef,
    otherCapabilitiesRef,
    aboutMeCompRef,
    getInTouchCompRef,
  ];

  useEffect(() => {
    refArray.map((ref, index) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        onEnter: () => {
          setActiveSlide(index + 1);
        },
        onLeaveBack: () => {
          setActiveSlide(index);
        },
      });
    });
  }, []);

  const location = useLocation();
  const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header activeSlide={activeSlide}></Header>
      <section ref={introCompRef}>
        <Intro></Intro>
      </section>
      <section id="works" ref={worksCompRef}>
        <Works></Works>
      </section>
      <section ref={otherCapabilitiesRef}>
        <OtherCapabilities></OtherCapabilities>
      </section>
      <section ref={aboutMeCompRef}>
        <WhatTheySayAboutMe></WhatTheySayAboutMe>
      </section>
      <section id="getInTouch" ref={getInTouchCompRef}>
        <GetInTouch></GetInTouch>
      </section>
      {!isMobile && activeSlide != 1 && (
        <footer>
          <SectionFooter activeSlide={activeSlide}></SectionFooter>
        </footer>
      )}
    </>
  );
}

export default App;
