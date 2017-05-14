/**
 * 
 * Action creator untuk menngambil data services dari api, yang mereturn sebuah
 * promise dengan bantuan 'redux-promise-middleware' dan 'redux-thunk'
 * 
 */

import axios from "axios"
import querystring from "querystring"
import { FETCH_SERVICES, FETCH_SERVICE } from "./actionTypes"
import { ORCINUS_API_HOST, ORCINUS_API_PORT } from "../config/environtment"

// fetch list of services
export function fetchServices() {
	return {
		type: FETCH_SERVICES,
    payload: axios.get(`http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service`)
	}
}

// fetch single service
export function fetchService(id) {
	return {
		type: FETCH_SERVICE,
		payload: axios({
			method: 'post',
			url: `http://${ORCINUS_API_HOST}:${ORCINUS_API_PORT}/apis/service/inspect`,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: querystring.stringify({ id: id })
		})
	}
}
