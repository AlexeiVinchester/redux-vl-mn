import { errorLoader } from "./actions";
import { CTREATE_POST } from "./types";

const fobiddenWords = ['php', 'python', 'C++'];

const fobiddenTitleMiddleware = (store) => (next) => (action) => {
    if (action.type === CTREATE_POST) {
        const filteredWords = fobiddenWords.filter(word => action.payload.title.includes(word));
        if (filteredWords.length) {
            return store.dispatch(errorLoader('Fobidden word in title!'));
        }
    }

    return next(action)
}

export { fobiddenTitleMiddleware };