import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ContactUs from '../../Components/Contact/ContactUs';


export default function Contact() {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '75px', paddingBottom: '75px' }}>
                <ContactUs />
            </div>
            <Footer />
        </>
    );
}