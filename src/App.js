import { create, update, remove, check } from "./reducers/mainReducer";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useRef } from "react";
import {Flex,Header,Container,Input} from "./styledComponents"
import Todo from './components/Todo';
const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const input = useRef();
  const clickHandler = () => {
    const value = input.current.value;
    if (!value) return alert("input field is empty");
    dispatch(create(value));
    input.current.value = "";
    input.current.blur();
  };
  return (
    <div>
      <Header>
        <p>Todos ({todos.length})</p>
      </Header>
      <div>
      <Container>
        <Flex width="100%">
          <Input type="text" ref={input} placeholder="Enter todo here"/>
          <button onClick={clickHandler}>Submit</button>
        </Flex>
        {todos.map((elem,ind)=><Todo key={elem.name} ind={ind} {...elem}/>)}
      </Container>
      </div>
    </div>
  );
};
export default App;
