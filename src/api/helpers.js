const cohortName = '2301-FTB-ET-WEB-AM'
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`

export const getPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/posts`);
		const result = await response.json();
		return result.data.posts;
	} catch (error) {
		console.error("ERROR");
	}
};

export const createPost = async (
	user,
	title,
	price,
	description,
	location,
	willDeliver,
	token,
	) => {
	try {
		const response = await fetch(`${baseUrl}/posts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				post: {
					user,
					title,
					price,
					description,
					location,
					willDeliver,
					token
				},
			}),
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (err) {
		console.error(err);
	}
};
export const deletePost = async (token, id) =>{
	try {
		const response = await fetch(`${baseUrl}/posts/${id}`,{
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		});
		const result = await response.json();
		console.log("Result from Delete", result)
		return result
	} catch (error){
		console.error(error)
	}
}
export const registerUser = async (username, password) => {
	try { 
		const response = await fetch (`${baseUrl}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user:{
					username,
					password,
				},
			}),
		});
		const result = await response.json()
		return result
	} catch (error){
		console.error(error)
	}
} 
export const loginUser = async (username, password) => {
	try {const response = await fetch (`${baseUrl}/users/login`,{
	method: "POST",
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		user: {
			username: username,
			password: password,
		}
	})
})
const result = await response.json()
console.log(result);
return result
} catch (error){
	console.error(error)
}
}
export const getToken = async (token) =>
{
	try {
		const response = await fetch(`${baseUrl}/users/me`,{
			headers:{
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
		})
		const result = await response.json();
		return result;
	} catch (error){
		console.error(error)
	}
}
export const fetchSinglePost = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/posts/${id}`);
		const result = await response.json();
		console.log("result", result);
		return result.data.post;
	} catch (error) {
		console.error("Oops, I couldn't fetch that post!");
	}
};
export const postMessage = async (token, id, content) => {
	try{
		const response = await fetch(`${baseUrl}/posts/${id}/messages`,{
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				message: {
					content: content,
				}
			})
		})
		const result = await response.json();
		console.log(result)
		return result
	} catch(error){
		console.error(error)
	}
}
export const editPost = async (token, id, title, description, price, location, willDeliver) => {
	try { const response = await fetch (`${baseUrl}/posts/${id}`,{
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			post:{
				title,
				description,
				price, 
				location,
				willDeliver,
				token,
				id,
			}
		})
	});
	const result = await response.json();
	console.log("edit from helpers", result)
	return result
} catch (error){
	console.error(error)
}
}