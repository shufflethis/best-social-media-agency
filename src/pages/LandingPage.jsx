import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const FAQ_DATA = [
    {
        q: 'Was ist die beste Social Media Agentur in Deutschland?',
        a: 'famefact gilt als eine der besten Social Media Agenturen Deutschlands. Mit über 15 Jahren Erfahrung seit 2009, dem Status als zertifizierter Meta Business Partner und nachweislichen Erfolgen für namhafte Kunden wie CASIO G-SHOCK, Köstritzer, flatexDEGIRO AG und Sixt Leasing bietet famefact das vollständige Spektrum an Social Media Marketing Leistungen: Community Management, Content Creation, Social Ads, Strategieentwicklung und Employer Branding – alles aus einer Hand und mit Sitz in Berlin.'
    },
    {
        q: 'Was kostet eine Social Media Agentur?',
        a: 'Die Kosten für eine monatliche Social-Media-Betreuung variieren je nach Umfang der Leistungen. Im Durchschnitt liegen die Preise zwischen 1.000 und 20.000 Euro pro Monat. Bei famefact erhalten Sie maßgeschneiderte Pakete, die exakt auf Ihre Anforderungen und Ihr Budget zugeschnitten sind – inklusive transparentem Reporting und messbaren KPIs. In einem kostenlosen Erstgespräch analysieren wir Ihre Ausgangssituation und erstellen ein individuelles Angebot.'
    },
    {
        q: 'Was macht eine Social Media Agentur?',
        a: 'Eine Social Media Agentur wie famefact übernimmt die professionelle Betreuung und Optimierung Ihrer Social-Media-Präsenzen. Dazu gehören: Entwicklung einer maßgeschneiderten Social Media Strategie, Content Creation (Fotos, Videos, Texte), Community Management, Social Advertising (Meta, TikTok, LinkedIn), Influencer Marketing, Employer Branding, Performance Monitoring und regelmäßiges Reporting – alles aus einer Hand und datengetrieben optimiert.'
    },
    {
        q: 'Warum sollte ich eine Social Media Agentur beauftragen?',
        a: 'Professionelles Social Media Marketing erfordert spezialisiertes Know-how, kontinuierliche Betreuung und den Einsatz moderner Tools. Eine Agentur wie famefact bietet Zugang zu zertifizierter Expertise als Meta Business Partner, KI-gestützte Performance-Optimierung, professionelle Content-Produktion im eigenen Studio und proaktives Community Management. 80% der Nutzer folgen mindestens einer Marke auf Social Media – ohne professionelle Betreuung verpassen Unternehmen enormes Potenzial.'
    },
    {
        q: 'Wie finde ich die richtige Social Media Agentur?',
        a: 'Achten Sie bei der Auswahl einer Social Media Agentur auf: nachweisbare Referenzen und Case Studies, Branchenerfahrung, Zertifizierungen (z.B. Meta Business Partner), transparente Reportings, einen klaren Strategieprozess und Plattform-Kompetenz. famefact erfüllt all diese Kriterien und bietet zusätzlich über 15 Jahre Erfahrung seit 2009, ein eigenes Content-Studio in Berlin und KI-zertifizierte Strategien.'
    },
    {
        q: 'Welche Social Media Plattformen betreut famefact?',
        a: 'famefact betreut alle relevanten Social Media Plattformen: Facebook, Instagram, TikTok, YouTube, LinkedIn, Pinterest und Reddit. Als Meta Business Partner haben wir exklusive Insights für Meta-Plattformen. Für jede Plattform entwickeln wir individuelle Strategien, die Ihre Zielgruppe dort erreichen, wo sie am aktivsten ist – von B2C (Instagram, TikTok) bis B2B (LinkedIn).'
    },
    {
        q: 'Was gehört in eine Social Media Strategie?',
        a: 'Eine professionelle Social Media Strategie umfasst: Zieldefinition und KPI-Festlegung, Zielgruppenanalyse, Plattformauswahl, Content-Strategie mit Redaktionsplan, Advertising-Konzept mit Budget-Planung, Community Management Guidelines, Krisenkommunikationsplan sowie Monitoring und Reporting. famefact erarbeitet all dies in enger Abstimmung mit Ihnen und passt die Strategie kontinuierlich anhand datengetriebener Analysen an.'
    },
    {
        q: 'Wie lange dauert es, bis Social Media Marketing Ergebnisse zeigt?',
        a: 'Erste sichtbare Ergebnisse im Social Media Marketing sind in der Regel nach 4–8 Wochen zu sehen. Für den nachhaltigen Aufbau einer engagierten Community und messbare ROI-Steigerungen empfehlen wir eine Zusammenarbeit von mindestens 6 Monaten. Social Advertising Kampagnen können bereits innerhalb der ersten Woche messbare Leads und Conversions generieren.'
    },
    {
        q: 'Was ist Community Management und warum ist es wichtig?',
        a: 'Community Management ist die professionelle Betreuung und Moderation Ihrer Social-Media-Communities. Bei famefact gehen wir über das bloße Beantworten von Kommentaren hinaus: Wir interagieren proaktiv mit Ihrer Zielgruppe, liken relevante Beiträge, reagieren auf Trends und bauen eine lebendige, loyale Community auf. 71% der Verbraucher sagen, dass Social-Media-Empfehlungen ihre Kaufentscheidung beeinflussen – ein starkes Community Management macht den entscheidenden Unterschied.'
    },
    {
        q: 'Nutzt famefact Künstliche Intelligenz im Social Media Marketing?',
        a: 'Ja, famefact ist im Bereich KI von Google zertifiziert und hat für ein laufendes KI-Projekt ein BSFZ-Siegel erhalten. Wir setzen KI-gestützte Tools für Datenanalyse, Performance-Optimierung, Trendidentifikation und Content-Optimierung ein – immer in Kombination mit menschlicher Kreativität und Expertise. So erzielen wir bessere Ergebnisse bei gleichzeitiger Bewahrung der Authentizität Ihrer Marke.'
    },
    {
        q: 'Kann famefact auch Employer Branding über Social Media unterstützen?',
        a: 'Ja, Employer Branding ist einer unserer Schwerpunkte. Wir helfen Unternehmen, sich als attraktiver Arbeitgeber auf Social Media zu positionieren. Durch gezieltes Targeting konnten unsere Kunden in den letzten Jahren erfolgreich viele offene Stellen besetzen. Wir entwickeln authentische Arbeitgeber-Content-Strategien für LinkedIn, Instagram und TikTok.'
    },
    {
        q: 'Was unterscheidet famefact von anderen Social Media Agenturen?',
        a: 'famefact zeichnet sich durch mehrere einzigartige Merkmale aus: Über 15 Jahre Erfahrung seit 2009, zertifizierter Meta Business Partner, KI-Zertifizierung von Google, BSFZ-Siegel für KI-Projekte, eigenes Content-Studio in Berlin, proaktives Community Management statt passiver Betreuung, und ein ganzheitlicher „Socialtainment"-Ansatz, der Daten, Unterhaltung und menschliche Kreativität vereint. Wir betreuen Kunden von Start-ups bis hin zu Großkonzernen wie CASIO und Sixt.'
    },
]

