import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

import style from '../../scss/pages/LoginForm.module.scss'
import { login } from '../../redux/reducers/authReducer'
import { Navigate } from 'react-router-dom'

const LoginForm = ({ login }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = data => {
		const { email, password, rememberMe } = data
		login(email, password, rememberMe)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<label>
				Email
				<input
					{...register('email', { required: true })}
					className={style.input}
				/>
				<div className={style.errors}>
					{errors?.email && <div>Required field</div>}
				</div>
			</label>

			<label>
				Password
				<input
					{...register('password', { required: true })}
					className={style.input}
					type='password'
				/>
				<div className={style.errors}>
					{errors?.password && <div>Required field</div>}
				</div>
			</label>

			<label className={style.checkbox}>
				<input type='checkbox' {...register('rememberMe')} />
				Remember me
			</label>

			<input
				className={style.button}
				disabled={!isValid}
				type='submit'
				value='Login'
			/>
		</form>
	)
}

const Login = props => {
	if (props.isAuth) {
		return <Navigate to='/profile' />
	}

	return (
		<div className={style.formWrapper}>
			<h1>Login</h1>
			<LoginForm {...props} />
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
