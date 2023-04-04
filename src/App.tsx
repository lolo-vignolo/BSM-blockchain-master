import { useState } from 'react';
import { Iuser } from './interfaces';
import { addUser, deleteAll, moveUser } from './helper';
import { Filter, NewUser, Table } from './components';
import './App.css';

const initialUsers: Iuser[] = [];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUserName, setNewUserName] = useState('');
  const [newUserAge, setNewUserAge] = useState('');
  const [filterText, setFilterText] = useState('');

  const handleAddUser = () => {
    addUser({
      newUserName,
      newUserAge,
      setUsers,
      setNewUserName,
      setNewUserAge,
      users,
    });
  };

  const handleMoveUserUp = (id: number) => {
    moveUser(id, 'up', users, setUsers);
  };
  const handleMoveUserDown = (id: number) => {
    moveUser(id, 'down', users, setUsers);
  };

  const handleDeleteAll = () => {
    deleteAll({ setUsers });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  ); // filtrar los usuarios por nombre

  return (
    <div className="appContainer">
      <h1>Usuarios</h1>
      <NewUser
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        newUserAge={newUserAge}
        setNewUserAge={setNewUserAge}
      />
      <button onClick={handleAddUser}>Add new user</button>
      <Filter filterText={filterText} setFilterText={setFilterText} />
      <Table
        filteredUsers={filteredUsers}
        handleMoveUserUp={handleMoveUserUp}
        handleMoveUserDown={handleMoveUserDown}
        users={users}
      />
      <button onClick={handleDeleteAll}>Delete all</button>
    </div>
  );
};

export default App;
