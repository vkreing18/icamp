"use client";

import React, { useRef, useState } from "react";
import styles from "./slider.module.css";
import blockLogo from "../../../public/assets/block-logo.png";
import arrowRight from "../../../public/assets/Vector.png";
import arrowUpper from "../../../public/assets/ArrowRight.png";
import upsideArrow from "../../../public/assets/UpsideArrow.svg"
import Image from "next/image";
import div1Logo from "../../../public/assets/div1Svg.svg";
import div2Logo from "../../../public/assets/Frame 22.png";
import div3Logo from "../../../public/assets/div3Svg.svg";
import div4Logo from "../../../public/assets/div4Svg.svg";
// import { Inter } from 'next/font/google'

const Slider = () => {
  const [smlBlock1Style, setSmlBlock1Style] = useState("bigBlock");
  const [smlBlock2Style, setSmlBlock2Style] = useState("smlBlock");
  const [smlBlock3Style, setSmlBlock3Style] = useState("smlBlock");
  const [smlBlock4Style, setSmlBlock4Style] = useState("smlBlock");
  // const inter = Inter({ subsets: ['latin'] })

  const isSmallDevice = window.innerWidth <= 886;

  const elementRef = useRef(null);
  const handleMouseEnter = (id: any) => {
    if(!isSmallDevice){

      if (id === 2) {
        setSmlBlock2Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
      if (id === 3) {
        setSmlBlock3Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
      if (id === 4) {
        setSmlBlock4Style("bigBlock");
        setSmlBlock1Style("smlBlock");
      }
    }
  };
  const handleMouseLeave = (id: any) => {
    if(!isSmallDevice){

      if (id === 2) {
        setSmlBlock2Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
      if (id === 3) {
        setSmlBlock3Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
      if (id === 4) {
        setSmlBlock4Style("smlBlock");
        setSmlBlock1Style("bigBlock");
      }
    }
  };
  const allClosed = !smlBlock1Style && !smlBlock2Style && !smlBlock3Style && !smlBlock4Style;
  if(allClosed==true){
    setSmlBlock1Style("bigBlock");
  }
  const handleClick = (id:any) => {
    setSmlBlock1Style("smlBlock");
    setSmlBlock2Style("smlBlock");
    setSmlBlock3Style("smlBlock");
    setSmlBlock4Style("smlBlock");
    if (id === 2) {
      setSmlBlock2Style("bigBlock");
    }
    else if(id === 1){
      setSmlBlock1Style("bigBlock");
    }
    else if (id === 3) {
      setSmlBlock3Style("bigBlock");
    }
    else if (id === 4) {
      setSmlBlock4Style("bigBlock");
    }
  };

  return (

    <div className={styles.slider}>
      <div className={styles.title}>
        <div className={styles.text1}>We Offer</div>
        <div className={styles.text2}>For Recruiter</div>
      </div>
      <div className={styles.xx}>
      <div className={styles.blocks}>
        {/* big block */}
        <div
          className={
            smlBlock1Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          onClick={() => handleClick(1)}
        >
          <div
            className={
              smlBlock1Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock1Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock1Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              <Image
                src={smlBlock1Style == "smlBlock" ? div1Logo : blockLogo}
                fill
                alt="P"
              />
            </div>
            <div
              className={
                smlBlock1Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock1Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
               <p> Projects</p>
                <div className={styles.arrow}
                >
                 {smlBlock1Style != "smlBlock" && 
                   <Image
                   src={upsideArrow}
                   fill
                   alt="Pic"
                 />}
                </div>
              </div>
              <div
                className={
                  smlBlock1Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock1Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  Complete your project with our p step-by-step guide and easy
                  explanations.
                </div>
                <div
                  className={
                    smlBlock1Style == "smlBlock"
                      ? styles.smlblockContains2
                      : styles.bigblockContains2
                  }
                >
                  Complete your project
                </div>
                <div
                  className={
                    smlBlock1Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock1Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                  >
                    <p>Let's Talk</p>
                    <div className={styles.ccc}>
                    <div className={styles.cc}>
                    <div
                      className={
                        smlBlock1Style == "smlBlock"
                          ? styles.arrowRight
                          : styles.arrowUpper
                      }
                    >
                      <Image
                        src={
                          smlBlock1Style == "smlBlock" ? arrowRight : arrowUpper
                        }
                        fill
                        alt="Pic"
                      />
                    </div>
                    </div>
                    </div>


                  </button>
                   {/* <Button text="Let's Talk"
                      /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* small block */}
        <div
          onClick={() => handleClick(2)}
          className={
            smlBlock2Style == "smlBlock"
              ? `${styles.smlBlock} ${styles.smlBlock2}`
              : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={{
            background: smlBlock2Style === "smlBlock" ? "#F8F8F8" : "#EBE8FC",
          }}
        >
          <div
            className={
              smlBlock2Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock2Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock2Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
              style={{
                background: smlBlock2Style === "smlBlock" ? "#EBE8FC" : "white",
              }}
            >
              <Image
                src={smlBlock2Style == "smlBlock" ? div2Logo : blockLogo}
                fill
                alt="P"
              />
            </div>
            <div
              className={
                smlBlock2Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock2Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
              <p> Projects</p>
                <div className={styles.arrow}
               
                >
                 {smlBlock2Style != "smlBlock" && 
                   <Image
                   src={upsideArrow}
                   fill
                   alt="Pic"
                 />}
                </div>
              </div>
              <div
                className={
                  smlBlock2Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock2Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  Complete your project with our step-by-step guide and easy
                  explanations.
                </div>
                <div
                  className={
                    smlBlock2Style == "smlBlock"
                      ? styles.smlblockContains2
                      : styles.bigblockContains2
                  }
                >
                  Complete your project
                </div>
                <div
                  className={
                    smlBlock2Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock2Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                  >
                    <p>Let&aposs Talk</p>
                    <div
                      className={
                        smlBlock2Style == "smlBlock"
                          ? styles.arrowRight
                          : styles.arrowUpper
                      }
                    >
                      <Image
                        src={
                          smlBlock2Style == "smlBlock" ? arrowRight : arrowUpper
                        }
                        fill
                        alt="Pic"
                      />
                    </div>
                  </button>
                    {/* <Button text="Let's Talk"
                       /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleClick(3)}
          className={
            smlBlock3Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
          style={{
            background: smlBlock3Style === "smlBlock" ? "#F8F8F8" : "#FFFDE8",
          }}
        >
          <div

            className={
              smlBlock3Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock3Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock3Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              <Image
                src={smlBlock3Style == "smlBlock" ? div3Logo : blockLogo}
                fill
                alt="P"
              />
            </div>
            <div
              className={
                smlBlock3Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock3Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
              <p> Projects</p>
                <div className={styles.arrow}
                >
                 {smlBlock3Style != "smlBlock" && 
                   <Image
                   src={upsideArrow}
                   fill
                   alt="Pic"
                 />}
                </div>
              </div>
              <div
                className={
                  smlBlock3Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock3Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  Complete your project with our step-by-step guide and easy
                  explanations.
                </div>
                <div
                  className={
                    smlBlock3Style == "smlBlock"
                      ? styles.smlblockContains2
                      : styles.bigblockContains2
                  }
                >
                  Complete your project
                </div>
                <div
                  className={
                    smlBlock3Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock3Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                  >
                    <p>Let&aposs Talk</p>
                    <div
                      className={
                        smlBlock3Style == "smlBlock"
                          ? styles.arrowRight
                          : styles.arrowUpper
                      }
                    >
                      <Image
                        src={
                          smlBlock3Style == "smlBlock" ? arrowRight : arrowUpper
                        }
                        fill
                        alt="Pic"
                      />
                    </div>
                  </button>
                    {/* <Button text="Let's Talk"
                     /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => handleClick(4)}
          className={
            smlBlock4Style == "smlBlock" ? styles.smlBlock : styles.bigBlock
          }
          ref={elementRef}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
          style={{
            background: smlBlock4Style === "smlBlock" ? "#F8F8F8" : "#DFFFDC",
          }}
        >
          <div
            className={
              smlBlock4Style == "smlBlock" ? styles.smlellipse : styles.ellipse
            }
          ></div>
          <div
            className={
              smlBlock4Style == "smlBlock"
                ? styles.smlBlockContain
                : styles.bigBlockContain
            }
          >
            <div
              className={
                smlBlock4Style == "smlBlock" ? styles.smlLogo : styles.blockLogo
              }
            >
              <Image
                src={smlBlock4Style == "smlBlock" ? div4Logo : blockLogo}
                fill
                alt="P"
              />
            </div>
            <div
              className={
                smlBlock4Style == "smlBlock"
                  ? styles.smlContains
                  : styles.bigBlockContains
              }
            >
              <div
                className={
                  smlBlock4Style == "smlBlock"
                    ? styles.smlBlockTitle
                    : styles.bigBlockTitle
                }
              >
              <p> Projects</p>
                <div className={styles.arrow}
                >
                  {smlBlock4Style != "smlBlock" && 
                   <Image
                   src={upsideArrow}
                   fill
                   alt="Pic"
                 />}
                
                </div>
              </div>
              <div
                className={
                  smlBlock4Style == "smlBlock"
                    ? styles.smlBlockContains
                    : styles.bigBlockContain
                }
              >
                <div
                  className={
                    smlBlock4Style == "smlBlock"
                      ? styles.smlBlockContains1
                      : styles.bigBlockContains1
                  }
                >
                  Complete your project with our step-by-step guide and easy
                  explanations.
                </div>
                <div
                  className={
                    smlBlock4Style == "smlBlock"
                      ? styles.smlblockContains2
                      : styles.bigblockContains2
                  }
                >
                  Complete your project
                </div>
                <div
                  className={
                    smlBlock4Style == "smlBlock"
                      ? styles.smlblockContains3
                      : styles.bigblockContains3
                  }
                >
                  <button
                    className={
                      smlBlock4Style == "smlBlock"
                        ? styles.smlBlockButton
                        : styles.bigBlockButton
                    }
                  >
                    <p>Let&aposs Talk</p>
                    <div
                      className={
                        smlBlock4Style == "smlBlock"
                          ? styles.arrowRight
                          : styles.arrowUpper
                      }
                    >
                      <Image
                        src={
                          smlBlock4Style == "smlBlock" ? arrowRight : arrowUpper
                        }
                        fill
                        alt="Pic"
                      />
                    </div>
                  </button>
                    {/* <Button text="Let's Talk"
                       /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Slider;
 