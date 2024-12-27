import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd'; 
import { DiagramContext } from '../../contexts/DiagramContext'
import NodeEditor from '../NodeEditor/NodeEditor';
import EdgeEditor from '../EdgeEditior/EdgeEditor';

const Sidebar = () => {
  const { dispatch } = useContext(DiagramContext);
  const [isNodeModalVisible, setIsNodeModalVisible] = useState(false);
  const [isEdgeModalVisible, setIsEdgeModalVisible] = useState(false);

  const handleAddNode = () => {
    setIsNodeModalVisible(true);
  };

  const handleAddEdge = () => {
    setIsEdgeModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={handleAddNode}>
        Add Node
      </Button>
      <Button type="primary" onClick={handleAddEdge}>
        Add Edge
      </Button>

      <Modal
        title="Add Node"
        open={isNodeModalVisible}
        onCancel={() => setIsNodeModalVisible(false)}
        footer={null}
      >
        <NodeEditor />
      </Modal>

      <Modal
        title="Add Edge"
        open={isEdgeModalVisible}
        onCancel={() => setIsEdgeModalVisible(false)}
        footer={null}
      >
        <EdgeEditor />
      </Modal>
    </div>
  );
};

export default Sidebar;