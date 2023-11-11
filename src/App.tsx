import { Layout } from "antd";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { PageFooter } from "./components/PageFooter";


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
        <NavBar />
        <Hero />
        <Content>
          <About />
          <Experience />
          <Projects />
          <Activities />
        </Content>
        <PageFooter />
    </Layout>
  );
}

export default App;
