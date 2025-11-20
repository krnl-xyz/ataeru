
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model QualityReport
 * 
 */
export type QualityReport = $Result.DefaultSelection<Prisma.$QualityReportPayload>
/**
 * Model HcahpsHospitalSurvery
 * 
 */
export type HcahpsHospitalSurvery = $Result.DefaultSelection<Prisma.$HcahpsHospitalSurveryPayload>
/**
 * Model HospitalInformation
 * 
 */
export type HospitalInformation = $Result.DefaultSelection<Prisma.$HospitalInformationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model HospitalRequest
 * 
 */
export type HospitalRequest = $Result.DefaultSelection<Prisma.$HospitalRequestPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model TreatmentPreference
 * 
 */
export type TreatmentPreference = $Result.DefaultSelection<Prisma.$TreatmentPreferencePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Credit
 * 
 */
export type Credit = $Result.DefaultSelection<Prisma.$CreditPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  USER: 'USER',
  MEDICAL_FACILITY: 'MEDICAL_FACILITY'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const RequestType: {
  DONOR_REQUEST: 'DONOR_REQUEST',
  CONSULTATION: 'CONSULTATION',
  HELP_REQUEST: 'HELP_REQUEST',
  TREATMENT_REQUEST: 'TREATMENT_REQUEST'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  PAST_DUE: 'PAST_DUE',
  UNPAID: 'UNPAID',
  TRIALING: 'TRIALING',
  INCOMPLETE: 'INCOMPLETE',
  INCOMPLETE_EXPIRED: 'INCOMPLETE_EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SubscriptionPlan: {
  USER_MONTHLY: 'USER_MONTHLY',
  USER_YEARLY: 'USER_YEARLY',
  HOSPITAL_MONTHLY: 'HOSPITAL_MONTHLY',
  HOSPITAL_YEARLY: 'HOSPITAL_YEARLY'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const CreditTransactionType: {
  ALLOCATION: 'ALLOCATION',
  DEDUCTION: 'DEDUCTION',
  REFUND: 'REFUND',
  EXPIRATION: 'EXPIRATION'
};

export type CreditTransactionType = (typeof CreditTransactionType)[keyof typeof CreditTransactionType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type CreditTransactionType = $Enums.CreditTransactionType

export const CreditTransactionType: typeof $Enums.CreditTransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Facilities
 * const facilities = await prisma.facility.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Facilities
   * const facilities = await prisma.facility.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualityReport`: Exposes CRUD operations for the **QualityReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualityReports
    * const qualityReports = await prisma.qualityReport.findMany()
    * ```
    */
  get qualityReport(): Prisma.QualityReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hcahpsHospitalSurvery`: Exposes CRUD operations for the **HcahpsHospitalSurvery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HcahpsHospitalSurveries
    * const hcahpsHospitalSurveries = await prisma.hcahpsHospitalSurvery.findMany()
    * ```
    */
  get hcahpsHospitalSurvery(): Prisma.HcahpsHospitalSurveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitalInformation`: Exposes CRUD operations for the **HospitalInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HospitalInformations
    * const hospitalInformations = await prisma.hospitalInformation.findMany()
    * ```
    */
  get hospitalInformation(): Prisma.HospitalInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitalRequest`: Exposes CRUD operations for the **HospitalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HospitalRequests
    * const hospitalRequests = await prisma.hospitalRequest.findMany()
    * ```
    */
  get hospitalRequest(): Prisma.HospitalRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentPreference`: Exposes CRUD operations for the **TreatmentPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentPreferences
    * const treatmentPreferences = await prisma.treatmentPreference.findMany()
    * ```
    */
  get treatmentPreference(): Prisma.TreatmentPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credit`: Exposes CRUD operations for the **Credit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credits
    * const credits = await prisma.credit.findMany()
    * ```
    */
  get credit(): Prisma.CreditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Facility: 'Facility',
    QualityReport: 'QualityReport',
    HcahpsHospitalSurvery: 'HcahpsHospitalSurvery',
    HospitalInformation: 'HospitalInformation',
    User: 'User',
    Hospital: 'Hospital',
    Booking: 'Booking',
    HospitalRequest: 'HospitalRequest',
    UserPreference: 'UserPreference',
    TreatmentPreference: 'TreatmentPreference',
    Subscription: 'Subscription',
    Credit: 'Credit',
    CreditTransaction: 'CreditTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facility" | "qualityReport" | "hcahpsHospitalSurvery" | "hospitalInformation" | "user" | "hospital" | "booking" | "hospitalRequest" | "userPreference" | "treatmentPreference" | "subscription" | "credit" | "creditTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      QualityReport: {
        payload: Prisma.$QualityReportPayload<ExtArgs>
        fields: Prisma.QualityReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualityReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualityReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          findFirst: {
            args: Prisma.QualityReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualityReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          findMany: {
            args: Prisma.QualityReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>[]
          }
          create: {
            args: Prisma.QualityReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          createMany: {
            args: Prisma.QualityReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualityReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>[]
          }
          delete: {
            args: Prisma.QualityReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          update: {
            args: Prisma.QualityReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          deleteMany: {
            args: Prisma.QualityReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualityReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualityReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>[]
          }
          upsert: {
            args: Prisma.QualityReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualityReportPayload>
          }
          aggregate: {
            args: Prisma.QualityReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualityReport>
          }
          groupBy: {
            args: Prisma.QualityReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualityReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualityReportCountArgs<ExtArgs>
            result: $Utils.Optional<QualityReportCountAggregateOutputType> | number
          }
        }
      }
      HcahpsHospitalSurvery: {
        payload: Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>
        fields: Prisma.HcahpsHospitalSurveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HcahpsHospitalSurveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HcahpsHospitalSurveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          findFirst: {
            args: Prisma.HcahpsHospitalSurveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HcahpsHospitalSurveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          findMany: {
            args: Prisma.HcahpsHospitalSurveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>[]
          }
          create: {
            args: Prisma.HcahpsHospitalSurveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          createMany: {
            args: Prisma.HcahpsHospitalSurveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HcahpsHospitalSurveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>[]
          }
          delete: {
            args: Prisma.HcahpsHospitalSurveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          update: {
            args: Prisma.HcahpsHospitalSurveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          deleteMany: {
            args: Prisma.HcahpsHospitalSurveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HcahpsHospitalSurveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HcahpsHospitalSurveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>[]
          }
          upsert: {
            args: Prisma.HcahpsHospitalSurveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HcahpsHospitalSurveryPayload>
          }
          aggregate: {
            args: Prisma.HcahpsHospitalSurveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHcahpsHospitalSurvery>
          }
          groupBy: {
            args: Prisma.HcahpsHospitalSurveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HcahpsHospitalSurveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HcahpsHospitalSurveryCountArgs<ExtArgs>
            result: $Utils.Optional<HcahpsHospitalSurveryCountAggregateOutputType> | number
          }
        }
      }
      HospitalInformation: {
        payload: Prisma.$HospitalInformationPayload<ExtArgs>
        fields: Prisma.HospitalInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          findFirst: {
            args: Prisma.HospitalInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          findMany: {
            args: Prisma.HospitalInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>[]
          }
          create: {
            args: Prisma.HospitalInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          createMany: {
            args: Prisma.HospitalInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>[]
          }
          delete: {
            args: Prisma.HospitalInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          update: {
            args: Prisma.HospitalInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          deleteMany: {
            args: Prisma.HospitalInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>[]
          }
          upsert: {
            args: Prisma.HospitalInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalInformationPayload>
          }
          aggregate: {
            args: Prisma.HospitalInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitalInformation>
          }
          groupBy: {
            args: Prisma.HospitalInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalInformationCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalInformationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      HospitalRequest: {
        payload: Prisma.$HospitalRequestPayload<ExtArgs>
        fields: Prisma.HospitalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          findFirst: {
            args: Prisma.HospitalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          findMany: {
            args: Prisma.HospitalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[]
          }
          create: {
            args: Prisma.HospitalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          createMany: {
            args: Prisma.HospitalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[]
          }
          delete: {
            args: Prisma.HospitalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          update: {
            args: Prisma.HospitalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          deleteMany: {
            args: Prisma.HospitalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[]
          }
          upsert: {
            args: Prisma.HospitalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalRequestPayload>
          }
          aggregate: {
            args: Prisma.HospitalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitalRequest>
          }
          groupBy: {
            args: Prisma.HospitalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalRequestCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      TreatmentPreference: {
        payload: Prisma.$TreatmentPreferencePayload<ExtArgs>
        fields: Prisma.TreatmentPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          findFirst: {
            args: Prisma.TreatmentPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          findMany: {
            args: Prisma.TreatmentPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>[]
          }
          create: {
            args: Prisma.TreatmentPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          createMany: {
            args: Prisma.TreatmentPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>[]
          }
          delete: {
            args: Prisma.TreatmentPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          update: {
            args: Prisma.TreatmentPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          deleteMany: {
            args: Prisma.TreatmentPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreatmentPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>[]
          }
          upsert: {
            args: Prisma.TreatmentPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPreferencePayload>
          }
          aggregate: {
            args: Prisma.TreatmentPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentPreference>
          }
          groupBy: {
            args: Prisma.TreatmentPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPreferenceCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Credit: {
        payload: Prisma.$CreditPayload<ExtArgs>
        fields: Prisma.CreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findFirst: {
            args: Prisma.CreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findMany: {
            args: Prisma.CreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          create: {
            args: Prisma.CreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          createMany: {
            args: Prisma.CreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          delete: {
            args: Prisma.CreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          update: {
            args: Prisma.CreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          deleteMany: {
            args: Prisma.CreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          upsert: {
            args: Prisma.CreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          aggregate: {
            args: Prisma.CreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredit>
          }
          groupBy: {
            args: Prisma.CreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    facility?: FacilityOmit
    qualityReport?: QualityReportOmit
    hcahpsHospitalSurvery?: HcahpsHospitalSurveryOmit
    hospitalInformation?: HospitalInformationOmit
    user?: UserOmit
    hospital?: HospitalOmit
    booking?: BookingOmit
    hospitalRequest?: HospitalRequestOmit
    userPreference?: UserPreferenceOmit
    treatmentPreference?: TreatmentPreferenceOmit
    subscription?: SubscriptionOmit
    credit?: CreditOmit
    creditTransaction?: CreditTransactionOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type HospitalInformationCountOutputType
   */

  export type HospitalInformationCountOutputType = {
    users: number
  }

  export type HospitalInformationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HospitalInformationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * HospitalInformationCountOutputType without action
   */
  export type HospitalInformationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformationCountOutputType
     */
    select?: HospitalInformationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalInformationCountOutputType without action
   */
  export type HospitalInformationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    requests: number
    preferredHospitals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    preferredHospitals?: boolean | UserCountOutputTypeCountPreferredHospitalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferredHospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
  }


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    bookings: number
    requests: number
    preferredUsers: number
    preferredTreatments: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | HospitalCountOutputTypeCountBookingsArgs
    requests?: boolean | HospitalCountOutputTypeCountRequestsArgs
    preferredUsers?: boolean | HospitalCountOutputTypeCountPreferredUsersArgs
    preferredTreatments?: boolean | HospitalCountOutputTypeCountPreferredTreatmentsArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalRequestWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountPreferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountPreferredTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPreferenceWhereInput
  }


  /**
   * Count Type CreditCountOutputType
   */

  export type CreditCountOutputType = {
    transactions: number
  }

  export type CreditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CreditCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CreditCountOutputType without action
   */
  export type CreditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCountOutputType
     */
    select?: CreditCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCountOutputType without action
   */
  export type CreditCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityAvgAggregateOutputType = {
    npi: number | null
    year: number | null
  }

  export type FacilitySumAggregateOutputType = {
    npi: number | null
    year: number | null
  }

  export type FacilityMinAggregateOutputType = {
    id: string | null
    facilityName: string | null
    facilityId: string | null
    npi: number | null
    city: string | null
    zip: string | null
    state: string | null
    year: number | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: string | null
    facilityName: string | null
    facilityId: string | null
    npi: number | null
    city: string | null
    zip: string | null
    state: string | null
    year: number | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    facilityName: number
    facilityId: number
    npi: number
    city: number
    zip: number
    state: number
    year: number
    _all: number
  }


  export type FacilityAvgAggregateInputType = {
    npi?: true
    year?: true
  }

  export type FacilitySumAggregateInputType = {
    npi?: true
    year?: true
  }

  export type FacilityMinAggregateInputType = {
    id?: true
    facilityName?: true
    facilityId?: true
    npi?: true
    city?: true
    zip?: true
    state?: true
    year?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    facilityName?: true
    facilityId?: true
    npi?: true
    city?: true
    zip?: true
    state?: true
    year?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    facilityName?: true
    facilityId?: true
    npi?: true
    city?: true
    zip?: true
    state?: true
    year?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _avg?: FacilityAvgAggregateInputType
    _sum?: FacilitySumAggregateInputType
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: string
    facilityName: string
    facilityId: string
    npi: number
    city: string
    zip: string
    state: string
    year: number
    _count: FacilityCountAggregateOutputType | null
    _avg: FacilityAvgAggregateOutputType | null
    _sum: FacilitySumAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityName?: boolean
    facilityId?: boolean
    npi?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    year?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityName?: boolean
    facilityId?: boolean
    npi?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    year?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityName?: boolean
    facilityId?: boolean
    npi?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    year?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    facilityName?: boolean
    facilityId?: boolean
    npi?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    year?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityName" | "facilityId" | "npi" | "city" | "zip" | "state" | "year", ExtArgs["result"]["facility"]>

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityName: string
      facilityId: string
      npi: number
      city: string
      zip: string
      state: string
      year: number
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'String'>
    readonly facilityName: FieldRef<"Facility", 'String'>
    readonly facilityId: FieldRef<"Facility", 'String'>
    readonly npi: FieldRef<"Facility", 'Int'>
    readonly city: FieldRef<"Facility", 'String'>
    readonly zip: FieldRef<"Facility", 'String'>
    readonly state: FieldRef<"Facility", 'String'>
    readonly year: FieldRef<"Facility", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
  }


  /**
   * Model QualityReport
   */

  export type AggregateQualityReport = {
    _count: QualityReportCountAggregateOutputType | null
    _avg: QualityReportAvgAggregateOutputType | null
    _sum: QualityReportSumAggregateOutputType | null
    _min: QualityReportMinAggregateOutputType | null
    _max: QualityReportMaxAggregateOutputType | null
  }

  export type QualityReportAvgAggregateOutputType = {
    msa: number | null
    hlmr: number | null
    hlmrPercentile: number | null
    compHipKnee: number | null
    compHipKneePercentile: number | null
    compFootnote: number | null
  }

  export type QualityReportSumAggregateOutputType = {
    msa: number | null
    hlmr: number | null
    hlmrPercentile: number | null
    compHipKnee: number | null
    compHipKneePercentile: number | null
    compFootnote: number | null
  }

  export type QualityReportMinAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    msa: number | null
    msaTitle: string | null
    hlmr: number | null
    hlmrPercentile: number | null
    hcahpsStartDate: Date | null
    hcahpsEndDate: Date | null
    compHipKnee: number | null
    compHipKneePercentile: number | null
    compStartDate: Date | null
    compEndDate: Date | null
    compFootnote: number | null
    proStartDate: Date | null
    proEndDate: Date | null
  }

  export type QualityReportMaxAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    msa: number | null
    msaTitle: string | null
    hlmr: number | null
    hlmrPercentile: number | null
    hcahpsStartDate: Date | null
    hcahpsEndDate: Date | null
    compHipKnee: number | null
    compHipKneePercentile: number | null
    compStartDate: Date | null
    compEndDate: Date | null
    compFootnote: number | null
    proStartDate: Date | null
    proEndDate: Date | null
  }

  export type QualityReportCountAggregateOutputType = {
    facilityId: number
    facilityName: number
    msa: number
    msaTitle: number
    hlmr: number
    hlmrPercentile: number
    hcahpsStartDate: number
    hcahpsEndDate: number
    compHipKnee: number
    compHipKneePercentile: number
    compStartDate: number
    compEndDate: number
    compFootnote: number
    proStartDate: number
    proEndDate: number
    _all: number
  }


  export type QualityReportAvgAggregateInputType = {
    msa?: true
    hlmr?: true
    hlmrPercentile?: true
    compHipKnee?: true
    compHipKneePercentile?: true
    compFootnote?: true
  }

  export type QualityReportSumAggregateInputType = {
    msa?: true
    hlmr?: true
    hlmrPercentile?: true
    compHipKnee?: true
    compHipKneePercentile?: true
    compFootnote?: true
  }

  export type QualityReportMinAggregateInputType = {
    facilityId?: true
    facilityName?: true
    msa?: true
    msaTitle?: true
    hlmr?: true
    hlmrPercentile?: true
    hcahpsStartDate?: true
    hcahpsEndDate?: true
    compHipKnee?: true
    compHipKneePercentile?: true
    compStartDate?: true
    compEndDate?: true
    compFootnote?: true
    proStartDate?: true
    proEndDate?: true
  }

  export type QualityReportMaxAggregateInputType = {
    facilityId?: true
    facilityName?: true
    msa?: true
    msaTitle?: true
    hlmr?: true
    hlmrPercentile?: true
    hcahpsStartDate?: true
    hcahpsEndDate?: true
    compHipKnee?: true
    compHipKneePercentile?: true
    compStartDate?: true
    compEndDate?: true
    compFootnote?: true
    proStartDate?: true
    proEndDate?: true
  }

  export type QualityReportCountAggregateInputType = {
    facilityId?: true
    facilityName?: true
    msa?: true
    msaTitle?: true
    hlmr?: true
    hlmrPercentile?: true
    hcahpsStartDate?: true
    hcahpsEndDate?: true
    compHipKnee?: true
    compHipKneePercentile?: true
    compStartDate?: true
    compEndDate?: true
    compFootnote?: true
    proStartDate?: true
    proEndDate?: true
    _all?: true
  }

  export type QualityReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualityReport to aggregate.
     */
    where?: QualityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityReports to fetch.
     */
    orderBy?: QualityReportOrderByWithRelationInput | QualityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualityReports
    **/
    _count?: true | QualityReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualityReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualityReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualityReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualityReportMaxAggregateInputType
  }

  export type GetQualityReportAggregateType<T extends QualityReportAggregateArgs> = {
        [P in keyof T & keyof AggregateQualityReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualityReport[P]>
      : GetScalarType<T[P], AggregateQualityReport[P]>
  }




  export type QualityReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualityReportWhereInput
    orderBy?: QualityReportOrderByWithAggregationInput | QualityReportOrderByWithAggregationInput[]
    by: QualityReportScalarFieldEnum[] | QualityReportScalarFieldEnum
    having?: QualityReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualityReportCountAggregateInputType | true
    _avg?: QualityReportAvgAggregateInputType
    _sum?: QualityReportSumAggregateInputType
    _min?: QualityReportMinAggregateInputType
    _max?: QualityReportMaxAggregateInputType
  }

  export type QualityReportGroupByOutputType = {
    facilityId: string
    facilityName: string
    msa: number
    msaTitle: string
    hlmr: number
    hlmrPercentile: number
    hcahpsStartDate: Date
    hcahpsEndDate: Date
    compHipKnee: number
    compHipKneePercentile: number
    compStartDate: Date
    compEndDate: Date
    compFootnote: number
    proStartDate: Date
    proEndDate: Date
    _count: QualityReportCountAggregateOutputType | null
    _avg: QualityReportAvgAggregateOutputType | null
    _sum: QualityReportSumAggregateOutputType | null
    _min: QualityReportMinAggregateOutputType | null
    _max: QualityReportMaxAggregateOutputType | null
  }

  type GetQualityReportGroupByPayload<T extends QualityReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualityReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualityReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualityReportGroupByOutputType[P]>
            : GetScalarType<T[P], QualityReportGroupByOutputType[P]>
        }
      >
    >


  export type QualityReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    msa?: boolean
    msaTitle?: boolean
    hlmr?: boolean
    hlmrPercentile?: boolean
    hcahpsStartDate?: boolean
    hcahpsEndDate?: boolean
    compHipKnee?: boolean
    compHipKneePercentile?: boolean
    compStartDate?: boolean
    compEndDate?: boolean
    compFootnote?: boolean
    proStartDate?: boolean
    proEndDate?: boolean
  }, ExtArgs["result"]["qualityReport"]>

  export type QualityReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    msa?: boolean
    msaTitle?: boolean
    hlmr?: boolean
    hlmrPercentile?: boolean
    hcahpsStartDate?: boolean
    hcahpsEndDate?: boolean
    compHipKnee?: boolean
    compHipKneePercentile?: boolean
    compStartDate?: boolean
    compEndDate?: boolean
    compFootnote?: boolean
    proStartDate?: boolean
    proEndDate?: boolean
  }, ExtArgs["result"]["qualityReport"]>

  export type QualityReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    msa?: boolean
    msaTitle?: boolean
    hlmr?: boolean
    hlmrPercentile?: boolean
    hcahpsStartDate?: boolean
    hcahpsEndDate?: boolean
    compHipKnee?: boolean
    compHipKneePercentile?: boolean
    compStartDate?: boolean
    compEndDate?: boolean
    compFootnote?: boolean
    proStartDate?: boolean
    proEndDate?: boolean
  }, ExtArgs["result"]["qualityReport"]>

  export type QualityReportSelectScalar = {
    facilityId?: boolean
    facilityName?: boolean
    msa?: boolean
    msaTitle?: boolean
    hlmr?: boolean
    hlmrPercentile?: boolean
    hcahpsStartDate?: boolean
    hcahpsEndDate?: boolean
    compHipKnee?: boolean
    compHipKneePercentile?: boolean
    compStartDate?: boolean
    compEndDate?: boolean
    compFootnote?: boolean
    proStartDate?: boolean
    proEndDate?: boolean
  }

  export type QualityReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facilityId" | "facilityName" | "msa" | "msaTitle" | "hlmr" | "hlmrPercentile" | "hcahpsStartDate" | "hcahpsEndDate" | "compHipKnee" | "compHipKneePercentile" | "compStartDate" | "compEndDate" | "compFootnote" | "proStartDate" | "proEndDate", ExtArgs["result"]["qualityReport"]>

  export type $QualityReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualityReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      facilityId: string
      facilityName: string
      msa: number
      msaTitle: string
      hlmr: number
      hlmrPercentile: number
      hcahpsStartDate: Date
      hcahpsEndDate: Date
      compHipKnee: number
      compHipKneePercentile: number
      compStartDate: Date
      compEndDate: Date
      compFootnote: number
      proStartDate: Date
      proEndDate: Date
    }, ExtArgs["result"]["qualityReport"]>
    composites: {}
  }

  type QualityReportGetPayload<S extends boolean | null | undefined | QualityReportDefaultArgs> = $Result.GetResult<Prisma.$QualityReportPayload, S>

  type QualityReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualityReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualityReportCountAggregateInputType | true
    }

  export interface QualityReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualityReport'], meta: { name: 'QualityReport' } }
    /**
     * Find zero or one QualityReport that matches the filter.
     * @param {QualityReportFindUniqueArgs} args - Arguments to find a QualityReport
     * @example
     * // Get one QualityReport
     * const qualityReport = await prisma.qualityReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualityReportFindUniqueArgs>(args: SelectSubset<T, QualityReportFindUniqueArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualityReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualityReportFindUniqueOrThrowArgs} args - Arguments to find a QualityReport
     * @example
     * // Get one QualityReport
     * const qualityReport = await prisma.qualityReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualityReportFindUniqueOrThrowArgs>(args: SelectSubset<T, QualityReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualityReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportFindFirstArgs} args - Arguments to find a QualityReport
     * @example
     * // Get one QualityReport
     * const qualityReport = await prisma.qualityReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualityReportFindFirstArgs>(args?: SelectSubset<T, QualityReportFindFirstArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualityReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportFindFirstOrThrowArgs} args - Arguments to find a QualityReport
     * @example
     * // Get one QualityReport
     * const qualityReport = await prisma.qualityReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualityReportFindFirstOrThrowArgs>(args?: SelectSubset<T, QualityReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualityReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualityReports
     * const qualityReports = await prisma.qualityReport.findMany()
     * 
     * // Get first 10 QualityReports
     * const qualityReports = await prisma.qualityReport.findMany({ take: 10 })
     * 
     * // Only select the `facilityId`
     * const qualityReportWithFacilityIdOnly = await prisma.qualityReport.findMany({ select: { facilityId: true } })
     * 
     */
    findMany<T extends QualityReportFindManyArgs>(args?: SelectSubset<T, QualityReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualityReport.
     * @param {QualityReportCreateArgs} args - Arguments to create a QualityReport.
     * @example
     * // Create one QualityReport
     * const QualityReport = await prisma.qualityReport.create({
     *   data: {
     *     // ... data to create a QualityReport
     *   }
     * })
     * 
     */
    create<T extends QualityReportCreateArgs>(args: SelectSubset<T, QualityReportCreateArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualityReports.
     * @param {QualityReportCreateManyArgs} args - Arguments to create many QualityReports.
     * @example
     * // Create many QualityReports
     * const qualityReport = await prisma.qualityReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualityReportCreateManyArgs>(args?: SelectSubset<T, QualityReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualityReports and returns the data saved in the database.
     * @param {QualityReportCreateManyAndReturnArgs} args - Arguments to create many QualityReports.
     * @example
     * // Create many QualityReports
     * const qualityReport = await prisma.qualityReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualityReports and only return the `facilityId`
     * const qualityReportWithFacilityIdOnly = await prisma.qualityReport.createManyAndReturn({
     *   select: { facilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualityReportCreateManyAndReturnArgs>(args?: SelectSubset<T, QualityReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualityReport.
     * @param {QualityReportDeleteArgs} args - Arguments to delete one QualityReport.
     * @example
     * // Delete one QualityReport
     * const QualityReport = await prisma.qualityReport.delete({
     *   where: {
     *     // ... filter to delete one QualityReport
     *   }
     * })
     * 
     */
    delete<T extends QualityReportDeleteArgs>(args: SelectSubset<T, QualityReportDeleteArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualityReport.
     * @param {QualityReportUpdateArgs} args - Arguments to update one QualityReport.
     * @example
     * // Update one QualityReport
     * const qualityReport = await prisma.qualityReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualityReportUpdateArgs>(args: SelectSubset<T, QualityReportUpdateArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualityReports.
     * @param {QualityReportDeleteManyArgs} args - Arguments to filter QualityReports to delete.
     * @example
     * // Delete a few QualityReports
     * const { count } = await prisma.qualityReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualityReportDeleteManyArgs>(args?: SelectSubset<T, QualityReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualityReports
     * const qualityReport = await prisma.qualityReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualityReportUpdateManyArgs>(args: SelectSubset<T, QualityReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualityReports and returns the data updated in the database.
     * @param {QualityReportUpdateManyAndReturnArgs} args - Arguments to update many QualityReports.
     * @example
     * // Update many QualityReports
     * const qualityReport = await prisma.qualityReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualityReports and only return the `facilityId`
     * const qualityReportWithFacilityIdOnly = await prisma.qualityReport.updateManyAndReturn({
     *   select: { facilityId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QualityReportUpdateManyAndReturnArgs>(args: SelectSubset<T, QualityReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualityReport.
     * @param {QualityReportUpsertArgs} args - Arguments to update or create a QualityReport.
     * @example
     * // Update or create a QualityReport
     * const qualityReport = await prisma.qualityReport.upsert({
     *   create: {
     *     // ... data to create a QualityReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualityReport we want to update
     *   }
     * })
     */
    upsert<T extends QualityReportUpsertArgs>(args: SelectSubset<T, QualityReportUpsertArgs<ExtArgs>>): Prisma__QualityReportClient<$Result.GetResult<Prisma.$QualityReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualityReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportCountArgs} args - Arguments to filter QualityReports to count.
     * @example
     * // Count the number of QualityReports
     * const count = await prisma.qualityReport.count({
     *   where: {
     *     // ... the filter for the QualityReports we want to count
     *   }
     * })
    **/
    count<T extends QualityReportCountArgs>(
      args?: Subset<T, QualityReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualityReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualityReportAggregateArgs>(args: Subset<T, QualityReportAggregateArgs>): Prisma.PrismaPromise<GetQualityReportAggregateType<T>>

    /**
     * Group by QualityReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualityReportGroupByArgs} args - Group by arguments.
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
      T extends QualityReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualityReportGroupByArgs['orderBy'] }
        : { orderBy?: QualityReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualityReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualityReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualityReport model
   */
  readonly fields: QualityReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualityReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualityReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QualityReport model
   */
  interface QualityReportFieldRefs {
    readonly facilityId: FieldRef<"QualityReport", 'String'>
    readonly facilityName: FieldRef<"QualityReport", 'String'>
    readonly msa: FieldRef<"QualityReport", 'Int'>
    readonly msaTitle: FieldRef<"QualityReport", 'String'>
    readonly hlmr: FieldRef<"QualityReport", 'Int'>
    readonly hlmrPercentile: FieldRef<"QualityReport", 'Int'>
    readonly hcahpsStartDate: FieldRef<"QualityReport", 'DateTime'>
    readonly hcahpsEndDate: FieldRef<"QualityReport", 'DateTime'>
    readonly compHipKnee: FieldRef<"QualityReport", 'Int'>
    readonly compHipKneePercentile: FieldRef<"QualityReport", 'Int'>
    readonly compStartDate: FieldRef<"QualityReport", 'DateTime'>
    readonly compEndDate: FieldRef<"QualityReport", 'DateTime'>
    readonly compFootnote: FieldRef<"QualityReport", 'Int'>
    readonly proStartDate: FieldRef<"QualityReport", 'DateTime'>
    readonly proEndDate: FieldRef<"QualityReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QualityReport findUnique
   */
  export type QualityReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter, which QualityReport to fetch.
     */
    where: QualityReportWhereUniqueInput
  }

  /**
   * QualityReport findUniqueOrThrow
   */
  export type QualityReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter, which QualityReport to fetch.
     */
    where: QualityReportWhereUniqueInput
  }

  /**
   * QualityReport findFirst
   */
  export type QualityReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter, which QualityReport to fetch.
     */
    where?: QualityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityReports to fetch.
     */
    orderBy?: QualityReportOrderByWithRelationInput | QualityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualityReports.
     */
    cursor?: QualityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualityReports.
     */
    distinct?: QualityReportScalarFieldEnum | QualityReportScalarFieldEnum[]
  }

  /**
   * QualityReport findFirstOrThrow
   */
  export type QualityReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter, which QualityReport to fetch.
     */
    where?: QualityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityReports to fetch.
     */
    orderBy?: QualityReportOrderByWithRelationInput | QualityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualityReports.
     */
    cursor?: QualityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualityReports.
     */
    distinct?: QualityReportScalarFieldEnum | QualityReportScalarFieldEnum[]
  }

  /**
   * QualityReport findMany
   */
  export type QualityReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter, which QualityReports to fetch.
     */
    where?: QualityReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualityReports to fetch.
     */
    orderBy?: QualityReportOrderByWithRelationInput | QualityReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualityReports.
     */
    cursor?: QualityReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualityReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualityReports.
     */
    skip?: number
    distinct?: QualityReportScalarFieldEnum | QualityReportScalarFieldEnum[]
  }

  /**
   * QualityReport create
   */
  export type QualityReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * The data needed to create a QualityReport.
     */
    data: XOR<QualityReportCreateInput, QualityReportUncheckedCreateInput>
  }

  /**
   * QualityReport createMany
   */
  export type QualityReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualityReports.
     */
    data: QualityReportCreateManyInput | QualityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualityReport createManyAndReturn
   */
  export type QualityReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * The data used to create many QualityReports.
     */
    data: QualityReportCreateManyInput | QualityReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualityReport update
   */
  export type QualityReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * The data needed to update a QualityReport.
     */
    data: XOR<QualityReportUpdateInput, QualityReportUncheckedUpdateInput>
    /**
     * Choose, which QualityReport to update.
     */
    where: QualityReportWhereUniqueInput
  }

  /**
   * QualityReport updateMany
   */
  export type QualityReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualityReports.
     */
    data: XOR<QualityReportUpdateManyMutationInput, QualityReportUncheckedUpdateManyInput>
    /**
     * Filter which QualityReports to update
     */
    where?: QualityReportWhereInput
    /**
     * Limit how many QualityReports to update.
     */
    limit?: number
  }

  /**
   * QualityReport updateManyAndReturn
   */
  export type QualityReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * The data used to update QualityReports.
     */
    data: XOR<QualityReportUpdateManyMutationInput, QualityReportUncheckedUpdateManyInput>
    /**
     * Filter which QualityReports to update
     */
    where?: QualityReportWhereInput
    /**
     * Limit how many QualityReports to update.
     */
    limit?: number
  }

  /**
   * QualityReport upsert
   */
  export type QualityReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * The filter to search for the QualityReport to update in case it exists.
     */
    where: QualityReportWhereUniqueInput
    /**
     * In case the QualityReport found by the `where` argument doesn't exist, create a new QualityReport with this data.
     */
    create: XOR<QualityReportCreateInput, QualityReportUncheckedCreateInput>
    /**
     * In case the QualityReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualityReportUpdateInput, QualityReportUncheckedUpdateInput>
  }

  /**
   * QualityReport delete
   */
  export type QualityReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
    /**
     * Filter which QualityReport to delete.
     */
    where: QualityReportWhereUniqueInput
  }

  /**
   * QualityReport deleteMany
   */
  export type QualityReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualityReports to delete
     */
    where?: QualityReportWhereInput
    /**
     * Limit how many QualityReports to delete.
     */
    limit?: number
  }

  /**
   * QualityReport without action
   */
  export type QualityReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualityReport
     */
    select?: QualityReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualityReport
     */
    omit?: QualityReportOmit<ExtArgs> | null
  }


  /**
   * Model HcahpsHospitalSurvery
   */

  export type AggregateHcahpsHospitalSurvery = {
    _count: HcahpsHospitalSurveryCountAggregateOutputType | null
    _avg: HcahpsHospitalSurveryAvgAggregateOutputType | null
    _sum: HcahpsHospitalSurverySumAggregateOutputType | null
    _min: HcahpsHospitalSurveryMinAggregateOutputType | null
    _max: HcahpsHospitalSurveryMaxAggregateOutputType | null
  }

  export type HcahpsHospitalSurveryAvgAggregateOutputType = {
    completedSurveys: number | null
    responseRatePercent: number | null
  }

  export type HcahpsHospitalSurverySumAggregateOutputType = {
    completedSurveys: number | null
    responseRatePercent: number | null
  }

  export type HcahpsHospitalSurveryMinAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    address: string | null
    city: string | null
    zip: string | null
    state: string | null
    telephone: string | null
    measureId: string | null
    question: string | null
    response: string | null
    hcahpsAnswerPercen: string | null
    completedSurveys: number | null
    responseRatePercent: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type HcahpsHospitalSurveryMaxAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    address: string | null
    city: string | null
    zip: string | null
    state: string | null
    telephone: string | null
    measureId: string | null
    question: string | null
    response: string | null
    hcahpsAnswerPercen: string | null
    completedSurveys: number | null
    responseRatePercent: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type HcahpsHospitalSurveryCountAggregateOutputType = {
    facilityId: number
    facilityName: number
    address: number
    city: number
    zip: number
    state: number
    telephone: number
    measureId: number
    question: number
    response: number
    hcahpsAnswerPercen: number
    completedSurveys: number
    responseRatePercent: number
    startDate: number
    endDate: number
    _all: number
  }


  export type HcahpsHospitalSurveryAvgAggregateInputType = {
    completedSurveys?: true
    responseRatePercent?: true
  }

  export type HcahpsHospitalSurverySumAggregateInputType = {
    completedSurveys?: true
    responseRatePercent?: true
  }

  export type HcahpsHospitalSurveryMinAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    telephone?: true
    measureId?: true
    question?: true
    response?: true
    hcahpsAnswerPercen?: true
    completedSurveys?: true
    responseRatePercent?: true
    startDate?: true
    endDate?: true
  }

  export type HcahpsHospitalSurveryMaxAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    telephone?: true
    measureId?: true
    question?: true
    response?: true
    hcahpsAnswerPercen?: true
    completedSurveys?: true
    responseRatePercent?: true
    startDate?: true
    endDate?: true
  }

  export type HcahpsHospitalSurveryCountAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    telephone?: true
    measureId?: true
    question?: true
    response?: true
    hcahpsAnswerPercen?: true
    completedSurveys?: true
    responseRatePercent?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type HcahpsHospitalSurveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HcahpsHospitalSurvery to aggregate.
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HcahpsHospitalSurveries to fetch.
     */
    orderBy?: HcahpsHospitalSurveryOrderByWithRelationInput | HcahpsHospitalSurveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HcahpsHospitalSurveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HcahpsHospitalSurveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HcahpsHospitalSurveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HcahpsHospitalSurveries
    **/
    _count?: true | HcahpsHospitalSurveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HcahpsHospitalSurveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HcahpsHospitalSurverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HcahpsHospitalSurveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HcahpsHospitalSurveryMaxAggregateInputType
  }

  export type GetHcahpsHospitalSurveryAggregateType<T extends HcahpsHospitalSurveryAggregateArgs> = {
        [P in keyof T & keyof AggregateHcahpsHospitalSurvery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHcahpsHospitalSurvery[P]>
      : GetScalarType<T[P], AggregateHcahpsHospitalSurvery[P]>
  }




  export type HcahpsHospitalSurveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HcahpsHospitalSurveryWhereInput
    orderBy?: HcahpsHospitalSurveryOrderByWithAggregationInput | HcahpsHospitalSurveryOrderByWithAggregationInput[]
    by: HcahpsHospitalSurveryScalarFieldEnum[] | HcahpsHospitalSurveryScalarFieldEnum
    having?: HcahpsHospitalSurveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HcahpsHospitalSurveryCountAggregateInputType | true
    _avg?: HcahpsHospitalSurveryAvgAggregateInputType
    _sum?: HcahpsHospitalSurverySumAggregateInputType
    _min?: HcahpsHospitalSurveryMinAggregateInputType
    _max?: HcahpsHospitalSurveryMaxAggregateInputType
  }

  export type HcahpsHospitalSurveryGroupByOutputType = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    telephone: string
    measureId: string
    question: string
    response: string
    hcahpsAnswerPercen: string
    completedSurveys: number
    responseRatePercent: number
    startDate: Date
    endDate: Date
    _count: HcahpsHospitalSurveryCountAggregateOutputType | null
    _avg: HcahpsHospitalSurveryAvgAggregateOutputType | null
    _sum: HcahpsHospitalSurverySumAggregateOutputType | null
    _min: HcahpsHospitalSurveryMinAggregateOutputType | null
    _max: HcahpsHospitalSurveryMaxAggregateOutputType | null
  }

  type GetHcahpsHospitalSurveryGroupByPayload<T extends HcahpsHospitalSurveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HcahpsHospitalSurveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HcahpsHospitalSurveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HcahpsHospitalSurveryGroupByOutputType[P]>
            : GetScalarType<T[P], HcahpsHospitalSurveryGroupByOutputType[P]>
        }
      >
    >


  export type HcahpsHospitalSurverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    telephone?: boolean
    measureId?: boolean
    question?: boolean
    response?: boolean
    hcahpsAnswerPercen?: boolean
    completedSurveys?: boolean
    responseRatePercent?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["hcahpsHospitalSurvery"]>

  export type HcahpsHospitalSurverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    telephone?: boolean
    measureId?: boolean
    question?: boolean
    response?: boolean
    hcahpsAnswerPercen?: boolean
    completedSurveys?: boolean
    responseRatePercent?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["hcahpsHospitalSurvery"]>

  export type HcahpsHospitalSurverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    telephone?: boolean
    measureId?: boolean
    question?: boolean
    response?: boolean
    hcahpsAnswerPercen?: boolean
    completedSurveys?: boolean
    responseRatePercent?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["hcahpsHospitalSurvery"]>

  export type HcahpsHospitalSurverySelectScalar = {
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    telephone?: boolean
    measureId?: boolean
    question?: boolean
    response?: boolean
    hcahpsAnswerPercen?: boolean
    completedSurveys?: boolean
    responseRatePercent?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type HcahpsHospitalSurveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facilityId" | "facilityName" | "address" | "city" | "zip" | "state" | "telephone" | "measureId" | "question" | "response" | "hcahpsAnswerPercen" | "completedSurveys" | "responseRatePercent" | "startDate" | "endDate", ExtArgs["result"]["hcahpsHospitalSurvery"]>

  export type $HcahpsHospitalSurveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HcahpsHospitalSurvery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      facilityId: string
      facilityName: string
      address: string
      city: string
      zip: string
      state: string
      telephone: string
      measureId: string
      question: string
      response: string
      hcahpsAnswerPercen: string
      completedSurveys: number
      responseRatePercent: number
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["hcahpsHospitalSurvery"]>
    composites: {}
  }

  type HcahpsHospitalSurveryGetPayload<S extends boolean | null | undefined | HcahpsHospitalSurveryDefaultArgs> = $Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload, S>

  type HcahpsHospitalSurveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HcahpsHospitalSurveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HcahpsHospitalSurveryCountAggregateInputType | true
    }

  export interface HcahpsHospitalSurveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HcahpsHospitalSurvery'], meta: { name: 'HcahpsHospitalSurvery' } }
    /**
     * Find zero or one HcahpsHospitalSurvery that matches the filter.
     * @param {HcahpsHospitalSurveryFindUniqueArgs} args - Arguments to find a HcahpsHospitalSurvery
     * @example
     * // Get one HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HcahpsHospitalSurveryFindUniqueArgs>(args: SelectSubset<T, HcahpsHospitalSurveryFindUniqueArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HcahpsHospitalSurvery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HcahpsHospitalSurveryFindUniqueOrThrowArgs} args - Arguments to find a HcahpsHospitalSurvery
     * @example
     * // Get one HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HcahpsHospitalSurveryFindUniqueOrThrowArgs>(args: SelectSubset<T, HcahpsHospitalSurveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HcahpsHospitalSurvery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryFindFirstArgs} args - Arguments to find a HcahpsHospitalSurvery
     * @example
     * // Get one HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HcahpsHospitalSurveryFindFirstArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryFindFirstArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HcahpsHospitalSurvery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryFindFirstOrThrowArgs} args - Arguments to find a HcahpsHospitalSurvery
     * @example
     * // Get one HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HcahpsHospitalSurveryFindFirstOrThrowArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HcahpsHospitalSurveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HcahpsHospitalSurveries
     * const hcahpsHospitalSurveries = await prisma.hcahpsHospitalSurvery.findMany()
     * 
     * // Get first 10 HcahpsHospitalSurveries
     * const hcahpsHospitalSurveries = await prisma.hcahpsHospitalSurvery.findMany({ take: 10 })
     * 
     * // Only select the `facilityId`
     * const hcahpsHospitalSurveryWithFacilityIdOnly = await prisma.hcahpsHospitalSurvery.findMany({ select: { facilityId: true } })
     * 
     */
    findMany<T extends HcahpsHospitalSurveryFindManyArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HcahpsHospitalSurvery.
     * @param {HcahpsHospitalSurveryCreateArgs} args - Arguments to create a HcahpsHospitalSurvery.
     * @example
     * // Create one HcahpsHospitalSurvery
     * const HcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.create({
     *   data: {
     *     // ... data to create a HcahpsHospitalSurvery
     *   }
     * })
     * 
     */
    create<T extends HcahpsHospitalSurveryCreateArgs>(args: SelectSubset<T, HcahpsHospitalSurveryCreateArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HcahpsHospitalSurveries.
     * @param {HcahpsHospitalSurveryCreateManyArgs} args - Arguments to create many HcahpsHospitalSurveries.
     * @example
     * // Create many HcahpsHospitalSurveries
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HcahpsHospitalSurveryCreateManyArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HcahpsHospitalSurveries and returns the data saved in the database.
     * @param {HcahpsHospitalSurveryCreateManyAndReturnArgs} args - Arguments to create many HcahpsHospitalSurveries.
     * @example
     * // Create many HcahpsHospitalSurveries
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HcahpsHospitalSurveries and only return the `facilityId`
     * const hcahpsHospitalSurveryWithFacilityIdOnly = await prisma.hcahpsHospitalSurvery.createManyAndReturn({
     *   select: { facilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HcahpsHospitalSurveryCreateManyAndReturnArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HcahpsHospitalSurvery.
     * @param {HcahpsHospitalSurveryDeleteArgs} args - Arguments to delete one HcahpsHospitalSurvery.
     * @example
     * // Delete one HcahpsHospitalSurvery
     * const HcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.delete({
     *   where: {
     *     // ... filter to delete one HcahpsHospitalSurvery
     *   }
     * })
     * 
     */
    delete<T extends HcahpsHospitalSurveryDeleteArgs>(args: SelectSubset<T, HcahpsHospitalSurveryDeleteArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HcahpsHospitalSurvery.
     * @param {HcahpsHospitalSurveryUpdateArgs} args - Arguments to update one HcahpsHospitalSurvery.
     * @example
     * // Update one HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HcahpsHospitalSurveryUpdateArgs>(args: SelectSubset<T, HcahpsHospitalSurveryUpdateArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HcahpsHospitalSurveries.
     * @param {HcahpsHospitalSurveryDeleteManyArgs} args - Arguments to filter HcahpsHospitalSurveries to delete.
     * @example
     * // Delete a few HcahpsHospitalSurveries
     * const { count } = await prisma.hcahpsHospitalSurvery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HcahpsHospitalSurveryDeleteManyArgs>(args?: SelectSubset<T, HcahpsHospitalSurveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HcahpsHospitalSurveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HcahpsHospitalSurveries
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HcahpsHospitalSurveryUpdateManyArgs>(args: SelectSubset<T, HcahpsHospitalSurveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HcahpsHospitalSurveries and returns the data updated in the database.
     * @param {HcahpsHospitalSurveryUpdateManyAndReturnArgs} args - Arguments to update many HcahpsHospitalSurveries.
     * @example
     * // Update many HcahpsHospitalSurveries
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HcahpsHospitalSurveries and only return the `facilityId`
     * const hcahpsHospitalSurveryWithFacilityIdOnly = await prisma.hcahpsHospitalSurvery.updateManyAndReturn({
     *   select: { facilityId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HcahpsHospitalSurveryUpdateManyAndReturnArgs>(args: SelectSubset<T, HcahpsHospitalSurveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HcahpsHospitalSurvery.
     * @param {HcahpsHospitalSurveryUpsertArgs} args - Arguments to update or create a HcahpsHospitalSurvery.
     * @example
     * // Update or create a HcahpsHospitalSurvery
     * const hcahpsHospitalSurvery = await prisma.hcahpsHospitalSurvery.upsert({
     *   create: {
     *     // ... data to create a HcahpsHospitalSurvery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HcahpsHospitalSurvery we want to update
     *   }
     * })
     */
    upsert<T extends HcahpsHospitalSurveryUpsertArgs>(args: SelectSubset<T, HcahpsHospitalSurveryUpsertArgs<ExtArgs>>): Prisma__HcahpsHospitalSurveryClient<$Result.GetResult<Prisma.$HcahpsHospitalSurveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HcahpsHospitalSurveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryCountArgs} args - Arguments to filter HcahpsHospitalSurveries to count.
     * @example
     * // Count the number of HcahpsHospitalSurveries
     * const count = await prisma.hcahpsHospitalSurvery.count({
     *   where: {
     *     // ... the filter for the HcahpsHospitalSurveries we want to count
     *   }
     * })
    **/
    count<T extends HcahpsHospitalSurveryCountArgs>(
      args?: Subset<T, HcahpsHospitalSurveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HcahpsHospitalSurveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HcahpsHospitalSurvery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HcahpsHospitalSurveryAggregateArgs>(args: Subset<T, HcahpsHospitalSurveryAggregateArgs>): Prisma.PrismaPromise<GetHcahpsHospitalSurveryAggregateType<T>>

    /**
     * Group by HcahpsHospitalSurvery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HcahpsHospitalSurveryGroupByArgs} args - Group by arguments.
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
      T extends HcahpsHospitalSurveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HcahpsHospitalSurveryGroupByArgs['orderBy'] }
        : { orderBy?: HcahpsHospitalSurveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HcahpsHospitalSurveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHcahpsHospitalSurveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HcahpsHospitalSurvery model
   */
  readonly fields: HcahpsHospitalSurveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HcahpsHospitalSurvery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HcahpsHospitalSurveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HcahpsHospitalSurvery model
   */
  interface HcahpsHospitalSurveryFieldRefs {
    readonly facilityId: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly facilityName: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly address: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly city: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly zip: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly state: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly telephone: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly measureId: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly question: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly response: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly hcahpsAnswerPercen: FieldRef<"HcahpsHospitalSurvery", 'String'>
    readonly completedSurveys: FieldRef<"HcahpsHospitalSurvery", 'Int'>
    readonly responseRatePercent: FieldRef<"HcahpsHospitalSurvery", 'Int'>
    readonly startDate: FieldRef<"HcahpsHospitalSurvery", 'DateTime'>
    readonly endDate: FieldRef<"HcahpsHospitalSurvery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HcahpsHospitalSurvery findUnique
   */
  export type HcahpsHospitalSurveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter, which HcahpsHospitalSurvery to fetch.
     */
    where: HcahpsHospitalSurveryWhereUniqueInput
  }

  /**
   * HcahpsHospitalSurvery findUniqueOrThrow
   */
  export type HcahpsHospitalSurveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter, which HcahpsHospitalSurvery to fetch.
     */
    where: HcahpsHospitalSurveryWhereUniqueInput
  }

  /**
   * HcahpsHospitalSurvery findFirst
   */
  export type HcahpsHospitalSurveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter, which HcahpsHospitalSurvery to fetch.
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HcahpsHospitalSurveries to fetch.
     */
    orderBy?: HcahpsHospitalSurveryOrderByWithRelationInput | HcahpsHospitalSurveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HcahpsHospitalSurveries.
     */
    cursor?: HcahpsHospitalSurveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HcahpsHospitalSurveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HcahpsHospitalSurveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HcahpsHospitalSurveries.
     */
    distinct?: HcahpsHospitalSurveryScalarFieldEnum | HcahpsHospitalSurveryScalarFieldEnum[]
  }

  /**
   * HcahpsHospitalSurvery findFirstOrThrow
   */
  export type HcahpsHospitalSurveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter, which HcahpsHospitalSurvery to fetch.
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HcahpsHospitalSurveries to fetch.
     */
    orderBy?: HcahpsHospitalSurveryOrderByWithRelationInput | HcahpsHospitalSurveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HcahpsHospitalSurveries.
     */
    cursor?: HcahpsHospitalSurveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HcahpsHospitalSurveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HcahpsHospitalSurveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HcahpsHospitalSurveries.
     */
    distinct?: HcahpsHospitalSurveryScalarFieldEnum | HcahpsHospitalSurveryScalarFieldEnum[]
  }

  /**
   * HcahpsHospitalSurvery findMany
   */
  export type HcahpsHospitalSurveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter, which HcahpsHospitalSurveries to fetch.
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HcahpsHospitalSurveries to fetch.
     */
    orderBy?: HcahpsHospitalSurveryOrderByWithRelationInput | HcahpsHospitalSurveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HcahpsHospitalSurveries.
     */
    cursor?: HcahpsHospitalSurveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HcahpsHospitalSurveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HcahpsHospitalSurveries.
     */
    skip?: number
    distinct?: HcahpsHospitalSurveryScalarFieldEnum | HcahpsHospitalSurveryScalarFieldEnum[]
  }

  /**
   * HcahpsHospitalSurvery create
   */
  export type HcahpsHospitalSurveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * The data needed to create a HcahpsHospitalSurvery.
     */
    data: XOR<HcahpsHospitalSurveryCreateInput, HcahpsHospitalSurveryUncheckedCreateInput>
  }

  /**
   * HcahpsHospitalSurvery createMany
   */
  export type HcahpsHospitalSurveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HcahpsHospitalSurveries.
     */
    data: HcahpsHospitalSurveryCreateManyInput | HcahpsHospitalSurveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HcahpsHospitalSurvery createManyAndReturn
   */
  export type HcahpsHospitalSurveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * The data used to create many HcahpsHospitalSurveries.
     */
    data: HcahpsHospitalSurveryCreateManyInput | HcahpsHospitalSurveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HcahpsHospitalSurvery update
   */
  export type HcahpsHospitalSurveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * The data needed to update a HcahpsHospitalSurvery.
     */
    data: XOR<HcahpsHospitalSurveryUpdateInput, HcahpsHospitalSurveryUncheckedUpdateInput>
    /**
     * Choose, which HcahpsHospitalSurvery to update.
     */
    where: HcahpsHospitalSurveryWhereUniqueInput
  }

  /**
   * HcahpsHospitalSurvery updateMany
   */
  export type HcahpsHospitalSurveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HcahpsHospitalSurveries.
     */
    data: XOR<HcahpsHospitalSurveryUpdateManyMutationInput, HcahpsHospitalSurveryUncheckedUpdateManyInput>
    /**
     * Filter which HcahpsHospitalSurveries to update
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * Limit how many HcahpsHospitalSurveries to update.
     */
    limit?: number
  }

  /**
   * HcahpsHospitalSurvery updateManyAndReturn
   */
  export type HcahpsHospitalSurveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * The data used to update HcahpsHospitalSurveries.
     */
    data: XOR<HcahpsHospitalSurveryUpdateManyMutationInput, HcahpsHospitalSurveryUncheckedUpdateManyInput>
    /**
     * Filter which HcahpsHospitalSurveries to update
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * Limit how many HcahpsHospitalSurveries to update.
     */
    limit?: number
  }

  /**
   * HcahpsHospitalSurvery upsert
   */
  export type HcahpsHospitalSurveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * The filter to search for the HcahpsHospitalSurvery to update in case it exists.
     */
    where: HcahpsHospitalSurveryWhereUniqueInput
    /**
     * In case the HcahpsHospitalSurvery found by the `where` argument doesn't exist, create a new HcahpsHospitalSurvery with this data.
     */
    create: XOR<HcahpsHospitalSurveryCreateInput, HcahpsHospitalSurveryUncheckedCreateInput>
    /**
     * In case the HcahpsHospitalSurvery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HcahpsHospitalSurveryUpdateInput, HcahpsHospitalSurveryUncheckedUpdateInput>
  }

  /**
   * HcahpsHospitalSurvery delete
   */
  export type HcahpsHospitalSurveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
    /**
     * Filter which HcahpsHospitalSurvery to delete.
     */
    where: HcahpsHospitalSurveryWhereUniqueInput
  }

  /**
   * HcahpsHospitalSurvery deleteMany
   */
  export type HcahpsHospitalSurveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HcahpsHospitalSurveries to delete
     */
    where?: HcahpsHospitalSurveryWhereInput
    /**
     * Limit how many HcahpsHospitalSurveries to delete.
     */
    limit?: number
  }

  /**
   * HcahpsHospitalSurvery without action
   */
  export type HcahpsHospitalSurveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HcahpsHospitalSurvery
     */
    select?: HcahpsHospitalSurverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HcahpsHospitalSurvery
     */
    omit?: HcahpsHospitalSurveryOmit<ExtArgs> | null
  }


  /**
   * Model HospitalInformation
   */

  export type AggregateHospitalInformation = {
    _count: HospitalInformationCountAggregateOutputType | null
    _min: HospitalInformationMinAggregateOutputType | null
    _max: HospitalInformationMaxAggregateOutputType | null
  }

  export type HospitalInformationMinAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    address: string | null
    city: string | null
    zip: string | null
    state: string | null
    country: string | null
    telephone: string | null
    hospitalType: string | null
    hospitalOwnership: string | null
    hospitalOverallRating: string | null
    hospitalOverallRatingFootnote: string | null
    emergencyServices: string | null
  }

  export type HospitalInformationMaxAggregateOutputType = {
    facilityId: string | null
    facilityName: string | null
    address: string | null
    city: string | null
    zip: string | null
    state: string | null
    country: string | null
    telephone: string | null
    hospitalType: string | null
    hospitalOwnership: string | null
    hospitalOverallRating: string | null
    hospitalOverallRatingFootnote: string | null
    emergencyServices: string | null
  }

  export type HospitalInformationCountAggregateOutputType = {
    facilityId: number
    facilityName: number
    address: number
    city: number
    zip: number
    state: number
    country: number
    telephone: number
    hospitalType: number
    hospitalOwnership: number
    hospitalOverallRating: number
    hospitalOverallRatingFootnote: number
    emergencyServices: number
    _all: number
  }


  export type HospitalInformationMinAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    country?: true
    telephone?: true
    hospitalType?: true
    hospitalOwnership?: true
    hospitalOverallRating?: true
    hospitalOverallRatingFootnote?: true
    emergencyServices?: true
  }

  export type HospitalInformationMaxAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    country?: true
    telephone?: true
    hospitalType?: true
    hospitalOwnership?: true
    hospitalOverallRating?: true
    hospitalOverallRatingFootnote?: true
    emergencyServices?: true
  }

  export type HospitalInformationCountAggregateInputType = {
    facilityId?: true
    facilityName?: true
    address?: true
    city?: true
    zip?: true
    state?: true
    country?: true
    telephone?: true
    hospitalType?: true
    hospitalOwnership?: true
    hospitalOverallRating?: true
    hospitalOverallRatingFootnote?: true
    emergencyServices?: true
    _all?: true
  }

  export type HospitalInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalInformation to aggregate.
     */
    where?: HospitalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalInformations to fetch.
     */
    orderBy?: HospitalInformationOrderByWithRelationInput | HospitalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HospitalInformations
    **/
    _count?: true | HospitalInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalInformationMaxAggregateInputType
  }

  export type GetHospitalInformationAggregateType<T extends HospitalInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitalInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitalInformation[P]>
      : GetScalarType<T[P], AggregateHospitalInformation[P]>
  }




  export type HospitalInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalInformationWhereInput
    orderBy?: HospitalInformationOrderByWithAggregationInput | HospitalInformationOrderByWithAggregationInput[]
    by: HospitalInformationScalarFieldEnum[] | HospitalInformationScalarFieldEnum
    having?: HospitalInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalInformationCountAggregateInputType | true
    _min?: HospitalInformationMinAggregateInputType
    _max?: HospitalInformationMaxAggregateInputType
  }

  export type HospitalInformationGroupByOutputType = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote: string | null
    emergencyServices: string
    _count: HospitalInformationCountAggregateOutputType | null
    _min: HospitalInformationMinAggregateOutputType | null
    _max: HospitalInformationMaxAggregateOutputType | null
  }

  type GetHospitalInformationGroupByPayload<T extends HospitalInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalInformationGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalInformationGroupByOutputType[P]>
        }
      >
    >


  export type HospitalInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    country?: boolean
    telephone?: boolean
    hospitalType?: boolean
    hospitalOwnership?: boolean
    hospitalOverallRating?: boolean
    hospitalOverallRatingFootnote?: boolean
    emergencyServices?: boolean
    users?: boolean | HospitalInformation$usersArgs<ExtArgs>
    _count?: boolean | HospitalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalInformation"]>

  export type HospitalInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    country?: boolean
    telephone?: boolean
    hospitalType?: boolean
    hospitalOwnership?: boolean
    hospitalOverallRating?: boolean
    hospitalOverallRatingFootnote?: boolean
    emergencyServices?: boolean
  }, ExtArgs["result"]["hospitalInformation"]>

  export type HospitalInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    country?: boolean
    telephone?: boolean
    hospitalType?: boolean
    hospitalOwnership?: boolean
    hospitalOverallRating?: boolean
    hospitalOverallRatingFootnote?: boolean
    emergencyServices?: boolean
  }, ExtArgs["result"]["hospitalInformation"]>

  export type HospitalInformationSelectScalar = {
    facilityId?: boolean
    facilityName?: boolean
    address?: boolean
    city?: boolean
    zip?: boolean
    state?: boolean
    country?: boolean
    telephone?: boolean
    hospitalType?: boolean
    hospitalOwnership?: boolean
    hospitalOverallRating?: boolean
    hospitalOverallRatingFootnote?: boolean
    emergencyServices?: boolean
  }

  export type HospitalInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"facilityId" | "facilityName" | "address" | "city" | "zip" | "state" | "country" | "telephone" | "hospitalType" | "hospitalOwnership" | "hospitalOverallRating" | "hospitalOverallRatingFootnote" | "emergencyServices", ExtArgs["result"]["hospitalInformation"]>
  export type HospitalInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HospitalInformation$usersArgs<ExtArgs>
    _count?: boolean | HospitalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospitalInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HospitalInformation"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      facilityId: string
      facilityName: string
      address: string
      city: string
      zip: string
      state: string
      country: string
      telephone: string
      hospitalType: string
      hospitalOwnership: string
      hospitalOverallRating: string
      hospitalOverallRatingFootnote: string | null
      emergencyServices: string
    }, ExtArgs["result"]["hospitalInformation"]>
    composites: {}
  }

  type HospitalInformationGetPayload<S extends boolean | null | undefined | HospitalInformationDefaultArgs> = $Result.GetResult<Prisma.$HospitalInformationPayload, S>

  type HospitalInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalInformationCountAggregateInputType | true
    }

  export interface HospitalInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HospitalInformation'], meta: { name: 'HospitalInformation' } }
    /**
     * Find zero or one HospitalInformation that matches the filter.
     * @param {HospitalInformationFindUniqueArgs} args - Arguments to find a HospitalInformation
     * @example
     * // Get one HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalInformationFindUniqueArgs>(args: SelectSubset<T, HospitalInformationFindUniqueArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HospitalInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalInformationFindUniqueOrThrowArgs} args - Arguments to find a HospitalInformation
     * @example
     * // Get one HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationFindFirstArgs} args - Arguments to find a HospitalInformation
     * @example
     * // Get one HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalInformationFindFirstArgs>(args?: SelectSubset<T, HospitalInformationFindFirstArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationFindFirstOrThrowArgs} args - Arguments to find a HospitalInformation
     * @example
     * // Get one HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HospitalInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HospitalInformations
     * const hospitalInformations = await prisma.hospitalInformation.findMany()
     * 
     * // Get first 10 HospitalInformations
     * const hospitalInformations = await prisma.hospitalInformation.findMany({ take: 10 })
     * 
     * // Only select the `facilityId`
     * const hospitalInformationWithFacilityIdOnly = await prisma.hospitalInformation.findMany({ select: { facilityId: true } })
     * 
     */
    findMany<T extends HospitalInformationFindManyArgs>(args?: SelectSubset<T, HospitalInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HospitalInformation.
     * @param {HospitalInformationCreateArgs} args - Arguments to create a HospitalInformation.
     * @example
     * // Create one HospitalInformation
     * const HospitalInformation = await prisma.hospitalInformation.create({
     *   data: {
     *     // ... data to create a HospitalInformation
     *   }
     * })
     * 
     */
    create<T extends HospitalInformationCreateArgs>(args: SelectSubset<T, HospitalInformationCreateArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HospitalInformations.
     * @param {HospitalInformationCreateManyArgs} args - Arguments to create many HospitalInformations.
     * @example
     * // Create many HospitalInformations
     * const hospitalInformation = await prisma.hospitalInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalInformationCreateManyArgs>(args?: SelectSubset<T, HospitalInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HospitalInformations and returns the data saved in the database.
     * @param {HospitalInformationCreateManyAndReturnArgs} args - Arguments to create many HospitalInformations.
     * @example
     * // Create many HospitalInformations
     * const hospitalInformation = await prisma.hospitalInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HospitalInformations and only return the `facilityId`
     * const hospitalInformationWithFacilityIdOnly = await prisma.hospitalInformation.createManyAndReturn({
     *   select: { facilityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HospitalInformation.
     * @param {HospitalInformationDeleteArgs} args - Arguments to delete one HospitalInformation.
     * @example
     * // Delete one HospitalInformation
     * const HospitalInformation = await prisma.hospitalInformation.delete({
     *   where: {
     *     // ... filter to delete one HospitalInformation
     *   }
     * })
     * 
     */
    delete<T extends HospitalInformationDeleteArgs>(args: SelectSubset<T, HospitalInformationDeleteArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HospitalInformation.
     * @param {HospitalInformationUpdateArgs} args - Arguments to update one HospitalInformation.
     * @example
     * // Update one HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalInformationUpdateArgs>(args: SelectSubset<T, HospitalInformationUpdateArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HospitalInformations.
     * @param {HospitalInformationDeleteManyArgs} args - Arguments to filter HospitalInformations to delete.
     * @example
     * // Delete a few HospitalInformations
     * const { count } = await prisma.hospitalInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalInformationDeleteManyArgs>(args?: SelectSubset<T, HospitalInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HospitalInformations
     * const hospitalInformation = await prisma.hospitalInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalInformationUpdateManyArgs>(args: SelectSubset<T, HospitalInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalInformations and returns the data updated in the database.
     * @param {HospitalInformationUpdateManyAndReturnArgs} args - Arguments to update many HospitalInformations.
     * @example
     * // Update many HospitalInformations
     * const hospitalInformation = await prisma.hospitalInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HospitalInformations and only return the `facilityId`
     * const hospitalInformationWithFacilityIdOnly = await prisma.hospitalInformation.updateManyAndReturn({
     *   select: { facilityId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HospitalInformation.
     * @param {HospitalInformationUpsertArgs} args - Arguments to update or create a HospitalInformation.
     * @example
     * // Update or create a HospitalInformation
     * const hospitalInformation = await prisma.hospitalInformation.upsert({
     *   create: {
     *     // ... data to create a HospitalInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HospitalInformation we want to update
     *   }
     * })
     */
    upsert<T extends HospitalInformationUpsertArgs>(args: SelectSubset<T, HospitalInformationUpsertArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HospitalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationCountArgs} args - Arguments to filter HospitalInformations to count.
     * @example
     * // Count the number of HospitalInformations
     * const count = await prisma.hospitalInformation.count({
     *   where: {
     *     // ... the filter for the HospitalInformations we want to count
     *   }
     * })
    **/
    count<T extends HospitalInformationCountArgs>(
      args?: Subset<T, HospitalInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HospitalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalInformationAggregateArgs>(args: Subset<T, HospitalInformationAggregateArgs>): Prisma.PrismaPromise<GetHospitalInformationAggregateType<T>>

    /**
     * Group by HospitalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalInformationGroupByArgs} args - Group by arguments.
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
      T extends HospitalInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalInformationGroupByArgs['orderBy'] }
        : { orderBy?: HospitalInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HospitalInformation model
   */
  readonly fields: HospitalInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HospitalInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends HospitalInformation$usersArgs<ExtArgs> = {}>(args?: Subset<T, HospitalInformation$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HospitalInformation model
   */
  interface HospitalInformationFieldRefs {
    readonly facilityId: FieldRef<"HospitalInformation", 'String'>
    readonly facilityName: FieldRef<"HospitalInformation", 'String'>
    readonly address: FieldRef<"HospitalInformation", 'String'>
    readonly city: FieldRef<"HospitalInformation", 'String'>
    readonly zip: FieldRef<"HospitalInformation", 'String'>
    readonly state: FieldRef<"HospitalInformation", 'String'>
    readonly country: FieldRef<"HospitalInformation", 'String'>
    readonly telephone: FieldRef<"HospitalInformation", 'String'>
    readonly hospitalType: FieldRef<"HospitalInformation", 'String'>
    readonly hospitalOwnership: FieldRef<"HospitalInformation", 'String'>
    readonly hospitalOverallRating: FieldRef<"HospitalInformation", 'String'>
    readonly hospitalOverallRatingFootnote: FieldRef<"HospitalInformation", 'String'>
    readonly emergencyServices: FieldRef<"HospitalInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HospitalInformation findUnique
   */
  export type HospitalInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter, which HospitalInformation to fetch.
     */
    where: HospitalInformationWhereUniqueInput
  }

  /**
   * HospitalInformation findUniqueOrThrow
   */
  export type HospitalInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter, which HospitalInformation to fetch.
     */
    where: HospitalInformationWhereUniqueInput
  }

  /**
   * HospitalInformation findFirst
   */
  export type HospitalInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter, which HospitalInformation to fetch.
     */
    where?: HospitalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalInformations to fetch.
     */
    orderBy?: HospitalInformationOrderByWithRelationInput | HospitalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalInformations.
     */
    cursor?: HospitalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalInformations.
     */
    distinct?: HospitalInformationScalarFieldEnum | HospitalInformationScalarFieldEnum[]
  }

  /**
   * HospitalInformation findFirstOrThrow
   */
  export type HospitalInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter, which HospitalInformation to fetch.
     */
    where?: HospitalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalInformations to fetch.
     */
    orderBy?: HospitalInformationOrderByWithRelationInput | HospitalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalInformations.
     */
    cursor?: HospitalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalInformations.
     */
    distinct?: HospitalInformationScalarFieldEnum | HospitalInformationScalarFieldEnum[]
  }

  /**
   * HospitalInformation findMany
   */
  export type HospitalInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter, which HospitalInformations to fetch.
     */
    where?: HospitalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalInformations to fetch.
     */
    orderBy?: HospitalInformationOrderByWithRelationInput | HospitalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HospitalInformations.
     */
    cursor?: HospitalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalInformations.
     */
    skip?: number
    distinct?: HospitalInformationScalarFieldEnum | HospitalInformationScalarFieldEnum[]
  }

  /**
   * HospitalInformation create
   */
  export type HospitalInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a HospitalInformation.
     */
    data: XOR<HospitalInformationCreateInput, HospitalInformationUncheckedCreateInput>
  }

  /**
   * HospitalInformation createMany
   */
  export type HospitalInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HospitalInformations.
     */
    data: HospitalInformationCreateManyInput | HospitalInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HospitalInformation createManyAndReturn
   */
  export type HospitalInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * The data used to create many HospitalInformations.
     */
    data: HospitalInformationCreateManyInput | HospitalInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HospitalInformation update
   */
  export type HospitalInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a HospitalInformation.
     */
    data: XOR<HospitalInformationUpdateInput, HospitalInformationUncheckedUpdateInput>
    /**
     * Choose, which HospitalInformation to update.
     */
    where: HospitalInformationWhereUniqueInput
  }

  /**
   * HospitalInformation updateMany
   */
  export type HospitalInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HospitalInformations.
     */
    data: XOR<HospitalInformationUpdateManyMutationInput, HospitalInformationUncheckedUpdateManyInput>
    /**
     * Filter which HospitalInformations to update
     */
    where?: HospitalInformationWhereInput
    /**
     * Limit how many HospitalInformations to update.
     */
    limit?: number
  }

  /**
   * HospitalInformation updateManyAndReturn
   */
  export type HospitalInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * The data used to update HospitalInformations.
     */
    data: XOR<HospitalInformationUpdateManyMutationInput, HospitalInformationUncheckedUpdateManyInput>
    /**
     * Filter which HospitalInformations to update
     */
    where?: HospitalInformationWhereInput
    /**
     * Limit how many HospitalInformations to update.
     */
    limit?: number
  }

  /**
   * HospitalInformation upsert
   */
  export type HospitalInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the HospitalInformation to update in case it exists.
     */
    where: HospitalInformationWhereUniqueInput
    /**
     * In case the HospitalInformation found by the `where` argument doesn't exist, create a new HospitalInformation with this data.
     */
    create: XOR<HospitalInformationCreateInput, HospitalInformationUncheckedCreateInput>
    /**
     * In case the HospitalInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalInformationUpdateInput, HospitalInformationUncheckedUpdateInput>
  }

  /**
   * HospitalInformation delete
   */
  export type HospitalInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    /**
     * Filter which HospitalInformation to delete.
     */
    where: HospitalInformationWhereUniqueInput
  }

  /**
   * HospitalInformation deleteMany
   */
  export type HospitalInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalInformations to delete
     */
    where?: HospitalInformationWhereInput
    /**
     * Limit how many HospitalInformations to delete.
     */
    limit?: number
  }

  /**
   * HospitalInformation.users
   */
  export type HospitalInformation$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * HospitalInformation without action
   */
  export type HospitalInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
  }


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
    fullname: string | null
    email: string | null
    password: string | null
    witnesshash: string | null
    phone: string | null
    address: string | null
    about: string | null
    userType: $Enums.UserType | null
    authProvider: $Enums.AuthProvider | null
    providerId: string | null
    hospitalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    password: string | null
    witnesshash: string | null
    phone: string | null
    address: string | null
    about: string | null
    userType: $Enums.UserType | null
    authProvider: $Enums.AuthProvider | null
    providerId: string | null
    hospitalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    witnesshash: number
    phone: number
    address: number
    about: number
    userType: number
    authProvider: number
    providerId: number
    hospitalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    witnesshash?: true
    phone?: true
    address?: true
    about?: true
    userType?: true
    authProvider?: true
    providerId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    witnesshash?: true
    phone?: true
    address?: true
    about?: true
    userType?: true
    authProvider?: true
    providerId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    witnesshash?: true
    phone?: true
    address?: true
    about?: true
    userType?: true
    authProvider?: true
    providerId?: true
    hospitalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string
    email: string
    password: string | null
    witnesshash: string
    phone: string
    address: string
    about: string | null
    userType: $Enums.UserType
    authProvider: $Enums.AuthProvider
    providerId: string | null
    hospitalId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    witnesshash?: boolean
    phone?: boolean
    address?: boolean
    about?: boolean
    userType?: boolean
    authProvider?: boolean
    providerId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    registeredHospital?: boolean | User$registeredHospitalArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    preferredHospitals?: boolean | User$preferredHospitalsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    witnesshash?: boolean
    phone?: boolean
    address?: boolean
    about?: boolean
    userType?: boolean
    authProvider?: boolean
    providerId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    witnesshash?: boolean
    phone?: boolean
    address?: boolean
    about?: boolean
    userType?: boolean
    authProvider?: boolean
    providerId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    witnesshash?: boolean
    phone?: boolean
    address?: boolean
    about?: boolean
    userType?: boolean
    authProvider?: boolean
    providerId?: boolean
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "witnesshash" | "phone" | "address" | "about" | "userType" | "authProvider" | "providerId" | "hospitalId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    registeredHospital?: boolean | User$registeredHospitalArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    preferredHospitals?: boolean | User$preferredHospitalsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hospital: Prisma.$HospitalInformationPayload<ExtArgs> | null
      registeredHospital: Prisma.$HospitalPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      requests: Prisma.$HospitalRequestPayload<ExtArgs>[]
      preferredHospitals: Prisma.$UserPreferencePayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      credits: Prisma.$CreditPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      password: string | null
      witnesshash: string
      phone: string
      address: string
      about: string | null
      userType: $Enums.UserType
      authProvider: $Enums.AuthProvider
      providerId: string | null
      hospitalId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends User$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, User$hospitalArgs<ExtArgs>>): Prisma__HospitalInformationClient<$Result.GetResult<Prisma.$HospitalInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registeredHospital<T extends User$registeredHospitalArgs<ExtArgs> = {}>(args?: Subset<T, User$registeredHospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredHospitals<T extends User$preferredHospitalsArgs<ExtArgs> = {}>(args?: Subset<T, User$preferredHospitalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    credits<T extends User$creditsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditsArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly witnesshash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly hospitalId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hospital
   */
  export type User$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalInformation
     */
    select?: HospitalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalInformation
     */
    omit?: HospitalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInformationInclude<ExtArgs> | null
    where?: HospitalInformationWhereInput
  }

  /**
   * User.registeredHospital
   */
  export type User$registeredHospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    where?: HospitalRequestWhereInput
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    cursor?: HospitalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalRequestScalarFieldEnum | HospitalRequestScalarFieldEnum[]
  }

  /**
   * User.preferredHospitals
   */
  export type User$preferredHospitalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    cursor?: UserPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.credits
   */
  export type User$creditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    where?: CreditWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    rating: number | null
    reviews: number | null
    totalRequests: number | null
    totalDonors: number | null
    totalCustomers: number | null
    totalTreatments: number | null
  }

  export type HospitalSumAggregateOutputType = {
    rating: number | null
    reviews: number | null
    totalRequests: number | null
    totalDonors: number | null
    totalCustomers: number | null
    totalTreatments: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    rating: number | null
    imageUrl: string | null
    isFavorite: boolean | null
    reviews: number | null
    verified: boolean | null
    walletAddress: string | null
    ownerId: string | null
    totalRequests: number | null
    totalDonors: number | null
    totalCustomers: number | null
    totalTreatments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    rating: number | null
    imageUrl: string | null
    isFavorite: boolean | null
    reviews: number | null
    verified: boolean | null
    walletAddress: string | null
    ownerId: string | null
    totalRequests: number | null
    totalDonors: number | null
    totalCustomers: number | null
    totalTreatments: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    location: number
    rating: number
    specialties: number
    imageUrl: number
    isFavorite: number
    reviews: number
    verified: number
    walletAddress: number
    ownerId: number
    totalRequests: number
    totalDonors: number
    totalCustomers: number
    totalTreatments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    rating?: true
    reviews?: true
    totalRequests?: true
    totalDonors?: true
    totalCustomers?: true
    totalTreatments?: true
  }

  export type HospitalSumAggregateInputType = {
    rating?: true
    reviews?: true
    totalRequests?: true
    totalDonors?: true
    totalCustomers?: true
    totalTreatments?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    imageUrl?: true
    isFavorite?: true
    reviews?: true
    verified?: true
    walletAddress?: true
    ownerId?: true
    totalRequests?: true
    totalDonors?: true
    totalCustomers?: true
    totalTreatments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    imageUrl?: true
    isFavorite?: true
    reviews?: true
    verified?: true
    walletAddress?: true
    ownerId?: true
    totalRequests?: true
    totalDonors?: true
    totalCustomers?: true
    totalTreatments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    specialties?: true
    imageUrl?: true
    isFavorite?: true
    reviews?: true
    verified?: true
    walletAddress?: true
    ownerId?: true
    totalRequests?: true
    totalDonors?: true
    totalCustomers?: true
    totalTreatments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    name: string
    location: string
    rating: number
    specialties: string[]
    imageUrl: string | null
    isFavorite: boolean
    reviews: number
    verified: boolean
    walletAddress: string
    ownerId: string
    totalRequests: number
    totalDonors: number
    totalCustomers: number
    totalTreatments: number
    createdAt: Date
    updatedAt: Date
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    specialties?: boolean
    imageUrl?: boolean
    isFavorite?: boolean
    reviews?: boolean
    verified?: boolean
    walletAddress?: boolean
    ownerId?: boolean
    totalRequests?: boolean
    totalDonors?: boolean
    totalCustomers?: boolean
    totalTreatments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hospital$bookingsArgs<ExtArgs>
    requests?: boolean | Hospital$requestsArgs<ExtArgs>
    preferredUsers?: boolean | Hospital$preferredUsersArgs<ExtArgs>
    preferredTreatments?: boolean | Hospital$preferredTreatmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    specialties?: boolean
    imageUrl?: boolean
    isFavorite?: boolean
    reviews?: boolean
    verified?: boolean
    walletAddress?: boolean
    ownerId?: boolean
    totalRequests?: boolean
    totalDonors?: boolean
    totalCustomers?: boolean
    totalTreatments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    specialties?: boolean
    imageUrl?: boolean
    isFavorite?: boolean
    reviews?: boolean
    verified?: boolean
    walletAddress?: boolean
    ownerId?: boolean
    totalRequests?: boolean
    totalDonors?: boolean
    totalCustomers?: boolean
    totalTreatments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    specialties?: boolean
    imageUrl?: boolean
    isFavorite?: boolean
    reviews?: boolean
    verified?: boolean
    walletAddress?: boolean
    ownerId?: boolean
    totalRequests?: boolean
    totalDonors?: boolean
    totalCustomers?: boolean
    totalTreatments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "rating" | "specialties" | "imageUrl" | "isFavorite" | "reviews" | "verified" | "walletAddress" | "ownerId" | "totalRequests" | "totalDonors" | "totalCustomers" | "totalTreatments" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hospital$bookingsArgs<ExtArgs>
    requests?: boolean | Hospital$requestsArgs<ExtArgs>
    preferredUsers?: boolean | Hospital$preferredUsersArgs<ExtArgs>
    preferredTreatments?: boolean | Hospital$preferredTreatmentsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      requests: Prisma.$HospitalRequestPayload<ExtArgs>[]
      preferredUsers: Prisma.$UserPreferencePayload<ExtArgs>[]
      preferredTreatments: Prisma.$TreatmentPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      rating: number
      specialties: string[]
      imageUrl: string | null
      isFavorite: boolean
      reviews: number
      verified: boolean
      walletAddress: string
      ownerId: string
      totalRequests: number
      totalDonors: number
      totalCustomers: number
      totalTreatments: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Hospital$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Hospital$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredUsers<T extends Hospital$preferredUsersArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$preferredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferredTreatments<T extends Hospital$preferredTreatmentsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$preferredTreatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly location: FieldRef<"Hospital", 'String'>
    readonly rating: FieldRef<"Hospital", 'Float'>
    readonly specialties: FieldRef<"Hospital", 'String[]'>
    readonly imageUrl: FieldRef<"Hospital", 'String'>
    readonly isFavorite: FieldRef<"Hospital", 'Boolean'>
    readonly reviews: FieldRef<"Hospital", 'Int'>
    readonly verified: FieldRef<"Hospital", 'Boolean'>
    readonly walletAddress: FieldRef<"Hospital", 'String'>
    readonly ownerId: FieldRef<"Hospital", 'String'>
    readonly totalRequests: FieldRef<"Hospital", 'Int'>
    readonly totalDonors: FieldRef<"Hospital", 'Int'>
    readonly totalCustomers: FieldRef<"Hospital", 'Int'>
    readonly totalTreatments: FieldRef<"Hospital", 'Int'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.bookings
   */
  export type Hospital$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Hospital.requests
   */
  export type Hospital$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    where?: HospitalRequestWhereInput
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    cursor?: HospitalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalRequestScalarFieldEnum | HospitalRequestScalarFieldEnum[]
  }

  /**
   * Hospital.preferredUsers
   */
  export type Hospital$preferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    cursor?: UserPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * Hospital.preferredTreatments
   */
  export type Hospital$preferredTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    where?: TreatmentPreferenceWhereInput
    orderBy?: TreatmentPreferenceOrderByWithRelationInput | TreatmentPreferenceOrderByWithRelationInput[]
    cursor?: TreatmentPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentPreferenceScalarFieldEnum | TreatmentPreferenceScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    duration: number | null
  }

  export type BookingSumAggregateOutputType = {
    duration: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    userId: string | null
    appointmentDate: Date | null
    duration: number | null
    purpose: string | null
    additionalNotes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    userId: string | null
    appointmentDate: Date | null
    duration: number | null
    purpose: string | null
    additionalNotes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    hospitalId: number
    userId: number
    appointmentDate: number
    duration: number
    purpose: number
    additionalNotes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    duration?: true
  }

  export type BookingSumAggregateInputType = {
    duration?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    appointmentDate?: true
    duration?: true
    purpose?: true
    additionalNotes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    appointmentDate?: true
    duration?: true
    purpose?: true
    additionalNotes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    appointmentDate?: true
    duration?: true
    purpose?: true
    additionalNotes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    hospitalId: string
    userId: string
    appointmentDate: Date
    duration: number
    purpose: string
    additionalNotes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    appointmentDate?: boolean
    duration?: boolean
    purpose?: boolean
    additionalNotes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Booking$requestArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    appointmentDate?: boolean
    duration?: boolean
    purpose?: boolean
    additionalNotes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    appointmentDate?: boolean
    duration?: boolean
    purpose?: boolean
    additionalNotes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    appointmentDate?: boolean
    duration?: boolean
    purpose?: boolean
    additionalNotes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospitalId" | "userId" | "appointmentDate" | "duration" | "purpose" | "additionalNotes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    request?: boolean | Booking$requestArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      request: Prisma.$HospitalRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hospitalId: string
      userId: string
      appointmentDate: Date
      duration: number
      purpose: string
      additionalNotes: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    request<T extends Booking$requestArgs<ExtArgs> = {}>(args?: Subset<T, Booking$requestArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly hospitalId: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly appointmentDate: FieldRef<"Booking", 'DateTime'>
    readonly duration: FieldRef<"Booking", 'Int'>
    readonly purpose: FieldRef<"Booking", 'String'>
    readonly additionalNotes: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.request
   */
  export type Booking$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    where?: HospitalRequestWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model HospitalRequest
   */

  export type AggregateHospitalRequest = {
    _count: HospitalRequestCountAggregateOutputType | null
    _min: HospitalRequestMinAggregateOutputType | null
    _max: HospitalRequestMaxAggregateOutputType | null
  }

  export type HospitalRequestMinAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    userId: string | null
    requestType: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    title: string | null
    description: string | null
    bookingId: string | null
    treatmentId: string | null
    priority: string | null
    requestedDate: Date | null
    completedDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalRequestMaxAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    userId: string | null
    requestType: $Enums.RequestType | null
    status: $Enums.RequestStatus | null
    title: string | null
    description: string | null
    bookingId: string | null
    treatmentId: string | null
    priority: string | null
    requestedDate: Date | null
    completedDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalRequestCountAggregateOutputType = {
    id: number
    hospitalId: number
    userId: number
    requestType: number
    status: number
    title: number
    description: number
    bookingId: number
    treatmentId: number
    priority: number
    requestedDate: number
    completedDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalRequestMinAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    requestType?: true
    status?: true
    title?: true
    description?: true
    bookingId?: true
    treatmentId?: true
    priority?: true
    requestedDate?: true
    completedDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalRequestMaxAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    requestType?: true
    status?: true
    title?: true
    description?: true
    bookingId?: true
    treatmentId?: true
    priority?: true
    requestedDate?: true
    completedDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalRequestCountAggregateInputType = {
    id?: true
    hospitalId?: true
    userId?: true
    requestType?: true
    status?: true
    title?: true
    description?: true
    bookingId?: true
    treatmentId?: true
    priority?: true
    requestedDate?: true
    completedDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalRequest to aggregate.
     */
    where?: HospitalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalRequests to fetch.
     */
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HospitalRequests
    **/
    _count?: true | HospitalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalRequestMaxAggregateInputType
  }

  export type GetHospitalRequestAggregateType<T extends HospitalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitalRequest[P]>
      : GetScalarType<T[P], AggregateHospitalRequest[P]>
  }




  export type HospitalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalRequestWhereInput
    orderBy?: HospitalRequestOrderByWithAggregationInput | HospitalRequestOrderByWithAggregationInput[]
    by: HospitalRequestScalarFieldEnum[] | HospitalRequestScalarFieldEnum
    having?: HospitalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalRequestCountAggregateInputType | true
    _min?: HospitalRequestMinAggregateInputType
    _max?: HospitalRequestMaxAggregateInputType
  }

  export type HospitalRequestGroupByOutputType = {
    id: string
    hospitalId: string | null
    userId: string
    requestType: $Enums.RequestType
    status: $Enums.RequestStatus
    title: string
    description: string | null
    bookingId: string | null
    treatmentId: string | null
    priority: string
    requestedDate: Date | null
    completedDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: HospitalRequestCountAggregateOutputType | null
    _min: HospitalRequestMinAggregateOutputType | null
    _max: HospitalRequestMaxAggregateOutputType | null
  }

  type GetHospitalRequestGroupByPayload<T extends HospitalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalRequestGroupByOutputType[P]>
        }
      >
    >


  export type HospitalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    requestType?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    bookingId?: boolean
    treatmentId?: boolean
    priority?: boolean
    requestedDate?: boolean
    completedDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalRequest"]>

  export type HospitalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    requestType?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    bookingId?: boolean
    treatmentId?: boolean
    priority?: boolean
    requestedDate?: boolean
    completedDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalRequest"]>

  export type HospitalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    requestType?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    bookingId?: boolean
    treatmentId?: boolean
    priority?: boolean
    requestedDate?: boolean
    completedDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalRequest"]>

  export type HospitalRequestSelectScalar = {
    id?: boolean
    hospitalId?: boolean
    userId?: boolean
    requestType?: boolean
    status?: boolean
    title?: boolean
    description?: boolean
    bookingId?: boolean
    treatmentId?: boolean
    priority?: boolean
    requestedDate?: boolean
    completedDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospitalId" | "userId" | "requestType" | "status" | "title" | "description" | "bookingId" | "treatmentId" | "priority" | "requestedDate" | "completedDate" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["hospitalRequest"]>
  export type HospitalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }
  export type HospitalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }
  export type HospitalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalRequest$hospitalArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | HospitalRequest$bookingArgs<ExtArgs>
  }

  export type $HospitalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HospitalRequest"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hospitalId: string | null
      userId: string
      requestType: $Enums.RequestType
      status: $Enums.RequestStatus
      title: string
      description: string | null
      bookingId: string | null
      treatmentId: string | null
      priority: string
      requestedDate: Date | null
      completedDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospitalRequest"]>
    composites: {}
  }

  type HospitalRequestGetPayload<S extends boolean | null | undefined | HospitalRequestDefaultArgs> = $Result.GetResult<Prisma.$HospitalRequestPayload, S>

  type HospitalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalRequestCountAggregateInputType | true
    }

  export interface HospitalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HospitalRequest'], meta: { name: 'HospitalRequest' } }
    /**
     * Find zero or one HospitalRequest that matches the filter.
     * @param {HospitalRequestFindUniqueArgs} args - Arguments to find a HospitalRequest
     * @example
     * // Get one HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalRequestFindUniqueArgs>(args: SelectSubset<T, HospitalRequestFindUniqueArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HospitalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalRequestFindUniqueOrThrowArgs} args - Arguments to find a HospitalRequest
     * @example
     * // Get one HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestFindFirstArgs} args - Arguments to find a HospitalRequest
     * @example
     * // Get one HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalRequestFindFirstArgs>(args?: SelectSubset<T, HospitalRequestFindFirstArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HospitalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestFindFirstOrThrowArgs} args - Arguments to find a HospitalRequest
     * @example
     * // Get one HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HospitalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HospitalRequests
     * const hospitalRequests = await prisma.hospitalRequest.findMany()
     * 
     * // Get first 10 HospitalRequests
     * const hospitalRequests = await prisma.hospitalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalRequestWithIdOnly = await prisma.hospitalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalRequestFindManyArgs>(args?: SelectSubset<T, HospitalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HospitalRequest.
     * @param {HospitalRequestCreateArgs} args - Arguments to create a HospitalRequest.
     * @example
     * // Create one HospitalRequest
     * const HospitalRequest = await prisma.hospitalRequest.create({
     *   data: {
     *     // ... data to create a HospitalRequest
     *   }
     * })
     * 
     */
    create<T extends HospitalRequestCreateArgs>(args: SelectSubset<T, HospitalRequestCreateArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HospitalRequests.
     * @param {HospitalRequestCreateManyArgs} args - Arguments to create many HospitalRequests.
     * @example
     * // Create many HospitalRequests
     * const hospitalRequest = await prisma.hospitalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalRequestCreateManyArgs>(args?: SelectSubset<T, HospitalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HospitalRequests and returns the data saved in the database.
     * @param {HospitalRequestCreateManyAndReturnArgs} args - Arguments to create many HospitalRequests.
     * @example
     * // Create many HospitalRequests
     * const hospitalRequest = await prisma.hospitalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HospitalRequests and only return the `id`
     * const hospitalRequestWithIdOnly = await prisma.hospitalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HospitalRequest.
     * @param {HospitalRequestDeleteArgs} args - Arguments to delete one HospitalRequest.
     * @example
     * // Delete one HospitalRequest
     * const HospitalRequest = await prisma.hospitalRequest.delete({
     *   where: {
     *     // ... filter to delete one HospitalRequest
     *   }
     * })
     * 
     */
    delete<T extends HospitalRequestDeleteArgs>(args: SelectSubset<T, HospitalRequestDeleteArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HospitalRequest.
     * @param {HospitalRequestUpdateArgs} args - Arguments to update one HospitalRequest.
     * @example
     * // Update one HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalRequestUpdateArgs>(args: SelectSubset<T, HospitalRequestUpdateArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HospitalRequests.
     * @param {HospitalRequestDeleteManyArgs} args - Arguments to filter HospitalRequests to delete.
     * @example
     * // Delete a few HospitalRequests
     * const { count } = await prisma.hospitalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalRequestDeleteManyArgs>(args?: SelectSubset<T, HospitalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HospitalRequests
     * const hospitalRequest = await prisma.hospitalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalRequestUpdateManyArgs>(args: SelectSubset<T, HospitalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HospitalRequests and returns the data updated in the database.
     * @param {HospitalRequestUpdateManyAndReturnArgs} args - Arguments to update many HospitalRequests.
     * @example
     * // Update many HospitalRequests
     * const hospitalRequest = await prisma.hospitalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HospitalRequests and only return the `id`
     * const hospitalRequestWithIdOnly = await prisma.hospitalRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HospitalRequest.
     * @param {HospitalRequestUpsertArgs} args - Arguments to update or create a HospitalRequest.
     * @example
     * // Update or create a HospitalRequest
     * const hospitalRequest = await prisma.hospitalRequest.upsert({
     *   create: {
     *     // ... data to create a HospitalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HospitalRequest we want to update
     *   }
     * })
     */
    upsert<T extends HospitalRequestUpsertArgs>(args: SelectSubset<T, HospitalRequestUpsertArgs<ExtArgs>>): Prisma__HospitalRequestClient<$Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HospitalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestCountArgs} args - Arguments to filter HospitalRequests to count.
     * @example
     * // Count the number of HospitalRequests
     * const count = await prisma.hospitalRequest.count({
     *   where: {
     *     // ... the filter for the HospitalRequests we want to count
     *   }
     * })
    **/
    count<T extends HospitalRequestCountArgs>(
      args?: Subset<T, HospitalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HospitalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalRequestAggregateArgs>(args: Subset<T, HospitalRequestAggregateArgs>): Prisma.PrismaPromise<GetHospitalRequestAggregateType<T>>

    /**
     * Group by HospitalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalRequestGroupByArgs} args - Group by arguments.
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
      T extends HospitalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalRequestGroupByArgs['orderBy'] }
        : { orderBy?: HospitalRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HospitalRequest model
   */
  readonly fields: HospitalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HospitalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalRequest$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, HospitalRequest$hospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends HospitalRequest$bookingArgs<ExtArgs> = {}>(args?: Subset<T, HospitalRequest$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HospitalRequest model
   */
  interface HospitalRequestFieldRefs {
    readonly id: FieldRef<"HospitalRequest", 'String'>
    readonly hospitalId: FieldRef<"HospitalRequest", 'String'>
    readonly userId: FieldRef<"HospitalRequest", 'String'>
    readonly requestType: FieldRef<"HospitalRequest", 'RequestType'>
    readonly status: FieldRef<"HospitalRequest", 'RequestStatus'>
    readonly title: FieldRef<"HospitalRequest", 'String'>
    readonly description: FieldRef<"HospitalRequest", 'String'>
    readonly bookingId: FieldRef<"HospitalRequest", 'String'>
    readonly treatmentId: FieldRef<"HospitalRequest", 'String'>
    readonly priority: FieldRef<"HospitalRequest", 'String'>
    readonly requestedDate: FieldRef<"HospitalRequest", 'DateTime'>
    readonly completedDate: FieldRef<"HospitalRequest", 'DateTime'>
    readonly notes: FieldRef<"HospitalRequest", 'String'>
    readonly createdAt: FieldRef<"HospitalRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"HospitalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HospitalRequest findUnique
   */
  export type HospitalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter, which HospitalRequest to fetch.
     */
    where: HospitalRequestWhereUniqueInput
  }

  /**
   * HospitalRequest findUniqueOrThrow
   */
  export type HospitalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter, which HospitalRequest to fetch.
     */
    where: HospitalRequestWhereUniqueInput
  }

  /**
   * HospitalRequest findFirst
   */
  export type HospitalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter, which HospitalRequest to fetch.
     */
    where?: HospitalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalRequests to fetch.
     */
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalRequests.
     */
    cursor?: HospitalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalRequests.
     */
    distinct?: HospitalRequestScalarFieldEnum | HospitalRequestScalarFieldEnum[]
  }

  /**
   * HospitalRequest findFirstOrThrow
   */
  export type HospitalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter, which HospitalRequest to fetch.
     */
    where?: HospitalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalRequests to fetch.
     */
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HospitalRequests.
     */
    cursor?: HospitalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HospitalRequests.
     */
    distinct?: HospitalRequestScalarFieldEnum | HospitalRequestScalarFieldEnum[]
  }

  /**
   * HospitalRequest findMany
   */
  export type HospitalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter, which HospitalRequests to fetch.
     */
    where?: HospitalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HospitalRequests to fetch.
     */
    orderBy?: HospitalRequestOrderByWithRelationInput | HospitalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HospitalRequests.
     */
    cursor?: HospitalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HospitalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HospitalRequests.
     */
    skip?: number
    distinct?: HospitalRequestScalarFieldEnum | HospitalRequestScalarFieldEnum[]
  }

  /**
   * HospitalRequest create
   */
  export type HospitalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a HospitalRequest.
     */
    data: XOR<HospitalRequestCreateInput, HospitalRequestUncheckedCreateInput>
  }

  /**
   * HospitalRequest createMany
   */
  export type HospitalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HospitalRequests.
     */
    data: HospitalRequestCreateManyInput | HospitalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HospitalRequest createManyAndReturn
   */
  export type HospitalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many HospitalRequests.
     */
    data: HospitalRequestCreateManyInput | HospitalRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HospitalRequest update
   */
  export type HospitalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a HospitalRequest.
     */
    data: XOR<HospitalRequestUpdateInput, HospitalRequestUncheckedUpdateInput>
    /**
     * Choose, which HospitalRequest to update.
     */
    where: HospitalRequestWhereUniqueInput
  }

  /**
   * HospitalRequest updateMany
   */
  export type HospitalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HospitalRequests.
     */
    data: XOR<HospitalRequestUpdateManyMutationInput, HospitalRequestUncheckedUpdateManyInput>
    /**
     * Filter which HospitalRequests to update
     */
    where?: HospitalRequestWhereInput
    /**
     * Limit how many HospitalRequests to update.
     */
    limit?: number
  }

  /**
   * HospitalRequest updateManyAndReturn
   */
  export type HospitalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * The data used to update HospitalRequests.
     */
    data: XOR<HospitalRequestUpdateManyMutationInput, HospitalRequestUncheckedUpdateManyInput>
    /**
     * Filter which HospitalRequests to update
     */
    where?: HospitalRequestWhereInput
    /**
     * Limit how many HospitalRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HospitalRequest upsert
   */
  export type HospitalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the HospitalRequest to update in case it exists.
     */
    where: HospitalRequestWhereUniqueInput
    /**
     * In case the HospitalRequest found by the `where` argument doesn't exist, create a new HospitalRequest with this data.
     */
    create: XOR<HospitalRequestCreateInput, HospitalRequestUncheckedCreateInput>
    /**
     * In case the HospitalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalRequestUpdateInput, HospitalRequestUncheckedUpdateInput>
  }

  /**
   * HospitalRequest delete
   */
  export type HospitalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
    /**
     * Filter which HospitalRequest to delete.
     */
    where: HospitalRequestWhereUniqueInput
  }

  /**
   * HospitalRequest deleteMany
   */
  export type HospitalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HospitalRequests to delete
     */
    where?: HospitalRequestWhereInput
    /**
     * Limit how many HospitalRequests to delete.
     */
    limit?: number
  }

  /**
   * HospitalRequest.hospital
   */
  export type HospitalRequest$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * HospitalRequest.booking
   */
  export type HospitalRequest$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * HospitalRequest without action
   */
  export type HospitalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalRequest
     */
    select?: HospitalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HospitalRequest
     */
    omit?: HospitalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalRequestInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    hospitalId: string | null
    preferenceType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    hospitalId: string | null
    preferenceType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    hospitalId: number
    preferenceType: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    id: string
    userId: string
    hospitalId: string
    preferenceType: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "hospitalId" | "preferenceType" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      hospitalId: string
      preferenceType: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferenceWithIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly id: FieldRef<"UserPreference", 'String'>
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly hospitalId: FieldRef<"UserPreference", 'String'>
    readonly preferenceType: FieldRef<"UserPreference", 'String'>
    readonly notes: FieldRef<"UserPreference", 'String'>
    readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentPreference
   */

  export type AggregateTreatmentPreference = {
    _count: TreatmentPreferenceCountAggregateOutputType | null
    _min: TreatmentPreferenceMinAggregateOutputType | null
    _max: TreatmentPreferenceMaxAggregateOutputType | null
  }

  export type TreatmentPreferenceMinAggregateOutputType = {
    id: string | null
    treatmentId: string | null
    treatmentName: string | null
    hospitalId: string | null
    preferenceType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentPreferenceMaxAggregateOutputType = {
    id: string | null
    treatmentId: string | null
    treatmentName: string | null
    hospitalId: string | null
    preferenceType: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentPreferenceCountAggregateOutputType = {
    id: number
    treatmentId: number
    treatmentName: number
    hospitalId: number
    preferenceType: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreatmentPreferenceMinAggregateInputType = {
    id?: true
    treatmentId?: true
    treatmentName?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentPreferenceMaxAggregateInputType = {
    id?: true
    treatmentId?: true
    treatmentName?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentPreferenceCountAggregateInputType = {
    id?: true
    treatmentId?: true
    treatmentName?: true
    hospitalId?: true
    preferenceType?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreatmentPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPreference to aggregate.
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPreferences to fetch.
     */
    orderBy?: TreatmentPreferenceOrderByWithRelationInput | TreatmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentPreferences
    **/
    _count?: true | TreatmentPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentPreferenceMaxAggregateInputType
  }

  export type GetTreatmentPreferenceAggregateType<T extends TreatmentPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentPreference[P]>
      : GetScalarType<T[P], AggregateTreatmentPreference[P]>
  }




  export type TreatmentPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPreferenceWhereInput
    orderBy?: TreatmentPreferenceOrderByWithAggregationInput | TreatmentPreferenceOrderByWithAggregationInput[]
    by: TreatmentPreferenceScalarFieldEnum[] | TreatmentPreferenceScalarFieldEnum
    having?: TreatmentPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentPreferenceCountAggregateInputType | true
    _min?: TreatmentPreferenceMinAggregateInputType
    _max?: TreatmentPreferenceMaxAggregateInputType
  }

  export type TreatmentPreferenceGroupByOutputType = {
    id: string
    treatmentId: string
    treatmentName: string
    hospitalId: string
    preferenceType: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TreatmentPreferenceCountAggregateOutputType | null
    _min: TreatmentPreferenceMinAggregateOutputType | null
    _max: TreatmentPreferenceMaxAggregateOutputType | null
  }

  type GetTreatmentPreferenceGroupByPayload<T extends TreatmentPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    treatmentName?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentPreference"]>

  export type TreatmentPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    treatmentName?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentPreference"]>

  export type TreatmentPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    treatmentName?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentPreference"]>

  export type TreatmentPreferenceSelectScalar = {
    id?: boolean
    treatmentId?: boolean
    treatmentName?: boolean
    hospitalId?: boolean
    preferenceType?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreatmentPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treatmentId" | "treatmentName" | "hospitalId" | "preferenceType" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["treatmentPreference"]>
  export type TreatmentPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type TreatmentPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }
  export type TreatmentPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
  }

  export type $TreatmentPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentPreference"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treatmentId: string
      treatmentName: string
      hospitalId: string
      preferenceType: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treatmentPreference"]>
    composites: {}
  }

  type TreatmentPreferenceGetPayload<S extends boolean | null | undefined | TreatmentPreferenceDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPreferencePayload, S>

  type TreatmentPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentPreferenceCountAggregateInputType | true
    }

  export interface TreatmentPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentPreference'], meta: { name: 'TreatmentPreference' } }
    /**
     * Find zero or one TreatmentPreference that matches the filter.
     * @param {TreatmentPreferenceFindUniqueArgs} args - Arguments to find a TreatmentPreference
     * @example
     * // Get one TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentPreferenceFindUniqueArgs>(args: SelectSubset<T, TreatmentPreferenceFindUniqueArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentPreferenceFindUniqueOrThrowArgs} args - Arguments to find a TreatmentPreference
     * @example
     * // Get one TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceFindFirstArgs} args - Arguments to find a TreatmentPreference
     * @example
     * // Get one TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentPreferenceFindFirstArgs>(args?: SelectSubset<T, TreatmentPreferenceFindFirstArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceFindFirstOrThrowArgs} args - Arguments to find a TreatmentPreference
     * @example
     * // Get one TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentPreferences
     * const treatmentPreferences = await prisma.treatmentPreference.findMany()
     * 
     * // Get first 10 TreatmentPreferences
     * const treatmentPreferences = await prisma.treatmentPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentPreferenceWithIdOnly = await prisma.treatmentPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentPreferenceFindManyArgs>(args?: SelectSubset<T, TreatmentPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentPreference.
     * @param {TreatmentPreferenceCreateArgs} args - Arguments to create a TreatmentPreference.
     * @example
     * // Create one TreatmentPreference
     * const TreatmentPreference = await prisma.treatmentPreference.create({
     *   data: {
     *     // ... data to create a TreatmentPreference
     *   }
     * })
     * 
     */
    create<T extends TreatmentPreferenceCreateArgs>(args: SelectSubset<T, TreatmentPreferenceCreateArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentPreferences.
     * @param {TreatmentPreferenceCreateManyArgs} args - Arguments to create many TreatmentPreferences.
     * @example
     * // Create many TreatmentPreferences
     * const treatmentPreference = await prisma.treatmentPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentPreferenceCreateManyArgs>(args?: SelectSubset<T, TreatmentPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreatmentPreferences and returns the data saved in the database.
     * @param {TreatmentPreferenceCreateManyAndReturnArgs} args - Arguments to create many TreatmentPreferences.
     * @example
     * // Create many TreatmentPreferences
     * const treatmentPreference = await prisma.treatmentPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreatmentPreferences and only return the `id`
     * const treatmentPreferenceWithIdOnly = await prisma.treatmentPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreatmentPreference.
     * @param {TreatmentPreferenceDeleteArgs} args - Arguments to delete one TreatmentPreference.
     * @example
     * // Delete one TreatmentPreference
     * const TreatmentPreference = await prisma.treatmentPreference.delete({
     *   where: {
     *     // ... filter to delete one TreatmentPreference
     *   }
     * })
     * 
     */
    delete<T extends TreatmentPreferenceDeleteArgs>(args: SelectSubset<T, TreatmentPreferenceDeleteArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentPreference.
     * @param {TreatmentPreferenceUpdateArgs} args - Arguments to update one TreatmentPreference.
     * @example
     * // Update one TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentPreferenceUpdateArgs>(args: SelectSubset<T, TreatmentPreferenceUpdateArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentPreferences.
     * @param {TreatmentPreferenceDeleteManyArgs} args - Arguments to filter TreatmentPreferences to delete.
     * @example
     * // Delete a few TreatmentPreferences
     * const { count } = await prisma.treatmentPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentPreferenceDeleteManyArgs>(args?: SelectSubset<T, TreatmentPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentPreferences
     * const treatmentPreference = await prisma.treatmentPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentPreferenceUpdateManyArgs>(args: SelectSubset<T, TreatmentPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentPreferences and returns the data updated in the database.
     * @param {TreatmentPreferenceUpdateManyAndReturnArgs} args - Arguments to update many TreatmentPreferences.
     * @example
     * // Update many TreatmentPreferences
     * const treatmentPreference = await prisma.treatmentPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreatmentPreferences and only return the `id`
     * const treatmentPreferenceWithIdOnly = await prisma.treatmentPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreatmentPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, TreatmentPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreatmentPreference.
     * @param {TreatmentPreferenceUpsertArgs} args - Arguments to update or create a TreatmentPreference.
     * @example
     * // Update or create a TreatmentPreference
     * const treatmentPreference = await prisma.treatmentPreference.upsert({
     *   create: {
     *     // ... data to create a TreatmentPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentPreference we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentPreferenceUpsertArgs>(args: SelectSubset<T, TreatmentPreferenceUpsertArgs<ExtArgs>>): Prisma__TreatmentPreferenceClient<$Result.GetResult<Prisma.$TreatmentPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceCountArgs} args - Arguments to filter TreatmentPreferences to count.
     * @example
     * // Count the number of TreatmentPreferences
     * const count = await prisma.treatmentPreference.count({
     *   where: {
     *     // ... the filter for the TreatmentPreferences we want to count
     *   }
     * })
    **/
    count<T extends TreatmentPreferenceCountArgs>(
      args?: Subset<T, TreatmentPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreatmentPreferenceAggregateArgs>(args: Subset<T, TreatmentPreferenceAggregateArgs>): Prisma.PrismaPromise<GetTreatmentPreferenceAggregateType<T>>

    /**
     * Group by TreatmentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPreferenceGroupByArgs} args - Group by arguments.
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
      T extends TreatmentPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreatmentPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentPreference model
   */
  readonly fields: TreatmentPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentPreference model
   */
  interface TreatmentPreferenceFieldRefs {
    readonly id: FieldRef<"TreatmentPreference", 'String'>
    readonly treatmentId: FieldRef<"TreatmentPreference", 'String'>
    readonly treatmentName: FieldRef<"TreatmentPreference", 'String'>
    readonly hospitalId: FieldRef<"TreatmentPreference", 'String'>
    readonly preferenceType: FieldRef<"TreatmentPreference", 'String'>
    readonly notes: FieldRef<"TreatmentPreference", 'String'>
    readonly createdAt: FieldRef<"TreatmentPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"TreatmentPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentPreference findUnique
   */
  export type TreatmentPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPreference to fetch.
     */
    where: TreatmentPreferenceWhereUniqueInput
  }

  /**
   * TreatmentPreference findUniqueOrThrow
   */
  export type TreatmentPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPreference to fetch.
     */
    where: TreatmentPreferenceWhereUniqueInput
  }

  /**
   * TreatmentPreference findFirst
   */
  export type TreatmentPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPreference to fetch.
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPreferences to fetch.
     */
    orderBy?: TreatmentPreferenceOrderByWithRelationInput | TreatmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPreferences.
     */
    cursor?: TreatmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPreferences.
     */
    distinct?: TreatmentPreferenceScalarFieldEnum | TreatmentPreferenceScalarFieldEnum[]
  }

  /**
   * TreatmentPreference findFirstOrThrow
   */
  export type TreatmentPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPreference to fetch.
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPreferences to fetch.
     */
    orderBy?: TreatmentPreferenceOrderByWithRelationInput | TreatmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPreferences.
     */
    cursor?: TreatmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPreferences.
     */
    distinct?: TreatmentPreferenceScalarFieldEnum | TreatmentPreferenceScalarFieldEnum[]
  }

  /**
   * TreatmentPreference findMany
   */
  export type TreatmentPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPreferences to fetch.
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPreferences to fetch.
     */
    orderBy?: TreatmentPreferenceOrderByWithRelationInput | TreatmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentPreferences.
     */
    cursor?: TreatmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPreferences.
     */
    skip?: number
    distinct?: TreatmentPreferenceScalarFieldEnum | TreatmentPreferenceScalarFieldEnum[]
  }

  /**
   * TreatmentPreference create
   */
  export type TreatmentPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentPreference.
     */
    data: XOR<TreatmentPreferenceCreateInput, TreatmentPreferenceUncheckedCreateInput>
  }

  /**
   * TreatmentPreference createMany
   */
  export type TreatmentPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentPreferences.
     */
    data: TreatmentPreferenceCreateManyInput | TreatmentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreatmentPreference createManyAndReturn
   */
  export type TreatmentPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many TreatmentPreferences.
     */
    data: TreatmentPreferenceCreateManyInput | TreatmentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentPreference update
   */
  export type TreatmentPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentPreference.
     */
    data: XOR<TreatmentPreferenceUpdateInput, TreatmentPreferenceUncheckedUpdateInput>
    /**
     * Choose, which TreatmentPreference to update.
     */
    where: TreatmentPreferenceWhereUniqueInput
  }

  /**
   * TreatmentPreference updateMany
   */
  export type TreatmentPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentPreferences.
     */
    data: XOR<TreatmentPreferenceUpdateManyMutationInput, TreatmentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentPreferences to update
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * Limit how many TreatmentPreferences to update.
     */
    limit?: number
  }

  /**
   * TreatmentPreference updateManyAndReturn
   */
  export type TreatmentPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update TreatmentPreferences.
     */
    data: XOR<TreatmentPreferenceUpdateManyMutationInput, TreatmentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentPreferences to update
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * Limit how many TreatmentPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentPreference upsert
   */
  export type TreatmentPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentPreference to update in case it exists.
     */
    where: TreatmentPreferenceWhereUniqueInput
    /**
     * In case the TreatmentPreference found by the `where` argument doesn't exist, create a new TreatmentPreference with this data.
     */
    create: XOR<TreatmentPreferenceCreateInput, TreatmentPreferenceUncheckedCreateInput>
    /**
     * In case the TreatmentPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentPreferenceUpdateInput, TreatmentPreferenceUncheckedUpdateInput>
  }

  /**
   * TreatmentPreference delete
   */
  export type TreatmentPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
    /**
     * Filter which TreatmentPreference to delete.
     */
    where: TreatmentPreferenceWhereUniqueInput
  }

  /**
   * TreatmentPreference deleteMany
   */
  export type TreatmentPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPreferences to delete
     */
    where?: TreatmentPreferenceWhereInput
    /**
     * Limit how many TreatmentPreferences to delete.
     */
    limit?: number
  }

  /**
   * TreatmentPreference without action
   */
  export type TreatmentPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPreference
     */
    select?: TreatmentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPreference
     */
    omit?: TreatmentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    trialEnd: Date | null
    priceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    trialEnd: Date | null
    priceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    plan: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    canceledAt: number
    trialEnd: number
    priceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    trialEnd?: true
    priceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    trialEnd?: true
    priceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    plan?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    trialEnd?: true
    priceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string | null
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    canceledAt: Date | null
    trialEnd: Date | null
    priceId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    trialEnd?: boolean
    priceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    trialEnd?: boolean
    priceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    trialEnd?: boolean
    priceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    plan?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    trialEnd?: boolean
    priceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId" | "plan" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "canceledAt" | "trialEnd" | "priceId" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeCustomerId: string
      stripeSubscriptionId: string | null
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      canceledAt: Date | null
      trialEnd: Date | null
      priceId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly trialEnd: FieldRef<"Subscription", 'DateTime'>
    readonly priceId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Credit
   */

  export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  export type CreditAvgAggregateOutputType = {
    balance: number | null
    totalAllocated: number | null
    totalUsed: number | null
  }

  export type CreditSumAggregateOutputType = {
    balance: number | null
    totalAllocated: number | null
    totalUsed: number | null
  }

  export type CreditMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    totalAllocated: number | null
    totalUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    totalAllocated: number | null
    totalUsed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    totalAllocated: number
    totalUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditAvgAggregateInputType = {
    balance?: true
    totalAllocated?: true
    totalUsed?: true
  }

  export type CreditSumAggregateInputType = {
    balance?: true
    totalAllocated?: true
    totalUsed?: true
  }

  export type CreditMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalAllocated?: true
    totalUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalAllocated?: true
    totalUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    totalAllocated?: true
    totalUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credit to aggregate.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credits
    **/
    _count?: true | CreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditMaxAggregateInputType
  }

  export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredit[P]>
      : GetScalarType<T[P], AggregateCredit[P]>
  }




  export type CreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithAggregationInput | CreditOrderByWithAggregationInput[]
    by: CreditScalarFieldEnum[] | CreditScalarFieldEnum
    having?: CreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCountAggregateInputType | true
    _avg?: CreditAvgAggregateInputType
    _sum?: CreditSumAggregateInputType
    _min?: CreditMinAggregateInputType
    _max?: CreditMaxAggregateInputType
  }

  export type CreditGroupByOutputType = {
    id: string
    userId: string
    balance: number
    totalAllocated: number
    totalUsed: number
    createdAt: Date
    updatedAt: Date
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  type GetCreditGroupByPayload<T extends CreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditGroupByOutputType[P]>
            : GetScalarType<T[P], CreditGroupByOutputType[P]>
        }
      >
    >


  export type CreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Credit$transactionsArgs<ExtArgs>
    _count?: boolean | CreditCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>

  export type CreditSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    totalAllocated?: boolean
    totalUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "totalAllocated" | "totalUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["credit"]>
  export type CreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Credit$transactionsArgs<ExtArgs>
    _count?: boolean | CreditCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: number
      totalAllocated: number
      totalUsed: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credit"]>
    composites: {}
  }

  type CreditGetPayload<S extends boolean | null | undefined | CreditDefaultArgs> = $Result.GetResult<Prisma.$CreditPayload, S>

  type CreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCountAggregateInputType | true
    }

  export interface CreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credit'], meta: { name: 'Credit' } }
    /**
     * Find zero or one Credit that matches the filter.
     * @param {CreditFindUniqueArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditFindUniqueArgs>(args: SelectSubset<T, CreditFindUniqueArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditFindUniqueOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditFindFirstArgs>(args?: SelectSubset<T, CreditFindFirstArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credits
     * const credits = await prisma.credit.findMany()
     * 
     * // Get first 10 Credits
     * const credits = await prisma.credit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditWithIdOnly = await prisma.credit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditFindManyArgs>(args?: SelectSubset<T, CreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credit.
     * @param {CreditCreateArgs} args - Arguments to create a Credit.
     * @example
     * // Create one Credit
     * const Credit = await prisma.credit.create({
     *   data: {
     *     // ... data to create a Credit
     *   }
     * })
     * 
     */
    create<T extends CreditCreateArgs>(args: SelectSubset<T, CreditCreateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credits.
     * @param {CreditCreateManyArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCreateManyArgs>(args?: SelectSubset<T, CreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credits and returns the data saved in the database.
     * @param {CreditCreateManyAndReturnArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credit.
     * @param {CreditDeleteArgs} args - Arguments to delete one Credit.
     * @example
     * // Delete one Credit
     * const Credit = await prisma.credit.delete({
     *   where: {
     *     // ... filter to delete one Credit
     *   }
     * })
     * 
     */
    delete<T extends CreditDeleteArgs>(args: SelectSubset<T, CreditDeleteArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credit.
     * @param {CreditUpdateArgs} args - Arguments to update one Credit.
     * @example
     * // Update one Credit
     * const credit = await prisma.credit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditUpdateArgs>(args: SelectSubset<T, CreditUpdateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credits.
     * @param {CreditDeleteManyArgs} args - Arguments to filter Credits to delete.
     * @example
     * // Delete a few Credits
     * const { count } = await prisma.credit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditDeleteManyArgs>(args?: SelectSubset<T, CreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditUpdateManyArgs>(args: SelectSubset<T, CreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits and returns the data updated in the database.
     * @param {CreditUpdateManyAndReturnArgs} args - Arguments to update many Credits.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credits and only return the `id`
     * const creditWithIdOnly = await prisma.credit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credit.
     * @param {CreditUpsertArgs} args - Arguments to update or create a Credit.
     * @example
     * // Update or create a Credit
     * const credit = await prisma.credit.upsert({
     *   create: {
     *     // ... data to create a Credit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit we want to update
     *   }
     * })
     */
    upsert<T extends CreditUpsertArgs>(args: SelectSubset<T, CreditUpsertArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCountArgs} args - Arguments to filter Credits to count.
     * @example
     * // Count the number of Credits
     * const count = await prisma.credit.count({
     *   where: {
     *     // ... the filter for the Credits we want to count
     *   }
     * })
    **/
    count<T extends CreditCountArgs>(
      args?: Subset<T, CreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAggregateArgs>(args: Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>

    /**
     * Group by Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditGroupByArgs} args - Group by arguments.
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
      T extends CreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditGroupByArgs['orderBy'] }
        : { orderBy?: CreditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credit model
   */
  readonly fields: CreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Credit$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Credit$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credit model
   */
  interface CreditFieldRefs {
    readonly id: FieldRef<"Credit", 'String'>
    readonly userId: FieldRef<"Credit", 'String'>
    readonly balance: FieldRef<"Credit", 'Int'>
    readonly totalAllocated: FieldRef<"Credit", 'Int'>
    readonly totalUsed: FieldRef<"Credit", 'Int'>
    readonly createdAt: FieldRef<"Credit", 'DateTime'>
    readonly updatedAt: FieldRef<"Credit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credit findUnique
   */
  export type CreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findUniqueOrThrow
   */
  export type CreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findFirst
   */
  export type CreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findFirstOrThrow
   */
  export type CreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findMany
   */
  export type CreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credits to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit create
   */
  export type CreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to create a Credit.
     */
    data: XOR<CreditCreateInput, CreditUncheckedCreateInput>
  }

  /**
   * Credit createMany
   */
  export type CreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credit createManyAndReturn
   */
  export type CreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit update
   */
  export type CreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to update a Credit.
     */
    data: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
    /**
     * Choose, which Credit to update.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit updateMany
   */
  export type CreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
  }

  /**
   * Credit updateManyAndReturn
   */
  export type CreditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credit upsert
   */
  export type CreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The filter to search for the Credit to update in case it exists.
     */
    where: CreditWhereUniqueInput
    /**
     * In case the Credit found by the `where` argument doesn't exist, create a new Credit with this data.
     */
    create: XOR<CreditCreateInput, CreditUncheckedCreateInput>
    /**
     * In case the Credit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
  }

  /**
   * Credit delete
   */
  export type CreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter which Credit to delete.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit deleteMany
   */
  export type CreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credits to delete
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to delete.
     */
    limit?: number
  }

  /**
   * Credit.transactions
   */
  export type Credit$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * Credit without action
   */
  export type CreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    creditId: string | null
    type: $Enums.CreditTransactionType | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    referenceId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    creditId: string | null
    type: $Enums.CreditTransactionType | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    referenceId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    creditId: number
    type: number
    amount: number
    balanceAfter: number
    description: number
    referenceId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    creditId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    referenceId?: true
    metadata?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    creditId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    referenceId?: true
    metadata?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    creditId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    referenceId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    creditId: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description: string | null
    referenceId: string | null
    metadata: string | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    referenceId?: boolean
    metadata?: boolean
    createdAt?: boolean
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    referenceId?: boolean
    metadata?: boolean
    createdAt?: boolean
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    referenceId?: boolean
    metadata?: boolean
    createdAt?: boolean
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    creditId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    referenceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creditId" | "type" | "amount" | "balanceAfter" | "description" | "referenceId" | "metadata" | "createdAt", ExtArgs["result"]["creditTransaction"]>
  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }
  export type CreditTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }
  export type CreditTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit?: boolean | CreditDefaultArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      credit: Prisma.$CreditPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creditId: string
      type: $Enums.CreditTransactionType
      amount: number
      balanceAfter: number
      description: string | null
      referenceId: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions and returns the data updated in the database.
     * @param {CreditTransactionUpdateManyAndReturnArgs} args - Arguments to update many CreditTransactions.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credit<T extends CreditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditDefaultArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTransaction model
   */
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly creditId: FieldRef<"CreditTransaction", 'String'>
    readonly type: FieldRef<"CreditTransaction", 'CreditTransactionType'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly balanceAfter: FieldRef<"CreditTransaction", 'Int'>
    readonly description: FieldRef<"CreditTransaction", 'String'>
    readonly referenceId: FieldRef<"CreditTransaction", 'String'>
    readonly metadata: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
  }

  /**
   * CreditTransaction updateManyAndReturn
   */
  export type CreditTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to delete.
     */
    limit?: number
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
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


  export const FacilityScalarFieldEnum: {
    id: 'id',
    facilityName: 'facilityName',
    facilityId: 'facilityId',
    npi: 'npi',
    city: 'city',
    zip: 'zip',
    state: 'state',
    year: 'year'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const QualityReportScalarFieldEnum: {
    facilityId: 'facilityId',
    facilityName: 'facilityName',
    msa: 'msa',
    msaTitle: 'msaTitle',
    hlmr: 'hlmr',
    hlmrPercentile: 'hlmrPercentile',
    hcahpsStartDate: 'hcahpsStartDate',
    hcahpsEndDate: 'hcahpsEndDate',
    compHipKnee: 'compHipKnee',
    compHipKneePercentile: 'compHipKneePercentile',
    compStartDate: 'compStartDate',
    compEndDate: 'compEndDate',
    compFootnote: 'compFootnote',
    proStartDate: 'proStartDate',
    proEndDate: 'proEndDate'
  };

  export type QualityReportScalarFieldEnum = (typeof QualityReportScalarFieldEnum)[keyof typeof QualityReportScalarFieldEnum]


  export const HcahpsHospitalSurveryScalarFieldEnum: {
    facilityId: 'facilityId',
    facilityName: 'facilityName',
    address: 'address',
    city: 'city',
    zip: 'zip',
    state: 'state',
    telephone: 'telephone',
    measureId: 'measureId',
    question: 'question',
    response: 'response',
    hcahpsAnswerPercen: 'hcahpsAnswerPercen',
    completedSurveys: 'completedSurveys',
    responseRatePercent: 'responseRatePercent',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type HcahpsHospitalSurveryScalarFieldEnum = (typeof HcahpsHospitalSurveryScalarFieldEnum)[keyof typeof HcahpsHospitalSurveryScalarFieldEnum]


  export const HospitalInformationScalarFieldEnum: {
    facilityId: 'facilityId',
    facilityName: 'facilityName',
    address: 'address',
    city: 'city',
    zip: 'zip',
    state: 'state',
    country: 'country',
    telephone: 'telephone',
    hospitalType: 'hospitalType',
    hospitalOwnership: 'hospitalOwnership',
    hospitalOverallRating: 'hospitalOverallRating',
    hospitalOverallRatingFootnote: 'hospitalOverallRatingFootnote',
    emergencyServices: 'emergencyServices'
  };

  export type HospitalInformationScalarFieldEnum = (typeof HospitalInformationScalarFieldEnum)[keyof typeof HospitalInformationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    witnesshash: 'witnesshash',
    phone: 'phone',
    address: 'address',
    about: 'about',
    userType: 'userType',
    authProvider: 'authProvider',
    providerId: 'providerId',
    hospitalId: 'hospitalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    rating: 'rating',
    specialties: 'specialties',
    imageUrl: 'imageUrl',
    isFavorite: 'isFavorite',
    reviews: 'reviews',
    verified: 'verified',
    walletAddress: 'walletAddress',
    ownerId: 'ownerId',
    totalRequests: 'totalRequests',
    totalDonors: 'totalDonors',
    totalCustomers: 'totalCustomers',
    totalTreatments: 'totalTreatments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    hospitalId: 'hospitalId',
    userId: 'userId',
    appointmentDate: 'appointmentDate',
    duration: 'duration',
    purpose: 'purpose',
    additionalNotes: 'additionalNotes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const HospitalRequestScalarFieldEnum: {
    id: 'id',
    hospitalId: 'hospitalId',
    userId: 'userId',
    requestType: 'requestType',
    status: 'status',
    title: 'title',
    description: 'description',
    bookingId: 'bookingId',
    treatmentId: 'treatmentId',
    priority: 'priority',
    requestedDate: 'requestedDate',
    completedDate: 'completedDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalRequestScalarFieldEnum = (typeof HospitalRequestScalarFieldEnum)[keyof typeof HospitalRequestScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    hospitalId: 'hospitalId',
    preferenceType: 'preferenceType',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const TreatmentPreferenceScalarFieldEnum: {
    id: 'id',
    treatmentId: 'treatmentId',
    treatmentName: 'treatmentName',
    hospitalId: 'hospitalId',
    preferenceType: 'preferenceType',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreatmentPreferenceScalarFieldEnum = (typeof TreatmentPreferenceScalarFieldEnum)[keyof typeof TreatmentPreferenceScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    plan: 'plan',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    canceledAt: 'canceledAt',
    trialEnd: 'trialEnd',
    priceId: 'priceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const CreditScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    totalAllocated: 'totalAllocated',
    totalUsed: 'totalUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditScalarFieldEnum = (typeof CreditScalarFieldEnum)[keyof typeof CreditScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    creditId: 'creditId',
    type: 'type',
    amount: 'amount',
    balanceAfter: 'balanceAfter',
    description: 'description',
    referenceId: 'referenceId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'CreditTransactionType'
   */
  export type EnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType'>
    


  /**
   * Reference to a field of type 'CreditTransactionType[]'
   */
  export type ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType[]'>
    
  /**
   * Deep Input Types
   */


  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: StringFilter<"Facility"> | string
    facilityName?: StringFilter<"Facility"> | string
    facilityId?: StringFilter<"Facility"> | string
    npi?: IntFilter<"Facility"> | number
    city?: StringFilter<"Facility"> | string
    zip?: StringFilter<"Facility"> | string
    state?: StringFilter<"Facility"> | string
    year?: IntFilter<"Facility"> | number
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    facilityName?: SortOrder
    facilityId?: SortOrder
    npi?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    year?: SortOrder
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    facilityName?: StringFilter<"Facility"> | string
    facilityId?: StringFilter<"Facility"> | string
    npi?: IntFilter<"Facility"> | number
    city?: StringFilter<"Facility"> | string
    zip?: StringFilter<"Facility"> | string
    state?: StringFilter<"Facility"> | string
    year?: IntFilter<"Facility"> | number
  }, "id">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    facilityName?: SortOrder
    facilityId?: SortOrder
    npi?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    year?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _avg?: FacilityAvgOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
    _sum?: FacilitySumOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Facility"> | string
    facilityName?: StringWithAggregatesFilter<"Facility"> | string
    facilityId?: StringWithAggregatesFilter<"Facility"> | string
    npi?: IntWithAggregatesFilter<"Facility"> | number
    city?: StringWithAggregatesFilter<"Facility"> | string
    zip?: StringWithAggregatesFilter<"Facility"> | string
    state?: StringWithAggregatesFilter<"Facility"> | string
    year?: IntWithAggregatesFilter<"Facility"> | number
  }

  export type QualityReportWhereInput = {
    AND?: QualityReportWhereInput | QualityReportWhereInput[]
    OR?: QualityReportWhereInput[]
    NOT?: QualityReportWhereInput | QualityReportWhereInput[]
    facilityId?: StringFilter<"QualityReport"> | string
    facilityName?: StringFilter<"QualityReport"> | string
    msa?: IntFilter<"QualityReport"> | number
    msaTitle?: StringFilter<"QualityReport"> | string
    hlmr?: IntFilter<"QualityReport"> | number
    hlmrPercentile?: IntFilter<"QualityReport"> | number
    hcahpsStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    hcahpsEndDate?: DateTimeFilter<"QualityReport"> | Date | string
    compHipKnee?: IntFilter<"QualityReport"> | number
    compHipKneePercentile?: IntFilter<"QualityReport"> | number
    compStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    compEndDate?: DateTimeFilter<"QualityReport"> | Date | string
    compFootnote?: IntFilter<"QualityReport"> | number
    proStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    proEndDate?: DateTimeFilter<"QualityReport"> | Date | string
  }

  export type QualityReportOrderByWithRelationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    msa?: SortOrder
    msaTitle?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    hcahpsStartDate?: SortOrder
    hcahpsEndDate?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compStartDate?: SortOrder
    compEndDate?: SortOrder
    compFootnote?: SortOrder
    proStartDate?: SortOrder
    proEndDate?: SortOrder
  }

  export type QualityReportWhereUniqueInput = Prisma.AtLeast<{
    facilityId?: string
    AND?: QualityReportWhereInput | QualityReportWhereInput[]
    OR?: QualityReportWhereInput[]
    NOT?: QualityReportWhereInput | QualityReportWhereInput[]
    facilityName?: StringFilter<"QualityReport"> | string
    msa?: IntFilter<"QualityReport"> | number
    msaTitle?: StringFilter<"QualityReport"> | string
    hlmr?: IntFilter<"QualityReport"> | number
    hlmrPercentile?: IntFilter<"QualityReport"> | number
    hcahpsStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    hcahpsEndDate?: DateTimeFilter<"QualityReport"> | Date | string
    compHipKnee?: IntFilter<"QualityReport"> | number
    compHipKneePercentile?: IntFilter<"QualityReport"> | number
    compStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    compEndDate?: DateTimeFilter<"QualityReport"> | Date | string
    compFootnote?: IntFilter<"QualityReport"> | number
    proStartDate?: DateTimeFilter<"QualityReport"> | Date | string
    proEndDate?: DateTimeFilter<"QualityReport"> | Date | string
  }, "facilityId">

  export type QualityReportOrderByWithAggregationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    msa?: SortOrder
    msaTitle?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    hcahpsStartDate?: SortOrder
    hcahpsEndDate?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compStartDate?: SortOrder
    compEndDate?: SortOrder
    compFootnote?: SortOrder
    proStartDate?: SortOrder
    proEndDate?: SortOrder
    _count?: QualityReportCountOrderByAggregateInput
    _avg?: QualityReportAvgOrderByAggregateInput
    _max?: QualityReportMaxOrderByAggregateInput
    _min?: QualityReportMinOrderByAggregateInput
    _sum?: QualityReportSumOrderByAggregateInput
  }

  export type QualityReportScalarWhereWithAggregatesInput = {
    AND?: QualityReportScalarWhereWithAggregatesInput | QualityReportScalarWhereWithAggregatesInput[]
    OR?: QualityReportScalarWhereWithAggregatesInput[]
    NOT?: QualityReportScalarWhereWithAggregatesInput | QualityReportScalarWhereWithAggregatesInput[]
    facilityId?: StringWithAggregatesFilter<"QualityReport"> | string
    facilityName?: StringWithAggregatesFilter<"QualityReport"> | string
    msa?: IntWithAggregatesFilter<"QualityReport"> | number
    msaTitle?: StringWithAggregatesFilter<"QualityReport"> | string
    hlmr?: IntWithAggregatesFilter<"QualityReport"> | number
    hlmrPercentile?: IntWithAggregatesFilter<"QualityReport"> | number
    hcahpsStartDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
    hcahpsEndDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
    compHipKnee?: IntWithAggregatesFilter<"QualityReport"> | number
    compHipKneePercentile?: IntWithAggregatesFilter<"QualityReport"> | number
    compStartDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
    compEndDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
    compFootnote?: IntWithAggregatesFilter<"QualityReport"> | number
    proStartDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
    proEndDate?: DateTimeWithAggregatesFilter<"QualityReport"> | Date | string
  }

  export type HcahpsHospitalSurveryWhereInput = {
    AND?: HcahpsHospitalSurveryWhereInput | HcahpsHospitalSurveryWhereInput[]
    OR?: HcahpsHospitalSurveryWhereInput[]
    NOT?: HcahpsHospitalSurveryWhereInput | HcahpsHospitalSurveryWhereInput[]
    facilityId?: StringFilter<"HcahpsHospitalSurvery"> | string
    facilityName?: StringFilter<"HcahpsHospitalSurvery"> | string
    address?: StringFilter<"HcahpsHospitalSurvery"> | string
    city?: StringFilter<"HcahpsHospitalSurvery"> | string
    zip?: StringFilter<"HcahpsHospitalSurvery"> | string
    state?: StringFilter<"HcahpsHospitalSurvery"> | string
    telephone?: StringFilter<"HcahpsHospitalSurvery"> | string
    measureId?: StringFilter<"HcahpsHospitalSurvery"> | string
    question?: StringFilter<"HcahpsHospitalSurvery"> | string
    response?: StringFilter<"HcahpsHospitalSurvery"> | string
    hcahpsAnswerPercen?: StringFilter<"HcahpsHospitalSurvery"> | string
    completedSurveys?: IntFilter<"HcahpsHospitalSurvery"> | number
    responseRatePercent?: IntFilter<"HcahpsHospitalSurvery"> | number
    startDate?: DateTimeFilter<"HcahpsHospitalSurvery"> | Date | string
    endDate?: DateTimeFilter<"HcahpsHospitalSurvery"> | Date | string
  }

  export type HcahpsHospitalSurveryOrderByWithRelationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    telephone?: SortOrder
    measureId?: SortOrder
    question?: SortOrder
    response?: SortOrder
    hcahpsAnswerPercen?: SortOrder
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HcahpsHospitalSurveryWhereUniqueInput = Prisma.AtLeast<{
    facilityId?: string
    AND?: HcahpsHospitalSurveryWhereInput | HcahpsHospitalSurveryWhereInput[]
    OR?: HcahpsHospitalSurveryWhereInput[]
    NOT?: HcahpsHospitalSurveryWhereInput | HcahpsHospitalSurveryWhereInput[]
    facilityName?: StringFilter<"HcahpsHospitalSurvery"> | string
    address?: StringFilter<"HcahpsHospitalSurvery"> | string
    city?: StringFilter<"HcahpsHospitalSurvery"> | string
    zip?: StringFilter<"HcahpsHospitalSurvery"> | string
    state?: StringFilter<"HcahpsHospitalSurvery"> | string
    telephone?: StringFilter<"HcahpsHospitalSurvery"> | string
    measureId?: StringFilter<"HcahpsHospitalSurvery"> | string
    question?: StringFilter<"HcahpsHospitalSurvery"> | string
    response?: StringFilter<"HcahpsHospitalSurvery"> | string
    hcahpsAnswerPercen?: StringFilter<"HcahpsHospitalSurvery"> | string
    completedSurveys?: IntFilter<"HcahpsHospitalSurvery"> | number
    responseRatePercent?: IntFilter<"HcahpsHospitalSurvery"> | number
    startDate?: DateTimeFilter<"HcahpsHospitalSurvery"> | Date | string
    endDate?: DateTimeFilter<"HcahpsHospitalSurvery"> | Date | string
  }, "facilityId">

  export type HcahpsHospitalSurveryOrderByWithAggregationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    telephone?: SortOrder
    measureId?: SortOrder
    question?: SortOrder
    response?: SortOrder
    hcahpsAnswerPercen?: SortOrder
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: HcahpsHospitalSurveryCountOrderByAggregateInput
    _avg?: HcahpsHospitalSurveryAvgOrderByAggregateInput
    _max?: HcahpsHospitalSurveryMaxOrderByAggregateInput
    _min?: HcahpsHospitalSurveryMinOrderByAggregateInput
    _sum?: HcahpsHospitalSurverySumOrderByAggregateInput
  }

  export type HcahpsHospitalSurveryScalarWhereWithAggregatesInput = {
    AND?: HcahpsHospitalSurveryScalarWhereWithAggregatesInput | HcahpsHospitalSurveryScalarWhereWithAggregatesInput[]
    OR?: HcahpsHospitalSurveryScalarWhereWithAggregatesInput[]
    NOT?: HcahpsHospitalSurveryScalarWhereWithAggregatesInput | HcahpsHospitalSurveryScalarWhereWithAggregatesInput[]
    facilityId?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    facilityName?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    address?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    city?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    zip?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    state?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    telephone?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    measureId?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    question?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    response?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    hcahpsAnswerPercen?: StringWithAggregatesFilter<"HcahpsHospitalSurvery"> | string
    completedSurveys?: IntWithAggregatesFilter<"HcahpsHospitalSurvery"> | number
    responseRatePercent?: IntWithAggregatesFilter<"HcahpsHospitalSurvery"> | number
    startDate?: DateTimeWithAggregatesFilter<"HcahpsHospitalSurvery"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"HcahpsHospitalSurvery"> | Date | string
  }

  export type HospitalInformationWhereInput = {
    AND?: HospitalInformationWhereInput | HospitalInformationWhereInput[]
    OR?: HospitalInformationWhereInput[]
    NOT?: HospitalInformationWhereInput | HospitalInformationWhereInput[]
    facilityId?: StringFilter<"HospitalInformation"> | string
    facilityName?: StringFilter<"HospitalInformation"> | string
    address?: StringFilter<"HospitalInformation"> | string
    city?: StringFilter<"HospitalInformation"> | string
    zip?: StringFilter<"HospitalInformation"> | string
    state?: StringFilter<"HospitalInformation"> | string
    country?: StringFilter<"HospitalInformation"> | string
    telephone?: StringFilter<"HospitalInformation"> | string
    hospitalType?: StringFilter<"HospitalInformation"> | string
    hospitalOwnership?: StringFilter<"HospitalInformation"> | string
    hospitalOverallRating?: StringFilter<"HospitalInformation"> | string
    hospitalOverallRatingFootnote?: StringNullableFilter<"HospitalInformation"> | string | null
    emergencyServices?: StringFilter<"HospitalInformation"> | string
    users?: UserListRelationFilter
  }

  export type HospitalInformationOrderByWithRelationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    country?: SortOrder
    telephone?: SortOrder
    hospitalType?: SortOrder
    hospitalOwnership?: SortOrder
    hospitalOverallRating?: SortOrder
    hospitalOverallRatingFootnote?: SortOrderInput | SortOrder
    emergencyServices?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type HospitalInformationWhereUniqueInput = Prisma.AtLeast<{
    facilityId?: string
    AND?: HospitalInformationWhereInput | HospitalInformationWhereInput[]
    OR?: HospitalInformationWhereInput[]
    NOT?: HospitalInformationWhereInput | HospitalInformationWhereInput[]
    facilityName?: StringFilter<"HospitalInformation"> | string
    address?: StringFilter<"HospitalInformation"> | string
    city?: StringFilter<"HospitalInformation"> | string
    zip?: StringFilter<"HospitalInformation"> | string
    state?: StringFilter<"HospitalInformation"> | string
    country?: StringFilter<"HospitalInformation"> | string
    telephone?: StringFilter<"HospitalInformation"> | string
    hospitalType?: StringFilter<"HospitalInformation"> | string
    hospitalOwnership?: StringFilter<"HospitalInformation"> | string
    hospitalOverallRating?: StringFilter<"HospitalInformation"> | string
    hospitalOverallRatingFootnote?: StringNullableFilter<"HospitalInformation"> | string | null
    emergencyServices?: StringFilter<"HospitalInformation"> | string
    users?: UserListRelationFilter
  }, "facilityId">

  export type HospitalInformationOrderByWithAggregationInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    country?: SortOrder
    telephone?: SortOrder
    hospitalType?: SortOrder
    hospitalOwnership?: SortOrder
    hospitalOverallRating?: SortOrder
    hospitalOverallRatingFootnote?: SortOrderInput | SortOrder
    emergencyServices?: SortOrder
    _count?: HospitalInformationCountOrderByAggregateInput
    _max?: HospitalInformationMaxOrderByAggregateInput
    _min?: HospitalInformationMinOrderByAggregateInput
  }

  export type HospitalInformationScalarWhereWithAggregatesInput = {
    AND?: HospitalInformationScalarWhereWithAggregatesInput | HospitalInformationScalarWhereWithAggregatesInput[]
    OR?: HospitalInformationScalarWhereWithAggregatesInput[]
    NOT?: HospitalInformationScalarWhereWithAggregatesInput | HospitalInformationScalarWhereWithAggregatesInput[]
    facilityId?: StringWithAggregatesFilter<"HospitalInformation"> | string
    facilityName?: StringWithAggregatesFilter<"HospitalInformation"> | string
    address?: StringWithAggregatesFilter<"HospitalInformation"> | string
    city?: StringWithAggregatesFilter<"HospitalInformation"> | string
    zip?: StringWithAggregatesFilter<"HospitalInformation"> | string
    state?: StringWithAggregatesFilter<"HospitalInformation"> | string
    country?: StringWithAggregatesFilter<"HospitalInformation"> | string
    telephone?: StringWithAggregatesFilter<"HospitalInformation"> | string
    hospitalType?: StringWithAggregatesFilter<"HospitalInformation"> | string
    hospitalOwnership?: StringWithAggregatesFilter<"HospitalInformation"> | string
    hospitalOverallRating?: StringWithAggregatesFilter<"HospitalInformation"> | string
    hospitalOverallRatingFootnote?: StringNullableWithAggregatesFilter<"HospitalInformation"> | string | null
    emergencyServices?: StringWithAggregatesFilter<"HospitalInformation"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    witnesshash?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalInformationNullableScalarRelationFilter, HospitalInformationWhereInput> | null
    registeredHospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bookings?: BookingListRelationFilter
    requests?: HospitalRequestListRelationFilter
    preferredHospitals?: UserPreferenceListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    credits?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrderInput | SortOrder
    userType?: SortOrder
    authProvider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    hospitalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalInformationOrderByWithRelationInput
    registeredHospital?: HospitalOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    requests?: HospitalRequestOrderByRelationAggregateInput
    preferredHospitals?: UserPreferenceOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    credits?: CreditOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    witnesshash?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalInformationNullableScalarRelationFilter, HospitalInformationWhereInput> | null
    registeredHospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bookings?: BookingListRelationFilter
    requests?: HospitalRequestListRelationFilter
    preferredHospitals?: UserPreferenceListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    credits?: XOR<CreditNullableScalarRelationFilter, CreditWhereInput> | null
  }, "id" | "email" | "witnesshash">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrderInput | SortOrder
    userType?: SortOrder
    authProvider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    hospitalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    witnesshash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    hospitalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    name?: StringFilter<"Hospital"> | string
    location?: StringFilter<"Hospital"> | string
    rating?: FloatFilter<"Hospital"> | number
    specialties?: StringNullableListFilter<"Hospital">
    imageUrl?: StringNullableFilter<"Hospital"> | string | null
    isFavorite?: BoolFilter<"Hospital"> | boolean
    reviews?: IntFilter<"Hospital"> | number
    verified?: BoolFilter<"Hospital"> | boolean
    walletAddress?: StringFilter<"Hospital"> | string
    ownerId?: StringFilter<"Hospital"> | string
    totalRequests?: IntFilter<"Hospital"> | number
    totalDonors?: IntFilter<"Hospital"> | number
    totalCustomers?: IntFilter<"Hospital"> | number
    totalTreatments?: IntFilter<"Hospital"> | number
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    requests?: HospitalRequestListRelationFilter
    preferredUsers?: UserPreferenceListRelationFilter
    preferredTreatments?: TreatmentPreferenceListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    specialties?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    walletAddress?: SortOrder
    ownerId?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    requests?: HospitalRequestOrderByRelationAggregateInput
    preferredUsers?: UserPreferenceOrderByRelationAggregateInput
    preferredTreatments?: TreatmentPreferenceOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    location?: StringFilter<"Hospital"> | string
    rating?: FloatFilter<"Hospital"> | number
    specialties?: StringNullableListFilter<"Hospital">
    imageUrl?: StringNullableFilter<"Hospital"> | string | null
    isFavorite?: BoolFilter<"Hospital"> | boolean
    reviews?: IntFilter<"Hospital"> | number
    verified?: BoolFilter<"Hospital"> | boolean
    walletAddress?: StringFilter<"Hospital"> | string
    totalRequests?: IntFilter<"Hospital"> | number
    totalDonors?: IntFilter<"Hospital"> | number
    totalCustomers?: IntFilter<"Hospital"> | number
    totalTreatments?: IntFilter<"Hospital"> | number
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    requests?: HospitalRequestListRelationFilter
    preferredUsers?: UserPreferenceListRelationFilter
    preferredTreatments?: TreatmentPreferenceListRelationFilter
  }, "id" | "ownerId">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    specialties?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isFavorite?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    walletAddress?: SortOrder
    ownerId?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    name?: StringWithAggregatesFilter<"Hospital"> | string
    location?: StringWithAggregatesFilter<"Hospital"> | string
    rating?: FloatWithAggregatesFilter<"Hospital"> | number
    specialties?: StringNullableListFilter<"Hospital">
    imageUrl?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    isFavorite?: BoolWithAggregatesFilter<"Hospital"> | boolean
    reviews?: IntWithAggregatesFilter<"Hospital"> | number
    verified?: BoolWithAggregatesFilter<"Hospital"> | boolean
    walletAddress?: StringWithAggregatesFilter<"Hospital"> | string
    ownerId?: StringWithAggregatesFilter<"Hospital"> | string
    totalRequests?: IntWithAggregatesFilter<"Hospital"> | number
    totalDonors?: IntWithAggregatesFilter<"Hospital"> | number
    totalCustomers?: IntWithAggregatesFilter<"Hospital"> | number
    totalTreatments?: IntWithAggregatesFilter<"Hospital"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    hospitalId?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    duration?: IntFilter<"Booking"> | number
    purpose?: StringFilter<"Booking"> | string
    additionalNotes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<HospitalRequestNullableScalarRelationFilter, HospitalRequestWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    appointmentDate?: SortOrder
    duration?: SortOrder
    purpose?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    request?: HospitalRequestOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    hospitalId?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    duration?: IntFilter<"Booking"> | number
    purpose?: StringFilter<"Booking"> | string
    additionalNotes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    request?: XOR<HospitalRequestNullableScalarRelationFilter, HospitalRequestWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    appointmentDate?: SortOrder
    duration?: SortOrder
    purpose?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    hospitalId?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    appointmentDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    duration?: IntWithAggregatesFilter<"Booking"> | number
    purpose?: StringWithAggregatesFilter<"Booking"> | string
    additionalNotes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type HospitalRequestWhereInput = {
    AND?: HospitalRequestWhereInput | HospitalRequestWhereInput[]
    OR?: HospitalRequestWhereInput[]
    NOT?: HospitalRequestWhereInput | HospitalRequestWhereInput[]
    id?: StringFilter<"HospitalRequest"> | string
    hospitalId?: StringNullableFilter<"HospitalRequest"> | string | null
    userId?: StringFilter<"HospitalRequest"> | string
    requestType?: EnumRequestTypeFilter<"HospitalRequest"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus
    title?: StringFilter<"HospitalRequest"> | string
    description?: StringNullableFilter<"HospitalRequest"> | string | null
    bookingId?: StringNullableFilter<"HospitalRequest"> | string | null
    treatmentId?: StringNullableFilter<"HospitalRequest"> | string | null
    priority?: StringFilter<"HospitalRequest"> | string
    requestedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    notes?: StringNullableFilter<"HospitalRequest"> | string | null
    createdAt?: DateTimeFilter<"HospitalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HospitalRequest"> | Date | string
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type HospitalRequestOrderByWithRelationInput = {
    id?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    userId?: SortOrder
    requestType?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    treatmentId?: SortOrderInput | SortOrder
    priority?: SortOrder
    requestedDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type HospitalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: HospitalRequestWhereInput | HospitalRequestWhereInput[]
    OR?: HospitalRequestWhereInput[]
    NOT?: HospitalRequestWhereInput | HospitalRequestWhereInput[]
    hospitalId?: StringNullableFilter<"HospitalRequest"> | string | null
    userId?: StringFilter<"HospitalRequest"> | string
    requestType?: EnumRequestTypeFilter<"HospitalRequest"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus
    title?: StringFilter<"HospitalRequest"> | string
    description?: StringNullableFilter<"HospitalRequest"> | string | null
    treatmentId?: StringNullableFilter<"HospitalRequest"> | string | null
    priority?: StringFilter<"HospitalRequest"> | string
    requestedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    notes?: StringNullableFilter<"HospitalRequest"> | string | null
    createdAt?: DateTimeFilter<"HospitalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HospitalRequest"> | Date | string
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id" | "bookingId">

  export type HospitalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    userId?: SortOrder
    requestType?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    treatmentId?: SortOrderInput | SortOrder
    priority?: SortOrder
    requestedDate?: SortOrderInput | SortOrder
    completedDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalRequestCountOrderByAggregateInput
    _max?: HospitalRequestMaxOrderByAggregateInput
    _min?: HospitalRequestMinOrderByAggregateInput
  }

  export type HospitalRequestScalarWhereWithAggregatesInput = {
    AND?: HospitalRequestScalarWhereWithAggregatesInput | HospitalRequestScalarWhereWithAggregatesInput[]
    OR?: HospitalRequestScalarWhereWithAggregatesInput[]
    NOT?: HospitalRequestScalarWhereWithAggregatesInput | HospitalRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HospitalRequest"> | string
    hospitalId?: StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null
    userId?: StringWithAggregatesFilter<"HospitalRequest"> | string
    requestType?: EnumRequestTypeWithAggregatesFilter<"HospitalRequest"> | $Enums.RequestType
    status?: EnumRequestStatusWithAggregatesFilter<"HospitalRequest"> | $Enums.RequestStatus
    title?: StringWithAggregatesFilter<"HospitalRequest"> | string
    description?: StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null
    bookingId?: StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null
    treatmentId?: StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null
    priority?: StringWithAggregatesFilter<"HospitalRequest"> | string
    requestedDate?: DateTimeNullableWithAggregatesFilter<"HospitalRequest"> | Date | string | null
    completedDate?: DateTimeNullableWithAggregatesFilter<"HospitalRequest"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HospitalRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HospitalRequest"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    userId?: StringFilter<"UserPreference"> | string
    hospitalId?: StringFilter<"UserPreference"> | string
    preferenceType?: StringFilter<"UserPreference"> | string
    notes?: StringNullableFilter<"UserPreference"> | string | null
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hospital?: HospitalOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_hospitalId?: UserPreferenceUserIdHospitalIdCompoundUniqueInput
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    userId?: StringFilter<"UserPreference"> | string
    hospitalId?: StringFilter<"UserPreference"> | string
    preferenceType?: StringFilter<"UserPreference"> | string
    notes?: StringNullableFilter<"UserPreference"> | string | null
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id" | "userId_hospitalId">

  export type UserPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreference"> | string
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    hospitalId?: StringWithAggregatesFilter<"UserPreference"> | string
    preferenceType?: StringWithAggregatesFilter<"UserPreference"> | string
    notes?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  }

  export type TreatmentPreferenceWhereInput = {
    AND?: TreatmentPreferenceWhereInput | TreatmentPreferenceWhereInput[]
    OR?: TreatmentPreferenceWhereInput[]
    NOT?: TreatmentPreferenceWhereInput | TreatmentPreferenceWhereInput[]
    id?: StringFilter<"TreatmentPreference"> | string
    treatmentId?: StringFilter<"TreatmentPreference"> | string
    treatmentName?: StringFilter<"TreatmentPreference"> | string
    hospitalId?: StringFilter<"TreatmentPreference"> | string
    preferenceType?: StringFilter<"TreatmentPreference"> | string
    notes?: StringNullableFilter<"TreatmentPreference"> | string | null
    createdAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }

  export type TreatmentPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    treatmentName?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
  }

  export type TreatmentPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    treatmentId_hospitalId?: TreatmentPreferenceTreatmentIdHospitalIdCompoundUniqueInput
    AND?: TreatmentPreferenceWhereInput | TreatmentPreferenceWhereInput[]
    OR?: TreatmentPreferenceWhereInput[]
    NOT?: TreatmentPreferenceWhereInput | TreatmentPreferenceWhereInput[]
    treatmentId?: StringFilter<"TreatmentPreference"> | string
    treatmentName?: StringFilter<"TreatmentPreference"> | string
    hospitalId?: StringFilter<"TreatmentPreference"> | string
    preferenceType?: StringFilter<"TreatmentPreference"> | string
    notes?: StringNullableFilter<"TreatmentPreference"> | string | null
    createdAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
  }, "id" | "treatmentId_hospitalId">

  export type TreatmentPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    treatmentName?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreatmentPreferenceCountOrderByAggregateInput
    _max?: TreatmentPreferenceMaxOrderByAggregateInput
    _min?: TreatmentPreferenceMinOrderByAggregateInput
  }

  export type TreatmentPreferenceScalarWhereWithAggregatesInput = {
    AND?: TreatmentPreferenceScalarWhereWithAggregatesInput | TreatmentPreferenceScalarWhereWithAggregatesInput[]
    OR?: TreatmentPreferenceScalarWhereWithAggregatesInput[]
    NOT?: TreatmentPreferenceScalarWhereWithAggregatesInput | TreatmentPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreatmentPreference"> | string
    treatmentId?: StringWithAggregatesFilter<"TreatmentPreference"> | string
    treatmentName?: StringWithAggregatesFilter<"TreatmentPreference"> | string
    hospitalId?: StringWithAggregatesFilter<"TreatmentPreference"> | string
    preferenceType?: StringWithAggregatesFilter<"TreatmentPreference"> | string
    notes?: StringNullableWithAggregatesFilter<"TreatmentPreference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TreatmentPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TreatmentPreference"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    priceId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    priceId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeCustomerId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    priceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    priceId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type CreditWhereInput = {
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    id?: StringFilter<"Credit"> | string
    userId?: StringFilter<"Credit"> | string
    balance?: IntFilter<"Credit"> | number
    totalAllocated?: IntFilter<"Credit"> | number
    totalUsed?: IntFilter<"Credit"> | number
    createdAt?: DateTimeFilter<"Credit"> | Date | string
    updatedAt?: DateTimeFilter<"Credit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: CreditTransactionListRelationFilter
  }

  export type CreditOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type CreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    balance?: IntFilter<"Credit"> | number
    totalAllocated?: IntFilter<"Credit"> | number
    totalUsed?: IntFilter<"Credit"> | number
    createdAt?: DateTimeFilter<"Credit"> | Date | string
    updatedAt?: DateTimeFilter<"Credit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: CreditTransactionListRelationFilter
  }, "id" | "userId">

  export type CreditOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCountOrderByAggregateInput
    _avg?: CreditAvgOrderByAggregateInput
    _max?: CreditMaxOrderByAggregateInput
    _min?: CreditMinOrderByAggregateInput
    _sum?: CreditSumOrderByAggregateInput
  }

  export type CreditScalarWhereWithAggregatesInput = {
    AND?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    OR?: CreditScalarWhereWithAggregatesInput[]
    NOT?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credit"> | string
    userId?: StringWithAggregatesFilter<"Credit"> | string
    balance?: IntWithAggregatesFilter<"Credit"> | number
    totalAllocated?: IntWithAggregatesFilter<"Credit"> | number
    totalUsed?: IntWithAggregatesFilter<"Credit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    creditId?: StringFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    credit?: XOR<CreditScalarRelationFilter, CreditWhereInput>
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    creditId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    credit?: CreditOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    creditId?: StringFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    credit?: XOR<CreditScalarRelationFilter, CreditWhereInput>
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    creditId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    creditId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    balanceAfter?: IntWithAggregatesFilter<"CreditTransaction"> | number
    description?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    referenceId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type FacilityCreateInput = {
    id?: string
    facilityName: string
    facilityId: string
    npi: number
    city: string
    zip: string
    state: string
    year: number
  }

  export type FacilityUncheckedCreateInput = {
    id?: string
    facilityName: string
    facilityId: string
    npi: number
    city: string
    zip: string
    state: string
    year: number
  }

  export type FacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    npi?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    npi?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityCreateManyInput = {
    id?: string
    facilityName: string
    facilityId: string
    npi: number
    city: string
    zip: string
    state: string
    year: number
  }

  export type FacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    npi?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    npi?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type QualityReportCreateInput = {
    facilityId: string
    facilityName: string
    msa: number
    msaTitle: string
    hlmr: number
    hlmrPercentile: number
    hcahpsStartDate: Date | string
    hcahpsEndDate: Date | string
    compHipKnee: number
    compHipKneePercentile: number
    compStartDate: Date | string
    compEndDate: Date | string
    compFootnote: number
    proStartDate: Date | string
    proEndDate: Date | string
  }

  export type QualityReportUncheckedCreateInput = {
    facilityId: string
    facilityName: string
    msa: number
    msaTitle: string
    hlmr: number
    hlmrPercentile: number
    hcahpsStartDate: Date | string
    hcahpsEndDate: Date | string
    compHipKnee: number
    compHipKneePercentile: number
    compStartDate: Date | string
    compEndDate: Date | string
    compFootnote: number
    proStartDate: Date | string
    proEndDate: Date | string
  }

  export type QualityReportUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    msa?: IntFieldUpdateOperationsInput | number
    msaTitle?: StringFieldUpdateOperationsInput | string
    hlmr?: IntFieldUpdateOperationsInput | number
    hlmrPercentile?: IntFieldUpdateOperationsInput | number
    hcahpsStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hcahpsEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compHipKnee?: IntFieldUpdateOperationsInput | number
    compHipKneePercentile?: IntFieldUpdateOperationsInput | number
    compStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compFootnote?: IntFieldUpdateOperationsInput | number
    proStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    proEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityReportUncheckedUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    msa?: IntFieldUpdateOperationsInput | number
    msaTitle?: StringFieldUpdateOperationsInput | string
    hlmr?: IntFieldUpdateOperationsInput | number
    hlmrPercentile?: IntFieldUpdateOperationsInput | number
    hcahpsStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hcahpsEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compHipKnee?: IntFieldUpdateOperationsInput | number
    compHipKneePercentile?: IntFieldUpdateOperationsInput | number
    compStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compFootnote?: IntFieldUpdateOperationsInput | number
    proStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    proEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityReportCreateManyInput = {
    facilityId: string
    facilityName: string
    msa: number
    msaTitle: string
    hlmr: number
    hlmrPercentile: number
    hcahpsStartDate: Date | string
    hcahpsEndDate: Date | string
    compHipKnee: number
    compHipKneePercentile: number
    compStartDate: Date | string
    compEndDate: Date | string
    compFootnote: number
    proStartDate: Date | string
    proEndDate: Date | string
  }

  export type QualityReportUpdateManyMutationInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    msa?: IntFieldUpdateOperationsInput | number
    msaTitle?: StringFieldUpdateOperationsInput | string
    hlmr?: IntFieldUpdateOperationsInput | number
    hlmrPercentile?: IntFieldUpdateOperationsInput | number
    hcahpsStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hcahpsEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compHipKnee?: IntFieldUpdateOperationsInput | number
    compHipKneePercentile?: IntFieldUpdateOperationsInput | number
    compStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compFootnote?: IntFieldUpdateOperationsInput | number
    proStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    proEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualityReportUncheckedUpdateManyInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    msa?: IntFieldUpdateOperationsInput | number
    msaTitle?: StringFieldUpdateOperationsInput | string
    hlmr?: IntFieldUpdateOperationsInput | number
    hlmrPercentile?: IntFieldUpdateOperationsInput | number
    hcahpsStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hcahpsEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compHipKnee?: IntFieldUpdateOperationsInput | number
    compHipKneePercentile?: IntFieldUpdateOperationsInput | number
    compStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compFootnote?: IntFieldUpdateOperationsInput | number
    proStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    proEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HcahpsHospitalSurveryCreateInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    telephone: string
    measureId: string
    question: string
    response: string
    hcahpsAnswerPercen: string
    completedSurveys: number
    responseRatePercent: number
    startDate: Date | string
    endDate: Date | string
  }

  export type HcahpsHospitalSurveryUncheckedCreateInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    telephone: string
    measureId: string
    question: string
    response: string
    hcahpsAnswerPercen: string
    completedSurveys: number
    responseRatePercent: number
    startDate: Date | string
    endDate: Date | string
  }

  export type HcahpsHospitalSurveryUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    measureId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    hcahpsAnswerPercen?: StringFieldUpdateOperationsInput | string
    completedSurveys?: IntFieldUpdateOperationsInput | number
    responseRatePercent?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HcahpsHospitalSurveryUncheckedUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    measureId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    hcahpsAnswerPercen?: StringFieldUpdateOperationsInput | string
    completedSurveys?: IntFieldUpdateOperationsInput | number
    responseRatePercent?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HcahpsHospitalSurveryCreateManyInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    telephone: string
    measureId: string
    question: string
    response: string
    hcahpsAnswerPercen: string
    completedSurveys: number
    responseRatePercent: number
    startDate: Date | string
    endDate: Date | string
  }

  export type HcahpsHospitalSurveryUpdateManyMutationInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    measureId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    hcahpsAnswerPercen?: StringFieldUpdateOperationsInput | string
    completedSurveys?: IntFieldUpdateOperationsInput | number
    responseRatePercent?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HcahpsHospitalSurveryUncheckedUpdateManyInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    measureId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    hcahpsAnswerPercen?: StringFieldUpdateOperationsInput | string
    completedSurveys?: IntFieldUpdateOperationsInput | number
    responseRatePercent?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalInformationCreateInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote?: string | null
    emergencyServices: string
    users?: UserCreateNestedManyWithoutHospitalInput
  }

  export type HospitalInformationUncheckedCreateInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote?: string | null
    emergencyServices: string
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalInformationUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalInformationUncheckedUpdateInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalInformationCreateManyInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote?: string | null
    emergencyServices: string
  }

  export type HospitalInformationUpdateManyMutationInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalInformationUncheckedUpdateManyInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    bookings?: BookingCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    request?: HospitalRequestCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    hospitalId: string
    userId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: HospitalRequestUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    request?: HospitalRequestUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: HospitalRequestUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    hospitalId: string
    userId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestCreateInput = {
    id?: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    booking?: BookingCreateNestedOneWithoutRequestInput
  }

  export type HospitalRequestUncheckedCreateInput = {
    id?: string
    hospitalId?: string | null
    userId: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    booking?: BookingUpdateOneWithoutRequestNestedInput
  }

  export type HospitalRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestCreateManyInput = {
    id?: string
    hospitalId?: string | null
    userId: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    id?: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferredHospitalsInput
    hospital: HospitalCreateNestedOneWithoutPreferredUsersInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferredHospitalsNestedInput
    hospital?: HospitalUpdateOneRequiredWithoutPreferredUsersNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateManyInput = {
    id?: string
    userId: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceCreateInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutPreferredTreatmentsInput
  }

  export type TreatmentPreferenceUncheckedCreateInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutPreferredTreatmentsNestedInput
  }

  export type TreatmentPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceCreateManyInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    trialEnd?: Date | string | null
    priceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    trialEnd?: Date | string | null
    priceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    trialEnd?: Date | string | null
    priceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCreateInput = {
    id?: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsInput
    transactions?: CreditTransactionCreateNestedManyWithoutCreditInput
  }

  export type CreditUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditInput
  }

  export type CreditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
    transactions?: CreditTransactionUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditNestedInput
  }

  export type CreditCreateManyInput = {
    id?: string
    userId: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
    credit: CreditCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    creditId: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credit?: CreditUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    creditId: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creditId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    facilityName?: SortOrder
    facilityId?: SortOrder
    npi?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    year?: SortOrder
  }

  export type FacilityAvgOrderByAggregateInput = {
    npi?: SortOrder
    year?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityName?: SortOrder
    facilityId?: SortOrder
    npi?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    year?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    facilityName?: SortOrder
    facilityId?: SortOrder
    npi?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    year?: SortOrder
  }

  export type FacilitySumOrderByAggregateInput = {
    npi?: SortOrder
    year?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QualityReportCountOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    msa?: SortOrder
    msaTitle?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    hcahpsStartDate?: SortOrder
    hcahpsEndDate?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compStartDate?: SortOrder
    compEndDate?: SortOrder
    compFootnote?: SortOrder
    proStartDate?: SortOrder
    proEndDate?: SortOrder
  }

  export type QualityReportAvgOrderByAggregateInput = {
    msa?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compFootnote?: SortOrder
  }

  export type QualityReportMaxOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    msa?: SortOrder
    msaTitle?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    hcahpsStartDate?: SortOrder
    hcahpsEndDate?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compStartDate?: SortOrder
    compEndDate?: SortOrder
    compFootnote?: SortOrder
    proStartDate?: SortOrder
    proEndDate?: SortOrder
  }

  export type QualityReportMinOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    msa?: SortOrder
    msaTitle?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    hcahpsStartDate?: SortOrder
    hcahpsEndDate?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compStartDate?: SortOrder
    compEndDate?: SortOrder
    compFootnote?: SortOrder
    proStartDate?: SortOrder
    proEndDate?: SortOrder
  }

  export type QualityReportSumOrderByAggregateInput = {
    msa?: SortOrder
    hlmr?: SortOrder
    hlmrPercentile?: SortOrder
    compHipKnee?: SortOrder
    compHipKneePercentile?: SortOrder
    compFootnote?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HcahpsHospitalSurveryCountOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    telephone?: SortOrder
    measureId?: SortOrder
    question?: SortOrder
    response?: SortOrder
    hcahpsAnswerPercen?: SortOrder
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HcahpsHospitalSurveryAvgOrderByAggregateInput = {
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
  }

  export type HcahpsHospitalSurveryMaxOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    telephone?: SortOrder
    measureId?: SortOrder
    question?: SortOrder
    response?: SortOrder
    hcahpsAnswerPercen?: SortOrder
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HcahpsHospitalSurveryMinOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    telephone?: SortOrder
    measureId?: SortOrder
    question?: SortOrder
    response?: SortOrder
    hcahpsAnswerPercen?: SortOrder
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HcahpsHospitalSurverySumOrderByAggregateInput = {
    completedSurveys?: SortOrder
    responseRatePercent?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalInformationCountOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    country?: SortOrder
    telephone?: SortOrder
    hospitalType?: SortOrder
    hospitalOwnership?: SortOrder
    hospitalOverallRating?: SortOrder
    hospitalOverallRatingFootnote?: SortOrder
    emergencyServices?: SortOrder
  }

  export type HospitalInformationMaxOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    country?: SortOrder
    telephone?: SortOrder
    hospitalType?: SortOrder
    hospitalOwnership?: SortOrder
    hospitalOverallRating?: SortOrder
    hospitalOverallRatingFootnote?: SortOrder
    emergencyServices?: SortOrder
  }

  export type HospitalInformationMinOrderByAggregateInput = {
    facilityId?: SortOrder
    facilityName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    state?: SortOrder
    country?: SortOrder
    telephone?: SortOrder
    hospitalType?: SortOrder
    hospitalOwnership?: SortOrder
    hospitalOverallRating?: SortOrder
    hospitalOverallRatingFootnote?: SortOrder
    emergencyServices?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type HospitalInformationNullableScalarRelationFilter = {
    is?: HospitalInformationWhereInput | null
    isNot?: HospitalInformationWhereInput | null
  }

  export type HospitalNullableScalarRelationFilter = {
    is?: HospitalWhereInput | null
    isNot?: HospitalWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type HospitalRequestListRelationFilter = {
    every?: HospitalRequestWhereInput
    some?: HospitalRequestWhereInput
    none?: HospitalRequestWhereInput
  }

  export type UserPreferenceListRelationFilter = {
    every?: UserPreferenceWhereInput
    some?: UserPreferenceWhereInput
    none?: UserPreferenceWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type CreditNullableScalarRelationFilter = {
    is?: CreditWhereInput | null
    isNot?: CreditWhereInput | null
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrder
    userType?: SortOrder
    authProvider?: SortOrder
    providerId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrder
    userType?: SortOrder
    authProvider?: SortOrder
    providerId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrder
    userType?: SortOrder
    authProvider?: SortOrder
    providerId?: SortOrder
    hospitalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TreatmentPreferenceListRelationFilter = {
    every?: TreatmentPreferenceWhereInput
    some?: TreatmentPreferenceWhereInput
    none?: TreatmentPreferenceWhereInput
  }

  export type TreatmentPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    specialties?: SortOrder
    imageUrl?: SortOrder
    isFavorite?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    walletAddress?: SortOrder
    ownerId?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    isFavorite?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    walletAddress?: SortOrder
    ownerId?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    isFavorite?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    walletAddress?: SortOrder
    ownerId?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
    totalRequests?: SortOrder
    totalDonors?: SortOrder
    totalCustomers?: SortOrder
    totalTreatments?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HospitalScalarRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type HospitalRequestNullableScalarRelationFilter = {
    is?: HospitalRequestWhereInput | null
    isNot?: HospitalRequestWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    appointmentDate?: SortOrder
    duration?: SortOrder
    purpose?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    appointmentDate?: SortOrder
    duration?: SortOrder
    purpose?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    appointmentDate?: SortOrder
    duration?: SortOrder
    purpose?: SortOrder
    additionalNotes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type HospitalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    requestType?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bookingId?: SortOrder
    treatmentId?: SortOrder
    priority?: SortOrder
    requestedDate?: SortOrder
    completedDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    requestType?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bookingId?: SortOrder
    treatmentId?: SortOrder
    priority?: SortOrder
    requestedDate?: SortOrder
    completedDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    userId?: SortOrder
    requestType?: SortOrder
    status?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bookingId?: SortOrder
    treatmentId?: SortOrder
    priority?: SortOrder
    requestedDate?: SortOrder
    completedDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPreferenceUserIdHospitalIdCompoundUniqueInput = {
    userId: string
    hospitalId: string
  }

  export type UserPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentPreferenceTreatmentIdHospitalIdCompoundUniqueInput = {
    treatmentId: string
    hospitalId: string
  }

  export type TreatmentPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    treatmentName?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    treatmentName?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    treatmentName?: SortOrder
    hospitalId?: SortOrder
    preferenceType?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    trialEnd?: SortOrder
    priceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    trialEnd?: SortOrder
    priceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    trialEnd?: SortOrder
    priceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAvgOrderByAggregateInput = {
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
  }

  export type CreditMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditSumOrderByAggregateInput = {
    balance?: SortOrder
    totalAllocated?: SortOrder
    totalUsed?: SortOrder
  }

  export type EnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type CreditScalarRelationFilter = {
    is?: CreditWhereInput
    isNot?: CreditWhereInput
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    referenceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    referenceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    referenceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HospitalInformationCreateNestedOneWithoutUsersInput = {
    create?: XOR<HospitalInformationCreateWithoutUsersInput, HospitalInformationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalInformationCreateOrConnectWithoutUsersInput
    connect?: HospitalInformationWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutOwnerInput = {
    create?: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutOwnerInput
    connect?: HospitalWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HospitalRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput> | HospitalRequestCreateWithoutUserInput[] | HospitalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutUserInput | HospitalRequestCreateOrConnectWithoutUserInput[]
    createMany?: HospitalRequestCreateManyUserInputEnvelope
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type CreditCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type HospitalUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutOwnerInput
    connect?: HospitalWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HospitalRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput> | HospitalRequestCreateWithoutUserInput[] | HospitalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutUserInput | HospitalRequestCreateOrConnectWithoutUserInput[]
    createMany?: HospitalRequestCreateManyUserInputEnvelope
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type CreditUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    connect?: CreditWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type HospitalInformationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HospitalInformationCreateWithoutUsersInput, HospitalInformationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalInformationCreateOrConnectWithoutUsersInput
    upsert?: HospitalInformationUpsertWithoutUsersInput
    disconnect?: HospitalInformationWhereInput | boolean
    delete?: HospitalInformationWhereInput | boolean
    connect?: HospitalInformationWhereUniqueInput
    update?: XOR<XOR<HospitalInformationUpdateToOneWithWhereWithoutUsersInput, HospitalInformationUpdateWithoutUsersInput>, HospitalInformationUncheckedUpdateWithoutUsersInput>
  }

  export type HospitalUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutOwnerInput
    upsert?: HospitalUpsertWithoutOwnerInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutOwnerInput, HospitalUpdateWithoutOwnerInput>, HospitalUncheckedUpdateWithoutOwnerInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HospitalRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput> | HospitalRequestCreateWithoutUserInput[] | HospitalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutUserInput | HospitalRequestCreateOrConnectWithoutUserInput[]
    upsert?: HospitalRequestUpsertWithWhereUniqueWithoutUserInput | HospitalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HospitalRequestCreateManyUserInputEnvelope
    set?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    disconnect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    delete?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    update?: HospitalRequestUpdateWithWhereUniqueWithoutUserInput | HospitalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HospitalRequestUpdateManyWithWhereWithoutUserInput | HospitalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
  }

  export type UserPreferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type CreditUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type HospitalUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutOwnerInput
    upsert?: HospitalUpsertWithoutOwnerInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutOwnerInput, HospitalUpdateWithoutOwnerInput>, HospitalUncheckedUpdateWithoutOwnerInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HospitalRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput> | HospitalRequestCreateWithoutUserInput[] | HospitalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutUserInput | HospitalRequestCreateOrConnectWithoutUserInput[]
    upsert?: HospitalRequestUpsertWithWhereUniqueWithoutUserInput | HospitalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HospitalRequestCreateManyUserInputEnvelope
    set?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    disconnect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    delete?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    update?: HospitalRequestUpdateWithWhereUniqueWithoutUserInput | HospitalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HospitalRequestUpdateManyWithWhereWithoutUserInput | HospitalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput> | UserPreferenceCreateWithoutUserInput[] | UserPreferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput | UserPreferenceCreateOrConnectWithoutUserInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutUserInput | UserPreferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPreferenceCreateManyUserInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutUserInput | UserPreferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutUserInput | UserPreferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type CreditUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput
    upsert?: CreditUpsertWithoutUserInput
    disconnect?: CreditWhereInput | boolean
    delete?: CreditWhereInput | boolean
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutUserInput, CreditUpdateWithoutUserInput>, CreditUncheckedUpdateWithoutUserInput>
  }

  export type HospitalCreatespecialtiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRegisteredHospitalInput = {
    create?: XOR<UserCreateWithoutRegisteredHospitalInput, UserUncheckedCreateWithoutRegisteredHospitalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredHospitalInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput> | BookingCreateWithoutHospitalInput[] | BookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHospitalInput | BookingCreateOrConnectWithoutHospitalInput[]
    createMany?: BookingCreateManyHospitalInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HospitalRequestCreateNestedManyWithoutHospitalInput = {
    create?: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput> | HospitalRequestCreateWithoutHospitalInput[] | HospitalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutHospitalInput | HospitalRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: HospitalRequestCreateManyHospitalInputEnvelope
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput> | UserPreferenceCreateWithoutHospitalInput[] | UserPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutHospitalInput | UserPreferenceCreateOrConnectWithoutHospitalInput[]
    createMany?: UserPreferenceCreateManyHospitalInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type TreatmentPreferenceCreateNestedManyWithoutHospitalInput = {
    create?: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput> | TreatmentPreferenceCreateWithoutHospitalInput[] | TreatmentPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: TreatmentPreferenceCreateOrConnectWithoutHospitalInput | TreatmentPreferenceCreateOrConnectWithoutHospitalInput[]
    createMany?: TreatmentPreferenceCreateManyHospitalInputEnvelope
    connect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput> | BookingCreateWithoutHospitalInput[] | BookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHospitalInput | BookingCreateOrConnectWithoutHospitalInput[]
    createMany?: BookingCreateManyHospitalInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput> | HospitalRequestCreateWithoutHospitalInput[] | HospitalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutHospitalInput | HospitalRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: HospitalRequestCreateManyHospitalInputEnvelope
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput> | UserPreferenceCreateWithoutHospitalInput[] | UserPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutHospitalInput | UserPreferenceCreateOrConnectWithoutHospitalInput[]
    createMany?: UserPreferenceCreateManyHospitalInputEnvelope
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
  }

  export type TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput> | TreatmentPreferenceCreateWithoutHospitalInput[] | TreatmentPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: TreatmentPreferenceCreateOrConnectWithoutHospitalInput | TreatmentPreferenceCreateOrConnectWithoutHospitalInput[]
    createMany?: TreatmentPreferenceCreateManyHospitalInputEnvelope
    connect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HospitalUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput = {
    create?: XOR<UserCreateWithoutRegisteredHospitalInput, UserUncheckedCreateWithoutRegisteredHospitalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegisteredHospitalInput
    upsert?: UserUpsertWithoutRegisteredHospitalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegisteredHospitalInput, UserUpdateWithoutRegisteredHospitalInput>, UserUncheckedUpdateWithoutRegisteredHospitalInput>
  }

  export type BookingUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput> | BookingCreateWithoutHospitalInput[] | BookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHospitalInput | BookingCreateOrConnectWithoutHospitalInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutHospitalInput | BookingUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BookingCreateManyHospitalInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutHospitalInput | BookingUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutHospitalInput | BookingUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HospitalRequestUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput> | HospitalRequestCreateWithoutHospitalInput[] | HospitalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutHospitalInput | HospitalRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: HospitalRequestUpsertWithWhereUniqueWithoutHospitalInput | HospitalRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: HospitalRequestCreateManyHospitalInputEnvelope
    set?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    disconnect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    delete?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    update?: HospitalRequestUpdateWithWhereUniqueWithoutHospitalInput | HospitalRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: HospitalRequestUpdateManyWithWhereWithoutHospitalInput | HospitalRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
  }

  export type UserPreferenceUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput> | UserPreferenceCreateWithoutHospitalInput[] | UserPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutHospitalInput | UserPreferenceCreateOrConnectWithoutHospitalInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutHospitalInput | UserPreferenceUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserPreferenceCreateManyHospitalInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutHospitalInput | UserPreferenceUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutHospitalInput | UserPreferenceUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type TreatmentPreferenceUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput> | TreatmentPreferenceCreateWithoutHospitalInput[] | TreatmentPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: TreatmentPreferenceCreateOrConnectWithoutHospitalInput | TreatmentPreferenceCreateOrConnectWithoutHospitalInput[]
    upsert?: TreatmentPreferenceUpsertWithWhereUniqueWithoutHospitalInput | TreatmentPreferenceUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: TreatmentPreferenceCreateManyHospitalInputEnvelope
    set?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    disconnect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    delete?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    connect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    update?: TreatmentPreferenceUpdateWithWhereUniqueWithoutHospitalInput | TreatmentPreferenceUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: TreatmentPreferenceUpdateManyWithWhereWithoutHospitalInput | TreatmentPreferenceUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: TreatmentPreferenceScalarWhereInput | TreatmentPreferenceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput> | BookingCreateWithoutHospitalInput[] | BookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHospitalInput | BookingCreateOrConnectWithoutHospitalInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutHospitalInput | BookingUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BookingCreateManyHospitalInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutHospitalInput | BookingUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutHospitalInput | BookingUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput> | HospitalRequestCreateWithoutHospitalInput[] | HospitalRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutHospitalInput | HospitalRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: HospitalRequestUpsertWithWhereUniqueWithoutHospitalInput | HospitalRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: HospitalRequestCreateManyHospitalInputEnvelope
    set?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    disconnect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    delete?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    connect?: HospitalRequestWhereUniqueInput | HospitalRequestWhereUniqueInput[]
    update?: HospitalRequestUpdateWithWhereUniqueWithoutHospitalInput | HospitalRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: HospitalRequestUpdateManyWithWhereWithoutHospitalInput | HospitalRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput> | UserPreferenceCreateWithoutHospitalInput[] | UserPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutHospitalInput | UserPreferenceCreateOrConnectWithoutHospitalInput[]
    upsert?: UserPreferenceUpsertWithWhereUniqueWithoutHospitalInput | UserPreferenceUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserPreferenceCreateManyHospitalInputEnvelope
    set?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    disconnect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    delete?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    connect?: UserPreferenceWhereUniqueInput | UserPreferenceWhereUniqueInput[]
    update?: UserPreferenceUpdateWithWhereUniqueWithoutHospitalInput | UserPreferenceUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserPreferenceUpdateManyWithWhereWithoutHospitalInput | UserPreferenceUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
  }

  export type TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput> | TreatmentPreferenceCreateWithoutHospitalInput[] | TreatmentPreferenceUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: TreatmentPreferenceCreateOrConnectWithoutHospitalInput | TreatmentPreferenceCreateOrConnectWithoutHospitalInput[]
    upsert?: TreatmentPreferenceUpsertWithWhereUniqueWithoutHospitalInput | TreatmentPreferenceUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: TreatmentPreferenceCreateManyHospitalInputEnvelope
    set?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    disconnect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    delete?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    connect?: TreatmentPreferenceWhereUniqueInput | TreatmentPreferenceWhereUniqueInput[]
    update?: TreatmentPreferenceUpdateWithWhereUniqueWithoutHospitalInput | TreatmentPreferenceUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: TreatmentPreferenceUpdateManyWithWhereWithoutHospitalInput | TreatmentPreferenceUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: TreatmentPreferenceScalarWhereInput | TreatmentPreferenceScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutBookingsInput = {
    create?: XOR<HospitalCreateWithoutBookingsInput, HospitalUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBookingsInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type HospitalRequestCreateNestedOneWithoutBookingInput = {
    create?: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutBookingInput
    connect?: HospitalRequestWhereUniqueInput
  }

  export type HospitalRequestUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutBookingInput
    connect?: HospitalRequestWhereUniqueInput
  }

  export type HospitalUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<HospitalCreateWithoutBookingsInput, HospitalUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBookingsInput
    upsert?: HospitalUpsertWithoutBookingsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutBookingsInput, HospitalUpdateWithoutBookingsInput>, HospitalUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type HospitalRequestUpdateOneWithoutBookingNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutBookingInput
    upsert?: HospitalRequestUpsertWithoutBookingInput
    disconnect?: HospitalRequestWhereInput | boolean
    delete?: HospitalRequestWhereInput | boolean
    connect?: HospitalRequestWhereUniqueInput
    update?: XOR<XOR<HospitalRequestUpdateToOneWithWhereWithoutBookingInput, HospitalRequestUpdateWithoutBookingInput>, HospitalRequestUncheckedUpdateWithoutBookingInput>
  }

  export type HospitalRequestUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
    connectOrCreate?: HospitalRequestCreateOrConnectWithoutBookingInput
    upsert?: HospitalRequestUpsertWithoutBookingInput
    disconnect?: HospitalRequestWhereInput | boolean
    delete?: HospitalRequestWhereInput | boolean
    connect?: HospitalRequestWhereUniqueInput
    update?: XOR<XOR<HospitalRequestUpdateToOneWithWhereWithoutBookingInput, HospitalRequestUpdateWithoutBookingInput>, HospitalRequestUncheckedUpdateWithoutBookingInput>
  }

  export type HospitalCreateNestedOneWithoutRequestsInput = {
    create?: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRequestsInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutRequestInput = {
    create?: XOR<BookingCreateWithoutRequestInput, BookingUncheckedCreateWithoutRequestInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRequestInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HospitalUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutRequestsInput
    upsert?: HospitalUpsertWithoutRequestsInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutRequestsInput, HospitalUpdateWithoutRequestsInput>, HospitalUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type BookingUpdateOneWithoutRequestNestedInput = {
    create?: XOR<BookingCreateWithoutRequestInput, BookingUncheckedCreateWithoutRequestInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRequestInput
    upsert?: BookingUpsertWithoutRequestInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRequestInput, BookingUpdateWithoutRequestInput>, BookingUncheckedUpdateWithoutRequestInput>
  }

  export type UserCreateNestedOneWithoutPreferredHospitalsInput = {
    create?: XOR<UserCreateWithoutPreferredHospitalsInput, UserUncheckedCreateWithoutPreferredHospitalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferredHospitalsInput
    connect?: UserWhereUniqueInput
  }

  export type HospitalCreateNestedOneWithoutPreferredUsersInput = {
    create?: XOR<HospitalCreateWithoutPreferredUsersInput, HospitalUncheckedCreateWithoutPreferredUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPreferredUsersInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferredHospitalsNestedInput = {
    create?: XOR<UserCreateWithoutPreferredHospitalsInput, UserUncheckedCreateWithoutPreferredHospitalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferredHospitalsInput
    upsert?: UserUpsertWithoutPreferredHospitalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferredHospitalsInput, UserUpdateWithoutPreferredHospitalsInput>, UserUncheckedUpdateWithoutPreferredHospitalsInput>
  }

  export type HospitalUpdateOneRequiredWithoutPreferredUsersNestedInput = {
    create?: XOR<HospitalCreateWithoutPreferredUsersInput, HospitalUncheckedCreateWithoutPreferredUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPreferredUsersInput
    upsert?: HospitalUpsertWithoutPreferredUsersInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutPreferredUsersInput, HospitalUpdateWithoutPreferredUsersInput>, HospitalUncheckedUpdateWithoutPreferredUsersInput>
  }

  export type HospitalCreateNestedOneWithoutPreferredTreatmentsInput = {
    create?: XOR<HospitalCreateWithoutPreferredTreatmentsInput, HospitalUncheckedCreateWithoutPreferredTreatmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPreferredTreatmentsInput
    connect?: HospitalWhereUniqueInput
  }

  export type HospitalUpdateOneRequiredWithoutPreferredTreatmentsNestedInput = {
    create?: XOR<HospitalCreateWithoutPreferredTreatmentsInput, HospitalUncheckedCreateWithoutPreferredTreatmentsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutPreferredTreatmentsInput
    upsert?: HospitalUpsertWithoutPreferredTreatmentsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutPreferredTreatmentsInput, HospitalUpdateWithoutPreferredTreatmentsInput>, HospitalUncheckedUpdateWithoutPreferredTreatmentsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutCreditsInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    connect?: UserWhereUniqueInput
  }

  export type CreditTransactionCreateNestedManyWithoutCreditInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput> | CreditTransactionCreateWithoutCreditInput[] | CreditTransactionUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditInput | CreditTransactionCreateOrConnectWithoutCreditInput[]
    createMany?: CreditTransactionCreateManyCreditInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutCreditInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput> | CreditTransactionCreateWithoutCreditInput[] | CreditTransactionUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditInput | CreditTransactionCreateOrConnectWithoutCreditInput[]
    createMany?: CreditTransactionCreateManyCreditInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    upsert?: UserUpsertWithoutCreditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditsInput, UserUpdateWithoutCreditsInput>, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type CreditTransactionUpdateManyWithoutCreditNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput> | CreditTransactionCreateWithoutCreditInput[] | CreditTransactionUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditInput | CreditTransactionCreateOrConnectWithoutCreditInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditInput[]
    createMany?: CreditTransactionCreateManyCreditInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditInput | CreditTransactionUpdateManyWithWhereWithoutCreditInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput> | CreditTransactionCreateWithoutCreditInput[] | CreditTransactionUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditInput | CreditTransactionCreateOrConnectWithoutCreditInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditInput[]
    createMany?: CreditTransactionCreateManyCreditInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditInput | CreditTransactionUpdateManyWithWhereWithoutCreditInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CreditCreateWithoutTransactionsInput, CreditUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditCreateOrConnectWithoutTransactionsInput
    connect?: CreditWhereUniqueInput
  }

  export type EnumCreditTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditTransactionType
  }

  export type CreditUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CreditCreateWithoutTransactionsInput, CreditUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditCreateOrConnectWithoutTransactionsInput
    upsert?: CreditUpsertWithoutTransactionsInput
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutTransactionsInput, CreditUpdateWithoutTransactionsInput>, CreditUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutHospitalInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHospitalInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHospitalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserCreateManyHospitalInputEnvelope = {
    data: UserCreateManyHospitalInput | UserCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
  }

  export type UserUpdateManyWithWhereWithoutHospitalInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHospitalInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    witnesshash?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type HospitalInformationCreateWithoutUsersInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote?: string | null
    emergencyServices: string
  }

  export type HospitalInformationUncheckedCreateWithoutUsersInput = {
    facilityId: string
    facilityName: string
    address: string
    city: string
    zip: string
    state: string
    country: string
    telephone: string
    hospitalType: string
    hospitalOwnership: string
    hospitalOverallRating: string
    hospitalOverallRatingFootnote?: string | null
    emergencyServices: string
  }

  export type HospitalInformationCreateOrConnectWithoutUsersInput = {
    where: HospitalInformationWhereUniqueInput
    create: XOR<HospitalInformationCreateWithoutUsersInput, HospitalInformationUncheckedCreateWithoutUsersInput>
  }

  export type HospitalCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutOwnerInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBookingsInput
    request?: HospitalRequestCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    hospitalId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: HospitalRequestUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HospitalRequestCreateWithoutUserInput = {
    id?: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutRequestsInput
    booking?: BookingCreateNestedOneWithoutRequestInput
  }

  export type HospitalRequestUncheckedCreateWithoutUserInput = {
    id?: string
    hospitalId?: string | null
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestCreateOrConnectWithoutUserInput = {
    where: HospitalRequestWhereUniqueInput
    create: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput>
  }

  export type HospitalRequestCreateManyUserInputEnvelope = {
    data: HospitalRequestCreateManyUserInput | HospitalRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    id?: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutPreferredUsersInput
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceCreateManyUserInputEnvelope = {
    data: UserPreferenceCreateManyUserInput | UserPreferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    trialEnd?: Date | string | null
    priceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    stripeSubscriptionId?: string | null
    plan: $Enums.SubscriptionPlan
    status?: $Enums.SubscriptionStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    trialEnd?: Date | string | null
    priceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type CreditCreateWithoutUserInput = {
    id?: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionCreateNestedManyWithoutCreditInput
  }

  export type CreditUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditInput
  }

  export type CreditCreateOrConnectWithoutUserInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
  }

  export type HospitalInformationUpsertWithoutUsersInput = {
    update: XOR<HospitalInformationUpdateWithoutUsersInput, HospitalInformationUncheckedUpdateWithoutUsersInput>
    create: XOR<HospitalInformationCreateWithoutUsersInput, HospitalInformationUncheckedCreateWithoutUsersInput>
    where?: HospitalInformationWhereInput
  }

  export type HospitalInformationUpdateToOneWithWhereWithoutUsersInput = {
    where?: HospitalInformationWhereInput
    data: XOR<HospitalInformationUpdateWithoutUsersInput, HospitalInformationUncheckedUpdateWithoutUsersInput>
  }

  export type HospitalInformationUpdateWithoutUsersInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalInformationUncheckedUpdateWithoutUsersInput = {
    facilityId?: StringFieldUpdateOperationsInput | string
    facilityName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    hospitalType?: StringFieldUpdateOperationsInput | string
    hospitalOwnership?: StringFieldUpdateOperationsInput | string
    hospitalOverallRating?: StringFieldUpdateOperationsInput | string
    hospitalOverallRatingFootnote?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyServices?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalUpsertWithoutOwnerInput = {
    update: XOR<HospitalUpdateWithoutOwnerInput, HospitalUncheckedUpdateWithoutOwnerInput>
    create: XOR<HospitalCreateWithoutOwnerInput, HospitalUncheckedCreateWithoutOwnerInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutOwnerInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutOwnerInput, HospitalUncheckedUpdateWithoutOwnerInput>
  }

  export type HospitalUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    hospitalId?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    duration?: IntFilter<"Booking"> | number
    purpose?: StringFilter<"Booking"> | string
    additionalNotes?: StringNullableFilter<"Booking"> | string | null
    status?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type HospitalRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: HospitalRequestWhereUniqueInput
    update: XOR<HospitalRequestUpdateWithoutUserInput, HospitalRequestUncheckedUpdateWithoutUserInput>
    create: XOR<HospitalRequestCreateWithoutUserInput, HospitalRequestUncheckedCreateWithoutUserInput>
  }

  export type HospitalRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: HospitalRequestWhereUniqueInput
    data: XOR<HospitalRequestUpdateWithoutUserInput, HospitalRequestUncheckedUpdateWithoutUserInput>
  }

  export type HospitalRequestUpdateManyWithWhereWithoutUserInput = {
    where: HospitalRequestScalarWhereInput
    data: XOR<HospitalRequestUpdateManyMutationInput, HospitalRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type HospitalRequestScalarWhereInput = {
    AND?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
    OR?: HospitalRequestScalarWhereInput[]
    NOT?: HospitalRequestScalarWhereInput | HospitalRequestScalarWhereInput[]
    id?: StringFilter<"HospitalRequest"> | string
    hospitalId?: StringNullableFilter<"HospitalRequest"> | string | null
    userId?: StringFilter<"HospitalRequest"> | string
    requestType?: EnumRequestTypeFilter<"HospitalRequest"> | $Enums.RequestType
    status?: EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus
    title?: StringFilter<"HospitalRequest"> | string
    description?: StringNullableFilter<"HospitalRequest"> | string | null
    bookingId?: StringNullableFilter<"HospitalRequest"> | string | null
    treatmentId?: StringNullableFilter<"HospitalRequest"> | string | null
    priority?: StringFilter<"HospitalRequest"> | string
    requestedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"HospitalRequest"> | Date | string | null
    notes?: StringNullableFilter<"HospitalRequest"> | string | null
    createdAt?: DateTimeFilter<"HospitalRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HospitalRequest"> | Date | string
  }

  export type UserPreferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateManyWithWhereWithoutUserInput = {
    where: UserPreferenceScalarWhereInput
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPreferenceScalarWhereInput = {
    AND?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    OR?: UserPreferenceScalarWhereInput[]
    NOT?: UserPreferenceScalarWhereInput | UserPreferenceScalarWhereInput[]
    id?: StringFilter<"UserPreference"> | string
    userId?: StringFilter<"UserPreference"> | string
    hospitalId?: StringFilter<"UserPreference"> | string
    preferenceType?: StringFilter<"UserPreference"> | string
    notes?: StringNullableFilter<"UserPreference"> | string | null
    createdAt?: DateTimeFilter<"UserPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditUpsertWithoutUserInput = {
    update: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
    where?: CreditWhereInput
  }

  export type CreditUpdateToOneWithWhereWithoutUserInput = {
    where?: CreditWhereInput
    data: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
  }

  export type CreditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditNestedInput
  }

  export type UserCreateWithoutRegisteredHospitalInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegisteredHospitalInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegisteredHospitalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegisteredHospitalInput, UserUncheckedCreateWithoutRegisteredHospitalInput>
  }

  export type BookingCreateWithoutHospitalInput = {
    id?: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    request?: HospitalRequestCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutHospitalInput = {
    id?: string
    userId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: HospitalRequestUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutHospitalInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput>
  }

  export type BookingCreateManyHospitalInputEnvelope = {
    data: BookingCreateManyHospitalInput | BookingCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type HospitalRequestCreateWithoutHospitalInput = {
    id?: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    booking?: BookingCreateNestedOneWithoutRequestInput
  }

  export type HospitalRequestUncheckedCreateWithoutHospitalInput = {
    id?: string
    userId: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestCreateOrConnectWithoutHospitalInput = {
    where: HospitalRequestWhereUniqueInput
    create: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput>
  }

  export type HospitalRequestCreateManyHospitalInputEnvelope = {
    data: HospitalRequestCreateManyHospitalInput | HospitalRequestCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutHospitalInput = {
    id?: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferredHospitalsInput
  }

  export type UserPreferenceUncheckedCreateWithoutHospitalInput = {
    id?: string
    userId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateOrConnectWithoutHospitalInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput>
  }

  export type UserPreferenceCreateManyHospitalInputEnvelope = {
    data: UserPreferenceCreateManyHospitalInput | UserPreferenceCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type TreatmentPreferenceCreateWithoutHospitalInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentPreferenceUncheckedCreateWithoutHospitalInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentPreferenceCreateOrConnectWithoutHospitalInput = {
    where: TreatmentPreferenceWhereUniqueInput
    create: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput>
  }

  export type TreatmentPreferenceCreateManyHospitalInputEnvelope = {
    data: TreatmentPreferenceCreateManyHospitalInput | TreatmentPreferenceCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRegisteredHospitalInput = {
    update: XOR<UserUpdateWithoutRegisteredHospitalInput, UserUncheckedUpdateWithoutRegisteredHospitalInput>
    create: XOR<UserCreateWithoutRegisteredHospitalInput, UserUncheckedCreateWithoutRegisteredHospitalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegisteredHospitalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegisteredHospitalInput, UserUncheckedUpdateWithoutRegisteredHospitalInput>
  }

  export type UserUpdateWithoutRegisteredHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegisteredHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutHospitalInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutHospitalInput, BookingUncheckedUpdateWithoutHospitalInput>
    create: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutHospitalInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutHospitalInput, BookingUncheckedUpdateWithoutHospitalInput>
  }

  export type BookingUpdateManyWithWhereWithoutHospitalInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutHospitalInput>
  }

  export type HospitalRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: HospitalRequestWhereUniqueInput
    update: XOR<HospitalRequestUpdateWithoutHospitalInput, HospitalRequestUncheckedUpdateWithoutHospitalInput>
    create: XOR<HospitalRequestCreateWithoutHospitalInput, HospitalRequestUncheckedCreateWithoutHospitalInput>
  }

  export type HospitalRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: HospitalRequestWhereUniqueInput
    data: XOR<HospitalRequestUpdateWithoutHospitalInput, HospitalRequestUncheckedUpdateWithoutHospitalInput>
  }

  export type HospitalRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: HospitalRequestScalarWhereInput
    data: XOR<HospitalRequestUpdateManyMutationInput, HospitalRequestUncheckedUpdateManyWithoutHospitalInput>
  }

  export type UserPreferenceUpsertWithWhereUniqueWithoutHospitalInput = {
    where: UserPreferenceWhereUniqueInput
    update: XOR<UserPreferenceUpdateWithoutHospitalInput, UserPreferenceUncheckedUpdateWithoutHospitalInput>
    create: XOR<UserPreferenceCreateWithoutHospitalInput, UserPreferenceUncheckedCreateWithoutHospitalInput>
  }

  export type UserPreferenceUpdateWithWhereUniqueWithoutHospitalInput = {
    where: UserPreferenceWhereUniqueInput
    data: XOR<UserPreferenceUpdateWithoutHospitalInput, UserPreferenceUncheckedUpdateWithoutHospitalInput>
  }

  export type UserPreferenceUpdateManyWithWhereWithoutHospitalInput = {
    where: UserPreferenceScalarWhereInput
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyWithoutHospitalInput>
  }

  export type TreatmentPreferenceUpsertWithWhereUniqueWithoutHospitalInput = {
    where: TreatmentPreferenceWhereUniqueInput
    update: XOR<TreatmentPreferenceUpdateWithoutHospitalInput, TreatmentPreferenceUncheckedUpdateWithoutHospitalInput>
    create: XOR<TreatmentPreferenceCreateWithoutHospitalInput, TreatmentPreferenceUncheckedCreateWithoutHospitalInput>
  }

  export type TreatmentPreferenceUpdateWithWhereUniqueWithoutHospitalInput = {
    where: TreatmentPreferenceWhereUniqueInput
    data: XOR<TreatmentPreferenceUpdateWithoutHospitalInput, TreatmentPreferenceUncheckedUpdateWithoutHospitalInput>
  }

  export type TreatmentPreferenceUpdateManyWithWhereWithoutHospitalInput = {
    where: TreatmentPreferenceScalarWhereInput
    data: XOR<TreatmentPreferenceUpdateManyMutationInput, TreatmentPreferenceUncheckedUpdateManyWithoutHospitalInput>
  }

  export type TreatmentPreferenceScalarWhereInput = {
    AND?: TreatmentPreferenceScalarWhereInput | TreatmentPreferenceScalarWhereInput[]
    OR?: TreatmentPreferenceScalarWhereInput[]
    NOT?: TreatmentPreferenceScalarWhereInput | TreatmentPreferenceScalarWhereInput[]
    id?: StringFilter<"TreatmentPreference"> | string
    treatmentId?: StringFilter<"TreatmentPreference"> | string
    treatmentName?: StringFilter<"TreatmentPreference"> | string
    hospitalId?: StringFilter<"TreatmentPreference"> | string
    preferenceType?: StringFilter<"TreatmentPreference"> | string
    notes?: StringNullableFilter<"TreatmentPreference"> | string | null
    createdAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentPreference"> | Date | string
  }

  export type HospitalCreateWithoutBookingsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    requests?: HospitalRequestCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutBookingsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutBookingsInput, HospitalUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type HospitalRequestCreateWithoutBookingInput = {
    id?: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type HospitalRequestUncheckedCreateWithoutBookingInput = {
    id?: string
    hospitalId?: string | null
    userId: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestCreateOrConnectWithoutBookingInput = {
    where: HospitalRequestWhereUniqueInput
    create: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
  }

  export type HospitalUpsertWithoutBookingsInput = {
    update: XOR<HospitalUpdateWithoutBookingsInput, HospitalUncheckedUpdateWithoutBookingsInput>
    create: XOR<HospitalCreateWithoutBookingsInput, HospitalUncheckedCreateWithoutBookingsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutBookingsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutBookingsInput, HospitalUncheckedUpdateWithoutBookingsInput>
  }

  export type HospitalUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    requests?: HospitalRequestUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type HospitalRequestUpsertWithoutBookingInput = {
    update: XOR<HospitalRequestUpdateWithoutBookingInput, HospitalRequestUncheckedUpdateWithoutBookingInput>
    create: XOR<HospitalRequestCreateWithoutBookingInput, HospitalRequestUncheckedCreateWithoutBookingInput>
    where?: HospitalRequestWhereInput
  }

  export type HospitalRequestUpdateToOneWithWhereWithoutBookingInput = {
    where?: HospitalRequestWhereInput
    data: XOR<HospitalRequestUpdateWithoutBookingInput, HospitalRequestUncheckedUpdateWithoutBookingInput>
  }

  export type HospitalRequestUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type HospitalRequestUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateWithoutRequestsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    bookings?: BookingCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutRequestsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type BookingCreateWithoutRequestInput = {
    id?: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutRequestInput = {
    id?: string
    hospitalId: string
    userId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutRequestInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRequestInput, BookingUncheckedCreateWithoutRequestInput>
  }

  export type HospitalUpsertWithoutRequestsInput = {
    update: XOR<HospitalUpdateWithoutRequestsInput, HospitalUncheckedUpdateWithoutRequestsInput>
    create: XOR<HospitalCreateWithoutRequestsInput, HospitalUncheckedCreateWithoutRequestsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutRequestsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutRequestsInput, HospitalUncheckedUpdateWithoutRequestsInput>
  }

  export type HospitalUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BookingUpsertWithoutRequestInput = {
    update: XOR<BookingUpdateWithoutRequestInput, BookingUncheckedUpdateWithoutRequestInput>
    create: XOR<BookingCreateWithoutRequestInput, BookingUncheckedCreateWithoutRequestInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRequestInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRequestInput, BookingUncheckedUpdateWithoutRequestInput>
  }

  export type BookingUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPreferredHospitalsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferredHospitalsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferredHospitalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferredHospitalsInput, UserUncheckedCreateWithoutPreferredHospitalsInput>
  }

  export type HospitalCreateWithoutPreferredUsersInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    bookings?: BookingCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutPreferredUsersInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput
    preferredTreatments?: TreatmentPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutPreferredUsersInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutPreferredUsersInput, HospitalUncheckedCreateWithoutPreferredUsersInput>
  }

  export type UserUpsertWithoutPreferredHospitalsInput = {
    update: XOR<UserUpdateWithoutPreferredHospitalsInput, UserUncheckedUpdateWithoutPreferredHospitalsInput>
    create: XOR<UserCreateWithoutPreferredHospitalsInput, UserUncheckedCreateWithoutPreferredHospitalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferredHospitalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferredHospitalsInput, UserUncheckedUpdateWithoutPreferredHospitalsInput>
  }

  export type UserUpdateWithoutPreferredHospitalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferredHospitalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type HospitalUpsertWithoutPreferredUsersInput = {
    update: XOR<HospitalUpdateWithoutPreferredUsersInput, HospitalUncheckedUpdateWithoutPreferredUsersInput>
    create: XOR<HospitalCreateWithoutPreferredUsersInput, HospitalUncheckedCreateWithoutPreferredUsersInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutPreferredUsersInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutPreferredUsersInput, HospitalUncheckedUpdateWithoutPreferredUsersInput>
  }

  export type HospitalUpdateWithoutPreferredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutPreferredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput
    preferredTreatments?: TreatmentPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateWithoutPreferredTreatmentsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    bookings?: BookingCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateWithoutPreferredTreatmentsInput = {
    id?: string
    name: string
    location: string
    rating?: number
    specialties?: HospitalCreatespecialtiesInput | string[]
    imageUrl?: string | null
    isFavorite?: boolean
    reviews?: number
    verified?: boolean
    walletAddress: string
    ownerId: string
    totalRequests?: number
    totalDonors?: number
    totalCustomers?: number
    totalTreatments?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutHospitalInput
    preferredUsers?: UserPreferenceUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalCreateOrConnectWithoutPreferredTreatmentsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutPreferredTreatmentsInput, HospitalUncheckedCreateWithoutPreferredTreatmentsInput>
  }

  export type HospitalUpsertWithoutPreferredTreatmentsInput = {
    update: XOR<HospitalUpdateWithoutPreferredTreatmentsInput, HospitalUncheckedUpdateWithoutPreferredTreatmentsInput>
    create: XOR<HospitalCreateWithoutPreferredTreatmentsInput, HospitalUncheckedCreateWithoutPreferredTreatmentsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutPreferredTreatmentsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutPreferredTreatmentsInput, HospitalUncheckedUpdateWithoutPreferredTreatmentsInput>
  }

  export type HospitalUpdateWithoutPreferredTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateWithoutPreferredTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    specialties?: HospitalUpdatespecialtiesInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    walletAddress?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    totalRequests?: IntFieldUpdateOperationsInput | number
    totalDonors?: IntFieldUpdateOperationsInput | number
    totalCustomers?: IntFieldUpdateOperationsInput | number
    totalTreatments?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutHospitalNestedInput
    preferredUsers?: UserPreferenceUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    credits?: CreditCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    credits?: CreditUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    requests?: HospitalRequestCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditsInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    requests?: HospitalRequestUncheckedCreateNestedManyWithoutUserInput
    preferredHospitals?: UserPreferenceUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
  }

  export type CreditTransactionCreateWithoutCreditInput = {
    id?: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUncheckedCreateWithoutCreditInput = {
    id?: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutCreditInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput>
  }

  export type CreditTransactionCreateManyCreditInputEnvelope = {
    data: CreditTransactionCreateManyCreditInput | CreditTransactionCreateManyCreditInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreditsInput = {
    update: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type UserUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutCreditInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutCreditInput, CreditTransactionUncheckedUpdateWithoutCreditInput>
    create: XOR<CreditTransactionCreateWithoutCreditInput, CreditTransactionUncheckedCreateWithoutCreditInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutCreditInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutCreditInput, CreditTransactionUncheckedUpdateWithoutCreditInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutCreditInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutCreditInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    creditId?: StringFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type CreditCreateWithoutTransactionsInput = {
    id?: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsInput
  }

  export type CreditUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    balance?: number
    totalAllocated?: number
    totalUsed?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCreateOrConnectWithoutTransactionsInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutTransactionsInput, CreditUncheckedCreateWithoutTransactionsInput>
  }

  export type CreditUpsertWithoutTransactionsInput = {
    update: XOR<CreditUpdateWithoutTransactionsInput, CreditUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CreditCreateWithoutTransactionsInput, CreditUncheckedCreateWithoutTransactionsInput>
    where?: CreditWhereInput
  }

  export type CreditUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CreditWhereInput
    data: XOR<CreditUpdateWithoutTransactionsInput, CreditUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
  }

  export type CreditUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    totalAllocated?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyHospitalInput = {
    id?: string
    fullname: string
    email: string
    password?: string | null
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    authProvider?: $Enums.AuthProvider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    credits?: CreditUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    requests?: HospitalRequestUncheckedUpdateManyWithoutUserNestedInput
    preferredHospitals?: UserPreferenceUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    credits?: CreditUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    hospitalId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestCreateManyUserInput = {
    id?: string
    hospitalId?: string | null
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateManyUserInput = {
    id?: string
    hospitalId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBookingsNestedInput
    request?: HospitalRequestUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: HospitalRequestUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneWithoutRequestsNestedInput
    booking?: BookingUpdateOneWithoutRequestNestedInput
  }

  export type HospitalRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutPreferredUsersNestedInput
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyHospitalInput = {
    id?: string
    userId: string
    appointmentDate: Date | string
    duration?: number
    purpose: string
    additionalNotes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalRequestCreateManyHospitalInput = {
    id?: string
    userId: string
    requestType: $Enums.RequestType
    status?: $Enums.RequestStatus
    title: string
    description?: string | null
    bookingId?: string | null
    treatmentId?: string | null
    priority?: string
    requestedDate?: Date | string | null
    completedDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPreferenceCreateManyHospitalInput = {
    id?: string
    userId: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentPreferenceCreateManyHospitalInput = {
    id?: string
    treatmentId: string
    treatmentName: string
    preferenceType?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    request?: HospitalRequestUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: HospitalRequestUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    booking?: BookingUpdateOneWithoutRequestNestedInput
  }

  export type HospitalRequestUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalRequestUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: StringFieldUpdateOperationsInput | string
    requestedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferredHospitalsNestedInput
  }

  export type UserPreferenceUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentPreferenceUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    treatmentName?: StringFieldUpdateOperationsInput | string
    preferenceType?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyCreditInput = {
    id?: string
    type: $Enums.CreditTransactionType
    amount: number
    balanceAfter: number
    description?: string | null
    referenceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateWithoutCreditInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateWithoutCreditInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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