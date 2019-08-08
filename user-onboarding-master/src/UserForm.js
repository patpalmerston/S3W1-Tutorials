import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
	//Name Email Password Terms of Service (checkbox)
	// A submit button to send our form data to the server

	return (
		<div className='user-form'>
			<Form>
				<Field type='text' name='name' placeholder='Name' />

				<Field type='email' name='email' placeholder='Email' />

				<Field type='password' name='password' placeholder='Password' />

        <Field component="select" className="type-select" name="type">
          <option>Please Choose an Option</option>
          <option value='mage'>Mage</option>
          <option value='warrior'>Warrior</option>
          <option value='thief'>Thief</option>
        </Field>

				<label className='checkbox-container'>
					Terms and Conditions
					<Field type='checkbox' name='terms' checked={null} />
					<span className='checkmark' />
				</label>

				<button type="submit">Submit</button>
			</Form>
		</div>
	);
};

const FormikUserForm = withFormik({})(UserForm);

export default FormikUserForm;
