'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Post {
    node: {
        title: string;
        brief: string;
        url: string;
        publishedAt: string;
        coverImage: {
            url: string;
        };
    };
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const query = `query Publication {
        publication(host: "codingadda.hashnode.dev") {
            posts(first: 15) {
                edges {
                    node {
                        title
                        brief
                        url
                        publishedAt
                        coverImage {
                            url
                        }
                    }
                }
            }
        }
    }`;

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });
        const result = await response.json();
        setPosts(result.data.publication.posts.edges);
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    return (
        <div className="overflow-x-hidden  w-[50rem]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What I Write
            </h2>
            <main className="container mx-auto p-4 ">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="my-6 bg-white dark:bg-transparent dark:border shadow-lg border rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-4 gap-5 flex "
                    >
                        <div>
                            <Image
                                className="object-cover w-[60rem] aspect-video mt-9 rounded-lg"
                                src={post.node.coverImage.url}
                                alt={post.node.title}
                                width={200}
                                height={150}
                            />
                        </div>
                        <div className="mt-4 flex flex-col">
                            <h3 className="text-xl font-bold mb-2">
                                {post.node.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {post.node.brief}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Published on {formatDate(post.node.publishedAt)}
                            </p>
                            <a
                                href={post.node.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 transition-colors mt-4"
                            >
                                Read more
                            </a>
                        </div>

                    </div>
                ))}
            </main>

            <footer className="mt-12 py-4 text-center text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Coding Adda. All rights reserved.
            </footer>
        </div>
    );
};

export default Blog;