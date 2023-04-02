import { Role } from '@/constants/role';

export interface IAuthority {
  id: number;
  name: Role;
}

export interface IAuthoritySlim extends Omit<IAuthority, 'id'> {}
