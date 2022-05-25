import { Button, Form, Input } from 'antd'
const { TextArea } = Input

export const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={2} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Оставить комментарий
      </Button>
    </Form.Item>
  </>
);
