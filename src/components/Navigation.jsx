const navLinks = [
    { href: '#sekcja-historia', label: 'Historia' },
    { href: '#sekcja-tele', label: 'Telecaster' },
    { href: '#sekcja-strat', label: 'Stratocaster' },
    { href: '#sekcja-lp', label: 'Les Paul' },
]

export default function Navigation() {
    return (
        <nav className="nav" aria-label="Główna nawigacja">
            <ul className="nav__list">
                {navLinks.map(link => (
                    <li key={link.href} className="nav__item">
                        <a className="nav__link" href={link.href}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
