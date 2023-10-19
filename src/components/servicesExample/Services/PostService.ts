import { ref, Ref } from "vue";
import IPost from "@/components/servicesExample/intefaces/Post";

class PostService {
	private posts: Ref<Array<IPost>>;
	private post: Ref<IPost>;

	private url = "https://jsonplaceholder.typicode.com/posts";
	constructor() {
		this.posts = ref<Array<IPost>>([]);
		this.post = ref<IPost>({});
	}

	getPosts(): Ref<Array<IPost>> {
		return this.posts;
	}

	getPost(): Ref<IPost> {
		return this.post;
	}

	async fetchAll(): Promise<void> {
		try {
			const res = await fetch(this.url);
			const data = await res.json();
			this.posts.value = await data;
		} catch (error) {
			console.log(error);
		}
	}

	async fetchOne(id: string): Promise<void> {
		try {
			const res = await fetch(`${this.url}/${id}`);
			const data = await res.json();
			this.post.value = await data;
		} catch (error) {
			console.log(error);
		}
	}
}

export default PostService;
