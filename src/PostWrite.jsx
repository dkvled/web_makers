import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function PostWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(value) {
    setContent(value);
  }

  function handleSubmit() {
    console.log("1111");
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const allowedExtensions = /(\.png|\.jpg)$/i; // 허용되는 확장자 목록

    if (allowedExtensions.exec(file.name)) {
      setSelectedFile(file);
    } else {
      // 허용되지 않는 파일 형식일 경우 처리할 로직
      console.log('허용되지 않는 파일 형식입니다.');
    }
  }
    return (
      <div className="page2">
        <form action="/add" method="POST" enctype="multipart/form-data">

        <div className="titleWrap2" style={{ marginTop: '20px' }}>
          게시글 작성
        </div>
            <input
                className="titleWrap3"
                type="text"
                placeholder="제목을 입력해 주세요"
                value={title}
                onChange={handleTitleChange}
                name="title"
              />

            <div className='dateWrap2'>
              <input
                className="dateWrap"
                type="date"
                name="day1"></input>~
                <input
                className="dateWrap"
                type="date"
                name="day2"></input>
            </div>
              
             <ReactQuill
              value={content}
              onChange={handleContentChange}
              className='reactQuill'
              name="data"/>
            <div className='asd'>
              <input
                className='imagefile'
                type="file"
                accept=".png, .jpg"
                onChange={handleFileChange}
                name="image"/>

              <button className="buttonPostWrite" onClick={handleSubmit} type="submit">
                제출하기
              </button>
            </div>
        </form>
    </div>
    
  );
}
