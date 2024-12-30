import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Wines from '../Wines/Wines';
import About from '../About/About';
import Nav from '../Nav/Nav';
import Error from '../Error/Error';

const Router = () => {
    const location = useLocation();

    const pathWithoutHeader = ['/'];
    const isPathWithoutHeader = pathWithoutHeader.includes(location.pathname);

    return (
        <>
            {!isPathWithoutHeader && <Nav />}
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/wines" element={<Wines />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </>
    );
};
    export default Router;