import { Link } from "react-router-dom"

import Container from "./Container"

import styles from "./NavBar.module.css"
import logo from "../../img/costs_logo.png"

function NavBar(){
    return(
        <div>
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="logo site" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.items}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.items}>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li className={styles.items}>
                            <Link to="/contact">Contato</Link>
                        </li>
                        <li className={styles.items}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </div>
    )
}

export default NavBar