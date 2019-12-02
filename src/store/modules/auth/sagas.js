import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

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
    toast.error('Falha no login, verifique seus dados')

    yield put(signFailure())
    console.tron.log(error, 'Algo deu errado!')
  }
};
//Toda vez que ouvir essa auth sign vai chama a function signIN a cima 
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);