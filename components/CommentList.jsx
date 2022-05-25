import { Comment, List } from 'antd'

export const CommentList = ({ newComments }) => {
  
  return (
  <List
    dataSource={newComments}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
  )
};
