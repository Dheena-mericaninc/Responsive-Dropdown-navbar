
import './App.css';
import Button from './components/Button';
// import AlertBgColor from './components/loginform';
import ButtonColorChange from './components/buttoncolorchange';
import LocalStorage from './components/localstorage';
import LoginForm from './components/loginform';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      {/* <ButtonColorChange /> */}
      {/* <LoginForm /> */}
      {/* <LocalStorage /> */}

      <section
        className="h-screen w-screen font-[Poppins] md:bg-top bg-center bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        }}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-2xl font-medium">Fashion Tips</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
            Items every Womens should have
          </h1>
          <div>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
