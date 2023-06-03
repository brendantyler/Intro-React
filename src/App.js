import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';


import './style/index.css';
import imageOne from './style/img/component_01.jpg';
import imageTwo from './style/img/component_02.jpg';
import imageThree from './style/img/component_03.jpg';
import imageFour from './style/img/component_04.jpg';




function App() {
  let bannerTitle = 'Component Shop';
  let bannerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit sed, tempora, cupiditate hic in error quibusdam aliquid maiores commodi modi eos, sunt culpa minima!Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit sed, tempora, cupiditate hic in errorIllo fugit sed, tempora, cupiditate hic in error';
  const images = [
    {
      id: 1,
      path: imageOne,
      title: 'Blue Component'
    },
    {
      id: 2,
      path: imageTwo,
      title: 'Green Component'
    },
    {
      id: 3,
      path: imageThree,
      title: 'Yellow Component'
    },
    {
      id: 4,
      path: imageFour,
      title: 'Green Component v2'
    }
  ]

  return (
    <>
    <main>
        <Header
        title ='Component Shop'
        home = 'Home'
        about= 'About Us'
        contact = 'Contact'
        />

        <Banner
        title = {bannerTitle}
        text = {bannerText}
        />

        <Gallery images = {images}/>

        <Footer
        licence ='Component ltd'
        home = 'Home'
        about= 'About Us'
        contact = 'Contact'
        />
    </main>
    </>
  );
}

export default App;
