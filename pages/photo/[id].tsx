import Router from 'next/router'
import {LeftOutlined} from '@ant-design/icons'
import { MainLayout } from '../../components/MainLayout'
import 'antd/dist/antd.css';
import { Comment, List } from 'antd'
import { NextPageContext } from '../../node_modules/next/dist/shared/lib/utils'
import { MyPhoto } from '../../interfaces/photo'
import { MyComments } from '../../interfaces/comment'
import { useState } from 'react'
import { Editor } from '../../components/Editor'
import { CommentList } from '../../components/CommentList'

interface PhotoPageProps {
  photo: MyPhoto,
  comments: MyComments[]
}

export default function Photo({photo, comments}: PhotoPageProps) {

  const [writeComment, setWriteComment] = useState({status: false, i: null})
  const [newComments, setNewComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  
  const linkClickHandler = () => {
    Router.push('/')
  }

  const sendMessageHandler = (i) => {
    setWriteComment({status: !writeComment.status, i})
  }

  const handleSubmit = (id) => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setNewComments([
        ...newComments,
        {
          content: <p>{value}</p>,
          id
        },
      ]);
    }, 1000);
    setWriteComment({status: false, i: null})
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <MainLayout>
    <div className='mainContainer'>
      <div className='header'>
        <div onClick={linkClickHandler}>
          <LeftOutlined style={{fontSize: '20px'}} />
        </div>
        <h3>{photo.title}</h3>
      </div>
      <div className='imgContainer'>
        <img src={photo.url} alt={photo.title} />
      </div>

      <List
      className="comment-list"
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(comment, i) => (
      <li>
        <Comment
          actions={[<span key="comment-list-reply-to-0" onClick={() => sendMessageHandler(i)}>Ответить</span>]}
          author={comment.name}
          content={comment.body}
        />
        {newComments.length > 0 && <CommentList newComments={newComments.filter(el => el.id === comment.id)} />}
        {writeComment.status && writeComment.i === i
        ? <Comment
          content={
          <Editor
            onChange={handleChange}
            onSubmit={() => handleSubmit(comment.id)}
            submitting={submitting}
            value={value}
          />
          }
          />
        : null }
        
      </li>
    )}
  />

    </div>

    <style jsx>{`
      .mainContainer{
        max-width: 465px;
        margin: 0 10px;
      }
      .header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }
      .imgContainer {
        margin-bottom: 1rem;
      }
      .header h3 {
        width: 90%;
        text-align: center;
        font-size: calc(1em + 1vw);
        margin: 0 5px;
      }
      .header div {
        margin: 0 5px;
      }
      img {
        width: 100%;
      }
    `}</style>
  </MainLayout>
  );
}

interface NextNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

export async function getServerSideProps({query}: NextNextPageContext) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${query.id}`)
  const resComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const photo = await res.json()
  const comments = await resComments.json()
  return {
      props: {photo, comments},
  }
}
