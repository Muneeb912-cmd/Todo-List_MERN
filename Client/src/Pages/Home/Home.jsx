import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import TodoList from '../../Components/Todo/TodoList';


export default function Home() {
    return (
        <>
            <Header />                     
            <div style={{paddingTop:'20px',paddingBottom:'20px'}}>           
                 <TodoList/>
            </div>             
            <Footer />
        </>
    );
}