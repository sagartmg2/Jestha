import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { setUser } from '../reducer/auth';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {

   console.log("fetch user")

   try {
      const user = yield call(
         async () => {
            return await fetch('https://jsonplaceholder.typicode.com/todos/1')
               .then(response => response.json())
               .then(json => { return json })
         }
      );
      // console.log({ user })

      yield put(setUser(user));

      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});

      // yield put(setUser(user));
   } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authSaga() {
   yield takeEvery("auth/login", fetchUser);
}

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* authSaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default authSaga;