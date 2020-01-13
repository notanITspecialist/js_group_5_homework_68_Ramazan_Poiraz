import {CHANGE_INPUT, CONTENT_SUCCEESS} from "./actions";

const initialState = {
    content: {},
    inpValue: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === CONTENT_SUCCEESS){
        if(action.content !== null){
            Object.keys(action.content).map(elem =>  action.content[elem].id = elem );
        }
        return {...state, content: action.content}
    }
    if(action.type === CHANGE_INPUT){
        return {...state, inpValue: action.text}
    }
    return state;
};

export default reducer;