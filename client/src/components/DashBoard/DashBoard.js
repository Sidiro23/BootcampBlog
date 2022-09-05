import React, {useState} from 'react';
import {UPDATE_BLOG, DELETE_BLOG} from '../../utils/mutations';
import { QUERY_BLOGS, QUERY_SINGLE_BLOG } from '../../utils/queries';

export default function DashBoard() {
  const [formState, setFormSate]= useState({
    blogText: '',
  });
  const updateBlog = useMutation(UPDATE_BLOG);
  const deleteBlog = useMutation(DELETE_BLOG);
  const allBlogs = useMutation(QUERY_BLOGS);
  const findBlog = useMutation(QUERY_SINGLE_BLOG);
;
    return (
    <div>DashBoard
        
    <div class="wrap card">
        <div className='card-header'> Search for post</div>
    <div className="search card-body">
    <div class="input-group mb-3">
    <button class="btn btn-outline-secondary" type="button" onClick={findBlog(formState.blogText)}>Button</button>
    <input type="text" className="form-control" placeholder="Which post are you looking for?" value={formState.blogText}/>
    </div>
   </div>
   </div>


    <div className='wrap card'>
    <h3 className = 'card-header'>Show all post</h3>
    <button className='btn btn-primary' onClick={allBlogs}>Find All</button>
    </div>


</div>
  )};
