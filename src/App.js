import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MainMovie from './components/MainMovie';
import SecondMovie from './components/SecondMovie';
import ThirdMovie from './components/ThirdMovie';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar/>
         </header>
      <main>
        <MainMovie/>
      <SecondMovie/>
      <ThirdMovie/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;