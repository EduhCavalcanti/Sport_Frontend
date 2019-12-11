import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { updateProfileSuccess } from './actions';
import { toast } from 'react-toastify';


export function* updateProfile({ payload, id }) {

  try {

    const response = yield call(api.put, `/atletaup/${id}`, payload.data)

    toast.success("Atleta atualizado com sucesso!");

    console.tron.log(response.data);

    yield put(updateProfileSuccess(response.data));

  } catch (err) {
    toast.error('Algo deu errado com sua atualização de atleta')
  };

};


export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);