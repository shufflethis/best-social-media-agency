import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <div className="footer__brand-name">
                            famefact<span className="dot">.</span>
                        </div>
                        <p>
                            Seit 2009 die beste Social Media Agentur Deutschlands.
                            Community Management, Content Creation, Social Ads & mehr – alles aus einer Hand.
                        </p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__col">
                            <h4>Agentur</h4>
                            <a href="https://famefact.com" target="_blank" rel="noopener noreferrer">famefact.com</a>
                            <a href="https://famefact.com/social-ads-agentur/" target="_blank" rel="noopener noreferrer">Social Ads</a>
                            <a href="https://famefact.com/content-creation/" target="_blank" rel="noopener noreferrer">Content Creation</a>
                            <a href="https://famefact.com/community-management-agentur-service/" target="_blank" rel="noopener noreferrer">Community Management</a>
                        </div>

                        <div className="footer__col">
                            <h4>Rechtliches</h4>
                            <Link to="/impressum">Impressum</Link>
                            <Link to="/agb">AGB</Link>
                            <Link to="/datenschutz">Datenschutz</Link>
                            <Link to="/disclaimer">Disclaimer</Link>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    © {new Date().getFullYear()} track by track GmbH – famefact. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    )
}
