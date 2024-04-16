import "./SectionFooter.less";
import FOOTER_LINKS from "../../data/footer-links.json";

import Text from "../text/Text";

const SECTION_REF: any = {
  1: ".intro-container",
  2: ".works-container",
  3: ".other-capabilities-container",
  4: ".what-they-say-about-me-container",
  5: ".get-in-touch-container",
};

interface FooterContent {
  text: string;
  links: any;
}

function SectionFooter({
  activeSlide = 1,
  hidePage = false,
}: {
  activeSlide: number;
  hidePage?: boolean;
}) {
  const footerContent: FooterContent = (FOOTER_LINKS as any)[activeSlide];
  const footerText: string = footerContent.text;

  const onClickScroll = () => {
    const selector =
      activeSlide == 5 ? SECTION_REF[1] : SECTION_REF[activeSlide + 1];
    document
      .querySelector(selector)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="section-footer">
      <div className="footer-left">
        <Text text={footerText}></Text>
        <ul>
          {footerContent.links?.map((link: any) => {
            return (
              <li key={link.linkText}>
                <a href={link.url || "#"} target="_blank">
                  <img src="/website/assets/link-arrow.svg" alt="arrow" />
                  <span className="section-title">{link.linkText}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {!hidePage && (
        <div className="footer-right" onClick={onClickScroll}>
          <span>0{activeSlide}//05- Scroll</span>
          {activeSlide != 5 ? (
            <img src="/website/assets/arrow-down.svg" alt="down arrow" />
          ) : (
            <img
              className="rotate"
              src="/website/assets/arrow-down.svg"
              alt="up arrow"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default SectionFooter;
