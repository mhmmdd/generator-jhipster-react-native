import { call, put } from 'redux-saga/effects'
import RegisterActions from '../Redux/RegisterRedux'

// attempts to register
export function * register (api, { user }) {
  const response = yield call(api.register, user)
  // success?
  if (response.ok) {
    console.tron.log("Register - OK")
    yield put(RegisterActions.registerSuccess(response.data))
  } else {
    console.tron.log("Register - FAIL")
    yield put(RegisterActions.registerFailure(response.data))
  }

}
