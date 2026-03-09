export default function GuitarSection({ id, title, youtubeUrl, imageSrc, imageAlt, description }) {
    return (
        <section className="section guitar-section" id={id}>
            <div className="guitar-section__inner">
                <div className="guitar-section__content">
                    <h2 className="section__title">{title}</h2>
                    <a
                        className="listen-link"
                        href={youtubeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title={`Posłuchaj brzmienia gitary ${title}`}
                    >
                        <span className="listen-link__icon">▶</span>
                        Posłuchaj brzmienia
                    </a>
                    <p className="section__text">{description}</p>
                </div>
                <div className="guitar-section__image-wrap">
                    <img
                        className="guitar-section__image"
                        src={imageSrc}
                        alt={imageAlt}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}