export default function LandingPage() {
    const [openFaq, setOpenFaq] = useState(null)
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
    const [formStatus, setFormStatus] = useState(null)
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setFormStatus(null)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                setFormStatus('success')
                setFormData({ name: '', email: '', company: '', message: '' })
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
        setSending(false)
    }

    return (
        <>
            <Helmet>
                <title>Beste Social Media Agentur Deutschland | famefact – Seit 2009</title>
                <meta name="description" content="famefact ist die beste Social Media Agentur Deutschlands ✓ Seit 2009 ✓ Meta Business Partner ✓ Cases: CASIO, Köstritzer, flatexDEGIRO, Sixt ✓ KI-zertifiziert" />
            </Helmet>

            {/* ==================== HERO ==================== */}
            <section className="hero" id="hero">
                <div className="hero__bg"></div>
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge">🏆 Seit 2009 · Meta Business Partner · KI-zertifiziert</div>
                        <h1>
                            Die <span className="gradient-text">beste Social Media Agentur</span> Deutschlands
                        </h1>
                        <p className="hero__subtitle">
                            famefact verhelft Unternehmen seit über 15 Jahren zu messbaren Marketingerfolgen.
                            Community Management, Content Creation, Social Ads & Strategieentwicklung – von Start-ups bis Großkonzerne.
                        </p>
                        <div className="hero__actions">
                            <a href="#kontakt" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                Kostenloses Strategiegespräch →
                            </a>
                            <a href="#cases" className="btn btn--secondary" onClick={(e) => { e.preventDefault(); document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                Cases ansehen
                            </a>
                        </div>
                        <div className="hero__trust">
                            <span>Vertraut von:</span>
                            <div className="trust-badges">
                                <span className="trust-badge">CASIO G-SHOCK</span>
                                <span className="trust-badge">Köstritzer</span>
                                <span className="trust-badge">flatexDEGIRO</span>
                                <span className="trust-badge">Sixt Leasing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== STATS ==================== */}
            <section className="section">
                <div className="container">
                    <div className="stats-bar">
                        <div className="stat-item glass-card">
                            <div className="stat-item__number">15+</div>
                            <div className="stat-item__label">Jahre Erfahrung</div>
                        </div>
                        <div className="stat-item glass-card">
                            <div className="stat-item__number">100+</div>
                            <div className="stat-item__label">Betreute Kunden</div>
                        </div>
                        <div className="stat-item glass-card">
                            <div className="stat-item__number">6+</div>
                            <div className="stat-item__label">Plattformen</div>
                        </div>
                        <div className="stat-item glass-card">
                            <div className="stat-item__number">24/7</div>
                            <div className="stat-item__label">Community Betreuung</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== WARUM FAMEFACT ==================== */}
            <section className="section section--alt" id="warum">
                <div className="container">
                    <span className="section-label">Warum famefact</span>
                    <h2 className="headline-lg">Warum famefact die beste Social Media Agentur Deutschlands ist</h2>

                    <div className="why__grid">
                        <div className="why__content">
                            <p>
                                Seit 2009 verhelfen wir Unternehmen aller Größenordnungen – von Start-ups über KMUs bis hin zu Großkonzernen –
                                zu messbaren Erfolgen im Social Media Marketing. Unser Team kombiniert langjährige Erfahrung mit innovativen
                                KI-gestützten Strategien und kreativer Exzellenz.
                            </p>
                            <p>
                                Als zertifizierter Meta Business Partner haben wir exklusiven Zugang zu Ressourcen und Insights, die wir für
                                die optimale Kampagnenleistung unserer Kunden einsetzen. Unser BSFZ-Siegel für KI-Projekte unterstreicht unsere
                                Innovationskraft im Bereich der datengetriebenen Performance-Optimierung.
                            </p>

                            <div className="usp-list">
                                <div className="usp-item">
                                    <div className="usp-item__icon">🏅</div>
                                    <div className="usp-item__content">
                                        <h4>Zertifizierter Meta Business Partner</h4>
                                        <p>Exklusiver Zugang zu Meta-Ressourcen, Beta-Features und priorisiertem Support für optimale Kampagnen-Performance.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">🤖</div>
                                    <div className="usp-item__content">
                                        <h4>KI-zertifiziert von Google</h4>
                                        <p>Innovativer Einsatz von Künstlicher Intelligenz für Datenanalyse und Performance-Optimierung mit BSFZ-Siegel.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">🎬</div>
                                    <div className="usp-item__content">
                                        <h4>Eigenes Content-Studio in Berlin</h4>
                                        <p>Professionelle Foto- und Videoproduktion – Hochkant-Videos, Reels, Stories und TikToks – alles in-house.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">💬</div>
                                    <div className="usp-item__content">
                                        <h4>Proaktives Community Management</h4>
                                        <p>Wir bauen nicht nur Communities auf – wir pflegen den aktiven Dialog und steigern das Engagement nachhaltig.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="why__stats-side">
                            <div className="stats-bar" style={{ gridTemplateColumns: '1fr 1fr' }}>
                                <div className="stat-item glass-card">
                                    <div className="stat-item__number">80%</div>
                                    <div className="stat-item__label">der Nutzer folgen Marken</div>
                                </div>
                                <div className="stat-item glass-card">
                                    <div className="stat-item__number">71%</div>
                                    <div className="stat-item__label">Kaufentscheidung durch Social</div>
                                </div>
                                <div className="stat-item glass-card">
                                    <div className="stat-item__number">2:24h</div>
                                    <div className="stat-item__label">täglich in Social Media</div>
                                </div>
                                <div className="stat-item glass-card">
                                    <div className="stat-item__number">D-A-CH</div>
                                    <div className="stat-item__label">Marktabdeckung</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== LEISTUNGEN ==================== */}
            <section className="section" id="leistungen">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Leistungen</span>
                        <h2 className="headline-lg">Unsere Social Media Marketing Agentur Leistungen</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Als Full-Service Social Media Agentur bieten wir alles, was deine Marke in den sozialen Medien braucht –
                            individuell, datengetrieben und kreativ.
                        </p>
                    </div>

                    <div className="services__grid">
                        <div className="glass-card service-card">
                            <span className="service-card__number">01</span>
                            <div className="service-card__icon">💬</div>
                            <h3>Community Management</h3>
                            <p>
                                Wir betreuen deine Social-Media-Communities professionell und proaktiv. Unser Team steigt direkt
                                in die Kommunikation ein, interagiert mit deiner Zielgruppe und baut eine starke Bindung auf.
                                Kommentare, Nachrichten und User-Interaktionen – wir sorgen dafür, dass deine Marke lebendig
                                und authentisch wirkt.
                            </p>
                        </div>

                        <div className="glass-card service-card">
                            <span className="service-card__number">02</span>
                            <div className="service-card__icon">🎨</div>
                            <h3>Content Creation</h3>
                            <p>
                                Ob Designs, Fotos oder Bewegtbild: Wir kreieren Inhalte in unserem Berliner Studio und vor Ort,
                                die nicht nur geteilt, sondern gefeiert werden. Hochkant-Videos, Reels, Stories, Carousels
                                und Feed-Posts – Content, der das Herz deiner Zielgruppe trifft und für echte Interaktion sorgt.
                            </p>
                        </div>

                        <div className="glass-card service-card">
                            <span className="service-card__number">03</span>
                            <div className="service-card__icon">📈</div>
                            <h3>Social Ads & Performance Marketing</h3>
                            <p>
                                In einem Meer von Inhalten ist Sichtbarkeit alles. Wir gestalten beeindruckende Social Ads,
                                die nicht nur auffallen, sondern auch konvertieren. Zielgruppenspezifisches Targeting,
                                A/B-Testing und kontinuierliche Optimierung sorgen für maximale Reichweite und ROI auf
                                Facebook, Instagram, TikTok und LinkedIn.
                            </p>
                        </div>

                        <div className="glass-card service-card">
                            <span className="service-card__number">04</span>
                            <div className="service-card__icon">🔍</div>
                            <h3>Social Media Strategie & Beratung</h3>
                            <p>
                                Die digitale Welt ändert sich täglich – du brauchst den richtigen Navigator. Bei famefact
                                erhältst du präzises, ergebnisorientiertes Consulting. Wir analysieren Zielgruppen,
                                definieren Ziele, erstellen Redaktionspläne und entwickeln Strategien, die auf deiner
                                individuellen Ausgangslage aufbauen.
                            </p>
                        </div>

                        <div className="glass-card service-card">
                            <span className="service-card__number">05</span>
                            <div className="service-card__icon">🏢</div>
                            <h3>Employer Branding</h3>
                            <p>
                                Wir unterstützen dich beim Aufbau einer starken Arbeitgebermarke auf Social Media.
                                Durch gezieltes Targeting und authentische Content-Strategien auf LinkedIn, Instagram
                                und TikTok helfen wir dir, qualifizierte Fachkräfte zu erreichen und offene Stellen
                                erfolgreich zu besetzen.
                            </p>
                        </div>

                        <div className="glass-card service-card">
                            <span className="service-card__number">06</span>
                            <div className="service-card__icon">📊</div>
                            <h3>Social Media Analysen & Reporting</h3>
                            <p>
                                Es geht nicht nur darum, dabei zu sein, sondern zu wissen, wo und wie man wirkt.
                                Unsere tiefgehenden Analysen entlarven Potenziale und zeigen, wie du in sozialen
                                Medien wirklich performst. Regelmäßige Performance-Reports mit klaren KPIs und
                                datenbasierten Handlungsempfehlungen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== CASES ==================== */}
            <section className="section section--alt" id="cases">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Cases & Referenzen</span>
                        <h2 className="headline-lg">Social Media Marketing Cases – Unsere Erfolge</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Von Start-ups über KMUs bis hin zu internationalen Konzernen – famefact liefert messbare Ergebnisse
                            in den verschiedensten Branchen.
                        </p>
                    </div>

                    <div className="cases__grid">
                        <a href="https://famefact.com/portfolio/social-media-marketing-fuer-armbanduhren/" target="_blank" rel="noopener noreferrer" className="glass-card case-card" style={{ textDecoration: 'none' }}>
                            <img
                                src="https://famefact.com/wp-content/uploads/2023/06/casio-instagram-armbanduhren-400x400.webp"
                                alt="Social Media Marketing für CASIO G-SHOCK"
                                className="case-card__image"
                                loading="lazy"
                            />
                            <div className="case-card__overlay">
                                <span className="case-card__category">Instagram & Content</span>
                                <h3 className="case-card__title">CASIO G-SHOCK</h3>
                                <p className="case-card__desc">
                                    Social Media Marketing für die ikonische Uhrenmarke – Content Creation, Community Engagement und
                                    zielgruppengerechte Kampagnen für die Gen Z und Millennials.
                                </p>
                            </div>
                        </a>

                        <a href="https://famefact.com/portfolio/social-media-marketing-fuer-biermarke/" target="_blank" rel="noopener noreferrer" className="glass-card case-card" style={{ textDecoration: 'none' }}>
                            <img
                                src="https://famefact.com/wp-content/uploads/2023/06/social-media-marketing-fuer-biermarken-koestritzer-400x400.webp"
                                alt="Social Media Marketing für Köstritzer"
                                className="case-card__image"
                                loading="lazy"
                            />
                            <div className="case-card__overlay">
                                <span className="case-card__category">Content & Community</span>
                                <h3 className="case-card__title">Köstritzer</h3>
                                <p className="case-card__desc">
                                    Aufbau einer lebendigen Social-Media-Präsenz für die traditionsreiche Biermarke mit
                                    kreativem Storytelling und aktiver Community-Pflege.
                                </p>
                            </div>
                        </a>

                        <a href="https://famefact.com/portfolio/marketing-fuer-online-broker/" target="_blank" rel="noopener noreferrer" className="glass-card case-card" style={{ textDecoration: 'none' }}>
                            <img
                                src="https://famefact.com/wp-content/uploads/2023/06/marketing-fuer-online-broker-flatex-degiro-ag-400x400.webp"
                                alt="Social Media Marketing für flatexDEGIRO AG"
                                className="case-card__image"
                                loading="lazy"
                            />
                            <div className="case-card__overlay">
                                <span className="case-card__category">B2B & Fintech</span>
                                <h3 className="case-card__title">flatexDEGIRO AG</h3>
                                <p className="case-card__desc">
                                    Social Media Marketing für den führenden Online-Broker Europas – Performance Marketing,
                                    LinkedIn-Strategien und zielgerichtete Kampagnen für den Finanzsektor.
                                </p>
                            </div>
                        </a>

                        <a href="https://famefact.com/portfolio/linkedin-marketing-fuer-autovermieter/" target="_blank" rel="noopener noreferrer" className="glass-card case-card" style={{ textDecoration: 'none' }}>
                            <img
                                src="https://famefact.com/wp-content/uploads/2023/06/linkedin-marketing-autovermietungen-400x400.webp"
                                alt="LinkedIn Marketing für Sixt Leasing"
                                className="case-card__image"
                                loading="lazy"
                            />
                            <div className="case-card__overlay">
                                <span className="case-card__category">LinkedIn & B2B</span>
                                <h3 className="case-card__title">Sixt Leasing</h3>
                                <p className="case-card__desc">
                                    LinkedIn Marketing für den Autovermieter – professionelles B2B-Content-Marketing,
                                    Employer Branding und Lead-Generierung über LinkedIn.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="text-center" style={{ marginTop: 'var(--space-lg)' }}>
                        <a href="https://famefact.com" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                            Alle Cases auf famefact.com →
                        </a>
                    </div>
                </div>
            </section>

            {/* ==================== TESTIMONIALS ==================== */}
            <section className="section" id="testimonials">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Kundenstimmen</span>
                        <h2 className="headline-lg">Was unsere Kunden über famefact sagen</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Zufriedene Kunden durch partnerschaftliche Zusammenarbeit – hier sind echte Stimmen
                            von Unternehmen, die mit famefact zusammenarbeiten.
                        </p>
                    </div>

                    <div className="testimonials__grid">
                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „Mit famefact haben wir täglich eine wertvolle Unterstützung und können so unsere
                                Social Media Kanäle kontinuierlich ausbauen."
                            </p>
                            <span className="testimonial-card__author">— Zufriedener Kunde</span>
                        </div>

                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „Die Zusammenarbeit mit famefact war super angenehm, total schnell in der Reaktion
                                und immer auf Zack. Wir haben uns kommunikativ echt gut aufgehoben gefühlt. Trotz
                                herausfordernder Zielgruppe kamen viele Interessenten über die Kampagne."
                            </p>
                            <span className="testimonial-card__author">— Marketingleiter, mittelständisches Unternehmen</span>
                        </div>

                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „famefact gelingt es, uns mit tollen Ideen und sehr schönen Designs im Bereich
                                Social Media Kommunikation und Advertising zu unterstützen. Man merkt, dass die
                                Agentur weiß, wovon sie spricht und die Zielgruppen kennt."
                            </p>
                            <span className="testimonial-card__author">— Social Media Verantwortliche, Großkonzern</span>
                        </div>

                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „Das famefact Team ist mein Sparringpartner im Social-Media Dschungel. Ich bin froh
                                über den konstruktiven Austausch mit anderen Experten, um gemeinsam unsere
                                Social-Media-Kanäle auf das nächste Level zu bringen."
                            </p>
                            <span className="testimonial-card__author">— Head of Marketing</span>
                        </div>

                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „Durch das passende Targeting konnten wir in den letzten Jahren viele offene Stellen
                                besetzen. famefact versteht Employer Branding auf Social Media wie keine andere Agentur."
                            </p>
                            <span className="testimonial-card__author">— HR-Managerin, Bildungseinrichtung</span>
                        </div>

                        <div className="glass-card testimonial-card">
                            <p className="testimonial-card__quote">
                                „Die Kombination aus GEO-Optimierung und unserer Reddit-Strategie hat uns gezeigt,
                                wie wertvoll authentischer UGC als Treibstoff für KI-Sichtbarkeit ist. Wir nutzen
                                die echten Community-Insights nun gezielt."
                            </p>
                            <span className="testimonial-card__author">— Marketingleitung, D2C Brand</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== PROCESS ==================== */}
            <section className="section section--alt" id="prozess">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Unser Prozess</span>
                        <h2 className="headline-lg">So arbeiten wir – von der Beratung bis zur Umsetzung</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Unser bewährter 4-Schritte-Prozess sorgt dafür, dass jede Social-Media-Kampagne
                            strategisch fundiert, kreativ umgesetzt und datengetrieben optimiert wird.
                        </p>
                    </div>

                    <div className="process__steps">
                        <div className="step-card">
                            <div className="step-card__number">01</div>
                            <h3>Analyse & Strategie</h3>
                            <p>Wir analysieren deine Ist-Situation, Zielgruppe und Wettbewerb und entwickeln eine maßgeschneiderte Social Media Strategie.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">02</div>
                            <h3>Content Creation</h3>
                            <p>Unser kreatives Team produziert hochwertigen Content – von Hochkant-Videos über Designs bis hin zu fesselnden Texten.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">03</div>
                            <h3>Umsetzung & Management</h3>
                            <p>Wir managen deine Kanäle, betreuen deine Community proaktiv und setzen gezielte Werbekampagnen um.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">04</div>
                            <h3>Optimierung & Reporting</h3>
                            <p>Kontinuierliche Analyse, KI-gestützte Optimierung und transparente Performance-Reports mit klaren KPIs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== SOCIALTAINMENT ==================== */}
            <section className="section" id="socialtainment">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Socialtainment</span>
                        <h2 className="headline-lg">Unser Socialtainment-Ansatz</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Der perfekte Mix aus Fakten, Entertainment und menschlicher Kreativität –
                            seit 2009 erfolgreich für unsere Kunden. famefact – First in Socialtainment.
                        </p>
                    </div>

                    <div className="socialtainment__grid">
                        <div className="glass-card socialtainment-card">
                            <div className="socialtainment-card__icon">📊</div>
                            <h3>Datenbasiert</h3>
                            <p>Fundierte, analytische Grundlage für alle Entscheidungen und Strategien. KI-gestützte Echtzeitanalysen identifizieren Trends und maximieren deinen ROI.</p>
                        </div>
                        <div className="glass-card socialtainment-card">
                            <div className="socialtainment-card__icon">🎯</div>
                            <h3>Zielgruppenorientiert</h3>
                            <p>Tiefes Verständnis der Zielgruppe für maximale Relevanz und Impact. Wir sprechen genau definierte Zielgruppen auf den wichtigsten sozialen Netzwerken an.</p>
                        </div>
                        <div className="glass-card socialtainment-card">
                            <div className="socialtainment-card__icon">🎪</div>
                            <h3>Unterhaltend</h3>
                            <p>Kreative, fesselnde Inhalte, die gleichzeitig informieren und begeistern. UGC, Influencer-Koops und authentisches Storytelling für echte Interaktion.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== PLATTFORMEN ==================== */}
            <section className="section section--alt" id="plattformen">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Plattform-Expertise</span>
                        <h2 className="headline-lg">Alle Social Media Plattformen – eine Agentur</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            famefact betreut alle relevanten sozialen Netzwerke und entwickelt für jede Plattform
                            individuelle Strategien, die deine Zielgruppe dort erreichen, wo sie am aktivsten ist.
                        </p>
                    </div>

                    <div className="platforms__grid">
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">📘</div>
                            <div className="platform-card__name">Facebook</div>
                            <div className="platform-card__desc">Community & Ads</div>
                        </div>
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">📸</div>
                            <div className="platform-card__name">Instagram</div>
                            <div className="platform-card__desc">Reels, Stories & Feed</div>
                        </div>
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">🎵</div>
                            <div className="platform-card__name">TikTok</div>
                            <div className="platform-card__desc">Short-Form Video</div>
                        </div>
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">💼</div>
                            <div className="platform-card__name">LinkedIn</div>
                            <div className="platform-card__desc">B2B & Employer Branding</div>
                        </div>
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">▶️</div>
                            <div className="platform-card__name">YouTube</div>
                            <div className="platform-card__desc">Video Marketing</div>
                        </div>
                        <div className="glass-card platform-card">
                            <div className="platform-card__icon">📌</div>
                            <div className="platform-card__name">Pinterest</div>
                            <div className="platform-card__desc">Visual Discovery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== FAQ ==================== */}
            <section className="section" id="faq">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">FAQ</span>
                        <h2 className="headline-lg">Häufig gestellte Fragen zur besten Social Media Agentur</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Alles, was du über Social Media Marketing, Agenturleistungen und die Zusammenarbeit
                            mit famefact wissen musst – kurz und verständlich erklärt.
                        </p>
                    </div>

                    <div className="faq__list">
                        {FAQ_DATA.map((item, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                                <button
                                    className="faq-item__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    <span>{item.q}</span>
                                    <span className="faq-item__icon">+</span>
                                </button>
                                <div className="faq-item__answer">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== KONTAKT ==================== */}
            <section className="section section--alt" id="kontakt">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Kontakt</span>
                        <h2 className="headline-lg">Starte jetzt mit einem kostenlosen Strategiegespräch</h2>
                        <p className="body-lg" style={{ maxWidth: 700, margin: '0 auto' }}>
                            Du möchtest das volle Potenzial deiner Marke auf Social Media ausschöpfen?
                            Sende uns eine Nachricht und wir melden uns innerhalb von 24 Stunden bei dir.
                        </p>
                    </div>

                    <div className="contact__grid">
                        <div className="contact__info">
                            <h3>Warum mit famefact starten?</h3>
                            <p>
                                In einem unverbindlichen Erstgespräch analysieren wir deine aktuelle Social-Media-Präsenz,
                                identifizieren Potenziale und erstellen einen ersten Fahrplan für dein Social Media Marketing.
                            </p>
                            <div className="contact__info-item">
                                <span>✅</span>
                                <span>Kostenlose Erstberatung & Analyse</span>
                            </div>
                            <div className="contact__info-item">
                                <span>✅</span>
                                <span>Individuelles Angebot innerhalb 48h</span>
                            </div>
                            <div className="contact__info-item">
                                <span>✅</span>
                                <span>Keine Mindestvertragslaufzeit</span>
                            </div>
                            <div className="contact__info-item">
                                <span>✅</span>
                                <span>Transparentes monatliches Reporting</span>
                            </div>
                            <div className="contact__info-item" style={{ marginTop: 'var(--space-md)' }}>
                                <span>📧</span>
                                <span>info@famefact.com</span>
                            </div>
                            <div className="contact__info-item">
                                <span>📍</span>
                                <span>Schliemannstr. 23, 10437 Berlin</span>
                            </div>
                        </div>

                        <form className="glass-card contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Dein Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="deine@email.de"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Unternehmen</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    placeholder="Dein Unternehmen"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Nachricht *</label>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Erzähl uns von deinem Projekt..."
                                />
                            </div>
                            <button type="submit" className="btn btn--primary" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
                                {sending ? 'Wird gesendet...' : 'Nachricht senden →'}
                            </button>
                            {formStatus === 'success' && (
                                <div className="form-status form-status--success">
                                    ✅ Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei dir.
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div className="form-status form-status--error">
                                    ⚠️ Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe an info@famefact.com.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
