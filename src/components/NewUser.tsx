import { FC } from 'react';
import { InewUser } from '../interfaces';

export const NewUser: FC<InewUser> = ({
  newUserName,
  setNewUserName,
  newUserAge,
  setNewUserAge,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label htmlFor="new-user-name">Name:</label>
        <input
          type="text"
          id="new-user-name"
          value={newUserName}
          onChange={(event) => setNewUserName(event.target.value)}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <label htmlFor="new-user-age">Age:</label>
        <input
          type="text"
          id="new-user-age"
          value={newUserAge}
          onChange={(event) => setNewUserAge(event.target.value)}
        />
      </div>
    </div>
  );
};
