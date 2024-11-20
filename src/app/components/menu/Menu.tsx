import Link from 'next/link';
import React from 'react';
import SearchForm from '../search/SearchForm';

const Menu = () => {
    return (
        <header>
            <div>
                <Link href={'/'}><img src={'https://i.imgur.com/6YIgTrt.png'} alt={'Movie Sandbox'}/></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/movies'}>Movies</Link>
                    </li>
                    <li>
                        <Link href={'/genres'}>Genres</Link>
                    </li>

                </ul>
            </nav>
            <SearchForm/>
        </header>
    );
};

export default Menu;