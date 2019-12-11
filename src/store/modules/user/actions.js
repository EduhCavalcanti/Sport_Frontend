//Update de atleta 
export function updateProfileRequest(data, id) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    id: id,
    payload: { data }
  };
};

export function updateProfileSuccess(data) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { data }
  };
};

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
};
