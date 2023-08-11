import Image from 'next/image';
import React from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/">
                <Image src="/vercel.svg" alt="Logo App" width={90} height={90}/>
                </Link>
                
            </div>
            <ul>
                <Link href="/contacto">Contacto</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/carrito">Carrito</Link>
            </ul>
        </nav>
    )
}

export default Navbar;