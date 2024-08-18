// import SectionFooter from "../section-footer/SectionFooter";
import Header from "../header/Header";
import SectionFooter from "../section-footer/SectionFooter";
import "./AboutMe.less";

const CABABILITIES = [
  "UI/UX Design",
  "Interaction Design",
  "Website Design",
  "Product Design",
  "Brand Idenity",
  "Motion Design",
];

// const THINGS_I_LIKE = [
//   "Exploring places & food",
//   "Traditional painting",
//   "Wall painting (I do work as a wall painting artist ) - Here’s the work link",
//   "Singing",
//   "Doing exercises",
// ];

const IMAGES = [
  { src: "/website/assets/arya1.png", alt: "" },
  { src: "/website/assets/arya2.png", alt: "" },
  { src: "/website/assets/arya3.png", alt: "" },
  { src: "/website/assets/arya4.png", alt: "" },
];

const MENU_ITEMS = [
  { text: "Home", scrollTo: "", externalLink: "/website/" },
  {
    text: "Projects",
    scrollTo: "works-container",
    externalLink: "/website/#works",
  },
  {
    text: "Contact",
    scrollTo: "get-in-touch-container",
    externalLink: "/website/#getInTouch",
  },
];

function AboutMe() {
  return (
    <>
      <Header activeSlide={6} menuItems={MENU_ITEMS} showMenuInMobile></Header>
      <div className="component-container about-me-container">
        <section>
          <div className="about-me-wrapper">
            <div className="about-me-img-grp">
              {IMAGES.map((img: any) => {
                return (
                  <img key={img.src} src={img.src} alt={img.alt || "arya"} />
                );
              })}
            </div>
            <div>
              <div>Hello, My name is</div>
              <h2>ARYA SIVARAJ</h2>
              <p>
                I am a visual designer based in Birmingham, United Kingdom, originally from Kerala, India, often referred to as "God’s Own Country."
              </p>

              <p>
                From a young age, I was captivated by drawing and crafting. 
                This passion led me to pursue a Bachelor's degree in Animation & Graphic Design at St. Joseph's College of Communication, MG University.
                After graduating, I joined Infosys as an Experience Designer, where I was promoted to Senior Experience Designer within a year.
              </p>

              <p>
                Driven by a desire for further growth, I moved to the United Kingdom to complete a Master’s in UX Design.
                The journey from Kerala to Birmingham has been both exciting and challenging, shaping my professional and personal growth.
              </p>

              <p>
               I thrive on identifying gaps and crafting creative solutions through design iteration. This process of transforming ideas 
                into interactive designs is what I find most fulfilling. In addition to my design work, I enjoy creating dynamic elements and 
                giving designs a life of their own.
              </p> 
            </div>
          </div>
        </section>
        <section>
          <div className="about-me-wrapper">
            <div>
              <img className="img2" src="/website/assets/arya5.png" alt="arya" />
            </div>
            <div className="mt-2">
              <div>Skills and Roles im capable of</div>
              <ul className="capabilities">
                {CABABILITIES.map((capability: string) => {
                  return <li key={capability}>{capability}</li>;
                })}
              </ul>
              <div className="separator"></div>
              <p>Apart from all these,</p>

              <p>
                Im a normal Ambiverted person, I like talking & making new
                friends, Im get hyper and extroverted among the most comfortable
                gang.
              </p>

              <p>Things i Like : </p>
              <ul className="things-i-like">
                {/* {THINGS_I_LIKE.map((val: string) => {
                  return <li key={val}>{val}</li>;
                })} */}
                <li>Exploring places & food</li>
                <li>Traditional painting</li>
                <li>
                  Wall painting (I do work as a wall painting artist ) -{" "}
                  <a
                    className="highlight"
                    target="_blank"
                    href="https://www.instagram.com/hobo_designs_/"
                  >
                    Here’s the work link
                  </a>
                </li>
                <li>Singing</li>
                <li>Doing exercises</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <footer className="about-me-footer">
        <SectionFooter activeSlide={4} hidePage></SectionFooter>
      </footer>
    </>
  );
}

export default AboutMe;
