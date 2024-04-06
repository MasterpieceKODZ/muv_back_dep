import { pbkdf2Sync } from "crypto";
export async function verifyPassword(password, salt, passwordHash) {
    const loginPasswordHash = pbkdf2Sync(password, salt, 10000, 1028, "sha512").toString("hex");
    if (loginPasswordHash === passwordHash)
        return true;
    else
        return false;
}
