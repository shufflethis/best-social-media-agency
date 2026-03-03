import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__inner">
                <Link to="/" className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    famefact<span className="dot">.</span>
                    <span className="sub">Best Agency</span>
                </Link>

                <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    <a href="#leistungen" onClick={(e) => { e.preventDefault(); scrollTo('leistungen') }}>Leistungen</a>
                    <a href="#cases" onClick={(e) => { e.preventDefault(); scrollTo('cases') }}>Cases</a>
                    <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq') }}>FAQ</a>
                    <a href="#kontakt" onClick={(e) => { e.preventDefault(); scrollTo('kontakt') }} className="btn btn--primary header__cta">Kontakt</a>
                </nav>
            </div>
        </header>
    )
}
