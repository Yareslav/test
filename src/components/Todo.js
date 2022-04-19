import { Flex, Box,List } from "../styledComponents";
import {update, remove, check } from "../reducers/mainReducer";
import { useSelector, useDispatch } from "react-redux";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
const Todo = ({ name, checked, ind }) => {
	const dispatch = useDispatch();
	const editHandler=()=>{
		const value=prompt("Change name",name);
		if (value) dispatch(update({
			name:value,
			index:ind
		}))
 	}
  return (
    <List>
      <Flex width="100%">
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => dispatch(check(ind))}
          />
          {name}
        </div>
        <Flex width="120px">
          <Box background="red" onClick={()=>dispatch(remove(ind))}>
						<img src={Delete} className="todo__image"/>
					</Box>
          <Box background="green" onClick={editHandler}>
						<img src={Edit} className="todo__image"/>
					</Box>
        </Flex>
      </Flex>
    </List>
  );
};
export default Todo;
