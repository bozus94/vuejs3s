import { ref, Ref } from "vue";
import Ipost from "../intefaces/Post";

class PostService {
	private posts: Ref<Array<Ipost>>;

	constructor() {
		this.posts = ref<Array<Ipost>>([]);
	}

	getPosts(): Ref<Array<Ipost>> {
		return this.posts;
	}

	async fetchAll(): Promise<void> {
		try {
			const url = "https://jsonplaceholder.org/posts";

			const response = await fetch(url);
			const posts = await response.json();
			this.posts.value = await posts;
		} catch (error) {
			console.log(error);
		}
	}
}

export default PostService;
