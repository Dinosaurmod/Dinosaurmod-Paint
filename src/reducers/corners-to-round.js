const SET_CORNERS_TO_ROUND = 'scratch-paint/rounded-rect-mode/CORNERS_TO_ROUND';
const initialState = {
    "topLeft": true,
    "topRight": true,
    "bottomLeft": true,
    "bottomRight": true
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case SET_CORNERS_TO_ROUND:
            return {
                ...state,
                ...action.cornersToRound
            };
        default:
            return state;
    }
};

const setCornersToRound = function (cornersToRound) {
    return {
        type: SET_CORNERS_TO_ROUND,
        cornersToRound
    };
};

export {
    reducer as default,
    setCornersToRound,
    SET_CORNERS_TO_ROUND
};
