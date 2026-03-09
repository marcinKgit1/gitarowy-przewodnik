export default function Header({ isDark, onToggle }) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-header__title-group">
                    <span className="site-header__icon">🎸</span>
                    <h1 className="site-header__title">
                        Przewodnik po gitarach elektrycznych
                    </h1>
                </div>
                <button
                    className={`theme-toggle ${isDark ? 'theme-toggle--active' : ''}`}
                    onClick={onToggle}
                    aria-label={isDark ? 'Włącz jasny motyw' : 'Włącz ciemny motyw'}
                >
                    <span className="theme-toggle__icon">{isDark ? '☀️' : '🌙'}</span>
                    <span className="theme-toggle__text">
                        {isDark ? 'Jasny motyw' : 'Ciemny motyw'}
                    </span>
                </button>
            </div>
        </header>
    )
}
