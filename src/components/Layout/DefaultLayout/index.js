import Footer from '~/components/Layout/components/Footer';
import Header from '~/components/Layout/components/Header';
import Slide from './Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {/* <Slide /> */}
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
