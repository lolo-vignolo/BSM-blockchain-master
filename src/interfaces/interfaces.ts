export interface Iuser {
  id: number;
  name: string;
  age: number;
  position: number;
}

export interface IProps {
  newUserName: string;
  newUserAge: string;
  setUsers: (users: Iuser[]) => void;
  setNewUserName: (name: string) => void;
  setNewUserAge: (age: string) => void;
  users: Iuser[];
}

export interface Imove {
  id: number;
  direction: 'up' | 'down';
  users: Iuser[];
  setUsers: React.Dispatch<React.SetStateAction<Iuser[]>>;
}

export interface InewUser {
  setNewUserName: (name: string) => void;
  setNewUserAge: (age: string) => void;
  newUserName: string;
  newUserAge: string;
}

export interface Ifilter {
  filterText: string;
  setFilterText: (age: string) => void;
}

export interface Itable {
  filteredUsers: Iuser[];
  handleMoveUserUp: any;
  handleMoveUserDown: any;
  users: Iuser[];
}

export interface IProps {
  setUsers: (users: Iuser[]) => void;
}
