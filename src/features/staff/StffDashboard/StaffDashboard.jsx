import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import StaffList from '../StaffList/StaffList'
import StaffForm from '../StaffForm/StaffForm'

const mapState = (state) => ({
	// axios.get('http://192.168.0.6:3000/staffs.json')
	// 	.then(response => response.json())
	// 	.then(response => {
	// 		this.setState({
	// 			staffs: response.data
	// 		})
	// 	})
	// .catch(function (error) {
	// 	console.log(error)
	// })
	staffs: state.staffs
})

class StaffDashboard extends Component {

	componentDidMount() {
		axios.get('http://192.168.0.6:3000/staffs.json')
			// .then(response => response.json())
			.then(response => {
				this.setState({
					staffs: response.data
				})
				console.log(response.data)
			})
		.catch(function (error) {
			console.log(error)
		})

	}

	state = {
		isOpen: false,
		selectedStaff: null
	}		

	handleFormOpen = () => {
		this.setState({
			selectedStaff: null,
			isOpen: true
		})
	}

	handleCancel= () => {
		this.setState({
			isOpen: false
		})
	}

	handleUpdateStaff = (updatedStaff) => {
		this.setState({
			staffs: this.state.staffs.map(staff => {
				if (staff.id === updatedStaff.id) {
					return Object.assign({}, updatedStaff);
				} else {
					return staff
				}
			}),
			isOpen: false,
			selectedStaff: null
		})
	}

	handleOpenStaff = (staffToOpen) => () => {
		this.setState({
			selectedStaff: staffToOpen,
			isOpen: true
		})
	}

	handleCreateStaff = (newStaff) => {
		newStaff.id = cuid();
		const updatedStaffs = [...this.state.staffs, newStaff];
		this.setState({
			staffs: updatedStaffs,
			isOpen: false
		})
	}
	
	handleDeleteStaff = (staffId) => () => {
		const updatedStaffs = this.state.staffs.filter(e => e.id !== staffId);
		this.setState({
			staffs: updatedStaffs
		})
	}

	render() {
		const {selectedStaff} = this.state;
		const {staffs} = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<StaffList deleteStaff={this.handleDeleteStaff} onStaffOpen={this.handleOpenStaff} staffs={staffs} />
				</Grid.Column>
				<Grid.Column width={6}>
					<Button onClick={this.handleFormOpen} positive content="Create Staff" />
					{this.state.isOpen && 
						<StaffForm updateStaff={this.handleUpdateStaff} selectedStaff={selectedStaff} createStaff={this.handleCreateStaff} handleCancel={this.handleCancel} />}
						 
				</Grid.Column>
		 	</Grid>
		)
	}
}

export default connect(mapState)(StaffDashboard);
