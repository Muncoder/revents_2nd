import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActions'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng  } from 'react-places-autocomplete'
import { Button } from 'semantic-ui-react'

const mapState = (state) => ({
	data: state.test.data
})

const actions = {
	incrementCounter,
	decrementCounter
}

class TestComponent extends Component {

	state = {
		address: '',
		scriptLoaded: false
	}

	handleScriptLoad = () => {
		this.setState({scriptLoaded: true})
	}

	handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

	onChange = (address) => this.setState({address})

	render() {
		const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

		const { incrementCounter, decrementCounter, data } = this.props 
		return (
			<div>
				<Script 
					url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDVaHTrjyEv46m7CTxkYigkpwlg9OfkHOs&libraries=places'
					onLoad={this.handleScriptLoad}
				/>
				<h1>Test Component</h1>
				<h3>The answer is : { this.props.data }</h3>
				<Button onClick={incrementCounter} color='green' content='Increment' /> 
				<Button onClick={decrementCounter} color='red' content='Decrement' /> 
				<br />
				<br />
				<form onSubmit={this.handleFormSubmit}>
					{ this.state.scriptLoaded && <PlacesAutocomplete inputProps={inputProps} />}
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default connect(mapState, actions)(TestComponent);

