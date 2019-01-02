import React from 'react'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import InputAdornment from '@material-ui/core/InputAdornment'

const RenderTextField = ({ input, label, type, meta: { touched, error }, icon, ...custom }) => {
	const labelText = touched && error ? error : label
	const isErr = touched && error ? true : false
	return (
		<CustomInput
			labelText={labelText}
			error={isErr}
			inputProps={{
				...input,
				type: type,
				endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
			}}
			formControlProps={{
				fullWidth: true,
			}}
			{...custom}
		/>
	)
}
export default RenderTextField
