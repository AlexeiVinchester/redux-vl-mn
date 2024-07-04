import { errorLoader } from "./actions";
import { CTREATE_POST } from "./types";

const fobiddenWords = ['php', 'python', 'C++'];

const fobiddenTitleMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type === CTREATE_POST) {
        const filteredWords = fobiddenWords.filter(word => action.payload.title.includes(word));
        if (filteredWords.length) {
            return dispatch(errorLoader('Fobidden word in title!'));
        }
    }

    return next(action)
}

export { fobiddenTitleMiddleware };