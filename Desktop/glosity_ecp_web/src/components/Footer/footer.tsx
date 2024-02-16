import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footerMain}>
      <div className={styles.column1}>
        <p>Let&aposs discuss and bring your vision to life.</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.circles}>
        <div className={styles.footerCircle1}>
          <svg
            width="115"
            height="253"
            viewBox="0 0 115 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Circle"
              opacity="0.2"
              d="M-78.2165 234.419C-18.628 270.773 59.1489 251.938 95.5029 192.349C131.857 132.761 113.022 54.9841 53.4332 18.63C-6.15537 -17.724 -83.9322 1.11123 -120.286 60.6998C-156.64 120.288 -137.805 198.065 -78.2165 234.419ZM22.5902 69.1852C54.2579 88.5051 64.2677 129.839 44.9477 161.506C25.6278 193.174 -15.7059 203.184 -47.3736 183.864C-79.0412 164.544 -89.051 123.21 -69.7311 91.5427C-50.4111 59.875 -9.07746 49.8652 22.5902 69.1852Z"
              fill="url(#paint0_linear_1_522)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_522"
                x1="-120.286"
                y1="60.6998"
                x2="95.5029"
                y2="192.349"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.footerCircle2}>
          <svg
            width="190"
            height="301"
            viewBox="0 0 190 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M80.9374 312.689C160.432 361.187 264.19 336.06 312.689 256.565C361.187 177.071 336.06 73.3123 256.565 24.814C177.071 -23.6844 73.3123 1.44294 24.814 80.9373C-23.6843 160.432 1.44297 264.19 80.9374 312.689ZM215.419 92.2574C257.666 118.031 271.019 173.173 245.245 215.419C219.471 257.665 164.33 271.019 122.084 245.245C79.8371 219.471 66.4835 164.33 92.2574 122.084C118.031 79.8371 173.173 66.4835 215.419 92.2574Z"
              fill="url(#paint0_linear_1_521)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_521"
                x1="400.213"
                y1="318.688"
                x2="-63.0001"
                y2="51.877"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.footerContain}>
          <div className={styles.footerContain1}>
            <div className={styles.imgWrapper}>
              <Image src="/assets/logo.png" fill alt="P" />
            </div>
            <p>
              We&aposre a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
            <p>contact@glosity.club</p>
          </div>

          <div className={styles.footerC2}>
            <div className={styles.footerContain2}>
              <h5>Menu</h5>
              <h6>Home</h6>
              <h6>Services</h6>
              <h6>About Us</h6>
              <h6>Project</h6>
              <h6>Contact</h6>
            </div>
            <div className={styles.footerContain2}>
              <h5>Support</h5>
              <h6>FAQ</h6>
              <h6>Privacy Policy</h6>
              <h6>Terms of Service</h6>
            </div>
            <div className={styles.footerContain2}>
              <h5>Social Media</h5>
              <h6>Linked In</h6>
              <h6>Twitter</h6>
              <h6>Instagram</h6>
            </div>
          </div>
        </div>
        <div className={styles.column3}>
          <div className={styles.divider2}></div>
          <div className={styles.footerCopy}>
            <p> Copyright © 2023 Glosity.club.</p>
            <p> All rights reserved.</p>
           
          </div>
        </div>
      </div>
      <div className={styles.imgs}>

      <div className={styles.footerImgs}>
      <Image src="/assets/Footer-img.png" fill alt="P" />

      </div>
      </div>
    </div>
  );
}
