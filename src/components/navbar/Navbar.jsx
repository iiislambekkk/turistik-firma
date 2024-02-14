import React from 'react';
import Link from "next/link";
import Links from "@/components/navbar/links/Links";
import styles from './navbar.module.css';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={"/logo.jpg"} width={90} height={90}></Image>
            </div>
            <div>
                <Links></Links>
            </div>
        </div>
    );
};

export default Navbar;