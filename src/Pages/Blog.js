import React, { Fragment, useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Fragment>
      <section className="py-16">
        <h1 className="text-center text-primary text-4xl font-bold">
         Six Question and Answer
        </h1>
        <div className="grid gap-8 pt-8 mx-16 grid-cols-1 lg:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog._id} className="card shadow-lg bg-base-100">
              <div className="card-body">
                <h1 className="font-semibold text-xl" >{blog.question}</h1>
                <p><small>{blog.answer}</small></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
