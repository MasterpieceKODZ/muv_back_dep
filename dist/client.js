import { PrismaClient } from "../prisma/deps/.prisma/client/index.js";

const prismaClient = new PrismaClient();
try {
	await prismaClient.$connect();
} catch (error) {
	console.log("prisma connection error");
	console.log(error);
	process.exit(1);
}
//export { pool };
export default prismaClient;
