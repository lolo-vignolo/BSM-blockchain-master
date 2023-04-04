import { IProps, Iuser } from '../interfaces';

export const addUser = (props: IProps) => {
  const {
    newUserName,
    newUserAge,
    setUsers,
    setNewUserName,
    setNewUserAge,
    users,
  } = props;
  if (newUserName.trim() === '' || newUserAge.trim() === '') {
    alert('Por favor, rellene todos los campos.');
    return;
  }

  const age = parseInt(props.newUserAge);

  if (isNaN(age) || age < 0 || age > 100) {
    alert('Por favor, introduzca una edad válida (entre 0 y 100).');
    return;
  }

  const newUser: Iuser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name: newUserName,
    age: age,
    position: users.length + 1,
  };

  setUsers([...users, newUser]);

  setNewUserName('');
  setNewUserAge('');
};
