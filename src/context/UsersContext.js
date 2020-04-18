import React from "react"
const defaultState = {
    users: []
}
const UsersContext = React.createContext(defaultState)
class UsersProvider extends React.Component {
  state = {
      users: []
  }
  setUsers = (newUsers) => {
    this.setState({ users: newUsers })
  }
  render() {
    const { children } = this.props
    const { users } = this.state
    return (
      <UsersContext.Provider
        value={{
          users,
          setUsers: this.setUsers
        }}
      >
        {children}
      </UsersContext.Provider>
    )
  }
}
export default UsersContext
export { UsersProvider }
