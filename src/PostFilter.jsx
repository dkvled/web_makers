import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostFilter = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <div className="post-filter">
          <button><Link to="/PostWrite">게시글 쓰기</Link></button>
          <select>
            <option>최신순</option>
            <option>조회순</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </div>

       <div className="post-list">
        <ul>
          <li>
            <h3>글 번호</h3>
            <h3>제목</h3>
            <h3>등록일</h3>
            <h3>조회수</h3>
          </li>
          {posts.map((post, index) => (
            <li key={post.id}>
              <h3>{index + 1}</h3>
              <h3>{post.title}</h3>
              <h3>{new Date(post.createdAt).toLocaleDateString()}</h3>
              <h3>{post.views}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
);
};

export default PostFilter;