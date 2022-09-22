import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './components/screens/ProductScreen';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <main className="container mx-auto min-h-screen my-10 md:max-w-4xl  ">
                    <Routes>
                        <Route
                            path="/product/:id"
                            element={<ProductScreen />}
                        />
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
};
export default App;
