import { FILTER_ARTICLES_FROM_DATE, FILTER_ARTICLES_TO_DATE } from '../constants'

export function filterArticlesFrom(data) {
    return {
        type: FILTER_ARTICLES_FROM_DATE,
        payload: { from: data },
    }
}

export function filterArticlesTo(data) {
    return {
        type: FILTER_ARTICLES_TO_DATE,
        payload: { to: data },
    }
}