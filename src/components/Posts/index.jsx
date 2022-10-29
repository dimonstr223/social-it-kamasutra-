import React from 'react'

import style from '../../scss/components/Posts.module.scss'

import PostItem from './PostItem'

const postsData = [{ id: 1, message: 'Wussap baby. Want some chill? ^_^' }]

const postsElements = postsData.map(post => (
	<PostItem key={post.id} message={post.message} />
))

const Posts = () => {
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
