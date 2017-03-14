const initialState = {
	imageList: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_IMAGES_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_IMAGES_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				imageList: action.payload.data,
			}
		}

		case "FETCH_IMAGES_REJECTED": {
			return { 
				...state, 
				fetched: false, 
				fetching: false, 
				error: action.payload 
			}
		}
	}

	return state;
}