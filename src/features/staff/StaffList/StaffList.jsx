import React, { Component } from 'react'
import StaffMember from './StaffMember'

class StaffList extends Component {
	render() {
		const {staffs, onStaffOpen, deleteStaff} = this.props;
		return (
			<div>
				<h1>Staff List</h1>
				{staffs.map((staff) => (
					<StaffMember key={staff.id} staff={staff} onStaffOpen={onStaffOpen} deleteStaff={deleteStaff} />
				))}
			</div>
				
		)
	}
}

export default StaffList;
