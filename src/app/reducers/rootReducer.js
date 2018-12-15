import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testReducer'
import eventReducer from '../../features/event/eventReducer'
import staffReducer from '../../features/staff/staffReducer'

const rootReducer = combineReducers({
	test: testReducer,
	events: eventReducer,
	staffs: staffReducer
})

export default rootReducer;
