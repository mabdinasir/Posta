
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  isGoogleAuth: boolean
  isEmailVerified: boolean
  isDeleted: boolean
  isSignedIn: boolean
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model UserType
 * 
 */
export type UserType = {
  id: string
  name: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model Country
 * 
 */
export type Country = {
  id: string
  name: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model City
 * 
 */
export type City = {
  id: string
  name: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string
  countryId: string
}

/**
 * Model PostOffice
 * 
 */
export type PostOffice = {
  id: string
  name: string
  address: string
  contact: string
  managerId: string
  contactPerson: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string
  cityId: string
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: string
  name: string
  description: string | null
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
  postOfficeInChargeId: string
  LocationTypeId: string
  serviceId: string
}

/**
 * Model LocationType
 * 
 */
export type LocationType = {
  id: string
  name: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model Service
 * 
 */
export type Service = {
  id: string
  name: string
  description: string | null
  isActive: boolean
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model CollectingOption
 * 
 */
export type CollectingOption = {
  id: string
  optionName: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model ProcessingOption
 * 
 */
export type ProcessingOption = {
  id: string
  optionName: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

/**
 * Model Mail
 * 
 */
export type Mail = {
  id: string
  mail_code: string
  mail_category_id: string
  recipient_address: string
  sender_address: string
  location_start_id: string
  location_end_id: string | null
  time_inserted: Date
  time_delivered: Date | null
  mailCarrierId: string
}

/**
 * Model MailCarrier
 * 
 */
export type MailCarrier = {
  id: string
  name: string
  description: string | null
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userType`: Exposes CRUD operations for the **UserType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTypes
    * const userTypes = await prisma.userType.findMany()
    * ```
    */
  get userType(): Prisma.UserTypeDelegate<GlobalReject>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<GlobalReject>;

  /**
   * `prisma.postOffice`: Exposes CRUD operations for the **PostOffice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostOffices
    * const postOffices = await prisma.postOffice.findMany()
    * ```
    */
  get postOffice(): Prisma.PostOfficeDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.locationType`: Exposes CRUD operations for the **LocationType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationTypes
    * const locationTypes = await prisma.locationType.findMany()
    * ```
    */
  get locationType(): Prisma.LocationTypeDelegate<GlobalReject>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<GlobalReject>;

  /**
   * `prisma.collectingOption`: Exposes CRUD operations for the **CollectingOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectingOptions
    * const collectingOptions = await prisma.collectingOption.findMany()
    * ```
    */
  get collectingOption(): Prisma.CollectingOptionDelegate<GlobalReject>;

  /**
   * `prisma.processingOption`: Exposes CRUD operations for the **ProcessingOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessingOptions
    * const processingOptions = await prisma.processingOption.findMany()
    * ```
    */
  get processingOption(): Prisma.ProcessingOptionDelegate<GlobalReject>;

  /**
   * `prisma.mail`: Exposes CRUD operations for the **Mail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mail
    * const mail = await prisma.mail.findMany()
    * ```
    */
  get mail(): Prisma.MailDelegate<GlobalReject>;

  /**
   * `prisma.mailCarrier`: Exposes CRUD operations for the **MailCarrier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailCarriers
    * const mailCarriers = await prisma.mailCarrier.findMany()
    * ```
    */
  get mailCarrier(): Prisma.MailCarrierDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserType: 'UserType',
    Country: 'Country',
    City: 'City',
    PostOffice: 'PostOffice',
    Location: 'Location',
    LocationType: 'LocationType',
    Service: 'Service',
    CollectingOption: 'CollectingOption',
    ProcessingOption: 'ProcessingOption',
    Mail: 'Mail',
    MailCarrier: 'MailCarrier'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    userTypes: number
  }

  export type UserCountOutputTypeSelect = {
    userTypes?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type UserTypeCountOutputType
   */


  export type UserTypeCountOutputType = {
    users: number
  }

  export type UserTypeCountOutputTypeSelect = {
    users?: boolean
  }

  export type UserTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | UserTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserTypeCountOutputTypeArgs)
    ? UserTypeCountOutputType 
    : S extends { select: any } & (UserTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserTypeCountOutputType ? UserTypeCountOutputType[P] : never
  } 
      : UserTypeCountOutputType




  // Custom InputTypes

  /**
   * UserTypeCountOutputType without action
   */
  export type UserTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserTypeCountOutputType
     */
    select?: UserTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    cities: number
  }

  export type CountryCountOutputTypeSelect = {
    cities?: boolean
  }

  export type CountryCountOutputTypeGetPayload<S extends boolean | null | undefined | CountryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CountryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CountryCountOutputTypeArgs)
    ? CountryCountOutputType 
    : S extends { select: any } & (CountryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
      : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Count Type CityCountOutputType
   */


  export type CityCountOutputType = {
    postOffices: number
  }

  export type CityCountOutputTypeSelect = {
    postOffices?: boolean
  }

  export type CityCountOutputTypeGetPayload<S extends boolean | null | undefined | CityCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CityCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CityCountOutputTypeArgs)
    ? CityCountOutputType 
    : S extends { select: any } & (CityCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CityCountOutputType ? CityCountOutputType[P] : never
  } 
      : CityCountOutputType




  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect | null
  }



  /**
   * Count Type PostOfficeCountOutputType
   */


  export type PostOfficeCountOutputType = {
    locations: number
  }

  export type PostOfficeCountOutputTypeSelect = {
    locations?: boolean
  }

  export type PostOfficeCountOutputTypeGetPayload<S extends boolean | null | undefined | PostOfficeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostOfficeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostOfficeCountOutputTypeArgs)
    ? PostOfficeCountOutputType 
    : S extends { select: any } & (PostOfficeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostOfficeCountOutputType ? PostOfficeCountOutputType[P] : never
  } 
      : PostOfficeCountOutputType




  // Custom InputTypes

  /**
   * PostOfficeCountOutputType without action
   */
  export type PostOfficeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostOfficeCountOutputType
     */
    select?: PostOfficeCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    collectingOptions: number
    processingOptions: number
    mailStart: number
    mailEnd: number
  }

  export type LocationCountOutputTypeSelect = {
    collectingOptions?: boolean
    processingOptions?: boolean
    mailStart?: boolean
    mailEnd?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationTypeCountOutputType
   */


  export type LocationTypeCountOutputType = {
    location: number
  }

  export type LocationTypeCountOutputTypeSelect = {
    location?: boolean
  }

  export type LocationTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationTypeCountOutputTypeArgs)
    ? LocationTypeCountOutputType 
    : S extends { select: any } & (LocationTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationTypeCountOutputType ? LocationTypeCountOutputType[P] : never
  } 
      : LocationTypeCountOutputType




  // Custom InputTypes

  /**
   * LocationTypeCountOutputType without action
   */
  export type LocationTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationTypeCountOutputType
     */
    select?: LocationTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type ServiceCountOutputType
   */


  export type ServiceCountOutputType = {
    location: number
  }

  export type ServiceCountOutputTypeSelect = {
    location?: boolean
  }

  export type ServiceCountOutputTypeGetPayload<S extends boolean | null | undefined | ServiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ServiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ServiceCountOutputTypeArgs)
    ? ServiceCountOutputType 
    : S extends { select: any } & (ServiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ServiceCountOutputType ? ServiceCountOutputType[P] : never
  } 
      : ServiceCountOutputType




  // Custom InputTypes

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect | null
  }



  /**
   * Count Type CollectingOptionCountOutputType
   */


  export type CollectingOptionCountOutputType = {
    locations: number
  }

  export type CollectingOptionCountOutputTypeSelect = {
    locations?: boolean
  }

  export type CollectingOptionCountOutputTypeGetPayload<S extends boolean | null | undefined | CollectingOptionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CollectingOptionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CollectingOptionCountOutputTypeArgs)
    ? CollectingOptionCountOutputType 
    : S extends { select: any } & (CollectingOptionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CollectingOptionCountOutputType ? CollectingOptionCountOutputType[P] : never
  } 
      : CollectingOptionCountOutputType




  // Custom InputTypes

  /**
   * CollectingOptionCountOutputType without action
   */
  export type CollectingOptionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CollectingOptionCountOutputType
     */
    select?: CollectingOptionCountOutputTypeSelect | null
  }



  /**
   * Count Type ProcessingOptionCountOutputType
   */


  export type ProcessingOptionCountOutputType = {
    locations: number
  }

  export type ProcessingOptionCountOutputTypeSelect = {
    locations?: boolean
  }

  export type ProcessingOptionCountOutputTypeGetPayload<S extends boolean | null | undefined | ProcessingOptionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProcessingOptionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProcessingOptionCountOutputTypeArgs)
    ? ProcessingOptionCountOutputType 
    : S extends { select: any } & (ProcessingOptionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProcessingOptionCountOutputType ? ProcessingOptionCountOutputType[P] : never
  } 
      : ProcessingOptionCountOutputType




  // Custom InputTypes

  /**
   * ProcessingOptionCountOutputType without action
   */
  export type ProcessingOptionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOptionCountOutputType
     */
    select?: ProcessingOptionCountOutputTypeSelect | null
  }



  /**
   * Count Type MailCarrierCountOutputType
   */


  export type MailCarrierCountOutputType = {
    mail: number
  }

  export type MailCarrierCountOutputTypeSelect = {
    mail?: boolean
  }

  export type MailCarrierCountOutputTypeGetPayload<S extends boolean | null | undefined | MailCarrierCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MailCarrierCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MailCarrierCountOutputTypeArgs)
    ? MailCarrierCountOutputType 
    : S extends { select: any } & (MailCarrierCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MailCarrierCountOutputType ? MailCarrierCountOutputType[P] : never
  } 
      : MailCarrierCountOutputType




  // Custom InputTypes

  /**
   * MailCarrierCountOutputType without action
   */
  export type MailCarrierCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MailCarrierCountOutputType
     */
    select?: MailCarrierCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isGoogleAuth: boolean | null
    isEmailVerified: boolean | null
    isDeleted: boolean | null
    isSignedIn: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    isGoogleAuth: boolean | null
    isEmailVerified: boolean | null
    isDeleted: boolean | null
    isSignedIn: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    isGoogleAuth: number
    isEmailVerified: number
    isDeleted: number
    isSignedIn: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isDeleted?: true
    isSignedIn?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isDeleted?: true
    isSignedIn?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    isGoogleAuth?: true
    isEmailVerified?: true
    isDeleted?: true
    isSignedIn?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth: boolean
    isEmailVerified: boolean
    isDeleted: boolean
    isSignedIn: boolean
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    userTypes?: boolean | User$userTypesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    userTypes?: boolean | User$userTypesArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'userTypes' ? Array < UserTypeGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'userTypes' ? Array < UserTypeGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    userTypes<T extends User$userTypesArgs= {}>(args?: Subset<T, User$userTypesArgs>): Prisma.PrismaPromise<Array<UserTypeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.userTypes
   */
  export type User$userTypesArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    where?: UserTypeWhereInput
    orderBy?: Enumerable<UserTypeOrderByWithRelationInput>
    cursor?: UserTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserTypeScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model UserType
   */


  export type AggregateUserType = {
    _count: UserTypeCountAggregateOutputType | null
    _min: UserTypeMinAggregateOutputType | null
    _max: UserTypeMaxAggregateOutputType | null
  }

  export type UserTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type UserTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type UserTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type UserTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type UserTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type UserTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type UserTypeAggregateArgs = {
    /**
     * Filter which UserType to aggregate.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: Enumerable<UserTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTypes
    **/
    _count?: true | UserTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTypeMaxAggregateInputType
  }

  export type GetUserTypeAggregateType<T extends UserTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserType[P]>
      : GetScalarType<T[P], AggregateUserType[P]>
  }




  export type UserTypeGroupByArgs = {
    where?: UserTypeWhereInput
    orderBy?: Enumerable<UserTypeOrderByWithAggregationInput>
    by: UserTypeScalarFieldEnum[]
    having?: UserTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTypeCountAggregateInputType | true
    _min?: UserTypeMinAggregateInputType
    _max?: UserTypeMaxAggregateInputType
  }


  export type UserTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: UserTypeCountAggregateOutputType | null
    _min: UserTypeMinAggregateOutputType | null
    _max: UserTypeMaxAggregateOutputType | null
  }

  type GetUserTypeGroupByPayload<T extends UserTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UserTypeGroupByOutputType[P]>
        }
      >
    >


  export type UserTypeSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    users?: boolean | UserType$usersArgs
    _count?: boolean | UserTypeCountOutputTypeArgs
  }


  export type UserTypeInclude = {
    users?: boolean | UserType$usersArgs
    _count?: boolean | UserTypeCountOutputTypeArgs
  }

  export type UserTypeGetPayload<S extends boolean | null | undefined | UserTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserType :
    S extends undefined ? never :
    S extends { include: any } & (UserTypeArgs | UserTypeFindManyArgs)
    ? UserType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserTypeArgs | UserTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserType ? UserType[P] : never
  } 
      : UserType


  type UserTypeCountArgs = 
    Omit<UserTypeFindManyArgs, 'select' | 'include'> & {
      select?: UserTypeCountAggregateInputType | true
    }

  export interface UserTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserType that matches the filter.
     * @param {UserTypeFindUniqueArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserType'> extends True ? Prisma__UserTypeClient<UserTypeGetPayload<T>> : Prisma__UserTypeClient<UserTypeGetPayload<T> | null, null>

    /**
     * Find one UserType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserTypeFindUniqueOrThrowArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserTypeFindUniqueOrThrowArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Find the first UserType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindFirstArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserType'> extends True ? Prisma__UserTypeClient<UserTypeGetPayload<T>> : Prisma__UserTypeClient<UserTypeGetPayload<T> | null, null>

    /**
     * Find the first UserType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindFirstOrThrowArgs} args - Arguments to find a UserType
     * @example
     * // Get one UserType
     * const userType = await prisma.userType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserTypeFindFirstOrThrowArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Find zero or more UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTypes
     * const userTypes = await prisma.userType.findMany()
     * 
     * // Get first 10 UserTypes
     * const userTypes = await prisma.userType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTypeWithIdOnly = await prisma.userType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserTypeFindManyArgs>(
      args?: SelectSubset<T, UserTypeFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserTypeGetPayload<T>>>

    /**
     * Create a UserType.
     * @param {UserTypeCreateArgs} args - Arguments to create a UserType.
     * @example
     * // Create one UserType
     * const UserType = await prisma.userType.create({
     *   data: {
     *     // ... data to create a UserType
     *   }
     * })
     * 
    **/
    create<T extends UserTypeCreateArgs>(
      args: SelectSubset<T, UserTypeCreateArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Create many UserTypes.
     *     @param {UserTypeCreateManyArgs} args - Arguments to create many UserTypes.
     *     @example
     *     // Create many UserTypes
     *     const userType = await prisma.userType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserTypeCreateManyArgs>(
      args?: SelectSubset<T, UserTypeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserType.
     * @param {UserTypeDeleteArgs} args - Arguments to delete one UserType.
     * @example
     * // Delete one UserType
     * const UserType = await prisma.userType.delete({
     *   where: {
     *     // ... filter to delete one UserType
     *   }
     * })
     * 
    **/
    delete<T extends UserTypeDeleteArgs>(
      args: SelectSubset<T, UserTypeDeleteArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Update one UserType.
     * @param {UserTypeUpdateArgs} args - Arguments to update one UserType.
     * @example
     * // Update one UserType
     * const userType = await prisma.userType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserTypeUpdateArgs>(
      args: SelectSubset<T, UserTypeUpdateArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Delete zero or more UserTypes.
     * @param {UserTypeDeleteManyArgs} args - Arguments to filter UserTypes to delete.
     * @example
     * // Delete a few UserTypes
     * const { count } = await prisma.userType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserTypeDeleteManyArgs>(
      args?: SelectSubset<T, UserTypeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTypes
     * const userType = await prisma.userType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserTypeUpdateManyArgs>(
      args: SelectSubset<T, UserTypeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserType.
     * @param {UserTypeUpsertArgs} args - Arguments to update or create a UserType.
     * @example
     * // Update or create a UserType
     * const userType = await prisma.userType.upsert({
     *   create: {
     *     // ... data to create a UserType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserType we want to update
     *   }
     * })
    **/
    upsert<T extends UserTypeUpsertArgs>(
      args: SelectSubset<T, UserTypeUpsertArgs>
    ): Prisma__UserTypeClient<UserTypeGetPayload<T>>

    /**
     * Count the number of UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeCountArgs} args - Arguments to filter UserTypes to count.
     * @example
     * // Count the number of UserTypes
     * const count = await prisma.userType.count({
     *   where: {
     *     // ... the filter for the UserTypes we want to count
     *   }
     * })
    **/
    count<T extends UserTypeCountArgs>(
      args?: Subset<T, UserTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTypeAggregateArgs>(args: Subset<T, UserTypeAggregateArgs>): Prisma.PrismaPromise<GetUserTypeAggregateType<T>>

    /**
     * Group by UserType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypeGroupByArgs} args - Group by arguments.
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
      T extends UserTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTypeGroupByArgs['orderBy'] }
        : { orderBy?: UserTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserTypeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends UserType$usersArgs= {}>(args?: Subset<T, UserType$usersArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserType base type for findUnique actions
   */
  export type UserTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter, which UserType to fetch.
     */
    where: UserTypeWhereUniqueInput
  }

  /**
   * UserType findUnique
   */
  export interface UserTypeFindUniqueArgs extends UserTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserType findUniqueOrThrow
   */
  export type UserTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter, which UserType to fetch.
     */
    where: UserTypeWhereUniqueInput
  }


  /**
   * UserType base type for findFirst actions
   */
  export type UserTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter, which UserType to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: Enumerable<UserTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTypes.
     */
    distinct?: Enumerable<UserTypeScalarFieldEnum>
  }

  /**
   * UserType findFirst
   */
  export interface UserTypeFindFirstArgs extends UserTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserType findFirstOrThrow
   */
  export type UserTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter, which UserType to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: Enumerable<UserTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTypes.
     */
    distinct?: Enumerable<UserTypeScalarFieldEnum>
  }


  /**
   * UserType findMany
   */
  export type UserTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter, which UserTypes to fetch.
     */
    where?: UserTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTypes to fetch.
     */
    orderBy?: Enumerable<UserTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTypes.
     */
    cursor?: UserTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTypes.
     */
    skip?: number
    distinct?: Enumerable<UserTypeScalarFieldEnum>
  }


  /**
   * UserType create
   */
  export type UserTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * The data needed to create a UserType.
     */
    data: XOR<UserTypeCreateInput, UserTypeUncheckedCreateInput>
  }


  /**
   * UserType createMany
   */
  export type UserTypeCreateManyArgs = {
    /**
     * The data used to create many UserTypes.
     */
    data: Enumerable<UserTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserType update
   */
  export type UserTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * The data needed to update a UserType.
     */
    data: XOR<UserTypeUpdateInput, UserTypeUncheckedUpdateInput>
    /**
     * Choose, which UserType to update.
     */
    where: UserTypeWhereUniqueInput
  }


  /**
   * UserType updateMany
   */
  export type UserTypeUpdateManyArgs = {
    /**
     * The data used to update UserTypes.
     */
    data: XOR<UserTypeUpdateManyMutationInput, UserTypeUncheckedUpdateManyInput>
    /**
     * Filter which UserTypes to update
     */
    where?: UserTypeWhereInput
  }


  /**
   * UserType upsert
   */
  export type UserTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * The filter to search for the UserType to update in case it exists.
     */
    where: UserTypeWhereUniqueInput
    /**
     * In case the UserType found by the `where` argument doesn't exist, create a new UserType with this data.
     */
    create: XOR<UserTypeCreateInput, UserTypeUncheckedCreateInput>
    /**
     * In case the UserType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTypeUpdateInput, UserTypeUncheckedUpdateInput>
  }


  /**
   * UserType delete
   */
  export type UserTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
    /**
     * Filter which UserType to delete.
     */
    where: UserTypeWhereUniqueInput
  }


  /**
   * UserType deleteMany
   */
  export type UserTypeDeleteManyArgs = {
    /**
     * Filter which UserTypes to delete
     */
    where?: UserTypeWhereInput
  }


  /**
   * UserType.users
   */
  export type UserType$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * UserType without action
   */
  export type UserTypeArgs = {
    /**
     * Select specific fields to fetch from the UserType
     */
    select?: UserTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserTypeInclude | null
  }



  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: CountryScalarFieldEnum[]
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    cities?: boolean | Country$citiesArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }


  export type CountryInclude = {
    cities?: boolean | Country$citiesArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryGetPayload<S extends boolean | null | undefined | CountryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Country :
    S extends undefined ? never :
    S extends { include: any } & (CountryArgs | CountryFindManyArgs)
    ? Country  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'cities' ? Array < CityGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CountryArgs | CountryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'cities' ? Array < CityGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Country ? Country[P] : never
  } 
      : Country


  type CountryCountArgs = 
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CountryGetPayload<T>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs>(
      args?: SelectSubset<T, CountryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    cities<T extends Country$citiesArgs= {}>(args?: Subset<T, Country$citiesArgs>): Prisma.PrismaPromise<Array<CityGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUnique
   */
  export interface CountryFindUniqueArgs extends CountryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country findFirst
   */
  export interface CountryFindFirstArgs extends CountryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs = {
    /**
     * The data used to create many Countries.
     */
    data: Enumerable<CountryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.cities
   */
  export type Country$citiesArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    where?: CityWhereInput
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
  }



  /**
   * Model City
   */


  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    countryId: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    countryId: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    countryId: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    countryId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    countryId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    countryId?: true
    _all?: true
  }

  export type CityAggregateArgs = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs = {
    where?: CityWhereInput
    orderBy?: Enumerable<CityOrderByWithAggregationInput>
    by: CityScalarFieldEnum[]
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }


  export type CityGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string
    countryId: string
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    countryId?: boolean
    country?: boolean | CountryArgs
    postOffices?: boolean | City$postOfficesArgs
    _count?: boolean | CityCountOutputTypeArgs
  }


  export type CityInclude = {
    country?: boolean | CountryArgs
    postOffices?: boolean | City$postOfficesArgs
    _count?: boolean | CityCountOutputTypeArgs
  }

  export type CityGetPayload<S extends boolean | null | undefined | CityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? City :
    S extends undefined ? never :
    S extends { include: any } & (CityArgs | CityFindManyArgs)
    ? City  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'country' ? CountryGetPayload<S['include'][P]> :
        P extends 'postOffices' ? Array < PostOfficeGetPayload<S['include'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CityArgs | CityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'country' ? CountryGetPayload<S['select'][P]> :
        P extends 'postOffices' ? Array < PostOfficeGetPayload<S['select'][P]>>  :
        P extends '_count' ? CityCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof City ? City[P] : never
  } 
      : City


  type CityCountArgs = 
    Omit<CityFindManyArgs, 'select' | 'include'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'City'> extends True ? Prisma__CityClient<CityGetPayload<T>> : Prisma__CityClient<CityGetPayload<T> | null, null>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'City'> extends True ? Prisma__CityClient<CityGetPayload<T>> : Prisma__CityClient<CityGetPayload<T> | null, null>

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CityFindManyArgs>(
      args?: SelectSubset<T, CityFindManyArgs>
    ): Prisma.PrismaPromise<Array<CityGetPayload<T>>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends CityCreateArgs>(
      args: SelectSubset<T, CityCreateArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {CityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CityCreateManyArgs>(
      args?: SelectSubset<T, CityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends CityDeleteArgs>(
      args: SelectSubset<T, CityDeleteArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CityUpdateArgs>(
      args: SelectSubset<T, CityUpdateArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CityDeleteManyArgs>(
      args?: SelectSubset<T, CityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CityUpdateManyArgs>(
      args: SelectSubset<T, CityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends CityUpsertArgs>(
      args: SelectSubset<T, CityUpsertArgs>
    ): Prisma__CityClient<CityGetPayload<T>>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    country<T extends CountryArgs= {}>(args?: Subset<T, CountryArgs>): Prisma__CountryClient<CountryGetPayload<T> | Null>;

    postOffices<T extends City$postOfficesArgs= {}>(args?: Subset<T, City$postOfficesArgs>): Prisma.PrismaPromise<Array<PostOfficeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * City base type for findUnique actions
   */
  export type CityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUnique
   */
  export interface CityFindUniqueArgs extends CityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City base type for findFirst actions
   */
  export type CityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }

  /**
   * City findFirst
   */
  export interface CityFindFirstArgs extends CityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * City findMany
   */
  export type CityFindManyArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: Enumerable<CityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * City create
   */
  export type CityCreateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }


  /**
   * City createMany
   */
  export type CityCreateManyArgs = {
    /**
     * The data used to create many Cities.
     */
    data: Enumerable<CityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * City update
   */
  export type CityUpdateArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City updateMany
   */
  export type CityUpdateManyArgs = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }


  /**
   * City upsert
   */
  export type CityUpsertArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }


  /**
   * City delete
   */
  export type CityDeleteArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }


  /**
   * City.postOffices
   */
  export type City$postOfficesArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    where?: PostOfficeWhereInput
    orderBy?: Enumerable<PostOfficeOrderByWithRelationInput>
    cursor?: PostOfficeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostOfficeScalarFieldEnum>
  }


  /**
   * City without action
   */
  export type CityArgs = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude | null
  }



  /**
   * Model PostOffice
   */


  export type AggregatePostOffice = {
    _count: PostOfficeCountAggregateOutputType | null
    _min: PostOfficeMinAggregateOutputType | null
    _max: PostOfficeMaxAggregateOutputType | null
  }

  export type PostOfficeMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    contact: string | null
    managerId: string | null
    contactPerson: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    cityId: string | null
  }

  export type PostOfficeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    contact: string | null
    managerId: string | null
    contactPerson: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    cityId: string | null
  }

  export type PostOfficeCountAggregateOutputType = {
    id: number
    name: number
    address: number
    contact: number
    managerId: number
    contactPerson: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    cityId: number
    _all: number
  }


  export type PostOfficeMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact?: true
    managerId?: true
    contactPerson?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    cityId?: true
  }

  export type PostOfficeMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact?: true
    managerId?: true
    contactPerson?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    cityId?: true
  }

  export type PostOfficeCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    contact?: true
    managerId?: true
    contactPerson?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    cityId?: true
    _all?: true
  }

  export type PostOfficeAggregateArgs = {
    /**
     * Filter which PostOffice to aggregate.
     */
    where?: PostOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOffices to fetch.
     */
    orderBy?: Enumerable<PostOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostOffices
    **/
    _count?: true | PostOfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostOfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostOfficeMaxAggregateInputType
  }

  export type GetPostOfficeAggregateType<T extends PostOfficeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostOffice[P]>
      : GetScalarType<T[P], AggregatePostOffice[P]>
  }




  export type PostOfficeGroupByArgs = {
    where?: PostOfficeWhereInput
    orderBy?: Enumerable<PostOfficeOrderByWithAggregationInput>
    by: PostOfficeScalarFieldEnum[]
    having?: PostOfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostOfficeCountAggregateInputType | true
    _min?: PostOfficeMinAggregateInputType
    _max?: PostOfficeMaxAggregateInputType
  }


  export type PostOfficeGroupByOutputType = {
    id: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string
    cityId: string
    _count: PostOfficeCountAggregateOutputType | null
    _min: PostOfficeMinAggregateOutputType | null
    _max: PostOfficeMaxAggregateOutputType | null
  }

  type GetPostOfficeGroupByPayload<T extends PostOfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostOfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostOfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostOfficeGroupByOutputType[P]>
            : GetScalarType<T[P], PostOfficeGroupByOutputType[P]>
        }
      >
    >


  export type PostOfficeSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    contact?: boolean
    managerId?: boolean
    contactPerson?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    cityId?: boolean
    city?: boolean | CityArgs
    locations?: boolean | PostOffice$locationsArgs
    _count?: boolean | PostOfficeCountOutputTypeArgs
  }


  export type PostOfficeInclude = {
    city?: boolean | CityArgs
    locations?: boolean | PostOffice$locationsArgs
    _count?: boolean | PostOfficeCountOutputTypeArgs
  }

  export type PostOfficeGetPayload<S extends boolean | null | undefined | PostOfficeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostOffice :
    S extends undefined ? never :
    S extends { include: any } & (PostOfficeArgs | PostOfficeFindManyArgs)
    ? PostOffice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'city' ? CityGetPayload<S['include'][P]> :
        P extends 'locations' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostOfficeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostOfficeArgs | PostOfficeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'city' ? CityGetPayload<S['select'][P]> :
        P extends 'locations' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostOfficeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PostOffice ? PostOffice[P] : never
  } 
      : PostOffice


  type PostOfficeCountArgs = 
    Omit<PostOfficeFindManyArgs, 'select' | 'include'> & {
      select?: PostOfficeCountAggregateInputType | true
    }

  export interface PostOfficeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PostOffice that matches the filter.
     * @param {PostOfficeFindUniqueArgs} args - Arguments to find a PostOffice
     * @example
     * // Get one PostOffice
     * const postOffice = await prisma.postOffice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostOfficeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostOfficeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostOffice'> extends True ? Prisma__PostOfficeClient<PostOfficeGetPayload<T>> : Prisma__PostOfficeClient<PostOfficeGetPayload<T> | null, null>

    /**
     * Find one PostOffice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostOfficeFindUniqueOrThrowArgs} args - Arguments to find a PostOffice
     * @example
     * // Get one PostOffice
     * const postOffice = await prisma.postOffice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostOfficeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostOfficeFindUniqueOrThrowArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Find the first PostOffice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeFindFirstArgs} args - Arguments to find a PostOffice
     * @example
     * // Get one PostOffice
     * const postOffice = await prisma.postOffice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostOfficeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostOfficeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostOffice'> extends True ? Prisma__PostOfficeClient<PostOfficeGetPayload<T>> : Prisma__PostOfficeClient<PostOfficeGetPayload<T> | null, null>

    /**
     * Find the first PostOffice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeFindFirstOrThrowArgs} args - Arguments to find a PostOffice
     * @example
     * // Get one PostOffice
     * const postOffice = await prisma.postOffice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostOfficeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostOfficeFindFirstOrThrowArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Find zero or more PostOffices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostOffices
     * const postOffices = await prisma.postOffice.findMany()
     * 
     * // Get first 10 PostOffices
     * const postOffices = await prisma.postOffice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postOfficeWithIdOnly = await prisma.postOffice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostOfficeFindManyArgs>(
      args?: SelectSubset<T, PostOfficeFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostOfficeGetPayload<T>>>

    /**
     * Create a PostOffice.
     * @param {PostOfficeCreateArgs} args - Arguments to create a PostOffice.
     * @example
     * // Create one PostOffice
     * const PostOffice = await prisma.postOffice.create({
     *   data: {
     *     // ... data to create a PostOffice
     *   }
     * })
     * 
    **/
    create<T extends PostOfficeCreateArgs>(
      args: SelectSubset<T, PostOfficeCreateArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Create many PostOffices.
     *     @param {PostOfficeCreateManyArgs} args - Arguments to create many PostOffices.
     *     @example
     *     // Create many PostOffices
     *     const postOffice = await prisma.postOffice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostOfficeCreateManyArgs>(
      args?: SelectSubset<T, PostOfficeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostOffice.
     * @param {PostOfficeDeleteArgs} args - Arguments to delete one PostOffice.
     * @example
     * // Delete one PostOffice
     * const PostOffice = await prisma.postOffice.delete({
     *   where: {
     *     // ... filter to delete one PostOffice
     *   }
     * })
     * 
    **/
    delete<T extends PostOfficeDeleteArgs>(
      args: SelectSubset<T, PostOfficeDeleteArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Update one PostOffice.
     * @param {PostOfficeUpdateArgs} args - Arguments to update one PostOffice.
     * @example
     * // Update one PostOffice
     * const postOffice = await prisma.postOffice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostOfficeUpdateArgs>(
      args: SelectSubset<T, PostOfficeUpdateArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Delete zero or more PostOffices.
     * @param {PostOfficeDeleteManyArgs} args - Arguments to filter PostOffices to delete.
     * @example
     * // Delete a few PostOffices
     * const { count } = await prisma.postOffice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostOfficeDeleteManyArgs>(
      args?: SelectSubset<T, PostOfficeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostOffices
     * const postOffice = await prisma.postOffice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostOfficeUpdateManyArgs>(
      args: SelectSubset<T, PostOfficeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostOffice.
     * @param {PostOfficeUpsertArgs} args - Arguments to update or create a PostOffice.
     * @example
     * // Update or create a PostOffice
     * const postOffice = await prisma.postOffice.upsert({
     *   create: {
     *     // ... data to create a PostOffice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostOffice we want to update
     *   }
     * })
    **/
    upsert<T extends PostOfficeUpsertArgs>(
      args: SelectSubset<T, PostOfficeUpsertArgs>
    ): Prisma__PostOfficeClient<PostOfficeGetPayload<T>>

    /**
     * Count the number of PostOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeCountArgs} args - Arguments to filter PostOffices to count.
     * @example
     * // Count the number of PostOffices
     * const count = await prisma.postOffice.count({
     *   where: {
     *     // ... the filter for the PostOffices we want to count
     *   }
     * })
    **/
    count<T extends PostOfficeCountArgs>(
      args?: Subset<T, PostOfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostOfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostOfficeAggregateArgs>(args: Subset<T, PostOfficeAggregateArgs>): Prisma.PrismaPromise<GetPostOfficeAggregateType<T>>

    /**
     * Group by PostOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOfficeGroupByArgs} args - Group by arguments.
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
      T extends PostOfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostOfficeGroupByArgs['orderBy'] }
        : { orderBy?: PostOfficeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostOfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PostOffice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostOfficeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    city<T extends CityArgs= {}>(args?: Subset<T, CityArgs>): Prisma__CityClient<CityGetPayload<T> | Null>;

    locations<T extends PostOffice$locationsArgs= {}>(args?: Subset<T, PostOffice$locationsArgs>): Prisma.PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PostOffice base type for findUnique actions
   */
  export type PostOfficeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter, which PostOffice to fetch.
     */
    where: PostOfficeWhereUniqueInput
  }

  /**
   * PostOffice findUnique
   */
  export interface PostOfficeFindUniqueArgs extends PostOfficeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PostOffice findUniqueOrThrow
   */
  export type PostOfficeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter, which PostOffice to fetch.
     */
    where: PostOfficeWhereUniqueInput
  }


  /**
   * PostOffice base type for findFirst actions
   */
  export type PostOfficeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter, which PostOffice to fetch.
     */
    where?: PostOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOffices to fetch.
     */
    orderBy?: Enumerable<PostOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostOffices.
     */
    cursor?: PostOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostOffices.
     */
    distinct?: Enumerable<PostOfficeScalarFieldEnum>
  }

  /**
   * PostOffice findFirst
   */
  export interface PostOfficeFindFirstArgs extends PostOfficeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PostOffice findFirstOrThrow
   */
  export type PostOfficeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter, which PostOffice to fetch.
     */
    where?: PostOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOffices to fetch.
     */
    orderBy?: Enumerable<PostOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostOffices.
     */
    cursor?: PostOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostOffices.
     */
    distinct?: Enumerable<PostOfficeScalarFieldEnum>
  }


  /**
   * PostOffice findMany
   */
  export type PostOfficeFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter, which PostOffices to fetch.
     */
    where?: PostOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOffices to fetch.
     */
    orderBy?: Enumerable<PostOfficeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostOffices.
     */
    cursor?: PostOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOffices.
     */
    skip?: number
    distinct?: Enumerable<PostOfficeScalarFieldEnum>
  }


  /**
   * PostOffice create
   */
  export type PostOfficeCreateArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * The data needed to create a PostOffice.
     */
    data: XOR<PostOfficeCreateInput, PostOfficeUncheckedCreateInput>
  }


  /**
   * PostOffice createMany
   */
  export type PostOfficeCreateManyArgs = {
    /**
     * The data used to create many PostOffices.
     */
    data: Enumerable<PostOfficeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostOffice update
   */
  export type PostOfficeUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * The data needed to update a PostOffice.
     */
    data: XOR<PostOfficeUpdateInput, PostOfficeUncheckedUpdateInput>
    /**
     * Choose, which PostOffice to update.
     */
    where: PostOfficeWhereUniqueInput
  }


  /**
   * PostOffice updateMany
   */
  export type PostOfficeUpdateManyArgs = {
    /**
     * The data used to update PostOffices.
     */
    data: XOR<PostOfficeUpdateManyMutationInput, PostOfficeUncheckedUpdateManyInput>
    /**
     * Filter which PostOffices to update
     */
    where?: PostOfficeWhereInput
  }


  /**
   * PostOffice upsert
   */
  export type PostOfficeUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * The filter to search for the PostOffice to update in case it exists.
     */
    where: PostOfficeWhereUniqueInput
    /**
     * In case the PostOffice found by the `where` argument doesn't exist, create a new PostOffice with this data.
     */
    create: XOR<PostOfficeCreateInput, PostOfficeUncheckedCreateInput>
    /**
     * In case the PostOffice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostOfficeUpdateInput, PostOfficeUncheckedUpdateInput>
  }


  /**
   * PostOffice delete
   */
  export type PostOfficeDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
    /**
     * Filter which PostOffice to delete.
     */
    where: PostOfficeWhereUniqueInput
  }


  /**
   * PostOffice deleteMany
   */
  export type PostOfficeDeleteManyArgs = {
    /**
     * Filter which PostOffices to delete
     */
    where?: PostOfficeWhereInput
  }


  /**
   * PostOffice.locations
   */
  export type PostOffice$locationsArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * PostOffice without action
   */
  export type PostOfficeArgs = {
    /**
     * Select specific fields to fetch from the PostOffice
     */
    select?: PostOfficeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOfficeInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    postOfficeInChargeId: string | null
    LocationTypeId: string | null
    serviceId: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    postOfficeInChargeId: string | null
    LocationTypeId: string | null
    serviceId: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    postOfficeInChargeId: number
    LocationTypeId: number
    serviceId: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    postOfficeInChargeId?: true
    LocationTypeId?: true
    serviceId?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    postOfficeInChargeId?: true
    LocationTypeId?: true
    serviceId?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    postOfficeInChargeId?: true
    LocationTypeId?: true
    serviceId?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: LocationScalarFieldEnum[]
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    postOfficeInChargeId?: boolean
    LocationTypeId?: boolean
    serviceId?: boolean
    postOfficeInCharge?: boolean | PostOfficeArgs
    LocationType?: boolean | LocationTypeArgs
    services?: boolean | ServiceArgs
    collectingOptions?: boolean | Location$collectingOptionsArgs
    processingOptions?: boolean | Location$processingOptionsArgs
    mailStart?: boolean | Location$mailStartArgs
    mailEnd?: boolean | Location$mailEndArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type LocationInclude = {
    postOfficeInCharge?: boolean | PostOfficeArgs
    LocationType?: boolean | LocationTypeArgs
    services?: boolean | ServiceArgs
    collectingOptions?: boolean | Location$collectingOptionsArgs
    processingOptions?: boolean | Location$processingOptionsArgs
    mailStart?: boolean | Location$mailStartArgs
    mailEnd?: boolean | Location$mailEndArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationGetPayload<S extends boolean | null | undefined | LocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Location :
    S extends undefined ? never :
    S extends { include: any } & (LocationArgs | LocationFindManyArgs)
    ? Location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'postOfficeInCharge' ? PostOfficeGetPayload<S['include'][P]> :
        P extends 'LocationType' ? LocationTypeGetPayload<S['include'][P]> :
        P extends 'services' ? ServiceGetPayload<S['include'][P]> :
        P extends 'collectingOptions' ? Array < CollectingOptionGetPayload<S['include'][P]>>  :
        P extends 'processingOptions' ? Array < ProcessingOptionGetPayload<S['include'][P]>>  :
        P extends 'mailStart' ? Array < MailGetPayload<S['include'][P]>>  :
        P extends 'mailEnd' ? Array < MailGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationArgs | LocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'postOfficeInCharge' ? PostOfficeGetPayload<S['select'][P]> :
        P extends 'LocationType' ? LocationTypeGetPayload<S['select'][P]> :
        P extends 'services' ? ServiceGetPayload<S['select'][P]> :
        P extends 'collectingOptions' ? Array < CollectingOptionGetPayload<S['select'][P]>>  :
        P extends 'processingOptions' ? Array < ProcessingOptionGetPayload<S['select'][P]>>  :
        P extends 'mailStart' ? Array < MailGetPayload<S['select'][P]>>  :
        P extends 'mailEnd' ? Array < MailGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
      : Location


  type LocationCountArgs = 
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): Prisma.PrismaPromise<Array<LocationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs>(
      args?: SelectSubset<T, LocationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    postOfficeInCharge<T extends PostOfficeArgs= {}>(args?: Subset<T, PostOfficeArgs>): Prisma__PostOfficeClient<PostOfficeGetPayload<T> | Null>;

    LocationType<T extends LocationTypeArgs= {}>(args?: Subset<T, LocationTypeArgs>): Prisma__LocationTypeClient<LocationTypeGetPayload<T> | Null>;

    services<T extends ServiceArgs= {}>(args?: Subset<T, ServiceArgs>): Prisma__ServiceClient<ServiceGetPayload<T> | Null>;

    collectingOptions<T extends Location$collectingOptionsArgs= {}>(args?: Subset<T, Location$collectingOptionsArgs>): Prisma.PrismaPromise<Array<CollectingOptionGetPayload<T>>| Null>;

    processingOptions<T extends Location$processingOptionsArgs= {}>(args?: Subset<T, Location$processingOptionsArgs>): Prisma.PrismaPromise<Array<ProcessingOptionGetPayload<T>>| Null>;

    mailStart<T extends Location$mailStartArgs= {}>(args?: Subset<T, Location$mailStartArgs>): Prisma.PrismaPromise<Array<MailGetPayload<T>>| Null>;

    mailEnd<T extends Location$mailEndArgs= {}>(args?: Subset<T, Location$mailEndArgs>): Prisma.PrismaPromise<Array<MailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs = {
    /**
     * The data used to create many Locations.
     */
    data: Enumerable<LocationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location.collectingOptions
   */
  export type Location$collectingOptionsArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    where?: CollectingOptionWhereInput
    orderBy?: Enumerable<CollectingOptionOrderByWithRelationInput>
    cursor?: CollectingOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CollectingOptionScalarFieldEnum>
  }


  /**
   * Location.processingOptions
   */
  export type Location$processingOptionsArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    where?: ProcessingOptionWhereInput
    orderBy?: Enumerable<ProcessingOptionOrderByWithRelationInput>
    cursor?: ProcessingOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProcessingOptionScalarFieldEnum>
  }


  /**
   * Location.mailStart
   */
  export type Location$mailStartArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    where?: MailWhereInput
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    cursor?: MailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MailScalarFieldEnum>
  }


  /**
   * Location.mailEnd
   */
  export type Location$mailEndArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    where?: MailWhereInput
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    cursor?: MailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MailScalarFieldEnum>
  }


  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
  }



  /**
   * Model LocationType
   */


  export type AggregateLocationType = {
    _count: LocationTypeCountAggregateOutputType | null
    _min: LocationTypeMinAggregateOutputType | null
    _max: LocationTypeMaxAggregateOutputType | null
  }

  export type LocationTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type LocationTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type LocationTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type LocationTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type LocationTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type LocationTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type LocationTypeAggregateArgs = {
    /**
     * Filter which LocationType to aggregate.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: Enumerable<LocationTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationTypes
    **/
    _count?: true | LocationTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationTypeMaxAggregateInputType
  }

  export type GetLocationTypeAggregateType<T extends LocationTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationType[P]>
      : GetScalarType<T[P], AggregateLocationType[P]>
  }




  export type LocationTypeGroupByArgs = {
    where?: LocationTypeWhereInput
    orderBy?: Enumerable<LocationTypeOrderByWithAggregationInput>
    by: LocationTypeScalarFieldEnum[]
    having?: LocationTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationTypeCountAggregateInputType | true
    _min?: LocationTypeMinAggregateInputType
    _max?: LocationTypeMaxAggregateInputType
  }


  export type LocationTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: LocationTypeCountAggregateOutputType | null
    _min: LocationTypeMinAggregateOutputType | null
    _max: LocationTypeMaxAggregateOutputType | null
  }

  type GetLocationTypeGroupByPayload<T extends LocationTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LocationTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LocationTypeGroupByOutputType[P]>
        }
      >
    >


  export type LocationTypeSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    location?: boolean | LocationType$locationArgs
    _count?: boolean | LocationTypeCountOutputTypeArgs
  }


  export type LocationTypeInclude = {
    location?: boolean | LocationType$locationArgs
    _count?: boolean | LocationTypeCountOutputTypeArgs
  }

  export type LocationTypeGetPayload<S extends boolean | null | undefined | LocationTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationType :
    S extends undefined ? never :
    S extends { include: any } & (LocationTypeArgs | LocationTypeFindManyArgs)
    ? LocationType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationTypeArgs | LocationTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof LocationType ? LocationType[P] : never
  } 
      : LocationType


  type LocationTypeCountArgs = 
    Omit<LocationTypeFindManyArgs, 'select' | 'include'> & {
      select?: LocationTypeCountAggregateInputType | true
    }

  export interface LocationTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one LocationType that matches the filter.
     * @param {LocationTypeFindUniqueArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LocationType'> extends True ? Prisma__LocationTypeClient<LocationTypeGetPayload<T>> : Prisma__LocationTypeClient<LocationTypeGetPayload<T> | null, null>

    /**
     * Find one LocationType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationTypeFindUniqueOrThrowArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationTypeFindUniqueOrThrowArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Find the first LocationType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindFirstArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LocationType'> extends True ? Prisma__LocationTypeClient<LocationTypeGetPayload<T>> : Prisma__LocationTypeClient<LocationTypeGetPayload<T> | null, null>

    /**
     * Find the first LocationType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindFirstOrThrowArgs} args - Arguments to find a LocationType
     * @example
     * // Get one LocationType
     * const locationType = await prisma.locationType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationTypeFindFirstOrThrowArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Find zero or more LocationTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationTypes
     * const locationTypes = await prisma.locationType.findMany()
     * 
     * // Get first 10 LocationTypes
     * const locationTypes = await prisma.locationType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationTypeWithIdOnly = await prisma.locationType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationTypeFindManyArgs>(
      args?: SelectSubset<T, LocationTypeFindManyArgs>
    ): Prisma.PrismaPromise<Array<LocationTypeGetPayload<T>>>

    /**
     * Create a LocationType.
     * @param {LocationTypeCreateArgs} args - Arguments to create a LocationType.
     * @example
     * // Create one LocationType
     * const LocationType = await prisma.locationType.create({
     *   data: {
     *     // ... data to create a LocationType
     *   }
     * })
     * 
    **/
    create<T extends LocationTypeCreateArgs>(
      args: SelectSubset<T, LocationTypeCreateArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Create many LocationTypes.
     *     @param {LocationTypeCreateManyArgs} args - Arguments to create many LocationTypes.
     *     @example
     *     // Create many LocationTypes
     *     const locationType = await prisma.locationType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationTypeCreateManyArgs>(
      args?: SelectSubset<T, LocationTypeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LocationType.
     * @param {LocationTypeDeleteArgs} args - Arguments to delete one LocationType.
     * @example
     * // Delete one LocationType
     * const LocationType = await prisma.locationType.delete({
     *   where: {
     *     // ... filter to delete one LocationType
     *   }
     * })
     * 
    **/
    delete<T extends LocationTypeDeleteArgs>(
      args: SelectSubset<T, LocationTypeDeleteArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Update one LocationType.
     * @param {LocationTypeUpdateArgs} args - Arguments to update one LocationType.
     * @example
     * // Update one LocationType
     * const locationType = await prisma.locationType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationTypeUpdateArgs>(
      args: SelectSubset<T, LocationTypeUpdateArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Delete zero or more LocationTypes.
     * @param {LocationTypeDeleteManyArgs} args - Arguments to filter LocationTypes to delete.
     * @example
     * // Delete a few LocationTypes
     * const { count } = await prisma.locationType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationTypeDeleteManyArgs>(
      args?: SelectSubset<T, LocationTypeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationTypes
     * const locationType = await prisma.locationType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationTypeUpdateManyArgs>(
      args: SelectSubset<T, LocationTypeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LocationType.
     * @param {LocationTypeUpsertArgs} args - Arguments to update or create a LocationType.
     * @example
     * // Update or create a LocationType
     * const locationType = await prisma.locationType.upsert({
     *   create: {
     *     // ... data to create a LocationType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationType we want to update
     *   }
     * })
    **/
    upsert<T extends LocationTypeUpsertArgs>(
      args: SelectSubset<T, LocationTypeUpsertArgs>
    ): Prisma__LocationTypeClient<LocationTypeGetPayload<T>>

    /**
     * Count the number of LocationTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeCountArgs} args - Arguments to filter LocationTypes to count.
     * @example
     * // Count the number of LocationTypes
     * const count = await prisma.locationType.count({
     *   where: {
     *     // ... the filter for the LocationTypes we want to count
     *   }
     * })
    **/
    count<T extends LocationTypeCountArgs>(
      args?: Subset<T, LocationTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationTypeAggregateArgs>(args: Subset<T, LocationTypeAggregateArgs>): Prisma.PrismaPromise<GetLocationTypeAggregateType<T>>

    /**
     * Group by LocationType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationTypeGroupByArgs} args - Group by arguments.
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
      T extends LocationTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationTypeGroupByArgs['orderBy'] }
        : { orderBy?: LocationTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LocationTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationTypeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    location<T extends LocationType$locationArgs= {}>(args?: Subset<T, LocationType$locationArgs>): Prisma.PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LocationType base type for findUnique actions
   */
  export type LocationTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter, which LocationType to fetch.
     */
    where: LocationTypeWhereUniqueInput
  }

  /**
   * LocationType findUnique
   */
  export interface LocationTypeFindUniqueArgs extends LocationTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LocationType findUniqueOrThrow
   */
  export type LocationTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter, which LocationType to fetch.
     */
    where: LocationTypeWhereUniqueInput
  }


  /**
   * LocationType base type for findFirst actions
   */
  export type LocationTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter, which LocationType to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: Enumerable<LocationTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTypes.
     */
    distinct?: Enumerable<LocationTypeScalarFieldEnum>
  }

  /**
   * LocationType findFirst
   */
  export interface LocationTypeFindFirstArgs extends LocationTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LocationType findFirstOrThrow
   */
  export type LocationTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter, which LocationType to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: Enumerable<LocationTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationTypes.
     */
    distinct?: Enumerable<LocationTypeScalarFieldEnum>
  }


  /**
   * LocationType findMany
   */
  export type LocationTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter, which LocationTypes to fetch.
     */
    where?: LocationTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationTypes to fetch.
     */
    orderBy?: Enumerable<LocationTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationTypes.
     */
    cursor?: LocationTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationTypes.
     */
    skip?: number
    distinct?: Enumerable<LocationTypeScalarFieldEnum>
  }


  /**
   * LocationType create
   */
  export type LocationTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * The data needed to create a LocationType.
     */
    data: XOR<LocationTypeCreateInput, LocationTypeUncheckedCreateInput>
  }


  /**
   * LocationType createMany
   */
  export type LocationTypeCreateManyArgs = {
    /**
     * The data used to create many LocationTypes.
     */
    data: Enumerable<LocationTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LocationType update
   */
  export type LocationTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * The data needed to update a LocationType.
     */
    data: XOR<LocationTypeUpdateInput, LocationTypeUncheckedUpdateInput>
    /**
     * Choose, which LocationType to update.
     */
    where: LocationTypeWhereUniqueInput
  }


  /**
   * LocationType updateMany
   */
  export type LocationTypeUpdateManyArgs = {
    /**
     * The data used to update LocationTypes.
     */
    data: XOR<LocationTypeUpdateManyMutationInput, LocationTypeUncheckedUpdateManyInput>
    /**
     * Filter which LocationTypes to update
     */
    where?: LocationTypeWhereInput
  }


  /**
   * LocationType upsert
   */
  export type LocationTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * The filter to search for the LocationType to update in case it exists.
     */
    where: LocationTypeWhereUniqueInput
    /**
     * In case the LocationType found by the `where` argument doesn't exist, create a new LocationType with this data.
     */
    create: XOR<LocationTypeCreateInput, LocationTypeUncheckedCreateInput>
    /**
     * In case the LocationType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationTypeUpdateInput, LocationTypeUncheckedUpdateInput>
  }


  /**
   * LocationType delete
   */
  export type LocationTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
    /**
     * Filter which LocationType to delete.
     */
    where: LocationTypeWhereUniqueInput
  }


  /**
   * LocationType deleteMany
   */
  export type LocationTypeDeleteManyArgs = {
    /**
     * Filter which LocationTypes to delete
     */
    where?: LocationTypeWhereInput
  }


  /**
   * LocationType.location
   */
  export type LocationType$locationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * LocationType without action
   */
  export type LocationTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationType
     */
    select?: LocationTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationTypeInclude | null
  }



  /**
   * Model Service
   */


  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ServiceAggregateArgs = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs = {
    where?: ServiceWhereInput
    orderBy?: Enumerable<ServiceOrderByWithAggregationInput>
    by: ServiceScalarFieldEnum[]
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }


  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    location?: boolean | Service$locationArgs
    _count?: boolean | ServiceCountOutputTypeArgs
  }


  export type ServiceInclude = {
    location?: boolean | Service$locationArgs
    _count?: boolean | ServiceCountOutputTypeArgs
  }

  export type ServiceGetPayload<S extends boolean | null | undefined | ServiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Service :
    S extends undefined ? never :
    S extends { include: any } & (ServiceArgs | ServiceFindManyArgs)
    ? Service  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ServiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ServiceArgs | ServiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? ServiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Service ? Service[P] : never
  } 
      : Service


  type ServiceCountArgs = 
    Omit<ServiceFindManyArgs, 'select' | 'include'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Service'> extends True ? Prisma__ServiceClient<ServiceGetPayload<T>> : Prisma__ServiceClient<ServiceGetPayload<T> | null, null>

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindUniqueOrThrowArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Service'> extends True ? Prisma__ServiceClient<ServiceGetPayload<T>> : Prisma__ServiceClient<ServiceGetPayload<T> | null, null>

    /**
     * Find the first Service that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceFindManyArgs>(
      args?: SelectSubset<T, ServiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<ServiceGetPayload<T>>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
    **/
    create<T extends ServiceCreateArgs>(
      args: SelectSubset<T, ServiceCreateArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Create many Services.
     *     @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceCreateManyArgs>(
      args?: SelectSubset<T, ServiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
    **/
    delete<T extends ServiceDeleteArgs>(
      args: SelectSubset<T, ServiceDeleteArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceUpdateArgs>(
      args: SelectSubset<T, ServiceUpdateArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceDeleteManyArgs>(
      args?: SelectSubset<T, ServiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceUpdateManyArgs>(
      args: SelectSubset<T, ServiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceUpsertArgs>(
      args: SelectSubset<T, ServiceUpsertArgs>
    ): Prisma__ServiceClient<ServiceGetPayload<T>>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    location<T extends Service$locationArgs= {}>(args?: Subset<T, Service$locationArgs>): Prisma.PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Service base type for findUnique actions
   */
  export type ServiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUnique
   */
  export interface ServiceFindUniqueArgs extends ServiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service base type for findFirst actions
   */
  export type ServiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }

  /**
   * Service findFirst
   */
  export interface ServiceFindFirstArgs extends ServiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * Service findMany
   */
  export type ServiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: Enumerable<ServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * Service create
   */
  export type ServiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }


  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs = {
    /**
     * The data used to create many Services.
     */
    data: Enumerable<ServiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Service update
   */
  export type ServiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }


  /**
   * Service upsert
   */
  export type ServiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }


  /**
   * Service delete
   */
  export type ServiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }


  /**
   * Service.location
   */
  export type Service$locationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Service without action
   */
  export type ServiceArgs = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude | null
  }



  /**
   * Model CollectingOption
   */


  export type AggregateCollectingOption = {
    _count: CollectingOptionCountAggregateOutputType | null
    _min: CollectingOptionMinAggregateOutputType | null
    _max: CollectingOptionMaxAggregateOutputType | null
  }

  export type CollectingOptionMinAggregateOutputType = {
    id: string | null
    optionName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CollectingOptionMaxAggregateOutputType = {
    id: string | null
    optionName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type CollectingOptionCountAggregateOutputType = {
    id: number
    optionName: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type CollectingOptionMinAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CollectingOptionMaxAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type CollectingOptionCountAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type CollectingOptionAggregateArgs = {
    /**
     * Filter which CollectingOption to aggregate.
     */
    where?: CollectingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectingOptions to fetch.
     */
    orderBy?: Enumerable<CollectingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectingOptions
    **/
    _count?: true | CollectingOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectingOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectingOptionMaxAggregateInputType
  }

  export type GetCollectingOptionAggregateType<T extends CollectingOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectingOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectingOption[P]>
      : GetScalarType<T[P], AggregateCollectingOption[P]>
  }




  export type CollectingOptionGroupByArgs = {
    where?: CollectingOptionWhereInput
    orderBy?: Enumerable<CollectingOptionOrderByWithAggregationInput>
    by: CollectingOptionScalarFieldEnum[]
    having?: CollectingOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectingOptionCountAggregateInputType | true
    _min?: CollectingOptionMinAggregateInputType
    _max?: CollectingOptionMaxAggregateInputType
  }


  export type CollectingOptionGroupByOutputType = {
    id: string
    optionName: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: CollectingOptionCountAggregateOutputType | null
    _min: CollectingOptionMinAggregateOutputType | null
    _max: CollectingOptionMaxAggregateOutputType | null
  }

  type GetCollectingOptionGroupByPayload<T extends CollectingOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CollectingOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectingOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectingOptionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectingOptionGroupByOutputType[P]>
        }
      >
    >


  export type CollectingOptionSelect = {
    id?: boolean
    optionName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    locations?: boolean | CollectingOption$locationsArgs
    _count?: boolean | CollectingOptionCountOutputTypeArgs
  }


  export type CollectingOptionInclude = {
    locations?: boolean | CollectingOption$locationsArgs
    _count?: boolean | CollectingOptionCountOutputTypeArgs
  }

  export type CollectingOptionGetPayload<S extends boolean | null | undefined | CollectingOptionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CollectingOption :
    S extends undefined ? never :
    S extends { include: any } & (CollectingOptionArgs | CollectingOptionFindManyArgs)
    ? CollectingOption  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? CollectingOptionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CollectingOptionArgs | CollectingOptionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? CollectingOptionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CollectingOption ? CollectingOption[P] : never
  } 
      : CollectingOption


  type CollectingOptionCountArgs = 
    Omit<CollectingOptionFindManyArgs, 'select' | 'include'> & {
      select?: CollectingOptionCountAggregateInputType | true
    }

  export interface CollectingOptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CollectingOption that matches the filter.
     * @param {CollectingOptionFindUniqueArgs} args - Arguments to find a CollectingOption
     * @example
     * // Get one CollectingOption
     * const collectingOption = await prisma.collectingOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollectingOptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CollectingOptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CollectingOption'> extends True ? Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>> : Prisma__CollectingOptionClient<CollectingOptionGetPayload<T> | null, null>

    /**
     * Find one CollectingOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CollectingOptionFindUniqueOrThrowArgs} args - Arguments to find a CollectingOption
     * @example
     * // Get one CollectingOption
     * const collectingOption = await prisma.collectingOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollectingOptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CollectingOptionFindUniqueOrThrowArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Find the first CollectingOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionFindFirstArgs} args - Arguments to find a CollectingOption
     * @example
     * // Get one CollectingOption
     * const collectingOption = await prisma.collectingOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollectingOptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CollectingOptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CollectingOption'> extends True ? Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>> : Prisma__CollectingOptionClient<CollectingOptionGetPayload<T> | null, null>

    /**
     * Find the first CollectingOption that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionFindFirstOrThrowArgs} args - Arguments to find a CollectingOption
     * @example
     * // Get one CollectingOption
     * const collectingOption = await prisma.collectingOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollectingOptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CollectingOptionFindFirstOrThrowArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Find zero or more CollectingOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectingOptions
     * const collectingOptions = await prisma.collectingOption.findMany()
     * 
     * // Get first 10 CollectingOptions
     * const collectingOptions = await prisma.collectingOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectingOptionWithIdOnly = await prisma.collectingOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollectingOptionFindManyArgs>(
      args?: SelectSubset<T, CollectingOptionFindManyArgs>
    ): Prisma.PrismaPromise<Array<CollectingOptionGetPayload<T>>>

    /**
     * Create a CollectingOption.
     * @param {CollectingOptionCreateArgs} args - Arguments to create a CollectingOption.
     * @example
     * // Create one CollectingOption
     * const CollectingOption = await prisma.collectingOption.create({
     *   data: {
     *     // ... data to create a CollectingOption
     *   }
     * })
     * 
    **/
    create<T extends CollectingOptionCreateArgs>(
      args: SelectSubset<T, CollectingOptionCreateArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Create many CollectingOptions.
     *     @param {CollectingOptionCreateManyArgs} args - Arguments to create many CollectingOptions.
     *     @example
     *     // Create many CollectingOptions
     *     const collectingOption = await prisma.collectingOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CollectingOptionCreateManyArgs>(
      args?: SelectSubset<T, CollectingOptionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CollectingOption.
     * @param {CollectingOptionDeleteArgs} args - Arguments to delete one CollectingOption.
     * @example
     * // Delete one CollectingOption
     * const CollectingOption = await prisma.collectingOption.delete({
     *   where: {
     *     // ... filter to delete one CollectingOption
     *   }
     * })
     * 
    **/
    delete<T extends CollectingOptionDeleteArgs>(
      args: SelectSubset<T, CollectingOptionDeleteArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Update one CollectingOption.
     * @param {CollectingOptionUpdateArgs} args - Arguments to update one CollectingOption.
     * @example
     * // Update one CollectingOption
     * const collectingOption = await prisma.collectingOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollectingOptionUpdateArgs>(
      args: SelectSubset<T, CollectingOptionUpdateArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Delete zero or more CollectingOptions.
     * @param {CollectingOptionDeleteManyArgs} args - Arguments to filter CollectingOptions to delete.
     * @example
     * // Delete a few CollectingOptions
     * const { count } = await prisma.collectingOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollectingOptionDeleteManyArgs>(
      args?: SelectSubset<T, CollectingOptionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectingOptions
     * const collectingOption = await prisma.collectingOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollectingOptionUpdateManyArgs>(
      args: SelectSubset<T, CollectingOptionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CollectingOption.
     * @param {CollectingOptionUpsertArgs} args - Arguments to update or create a CollectingOption.
     * @example
     * // Update or create a CollectingOption
     * const collectingOption = await prisma.collectingOption.upsert({
     *   create: {
     *     // ... data to create a CollectingOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectingOption we want to update
     *   }
     * })
    **/
    upsert<T extends CollectingOptionUpsertArgs>(
      args: SelectSubset<T, CollectingOptionUpsertArgs>
    ): Prisma__CollectingOptionClient<CollectingOptionGetPayload<T>>

    /**
     * Count the number of CollectingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionCountArgs} args - Arguments to filter CollectingOptions to count.
     * @example
     * // Count the number of CollectingOptions
     * const count = await prisma.collectingOption.count({
     *   where: {
     *     // ... the filter for the CollectingOptions we want to count
     *   }
     * })
    **/
    count<T extends CollectingOptionCountArgs>(
      args?: Subset<T, CollectingOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectingOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectingOptionAggregateArgs>(args: Subset<T, CollectingOptionAggregateArgs>): Prisma.PrismaPromise<GetCollectingOptionAggregateType<T>>

    /**
     * Group by CollectingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectingOptionGroupByArgs} args - Group by arguments.
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
      T extends CollectingOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectingOptionGroupByArgs['orderBy'] }
        : { orderBy?: CollectingOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CollectingOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectingOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectingOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CollectingOptionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    locations<T extends CollectingOption$locationsArgs= {}>(args?: Subset<T, CollectingOption$locationsArgs>): Prisma.PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CollectingOption base type for findUnique actions
   */
  export type CollectingOptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter, which CollectingOption to fetch.
     */
    where: CollectingOptionWhereUniqueInput
  }

  /**
   * CollectingOption findUnique
   */
  export interface CollectingOptionFindUniqueArgs extends CollectingOptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CollectingOption findUniqueOrThrow
   */
  export type CollectingOptionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter, which CollectingOption to fetch.
     */
    where: CollectingOptionWhereUniqueInput
  }


  /**
   * CollectingOption base type for findFirst actions
   */
  export type CollectingOptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter, which CollectingOption to fetch.
     */
    where?: CollectingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectingOptions to fetch.
     */
    orderBy?: Enumerable<CollectingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectingOptions.
     */
    cursor?: CollectingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectingOptions.
     */
    distinct?: Enumerable<CollectingOptionScalarFieldEnum>
  }

  /**
   * CollectingOption findFirst
   */
  export interface CollectingOptionFindFirstArgs extends CollectingOptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CollectingOption findFirstOrThrow
   */
  export type CollectingOptionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter, which CollectingOption to fetch.
     */
    where?: CollectingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectingOptions to fetch.
     */
    orderBy?: Enumerable<CollectingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectingOptions.
     */
    cursor?: CollectingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectingOptions.
     */
    distinct?: Enumerable<CollectingOptionScalarFieldEnum>
  }


  /**
   * CollectingOption findMany
   */
  export type CollectingOptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter, which CollectingOptions to fetch.
     */
    where?: CollectingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectingOptions to fetch.
     */
    orderBy?: Enumerable<CollectingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectingOptions.
     */
    cursor?: CollectingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectingOptions.
     */
    skip?: number
    distinct?: Enumerable<CollectingOptionScalarFieldEnum>
  }


  /**
   * CollectingOption create
   */
  export type CollectingOptionCreateArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * The data needed to create a CollectingOption.
     */
    data: XOR<CollectingOptionCreateInput, CollectingOptionUncheckedCreateInput>
  }


  /**
   * CollectingOption createMany
   */
  export type CollectingOptionCreateManyArgs = {
    /**
     * The data used to create many CollectingOptions.
     */
    data: Enumerable<CollectingOptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CollectingOption update
   */
  export type CollectingOptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * The data needed to update a CollectingOption.
     */
    data: XOR<CollectingOptionUpdateInput, CollectingOptionUncheckedUpdateInput>
    /**
     * Choose, which CollectingOption to update.
     */
    where: CollectingOptionWhereUniqueInput
  }


  /**
   * CollectingOption updateMany
   */
  export type CollectingOptionUpdateManyArgs = {
    /**
     * The data used to update CollectingOptions.
     */
    data: XOR<CollectingOptionUpdateManyMutationInput, CollectingOptionUncheckedUpdateManyInput>
    /**
     * Filter which CollectingOptions to update
     */
    where?: CollectingOptionWhereInput
  }


  /**
   * CollectingOption upsert
   */
  export type CollectingOptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * The filter to search for the CollectingOption to update in case it exists.
     */
    where: CollectingOptionWhereUniqueInput
    /**
     * In case the CollectingOption found by the `where` argument doesn't exist, create a new CollectingOption with this data.
     */
    create: XOR<CollectingOptionCreateInput, CollectingOptionUncheckedCreateInput>
    /**
     * In case the CollectingOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectingOptionUpdateInput, CollectingOptionUncheckedUpdateInput>
  }


  /**
   * CollectingOption delete
   */
  export type CollectingOptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
    /**
     * Filter which CollectingOption to delete.
     */
    where: CollectingOptionWhereUniqueInput
  }


  /**
   * CollectingOption deleteMany
   */
  export type CollectingOptionDeleteManyArgs = {
    /**
     * Filter which CollectingOptions to delete
     */
    where?: CollectingOptionWhereInput
  }


  /**
   * CollectingOption.locations
   */
  export type CollectingOption$locationsArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * CollectingOption without action
   */
  export type CollectingOptionArgs = {
    /**
     * Select specific fields to fetch from the CollectingOption
     */
    select?: CollectingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectingOptionInclude | null
  }



  /**
   * Model ProcessingOption
   */


  export type AggregateProcessingOption = {
    _count: ProcessingOptionCountAggregateOutputType | null
    _min: ProcessingOptionMinAggregateOutputType | null
    _max: ProcessingOptionMaxAggregateOutputType | null
  }

  export type ProcessingOptionMinAggregateOutputType = {
    id: string | null
    optionName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProcessingOptionMaxAggregateOutputType = {
    id: string | null
    optionName: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type ProcessingOptionCountAggregateOutputType = {
    id: number
    optionName: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type ProcessingOptionMinAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProcessingOptionMaxAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type ProcessingOptionCountAggregateInputType = {
    id?: true
    optionName?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ProcessingOptionAggregateArgs = {
    /**
     * Filter which ProcessingOption to aggregate.
     */
    where?: ProcessingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingOptions to fetch.
     */
    orderBy?: Enumerable<ProcessingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessingOptions
    **/
    _count?: true | ProcessingOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessingOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessingOptionMaxAggregateInputType
  }

  export type GetProcessingOptionAggregateType<T extends ProcessingOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessingOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessingOption[P]>
      : GetScalarType<T[P], AggregateProcessingOption[P]>
  }




  export type ProcessingOptionGroupByArgs = {
    where?: ProcessingOptionWhereInput
    orderBy?: Enumerable<ProcessingOptionOrderByWithAggregationInput>
    by: ProcessingOptionScalarFieldEnum[]
    having?: ProcessingOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessingOptionCountAggregateInputType | true
    _min?: ProcessingOptionMinAggregateInputType
    _max?: ProcessingOptionMaxAggregateInputType
  }


  export type ProcessingOptionGroupByOutputType = {
    id: string
    optionName: string
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: ProcessingOptionCountAggregateOutputType | null
    _min: ProcessingOptionMinAggregateOutputType | null
    _max: ProcessingOptionMaxAggregateOutputType | null
  }

  type GetProcessingOptionGroupByPayload<T extends ProcessingOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProcessingOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessingOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessingOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessingOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProcessingOptionSelect = {
    id?: boolean
    optionName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    locations?: boolean | ProcessingOption$locationsArgs
    _count?: boolean | ProcessingOptionCountOutputTypeArgs
  }


  export type ProcessingOptionInclude = {
    locations?: boolean | ProcessingOption$locationsArgs
    _count?: boolean | ProcessingOptionCountOutputTypeArgs
  }

  export type ProcessingOptionGetPayload<S extends boolean | null | undefined | ProcessingOptionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProcessingOption :
    S extends undefined ? never :
    S extends { include: any } & (ProcessingOptionArgs | ProcessingOptionFindManyArgs)
    ? ProcessingOption  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProcessingOptionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProcessingOptionArgs | ProcessingOptionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProcessingOptionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ProcessingOption ? ProcessingOption[P] : never
  } 
      : ProcessingOption


  type ProcessingOptionCountArgs = 
    Omit<ProcessingOptionFindManyArgs, 'select' | 'include'> & {
      select?: ProcessingOptionCountAggregateInputType | true
    }

  export interface ProcessingOptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ProcessingOption that matches the filter.
     * @param {ProcessingOptionFindUniqueArgs} args - Arguments to find a ProcessingOption
     * @example
     * // Get one ProcessingOption
     * const processingOption = await prisma.processingOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProcessingOptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProcessingOptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProcessingOption'> extends True ? Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>> : Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T> | null, null>

    /**
     * Find one ProcessingOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProcessingOptionFindUniqueOrThrowArgs} args - Arguments to find a ProcessingOption
     * @example
     * // Get one ProcessingOption
     * const processingOption = await prisma.processingOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProcessingOptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProcessingOptionFindUniqueOrThrowArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Find the first ProcessingOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionFindFirstArgs} args - Arguments to find a ProcessingOption
     * @example
     * // Get one ProcessingOption
     * const processingOption = await prisma.processingOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProcessingOptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProcessingOptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProcessingOption'> extends True ? Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>> : Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T> | null, null>

    /**
     * Find the first ProcessingOption that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionFindFirstOrThrowArgs} args - Arguments to find a ProcessingOption
     * @example
     * // Get one ProcessingOption
     * const processingOption = await prisma.processingOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProcessingOptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProcessingOptionFindFirstOrThrowArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Find zero or more ProcessingOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessingOptions
     * const processingOptions = await prisma.processingOption.findMany()
     * 
     * // Get first 10 ProcessingOptions
     * const processingOptions = await prisma.processingOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processingOptionWithIdOnly = await prisma.processingOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProcessingOptionFindManyArgs>(
      args?: SelectSubset<T, ProcessingOptionFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProcessingOptionGetPayload<T>>>

    /**
     * Create a ProcessingOption.
     * @param {ProcessingOptionCreateArgs} args - Arguments to create a ProcessingOption.
     * @example
     * // Create one ProcessingOption
     * const ProcessingOption = await prisma.processingOption.create({
     *   data: {
     *     // ... data to create a ProcessingOption
     *   }
     * })
     * 
    **/
    create<T extends ProcessingOptionCreateArgs>(
      args: SelectSubset<T, ProcessingOptionCreateArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Create many ProcessingOptions.
     *     @param {ProcessingOptionCreateManyArgs} args - Arguments to create many ProcessingOptions.
     *     @example
     *     // Create many ProcessingOptions
     *     const processingOption = await prisma.processingOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProcessingOptionCreateManyArgs>(
      args?: SelectSubset<T, ProcessingOptionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProcessingOption.
     * @param {ProcessingOptionDeleteArgs} args - Arguments to delete one ProcessingOption.
     * @example
     * // Delete one ProcessingOption
     * const ProcessingOption = await prisma.processingOption.delete({
     *   where: {
     *     // ... filter to delete one ProcessingOption
     *   }
     * })
     * 
    **/
    delete<T extends ProcessingOptionDeleteArgs>(
      args: SelectSubset<T, ProcessingOptionDeleteArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Update one ProcessingOption.
     * @param {ProcessingOptionUpdateArgs} args - Arguments to update one ProcessingOption.
     * @example
     * // Update one ProcessingOption
     * const processingOption = await prisma.processingOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProcessingOptionUpdateArgs>(
      args: SelectSubset<T, ProcessingOptionUpdateArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Delete zero or more ProcessingOptions.
     * @param {ProcessingOptionDeleteManyArgs} args - Arguments to filter ProcessingOptions to delete.
     * @example
     * // Delete a few ProcessingOptions
     * const { count } = await prisma.processingOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProcessingOptionDeleteManyArgs>(
      args?: SelectSubset<T, ProcessingOptionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessingOptions
     * const processingOption = await prisma.processingOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProcessingOptionUpdateManyArgs>(
      args: SelectSubset<T, ProcessingOptionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProcessingOption.
     * @param {ProcessingOptionUpsertArgs} args - Arguments to update or create a ProcessingOption.
     * @example
     * // Update or create a ProcessingOption
     * const processingOption = await prisma.processingOption.upsert({
     *   create: {
     *     // ... data to create a ProcessingOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessingOption we want to update
     *   }
     * })
    **/
    upsert<T extends ProcessingOptionUpsertArgs>(
      args: SelectSubset<T, ProcessingOptionUpsertArgs>
    ): Prisma__ProcessingOptionClient<ProcessingOptionGetPayload<T>>

    /**
     * Count the number of ProcessingOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionCountArgs} args - Arguments to filter ProcessingOptions to count.
     * @example
     * // Count the number of ProcessingOptions
     * const count = await prisma.processingOption.count({
     *   where: {
     *     // ... the filter for the ProcessingOptions we want to count
     *   }
     * })
    **/
    count<T extends ProcessingOptionCountArgs>(
      args?: Subset<T, ProcessingOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessingOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessingOptionAggregateArgs>(args: Subset<T, ProcessingOptionAggregateArgs>): Prisma.PrismaPromise<GetProcessingOptionAggregateType<T>>

    /**
     * Group by ProcessingOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingOptionGroupByArgs} args - Group by arguments.
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
      T extends ProcessingOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessingOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProcessingOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProcessingOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessingOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessingOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProcessingOptionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    locations<T extends ProcessingOption$locationsArgs= {}>(args?: Subset<T, ProcessingOption$locationsArgs>): Prisma.PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProcessingOption base type for findUnique actions
   */
  export type ProcessingOptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter, which ProcessingOption to fetch.
     */
    where: ProcessingOptionWhereUniqueInput
  }

  /**
   * ProcessingOption findUnique
   */
  export interface ProcessingOptionFindUniqueArgs extends ProcessingOptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProcessingOption findUniqueOrThrow
   */
  export type ProcessingOptionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter, which ProcessingOption to fetch.
     */
    where: ProcessingOptionWhereUniqueInput
  }


  /**
   * ProcessingOption base type for findFirst actions
   */
  export type ProcessingOptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter, which ProcessingOption to fetch.
     */
    where?: ProcessingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingOptions to fetch.
     */
    orderBy?: Enumerable<ProcessingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingOptions.
     */
    cursor?: ProcessingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingOptions.
     */
    distinct?: Enumerable<ProcessingOptionScalarFieldEnum>
  }

  /**
   * ProcessingOption findFirst
   */
  export interface ProcessingOptionFindFirstArgs extends ProcessingOptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProcessingOption findFirstOrThrow
   */
  export type ProcessingOptionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter, which ProcessingOption to fetch.
     */
    where?: ProcessingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingOptions to fetch.
     */
    orderBy?: Enumerable<ProcessingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingOptions.
     */
    cursor?: ProcessingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingOptions.
     */
    distinct?: Enumerable<ProcessingOptionScalarFieldEnum>
  }


  /**
   * ProcessingOption findMany
   */
  export type ProcessingOptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter, which ProcessingOptions to fetch.
     */
    where?: ProcessingOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingOptions to fetch.
     */
    orderBy?: Enumerable<ProcessingOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessingOptions.
     */
    cursor?: ProcessingOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingOptions.
     */
    skip?: number
    distinct?: Enumerable<ProcessingOptionScalarFieldEnum>
  }


  /**
   * ProcessingOption create
   */
  export type ProcessingOptionCreateArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * The data needed to create a ProcessingOption.
     */
    data: XOR<ProcessingOptionCreateInput, ProcessingOptionUncheckedCreateInput>
  }


  /**
   * ProcessingOption createMany
   */
  export type ProcessingOptionCreateManyArgs = {
    /**
     * The data used to create many ProcessingOptions.
     */
    data: Enumerable<ProcessingOptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProcessingOption update
   */
  export type ProcessingOptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * The data needed to update a ProcessingOption.
     */
    data: XOR<ProcessingOptionUpdateInput, ProcessingOptionUncheckedUpdateInput>
    /**
     * Choose, which ProcessingOption to update.
     */
    where: ProcessingOptionWhereUniqueInput
  }


  /**
   * ProcessingOption updateMany
   */
  export type ProcessingOptionUpdateManyArgs = {
    /**
     * The data used to update ProcessingOptions.
     */
    data: XOR<ProcessingOptionUpdateManyMutationInput, ProcessingOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProcessingOptions to update
     */
    where?: ProcessingOptionWhereInput
  }


  /**
   * ProcessingOption upsert
   */
  export type ProcessingOptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * The filter to search for the ProcessingOption to update in case it exists.
     */
    where: ProcessingOptionWhereUniqueInput
    /**
     * In case the ProcessingOption found by the `where` argument doesn't exist, create a new ProcessingOption with this data.
     */
    create: XOR<ProcessingOptionCreateInput, ProcessingOptionUncheckedCreateInput>
    /**
     * In case the ProcessingOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessingOptionUpdateInput, ProcessingOptionUncheckedUpdateInput>
  }


  /**
   * ProcessingOption delete
   */
  export type ProcessingOptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
    /**
     * Filter which ProcessingOption to delete.
     */
    where: ProcessingOptionWhereUniqueInput
  }


  /**
   * ProcessingOption deleteMany
   */
  export type ProcessingOptionDeleteManyArgs = {
    /**
     * Filter which ProcessingOptions to delete
     */
    where?: ProcessingOptionWhereInput
  }


  /**
   * ProcessingOption.locations
   */
  export type ProcessingOption$locationsArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * ProcessingOption without action
   */
  export type ProcessingOptionArgs = {
    /**
     * Select specific fields to fetch from the ProcessingOption
     */
    select?: ProcessingOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProcessingOptionInclude | null
  }



  /**
   * Model Mail
   */


  export type AggregateMail = {
    _count: MailCountAggregateOutputType | null
    _min: MailMinAggregateOutputType | null
    _max: MailMaxAggregateOutputType | null
  }

  export type MailMinAggregateOutputType = {
    id: string | null
    mail_code: string | null
    mail_category_id: string | null
    recipient_address: string | null
    sender_address: string | null
    location_start_id: string | null
    location_end_id: string | null
    time_inserted: Date | null
    time_delivered: Date | null
    mailCarrierId: string | null
  }

  export type MailMaxAggregateOutputType = {
    id: string | null
    mail_code: string | null
    mail_category_id: string | null
    recipient_address: string | null
    sender_address: string | null
    location_start_id: string | null
    location_end_id: string | null
    time_inserted: Date | null
    time_delivered: Date | null
    mailCarrierId: string | null
  }

  export type MailCountAggregateOutputType = {
    id: number
    mail_code: number
    mail_category_id: number
    recipient_address: number
    sender_address: number
    location_start_id: number
    location_end_id: number
    time_inserted: number
    time_delivered: number
    mailCarrierId: number
    _all: number
  }


  export type MailMinAggregateInputType = {
    id?: true
    mail_code?: true
    mail_category_id?: true
    recipient_address?: true
    sender_address?: true
    location_start_id?: true
    location_end_id?: true
    time_inserted?: true
    time_delivered?: true
    mailCarrierId?: true
  }

  export type MailMaxAggregateInputType = {
    id?: true
    mail_code?: true
    mail_category_id?: true
    recipient_address?: true
    sender_address?: true
    location_start_id?: true
    location_end_id?: true
    time_inserted?: true
    time_delivered?: true
    mailCarrierId?: true
  }

  export type MailCountAggregateInputType = {
    id?: true
    mail_code?: true
    mail_category_id?: true
    recipient_address?: true
    sender_address?: true
    location_start_id?: true
    location_end_id?: true
    time_inserted?: true
    time_delivered?: true
    mailCarrierId?: true
    _all?: true
  }

  export type MailAggregateArgs = {
    /**
     * Filter which Mail to aggregate.
     */
    where?: MailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mail to fetch.
     */
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mail
    **/
    _count?: true | MailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailMaxAggregateInputType
  }

  export type GetMailAggregateType<T extends MailAggregateArgs> = {
        [P in keyof T & keyof AggregateMail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMail[P]>
      : GetScalarType<T[P], AggregateMail[P]>
  }




  export type MailGroupByArgs = {
    where?: MailWhereInput
    orderBy?: Enumerable<MailOrderByWithAggregationInput>
    by: MailScalarFieldEnum[]
    having?: MailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailCountAggregateInputType | true
    _min?: MailMinAggregateInputType
    _max?: MailMaxAggregateInputType
  }


  export type MailGroupByOutputType = {
    id: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    location_end_id: string | null
    time_inserted: Date
    time_delivered: Date | null
    mailCarrierId: string
    _count: MailCountAggregateOutputType | null
    _min: MailMinAggregateOutputType | null
    _max: MailMaxAggregateOutputType | null
  }

  type GetMailGroupByPayload<T extends MailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailGroupByOutputType[P]>
            : GetScalarType<T[P], MailGroupByOutputType[P]>
        }
      >
    >


  export type MailSelect = {
    id?: boolean
    mail_code?: boolean
    mail_category_id?: boolean
    recipient_address?: boolean
    sender_address?: boolean
    location_start_id?: boolean
    location_end_id?: boolean
    time_inserted?: boolean
    time_delivered?: boolean
    mailCarrierId?: boolean
    location_start?: boolean | LocationArgs
    location_end?: boolean | LocationArgs
    mailCarrier?: boolean | MailCarrierArgs
  }


  export type MailInclude = {
    location_start?: boolean | LocationArgs
    location_end?: boolean | LocationArgs
    mailCarrier?: boolean | MailCarrierArgs
  }

  export type MailGetPayload<S extends boolean | null | undefined | MailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Mail :
    S extends undefined ? never :
    S extends { include: any } & (MailArgs | MailFindManyArgs)
    ? Mail  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location_start' ? LocationGetPayload<S['include'][P]> :
        P extends 'location_end' ? LocationGetPayload<S['include'][P]> | null :
        P extends 'mailCarrier' ? MailCarrierGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MailArgs | MailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location_start' ? LocationGetPayload<S['select'][P]> :
        P extends 'location_end' ? LocationGetPayload<S['select'][P]> | null :
        P extends 'mailCarrier' ? MailCarrierGetPayload<S['select'][P]> :  P extends keyof Mail ? Mail[P] : never
  } 
      : Mail


  type MailCountArgs = 
    Omit<MailFindManyArgs, 'select' | 'include'> & {
      select?: MailCountAggregateInputType | true
    }

  export interface MailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Mail that matches the filter.
     * @param {MailFindUniqueArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mail'> extends True ? Prisma__MailClient<MailGetPayload<T>> : Prisma__MailClient<MailGetPayload<T> | null, null>

    /**
     * Find one Mail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailFindUniqueOrThrowArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MailFindUniqueOrThrowArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Find the first Mail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailFindFirstArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mail'> extends True ? Prisma__MailClient<MailGetPayload<T>> : Prisma__MailClient<MailGetPayload<T> | null, null>

    /**
     * Find the first Mail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailFindFirstOrThrowArgs} args - Arguments to find a Mail
     * @example
     * // Get one Mail
     * const mail = await prisma.mail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MailFindFirstOrThrowArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Find zero or more Mail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mail
     * const mail = await prisma.mail.findMany()
     * 
     * // Get first 10 Mail
     * const mail = await prisma.mail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailWithIdOnly = await prisma.mail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailFindManyArgs>(
      args?: SelectSubset<T, MailFindManyArgs>
    ): Prisma.PrismaPromise<Array<MailGetPayload<T>>>

    /**
     * Create a Mail.
     * @param {MailCreateArgs} args - Arguments to create a Mail.
     * @example
     * // Create one Mail
     * const Mail = await prisma.mail.create({
     *   data: {
     *     // ... data to create a Mail
     *   }
     * })
     * 
    **/
    create<T extends MailCreateArgs>(
      args: SelectSubset<T, MailCreateArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Create many Mail.
     *     @param {MailCreateManyArgs} args - Arguments to create many Mail.
     *     @example
     *     // Create many Mail
     *     const mail = await prisma.mail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MailCreateManyArgs>(
      args?: SelectSubset<T, MailCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mail.
     * @param {MailDeleteArgs} args - Arguments to delete one Mail.
     * @example
     * // Delete one Mail
     * const Mail = await prisma.mail.delete({
     *   where: {
     *     // ... filter to delete one Mail
     *   }
     * })
     * 
    **/
    delete<T extends MailDeleteArgs>(
      args: SelectSubset<T, MailDeleteArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Update one Mail.
     * @param {MailUpdateArgs} args - Arguments to update one Mail.
     * @example
     * // Update one Mail
     * const mail = await prisma.mail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailUpdateArgs>(
      args: SelectSubset<T, MailUpdateArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Delete zero or more Mail.
     * @param {MailDeleteManyArgs} args - Arguments to filter Mail to delete.
     * @example
     * // Delete a few Mail
     * const { count } = await prisma.mail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailDeleteManyArgs>(
      args?: SelectSubset<T, MailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mail
     * const mail = await prisma.mail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailUpdateManyArgs>(
      args: SelectSubset<T, MailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mail.
     * @param {MailUpsertArgs} args - Arguments to update or create a Mail.
     * @example
     * // Update or create a Mail
     * const mail = await prisma.mail.upsert({
     *   create: {
     *     // ... data to create a Mail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mail we want to update
     *   }
     * })
    **/
    upsert<T extends MailUpsertArgs>(
      args: SelectSubset<T, MailUpsertArgs>
    ): Prisma__MailClient<MailGetPayload<T>>

    /**
     * Count the number of Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCountArgs} args - Arguments to filter Mail to count.
     * @example
     * // Count the number of Mail
     * const count = await prisma.mail.count({
     *   where: {
     *     // ... the filter for the Mail we want to count
     *   }
     * })
    **/
    count<T extends MailCountArgs>(
      args?: Subset<T, MailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailAggregateArgs>(args: Subset<T, MailAggregateArgs>): Prisma.PrismaPromise<GetMailAggregateType<T>>

    /**
     * Group by Mail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailGroupByArgs} args - Group by arguments.
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
      T extends MailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailGroupByArgs['orderBy'] }
        : { orderBy?: MailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MailClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    location_start<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    location_end<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    mailCarrier<T extends MailCarrierArgs= {}>(args?: Subset<T, MailCarrierArgs>): Prisma__MailCarrierClient<MailCarrierGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Mail base type for findUnique actions
   */
  export type MailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter, which Mail to fetch.
     */
    where: MailWhereUniqueInput
  }

  /**
   * Mail findUnique
   */
  export interface MailFindUniqueArgs extends MailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mail findUniqueOrThrow
   */
  export type MailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter, which Mail to fetch.
     */
    where: MailWhereUniqueInput
  }


  /**
   * Mail base type for findFirst actions
   */
  export type MailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter, which Mail to fetch.
     */
    where?: MailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mail to fetch.
     */
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mail.
     */
    cursor?: MailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mail.
     */
    distinct?: Enumerable<MailScalarFieldEnum>
  }

  /**
   * Mail findFirst
   */
  export interface MailFindFirstArgs extends MailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mail findFirstOrThrow
   */
  export type MailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter, which Mail to fetch.
     */
    where?: MailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mail to fetch.
     */
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mail.
     */
    cursor?: MailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mail.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mail.
     */
    distinct?: Enumerable<MailScalarFieldEnum>
  }


  /**
   * Mail findMany
   */
  export type MailFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter, which Mail to fetch.
     */
    where?: MailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mail to fetch.
     */
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mail.
     */
    cursor?: MailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mail from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mail.
     */
    skip?: number
    distinct?: Enumerable<MailScalarFieldEnum>
  }


  /**
   * Mail create
   */
  export type MailCreateArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * The data needed to create a Mail.
     */
    data: XOR<MailCreateInput, MailUncheckedCreateInput>
  }


  /**
   * Mail createMany
   */
  export type MailCreateManyArgs = {
    /**
     * The data used to create many Mail.
     */
    data: Enumerable<MailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mail update
   */
  export type MailUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * The data needed to update a Mail.
     */
    data: XOR<MailUpdateInput, MailUncheckedUpdateInput>
    /**
     * Choose, which Mail to update.
     */
    where: MailWhereUniqueInput
  }


  /**
   * Mail updateMany
   */
  export type MailUpdateManyArgs = {
    /**
     * The data used to update Mail.
     */
    data: XOR<MailUpdateManyMutationInput, MailUncheckedUpdateManyInput>
    /**
     * Filter which Mail to update
     */
    where?: MailWhereInput
  }


  /**
   * Mail upsert
   */
  export type MailUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * The filter to search for the Mail to update in case it exists.
     */
    where: MailWhereUniqueInput
    /**
     * In case the Mail found by the `where` argument doesn't exist, create a new Mail with this data.
     */
    create: XOR<MailCreateInput, MailUncheckedCreateInput>
    /**
     * In case the Mail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailUpdateInput, MailUncheckedUpdateInput>
  }


  /**
   * Mail delete
   */
  export type MailDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    /**
     * Filter which Mail to delete.
     */
    where: MailWhereUniqueInput
  }


  /**
   * Mail deleteMany
   */
  export type MailDeleteManyArgs = {
    /**
     * Filter which Mail to delete
     */
    where?: MailWhereInput
  }


  /**
   * Mail without action
   */
  export type MailArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
  }



  /**
   * Model MailCarrier
   */


  export type AggregateMailCarrier = {
    _count: MailCarrierCountAggregateOutputType | null
    _min: MailCarrierMinAggregateOutputType | null
    _max: MailCarrierMaxAggregateOutputType | null
  }

  export type MailCarrierMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type MailCarrierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    createdBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type MailCarrierCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type MailCarrierMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type MailCarrierMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type MailCarrierCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type MailCarrierAggregateArgs = {
    /**
     * Filter which MailCarrier to aggregate.
     */
    where?: MailCarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailCarriers to fetch.
     */
    orderBy?: Enumerable<MailCarrierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailCarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailCarriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailCarriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailCarriers
    **/
    _count?: true | MailCarrierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailCarrierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailCarrierMaxAggregateInputType
  }

  export type GetMailCarrierAggregateType<T extends MailCarrierAggregateArgs> = {
        [P in keyof T & keyof AggregateMailCarrier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailCarrier[P]>
      : GetScalarType<T[P], AggregateMailCarrier[P]>
  }




  export type MailCarrierGroupByArgs = {
    where?: MailCarrierWhereInput
    orderBy?: Enumerable<MailCarrierOrderByWithAggregationInput>
    by: MailCarrierScalarFieldEnum[]
    having?: MailCarrierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailCarrierCountAggregateInputType | true
    _min?: MailCarrierMinAggregateInputType
    _max?: MailCarrierMaxAggregateInputType
  }


  export type MailCarrierGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    createdBy: string | null
    updatedAt: Date
    updatedBy: string | null
    _count: MailCarrierCountAggregateOutputType | null
    _min: MailCarrierMinAggregateOutputType | null
    _max: MailCarrierMaxAggregateOutputType | null
  }

  type GetMailCarrierGroupByPayload<T extends MailCarrierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MailCarrierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailCarrierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailCarrierGroupByOutputType[P]>
            : GetScalarType<T[P], MailCarrierGroupByOutputType[P]>
        }
      >
    >


  export type MailCarrierSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    mail?: boolean | MailCarrier$mailArgs
    _count?: boolean | MailCarrierCountOutputTypeArgs
  }


  export type MailCarrierInclude = {
    mail?: boolean | MailCarrier$mailArgs
    _count?: boolean | MailCarrierCountOutputTypeArgs
  }

  export type MailCarrierGetPayload<S extends boolean | null | undefined | MailCarrierArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MailCarrier :
    S extends undefined ? never :
    S extends { include: any } & (MailCarrierArgs | MailCarrierFindManyArgs)
    ? MailCarrier  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'mail' ? Array < MailGetPayload<S['include'][P]>>  :
        P extends '_count' ? MailCarrierCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MailCarrierArgs | MailCarrierFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'mail' ? Array < MailGetPayload<S['select'][P]>>  :
        P extends '_count' ? MailCarrierCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof MailCarrier ? MailCarrier[P] : never
  } 
      : MailCarrier


  type MailCarrierCountArgs = 
    Omit<MailCarrierFindManyArgs, 'select' | 'include'> & {
      select?: MailCarrierCountAggregateInputType | true
    }

  export interface MailCarrierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one MailCarrier that matches the filter.
     * @param {MailCarrierFindUniqueArgs} args - Arguments to find a MailCarrier
     * @example
     * // Get one MailCarrier
     * const mailCarrier = await prisma.mailCarrier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MailCarrierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MailCarrierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MailCarrier'> extends True ? Prisma__MailCarrierClient<MailCarrierGetPayload<T>> : Prisma__MailCarrierClient<MailCarrierGetPayload<T> | null, null>

    /**
     * Find one MailCarrier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MailCarrierFindUniqueOrThrowArgs} args - Arguments to find a MailCarrier
     * @example
     * // Get one MailCarrier
     * const mailCarrier = await prisma.mailCarrier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MailCarrierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MailCarrierFindUniqueOrThrowArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Find the first MailCarrier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierFindFirstArgs} args - Arguments to find a MailCarrier
     * @example
     * // Get one MailCarrier
     * const mailCarrier = await prisma.mailCarrier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MailCarrierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MailCarrierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MailCarrier'> extends True ? Prisma__MailCarrierClient<MailCarrierGetPayload<T>> : Prisma__MailCarrierClient<MailCarrierGetPayload<T> | null, null>

    /**
     * Find the first MailCarrier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierFindFirstOrThrowArgs} args - Arguments to find a MailCarrier
     * @example
     * // Get one MailCarrier
     * const mailCarrier = await prisma.mailCarrier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MailCarrierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MailCarrierFindFirstOrThrowArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Find zero or more MailCarriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailCarriers
     * const mailCarriers = await prisma.mailCarrier.findMany()
     * 
     * // Get first 10 MailCarriers
     * const mailCarriers = await prisma.mailCarrier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailCarrierWithIdOnly = await prisma.mailCarrier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MailCarrierFindManyArgs>(
      args?: SelectSubset<T, MailCarrierFindManyArgs>
    ): Prisma.PrismaPromise<Array<MailCarrierGetPayload<T>>>

    /**
     * Create a MailCarrier.
     * @param {MailCarrierCreateArgs} args - Arguments to create a MailCarrier.
     * @example
     * // Create one MailCarrier
     * const MailCarrier = await prisma.mailCarrier.create({
     *   data: {
     *     // ... data to create a MailCarrier
     *   }
     * })
     * 
    **/
    create<T extends MailCarrierCreateArgs>(
      args: SelectSubset<T, MailCarrierCreateArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Create many MailCarriers.
     *     @param {MailCarrierCreateManyArgs} args - Arguments to create many MailCarriers.
     *     @example
     *     // Create many MailCarriers
     *     const mailCarrier = await prisma.mailCarrier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MailCarrierCreateManyArgs>(
      args?: SelectSubset<T, MailCarrierCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MailCarrier.
     * @param {MailCarrierDeleteArgs} args - Arguments to delete one MailCarrier.
     * @example
     * // Delete one MailCarrier
     * const MailCarrier = await prisma.mailCarrier.delete({
     *   where: {
     *     // ... filter to delete one MailCarrier
     *   }
     * })
     * 
    **/
    delete<T extends MailCarrierDeleteArgs>(
      args: SelectSubset<T, MailCarrierDeleteArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Update one MailCarrier.
     * @param {MailCarrierUpdateArgs} args - Arguments to update one MailCarrier.
     * @example
     * // Update one MailCarrier
     * const mailCarrier = await prisma.mailCarrier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MailCarrierUpdateArgs>(
      args: SelectSubset<T, MailCarrierUpdateArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Delete zero or more MailCarriers.
     * @param {MailCarrierDeleteManyArgs} args - Arguments to filter MailCarriers to delete.
     * @example
     * // Delete a few MailCarriers
     * const { count } = await prisma.mailCarrier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MailCarrierDeleteManyArgs>(
      args?: SelectSubset<T, MailCarrierDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailCarriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailCarriers
     * const mailCarrier = await prisma.mailCarrier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MailCarrierUpdateManyArgs>(
      args: SelectSubset<T, MailCarrierUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MailCarrier.
     * @param {MailCarrierUpsertArgs} args - Arguments to update or create a MailCarrier.
     * @example
     * // Update or create a MailCarrier
     * const mailCarrier = await prisma.mailCarrier.upsert({
     *   create: {
     *     // ... data to create a MailCarrier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailCarrier we want to update
     *   }
     * })
    **/
    upsert<T extends MailCarrierUpsertArgs>(
      args: SelectSubset<T, MailCarrierUpsertArgs>
    ): Prisma__MailCarrierClient<MailCarrierGetPayload<T>>

    /**
     * Count the number of MailCarriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierCountArgs} args - Arguments to filter MailCarriers to count.
     * @example
     * // Count the number of MailCarriers
     * const count = await prisma.mailCarrier.count({
     *   where: {
     *     // ... the filter for the MailCarriers we want to count
     *   }
     * })
    **/
    count<T extends MailCarrierCountArgs>(
      args?: Subset<T, MailCarrierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailCarrierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailCarrier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailCarrierAggregateArgs>(args: Subset<T, MailCarrierAggregateArgs>): Prisma.PrismaPromise<GetMailCarrierAggregateType<T>>

    /**
     * Group by MailCarrier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailCarrierGroupByArgs} args - Group by arguments.
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
      T extends MailCarrierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailCarrierGroupByArgs['orderBy'] }
        : { orderBy?: MailCarrierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MailCarrierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailCarrierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MailCarrier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MailCarrierClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    mail<T extends MailCarrier$mailArgs= {}>(args?: Subset<T, MailCarrier$mailArgs>): Prisma.PrismaPromise<Array<MailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MailCarrier base type for findUnique actions
   */
  export type MailCarrierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter, which MailCarrier to fetch.
     */
    where: MailCarrierWhereUniqueInput
  }

  /**
   * MailCarrier findUnique
   */
  export interface MailCarrierFindUniqueArgs extends MailCarrierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MailCarrier findUniqueOrThrow
   */
  export type MailCarrierFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter, which MailCarrier to fetch.
     */
    where: MailCarrierWhereUniqueInput
  }


  /**
   * MailCarrier base type for findFirst actions
   */
  export type MailCarrierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter, which MailCarrier to fetch.
     */
    where?: MailCarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailCarriers to fetch.
     */
    orderBy?: Enumerable<MailCarrierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailCarriers.
     */
    cursor?: MailCarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailCarriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailCarriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailCarriers.
     */
    distinct?: Enumerable<MailCarrierScalarFieldEnum>
  }

  /**
   * MailCarrier findFirst
   */
  export interface MailCarrierFindFirstArgs extends MailCarrierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MailCarrier findFirstOrThrow
   */
  export type MailCarrierFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter, which MailCarrier to fetch.
     */
    where?: MailCarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailCarriers to fetch.
     */
    orderBy?: Enumerable<MailCarrierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailCarriers.
     */
    cursor?: MailCarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailCarriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailCarriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailCarriers.
     */
    distinct?: Enumerable<MailCarrierScalarFieldEnum>
  }


  /**
   * MailCarrier findMany
   */
  export type MailCarrierFindManyArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter, which MailCarriers to fetch.
     */
    where?: MailCarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailCarriers to fetch.
     */
    orderBy?: Enumerable<MailCarrierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailCarriers.
     */
    cursor?: MailCarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailCarriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailCarriers.
     */
    skip?: number
    distinct?: Enumerable<MailCarrierScalarFieldEnum>
  }


  /**
   * MailCarrier create
   */
  export type MailCarrierCreateArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * The data needed to create a MailCarrier.
     */
    data: XOR<MailCarrierCreateInput, MailCarrierUncheckedCreateInput>
  }


  /**
   * MailCarrier createMany
   */
  export type MailCarrierCreateManyArgs = {
    /**
     * The data used to create many MailCarriers.
     */
    data: Enumerable<MailCarrierCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MailCarrier update
   */
  export type MailCarrierUpdateArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * The data needed to update a MailCarrier.
     */
    data: XOR<MailCarrierUpdateInput, MailCarrierUncheckedUpdateInput>
    /**
     * Choose, which MailCarrier to update.
     */
    where: MailCarrierWhereUniqueInput
  }


  /**
   * MailCarrier updateMany
   */
  export type MailCarrierUpdateManyArgs = {
    /**
     * The data used to update MailCarriers.
     */
    data: XOR<MailCarrierUpdateManyMutationInput, MailCarrierUncheckedUpdateManyInput>
    /**
     * Filter which MailCarriers to update
     */
    where?: MailCarrierWhereInput
  }


  /**
   * MailCarrier upsert
   */
  export type MailCarrierUpsertArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * The filter to search for the MailCarrier to update in case it exists.
     */
    where: MailCarrierWhereUniqueInput
    /**
     * In case the MailCarrier found by the `where` argument doesn't exist, create a new MailCarrier with this data.
     */
    create: XOR<MailCarrierCreateInput, MailCarrierUncheckedCreateInput>
    /**
     * In case the MailCarrier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailCarrierUpdateInput, MailCarrierUncheckedUpdateInput>
  }


  /**
   * MailCarrier delete
   */
  export type MailCarrierDeleteArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
    /**
     * Filter which MailCarrier to delete.
     */
    where: MailCarrierWhereUniqueInput
  }


  /**
   * MailCarrier deleteMany
   */
  export type MailCarrierDeleteManyArgs = {
    /**
     * Filter which MailCarriers to delete
     */
    where?: MailCarrierWhereInput
  }


  /**
   * MailCarrier.mail
   */
  export type MailCarrier$mailArgs = {
    /**
     * Select specific fields to fetch from the Mail
     */
    select?: MailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailInclude | null
    where?: MailWhereInput
    orderBy?: Enumerable<MailOrderByWithRelationInput>
    cursor?: MailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MailScalarFieldEnum>
  }


  /**
   * MailCarrier without action
   */
  export type MailCarrierArgs = {
    /**
     * Select specific fields to fetch from the MailCarrier
     */
    select?: MailCarrierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MailCarrierInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    countryId: 'countryId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const CollectingOptionScalarFieldEnum: {
    id: 'id',
    optionName: 'optionName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type CollectingOptionScalarFieldEnum = (typeof CollectingOptionScalarFieldEnum)[keyof typeof CollectingOptionScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    postOfficeInChargeId: 'postOfficeInChargeId',
    LocationTypeId: 'LocationTypeId',
    serviceId: 'serviceId'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type LocationTypeScalarFieldEnum = (typeof LocationTypeScalarFieldEnum)[keyof typeof LocationTypeScalarFieldEnum]


  export const MailCarrierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type MailCarrierScalarFieldEnum = (typeof MailCarrierScalarFieldEnum)[keyof typeof MailCarrierScalarFieldEnum]


  export const MailScalarFieldEnum: {
    id: 'id',
    mail_code: 'mail_code',
    mail_category_id: 'mail_category_id',
    recipient_address: 'recipient_address',
    sender_address: 'sender_address',
    location_start_id: 'location_start_id',
    location_end_id: 'location_end_id',
    time_inserted: 'time_inserted',
    time_delivered: 'time_delivered',
    mailCarrierId: 'mailCarrierId'
  };

  export type MailScalarFieldEnum = (typeof MailScalarFieldEnum)[keyof typeof MailScalarFieldEnum]


  export const PostOfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    contact: 'contact',
    managerId: 'managerId',
    contactPerson: 'contactPerson',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    cityId: 'cityId'
  };

  export type PostOfficeScalarFieldEnum = (typeof PostOfficeScalarFieldEnum)[keyof typeof PostOfficeScalarFieldEnum]


  export const ProcessingOptionScalarFieldEnum: {
    id: 'id',
    optionName: 'optionName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ProcessingOptionScalarFieldEnum = (typeof ProcessingOptionScalarFieldEnum)[keyof typeof ProcessingOptionScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    isGoogleAuth: 'isGoogleAuth',
    isEmailVerified: 'isEmailVerified',
    isDeleted: 'isDeleted',
    isSignedIn: 'isSignedIn',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type UserTypeScalarFieldEnum = (typeof UserTypeScalarFieldEnum)[keyof typeof UserTypeScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    isGoogleAuth?: BoolFilter | boolean
    isEmailVerified?: BoolFilter | boolean
    isDeleted?: BoolFilter | boolean
    isSignedIn?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    userTypes?: UserTypeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isDeleted?: SortOrder
    isSignedIn?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    userTypes?: UserTypeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isDeleted?: SortOrder
    isSignedIn?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    isGoogleAuth?: BoolWithAggregatesFilter | boolean
    isEmailVerified?: BoolWithAggregatesFilter | boolean
    isDeleted?: BoolWithAggregatesFilter | boolean
    isSignedIn?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserTypeWhereInput = {
    AND?: Enumerable<UserTypeWhereInput>
    OR?: Enumerable<UserTypeWhereInput>
    NOT?: Enumerable<UserTypeWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    users?: UserListRelationFilter
  }

  export type UserTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserTypeWhereUniqueInput = {
    id?: string
  }

  export type UserTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: UserTypeCountOrderByAggregateInput
    _max?: UserTypeMaxOrderByAggregateInput
    _min?: UserTypeMinOrderByAggregateInput
  }

  export type UserTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    cities?: CityListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cities?: CityOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = {
    id?: string
  }

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type CityWhereInput = {
    AND?: Enumerable<CityWhereInput>
    OR?: Enumerable<CityWhereInput>
    NOT?: Enumerable<CityWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringFilter | string
    countryId?: StringFilter | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    postOffices?: PostOfficeListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    postOffices?: PostOfficeOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = {
    id?: string
  }

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    countryId?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CityScalarWhereWithAggregatesInput>
    OR?: Enumerable<CityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringWithAggregatesFilter | string
    countryId?: StringWithAggregatesFilter | string
  }

  export type PostOfficeWhereInput = {
    AND?: Enumerable<PostOfficeWhereInput>
    OR?: Enumerable<PostOfficeWhereInput>
    NOT?: Enumerable<PostOfficeWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    address?: StringFilter | string
    contact?: StringFilter | string
    managerId?: StringFilter | string
    contactPerson?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringFilter | string
    cityId?: StringFilter | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    locations?: LocationListRelationFilter
  }

  export type PostOfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    managerId?: SortOrder
    contactPerson?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cityId?: SortOrder
    city?: CityOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
  }

  export type PostOfficeWhereUniqueInput = {
    id?: string
  }

  export type PostOfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    managerId?: SortOrder
    contactPerson?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cityId?: SortOrder
    _count?: PostOfficeCountOrderByAggregateInput
    _max?: PostOfficeMaxOrderByAggregateInput
    _min?: PostOfficeMinOrderByAggregateInput
  }

  export type PostOfficeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostOfficeScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostOfficeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostOfficeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    contact?: StringWithAggregatesFilter | string
    managerId?: StringWithAggregatesFilter | string
    contactPerson?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringWithAggregatesFilter | string
    cityId?: StringWithAggregatesFilter | string
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    postOfficeInChargeId?: StringFilter | string
    LocationTypeId?: StringFilter | string
    serviceId?: StringFilter | string
    postOfficeInCharge?: XOR<PostOfficeRelationFilter, PostOfficeWhereInput>
    LocationType?: XOR<LocationTypeRelationFilter, LocationTypeWhereInput>
    services?: XOR<ServiceRelationFilter, ServiceWhereInput>
    collectingOptions?: CollectingOptionListRelationFilter
    processingOptions?: ProcessingOptionListRelationFilter
    mailStart?: MailListRelationFilter
    mailEnd?: MailListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    postOfficeInChargeId?: SortOrder
    LocationTypeId?: SortOrder
    serviceId?: SortOrder
    postOfficeInCharge?: PostOfficeOrderByWithRelationInput
    LocationType?: LocationTypeOrderByWithRelationInput
    services?: ServiceOrderByWithRelationInput
    collectingOptions?: CollectingOptionOrderByRelationAggregateInput
    processingOptions?: ProcessingOptionOrderByRelationAggregateInput
    mailStart?: MailOrderByRelationAggregateInput
    mailEnd?: MailOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    postOfficeInChargeId?: SortOrder
    LocationTypeId?: SortOrder
    serviceId?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
    postOfficeInChargeId?: StringWithAggregatesFilter | string
    LocationTypeId?: StringWithAggregatesFilter | string
    serviceId?: StringWithAggregatesFilter | string
  }

  export type LocationTypeWhereInput = {
    AND?: Enumerable<LocationTypeWhereInput>
    OR?: Enumerable<LocationTypeWhereInput>
    NOT?: Enumerable<LocationTypeWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    location?: LocationListRelationFilter
  }

  export type LocationTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    location?: LocationOrderByRelationAggregateInput
  }

  export type LocationTypeWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type LocationTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: LocationTypeCountOrderByAggregateInput
    _max?: LocationTypeMaxOrderByAggregateInput
    _min?: LocationTypeMinOrderByAggregateInput
  }

  export type LocationTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationTypeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type ServiceWhereInput = {
    AND?: Enumerable<ServiceWhereInput>
    OR?: Enumerable<ServiceWhereInput>
    NOT?: Enumerable<ServiceWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    isActive?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    location?: LocationListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    location?: LocationOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    isActive?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type CollectingOptionWhereInput = {
    AND?: Enumerable<CollectingOptionWhereInput>
    OR?: Enumerable<CollectingOptionWhereInput>
    NOT?: Enumerable<CollectingOptionWhereInput>
    id?: StringFilter | string
    optionName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    locations?: LocationListRelationFilter
  }

  export type CollectingOptionOrderByWithRelationInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
  }

  export type CollectingOptionWhereUniqueInput = {
    id?: string
    optionName?: string
  }

  export type CollectingOptionOrderByWithAggregationInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: CollectingOptionCountOrderByAggregateInput
    _max?: CollectingOptionMaxOrderByAggregateInput
    _min?: CollectingOptionMinOrderByAggregateInput
  }

  export type CollectingOptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CollectingOptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CollectingOptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CollectingOptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    optionName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProcessingOptionWhereInput = {
    AND?: Enumerable<ProcessingOptionWhereInput>
    OR?: Enumerable<ProcessingOptionWhereInput>
    NOT?: Enumerable<ProcessingOptionWhereInput>
    id?: StringFilter | string
    optionName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    locations?: LocationListRelationFilter
  }

  export type ProcessingOptionOrderByWithRelationInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
  }

  export type ProcessingOptionWhereUniqueInput = {
    id?: string
    optionName?: string
  }

  export type ProcessingOptionOrderByWithAggregationInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: ProcessingOptionCountOrderByAggregateInput
    _max?: ProcessingOptionMaxOrderByAggregateInput
    _min?: ProcessingOptionMinOrderByAggregateInput
  }

  export type ProcessingOptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProcessingOptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProcessingOptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProcessingOptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    optionName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type MailWhereInput = {
    AND?: Enumerable<MailWhereInput>
    OR?: Enumerable<MailWhereInput>
    NOT?: Enumerable<MailWhereInput>
    id?: StringFilter | string
    mail_code?: StringFilter | string
    mail_category_id?: StringFilter | string
    recipient_address?: StringFilter | string
    sender_address?: StringFilter | string
    location_start_id?: StringFilter | string
    location_end_id?: StringNullableFilter | string | null
    time_inserted?: DateTimeFilter | Date | string
    time_delivered?: DateTimeNullableFilter | Date | string | null
    mailCarrierId?: StringFilter | string
    location_start?: XOR<LocationRelationFilter, LocationWhereInput>
    location_end?: XOR<LocationRelationFilter, LocationWhereInput> | null
    mailCarrier?: XOR<MailCarrierRelationFilter, MailCarrierWhereInput>
  }

  export type MailOrderByWithRelationInput = {
    id?: SortOrder
    mail_code?: SortOrder
    mail_category_id?: SortOrder
    recipient_address?: SortOrder
    sender_address?: SortOrder
    location_start_id?: SortOrder
    location_end_id?: SortOrder
    time_inserted?: SortOrder
    time_delivered?: SortOrder
    mailCarrierId?: SortOrder
    location_start?: LocationOrderByWithRelationInput
    location_end?: LocationOrderByWithRelationInput
    mailCarrier?: MailCarrierOrderByWithRelationInput
  }

  export type MailWhereUniqueInput = {
    id?: string
    mail_code?: string
  }

  export type MailOrderByWithAggregationInput = {
    id?: SortOrder
    mail_code?: SortOrder
    mail_category_id?: SortOrder
    recipient_address?: SortOrder
    sender_address?: SortOrder
    location_start_id?: SortOrder
    location_end_id?: SortOrder
    time_inserted?: SortOrder
    time_delivered?: SortOrder
    mailCarrierId?: SortOrder
    _count?: MailCountOrderByAggregateInput
    _max?: MailMaxOrderByAggregateInput
    _min?: MailMinOrderByAggregateInput
  }

  export type MailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MailScalarWhereWithAggregatesInput>
    OR?: Enumerable<MailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MailScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    mail_code?: StringWithAggregatesFilter | string
    mail_category_id?: StringWithAggregatesFilter | string
    recipient_address?: StringWithAggregatesFilter | string
    sender_address?: StringWithAggregatesFilter | string
    location_start_id?: StringWithAggregatesFilter | string
    location_end_id?: StringNullableWithAggregatesFilter | string | null
    time_inserted?: DateTimeWithAggregatesFilter | Date | string
    time_delivered?: DateTimeNullableWithAggregatesFilter | Date | string | null
    mailCarrierId?: StringWithAggregatesFilter | string
  }

  export type MailCarrierWhereInput = {
    AND?: Enumerable<MailCarrierWhereInput>
    OR?: Enumerable<MailCarrierWhereInput>
    NOT?: Enumerable<MailCarrierWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    mail?: MailListRelationFilter
  }

  export type MailCarrierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    mail?: MailOrderByRelationAggregateInput
  }

  export type MailCarrierWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type MailCarrierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    _count?: MailCarrierCountOrderByAggregateInput
    _max?: MailCarrierMaxOrderByAggregateInput
    _min?: MailCarrierMinOrderByAggregateInput
  }

  export type MailCarrierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MailCarrierScalarWhereWithAggregatesInput>
    OR?: Enumerable<MailCarrierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MailCarrierScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    createdBy?: StringNullableWithAggregatesFilter | string | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedBy?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    userTypes?: UserTypeCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    userTypes?: UserTypeUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userTypes?: UserTypeUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userTypes?: UserTypeUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    users?: UserCreateNestedManyWithoutUserTypesInput
  }

  export type UserTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    users?: UserUncheckedCreateNestedManyWithoutUserTypesInput
  }

  export type UserTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutUserTypesNestedInput
  }

  export type UserTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutUserTypesNestedInput
  }

  export type UserTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    cities?: CityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    country: CountryCreateNestedOneWithoutCitiesInput
    postOffices?: PostOfficeCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    countryId: string
    postOffices?: PostOfficeUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    postOffices?: PostOfficeUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    postOffices?: PostOfficeUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    countryId: string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type PostOfficeCreateInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    city: CityCreateNestedOneWithoutPostOfficesInput
    locations?: LocationCreateNestedManyWithoutPostOfficeInChargeInput
  }

  export type PostOfficeUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    cityId: string
    locations?: LocationUncheckedCreateNestedManyWithoutPostOfficeInChargeInput
  }

  export type PostOfficeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutPostOfficesNestedInput
    locations?: LocationUpdateManyWithoutPostOfficeInChargeNestedInput
  }

  export type PostOfficeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    locations?: LocationUncheckedUpdateManyWithoutPostOfficeInChargeNestedInput
  }

  export type PostOfficeCreateManyInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    cityId: string
  }

  export type PostOfficeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type PostOfficeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    location?: LocationCreateNestedManyWithoutLocationTypeInput
  }

  export type LocationTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    location?: LocationUncheckedCreateNestedManyWithoutLocationTypeInput
  }

  export type LocationTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    location?: LocationUpdateManyWithoutLocationTypeNestedInput
  }

  export type LocationTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    location?: LocationUncheckedUpdateManyWithoutLocationTypeNestedInput
  }

  export type LocationTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type LocationTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    location?: LocationCreateNestedManyWithoutServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    location?: LocationUncheckedCreateNestedManyWithoutServicesInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    location?: LocationUpdateManyWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    location?: LocationUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectingOptionCreateInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    locations?: LocationCreateNestedManyWithoutCollectingOptionsInput
  }

  export type CollectingOptionUncheckedCreateInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    locations?: LocationUncheckedCreateNestedManyWithoutCollectingOptionsInput
  }

  export type CollectingOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUpdateManyWithoutCollectingOptionsNestedInput
  }

  export type CollectingOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUncheckedUpdateManyWithoutCollectingOptionsNestedInput
  }

  export type CollectingOptionCreateManyInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CollectingOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectingOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingOptionCreateInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    locations?: LocationCreateNestedManyWithoutProcessingOptionsInput
  }

  export type ProcessingOptionUncheckedCreateInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    locations?: LocationUncheckedCreateNestedManyWithoutProcessingOptionsInput
  }

  export type ProcessingOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUpdateManyWithoutProcessingOptionsNestedInput
  }

  export type ProcessingOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    locations?: LocationUncheckedUpdateManyWithoutProcessingOptionsNestedInput
  }

  export type ProcessingOptionCreateManyInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ProcessingOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailCreateInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    location_start: LocationCreateNestedOneWithoutMailStartInput
    location_end?: LocationCreateNestedOneWithoutMailEndInput
    mailCarrier: MailCarrierCreateNestedOneWithoutMailInput
  }

  export type MailUncheckedCreateInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type MailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_start?: LocationUpdateOneRequiredWithoutMailStartNestedInput
    location_end?: LocationUpdateOneWithoutMailEndNestedInput
    mailCarrier?: MailCarrierUpdateOneRequiredWithoutMailNestedInput
  }

  export type MailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type MailCreateManyInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type MailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type MailCarrierCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    mail?: MailCreateNestedManyWithoutMailCarrierInput
  }

  export type MailCarrierUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    mail?: MailUncheckedCreateNestedManyWithoutMailCarrierInput
  }

  export type MailCarrierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: MailUpdateManyWithoutMailCarrierNestedInput
  }

  export type MailCarrierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: MailUncheckedUpdateManyWithoutMailCarrierNestedInput
  }

  export type MailCarrierCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type MailCarrierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailCarrierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserTypeListRelationFilter = {
    every?: UserTypeWhereInput
    some?: UserTypeWhereInput
    none?: UserTypeWhereInput
  }

  export type UserTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isDeleted?: SortOrder
    isSignedIn?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isDeleted?: SortOrder
    isSignedIn?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isGoogleAuth?: SortOrder
    isEmailVerified?: SortOrder
    isDeleted?: SortOrder
    isSignedIn?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type PostOfficeListRelationFilter = {
    every?: PostOfficeWhereInput
    some?: PostOfficeWhereInput
    none?: PostOfficeWhereInput
  }

  export type PostOfficeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    countryId?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    countryId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    countryId?: SortOrder
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    managerId?: SortOrder
    contactPerson?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cityId?: SortOrder
  }

  export type PostOfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    managerId?: SortOrder
    contactPerson?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cityId?: SortOrder
  }

  export type PostOfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    managerId?: SortOrder
    contactPerson?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    cityId?: SortOrder
  }

  export type PostOfficeRelationFilter = {
    is?: PostOfficeWhereInput
    isNot?: PostOfficeWhereInput
  }

  export type LocationTypeRelationFilter = {
    is?: LocationTypeWhereInput
    isNot?: LocationTypeWhereInput
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type CollectingOptionListRelationFilter = {
    every?: CollectingOptionWhereInput
    some?: CollectingOptionWhereInput
    none?: CollectingOptionWhereInput
  }

  export type ProcessingOptionListRelationFilter = {
    every?: ProcessingOptionWhereInput
    some?: ProcessingOptionWhereInput
    none?: ProcessingOptionWhereInput
  }

  export type MailListRelationFilter = {
    every?: MailWhereInput
    some?: MailWhereInput
    none?: MailWhereInput
  }

  export type CollectingOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessingOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    postOfficeInChargeId?: SortOrder
    LocationTypeId?: SortOrder
    serviceId?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    postOfficeInChargeId?: SortOrder
    LocationTypeId?: SortOrder
    serviceId?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    postOfficeInChargeId?: SortOrder
    LocationTypeId?: SortOrder
    serviceId?: SortOrder
  }

  export type LocationTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type LocationTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type LocationTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CollectingOptionCountOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CollectingOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type CollectingOptionMinOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProcessingOptionCountOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProcessingOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ProcessingOptionMinOrderByAggregateInput = {
    id?: SortOrder
    optionName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type MailCarrierRelationFilter = {
    is?: MailCarrierWhereInput
    isNot?: MailCarrierWhereInput
  }

  export type MailCountOrderByAggregateInput = {
    id?: SortOrder
    mail_code?: SortOrder
    mail_category_id?: SortOrder
    recipient_address?: SortOrder
    sender_address?: SortOrder
    location_start_id?: SortOrder
    location_end_id?: SortOrder
    time_inserted?: SortOrder
    time_delivered?: SortOrder
    mailCarrierId?: SortOrder
  }

  export type MailMaxOrderByAggregateInput = {
    id?: SortOrder
    mail_code?: SortOrder
    mail_category_id?: SortOrder
    recipient_address?: SortOrder
    sender_address?: SortOrder
    location_start_id?: SortOrder
    location_end_id?: SortOrder
    time_inserted?: SortOrder
    time_delivered?: SortOrder
    mailCarrierId?: SortOrder
  }

  export type MailMinOrderByAggregateInput = {
    id?: SortOrder
    mail_code?: SortOrder
    mail_category_id?: SortOrder
    recipient_address?: SortOrder
    sender_address?: SortOrder
    location_start_id?: SortOrder
    location_end_id?: SortOrder
    time_inserted?: SortOrder
    time_delivered?: SortOrder
    mailCarrierId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type MailCarrierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type MailCarrierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type MailCarrierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserTypeCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserTypeCreateWithoutUsersInput>, Enumerable<UserTypeUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserTypeCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<UserTypeWhereUniqueInput>
  }

  export type UserTypeUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<UserTypeCreateWithoutUsersInput>, Enumerable<UserTypeUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserTypeCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<UserTypeWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserTypeUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<UserTypeCreateWithoutUsersInput>, Enumerable<UserTypeUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserTypeCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserTypeUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<UserTypeWhereUniqueInput>
    disconnect?: Enumerable<UserTypeWhereUniqueInput>
    delete?: Enumerable<UserTypeWhereUniqueInput>
    connect?: Enumerable<UserTypeWhereUniqueInput>
    update?: Enumerable<UserTypeUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserTypeUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserTypeScalarWhereInput>
  }

  export type UserTypeUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<UserTypeCreateWithoutUsersInput>, Enumerable<UserTypeUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<UserTypeCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<UserTypeUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<UserTypeWhereUniqueInput>
    disconnect?: Enumerable<UserTypeWhereUniqueInput>
    delete?: Enumerable<UserTypeWhereUniqueInput>
    connect?: Enumerable<UserTypeWhereUniqueInput>
    update?: Enumerable<UserTypeUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<UserTypeUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<UserTypeScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutUserTypesInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserTypesInput>, Enumerable<UserUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserTypesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutUserTypesInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserTypesInput>, Enumerable<UserUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserTypesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutUserTypesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserTypesInput>, Enumerable<UserUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserTypesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserTypesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserTypesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserTypesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutUserTypesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUserTypesInput>, Enumerable<UserUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUserTypesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUserTypesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUserTypesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUserTypesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CityCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<CityCreateWithoutCountryInput>, Enumerable<CityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutCountryInput>
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: Enumerable<CityWhereUniqueInput>
  }

  export type CityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<CityCreateWithoutCountryInput>, Enumerable<CityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutCountryInput>
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: Enumerable<CityWhereUniqueInput>
  }

  export type CityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<CityCreateWithoutCountryInput>, Enumerable<CityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<CityUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: CityCreateManyCountryInputEnvelope
    set?: Enumerable<CityWhereUniqueInput>
    disconnect?: Enumerable<CityWhereUniqueInput>
    delete?: Enumerable<CityWhereUniqueInput>
    connect?: Enumerable<CityWhereUniqueInput>
    update?: Enumerable<CityUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<CityUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<CityScalarWhereInput>
  }

  export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<CityCreateWithoutCountryInput>, Enumerable<CityUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<CityCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<CityUpsertWithWhereUniqueWithoutCountryInput>
    createMany?: CityCreateManyCountryInputEnvelope
    set?: Enumerable<CityWhereUniqueInput>
    disconnect?: Enumerable<CityWhereUniqueInput>
    delete?: Enumerable<CityWhereUniqueInput>
    connect?: Enumerable<CityWhereUniqueInput>
    update?: Enumerable<CityUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<CityUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<CityScalarWhereInput>
  }

  export type CountryCreateNestedOneWithoutCitiesInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    connect?: CountryWhereUniqueInput
  }

  export type PostOfficeCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<PostOfficeCreateWithoutCityInput>, Enumerable<PostOfficeUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<PostOfficeCreateOrConnectWithoutCityInput>
    createMany?: PostOfficeCreateManyCityInputEnvelope
    connect?: Enumerable<PostOfficeWhereUniqueInput>
  }

  export type PostOfficeUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<PostOfficeCreateWithoutCityInput>, Enumerable<PostOfficeUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<PostOfficeCreateOrConnectWithoutCityInput>
    createMany?: PostOfficeCreateManyCityInputEnvelope
    connect?: Enumerable<PostOfficeWhereUniqueInput>
  }

  export type CountryUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    upsert?: CountryUpsertWithoutCitiesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type PostOfficeUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<PostOfficeCreateWithoutCityInput>, Enumerable<PostOfficeUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<PostOfficeCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<PostOfficeUpsertWithWhereUniqueWithoutCityInput>
    createMany?: PostOfficeCreateManyCityInputEnvelope
    set?: Enumerable<PostOfficeWhereUniqueInput>
    disconnect?: Enumerable<PostOfficeWhereUniqueInput>
    delete?: Enumerable<PostOfficeWhereUniqueInput>
    connect?: Enumerable<PostOfficeWhereUniqueInput>
    update?: Enumerable<PostOfficeUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<PostOfficeUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<PostOfficeScalarWhereInput>
  }

  export type PostOfficeUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<PostOfficeCreateWithoutCityInput>, Enumerable<PostOfficeUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<PostOfficeCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<PostOfficeUpsertWithWhereUniqueWithoutCityInput>
    createMany?: PostOfficeCreateManyCityInputEnvelope
    set?: Enumerable<PostOfficeWhereUniqueInput>
    disconnect?: Enumerable<PostOfficeWhereUniqueInput>
    delete?: Enumerable<PostOfficeWhereUniqueInput>
    connect?: Enumerable<PostOfficeWhereUniqueInput>
    update?: Enumerable<PostOfficeUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<PostOfficeUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<PostOfficeScalarWhereInput>
  }

  export type CityCreateNestedOneWithoutPostOfficesInput = {
    create?: XOR<CityCreateWithoutPostOfficesInput, CityUncheckedCreateWithoutPostOfficesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPostOfficesInput
    connect?: CityWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutPostOfficeInChargeInput = {
    create?: XOR<Enumerable<LocationCreateWithoutPostOfficeInChargeInput>, Enumerable<LocationUncheckedCreateWithoutPostOfficeInChargeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutPostOfficeInChargeInput>
    createMany?: LocationCreateManyPostOfficeInChargeInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutPostOfficeInChargeInput = {
    create?: XOR<Enumerable<LocationCreateWithoutPostOfficeInChargeInput>, Enumerable<LocationUncheckedCreateWithoutPostOfficeInChargeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutPostOfficeInChargeInput>
    createMany?: LocationCreateManyPostOfficeInChargeInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type CityUpdateOneRequiredWithoutPostOfficesNestedInput = {
    create?: XOR<CityCreateWithoutPostOfficesInput, CityUncheckedCreateWithoutPostOfficesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPostOfficesInput
    upsert?: CityUpsertWithoutPostOfficesInput
    connect?: CityWhereUniqueInput
    update?: XOR<CityUpdateWithoutPostOfficesInput, CityUncheckedUpdateWithoutPostOfficesInput>
  }

  export type LocationUpdateManyWithoutPostOfficeInChargeNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutPostOfficeInChargeInput>, Enumerable<LocationUncheckedCreateWithoutPostOfficeInChargeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutPostOfficeInChargeInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutPostOfficeInChargeInput>
    createMany?: LocationCreateManyPostOfficeInChargeInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutPostOfficeInChargeInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutPostOfficeInChargeInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationUncheckedUpdateManyWithoutPostOfficeInChargeNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutPostOfficeInChargeInput>, Enumerable<LocationUncheckedCreateWithoutPostOfficeInChargeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutPostOfficeInChargeInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutPostOfficeInChargeInput>
    createMany?: LocationCreateManyPostOfficeInChargeInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutPostOfficeInChargeInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutPostOfficeInChargeInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type PostOfficeCreateNestedOneWithoutLocationsInput = {
    create?: XOR<PostOfficeCreateWithoutLocationsInput, PostOfficeUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: PostOfficeCreateOrConnectWithoutLocationsInput
    connect?: PostOfficeWhereUniqueInput
  }

  export type LocationTypeCreateNestedOneWithoutLocationInput = {
    create?: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
    connectOrCreate?: LocationTypeCreateOrConnectWithoutLocationInput
    connect?: LocationTypeWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutLocationInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput
    connect?: ServiceWhereUniqueInput
  }

  export type CollectingOptionCreateNestedManyWithoutLocationsInput = {
    create?: XOR<Enumerable<CollectingOptionCreateWithoutLocationsInput>, Enumerable<CollectingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<CollectingOptionCreateOrConnectWithoutLocationsInput>
    connect?: Enumerable<CollectingOptionWhereUniqueInput>
  }

  export type ProcessingOptionCreateNestedManyWithoutLocationsInput = {
    create?: XOR<Enumerable<ProcessingOptionCreateWithoutLocationsInput>, Enumerable<ProcessingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<ProcessingOptionCreateOrConnectWithoutLocationsInput>
    connect?: Enumerable<ProcessingOptionWhereUniqueInput>
  }

  export type MailCreateNestedManyWithoutLocation_startInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_startInput>, Enumerable<MailUncheckedCreateWithoutLocation_startInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_startInput>
    createMany?: MailCreateManyLocation_startInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type MailCreateNestedManyWithoutLocation_endInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_endInput>, Enumerable<MailUncheckedCreateWithoutLocation_endInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_endInput>
    createMany?: MailCreateManyLocation_endInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<Enumerable<CollectingOptionCreateWithoutLocationsInput>, Enumerable<CollectingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<CollectingOptionCreateOrConnectWithoutLocationsInput>
    connect?: Enumerable<CollectingOptionWhereUniqueInput>
  }

  export type ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<Enumerable<ProcessingOptionCreateWithoutLocationsInput>, Enumerable<ProcessingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<ProcessingOptionCreateOrConnectWithoutLocationsInput>
    connect?: Enumerable<ProcessingOptionWhereUniqueInput>
  }

  export type MailUncheckedCreateNestedManyWithoutLocation_startInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_startInput>, Enumerable<MailUncheckedCreateWithoutLocation_startInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_startInput>
    createMany?: MailCreateManyLocation_startInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type MailUncheckedCreateNestedManyWithoutLocation_endInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_endInput>, Enumerable<MailUncheckedCreateWithoutLocation_endInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_endInput>
    createMany?: MailCreateManyLocation_endInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type PostOfficeUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<PostOfficeCreateWithoutLocationsInput, PostOfficeUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: PostOfficeCreateOrConnectWithoutLocationsInput
    upsert?: PostOfficeUpsertWithoutLocationsInput
    connect?: PostOfficeWhereUniqueInput
    update?: XOR<PostOfficeUpdateWithoutLocationsInput, PostOfficeUncheckedUpdateWithoutLocationsInput>
  }

  export type LocationTypeUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
    connectOrCreate?: LocationTypeCreateOrConnectWithoutLocationInput
    upsert?: LocationTypeUpsertWithoutLocationInput
    connect?: LocationTypeWhereUniqueInput
    update?: XOR<LocationTypeUpdateWithoutLocationInput, LocationTypeUncheckedUpdateWithoutLocationInput>
  }

  export type ServiceUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutLocationInput
    upsert?: ServiceUpsertWithoutLocationInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<ServiceUpdateWithoutLocationInput, ServiceUncheckedUpdateWithoutLocationInput>
  }

  export type CollectingOptionUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<Enumerable<CollectingOptionCreateWithoutLocationsInput>, Enumerable<CollectingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<CollectingOptionCreateOrConnectWithoutLocationsInput>
    upsert?: Enumerable<CollectingOptionUpsertWithWhereUniqueWithoutLocationsInput>
    set?: Enumerable<CollectingOptionWhereUniqueInput>
    disconnect?: Enumerable<CollectingOptionWhereUniqueInput>
    delete?: Enumerable<CollectingOptionWhereUniqueInput>
    connect?: Enumerable<CollectingOptionWhereUniqueInput>
    update?: Enumerable<CollectingOptionUpdateWithWhereUniqueWithoutLocationsInput>
    updateMany?: Enumerable<CollectingOptionUpdateManyWithWhereWithoutLocationsInput>
    deleteMany?: Enumerable<CollectingOptionScalarWhereInput>
  }

  export type ProcessingOptionUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<Enumerable<ProcessingOptionCreateWithoutLocationsInput>, Enumerable<ProcessingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<ProcessingOptionCreateOrConnectWithoutLocationsInput>
    upsert?: Enumerable<ProcessingOptionUpsertWithWhereUniqueWithoutLocationsInput>
    set?: Enumerable<ProcessingOptionWhereUniqueInput>
    disconnect?: Enumerable<ProcessingOptionWhereUniqueInput>
    delete?: Enumerable<ProcessingOptionWhereUniqueInput>
    connect?: Enumerable<ProcessingOptionWhereUniqueInput>
    update?: Enumerable<ProcessingOptionUpdateWithWhereUniqueWithoutLocationsInput>
    updateMany?: Enumerable<ProcessingOptionUpdateManyWithWhereWithoutLocationsInput>
    deleteMany?: Enumerable<ProcessingOptionScalarWhereInput>
  }

  export type MailUpdateManyWithoutLocation_startNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_startInput>, Enumerable<MailUncheckedCreateWithoutLocation_startInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_startInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutLocation_startInput>
    createMany?: MailCreateManyLocation_startInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutLocation_startInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutLocation_startInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type MailUpdateManyWithoutLocation_endNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_endInput>, Enumerable<MailUncheckedCreateWithoutLocation_endInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_endInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutLocation_endInput>
    createMany?: MailCreateManyLocation_endInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutLocation_endInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutLocation_endInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<Enumerable<CollectingOptionCreateWithoutLocationsInput>, Enumerable<CollectingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<CollectingOptionCreateOrConnectWithoutLocationsInput>
    upsert?: Enumerable<CollectingOptionUpsertWithWhereUniqueWithoutLocationsInput>
    set?: Enumerable<CollectingOptionWhereUniqueInput>
    disconnect?: Enumerable<CollectingOptionWhereUniqueInput>
    delete?: Enumerable<CollectingOptionWhereUniqueInput>
    connect?: Enumerable<CollectingOptionWhereUniqueInput>
    update?: Enumerable<CollectingOptionUpdateWithWhereUniqueWithoutLocationsInput>
    updateMany?: Enumerable<CollectingOptionUpdateManyWithWhereWithoutLocationsInput>
    deleteMany?: Enumerable<CollectingOptionScalarWhereInput>
  }

  export type ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<Enumerable<ProcessingOptionCreateWithoutLocationsInput>, Enumerable<ProcessingOptionUncheckedCreateWithoutLocationsInput>>
    connectOrCreate?: Enumerable<ProcessingOptionCreateOrConnectWithoutLocationsInput>
    upsert?: Enumerable<ProcessingOptionUpsertWithWhereUniqueWithoutLocationsInput>
    set?: Enumerable<ProcessingOptionWhereUniqueInput>
    disconnect?: Enumerable<ProcessingOptionWhereUniqueInput>
    delete?: Enumerable<ProcessingOptionWhereUniqueInput>
    connect?: Enumerable<ProcessingOptionWhereUniqueInput>
    update?: Enumerable<ProcessingOptionUpdateWithWhereUniqueWithoutLocationsInput>
    updateMany?: Enumerable<ProcessingOptionUpdateManyWithWhereWithoutLocationsInput>
    deleteMany?: Enumerable<ProcessingOptionScalarWhereInput>
  }

  export type MailUncheckedUpdateManyWithoutLocation_startNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_startInput>, Enumerable<MailUncheckedCreateWithoutLocation_startInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_startInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutLocation_startInput>
    createMany?: MailCreateManyLocation_startInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutLocation_startInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutLocation_startInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type MailUncheckedUpdateManyWithoutLocation_endNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutLocation_endInput>, Enumerable<MailUncheckedCreateWithoutLocation_endInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutLocation_endInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutLocation_endInput>
    createMany?: MailCreateManyLocation_endInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutLocation_endInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutLocation_endInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type LocationCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<Enumerable<LocationCreateWithoutLocationTypeInput>, Enumerable<LocationUncheckedCreateWithoutLocationTypeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutLocationTypeInput>
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutLocationTypeInput = {
    create?: XOR<Enumerable<LocationCreateWithoutLocationTypeInput>, Enumerable<LocationUncheckedCreateWithoutLocationTypeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutLocationTypeInput>
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutLocationTypeInput>, Enumerable<LocationUncheckedCreateWithoutLocationTypeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutLocationTypeInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutLocationTypeInput>
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutLocationTypeInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutLocationTypeInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationUncheckedUpdateManyWithoutLocationTypeNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutLocationTypeInput>, Enumerable<LocationUncheckedCreateWithoutLocationTypeInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutLocationTypeInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutLocationTypeInput>
    createMany?: LocationCreateManyLocationTypeInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutLocationTypeInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutLocationTypeInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationCreateNestedManyWithoutServicesInput = {
    create?: XOR<Enumerable<LocationCreateWithoutServicesInput>, Enumerable<LocationUncheckedCreateWithoutServicesInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutServicesInput>
    createMany?: LocationCreateManyServicesInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<Enumerable<LocationCreateWithoutServicesInput>, Enumerable<LocationUncheckedCreateWithoutServicesInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutServicesInput>
    createMany?: LocationCreateManyServicesInputEnvelope
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUpdateManyWithoutServicesNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutServicesInput>, Enumerable<LocationUncheckedCreateWithoutServicesInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutServicesInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutServicesInput>
    createMany?: LocationCreateManyServicesInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutServicesInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutServicesInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutServicesInput>, Enumerable<LocationUncheckedCreateWithoutServicesInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutServicesInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutServicesInput>
    createMany?: LocationCreateManyServicesInputEnvelope
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutServicesInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutServicesInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationCreateNestedManyWithoutCollectingOptionsInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCollectingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutCollectingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCollectingOptionsInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutCollectingOptionsInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCollectingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutCollectingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCollectingOptionsInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUpdateManyWithoutCollectingOptionsNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCollectingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutCollectingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCollectingOptionsInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutCollectingOptionsInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutCollectingOptionsInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutCollectingOptionsInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationUncheckedUpdateManyWithoutCollectingOptionsNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCollectingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutCollectingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCollectingOptionsInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutCollectingOptionsInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutCollectingOptionsInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutCollectingOptionsInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationCreateNestedManyWithoutProcessingOptionsInput = {
    create?: XOR<Enumerable<LocationCreateWithoutProcessingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutProcessingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutProcessingOptionsInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutProcessingOptionsInput = {
    create?: XOR<Enumerable<LocationCreateWithoutProcessingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutProcessingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutProcessingOptionsInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUpdateManyWithoutProcessingOptionsNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutProcessingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutProcessingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutProcessingOptionsInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutProcessingOptionsInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutProcessingOptionsInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutProcessingOptionsInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationUncheckedUpdateManyWithoutProcessingOptionsNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutProcessingOptionsInput>, Enumerable<LocationUncheckedCreateWithoutProcessingOptionsInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutProcessingOptionsInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutProcessingOptionsInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutProcessingOptionsInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutProcessingOptionsInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationCreateNestedOneWithoutMailStartInput = {
    create?: XOR<LocationCreateWithoutMailStartInput, LocationUncheckedCreateWithoutMailStartInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMailStartInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutMailEndInput = {
    create?: XOR<LocationCreateWithoutMailEndInput, LocationUncheckedCreateWithoutMailEndInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMailEndInput
    connect?: LocationWhereUniqueInput
  }

  export type MailCarrierCreateNestedOneWithoutMailInput = {
    create?: XOR<MailCarrierCreateWithoutMailInput, MailCarrierUncheckedCreateWithoutMailInput>
    connectOrCreate?: MailCarrierCreateOrConnectWithoutMailInput
    connect?: MailCarrierWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LocationUpdateOneRequiredWithoutMailStartNestedInput = {
    create?: XOR<LocationCreateWithoutMailStartInput, LocationUncheckedCreateWithoutMailStartInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMailStartInput
    upsert?: LocationUpsertWithoutMailStartInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutMailStartInput, LocationUncheckedUpdateWithoutMailStartInput>
  }

  export type LocationUpdateOneWithoutMailEndNestedInput = {
    create?: XOR<LocationCreateWithoutMailEndInput, LocationUncheckedCreateWithoutMailEndInput>
    connectOrCreate?: LocationCreateOrConnectWithoutMailEndInput
    upsert?: LocationUpsertWithoutMailEndInput
    disconnect?: boolean
    delete?: boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutMailEndInput, LocationUncheckedUpdateWithoutMailEndInput>
  }

  export type MailCarrierUpdateOneRequiredWithoutMailNestedInput = {
    create?: XOR<MailCarrierCreateWithoutMailInput, MailCarrierUncheckedCreateWithoutMailInput>
    connectOrCreate?: MailCarrierCreateOrConnectWithoutMailInput
    upsert?: MailCarrierUpsertWithoutMailInput
    connect?: MailCarrierWhereUniqueInput
    update?: XOR<MailCarrierUpdateWithoutMailInput, MailCarrierUncheckedUpdateWithoutMailInput>
  }

  export type MailCreateNestedManyWithoutMailCarrierInput = {
    create?: XOR<Enumerable<MailCreateWithoutMailCarrierInput>, Enumerable<MailUncheckedCreateWithoutMailCarrierInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutMailCarrierInput>
    createMany?: MailCreateManyMailCarrierInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type MailUncheckedCreateNestedManyWithoutMailCarrierInput = {
    create?: XOR<Enumerable<MailCreateWithoutMailCarrierInput>, Enumerable<MailUncheckedCreateWithoutMailCarrierInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutMailCarrierInput>
    createMany?: MailCreateManyMailCarrierInputEnvelope
    connect?: Enumerable<MailWhereUniqueInput>
  }

  export type MailUpdateManyWithoutMailCarrierNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutMailCarrierInput>, Enumerable<MailUncheckedCreateWithoutMailCarrierInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutMailCarrierInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutMailCarrierInput>
    createMany?: MailCreateManyMailCarrierInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutMailCarrierInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutMailCarrierInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type MailUncheckedUpdateManyWithoutMailCarrierNestedInput = {
    create?: XOR<Enumerable<MailCreateWithoutMailCarrierInput>, Enumerable<MailUncheckedCreateWithoutMailCarrierInput>>
    connectOrCreate?: Enumerable<MailCreateOrConnectWithoutMailCarrierInput>
    upsert?: Enumerable<MailUpsertWithWhereUniqueWithoutMailCarrierInput>
    createMany?: MailCreateManyMailCarrierInputEnvelope
    set?: Enumerable<MailWhereUniqueInput>
    disconnect?: Enumerable<MailWhereUniqueInput>
    delete?: Enumerable<MailWhereUniqueInput>
    connect?: Enumerable<MailWhereUniqueInput>
    update?: Enumerable<MailUpdateWithWhereUniqueWithoutMailCarrierInput>
    updateMany?: Enumerable<MailUpdateManyWithWhereWithoutMailCarrierInput>
    deleteMany?: Enumerable<MailScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type UserTypeCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserTypeUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserTypeCreateOrConnectWithoutUsersInput = {
    where: UserTypeWhereUniqueInput
    create: XOR<UserTypeCreateWithoutUsersInput, UserTypeUncheckedCreateWithoutUsersInput>
  }

  export type UserTypeUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserTypeWhereUniqueInput
    update: XOR<UserTypeUpdateWithoutUsersInput, UserTypeUncheckedUpdateWithoutUsersInput>
    create: XOR<UserTypeCreateWithoutUsersInput, UserTypeUncheckedCreateWithoutUsersInput>
  }

  export type UserTypeUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserTypeWhereUniqueInput
    data: XOR<UserTypeUpdateWithoutUsersInput, UserTypeUncheckedUpdateWithoutUsersInput>
  }

  export type UserTypeUpdateManyWithWhereWithoutUsersInput = {
    where: UserTypeScalarWhereInput
    data: XOR<UserTypeUpdateManyMutationInput, UserTypeUncheckedUpdateManyWithoutUserTypesInput>
  }

  export type UserTypeScalarWhereInput = {
    AND?: Enumerable<UserTypeScalarWhereInput>
    OR?: Enumerable<UserTypeScalarWhereInput>
    NOT?: Enumerable<UserTypeScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutUserTypesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserUncheckedCreateWithoutUserTypesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    isGoogleAuth?: boolean
    isEmailVerified?: boolean
    isDeleted?: boolean
    isSignedIn?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type UserCreateOrConnectWithoutUserTypesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTypesInput, UserUncheckedCreateWithoutUserTypesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutUserTypesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserTypesInput, UserUncheckedUpdateWithoutUserTypesInput>
    create: XOR<UserCreateWithoutUserTypesInput, UserUncheckedCreateWithoutUserTypesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserTypesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserTypesInput, UserUncheckedUpdateWithoutUserTypesInput>
  }

  export type UserUpdateManyWithWhereWithoutUserTypesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    isGoogleAuth?: BoolFilter | boolean
    isEmailVerified?: BoolFilter | boolean
    isDeleted?: BoolFilter | boolean
    isSignedIn?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
  }

  export type CityCreateWithoutCountryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    postOffices?: PostOfficeCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    postOffices?: PostOfficeUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCountryInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityCreateManyCountryInputEnvelope = {
    data: Enumerable<CityCreateManyCountryInput>
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
  }

  export type CityUpdateManyWithWhereWithoutCountryInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCitiesInput>
  }

  export type CityScalarWhereInput = {
    AND?: Enumerable<CityScalarWhereInput>
    OR?: Enumerable<CityScalarWhereInput>
    NOT?: Enumerable<CityScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringFilter | string
    countryId?: StringFilter | string
  }

  export type CountryCreateWithoutCitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CountryUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CountryCreateOrConnectWithoutCitiesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
  }

  export type PostOfficeCreateWithoutCityInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    locations?: LocationCreateNestedManyWithoutPostOfficeInChargeInput
  }

  export type PostOfficeUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    locations?: LocationUncheckedCreateNestedManyWithoutPostOfficeInChargeInput
  }

  export type PostOfficeCreateOrConnectWithoutCityInput = {
    where: PostOfficeWhereUniqueInput
    create: XOR<PostOfficeCreateWithoutCityInput, PostOfficeUncheckedCreateWithoutCityInput>
  }

  export type PostOfficeCreateManyCityInputEnvelope = {
    data: Enumerable<PostOfficeCreateManyCityInput>
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutCitiesInput = {
    update: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
  }

  export type CountryUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostOfficeUpsertWithWhereUniqueWithoutCityInput = {
    where: PostOfficeWhereUniqueInput
    update: XOR<PostOfficeUpdateWithoutCityInput, PostOfficeUncheckedUpdateWithoutCityInput>
    create: XOR<PostOfficeCreateWithoutCityInput, PostOfficeUncheckedCreateWithoutCityInput>
  }

  export type PostOfficeUpdateWithWhereUniqueWithoutCityInput = {
    where: PostOfficeWhereUniqueInput
    data: XOR<PostOfficeUpdateWithoutCityInput, PostOfficeUncheckedUpdateWithoutCityInput>
  }

  export type PostOfficeUpdateManyWithWhereWithoutCityInput = {
    where: PostOfficeScalarWhereInput
    data: XOR<PostOfficeUpdateManyMutationInput, PostOfficeUncheckedUpdateManyWithoutPostOfficesInput>
  }

  export type PostOfficeScalarWhereInput = {
    AND?: Enumerable<PostOfficeScalarWhereInput>
    OR?: Enumerable<PostOfficeScalarWhereInput>
    NOT?: Enumerable<PostOfficeScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    address?: StringFilter | string
    contact?: StringFilter | string
    managerId?: StringFilter | string
    contactPerson?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringFilter | string
    cityId?: StringFilter | string
  }

  export type CityCreateWithoutPostOfficesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    country: CountryCreateNestedOneWithoutCitiesInput
  }

  export type CityUncheckedCreateWithoutPostOfficesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    countryId: string
  }

  export type CityCreateOrConnectWithoutPostOfficesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPostOfficesInput, CityUncheckedCreateWithoutPostOfficesInput>
  }

  export type LocationCreateWithoutPostOfficeInChargeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutPostOfficeInChargeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    LocationTypeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutPostOfficeInChargeInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPostOfficeInChargeInput, LocationUncheckedCreateWithoutPostOfficeInChargeInput>
  }

  export type LocationCreateManyPostOfficeInChargeInputEnvelope = {
    data: Enumerable<LocationCreateManyPostOfficeInChargeInput>
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutPostOfficesInput = {
    update: XOR<CityUpdateWithoutPostOfficesInput, CityUncheckedUpdateWithoutPostOfficesInput>
    create: XOR<CityCreateWithoutPostOfficesInput, CityUncheckedCreateWithoutPostOfficesInput>
  }

  export type CityUpdateWithoutPostOfficesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type CityUncheckedUpdateWithoutPostOfficesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpsertWithWhereUniqueWithoutPostOfficeInChargeInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutPostOfficeInChargeInput, LocationUncheckedUpdateWithoutPostOfficeInChargeInput>
    create: XOR<LocationCreateWithoutPostOfficeInChargeInput, LocationUncheckedCreateWithoutPostOfficeInChargeInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutPostOfficeInChargeInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutPostOfficeInChargeInput, LocationUncheckedUpdateWithoutPostOfficeInChargeInput>
  }

  export type LocationUpdateManyWithWhereWithoutPostOfficeInChargeInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationsInput>
  }

  export type LocationScalarWhereInput = {
    AND?: Enumerable<LocationScalarWhereInput>
    OR?: Enumerable<LocationScalarWhereInput>
    NOT?: Enumerable<LocationScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
    postOfficeInChargeId?: StringFilter | string
    LocationTypeId?: StringFilter | string
    serviceId?: StringFilter | string
  }

  export type PostOfficeCreateWithoutLocationsInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    city: CityCreateNestedOneWithoutPostOfficesInput
  }

  export type PostOfficeUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
    cityId: string
  }

  export type PostOfficeCreateOrConnectWithoutLocationsInput = {
    where: PostOfficeWhereUniqueInput
    create: XOR<PostOfficeCreateWithoutLocationsInput, PostOfficeUncheckedCreateWithoutLocationsInput>
  }

  export type LocationTypeCreateWithoutLocationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type LocationTypeUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type LocationTypeCreateOrConnectWithoutLocationInput = {
    where: LocationTypeWhereUniqueInput
    create: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
  }

  export type ServiceCreateWithoutLocationInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ServiceUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ServiceCreateOrConnectWithoutLocationInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
  }

  export type CollectingOptionCreateWithoutLocationsInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CollectingOptionUncheckedCreateWithoutLocationsInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type CollectingOptionCreateOrConnectWithoutLocationsInput = {
    where: CollectingOptionWhereUniqueInput
    create: XOR<CollectingOptionCreateWithoutLocationsInput, CollectingOptionUncheckedCreateWithoutLocationsInput>
  }

  export type ProcessingOptionCreateWithoutLocationsInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ProcessingOptionUncheckedCreateWithoutLocationsInput = {
    id?: string
    optionName: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type ProcessingOptionCreateOrConnectWithoutLocationsInput = {
    where: ProcessingOptionWhereUniqueInput
    create: XOR<ProcessingOptionCreateWithoutLocationsInput, ProcessingOptionUncheckedCreateWithoutLocationsInput>
  }

  export type MailCreateWithoutLocation_startInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    location_end?: LocationCreateNestedOneWithoutMailEndInput
    mailCarrier: MailCarrierCreateNestedOneWithoutMailInput
  }

  export type MailUncheckedCreateWithoutLocation_startInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type MailCreateOrConnectWithoutLocation_startInput = {
    where: MailWhereUniqueInput
    create: XOR<MailCreateWithoutLocation_startInput, MailUncheckedCreateWithoutLocation_startInput>
  }

  export type MailCreateManyLocation_startInputEnvelope = {
    data: Enumerable<MailCreateManyLocation_startInput>
    skipDuplicates?: boolean
  }

  export type MailCreateWithoutLocation_endInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    location_start: LocationCreateNestedOneWithoutMailStartInput
    mailCarrier: MailCarrierCreateNestedOneWithoutMailInput
  }

  export type MailUncheckedCreateWithoutLocation_endInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type MailCreateOrConnectWithoutLocation_endInput = {
    where: MailWhereUniqueInput
    create: XOR<MailCreateWithoutLocation_endInput, MailUncheckedCreateWithoutLocation_endInput>
  }

  export type MailCreateManyLocation_endInputEnvelope = {
    data: Enumerable<MailCreateManyLocation_endInput>
    skipDuplicates?: boolean
  }

  export type PostOfficeUpsertWithoutLocationsInput = {
    update: XOR<PostOfficeUpdateWithoutLocationsInput, PostOfficeUncheckedUpdateWithoutLocationsInput>
    create: XOR<PostOfficeCreateWithoutLocationsInput, PostOfficeUncheckedCreateWithoutLocationsInput>
  }

  export type PostOfficeUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutPostOfficesNestedInput
  }

  export type PostOfficeUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationTypeUpsertWithoutLocationInput = {
    update: XOR<LocationTypeUpdateWithoutLocationInput, LocationTypeUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationTypeCreateWithoutLocationInput, LocationTypeUncheckedCreateWithoutLocationInput>
  }

  export type LocationTypeUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationTypeUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUpsertWithoutLocationInput = {
    update: XOR<ServiceUpdateWithoutLocationInput, ServiceUncheckedUpdateWithoutLocationInput>
    create: XOR<ServiceCreateWithoutLocationInput, ServiceUncheckedCreateWithoutLocationInput>
  }

  export type ServiceUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectingOptionUpsertWithWhereUniqueWithoutLocationsInput = {
    where: CollectingOptionWhereUniqueInput
    update: XOR<CollectingOptionUpdateWithoutLocationsInput, CollectingOptionUncheckedUpdateWithoutLocationsInput>
    create: XOR<CollectingOptionCreateWithoutLocationsInput, CollectingOptionUncheckedCreateWithoutLocationsInput>
  }

  export type CollectingOptionUpdateWithWhereUniqueWithoutLocationsInput = {
    where: CollectingOptionWhereUniqueInput
    data: XOR<CollectingOptionUpdateWithoutLocationsInput, CollectingOptionUncheckedUpdateWithoutLocationsInput>
  }

  export type CollectingOptionUpdateManyWithWhereWithoutLocationsInput = {
    where: CollectingOptionScalarWhereInput
    data: XOR<CollectingOptionUpdateManyMutationInput, CollectingOptionUncheckedUpdateManyWithoutCollectingOptionsInput>
  }

  export type CollectingOptionScalarWhereInput = {
    AND?: Enumerable<CollectingOptionScalarWhereInput>
    OR?: Enumerable<CollectingOptionScalarWhereInput>
    NOT?: Enumerable<CollectingOptionScalarWhereInput>
    id?: StringFilter | string
    optionName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
  }

  export type ProcessingOptionUpsertWithWhereUniqueWithoutLocationsInput = {
    where: ProcessingOptionWhereUniqueInput
    update: XOR<ProcessingOptionUpdateWithoutLocationsInput, ProcessingOptionUncheckedUpdateWithoutLocationsInput>
    create: XOR<ProcessingOptionCreateWithoutLocationsInput, ProcessingOptionUncheckedCreateWithoutLocationsInput>
  }

  export type ProcessingOptionUpdateWithWhereUniqueWithoutLocationsInput = {
    where: ProcessingOptionWhereUniqueInput
    data: XOR<ProcessingOptionUpdateWithoutLocationsInput, ProcessingOptionUncheckedUpdateWithoutLocationsInput>
  }

  export type ProcessingOptionUpdateManyWithWhereWithoutLocationsInput = {
    where: ProcessingOptionScalarWhereInput
    data: XOR<ProcessingOptionUpdateManyMutationInput, ProcessingOptionUncheckedUpdateManyWithoutProcessingOptionsInput>
  }

  export type ProcessingOptionScalarWhereInput = {
    AND?: Enumerable<ProcessingOptionScalarWhereInput>
    OR?: Enumerable<ProcessingOptionScalarWhereInput>
    NOT?: Enumerable<ProcessingOptionScalarWhereInput>
    id?: StringFilter | string
    optionName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    createdBy?: StringNullableFilter | string | null
    updatedAt?: DateTimeFilter | Date | string
    updatedBy?: StringNullableFilter | string | null
  }

  export type MailUpsertWithWhereUniqueWithoutLocation_startInput = {
    where: MailWhereUniqueInput
    update: XOR<MailUpdateWithoutLocation_startInput, MailUncheckedUpdateWithoutLocation_startInput>
    create: XOR<MailCreateWithoutLocation_startInput, MailUncheckedCreateWithoutLocation_startInput>
  }

  export type MailUpdateWithWhereUniqueWithoutLocation_startInput = {
    where: MailWhereUniqueInput
    data: XOR<MailUpdateWithoutLocation_startInput, MailUncheckedUpdateWithoutLocation_startInput>
  }

  export type MailUpdateManyWithWhereWithoutLocation_startInput = {
    where: MailScalarWhereInput
    data: XOR<MailUpdateManyMutationInput, MailUncheckedUpdateManyWithoutMailStartInput>
  }

  export type MailScalarWhereInput = {
    AND?: Enumerable<MailScalarWhereInput>
    OR?: Enumerable<MailScalarWhereInput>
    NOT?: Enumerable<MailScalarWhereInput>
    id?: StringFilter | string
    mail_code?: StringFilter | string
    mail_category_id?: StringFilter | string
    recipient_address?: StringFilter | string
    sender_address?: StringFilter | string
    location_start_id?: StringFilter | string
    location_end_id?: StringNullableFilter | string | null
    time_inserted?: DateTimeFilter | Date | string
    time_delivered?: DateTimeNullableFilter | Date | string | null
    mailCarrierId?: StringFilter | string
  }

  export type MailUpsertWithWhereUniqueWithoutLocation_endInput = {
    where: MailWhereUniqueInput
    update: XOR<MailUpdateWithoutLocation_endInput, MailUncheckedUpdateWithoutLocation_endInput>
    create: XOR<MailCreateWithoutLocation_endInput, MailUncheckedCreateWithoutLocation_endInput>
  }

  export type MailUpdateWithWhereUniqueWithoutLocation_endInput = {
    where: MailWhereUniqueInput
    data: XOR<MailUpdateWithoutLocation_endInput, MailUncheckedUpdateWithoutLocation_endInput>
  }

  export type MailUpdateManyWithWhereWithoutLocation_endInput = {
    where: MailScalarWhereInput
    data: XOR<MailUpdateManyMutationInput, MailUncheckedUpdateManyWithoutMailEndInput>
  }

  export type LocationCreateWithoutLocationTypeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutLocationTypeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput>
  }

  export type LocationCreateManyLocationTypeInputEnvelope = {
    data: Enumerable<LocationCreateManyLocationTypeInput>
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutLocationTypeInput, LocationUncheckedUpdateWithoutLocationTypeInput>
    create: XOR<LocationCreateWithoutLocationTypeInput, LocationUncheckedCreateWithoutLocationTypeInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutLocationTypeInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutLocationTypeInput, LocationUncheckedUpdateWithoutLocationTypeInput>
  }

  export type LocationUpdateManyWithWhereWithoutLocationTypeInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutServicesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutServicesInput, LocationUncheckedCreateWithoutServicesInput>
  }

  export type LocationCreateManyServicesInputEnvelope = {
    data: Enumerable<LocationCreateManyServicesInput>
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutServicesInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutServicesInput, LocationUncheckedUpdateWithoutServicesInput>
    create: XOR<LocationCreateWithoutServicesInput, LocationUncheckedCreateWithoutServicesInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutServicesInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutServicesInput, LocationUncheckedUpdateWithoutServicesInput>
  }

  export type LocationUpdateManyWithWhereWithoutServicesInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutCollectingOptionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutCollectingOptionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutCollectingOptionsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCollectingOptionsInput, LocationUncheckedCreateWithoutCollectingOptionsInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutCollectingOptionsInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCollectingOptionsInput, LocationUncheckedUpdateWithoutCollectingOptionsInput>
    create: XOR<LocationCreateWithoutCollectingOptionsInput, LocationUncheckedCreateWithoutCollectingOptionsInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCollectingOptionsInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCollectingOptionsInput, LocationUncheckedUpdateWithoutCollectingOptionsInput>
  }

  export type LocationUpdateManyWithWhereWithoutCollectingOptionsInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationsInput>
  }

  export type LocationCreateWithoutProcessingOptionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutProcessingOptionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutProcessingOptionsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutProcessingOptionsInput, LocationUncheckedCreateWithoutProcessingOptionsInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutProcessingOptionsInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutProcessingOptionsInput, LocationUncheckedUpdateWithoutProcessingOptionsInput>
    create: XOR<LocationCreateWithoutProcessingOptionsInput, LocationUncheckedCreateWithoutProcessingOptionsInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutProcessingOptionsInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutProcessingOptionsInput, LocationUncheckedUpdateWithoutProcessingOptionsInput>
  }

  export type LocationUpdateManyWithWhereWithoutProcessingOptionsInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationsInput>
  }

  export type LocationCreateWithoutMailStartInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailEnd?: MailCreateNestedManyWithoutLocation_endInput
  }

  export type LocationUncheckedCreateWithoutMailStartInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailEnd?: MailUncheckedCreateNestedManyWithoutLocation_endInput
  }

  export type LocationCreateOrConnectWithoutMailStartInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutMailStartInput, LocationUncheckedCreateWithoutMailStartInput>
  }

  export type LocationCreateWithoutMailEndInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInCharge: PostOfficeCreateNestedOneWithoutLocationsInput
    LocationType: LocationTypeCreateNestedOneWithoutLocationInput
    services: ServiceCreateNestedOneWithoutLocationInput
    collectingOptions?: CollectingOptionCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionCreateNestedManyWithoutLocationsInput
    mailStart?: MailCreateNestedManyWithoutLocation_startInput
  }

  export type LocationUncheckedCreateWithoutMailEndInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
    serviceId: string
    collectingOptions?: CollectingOptionUncheckedCreateNestedManyWithoutLocationsInput
    processingOptions?: ProcessingOptionUncheckedCreateNestedManyWithoutLocationsInput
    mailStart?: MailUncheckedCreateNestedManyWithoutLocation_startInput
  }

  export type LocationCreateOrConnectWithoutMailEndInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutMailEndInput, LocationUncheckedCreateWithoutMailEndInput>
  }

  export type MailCarrierCreateWithoutMailInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type MailCarrierUncheckedCreateWithoutMailInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
  }

  export type MailCarrierCreateOrConnectWithoutMailInput = {
    where: MailCarrierWhereUniqueInput
    create: XOR<MailCarrierCreateWithoutMailInput, MailCarrierUncheckedCreateWithoutMailInput>
  }

  export type LocationUpsertWithoutMailStartInput = {
    update: XOR<LocationUpdateWithoutMailStartInput, LocationUncheckedUpdateWithoutMailStartInput>
    create: XOR<LocationCreateWithoutMailStartInput, LocationUncheckedCreateWithoutMailStartInput>
  }

  export type LocationUpdateWithoutMailStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutMailStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUpsertWithoutMailEndInput = {
    update: XOR<LocationUpdateWithoutMailEndInput, LocationUncheckedUpdateWithoutMailEndInput>
    create: XOR<LocationCreateWithoutMailEndInput, LocationUncheckedCreateWithoutMailEndInput>
  }

  export type LocationUpdateWithoutMailEndInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
  }

  export type LocationUncheckedUpdateWithoutMailEndInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
  }

  export type MailCarrierUpsertWithoutMailInput = {
    update: XOR<MailCarrierUpdateWithoutMailInput, MailCarrierUncheckedUpdateWithoutMailInput>
    create: XOR<MailCarrierCreateWithoutMailInput, MailCarrierUncheckedCreateWithoutMailInput>
  }

  export type MailCarrierUpdateWithoutMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailCarrierUncheckedUpdateWithoutMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailCreateWithoutMailCarrierInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    location_start: LocationCreateNestedOneWithoutMailStartInput
    location_end?: LocationCreateNestedOneWithoutMailEndInput
  }

  export type MailUncheckedCreateWithoutMailCarrierInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
  }

  export type MailCreateOrConnectWithoutMailCarrierInput = {
    where: MailWhereUniqueInput
    create: XOR<MailCreateWithoutMailCarrierInput, MailUncheckedCreateWithoutMailCarrierInput>
  }

  export type MailCreateManyMailCarrierInputEnvelope = {
    data: Enumerable<MailCreateManyMailCarrierInput>
    skipDuplicates?: boolean
  }

  export type MailUpsertWithWhereUniqueWithoutMailCarrierInput = {
    where: MailWhereUniqueInput
    update: XOR<MailUpdateWithoutMailCarrierInput, MailUncheckedUpdateWithoutMailCarrierInput>
    create: XOR<MailCreateWithoutMailCarrierInput, MailUncheckedCreateWithoutMailCarrierInput>
  }

  export type MailUpdateWithWhereUniqueWithoutMailCarrierInput = {
    where: MailWhereUniqueInput
    data: XOR<MailUpdateWithoutMailCarrierInput, MailUncheckedUpdateWithoutMailCarrierInput>
  }

  export type MailUpdateManyWithWhereWithoutMailCarrierInput = {
    where: MailScalarWhereInput
    data: XOR<MailUpdateManyMutationInput, MailUncheckedUpdateManyWithoutMailInput>
  }

  export type UserTypeUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserTypeUncheckedUpdateManyWithoutUserTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutUserTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutUserTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    isGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isSignedIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityCreateManyCountryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
  }

  export type CityUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    postOffices?: PostOfficeUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    postOffices?: PostOfficeUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type PostOfficeCreateManyCityInput = {
    id?: string
    name: string
    address: string
    contact: string
    managerId: string
    contactPerson: string
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy: string
  }

  export type PostOfficeUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    locations?: LocationUpdateManyWithoutPostOfficeInChargeNestedInput
  }

  export type PostOfficeUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
    locations?: LocationUncheckedUpdateManyWithoutPostOfficeInChargeNestedInput
  }

  export type PostOfficeUncheckedUpdateManyWithoutPostOfficesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateManyPostOfficeInChargeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    LocationTypeId: string
    serviceId: string
  }

  export type LocationUpdateWithoutPostOfficeInChargeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutPostOfficeInChargeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type MailCreateManyLocation_startInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type MailCreateManyLocation_endInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    time_inserted?: Date | string
    time_delivered?: Date | string | null
    mailCarrierId: string
  }

  export type CollectingOptionUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectingOptionUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectingOptionUncheckedUpdateManyWithoutCollectingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingOptionUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingOptionUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessingOptionUncheckedUpdateManyWithoutProcessingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailUpdateWithoutLocation_startInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_end?: LocationUpdateOneWithoutMailEndNestedInput
    mailCarrier?: MailCarrierUpdateOneRequiredWithoutMailNestedInput
  }

  export type MailUncheckedUpdateWithoutLocation_startInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type MailUncheckedUpdateManyWithoutMailStartInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type MailUpdateWithoutLocation_endInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_start?: LocationUpdateOneRequiredWithoutMailStartNestedInput
    mailCarrier?: MailCarrierUpdateOneRequiredWithoutMailNestedInput
  }

  export type MailUncheckedUpdateWithoutLocation_endInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type MailUncheckedUpdateManyWithoutMailEndInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mailCarrierId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateManyLocationTypeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    serviceId: string
  }

  export type LocationUpdateWithoutLocationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateManyServicesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy?: string | null
    updatedAt?: Date | string
    updatedBy?: string | null
    postOfficeInChargeId: string
    LocationTypeId: string
  }

  export type LocationUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUpdateWithoutCollectingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    processingOptions?: ProcessingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutCollectingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    processingOptions?: ProcessingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUpdateWithoutProcessingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInCharge?: PostOfficeUpdateOneRequiredWithoutLocationsNestedInput
    LocationType?: LocationTypeUpdateOneRequiredWithoutLocationNestedInput
    services?: ServiceUpdateOneRequiredWithoutLocationNestedInput
    collectingOptions?: CollectingOptionUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUpdateManyWithoutLocation_endNestedInput
  }

  export type LocationUncheckedUpdateWithoutProcessingOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    postOfficeInChargeId?: StringFieldUpdateOperationsInput | string
    LocationTypeId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    collectingOptions?: CollectingOptionUncheckedUpdateManyWithoutLocationsNestedInput
    mailStart?: MailUncheckedUpdateManyWithoutLocation_startNestedInput
    mailEnd?: MailUncheckedUpdateManyWithoutLocation_endNestedInput
  }

  export type MailCreateManyMailCarrierInput = {
    id?: string
    mail_code: string
    mail_category_id: string
    recipient_address: string
    sender_address: string
    location_start_id: string
    location_end_id?: string | null
    time_inserted?: Date | string
    time_delivered?: Date | string | null
  }

  export type MailUpdateWithoutMailCarrierInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_start?: LocationUpdateOneRequiredWithoutMailStartNestedInput
    location_end?: LocationUpdateOneWithoutMailEndNestedInput
  }

  export type MailUncheckedUpdateWithoutMailCarrierInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MailUncheckedUpdateManyWithoutMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    mail_code?: StringFieldUpdateOperationsInput | string
    mail_category_id?: StringFieldUpdateOperationsInput | string
    recipient_address?: StringFieldUpdateOperationsInput | string
    sender_address?: StringFieldUpdateOperationsInput | string
    location_start_id?: StringFieldUpdateOperationsInput | string
    location_end_id?: NullableStringFieldUpdateOperationsInput | string | null
    time_inserted?: DateTimeFieldUpdateOperationsInput | Date | string
    time_delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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