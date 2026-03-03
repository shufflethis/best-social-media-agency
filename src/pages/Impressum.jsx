import { Helmet } from 'react-helmet-async'

export default function Impressum() {
    return (
        <div className="legal-page section">
            <Helmet><title>Impressum | best-social-media-agency.com</title></Helmet>
            <div className="container">
                <h1>Impressum</h1>

                <h2>Angaben gemäß § 5 DDG</h2>
                <p>
                    track by track GmbH<br />
                    Schliemannstr. 23<br />
                    10437 Berlin
                </p>

                <h2>Vertreten durch</h2>
                <p>Tobias Sander</p>

                <h2>Kontakt</h2>
                <p>E-Mail: info@famefact.com</p>

                <h2>Registereintrag</h2>
                <p>
                    Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                    Registernummer: HRB 129805 B
                </p>

                <h2>Umsatzsteuer-ID</h2>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                    DE814954842
                </p>

                <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <p>
                    Tobias Sander<br />
                    Schliemannstr. 23<br />
                    10437 Berlin
                </p>
            </div>
        </div>
    )
}
