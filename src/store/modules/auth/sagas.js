import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, senha } = payload;

  try {
    const response = yield call(api.post, 'adminSession', {
      email,
      senha
    });
    const { token, user } = response.data;

    //Se der tudo certo vai passar o token para a função signInSuccess
    yield put(signInSuccess(token, user));
  } catch (error) {
    console.log(error)
  }
};
//Toda vez que ouvir essa auth sign vai chama a function signIN a cima 
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);