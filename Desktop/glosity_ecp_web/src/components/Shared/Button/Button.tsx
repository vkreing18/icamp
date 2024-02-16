import React from 'react'
import styles from "./button.module.css"
import Image from 'next/image';
import rightArrow from "../../../../public/assets/arrowRight.png"

interface iProps{
    text:string;
}

const Button = (props:iProps) => {
  return (
    <div className={styles.common_btn}>
        <button>{props.text}</button>
        {/* <div> */}

        <Image src={rightArrow} alt='right-arrow'/>
        {/* </div> */}
    </div>
  )
}

export default Button;