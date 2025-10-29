import {SocialIcon} from 'react-social-icons'
import picture from './assets/me_with_ESSEN.jpg'
import './App.css'

function App() {

    return (
        <>
            <header id="header">
                <nav className="navbar">
                    <div className="left">
                        <SocialIcon url="https://github.com/Mangorix2" fgColor="white" bgColor="black"/>
                        <SocialIcon url="mailto:deforgelucien@gmail.com" fgColor="white" bgColor="black" />
                    </div>
                    <div className="right">
                        <a className="anchor" href="#aboutMe">About Me</a>
                        <a className="anchor" href="#projects">Projects</a>
                    </div>
                </nav>
            </header>
            <main>
                <section className="Start-container" id="top">
                    <div className="item">
                        <div className="sousitem">
                            <h1>Hallo, mein Name ist Lucien</h1>
                            <h3>Informatiker im Werdegang und Fan von Zeltlager</h3>
                        </div>
                        <div className="sousitem">
                            <h1 id="aboutMe">About me</h1>
                            <p>Ich bin gerade in der IMS und mache dort einen Abschluss als Informatiker
                                Applikationsentwickler EFZ und einer BMS Wirtschaft und Recht. In meiner Freizeit bin ich Leiter und Matchef in der Jubla
                                Greifensee-Nänikon. Auch trainiere ich Hapkido.</p>
                        </div>
                    </div>
                    <img className="item" src={picture}/>
                </section>
                <section className="projects" id="projects">
                    <h1>Projects</h1>
                    <div className="project-card">
                    <a href="about:blank">
                        <div className="card">
                            <h2>This is a project</h2>
                            <p>And it works</p>
                        </div>
                    </a>
                    <a href="about:blank">
                        <div className="card">
                            <h2>This is a project 2</h2>
                            <p>And it works 2</p>
                        </div>
                    </a>
                    <a href="https://github.com/Mangorix2/GameOfLife">
                        <div className="card">
                            <h2>Game Of Life</h2>
                            <p>Zellensimulation in der Konsole mit Java</p>
                        </div>
                    </a>
                    </div>
                </section>
            </main>
            <footer id="footer">
                <p>© 2025 -Lucien-</p>
            </footer>
        </>
    )
}

export default App
