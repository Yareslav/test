import {create,update,remove,check} from "./reducers/mainReducer";
import {useSelector,useDispatch} from "react-redux";
import {useMemo} from "react";
const App=()=> {
  const todos=useSelector(state=>state.todos);
  const dispatch=useDispatch();
  return (
    <div className="App">

    </div>
  );
}
export default App;