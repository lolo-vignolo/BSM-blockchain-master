import { Iuser } from '../interfaces';

export const moveUser = (
  id: number,
  direction: 'up' | 'down',
  users: Iuser[],
  setUsers: any
) => {
  const index = users.findIndex((user: Iuser) => user.id === id);

  if (index === -1) {
    return;
  }

  let newPosition = users[index].position;

  if (direction === 'up' && newPosition > 1) {
    newPosition--;
    setUsers(id, newPosition);
  } else if (direction === 'down' && newPosition < users.length) {
    newPosition++;
    setUsers(id, newPosition);
  } else {
    return;
  }

  const updatedUsers = [...users];
  updatedUsers[index].position = newPosition;
  updatedUsers.sort((a, b) => a.position - b.position);
  setUsers(updatedUsers);
};
