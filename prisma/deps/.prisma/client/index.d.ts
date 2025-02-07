
/**
 * Client
**/

import * as runtime from '../../@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model movies
 * 
 */
export type movies = $Result.DefaultSelection<Prisma.$moviesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.moviesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    movies: 'movies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'movies'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      movies: {
        payload: Prisma.$moviesPayload<ExtArgs>
        fields: Prisma.moviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findFirst: {
            args: Prisma.moviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findMany: {
            args: Prisma.moviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          create: {
            args: Prisma.moviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          createMany: {
            args: Prisma.moviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.moviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          update: {
            args: Prisma.moviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          deleteMany: {
            args: Prisma.moviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.moviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.moviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.moviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.moviesCountArgs<ExtArgs>,
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    watchList: number
    watchHistory: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchList?: boolean | UsersCountOutputTypeCountWatchListArgs
    watchHistory?: boolean | UsersCountOutputTypeCountWatchHistoryArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }



  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    savedBy: number
    watchedBy: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | MoviesCountOutputTypeCountSavedByArgs
    watchedBy?: boolean | MoviesCountOutputTypeCountWatchedByArgs
  }

  // Custom InputTypes

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountWatchedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    salt: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    passwordHash: string | null
    salt: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    salt: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    salt?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    passwordHash: string
    salt: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    role?: boolean
    watchList?: boolean | users$watchListArgs<ExtArgs>
    watchHistory?: boolean | users$watchHistoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    salt?: boolean
    role?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchList?: boolean | users$watchListArgs<ExtArgs>
    watchHistory?: boolean | users$watchHistoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      watchList: Prisma.$moviesPayload<ExtArgs>[]
      watchHistory: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      passwordHash: string
      salt: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    watchList<T extends users$watchListArgs<ExtArgs> = {}>(args?: Subset<T, users$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    watchHistory<T extends users$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, users$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly passwordHash: FieldRef<"users", 'String'>
    readonly salt: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.watchList
   */
  export type users$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * users.watchHistory
   */
  export type users$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    numberOfStreams: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    numberOfStreams: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    summary: string | null
    videoUrl: string | null
    coverImageUrl: string | null
    numberOfStreams: number | null
    releaseYear: string | null
    countryOfOrigin: string | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    summary: string | null
    videoUrl: string | null
    coverImageUrl: string | null
    numberOfStreams: number | null
    releaseYear: string | null
    countryOfOrigin: string | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    videoUrl: number
    coverImageUrl: number
    numberOfStreams: number
    genres: number
    mainCasts: number
    releaseYear: number
    countryOfOrigin: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    numberOfStreams?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    numberOfStreams?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    videoUrl?: true
    coverImageUrl?: true
    numberOfStreams?: true
    releaseYear?: true
    countryOfOrigin?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    videoUrl?: true
    coverImageUrl?: true
    numberOfStreams?: true
    releaseYear?: true
    countryOfOrigin?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    videoUrl?: true
    coverImageUrl?: true
    numberOfStreams?: true
    genres?: true
    mainCasts?: true
    releaseYear?: true
    countryOfOrigin?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to aggregate.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type moviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithAggregationInput | moviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: moviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres: string[]
    mainCasts: string[]
    releaseYear: string
    countryOfOrigin: string
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends moviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type moviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    videoUrl?: boolean
    coverImageUrl?: boolean
    numberOfStreams?: boolean
    genres?: boolean
    mainCasts?: boolean
    releaseYear?: boolean
    countryOfOrigin?: boolean
    savedBy?: boolean | movies$savedByArgs<ExtArgs>
    watchedBy?: boolean | movies$watchedByArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    videoUrl?: boolean
    coverImageUrl?: boolean
    numberOfStreams?: boolean
    genres?: boolean
    mainCasts?: boolean
    releaseYear?: boolean
    countryOfOrigin?: boolean
  }

  export type moviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | movies$savedByArgs<ExtArgs>
    watchedBy?: boolean | movies$watchedByArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $moviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movies"
    objects: {
      savedBy: Prisma.$usersPayload<ExtArgs>[]
      watchedBy: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      summary: string
      videoUrl: string
      coverImageUrl: string
      numberOfStreams: number
      genres: string[]
      mainCasts: string[]
      releaseYear: string
      countryOfOrigin: string
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }


  type moviesGetPayload<S extends boolean | null | undefined | moviesDefaultArgs> = $Result.GetResult<Prisma.$moviesPayload, S>

  type moviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<moviesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface moviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movies'], meta: { name: 'movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {moviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends moviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, moviesFindUniqueArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {moviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends moviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends moviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesFindFirstArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends moviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends moviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movies.
     * @param {moviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
    **/
    create<T extends moviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, moviesCreateArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {moviesCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movies = await prisma.movies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends moviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movies.
     * @param {moviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
    **/
    delete<T extends moviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, moviesDeleteArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movies.
     * @param {moviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends moviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, moviesUpdateArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {moviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends moviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends moviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, moviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movies.
     * @param {moviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
    **/
    upsert<T extends moviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, moviesUpsertArgs<ExtArgs>>
    ): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends moviesCountArgs>(
      args?: Subset<T, moviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moviesGroupByArgs['orderBy'] }
        : { orderBy?: moviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movies model
   */
  readonly fields: moviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    savedBy<T extends movies$savedByArgs<ExtArgs> = {}>(args?: Subset<T, movies$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    watchedBy<T extends movies$watchedByArgs<ExtArgs> = {}>(args?: Subset<T, movies$watchedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the movies model
   */ 
  interface moviesFieldRefs {
    readonly id: FieldRef<"movies", 'Int'>
    readonly title: FieldRef<"movies", 'String'>
    readonly summary: FieldRef<"movies", 'String'>
    readonly videoUrl: FieldRef<"movies", 'String'>
    readonly coverImageUrl: FieldRef<"movies", 'String'>
    readonly numberOfStreams: FieldRef<"movies", 'Int'>
    readonly genres: FieldRef<"movies", 'String[]'>
    readonly mainCasts: FieldRef<"movies", 'String[]'>
    readonly releaseYear: FieldRef<"movies", 'String'>
    readonly countryOfOrigin: FieldRef<"movies", 'String'>
  }
    

  // Custom InputTypes

  /**
   * movies findUnique
   */
  export type moviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }


  /**
   * movies findUniqueOrThrow
   */
  export type moviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }


  /**
   * movies findFirst
   */
  export type moviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * movies findFirstOrThrow
   */
  export type moviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * movies findMany
   */
  export type moviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * movies create
   */
  export type moviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to create a movies.
     */
    data: XOR<moviesCreateInput, moviesUncheckedCreateInput>
  }


  /**
   * movies createMany
   */
  export type moviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * movies update
   */
  export type moviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to update a movies.
     */
    data: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
    /**
     * Choose, which movies to update.
     */
    where: moviesWhereUniqueInput
  }


  /**
   * movies updateMany
   */
  export type moviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
  }


  /**
   * movies upsert
   */
  export type moviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The filter to search for the movies to update in case it exists.
     */
    where: moviesWhereUniqueInput
    /**
     * In case the movies found by the `where` argument doesn't exist, create a new movies with this data.
     */
    create: XOR<moviesCreateInput, moviesUncheckedCreateInput>
    /**
     * In case the movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
  }


  /**
   * movies delete
   */
  export type moviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter which movies to delete.
     */
    where: moviesWhereUniqueInput
  }


  /**
   * movies deleteMany
   */
  export type moviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: moviesWhereInput
  }


  /**
   * movies.savedBy
   */
  export type movies$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * movies.watchedBy
   */
  export type movies$watchedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * movies without action
   */
  export type moviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moviesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    salt: 'salt',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    videoUrl: 'videoUrl',
    coverImageUrl: 'coverImageUrl',
    numberOfStreams: 'numberOfStreams',
    genres: 'genres',
    mainCasts: 'mainCasts',
    releaseYear: 'releaseYear',
    countryOfOrigin: 'countryOfOrigin'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    passwordHash?: StringFilter<"users"> | string
    salt?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    watchList?: MoviesListRelationFilter
    watchHistory?: MoviesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    watchList?: moviesOrderByRelationAggregateInput
    watchHistory?: moviesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    passwordHash?: StringFilter<"users"> | string
    salt?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    watchList?: MoviesListRelationFilter
    watchHistory?: MoviesListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    passwordHash?: StringWithAggregatesFilter<"users"> | string
    salt?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type moviesWhereInput = {
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    id?: IntFilter<"movies"> | number
    title?: StringFilter<"movies"> | string
    summary?: StringFilter<"movies"> | string
    videoUrl?: StringFilter<"movies"> | string
    coverImageUrl?: StringFilter<"movies"> | string
    numberOfStreams?: IntFilter<"movies"> | number
    genres?: StringNullableListFilter<"movies">
    mainCasts?: StringNullableListFilter<"movies">
    releaseYear?: StringFilter<"movies"> | string
    countryOfOrigin?: StringFilter<"movies"> | string
    savedBy?: UsersListRelationFilter
    watchedBy?: UsersListRelationFilter
  }

  export type moviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    videoUrl?: SortOrder
    coverImageUrl?: SortOrder
    numberOfStreams?: SortOrder
    genres?: SortOrder
    mainCasts?: SortOrder
    releaseYear?: SortOrder
    countryOfOrigin?: SortOrder
    savedBy?: usersOrderByRelationAggregateInput
    watchedBy?: usersOrderByRelationAggregateInput
  }

  export type moviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    videoUrl?: string
    coverImageUrl?: string
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    title?: StringFilter<"movies"> | string
    summary?: StringFilter<"movies"> | string
    numberOfStreams?: IntFilter<"movies"> | number
    genres?: StringNullableListFilter<"movies">
    mainCasts?: StringNullableListFilter<"movies">
    releaseYear?: StringFilter<"movies"> | string
    countryOfOrigin?: StringFilter<"movies"> | string
    savedBy?: UsersListRelationFilter
    watchedBy?: UsersListRelationFilter
  }, "id" | "videoUrl" | "coverImageUrl">

  export type moviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    videoUrl?: SortOrder
    coverImageUrl?: SortOrder
    numberOfStreams?: SortOrder
    genres?: SortOrder
    mainCasts?: SortOrder
    releaseYear?: SortOrder
    countryOfOrigin?: SortOrder
    _count?: moviesCountOrderByAggregateInput
    _avg?: moviesAvgOrderByAggregateInput
    _max?: moviesMaxOrderByAggregateInput
    _min?: moviesMinOrderByAggregateInput
    _sum?: moviesSumOrderByAggregateInput
  }

  export type moviesScalarWhereWithAggregatesInput = {
    AND?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    OR?: moviesScalarWhereWithAggregatesInput[]
    NOT?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movies"> | number
    title?: StringWithAggregatesFilter<"movies"> | string
    summary?: StringWithAggregatesFilter<"movies"> | string
    videoUrl?: StringWithAggregatesFilter<"movies"> | string
    coverImageUrl?: StringWithAggregatesFilter<"movies"> | string
    numberOfStreams?: IntWithAggregatesFilter<"movies"> | number
    genres?: StringNullableListFilter<"movies">
    mainCasts?: StringNullableListFilter<"movies">
    releaseYear?: StringWithAggregatesFilter<"movies"> | string
    countryOfOrigin?: StringWithAggregatesFilter<"movies"> | string
  }

  export type usersCreateInput = {
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchList?: moviesCreateNestedManyWithoutSavedByInput
    watchHistory?: moviesCreateNestedManyWithoutWatchedByInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchList?: moviesUncheckedCreateNestedManyWithoutSavedByInput
    watchHistory?: moviesUncheckedCreateNestedManyWithoutWatchedByInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchList?: moviesUpdateManyWithoutSavedByNestedInput
    watchHistory?: moviesUpdateManyWithoutWatchedByNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchList?: moviesUncheckedUpdateManyWithoutSavedByNestedInput
    watchHistory?: moviesUncheckedUpdateManyWithoutWatchedByNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    passwordHash: string
    salt: string
    role?: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type moviesCreateInput = {
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    savedBy?: usersCreateNestedManyWithoutWatchListInput
    watchedBy?: usersCreateNestedManyWithoutWatchHistoryInput
  }

  export type moviesUncheckedCreateInput = {
    id?: number
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    savedBy?: usersUncheckedCreateNestedManyWithoutWatchListInput
    watchedBy?: usersUncheckedCreateNestedManyWithoutWatchHistoryInput
  }

  export type moviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    savedBy?: usersUpdateManyWithoutWatchListNestedInput
    watchedBy?: usersUpdateManyWithoutWatchHistoryNestedInput
  }

  export type moviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    savedBy?: usersUncheckedUpdateManyWithoutWatchListNestedInput
    watchedBy?: usersUncheckedUpdateManyWithoutWatchHistoryNestedInput
  }

  export type moviesCreateManyInput = {
    id?: number
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
  }

  export type moviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
  }

  export type moviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MoviesListRelationFilter = {
    every?: moviesWhereInput
    some?: moviesWhereInput
    none?: moviesWhereInput
  }

  export type moviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    videoUrl?: SortOrder
    coverImageUrl?: SortOrder
    numberOfStreams?: SortOrder
    genres?: SortOrder
    mainCasts?: SortOrder
    releaseYear?: SortOrder
    countryOfOrigin?: SortOrder
  }

  export type moviesAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfStreams?: SortOrder
  }

  export type moviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    videoUrl?: SortOrder
    coverImageUrl?: SortOrder
    numberOfStreams?: SortOrder
    releaseYear?: SortOrder
    countryOfOrigin?: SortOrder
  }

  export type moviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    videoUrl?: SortOrder
    coverImageUrl?: SortOrder
    numberOfStreams?: SortOrder
    releaseYear?: SortOrder
    countryOfOrigin?: SortOrder
  }

  export type moviesSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfStreams?: SortOrder
  }

  export type moviesCreateNestedManyWithoutSavedByInput = {
    create?: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput> | moviesCreateWithoutSavedByInput[] | moviesUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutSavedByInput | moviesCreateOrConnectWithoutSavedByInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesCreateNestedManyWithoutWatchedByInput = {
    create?: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput> | moviesCreateWithoutWatchedByInput[] | moviesUncheckedCreateWithoutWatchedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutWatchedByInput | moviesCreateOrConnectWithoutWatchedByInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput> | moviesCreateWithoutSavedByInput[] | moviesUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutSavedByInput | moviesCreateOrConnectWithoutSavedByInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutWatchedByInput = {
    create?: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput> | moviesCreateWithoutWatchedByInput[] | moviesUncheckedCreateWithoutWatchedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutWatchedByInput | moviesCreateOrConnectWithoutWatchedByInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type moviesUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput> | moviesCreateWithoutSavedByInput[] | moviesUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutSavedByInput | moviesCreateOrConnectWithoutSavedByInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutSavedByInput | moviesUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutSavedByInput | moviesUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutSavedByInput | moviesUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUpdateManyWithoutWatchedByNestedInput = {
    create?: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput> | moviesCreateWithoutWatchedByInput[] | moviesUncheckedCreateWithoutWatchedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutWatchedByInput | moviesCreateOrConnectWithoutWatchedByInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutWatchedByInput | moviesUpsertWithWhereUniqueWithoutWatchedByInput[]
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutWatchedByInput | moviesUpdateWithWhereUniqueWithoutWatchedByInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutWatchedByInput | moviesUpdateManyWithWhereWithoutWatchedByInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type moviesUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput> | moviesCreateWithoutSavedByInput[] | moviesUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutSavedByInput | moviesCreateOrConnectWithoutSavedByInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutSavedByInput | moviesUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutSavedByInput | moviesUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutSavedByInput | moviesUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUncheckedUpdateManyWithoutWatchedByNestedInput = {
    create?: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput> | moviesCreateWithoutWatchedByInput[] | moviesUncheckedCreateWithoutWatchedByInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutWatchedByInput | moviesCreateOrConnectWithoutWatchedByInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutWatchedByInput | moviesUpsertWithWhereUniqueWithoutWatchedByInput[]
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutWatchedByInput | moviesUpdateWithWhereUniqueWithoutWatchedByInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutWatchedByInput | moviesUpdateManyWithWhereWithoutWatchedByInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesCreategenresInput = {
    set: string[]
  }

  export type moviesCreatemainCastsInput = {
    set: string[]
  }

  export type usersCreateNestedManyWithoutWatchListInput = {
    create?: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput> | usersCreateWithoutWatchListInput[] | usersUncheckedCreateWithoutWatchListInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchListInput | usersCreateOrConnectWithoutWatchListInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutWatchHistoryInput = {
    create?: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput> | usersCreateWithoutWatchHistoryInput[] | usersUncheckedCreateWithoutWatchHistoryInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchHistoryInput | usersCreateOrConnectWithoutWatchHistoryInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutWatchListInput = {
    create?: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput> | usersCreateWithoutWatchListInput[] | usersUncheckedCreateWithoutWatchListInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchListInput | usersCreateOrConnectWithoutWatchListInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutWatchHistoryInput = {
    create?: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput> | usersCreateWithoutWatchHistoryInput[] | usersUncheckedCreateWithoutWatchHistoryInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchHistoryInput | usersCreateOrConnectWithoutWatchHistoryInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type moviesUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type moviesUpdatemainCastsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateManyWithoutWatchListNestedInput = {
    create?: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput> | usersCreateWithoutWatchListInput[] | usersUncheckedCreateWithoutWatchListInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchListInput | usersCreateOrConnectWithoutWatchListInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWatchListInput | usersUpsertWithWhereUniqueWithoutWatchListInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWatchListInput | usersUpdateWithWhereUniqueWithoutWatchListInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWatchListInput | usersUpdateManyWithWhereWithoutWatchListInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUpdateManyWithoutWatchHistoryNestedInput = {
    create?: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput> | usersCreateWithoutWatchHistoryInput[] | usersUncheckedCreateWithoutWatchHistoryInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchHistoryInput | usersCreateOrConnectWithoutWatchHistoryInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWatchHistoryInput | usersUpsertWithWhereUniqueWithoutWatchHistoryInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWatchHistoryInput | usersUpdateWithWhereUniqueWithoutWatchHistoryInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWatchHistoryInput | usersUpdateManyWithWhereWithoutWatchHistoryInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutWatchListNestedInput = {
    create?: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput> | usersCreateWithoutWatchListInput[] | usersUncheckedCreateWithoutWatchListInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchListInput | usersCreateOrConnectWithoutWatchListInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWatchListInput | usersUpsertWithWhereUniqueWithoutWatchListInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWatchListInput | usersUpdateWithWhereUniqueWithoutWatchListInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWatchListInput | usersUpdateManyWithWhereWithoutWatchListInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutWatchHistoryNestedInput = {
    create?: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput> | usersCreateWithoutWatchHistoryInput[] | usersUncheckedCreateWithoutWatchHistoryInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWatchHistoryInput | usersCreateOrConnectWithoutWatchHistoryInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWatchHistoryInput | usersUpsertWithWhereUniqueWithoutWatchHistoryInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWatchHistoryInput | usersUpdateWithWhereUniqueWithoutWatchHistoryInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWatchHistoryInput | usersUpdateManyWithWhereWithoutWatchHistoryInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type moviesCreateWithoutSavedByInput = {
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    watchedBy?: usersCreateNestedManyWithoutWatchHistoryInput
  }

  export type moviesUncheckedCreateWithoutSavedByInput = {
    id?: number
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    watchedBy?: usersUncheckedCreateNestedManyWithoutWatchHistoryInput
  }

  export type moviesCreateOrConnectWithoutSavedByInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput>
  }

  export type moviesCreateWithoutWatchedByInput = {
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    savedBy?: usersCreateNestedManyWithoutWatchListInput
  }

  export type moviesUncheckedCreateWithoutWatchedByInput = {
    id?: number
    title: string
    summary: string
    videoUrl: string
    coverImageUrl: string
    numberOfStreams: number
    genres?: moviesCreategenresInput | string[]
    mainCasts?: moviesCreatemainCastsInput | string[]
    releaseYear: string
    countryOfOrigin: string
    savedBy?: usersUncheckedCreateNestedManyWithoutWatchListInput
  }

  export type moviesCreateOrConnectWithoutWatchedByInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput>
  }

  export type moviesUpsertWithWhereUniqueWithoutSavedByInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutSavedByInput, moviesUncheckedUpdateWithoutSavedByInput>
    create: XOR<moviesCreateWithoutSavedByInput, moviesUncheckedCreateWithoutSavedByInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutSavedByInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutSavedByInput, moviesUncheckedUpdateWithoutSavedByInput>
  }

  export type moviesUpdateManyWithWhereWithoutSavedByInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutSavedByInput>
  }

  export type moviesScalarWhereInput = {
    AND?: moviesScalarWhereInput | moviesScalarWhereInput[]
    OR?: moviesScalarWhereInput[]
    NOT?: moviesScalarWhereInput | moviesScalarWhereInput[]
    id?: IntFilter<"movies"> | number
    title?: StringFilter<"movies"> | string
    summary?: StringFilter<"movies"> | string
    videoUrl?: StringFilter<"movies"> | string
    coverImageUrl?: StringFilter<"movies"> | string
    numberOfStreams?: IntFilter<"movies"> | number
    genres?: StringNullableListFilter<"movies">
    mainCasts?: StringNullableListFilter<"movies">
    releaseYear?: StringFilter<"movies"> | string
    countryOfOrigin?: StringFilter<"movies"> | string
  }

  export type moviesUpsertWithWhereUniqueWithoutWatchedByInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutWatchedByInput, moviesUncheckedUpdateWithoutWatchedByInput>
    create: XOR<moviesCreateWithoutWatchedByInput, moviesUncheckedCreateWithoutWatchedByInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutWatchedByInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutWatchedByInput, moviesUncheckedUpdateWithoutWatchedByInput>
  }

  export type moviesUpdateManyWithWhereWithoutWatchedByInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutWatchedByInput>
  }

  export type usersCreateWithoutWatchListInput = {
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchHistory?: moviesCreateNestedManyWithoutWatchedByInput
  }

  export type usersUncheckedCreateWithoutWatchListInput = {
    id?: number
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchHistory?: moviesUncheckedCreateNestedManyWithoutWatchedByInput
  }

  export type usersCreateOrConnectWithoutWatchListInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput>
  }

  export type usersCreateWithoutWatchHistoryInput = {
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchList?: moviesCreateNestedManyWithoutSavedByInput
  }

  export type usersUncheckedCreateWithoutWatchHistoryInput = {
    id?: number
    username: string
    passwordHash: string
    salt: string
    role?: string
    watchList?: moviesUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type usersCreateOrConnectWithoutWatchHistoryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput>
  }

  export type usersUpsertWithWhereUniqueWithoutWatchListInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutWatchListInput, usersUncheckedUpdateWithoutWatchListInput>
    create: XOR<usersCreateWithoutWatchListInput, usersUncheckedCreateWithoutWatchListInput>
  }

  export type usersUpdateWithWhereUniqueWithoutWatchListInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutWatchListInput, usersUncheckedUpdateWithoutWatchListInput>
  }

  export type usersUpdateManyWithWhereWithoutWatchListInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutWatchListInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    passwordHash?: StringFilter<"users"> | string
    salt?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
  }

  export type usersUpsertWithWhereUniqueWithoutWatchHistoryInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutWatchHistoryInput, usersUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<usersCreateWithoutWatchHistoryInput, usersUncheckedCreateWithoutWatchHistoryInput>
  }

  export type usersUpdateWithWhereUniqueWithoutWatchHistoryInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutWatchHistoryInput, usersUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type usersUpdateManyWithWhereWithoutWatchHistoryInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutWatchHistoryInput>
  }

  export type moviesUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    watchedBy?: usersUpdateManyWithoutWatchHistoryNestedInput
  }

  export type moviesUncheckedUpdateWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    watchedBy?: usersUncheckedUpdateManyWithoutWatchHistoryNestedInput
  }

  export type moviesUncheckedUpdateManyWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
  }

  export type moviesUpdateWithoutWatchedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    savedBy?: usersUpdateManyWithoutWatchListNestedInput
  }

  export type moviesUncheckedUpdateWithoutWatchedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    savedBy?: usersUncheckedUpdateManyWithoutWatchListNestedInput
  }

  export type moviesUncheckedUpdateManyWithoutWatchedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    numberOfStreams?: IntFieldUpdateOperationsInput | number
    genres?: moviesUpdategenresInput | string[]
    mainCasts?: moviesUpdatemainCastsInput | string[]
    releaseYear?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutWatchListInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchHistory?: moviesUpdateManyWithoutWatchedByNestedInput
  }

  export type usersUncheckedUpdateWithoutWatchListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchHistory?: moviesUncheckedUpdateManyWithoutWatchedByNestedInput
  }

  export type usersUncheckedUpdateManyWithoutWatchListInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutWatchHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchList?: moviesUpdateManyWithoutSavedByNestedInput
  }

  export type usersUncheckedUpdateWithoutWatchHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    watchList?: moviesUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type usersUncheckedUpdateManyWithoutWatchHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoviesCountOutputTypeDefaultArgs instead
     */
    export type MoviesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MoviesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use moviesDefaultArgs instead
     */
    export type moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = moviesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}