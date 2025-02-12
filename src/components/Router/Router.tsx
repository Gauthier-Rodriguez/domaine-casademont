import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Wines from '../Wines/Wines';
import About from '../About/About';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';
import ScrollToTop from '../ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
const Router = () => {
    const location = useLocation();

    const pathWithoutHeader = ['/'];
    const isPathWithoutHeader = pathWithoutHeader.includes(location.pathname);

    return (
        <>
            {!isPathWithoutHeader && <Nav />}
            <ScrollToTop />
            <HelmetProvider>
                <Routes>
                    <Route path='*' element={<Error />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/wines" element={<Wines />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </HelmetProvider>
        </>
    );
};
export default Router;