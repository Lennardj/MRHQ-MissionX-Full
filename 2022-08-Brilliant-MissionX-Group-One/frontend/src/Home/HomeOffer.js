import { useState } from "react";
// animation button
import Animation from "../components/MainBodyAssets/animation.png";
import Laptop1 from "../components/MainBodyAssets/laptop1.png";
// games button
import Games from "../components/MainBodyAssets/games.png";
import Laptop2 from "../components/MainBodyAssets/laptop2.png";
// chatbot button
import Chatbots from "../components/MainBodyAssets/chatbots.png";
import Laptop3 from "../components/MainBodyAssets/laptop3.png";
// augmented reality button
import AugReality from "../components/MainBodyAssets/augreality.png";
import Laptop4 from "../components/MainBodyAssets/laptop4.png";

import styles from "../styles/HomeOffer.module.css";

export default function HomeOffer() {
  const [laptopImage, setLaptopImage] = useState({ id: 1, img: Laptop1 });

  const handleShowAnimation = () => {
    setLaptopImage({ id: 1, img: Laptop1 });
  };
  const handleShowGames = () => {
    setLaptopImage({ id: 2, img: Laptop2 });
  };
  const handleShowChatbot = () => {
    setLaptopImage({ id: 3, img: Laptop3 });
  };
  const handleShowAugReality = () => {
    setLaptopImage({ id: 4, img: Laptop4 });
  };

  // export default function HomeOffer() {
  //   const [laptopDisplay, setLaptopDisplay] = useState();
  //   function handleChange(e) {
  //     setLaptopDisplay(e.target.value);
  //   }

  //   const setImageLaptop1 = <img src={Laptop1} alt="imgLaptop"></img>;
  //   const setImageLaptop2 = <img src={Laptop2} alt="imgLaptop"></img>;
  //   const setImageLaptop3 = <img src={Laptop3} alt="imgLaptop"></img>;
  //   const setImageLaptop4 = <img src={Laptop4} alt="imgLaptop"></img>;

  //   const handleShowAnimation = () => {
  //     setLaptopDisplay(Laptop1);
  //   };
  //   const handleShowGames = () => {
  //     setLaptopDisplay(Laptop2);
  //   };
  //   const handleShowChatbot = () => {
  //     setLaptopDisplay(Laptop3);
  //   };
  //   const handleShowAugReality = () => {
  //     setLaptopDisplay(Laptop4);
  //   };

  //   function updateLaptopImage() {
  //     if (laptopDisplay === "2") {
  //       return setImageLaptop2;
  //     } else if (laptopDisplay === "3") {
  //       return setImageLaptop3;
  //     } else if (laptopDisplay === "4") {
  //       return setImageLaptop4;
  //     } else {
  //       return setImageLaptop1;
  //     }
  //   }

  return (
    <>
      <div className={styles.homeOffer}>
        <div className={styles.homeOfferLeftContent}>
          <h1 className={styles.homeOfferTitle}>What we offer</h1>
          <p className={styles.homeOfferTextContent}>
            The Creative Problem Solving programme is series of digital creating
            projects aimed to encourage self-motivation and student agency,
            designed by New Zealand's leading IT industry experts and schools.
          </p>
          <h2 className={styles.homeOfferTitleTwo}>
            What will students create?
          </h2>
          <div className={styles.eventContainer}>
            {/* animation button  */}
            <img
              className={styles.offerButtonLinks}
              onClick={handleShowAnimation}
              src={Animation}
              alt="Animation"
            ></img>
            {/* games button  */}
            <img
              className={styles.offerButtonLinks}
              onClick={handleShowGames}
              src={Games}
              alt="Games"
            ></img>
            {/* chatbots button  */}
            <img
              className={styles.offerButtonLinks}
              onClick={handleShowChatbot}
              src={Chatbots}
              alt="Chatbot"
            ></img>
            {/* augmented reality button  */}
            <img
              className={styles.offerButtonLinks}
              onClick={handleShowAugReality}
              src={AugReality}
              alt="AugReality"
            ></img>
          </div>
        </div>
        {/* where the image will show  */}
        <div className={styles.homeOfferRight}>
          {/* {updateLaptopImage(laptopDisplay)} */}
          <img
            style={{ width: "700px", height: "450px" }}
            src={laptopImage.img}
          ></img>
          <div className={styles.laptopBtnDiv}>
            <input
              className={styles.laptopBtns}
              type="radio"
              value="1"
              name="laptopimage"
              onClick={handleShowAnimation}
              // defaultChecked
              checked={laptopImage.id === 1 ? true : false}
            ></input>
            <span></span>
            <input
              className={styles.laptopBtns}
              type="radio"
              value="2"
              name="laptopimage"
              onClick={handleShowGames}
              checked={laptopImage.id === 2 ? true : false}
            ></input>
            <span></span>
            <input
              className={styles.laptopBtns}
              type="radio"
              value="3"
              name="laptopimage"
              onClick={handleShowChatbot}
              checked={laptopImage.id === 3 ? true : false}
            ></input>
            <span></span>
            <input
              className={styles.laptopBtns}
              type="radio"
              value="4"
              name="laptopimage"
              onClick={handleShowAugReality}
              checked={laptopImage.id === 4 ? true : false}
            ></input>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <a href="#" className={styles.slider__indicator}></a>
            <a
              href="#"
              className={styles.slider__dot}
              data-pos="0"
              name="laptopimage"
              value="1"
              checked={laptopImage.id === 1 ? true : false}
            ></a>
            <a
              href="#"
              className={styles.slider__dot}
              data-pos="1"
              name="laptopimage"
              value="2"
              checked={laptopImage.id === 2 ? true : false}
            ></a>
            <a
              href="#"
              className={styles.slider__dot}
              data-pos="2"
              name="laptopimage"
              value="3"
              checked={laptopImage.id === 3 ? true : false}
            ></a>
            <a
              href="#"
              className={styles.slider__dot}
              data-pos="3"
              name="laptopimage"
              value="4"
              checked={laptopImage.id === 4 ? true : false}
            ></a> */
}
