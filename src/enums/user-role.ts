export enum UserRole {
  Admin = 'Admin',
  Broker = 'Broker',
  // NB: carrier users are not supported in the frontend yet.
  // Carrier = 'Carrier',
  Machine = 'Machine',
}

export const ALL_USER_ROLES: UserRole[] = Object.keys(UserRole).map((key) => UserRole[key as keyof typeof UserRole]);
