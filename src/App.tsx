import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto ">
                <h1>My Shop</h1>
            </main>
            <Footer />
        </>
    );
};
export default App;
