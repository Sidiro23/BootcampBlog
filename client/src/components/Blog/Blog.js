import React from "react";
import {resolvers} from "../../../.././server/schemas/resolvers";
import {ADD_BLOG} from '../../utils/mutations'



function Blog(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <textarea className="form-control-lg" placeholder="What's on your mind?"/>
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={resolvers}>Button</button>
                </div> 
            </form>
        </div>
    )
};

export default Blog;


