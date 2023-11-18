import axios from "axios"
import {Language, NobelPrizeEntry, SortOrder} from '../model/Types'

export function getNobelPrizes() : Promise<NobelPrizeEntry[]> {
    return new Promise((resolve,reject) => {
        axios.get("https://api.nobelprize.org/2.1/nobelPrizes").then((res) => {
            resolve(res.data.nobelPrizes)
        })
    })
}

export function getUniqueYears() : Promise<string[]> {
    return new Promise((resolve, reject) => {
        getNobelPrizes()
            .then(res => {
                let yearSet = new Set<string>();
                for (let el of res) { yearSet.add(el.awardYear) }
                resolve(Array.from(yearSet))
            })
            .catch(err => {
                console.error(err)
            })
    }) 
}
export function getPrizesByYear(year : string | undefined) : Promise<any> {
    return new Promise((resolve,reject) => {
        getNobelPrizes()
            .then(res => {
                resolve(res.filter((el : any) => {return el.awardYear === year}))
            })
            .catch(err => {
                console.error(err)
            })
    })
}

const getSortableDate = (date:string | undefined) => {
    if (date === undefined) return ""
    return date.split('/').reverse().join('');
}

export function sortPrizes(prizeData : NobelPrizeEntry[] ,sortSelected : SortOrder, selectedLanguage : Language ): NobelPrizeEntry[]{
    switch (sortSelected) {
        case "dateAscending":
            return prizeData.sort((p1, p2) => {
                let a = getSortableDate(p1.dateAwarded);
                let b = getSortableDate(p2.dateAwarded);
                return a > b ? 1 : a < b ? -1 : 0;
            })
        case "dateDescending":
            return prizeData.sort((p1, p2) => {
                let a = getSortableDate(p2.dateAwarded);
                let b = getSortableDate(p1.dateAwarded);
                return a > b ? 1 : a < b ? -1 : 0;
            })
        case "categoryDescending":
            return prizeData.sort((p1, p2) => {
                if ( p1.category[selectedLanguage] < p2.category[selectedLanguage] ) return -1;
                if ( p1.category[selectedLanguage] > p2.category[selectedLanguage]) return 1;
                return 0;
            })
        case "categoryAscending":
            return prizeData.sort((p1, p2) => {
                if ( p1.category[selectedLanguage] > p2.category[selectedLanguage] ) return -1;
                if ( p1.category[selectedLanguage] < p2.category[selectedLanguage]) return 1;
                return 0;
            })
        default:
            return prizeData;
            
    }
    
}
