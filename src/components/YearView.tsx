import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPrizesByYear, sortPrizes } from '../services/NobelPrizeService';
import { NobelPrizeEntry, Language, SortOrder } from '../model/Types'
import { Link } from 'react-router-dom';
const YearView = () => {
    const { yearSelected, languageSelected } = useParams<{yearSelected : string, languageSelected : Language}>();
    const [prizeData, setPrizeData] = useState<NobelPrizeEntry[]>([]);
    const [sortSelected, setSortSelected] = useState<SortOrder>("dateDescending");

    useEffect(() => {
        getPrizesByYear(yearSelected).then((res) => {
                    setPrizeData(res);
                }).catch((err) => {
                    console.error(err);
                })
    },[yearSelected])

   useEffect(() => {
        console.log(sortSelected);
        sortPrizes(prizeData, sortSelected, languageSelected || "en");
        console.log(prizeData);
   },[sortSelected, languageSelected, prizeData])

    return (
        <div>
            <Link to="/">↩️</Link>
            <h1>{yearSelected}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date Awarded
                            <button onClick={e => setSortSelected("dateAscending")}>^</button>
                            <button onClick={e => setSortSelected("dateDescending")}>V</button>
                        </th>
                        <th>Category
                            <button onClick={e => setSortSelected("categoryAscending")}>^</button>
                            <button onClick={e => setSortSelected("categoryDescending")}>V</button>
                        </th>
                        <th>Prize amount
                            
                        </th>
                        <th>Year Awarded
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                {prizeData.map((entry: NobelPrizeEntry, index) => {
                    return <tr key={index}>
                        <td>{entry.dateAwarded}</td>
                        <td>{entry.category[languageSelected || "en"]}</td>
                        <td>{entry.prizeAmount.toLocaleString()}</td>
                        <td></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default YearView;