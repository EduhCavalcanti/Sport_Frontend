// Solicitação de login, vai receber os parâmetros.
export function signInRequest({ email, senha }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, senha },
  };
};
//Se tiver tudo certo com a solicitação com o saga vai retornar o token e os dados do user
export function signInSuccess(token, user) {
  return {
    type: '@auth/SING_IN_SUCCESS',
    payload: { token, user }
  };
};
// action de falha de login ou cadastro
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}; 
  export function singOut() {
    return {
      type: '@auth/SIGN_OUT'
    };
  };
