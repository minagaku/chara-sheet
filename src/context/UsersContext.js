import React, { useContext, useState, useCallback } from "react"
const defaultState = {
  users: [],
  setUsers: () => { },
  loading: false,
  setLoading: () => { }
}

function tryGetUsers()
{
  const u = typeof window !== 'undefined' && window.localStorage.getItem("users");
  if(!u) return [];
  try
  {
    return JSON.parse(u)
  }catch{
    return [];
  }
}

const UsersContext = React.createContext(defaultState)
const UsersProvider = (props) => {
  const [users, setSUsers] = useState(tryGetUsers());
  const [loading, setLoading] = useState(false);
  const { children } = props
  const setUsers = (newUsers) => {
    console.log(newUsers)
    typeof window !== 'undefined' && window.localStorage.setItem("users", JSON.stringify(newUsers))
    setSUsers(newUsers);
  }
  const store = {
    users : [users,setSUsers],
    loading: [loading,setLoading]
  }
  return (
    <UsersContext.Provider value={{ users,loading,setUsers, setLoading }} >
      {children}
    </UsersContext.Provider>
  )
}
export default UsersContext
export { UsersProvider }
