import React from 'react'
import { useForm } from 'react-hook-form'

import style from '../../scss/components/Posts.module.scss'

import PostItem from './PostItem'

const PostsForm = ({ addPost }) => {
	const { register, handleSubmit, reset } = useForm()

	const onSubmit = value => {
		value.message && addPost(value.message)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.communication}>
			<textarea
				autoFocus={true}
				className={style.input}
				{...register('message')}
			/>
			<input type='submit' className={style.btn} value={'add post'} />
		</form>
	)
}

const Posts = ({ profilePage, addPost }) => {
	const postsElements = profilePage.posts.map((post, i) => (
		<PostItem key={i} message={post.message} />
	))

	return (
		<div className={style.post}>
			<div className={style.wrapper}>
				<h3>Posts</h3>
				<PostsForm addPost={addPost} />
			</div>
			<ul className={style.post__list}>{postsElements}</ul>
		</div>
	)
}

export default Posts
