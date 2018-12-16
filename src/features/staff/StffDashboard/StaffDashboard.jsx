import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import StaffList from '../StaffList/StaffList'
import StaffForm from '../StaffForm/StaffForm'
import { createStaff, updateStaff, deleteStaff } from '../staffActions'

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

const actions = {
	createStaff,
	updateStaff,
	deleteStaff
}

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
		this.props.updateStaff(updateStaff)
		this.setState({
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
		this.props.createStaff(newStaff)
		this.setState({
			isOpen: false
		})
	}
	
	handleDeleteStaff = (staffId) => () => {
		this.props.deleteStaff(staffId)
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

export default connect(mapState, actions)(StaffDashboard);
