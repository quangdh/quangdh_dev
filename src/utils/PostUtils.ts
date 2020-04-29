import fs from "fs";

export function loadPosts() {
    return fs.readdirSync("./src/content/posts");
}

export async function getPostBySlug(slug: string) {
    return await import(`content/posts/${slug}.md`)
}