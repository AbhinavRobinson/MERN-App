import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className="">Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
