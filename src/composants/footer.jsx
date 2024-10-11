import logoFooter from '../assets/logo-footer.svg'

import '../styles/footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}