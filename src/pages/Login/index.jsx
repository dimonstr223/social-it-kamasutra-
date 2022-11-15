import React from 'react'
import { useForm } from 'react-hook-form'

import style from '../../scss/pages/LoginForm.module.scss'

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = data => {
		console.log(data)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			<label>
				Login
				<input
					{...register('login', { required: true })}
					className={style.input}
				/>
				<div className={style.errors}>
					{errors?.login && <div>Required field</div>}
				</div>
			</label>

			<label>
				Password
				<input
					{...register('password', { required: true })}
					className={style.input}
				/>
				<div className={style.errors}>
					{errors?.password && <div>Required field</div>}
				</div>
			</label>

			<label className={style.checkbox}>
				<input type='checkbox' {...register('remember')} />
				Remember me
			</label>

			<input className={style.button} disabled={!isValid} type='submit' />
		</form>
	)
}

const Login = () => {
	return (
		<div className={style.formWrapper}>
			<h1>Login</h1>
			<LoginForm />
		</div>
	)
}

export default Login
