const cohortName = '2301-FTB-ET-WEB-AM'
const baseUrl = 'https://strangers-things.herokuapp.com/api/${cohortName}'

export const getPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/posts`);
		const result = await response.json();
		return result.data.posts;
	} catch (error) {
		console.error("ERROR");
	}
};
// export const fetchSinglePost = async (id) => {
// 	try {
// 		const response = await fetch(`${baseUrl}/posts/${id}`);
// 		const result = await response.json();
// 		console.log("result", result);
// 		return result.data.post;
// 	} catch (error) {
// 		console.error("Oops, I couldn't fetch that post!");
// 	}
// }; There is no single post return statement in the API.. 