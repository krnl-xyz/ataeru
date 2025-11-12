
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
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  USER: 'USER',
  MEDICAL_FACILITY: 'MEDICAL_FACILITY'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Booking: 'Booking'
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
      modelProps: "facility" | "qualityReport" | "hcahpsHospitalSurvery" | "hospitalInformation" | "user" | "hospital" | "booking"
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    bookings: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | HospitalCountOutputTypeCountBookingsArgs
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
    password: string
    witnesshash: string
    phone: string
    address: string
    about: string | null
    userType: $Enums.UserType
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
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    registeredHospital?: boolean | User$registeredHospitalArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
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
    hospitalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "witnesshash" | "phone" | "address" | "about" | "userType" | "hospitalId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    registeredHospital?: boolean | User$registeredHospitalArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      password: string
      witnesshash: string
      phone: string
      address: string
      about: string | null
      userType: $Enums.UserType
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
  }

  export type HospitalSumAggregateOutputType = {
    rating: number | null
    reviews: number | null
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
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    rating?: true
    reviews?: true
  }

  export type HospitalSumAggregateInputType = {
    rating?: true
    reviews?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hospital$bookingsArgs<ExtArgs>
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "rating" | "specialties" | "imageUrl" | "isFavorite" | "reviews" | "verified" | "walletAddress" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Hospital$bookingsArgs<ExtArgs>
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
    password?: StringFilter<"User"> | string
    witnesshash?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    hospitalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalInformationNullableScalarRelationFilter, HospitalInformationWhereInput> | null
    registeredHospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrderInput | SortOrder
    userType?: SortOrder
    hospitalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalInformationOrderByWithRelationInput
    registeredHospital?: HospitalOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    witnesshash?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    hospitalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hospital?: XOR<HospitalInformationNullableScalarRelationFilter, HospitalInformationWhereInput> | null
    registeredHospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    bookings?: BookingListRelationFilter
  }, "id" | "email" | "witnesshash">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    witnesshash?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    about?: SortOrderInput | SortOrder
    userType?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    witnesshash?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
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
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
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
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
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
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
    bookings?: BookingCreateNestedManyWithoutHospitalInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
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

  export type BookingOrderByRelationAggregateInput = {
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    rating?: SortOrder
    reviews?: SortOrder
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

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
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

  export type BookingUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput> | BookingCreateWithoutHospitalInput[] | BookingUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutHospitalInput | BookingCreateOrConnectWithoutHospitalInput[]
    createMany?: BookingCreateManyHospitalInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type UserCreateWithoutHospitalInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHospitalInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
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
    password?: StringFilter<"User"> | string
    witnesshash?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    about?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
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
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutHospitalInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutHospitalInput
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
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutHospitalNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutHospitalNestedInput
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

  export type UserCreateWithoutRegisteredHospitalInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegisteredHospitalInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
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
  }

  export type BookingCreateOrConnectWithoutHospitalInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutHospitalInput, BookingUncheckedCreateWithoutHospitalInput>
  }

  export type BookingCreateManyHospitalInputEnvelope = {
    data: BookingCreateManyHospitalInput | BookingCreateManyHospitalInput[]
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
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegisteredHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutRegisteredHospitalInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalCreateOrConnectWithoutBookingsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutBookingsInput, HospitalUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital?: HospitalInformationCreateNestedOneWithoutUsersInput
    registeredHospital?: HospitalCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    hospitalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registeredHospital?: HospitalUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRegisteredHospitalNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalInformationUpdateOneWithoutUsersNestedInput
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type UserCreateManyHospitalInput = {
    id?: string
    fullname: string
    email: string
    password: string
    witnesshash: string
    phone: string
    address: string
    about?: string | null
    userType?: $Enums.UserType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registeredHospital?: HospitalUncheckedUpdateOneWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    witnesshash?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
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