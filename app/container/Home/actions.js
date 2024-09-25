/**
 *
 *   Home actions
 *
 **/
import {EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_FAIL} from './constants';

export const exampleRequest = payload => ({
  type: EXAMPLE_REQUEST,
  payload,
});
export const exampleSuccess = payload => ({
  type: EXAMPLE_SUCCESS,
  payload,
});
export const exampleFail = error => ({
  type: EXAMPLE_FAIL,
  error,
});
