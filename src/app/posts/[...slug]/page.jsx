"use client"
import React, { useState, useEffect } from 'react';
import Author from '../../../../Components/Author';
import CommentsForm from '../../../../Components/CommentsForm';
import Comments from '../../../../Components/Comments';
import { Categories, Loader, PostDetail, PostWidget } from '../../../../Components/page';
import {  useParams } from 'next/navigation'
import { getPostDetails } from '../../../../lib/page';
import AdjacentPosts from '../../../../Sections/page';



const PostDetails = () => {
  const [post, setPost] = useState(null);
  const params = useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        // console.log('Fetching data...');
        const [slug] = params.slug;
        
        
        
        // Access the slug from router.query
        // console.log('Slug:', slug);

        
        const data = await getPostDetails(slug);
        // console.log('Fetched Data:', data);
        setPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 

  useEffect(() => {
    // console.log('Post state:', post);
  }, [post]);

  if (!post) {
    return <div><Loader/></div>;
  }

  // Destructure the authors and featuredImage from the post object
  const { authors, featuredImage } = post;

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.authors} />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
            
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
