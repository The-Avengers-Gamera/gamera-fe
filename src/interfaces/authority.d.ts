export interface IAuthority {
  id: number;
  name: string;
}

export interface IAuthoritySlim extends Omit<IAuthority, 'id'> {}
