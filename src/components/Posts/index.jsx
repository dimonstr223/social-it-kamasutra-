import React from 'react'

import style from '../../scss/components/Posts.module.scss'

import PostItem from './PostItem'

const Posts = ({ profilePage, updatePostText, addPost }) => {
	const postsElements = profilePage.posts.map((post, i) => (
		<PostItem key={i} message={post.message} />
	))

	const postRef = React.useRef(null)

	const onPostChange = () => {
		const postText = postRef.current.value
		updatePostText(postText)
	}

	const onAddPost = () => {
		// const postText = profilePage.newPostText
		addPost()
	}

	return (
		<div className={style.post}>
			<div className={style.wrapper}>
				<h3>Posts</h3>
				<div className={style.addPost}>
					<textarea
						onChange={onPostChange}
						ref={postRef}
						className={style.input}
						type='text'
					/>
					<button onClick={onAddPost} className={style.btn}>
						Add post
					</button>
				</div>
			</div>
			<ul className={style.post__list}>{postsElements}</ul>
		</div>
	)
}

export default Posts
