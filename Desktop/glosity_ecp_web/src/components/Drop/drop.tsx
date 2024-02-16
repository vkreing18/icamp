"use client";
import React, {useState } from "react";
import styles from "./drop.module.css";
import openImg from "../../../public/assets/l1.png";
import arrowDown from "../../../public/assets/arrowDown.png";
import arrowRight from "../../../public/assets/arrowRightGrey.png";
import Image from "next/image";

export default function Drop() {
  // const elementRef = useRef(null);
  const [block1Style, setBlock1Style] = useState("bigBlock");
  const [block2Style, setBlock2Style] = useState("smlBlock");
  const [block3Style, setBlock3Style] = useState("smlBlock");
  const [block4Style, setBlock4Style] = useState("smlBlock");

  // const isSmallDevice = window.innerWidth <= 886;

// const handleMouseEnter = (id:any) => {
//   if (!isSmallDevice) {
//     const timeout = setTimeout(() => {
//       if (id === 2 && !block2Style) {
//         setBlock2Style("bigBlock");
//         setBlock1Style("smlBlock");
//         setBlock3Style("smlBlock");
//         setBlock4Style("smlBlock");
//       }
//       if (id === 3 && !block3Style) {
//         setBlock3Style("bigBlock");
//         setBlock1Style("smlBlock");
//         setBlock2Style("smlBlock");
//         setBlock4Style("smlBlock");
//       }
//       if (id === 4 && !block4Style) {
//         setBlock4Style("bigBlock");
//         setBlock1Style("smlBlock");
//         setBlock2Style("smlBlock");
//         setBlock3Style("smlBlock");
//       }
//     }, 400);

//     return () => clearTimeout(timeout);
//   }
// };

//   const handleMouseLeave = (id:any) => {
//     if (!isSmallDevice) {
//       const timeout = setTimeout(() => {
//       if (id === 2) {
//         setBlock2Style("smlBlock");
//         setBlock1Style("bigBlock");
//       }
//       if (id === 3) {
//         setBlock3Style("smlBlock");
//         setBlock1Style("bigBlock");
//       }
//       if (id === 4) {
//         setBlock4Style("smlBlock");
//         setBlock1Style("bigBlock");
//       }
//     }, 300);
//     return () => clearTimeout(timeout);
//     }
//   };
  const allClosed = !block1Style && !block2Style && !block3Style && !block4Style;
  if(allClosed==true){
    setBlock1Style("bigBlock");
  }

  const handleClick = (id:any) => {
    setBlock1Style("smlBlock");
    setBlock2Style("smlBlock");
    setBlock3Style("smlBlock");
    setBlock4Style("smlBlock");
    if (id === 2) {
      setBlock2Style("bigBlock");
    }
    else if(id === 1){
      setBlock1Style("bigBlock");
    }
    else if (id === 3) {
      setBlock3Style("bigBlock");
    }
    else if (id === 4) {
      setBlock4Style("bigBlock");
    }
  };

  
  return (
    <div className={styles.dropMain}>
      <div className={styles.title}>
        <div className={styles.text1}>We Offer</div>
        <div className={styles.text2}>For Recruiter</div>
      </div>
      <div className={styles.column}>
        <div   onClick={() => handleClick(1)}
        className={ block1Style== "bigBlock" ?styles.open:styles.close}>
          <div className={ block1Style== "bigBlock" ? styles.openContain : styles.closeContain}>
            <div className={ block1Style== "bigBlock" ? styles.openTextContain:styles.closeTextContain}>
          <div className={ block1Style== "bigBlock" ? styles.openNo : styles.closeNo}>01</div>
          <div className={ block1Style== "bigBlock" ? styles.openWrap : styles.closeWrap}>
            <div className={ block1Style== "bigBlock" ? styles.openTop : styles.closeTop}>
              <div className={ block1Style== "bigBlock" ? styles.openText1 : styles.closeText1}>
                <p>UI/UX Design</p>
                <div
                  className={styles.arrowDown}
                
                
                >
                  <Image src={ block1Style== "bigBlock" ?arrowDown : arrowRight} fill alt="P" />
                </div>
              </div>
              {block1Style==='bigBlock' && (
                <div className={styles.openText2}>
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim lacus id aliquam montes euismod urna
                  sem.
                </div>
              )}
            </div>
            {block1Style==='bigBlock' && (
              <div className={styles.openImg}>
                <div className={styles.openimg}>
                  <Image src={openImg} fill alt="P" />
                </div>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>
        <div  onClick={() => handleClick(2)}
        className={ block2Style== "bigBlock" ?styles.open:styles.close}
        // ref={elementRef}
        // onMouseEnter={() => handleMouseEnter(2)}
        // onMouseLeave={() => handleMouseLeave(2)}
        >
          <div className={ block2Style== "bigBlock" ? styles.openContain : styles.closeContain}>
            <div className={ block2Style== "bigBlock" ? styles.openTextContain:styles.closeTextContain}>
          <div className={ block2Style== "bigBlock" ? styles.openNo : styles.closeNo}>02</div>
          <div className={ block2Style== "bigBlock" ? styles.openWrap : styles.closeWrap}>
            <div className={ block2Style== "bigBlock" ? styles.openTop : styles.closeTop}>
              <div className={ block2Style== "bigBlock" ? styles.openText1 : styles.closeText1}>
                <p>FrontEnd Developer</p>
                <div
                  className={styles.arrowDown}
                 
                
                >
                  <Image src={ block2Style== "bigBlock" ?arrowDown : arrowRight} fill alt="P" />
                </div>
              </div>
              {block2Style==='bigBlock' && (
                <div className={styles.openText2}>
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim lacus id aliquam montes euismod urna
                  sem.
                </div>
              )}
            </div>
            {block2Style==='bigBlock' && (
              <div className={styles.openImg}>
                <div className={styles.openimg}>
                  <Image src={openImg} fill alt="P" />
                </div>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>
        <div className={ block3Style== "bigBlock" ?styles.open:styles.close}
          onClick={() => handleClick(3)}
        // ref={elementRef}
        // onMouseEnter={() => handleMouseEnter(3)}
        // onMouseLeave={() => handleMouseLeave(3)}
        >
          <div className={ block3Style== "bigBlock" ? styles.openContain : styles.closeContain}>
            <div className={ block3Style== "bigBlock" ? styles.openTextContain:styles.closeTextContain}>
          <div className={ block3Style== "bigBlock" ? styles.openNo : styles.closeNo}>03</div>
          <div className={ block3Style== "bigBlock" ? styles.openWrap : styles.closeWrap}>
            <div className={ block3Style== "bigBlock" ? styles.openTop : styles.closeTop}>
              <div className={ block3Style== "bigBlock" ? styles.openText1 : styles.closeText1}>
                <p>BackEnd Developer</p>
                <div
                  className={styles.arrowDown}
                
                
                >
                  <Image src={ block3Style== "bigBlock" ?arrowDown : arrowRight} fill alt="P" />
                </div>
              </div>
              {block3Style==='bigBlock' && (
                <div className={styles.openText2}>
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim lacus id aliquam montes euismod urna
                  sem.
                </div>
              )}
            </div>
            {block3Style==='bigBlock' && (
              <div className={styles.openImg}>
                <div className={styles.openimg}>
                  <Image src={openImg} fill alt="P" />
                </div>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>
        <div className={ block4Style== "bigBlock" ?styles.open:styles.close}
         onClick={() => handleClick(4)}
        // ref={elementRef}
        // onMouseEnter={() => handleMouseEnter(4)}
        // onMouseLeave={() => handleMouseLeave(4)}
        >
          <div className={ block4Style== "bigBlock" ? styles.openContain : styles.closeContain}>
            <div className={ block4Style== "bigBlock" ? styles.openTextContain:styles.closeTextContain}>
          <div className={ block4Style== "bigBlock" ? styles.openNo : styles.closeNo}>04</div>
          <div className={ block4Style== "bigBlock" ? styles.openWrap : styles.closeWrap}>
            <div className={ block4Style== "bigBlock" ? styles.openTop : styles.closeTop}>
              <div className={ block4Style== "bigBlock" ? styles.openText1 : styles.closeText1}>
                <p>Full Stack Developer</p>
                <div
                  className={styles.arrowDown}
                 
                
                >
                  <Image src={ block4Style== "bigBlock" ?arrowDown : arrowRight} fill alt="P" />
                </div>
              </div>
              {block4Style==='bigBlock' && (
                <div className={styles.openText2}>
                  Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac
                  eu. Ultricies nisl enim lacus id aliquam montes euismod urna
                  sem.
                </div>
              )}
            </div>
            {block4Style==='bigBlock' && (
              <div className={styles.openImg}>
                <div className={styles.openimg}>
                  <Image src={openImg} fill alt="P" />
                </div>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}


 
