"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getCategories, getCategoryPost } from "../../../../Service/page";
import { PostCard, Categories, Loader } from "../../../../Components/page";

const CategoryPost = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const params = useParams();
  const [slug] = params.slug;

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching data...");
        setLoading(true);

        console.log("Slug:", slug);

        const data = await getCategoryPost(slug);
        console.log("Post:", data);
        setLoading(false);
        setPost(data);
        // Update the component state with fetched data if needed
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    }

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (!post) {
    return <div><Loader/></div>;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostCard posts={post} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPost;
