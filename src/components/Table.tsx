import { FC } from 'react';
import { Itable, Iuser } from '../interfaces';

export const Table: FC<Itable> = ({
  filteredUsers,
  handleMoveUserUp,
  handleMoveUserDown,
  users,
}) => {
  return (
    <div style={{ backgroundColor: 'gray', color: 'white' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position in the table</th>
            <th>Up | DOWN</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user: any) => (
            <tr key={user.id} style={{ textAlign: 'center' }}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.position}</td>
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}
              >
                <button
                  disabled={user.position === 1}
                  onClick={() => handleMoveUserUp(user.id)}
                >
                  Up
                </button>
                <button
                  disabled={user.position === users.length}
                  onClick={() => handleMoveUserDown(user.id)}
                >
                  Down
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
