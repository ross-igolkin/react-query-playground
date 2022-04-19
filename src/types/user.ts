import { UserRole } from 'enums';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  role: UserRole;
  organizationId: string;
  organizationName: string;
}

export interface LoggedInUser extends User {
  boxAccessToken: {
    token?: string;
    expiresInMS?: number;
    expirationDate?: number;
  };
  organizationBoxFolderId?: string;
}
