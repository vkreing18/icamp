import React from "react";
import Image from "next/image";

import styles from "./banner.module.css";
import homePoster from "../../../public/assets/home-poster.png";
import logo from "../../../public/assets/logo.png";
import Button from "../Shared/Button/Button";

export default function Banner() {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_contents}>
        <div className={styles.logo_img}>
          <Image src={logo} alt="logo" />
          <div className={styles.talk_btn}>
            <div>
              <button>For Candidates</button>
            </div>
            <div>
              <button>For Recruiters</button>
            </div>
          </div>
        </div>
        <div className={styles.main_content}>
          <div className={styles.tagline}>
            <p>Opportunities, that propels your passion</p>
          </div>
          <div className={styles.heading}>
            <h1 className={styles.first_heading} style={{ color: "#0DC99E" }}>
              Dive into
            </h1>
            <h1 className={styles.second_heading}>Glosity&aposs Internship Camp</h1>
          </div>
          <div className={styles.content}>
            <p>
              We&aposre a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
          </div>

          <div className={styles.btn1} 
          // style={{ display: "inline-block" }}
          >
            <Button text="Contact Us" />
          </div>

          <div className={styles.cand_rec_btn}>
            <div><button>For Recruiters</button></div>
            <div><button>For Recruiters</button></div>
          </div>

          {/* Banner card */}
          <div className={styles.banner_wrapper}>
            <div className={styles.banner_card}>What we’ll Provide</div>
            <div className={styles.banner_card_poster}>
              <div className={styles.first_poster}>
                <Image src={homePoster} alt="homePoster" />
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  For Recruiter
                </p>
              </div>
              <div className={styles.second_poster}>
                <Image src={homePoster} alt="homePoster" />
              </div>
            </div>
          </div>

          <div className={styles.btn2}
          // style={{ display: "inline-block" }}
          >
            <Button text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

