let posts = [
	{ id: 1, title: "NewPost" },
	{ id: 2, title: "Old Post" },
];

let comment = { postId: 1, content: "Great Post" };

function postForComment(comment) {
	return posts.find((post) => {
		return post.id === comment.postId;
	});
}

const post = postForComment(comment);
console.log(post);
