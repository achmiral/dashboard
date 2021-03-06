import axios from 'axios'

import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

/**
 * Signup User
 */
export function signUpUser(values) {
	const request = axios({
		method: 'post',
		url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/auth/signup`,
		data: values,
		headers: {
			'Content-Type': 'application/json'
		}
	})

  return {
    type: 'SIGNUP_USER',
    payload: request
  };
}

export function signUpUserSuccess(user) {
	return {
		type: "SIGNUP_USER_SUCCESS",
		payload: user
	}
}

export function signUpUserFailure(error) {
	return {
		type: "SIGNUP_USER_FAILURE",
		payload: error
	}
}


/**
 * Signin User
 */
export function signInUser(values) {
  const request = axios({
  	method: 'post',
  	url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/auth/signin`,
		data: values,
		headers: {
			'Content-Type': 'application/json'
		}
  })

  return {
    type: "SIGNIN_USER",
    payload: request
  };
}

export function signInUserSuccess(user) {
	return {
		type: "SIGNIN_USER_SUCCESS",
		payload: user
	}
}

export function signInUserFailure(error) {
	return {
		type: "SIGNIN_USER_FAILURE",
		payload: error
	}
}