import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faImagePortrait,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch(
        "https://project-data-8421.onrender.com/tale_posts"
      );
      let responseBody = await response.json();
      setPosts(responseBody);
      //.catch((error) => console.log);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="feed-card">
          <div className="feed-card__header">
            <FontAwesomeIcon icon={faImagePortrait} />
            <span>Darius Tanz</span>
          </div>
          <div className="feed-post">{post.story}</div>
          <div className="feed-reaction">
            <span>
              <FontAwesomeIcon icon={faThumbsUp} />
              <div>Like</div>
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              <div>Comment</div>
            </span>
            <span>
              <FontAwesomeIcon icon={faShare} />
              <div>Share</div>
            </span>
          </div>
          <div className="feed-comment">
            <FontAwesomeIcon icon={faImagePortrait} />
            <input
              type="text"
              className="comment__input"
              placeholder="write your comment"
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
