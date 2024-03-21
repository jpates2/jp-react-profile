import classes from "./AboutContainer.module.css";
import Slider from "./Slider";
import AboutBox from "./AboutBox";
import FunFacts from "./FunFacts";
import { AboutInfo } from "../info/about-info";

function AboutContainer() {
  // const [activeBox, setActiveBox] = useState("about1");

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //     const position = window.scrollY;
  //     setScrollPosition(position);
  // };

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  // const [boxPositions, setBoxPositions] = useState({});
  // console.log(boxPositions);

  // const handlePositionChange = (title, position) => {
  //   setBoxPositions((prevPositions) => ({
  //     ...prevPositions,
  //     [title]: position,
  //   }));
  // };

  const boxes = AboutInfo.map((box) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
    />
  ));

  const leftBoxes = AboutInfo.filter((_, index) => index % 2 === 0).map((box, index) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
      className={classes["about-grid-item"]}
      gridArea={`item-${index * 2 + 1}`}
    />
  ));

  const rightBoxes = AboutInfo.filter((_, index) => index % 2 !== 0).map((box, index) => (
    <AboutBox
      title={box.title}
      text={box.text}
      key={box.id}
      className={classes["about-grid-item"]}
      gridArea={`item-${index * 2 + 2}`}
    />
  ));

  const mobileBoxesView = (
    <div className={classes["about-content-mobile"]}>
      <Slider />
      <div className={classes["about-grid-mobile"]}>
        {boxes}
      </div>
    </div>
  )

  const desktopBoxesView = (
    <div className={classes["about-content-desktop"]}>
      <div className={classes["about-grid-left"]}>
        {leftBoxes}
      </div>
      <Slider />
      <div className={classes["about-grid-right"]}>
      {rightBoxes}
      </div>
    </div>
  )

  return (
    <>
      <div className={classes["about-section"]}>
        <h1>About</h1>
        {desktopBoxesView}
        {mobileBoxesView}
      </div>
      <FunFacts />
    </>
  )
}

export default AboutContainer;
