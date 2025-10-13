import { DEMO_USER } from "./users";

export const DEMO_CREDENTIALS = {
  email: DEMO_USER.email,
  password: DEMO_USER.password,
  name: DEMO_USER.name,
  organization: DEMO_USER.organization,
  role: DEMO_USER.role,
} as const;
