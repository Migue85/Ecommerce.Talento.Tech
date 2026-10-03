import { NavBar } from './NavBar.jsx';

export function Header() {
    return (
        <header style={{ padding: '20px', backgroundColor: '#222', color: 'white' }}>
            <h1>Mi E-Commerce Hot Toys</h1>
            <NavBar />
        </header>
    );
}