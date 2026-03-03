import { Helmet } from 'react-helmet-async'

export default function Datenschutz() {
    return (
        <div className="legal-page section">
            <Helmet><title>Datenschutzerklärung | best-social-media-agency.com</title></Helmet>
            <div className="container">
                <h1>Datenschutzerklärung</h1>

                <h2>1. Verantwortlicher</h2>
                <p>
                    track by track GmbH<br />
                    Schliemannstr. 23<br />
                    10437 Berlin<br />
                    E-Mail: info@famefact.com
                </p>
                <p>
                    Datenschutzbeauftragter: Jan Kriedner (info@famefact.com)
                </p>

                <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p>
                    Beim Besuch unserer Website werden automatisch Informationen durch den Server gespeichert
                    (Server-Logfiles). Diese Daten umfassen: Browsertyp und -version, verwendetes Betriebssystem,
                    Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                </p>
                <p>
                    Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit
                    anderen Datenquellen wird nicht vorgenommen. Die Datenverarbeitung erfolgt auf Grundlage von
                    Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h2>3. Kontaktformular</h2>
                <p>
                    Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                    Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
                    für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage
                    von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO
                    (berechtigtes Interesse). Die Daten werden über einen Vercel Serverless Function verarbeitet
                    und an Slack weitergeleitet.
                </p>

                <h2>4. Hosting</h2>
                <p>
                    Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet. Vercel verarbeitet
                    personenbezogene Daten in unserem Auftrag und ist vertraglich verpflichtet, angemessene
                    technische und organisatorische Maßnahmen zum Datenschutz zu treffen.
                </p>

                <h2>5. Analytics</h2>
                <p>
                    Wir verwenden Plausible Analytics, einen datenschutzfreundlichen Analysedienst. Plausible
                    verwendet keine Cookies und erhebt keine personenbezogenen Daten. Alle erhobenen Daten sind
                    vollständig anonymisiert und aggregiert.
                </p>

                <h2>6. Ihre Rechte</h2>
                <p>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich hierzu an: info@famefact.com.
                </p>
                <p>
                    Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
                    Ihrer personenbezogenen Daten durch uns zu beschweren.
                </p>

                <h2>7. SSL-Verschlüsselung</h2>
                <p>
                    Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte
                    Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
                    wechselt.
                </p>
            </div>
        </div>
    )
}
