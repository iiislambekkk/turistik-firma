import React from 'react';
import Image from 'next/image';
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="" width={500} height={500}></Image>
            </div>
        </div>
    );
};

export default AboutPage;