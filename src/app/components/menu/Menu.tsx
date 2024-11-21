import Link from 'next/link';
import React from 'react';
import SearchForm from '../search/SearchForm';
import styles from './HeaderStyle.module.css'

const Menu = () => {
    return (
        <header className={styles.headerStyle}>
            <div >
                <Link href={'/'}><img src={'https://i.imgur.com/wY6rCrc.png'} alt={'Movie Sandbox'}/></Link>
            </div>
            <nav >
                <ul className={styles.menu}>
                    <li className={styles.viewItem}>
                        <Link href={'/movies'}>Movies</Link>
                    </li>
                    <li className={styles.viewItem}>
                        <Link href={'/genres'}>Genres</Link>
                    </li>

                </ul>
            </nav>
            <div><SearchForm/></div>
            <div className={styles.userLogo}>
                <img src={'https://i.imgur.com/W28GBLC.png'} alt={'Avatar'}/>
                <p>Harry Potter</p>
            </div>
        </header>
    );
};

export default Menu;