const SET_IS_PERFECT_VALUE = 'scratch-paint/isPerfectValue/SET_IS_PERFECT_VALUE';

const initialState = false;

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case SET_IS_PERFECT_VALUE:
            return action.isPerfectValue;
        default:
            return state;
    }
};

const setIsPerfectValue = function (isPerfectValue) {
    return {
        type: SET_IS_PERFECT_VALUE,
        isPerfectValue
    };
};

export {
    reducer as default,
    setIsPerfectValue,
    SET_IS_PERFECT_VALUE
};