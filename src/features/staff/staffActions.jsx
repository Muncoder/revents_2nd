import { CREATE_STAFF, UPDATE_STAFF, DELETE_STAFF } from './staffConstants'

export const createStaff = (staff) => {
	return {
		type: CREATE_STAFF,
		payload: {
			staff
		}
	}
}

export const updateStaff = (staff) => {
	return {
		type: UPDATE_STAFF,
		payload: {
			staff
		}
	}
}

export const deleteStaff = (staffId) => {
	return {
		type: DELETE_STAFF,
		payload: {
			staffId
		}
	}
}
