import React from 'react'

import style from '../../scss/components/Posts.module.scss'

import PostItem from './PostItem'

const Posts = ({ posts }) => {
	const postsElements = posts.map(post => (
		<PostItem key={post.id} message={post.message} />
	))

	return (
		<div className={style.post}>
			<div className={style.wrapper}>
				<h3>Posts</h3>
				<div className={style.addPost}>
					<textarea className={style.input} type='text' />
					<button className={style.btn}>Add post</button>
				</div>
			</div>
			<ul className={style.post__list}>{postsElements}</ul>
		</div>
	)
}

export default Posts
