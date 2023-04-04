import { IProps } from '../interfaces';

export const deleteAll = ({ setUsers }: IProps) => {
  if (window.confirm('¿Está seguro de que desea borrar todos los usuarios?')) {
    setUsers([]);
  }
};
