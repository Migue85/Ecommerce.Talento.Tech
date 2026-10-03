import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Layout({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <main style={{ flexGrow: 1, padding: '20px' }}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}