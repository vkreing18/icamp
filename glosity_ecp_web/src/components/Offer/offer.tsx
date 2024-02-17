import React from "react";
import styles from "./offer.module.css"
import Image from "next/image";

export default function Offer() {
  return (
      <div className={styles.offer}>
        <div className={styles.images}>
                  <div className={styles.circle}>
      <Image  src="/assets/circle.png" fill alt="P" />
    </div>
    <div className={styles.vectorImg1}>
    <div className={styles.vector1}>
    <Image  src="/assets/Vector-1.png" fill alt="P" />
    </div>
    </div>
    <div className={styles.vectorImg2}>
    <div className={styles.vector2}>
    <Image  src="/assets/Vector-1.png" fill alt="P" />
    </div>
    </div>
        </div>



        <div className={styles.achivement}>
          <div className={styles.table}>
            We&aposre a team of experienced designers, developers, and marketers,
            passionate about delivering exceptional digital solutions.
          </div>
          <div className={styles.box}>
            <div className={styles.box1}>
              <p className={styles.boxNo}>10+</p>
              <p className={styles.boxText}>Active Recruiters</p>
            </div>
            <div className={styles.box1}>
              <p className={styles.boxNo}>8K+</p>
              <p className={styles.boxText}>Candidates</p>
            </div>
            <div className={styles.box1}>
              <p className={styles.boxNo}>12K+</p>
              <p className={styles.boxText}>Proof of works</p>
            </div>
            <div className={styles.box1}>
              <p className={styles.boxNo}>120+</p>
              <p className={styles.boxText}>Hired</p>
            </div>
          </div>
        </div>
      </div>
  );
}
