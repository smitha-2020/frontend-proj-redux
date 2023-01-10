import { useState } from "react";

import { Product } from "../common/common";

//cardsPerPage,totalCards
export const usePagination = (cardsPerPage: number, cards: Product[]) => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const [currentPageIndex, setcurrentPageIndex] = useState(1);
    //function
    const gotoPage = (page: any) => {
        const pageNumber = Math.max(1, page)
        setcurrentPageIndex(Math.min(pageNumber, totalPages))
    }
    const currentPageData = (): Product[] => {
        const start = (currentPageIndex - 1) * cardsPerPage
        const end = start + cardsPerPage
        return cards.slice(start, end)
    }
    return { totalPages, currentPageIndex,currentPageData, gotoPage }

};