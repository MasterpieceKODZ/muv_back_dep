Object.defineProperty(exports, "__esModule", { value: true });

const {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
	PrismaClientRustPanicError,
	PrismaClientInitializationError,
	PrismaClientValidationError,
	NotFoundError,
	getPrismaClient,
	sqltag,
	empty,
	join,
	raw,
	Decimal,
	Debug,
	objectEnumValues,
	makeStrictEnum,
	Extensions,
	warnOnce,
	defineDmmfProperty,
	Public,
	getRuntime,
} = require("../../@prisma/client/runtime/library.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
	client: "5.12.1",
	engine: "473ed3124229e22d881cb7addf559799debae1ab",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
	DbNull: objectEnumValues.classes.DbNull,
	JsonNull: objectEnumValues.classes.JsonNull,
	AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
	ReadUncommitted: "ReadUncommitted",
	ReadCommitted: "ReadCommitted",
	RepeatableRead: "RepeatableRead",
	Serializable: "Serializable",
});

exports.Prisma.UsersScalarFieldEnum = {
	id: "id",
	username: "username",
	passwordHash: "passwordHash",
	salt: "salt",
	role: "role",
};

exports.Prisma.MoviesScalarFieldEnum = {
	id: "id",
	title: "title",
	summary: "summary",
	videoUrl: "videoUrl",
	coverImageUrl: "coverImageUrl",
	numberOfStreams: "numberOfStreams",
	genres: "genres",
	mainCasts: "mainCasts",
	releaseYear: "releaseYear",
	countryOfOrigin: "countryOfOrigin",
};

exports.Prisma.SortOrder = {
	asc: "asc",
	desc: "desc",
};

exports.Prisma.QueryMode = {
	default: "default",
	insensitive: "insensitive",
};

exports.Prisma.ModelName = {
	users: "users",
	movies: "movies",
};
/**
 * Create the Client
 */
const config = {
	generator: {
		name: "client",
		provider: {
			fromEnvVar: null,
			value: "prisma-client-js",
		},
		output: {
			value:
				"C:\\Software Dev\\muvees\\back_dep\\node_modules\\@prisma\\client",
			fromEnvVar: null,
		},
		config: {
			engineType: "library",
		},
		binaryTargets: [
			{
				fromEnvVar: null,
				value: "windows",
				native: true,
			},
			{
				fromEnvVar: null,
				value: "rhel-openssl-3.0.x",
			},
		],
		previewFeatures: [],
	},
	relativeEnvPaths: {
		rootEnvPath: null,
		schemaEnvPath: "../../../.env",
	},
	relativePath: "../../../prisma",
	clientVersion: "5.12.1",
	engineVersion: "473ed3124229e22d881cb7addf559799debae1ab",
	datasourceNames: ["db"],
	activeProvider: "postgresql",
	postinstall: false,
	inlineDatasources: {
		db: {
			url: {
				fromEnvVar: "DATABASE_URL",
				value: null,
			},
		},
	},
	inlineSchema:
		'// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n  binaryTargets = ["native", "rhel-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel users {\n  id Int @id @default(autoincrement())\n  username String @unique @db.VarChar(20)\n  passwordHash String\n  salt String\n  role String @default("user")\n  watchList movies[] @relation("userWatchList")\n  watchHistory movies[] @relation("userWatchHistory")\n\n}\n\nmodel movies {\n  id Int @id @default(autoincrement())\n  title String @db.VarChar(200)\n  summary String @db.VarChar(500)\n  videoUrl String @unique\n  coverImageUrl String @unique\n  numberOfStreams Int\n  genres String[]\n  mainCasts String[]\n  releaseYear String @db.VarChar(4)\n  countryOfOrigin String @db.VarChar(200)\n  savedBy users[] @relation("userWatchList")\n  watchedBy users[] @relation("userWatchHistory")\n\n@@index([id])\n@@index([title])\n@@index([countryOfOrigin])\n}\n',
	inlineSchemaHash:
		"d76bbd443597fc3ceb3387a56002eff95409817c50517e4ac20809e7864f2ec1",
	copyEngine: true,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
	const alternativePaths = ["node_modules/.prisma/client", ".prisma/client"];

	const alternativePath =
		alternativePaths.find((altPath) => {
			return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
		}) ?? alternativePaths[0];

	config.dirname = path.join(process.cwd(), alternativePath);
	config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
	'{"models":{"users":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"salt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"user","isGenerated":false,"isUpdatedAt":false},{"name":"watchList","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"movies","relationName":"userWatchList","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"watchHistory","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"movies","relationName":"userWatchHistory","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"movies":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"summary","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"videoUrl","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"coverImageUrl","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"numberOfStreams","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"genres","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"mainCasts","kind":"scalar","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"releaseYear","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"countryOfOrigin","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"savedBy","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"users","relationName":"userWatchList","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"watchedBy","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"users","relationName":"userWatchHistory","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

const { warnEnvConflicts } = require("../../@prisma/client/runtime/library.js");

warnEnvConflicts({
	rootEnvPath:
		config.relativeEnvPaths.rootEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
	schemaEnvPath:
		config.relativeEnvPaths.schemaEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(
	process.cwd(),
	"node_modules/.prisma/client/query_engine-windows.dll.node",
);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(
	process.cwd(),
	"node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node",
);
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
