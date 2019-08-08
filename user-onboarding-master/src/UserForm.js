import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
	//Name Email Password Terms of Service (checkbox)
	// A submit button to send our form data to the server
  const [users, setUser] = useState([])
  useEffect(() => {
    if(status) {
      setUser([...users, status])
    }
    // eslint-disable-next-line
  }, [status])

	return (
		<div className='user-form'>
			<Form>
				<Field type='text' name='name' placeholder='Name' />
          {touched.name && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
				<Field type='email' name='email' placeholder='Email' />
        {touched.email && errors.email && (
            <p className='error'>{errors.email}</p>
          )}
				<Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && (
            <p className='error'>{errors.password}</p>
          )}
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
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
		</div>
	);
};

// name email password type terms
const FormikUserForm = withFormik({
  mapPropsToStatus({name, email, password, type, terms}) {
    return {
      terms: terms || false,
      type: type || '',
      password: password || '',
      email: email || '',
      name: name || ''

    }
  },

  ValidationSchema: Yup.object().shape({
    name: Yup.string().required('add name'),
    email: Yup.string().required('add email'),
    password: Yup.string().required('password needed'),
    type: Yup.string(),
    terms: Yup.boolean()
  }),

  handleSubmit(values, {setStatus}){
    axios 
      .post(`https://reqres.in/api/users`, values)
      .then(res => {
        setStatus(res.data)
      })
      .catch(err => console.log(err.response))
  }
})(UserForm);

export default FormikUserForm;
