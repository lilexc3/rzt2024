import React from 'react';
import Logo from './logo';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Logo />
            </div>
            <nav>
                <ul>
                    <li>
                        <form action="" method="get">
                        <input type="text" name="q" placeholder="Искать на сайте" />
                        <button type="submit">Поиск</button>
                        </form>
                    </li>
                    <li><a href="#">Поддержка</a></li>
                    <li><a href="#">Войти</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
