import { FILTER_ARTICLES_FROM_DATE, FILTER_ARTICLES_TO_DATE } from '../constants'

export default (filter = {from: null, to: null}, action ) => {
    const { type, payload } = action;

    switch (type) {
        case FILTER_ARTICLES_FROM_DATE:
            return { from: payload.from, to: filter.to };
        case FILTER_ARTICLES_TO_DATE:
            return { from: filter.from, to: payload.to };
    }

    return filter;
}
