import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'

class StaffMember extends Component {
	render() {
		const {staff, onStaffOpen, deleteStaff} = this.props;
		return (
			<div>
				<Segment.Group>
					<Segment>
						<Item.Group>
							<Item>
								<Item.Content>
									<Item.Header as="a">{ staff.firstName } { staff.lastName }</Item.Header>
								</Item.Content>
							</Item>
						</Item.Group>
					</Segment>
					<Segment>
						<span>
							Holidays : { staff.holidays }
						</span>
					</Segment>
					<Segment clearing>
						<Button onClick={deleteStaff(staff.id)} as="a" color="red" floated="right" content="Delete" />
						<Button onClick={onStaffOpen(staff)} as="a" color="teal" floated="right" content="View" />
					</Segment>
				</Segment.Group>
			</div>
				
		)
	}
}

export default StaffMember;
