export type NobelPrizeEntry = {
    awardYear : string
    category : {[key in Language]: string}
    categoryFullName : {[key in Language]: string}
    dateAwarded : string
    prizeAmount : number
    prizeAmountAdjusted : number
}

export type Language = "en" | "se" | "no"

export type SortOrder = "dateAscending" | "dateDescending" | "categoryAscending" | "categoryDescending" | undefined