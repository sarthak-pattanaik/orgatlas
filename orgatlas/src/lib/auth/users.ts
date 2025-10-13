import { scryptSync, timingSafeEqual } from "node:crypto";

const KEY_LENGTH = 32;

function deriveKey(password: string, salt: Buffer) {
  return scryptSync(password, salt, KEY_LENGTH);
}

function verifyHash(password: string, storedHash: string): boolean {
  const [algorithm, saltHex, hashHex] = storedHash.split("$");
  if (algorithm !== "scrypt" || !saltHex || !hashHex) {
    return false;
  }

  const salt = Buffer.from(saltHex, "hex");
  const expected = Buffer.from(hashHex, "hex");
  try {
    const derived = deriveKey(password, salt);
    return timingSafeEqual(expected, derived);
  } catch {
    return false;
  }
}

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: string;
  organization: string;
};

const demoUser: UserRecord = {
  id: "demo-user",
  name: "Alex Rivera",
  email: "demo@orgatlas.com",
  passwordHash: "scrypt$f5abe6232d8f85e2fce1881850e3988f$da8e870e2c9b7f30eef70c4004af0513a49340fa5eca7f0defd1770edad2d313",
  role: "Workspace Admin",
  organization: "OrgAtlas",
};

export const users: UserRecord[] = [demoUser];

export function getUserByEmail(email: string) {
  const lowered = email.toLowerCase();
  return users.find((user) => user.email.toLowerCase() === lowered) ?? null;
}

export function verifyUserCredentials(email: string, password: string) {
  const user = getUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = verifyHash(password, user.passwordHash);
  return isValid ? user : null;
}

export const DEMO_USER = {
  email: demoUser.email,
  password: "demo123",
  name: demoUser.name,
  organization: demoUser.organization,
  role: demoUser.role,
} as const;
