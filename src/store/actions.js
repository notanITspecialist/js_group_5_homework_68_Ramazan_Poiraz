import axios from "axios";

export const CONTENT_SUCCEESS = 'CONTENT_SUCCEESS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const DELETE_ELEM = 'DELETE_ELEM';

export const changeInput = text => {
  return {type: CHANGE_INPUT, text: text}
};

export const contentSuccsess = content => {
  return {type: CONTENT_SUCCEESS, content: content};
};

export const addElem = text => dispatch => {
  axios.post('https://lesson-68-3f357.firebaseio.com/content.json', {text: text}).then(dispatch(changeInput(''))).then(()=>dispatch(addContent()));
};

export const deleteElem = id => dispatch => {
  axios.delete('https://lesson-68-3f357.firebaseio.com/content/' + id + '.json').then(()=>dispatch(addContent()));
};

export const addContent = () => dispatch => {
  axios.get('https://lesson-68-3f357.firebaseio.com/content.json').then(response => {
      dispatch(contentSuccsess(response.data))
  })
};