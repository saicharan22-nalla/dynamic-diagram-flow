import React, { useContext} from 'react';
import { Form, Select, Button } from 'antd'; // Example using Ant Design for UI
import { v4 as uuidv4 } from 'uuid';
import { DiagramContext } from '../../contexts/DiagramContext'

const EdgeEditor = ({ onCancel }) => {
  const { state, dispatch } = useContext(DiagramContext);
  const [form] = Form.useForm();

  const handleAddEdge = (values) => {
    const newEdge = {
      id: uuidv4(),
      source: values.source,
      target: values.target,
      type: 'smoothstep', // Or use a dropdown for edge types
    };
    dispatch({ type: 'addEdge', payload: newEdge });
    onCancel();
  };

  return (
    <Form form={form} onFinish={handleAddEdge}>
      <Form.Item label="Source" name="source">
        <Select>
          {state.nodes.map((node) => (
            <Select.Option key={node.id} value={node.id}>
              {node.data.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Target" name="target">
        <Select>
          {state.nodes.map((node) => (
            <Select.Option key={node.id} value={node.id}>
              {node.data.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
};

export default EdgeEditor;