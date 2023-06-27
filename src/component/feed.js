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
  const [offset, setOffSet] = useState([0, 5]);
  const [target, setTarget] = useState(() =>
    document.querySelector(".feed-card.last-card")
  );

  const option = {
    root: null,
    threshold: 1,
    margin: 0,
  };

  const loadNext = () => {
    setOffSet((prev) => [prev[0] + 6, prev[1]]);
  };
  function createIntersectionObserver() {
    setTarget(document.querySelector(".feed-card.last-card"));
    if (target) {
      const observer = new IntersectionObserver(loadNext, option);
      observer.observe(target);
    } else {
      setTimeout(createIntersectionObserver, 100);
    }
  }
  useEffect(() => {
    createIntersectionObserver();
  }, [target]);

  useEffect(() => {
    const target = document.querySelector(".feed-card.last-card");
    if (target) {
      target.classList.remove("last-card");
      setTarget(null);
    }
    const fetchPosts = async () => {
      let response = await fetch(
        `https://project-data-8421.onrender.com/tale_posts?offset=${offset[0]}&limit=${offset[1]}`
      );
      let responseBody = await response.json();
      setPosts((prev) => [...prev, ...responseBody]);
      //.catch((error) => console.log);
    };
    fetchPosts();
  }, [offset]);
  return (
    <div className="feed">
      {posts.map((post, index) => {
        if (index === posts.length - 1)
          return (
            <div className="feed-card last-card">
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
          );
        else
          return (
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
          );
      })}
    </div>
  );
};

export default Feed;
