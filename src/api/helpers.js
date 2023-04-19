const cohortName = '2301-FTB-ET-WEB-AM'
const baseUrl = 'https://strangers-things.herokuapp.com/api/${cohortName}'

export const getPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/posts`);
		const result = await response.json();
        console.log(result)
		return result.data.posts;
	} catch (error) {
		console.error("ERROR");
	}
};