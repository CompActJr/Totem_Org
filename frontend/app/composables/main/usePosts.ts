import { posts } from "~/data/posts.mock";


//FIX ME , trocar para uma requisição assíncrona depois
export function usePosts() {
  return {
    posts
  };
}