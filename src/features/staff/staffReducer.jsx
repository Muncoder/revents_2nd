import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_STAFF, UPDATE_STAFF, DELETE_STAFF } from './staffConstants'

const initialState = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
		holidays: 26
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Williams',
		holidays: 22
  },
  {
    id: '3',
    firstName: 'Cris',
    lastName: 'Smith',
		holidays: 25
  }
]

export const createStaff = (state, payload) => {
	return [...state, Object.assign({}, payload.staff)]
}

export const updateStaff = (state, payload) => {
	return [ 
		...state.filter(staff => staff.id !== payload.staff.id),
		Object.assign({}, payload.staff)
	]
}

export const deleteStaff = (state, payload) => {
	return [...state.filter(staff => staff.id !== payload.staffId)]
}

export default createReducer(initialState, {
	[CREATE_STAFF]: createStaff,
	[UPDATE_STAFF]: updateStaff,
	[DELETE_STAFF]: deleteStaff
})
