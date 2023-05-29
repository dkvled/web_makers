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

    // 임시로 추가한 게시글 데이터
    const tempPosts = [
      {
        id: 1,
        title: '임시 게시글 1',
        activityPeriod: '2023-05-17 ~ 2023-05-20',
        content: '임시 게시글 내용 1',
      },
      {
        id: 2,
        title: '임시 게시글 2',
        activityPeriod: '2023-05-18 ~ 2023-05-22',
        content: '임시 게시글 내용 2',
      },
      {
        id: 3,
        title: '임시 게시글 3',
        activityPeriod: '2023-05-19 ~ 2023-05-25',
        content: '임시 게시글 내용 3',
      },
    ];

    const mergedPosts = [...tempPosts, ...posts];

  return (
    <div className='page3'>
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
        <div className='post-setting'>
          <li>
            <h3 style={{marginLeft:"30px"}}>제목</h3>
            <h3 style={{marginRight:"500px"}}>활동 기간</h3>
          </li>
        </div>

        {mergedPosts.map((post, index) => (
          <li key={post.id}>
            <div className="post-details">
              <Link to="/post" style={{marginLeft:"30px"}}>{post.title}</Link>
            </div>
            <p style={{marginRight:"400px"}}>{post.activityPeriod}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
);
};

export default PostFilter;