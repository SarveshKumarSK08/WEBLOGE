"use client"
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../lib/page';
import Image from 'next/image';

const categories =[{name:'React', slug:'react'}, {name:'Web Development', slug: 'web-dev'}]
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full flex my-auto items-center justify-between border-blue-400 py-2">
        <div className="md:float-left block">
          <Link href="/">
            <Image src="/logo.png" alt={'SK Blog'} height="0" width="0" style={{ width : "20vw" , height:"auto", color: "white"}} 
            
            unoptimized
            />
          </Link>
        </div>
        <div>

        <div className="hidden md:float-left md:contents  ">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
            </div>
      </div>
    </div>
  );
};

export default Header;