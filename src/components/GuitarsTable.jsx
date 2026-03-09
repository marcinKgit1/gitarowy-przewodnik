const tableData = [
    { type: 'Telecaster', artist: 'Jimmy Page', song: 'Stairway to Heaven' },
    { type: 'Stratocaster', artist: 'David Gilmour', song: 'Comfortably Numb' },
    { type: 'Les Paul', artist: 'Gary Moore', song: 'Still Got The Blues' },
]

export default function GuitarsTable() {
    return (
        <div className="table-wrapper">
            <table className="table">
                <caption className="table__caption">Legendarni wykonawcy i ich gitary</caption>
                <thead>
                    <tr>
                        <th className="table__cell table__cell--header" scope="col">Typ gitary</th>
                        <th className="table__cell table__cell--header" scope="col">Wykonawca</th>
                        <th className="table__cell table__cell--header" scope="col">Utwór</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.type} className="table__row">
                            <th className="table__cell table__cell--row-header" scope="row">{row.type}</th>
                            <td className="table__cell">{row.artist}</td>
                            <td className="table__cell">{row.song}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
