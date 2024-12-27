import React, { createContext, useState, useReducer } from 'react';

const DiagramContext = createContext();

const initialState = {
  nodes: [],
  edges: [],
};

const diagramReducer = (state, action) => {
  switch (action.type) {
    case 'addNode':
      return { ...state, nodes: [...state.nodes, action.payload] };
    case 'removeNode':
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== action.payload),
      };
    case 'addEdge':
      return { ...state, edges: [...state.edges, action.payload] };
    case 'removeEdge':
      return {
        ...state,
        edges: state.edges.filter((edge) => edge.id !== action.payload),
      };
    case 'updateNode':
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.payload.id ? action.payload : node
        ),
      };
    case 'updateEdge':
      return {
        ...state,
        edges: state.edges.map((edge) =>
          edge.id === action.payload.id ? action.payload : edge
        ),
      };
    default:
      return state;
  }
};

const DiagramProvider = ({ children }) => {
  const [state, dispatch] = useReducer(diagramReducer, initialState);

  return (
    <DiagramContext.Provider value={{ state, dispatch }}>
      {children}
    </DiagramContext.Provider>
  );
};

export { DiagramContext, DiagramProvider };
