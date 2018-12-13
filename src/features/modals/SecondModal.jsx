import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import { closeModal } from './modalActions'

const actions = {
	closeModal
}

const SecondModal = ({ closeModal }) => {
	return (
		<Modal closeIcon="close" open={true} onClose={closeModal}>
			<Modal.Header>Second Modal</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<p>Second Modal... nothing to see here</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}

export default connect(null, actions)(SecondModal)
