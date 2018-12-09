import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import cuid from 'cuid'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { createEvent, updateEvent } from '../eventActions'
import TextInput from '../../../app/common/form/TextInput'

const mapState = (state, ownProps) => {
	const eventId = ownProps.match.params.id;

	let event = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: ''
	}

	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0]
	}

	return {
		event
	}
}

const actions = {
	createEvent,
	updateEvent
}

class EventForm extends Component {

	onFormSubmit = (evt) => {
		evt.preventDefault();
		if (this.state.event.id) {
			this.props.updateEvent(this.state.event)
			this.props.history.goBack();
		} else {
			const newEvent = {
				...this.state.event,
				id: cuid(),
				hostPhotoURL: '/assets/user.png'
			}
			this.props.createEvent(newEvent)
			this.props.history.push('/events')
		}
	}	
	
	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color='teal' content='Event Details'/>
						<Form onSubmit={this.onFormSubmit}>
							<Field name='title' type='text' component={TextInput} placeholder='Give your events a name' />
							<Field name='category' type='text' component={TextInput} placeholder='What is your event about' />
							<Field name='description' type='text' component={TextInput} placeholder='Tell us your event about' />

							<Header sub color='teal' content='Event location details'/>
							<Field name='city' type='text' component={TextInput} placeholder='Event city' />
							<Field name='venue' type='text' component={TextInput} placeholder='Event venue' />
							<Field name='date' type='text' component={TextInput} placeholder='Event date' />

							<Button positive type="submit">
								Submit
							</Button>
							<Button onClick={this.props.history.goBack} type="button">Cancel</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		)
	}
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm'})(EventForm));
