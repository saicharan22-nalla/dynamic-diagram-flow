import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd'; // Example using Ant Design for UI
import { v4 as uuidv4 } from 'uuid';
import { DiagramContext } from '../../contexts/DiagramContext'

const NodeEditor = ({ onCancel }) => {
  const { dispatch } = useContext(DiagramContext);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const newNode = {
      id: uuidv4(),
      type: 'default', // Or use a dropdown for node types
      data: { label: values.label },
      position: { x: 250, y: 250 },
    };
    dispatch({ type: 'addNode', payload: newNode });
    onCancel();
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item label="Label" name="label">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
};

export default NodeEditor;