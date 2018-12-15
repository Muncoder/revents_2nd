import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyStaff = {
	firstName: '',
	lastName: '',
	holidays: '',
}

class StaffForm extends Component {
	state = {
		staff: emptyStaff
	}

	componentDidMount() {
		if (this.props.selectedStaff !== null) {
			this.setState({
				staff: this.props.selectedStaff
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedStaff !== this.props.selectedStaff) {
			this.setState({
				staff: nextProps.selectedStaff || emptyStaff
			})
		}
	}

	onFormSubmit = (evt) => {
		evt.prstaffDefault();
		if (this.state.staff.id) {
			this.props.updateStaff(this.state.staff)
		} else {
			this.props.createStaff(this.state.staff)
		}
	}	
	
	onInputChange = (evt) => {
		const newStaff = this.state.staff;
		newStaff[evt.target.name] = evt.target.value
		this.setState({
			staff: newStaff
		})
	}

	render() {
		const {handleCancel} = this.props;
		const {staff} = this.state;
		return (
			<Segment>
				<Form onSubmit={this.onFormSubmit}>
					<Form.Field>
						<label>First Name</label>
						<input name='firstName' onChange={this.onInputChange} value={staff.firstName} placeholder="First Name" />
					</Form.Field>
					<Form.Field>
						<label>Last Name</label>
						<input name='lastName' onChange={this.onInputChange} value={staff.lastName} placeholder="Last Name" />
					</Form.Field>
					<Form.Field>
						<label>Holidays</label>
						<input name='holidays' onChange={this.onInputChange} value={staff.holidays} placeholder="Holidays" />
					</Form.Field>
					<Button positive type="submit">
						Submit
					</Button>
					<Button onClick={handleCancel} type="button">Cancel</Button>
				</Form>
			</Segment>
		)
	}
}

export default StaffForm;
