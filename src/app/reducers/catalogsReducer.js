const initialState = {
	imageList: [],
	board: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_CATALOG_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_CATALOG_FULFILLED": {
			return { 
				...state, 
				fetching: false,
        fetched: true,
				imageList: action.payload.data,
			}
		}

		case "FETCH_CATALOG_REJECTED": {
			return { 
				...state, 
				fetched: false, 
				fetching: false, 
				error: action.payload 
			}
		}

		case "ADD_ITEM_TO_BOARD":
			return {
				...state
			}
		case "PUSH_ITEM_TO_BOARD":
    case "SET_ITEM_TO_BOARD":
      return {
        ...state,
        board: action.data
      }
		case "REMOVE_ITEM_FROM_BOARD":
			return {
				...state,
				board: state.board.filter((item, index) => index !== action.index)
			}

	}

	return state;
}