import logoFooter from '../assets/logo-footer.svg'

import '../styles/footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <img src={logoFooter} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}