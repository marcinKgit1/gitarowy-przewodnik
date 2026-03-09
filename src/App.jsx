import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import GuitarSection from './components/GuitarSection'
import GuitarsTable from './components/GuitarsTable'
import Footer from './components/Footer'
import './App.css'

const guitars = [
    {
        id: 'sekcja-tele',
        title: 'Telecaster',
        youtubeUrl: 'https://www.youtube.com/watch?v=UZO65MTuRws',
        imageSrc: '/images/tele.jpg',
        imageAlt: 'Zdjęcie gitary Telecaster',
        description: `Gitara elektryczna produkowana od 1951 przez firmę Fender. Jesienią 1950 przedstawiona jako model Broadcaster (później została przemianowana na Telecaster, bo nazwa Broadcaster była już zastrzeżona przez firmę Gretsch produkującą zestaw perkusyjny o tej nazwie). Jest rozwinięciem konstrukcji Fender Esquire. Wyposażona w dwa przetworniki single-coil, przykręcany gryf do korpusu czterema śrubami oraz stały mostek to obecnie klasyka rocka i country. Jest produkowana do dzisiaj i używa lub używało ją wielu znanych gitarzystów.`,
    },
    {
        id: 'sekcja-strat',
        title: 'Stratocaster',
        youtubeUrl: 'https://www.youtube.com/watch?v=8coGnmehnZs',
        imageSrc: '/images/stratocaster.jpg',
        imageAlt: 'Zdjęcie gitary Stratocaster',
        description: `Gitara elektryczna produkowana od 1954 przez firmę Fender, do dziś cenionego potentata w ich produkcji. Powstała z ewolucji poprzedniego modelu firmy Telecaster, pierwszej gitary pozbawionej pudła rezonansowego. Nazwa wywodzi się z lotnictwa od Boeinga B-52 Stratofortress. Opatentowanie projektu kosztowało Leo Fendera 249,50$, co jest równowartością ok. 1850 dzisiejszych dolarów. Pierwsze modele były produkowane tylko w kolorze sunburst (czyli przypalanym).`,
    },
    {
        id: 'sekcja-lp',
        title: 'Les Paul',
        youtubeUrl: 'https://www.youtube.com/watch?v=Ac3FeBlTv1Y',
        imageSrc: '/images/les paul.jpg',
        imageAlt: 'Zdjęcie gitary Les Paul',
        description: `Gitara elektryczna, jej projektantem jest Ted McCarty, a nazwę wzięła od gitarzysty jazzowego Lesa Paula. Sztandarowy model firmy Gibson, produkowany w latach 1952–1960 i 1968–obecnie. Pierwowzór wszystkich późniejszych gitar firmy Gibson. Razem z Fenderem Stratocasterem jest legendą rocka i bluesa. Charakterystyczne brzmienie zawdzięcza elektronice oraz drewnu użytemu do produkcji. Zazwyczaj korpus oraz gryf zbudowane są z mahoniu, top z klonu, a podstrunnica z palisandru. Cechą charakterystyczną jest wklejany gryf (set-in), skala 24¾", 22 progi.`,
    },
]

export default function App() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('dark', isDark)
    }, [isDark])

    return (
        <div className="app" id="top">
            <Header isDark={isDark} onToggle={() => setIsDark(d => !d)} />
            <Navigation />
            <main className="main">
                <section className="section history-section" id="sekcja-historia">
                    <h2 className="section__title">Trochę historii</h2>
                    <p className="section__text">
                        Historia gitary elektrycznej sięga roku 1931, w którym George Beauchamp stracił pracę u producenta gitar National. Pozostając w domu, eksperymentował całe tygodnie przy stole kuchennym, używając prostych narzędzi i materiałów znalezionych w domu: kawałków drutu, magnesów itp. Skonstruował pierwszy przetwornik gitarowy. Już wcześniej, w roku 1925, pragnąc wzmocnić dźwięk gitary, Beauchamp eksperymentował bezowocnie z igłą gramofonu. Wynaleziony przez niego i później opatentowany przetwornik został użyty w pierwszej gitarze elektrycznej — nazwanej „patelnią" (The Frying Pan). Wynalazcy udali się do Adolpha Rickenbackera i namówili go do współpracy. Firma produkuje do dziś bardzo cenione gitary basowe.
                    </p>
                    <p className="section__text">
                        Producent instrumentów muzycznych Gibson stworzył zespół pracujący nad konstrukcją przetwornika podobnego do tego Beauchampa. W wyniku prac w 1935 powstała słynna gitara elektryczna ES-150 (Electric Spanish Guitar). Była to gitara z pudłem rezonansowym, z charakterystycznymi dla instrumentów smyczkowych otworami po obu stronach nasady gryfu.
                    </p>
                </section>

                {guitars.map(guitar => (
                    <GuitarSection key={guitar.id} {...guitar} />
                ))}

                <section className="table-section">
                    <h2 className="section__title">W odpowiednich rękach</h2>
                    <GuitarsTable />
                </section>
            </main>
            <Footer />
            <a className="back-to-top" href="#top" aria-label="Wróć na górę">⬆</a>
        </div>
    )
}
