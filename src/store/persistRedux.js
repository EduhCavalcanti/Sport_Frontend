import storage from 'redux-persist/lib/storage'; //Vai utilizar o local storage do navegador
import { persistReducer } from 'redux-persist';
//Usa essa lib para persistir no armazenamento dos dados quando der f5 ou sair do navegador 
export default reducers => {
  const pesistedReducer = persistReducer({
    key: 'Sport',
    storage,
    whitelist: ['auth'] //Armazena os reducers para persistir as informações 
  }, reducers);
  return pesistedReducer
};