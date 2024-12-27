import React, { useContext } from 'react';
import ReactFlow, { 
    addEdge, 
    useNodesState, 
    useEdgesState, 
    Handle, 
    Background 
} from 'react-flow-renderer';
import { DiagramContext } from '../../contexts/DiagramContext'; 

const FlowDiagram = () => {
  const { state } = useContext(DiagramContext); 

  const [nodes, setNodes] = useNodesState(state.nodes); 
  const [edges, setEdges] = useEdgesState(state.edges);

  const onConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <div style={{ height: '800px' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onConnect={onConnect}
      >
        <Background /> 
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
