import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
}

//As informações do token e de user estão no 'action'
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      //Toda vez que a action for diparada vai retornar o produce
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SING_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false
        break
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': {
        draft.token = null
        draft.signed = false
        break
      }
      default:
        return state;
    };
  });
};