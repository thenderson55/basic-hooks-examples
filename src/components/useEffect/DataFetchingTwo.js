import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: ""
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/3`)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return <div>{state.loading ? "Loading..." : <p>{state.post.body}</p>}</div>;
}

export default DataFetchingTwo;
