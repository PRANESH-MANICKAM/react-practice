import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser, usersThunk } from "../../store/userSlice";

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading} = useSelector(state => state.users);
    useEffect(() => {
        dispatch(usersThunk());
    }, [])
    return (
        <>
            <h1>Users</h1>
            <p>{loading ? "loading": null}</p>
            {users.length ? users.map((item) => { return (<p key={item.id}>{item.name}</p>)}) : null}
            <button onClick={() => dispatch(updateUser())}>update</button>
            <button onClick={() => dispatch(deleteUser())}>delete</button>
        </>
    );
};

export default Users;