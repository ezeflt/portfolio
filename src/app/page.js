import styles from "../../public/css/Page.css";
import HomePage from "./components/HomePage/HomePage";
import Skills from "./components/SkillsPage/Skills";
import Projet from "./components/ProjetPage/Projets";
import Description from "./components/DescriptionPage/description";
import ContactPage from "./components/contactPage/ContactPage";

export default function Home() {
  return (
    <>
      <div className="container">
        <Description />
        <HomePage />
        <Skills />
        <Projet />
        <ContactPage />
      </div>
    </>
  );
}
