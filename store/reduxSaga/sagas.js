import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_USER_REQUEST, getUserSuccess, getUserFailure} from './actionSaga';
import axios from 'axios';

const API_URL = 'https://unikwork.com/instagram/api/get_data.php';

const fetchUser = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const fetchUserAxios = async () => {
  const apiData = await axios.get(API_URL);
  // console.log('qowiugjhfvdsja', apiData.data);
  return apiData.data;
};

function* getUser() {
  try {
    const user = yield call(fetchUserAxios);
    // console.log('user......', user);
    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserFailure(error.message));
  }
}

function* watchGetUser() {
  yield takeEvery(GET_USER_REQUEST, getUser);
}

export default watchGetUser;
