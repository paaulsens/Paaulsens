import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar/Navbar_Home';
import HomeContent from '../Components/HomePage/HomeContent';

import '../Css/Home.css';

const Home = () => {
  
  return (
    <div>
      <Logo />
      <Navbar />
      <HomeContent />
    </div>
  );
}

export default Home;