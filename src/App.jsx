import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/Sections/AboutSection";
import ProjectSection from "./components/Sections/ProjectSection";
import TechSection from "./components/Sections/TechSection";
import BannerSection from "./components/Sections/BannerSection";
import './styles/globalStyles.css'
import './styles/reset.css'

function App() {
  return (
    <main className="container">
      <Header />
      <BannerSection />
      <AboutSection/>
      <TechSection />
      <ProjectSection />
      <Footer/>
    </main>
  );
}

export default App;
