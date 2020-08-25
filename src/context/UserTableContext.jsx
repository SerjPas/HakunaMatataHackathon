import React from "react";

const UserTableContext = React.createContext({
    userTable: null,
    handleUserTable: () => {},
    handleDeleteUser: () => {},
})
export default UserTableContext