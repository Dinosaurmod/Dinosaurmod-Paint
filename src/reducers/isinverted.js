const SET_IS_INVERTED_VALUE = 'scratch-paint/isInvertedValue/SET_IS_INVERTED_VALUE';

const initialState = false;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case SET_IS_INVERTED_VALUE:
            return action.isInvertedValue;
        default:
            return state;
    }
};

const setIsInvertedValue = function (isInvertedValue) {
    return {
        type: SET_IS_INVERTED_VALUE,
        isInvertedValue
    };
};

export {
    reducer as default,
    setIsInvertedValue,
    SET_IS_INVERTED_VALUE
};