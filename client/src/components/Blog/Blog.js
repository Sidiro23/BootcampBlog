import React from "react";
// import { validateBlogPost} from "../utils/helpers";
// import {resolvers} from "../../../.././server/schemas/resolvers";

function Blog(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <textarea className="form-control-lg" placeholder="What's on your mind?"/>
                </div>
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Button</button>
                </div> 
            </form>
        </div>
    )
};

export default Blog;

// onClick={[validateBlogPost, resolvers]}
