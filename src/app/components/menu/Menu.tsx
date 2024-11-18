import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/movies'}>Movies</Link>
                </li>

            </ul>
        </div>
    );
};

export default Menu;