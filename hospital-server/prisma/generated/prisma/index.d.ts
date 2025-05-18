
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
    HospitalInformation: 'HospitalInformation'
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
      modelProps: "facility" | "qualityReport" | "hcahpsHospitalSurvery" | "hospitalInformation"
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
    _avg: HospitalInformationAvgAggregateOutputType | null
    _sum: HospitalInformationSumAggregateOutputType | null
    _min: HospitalInformationMinAggregateOutputType | null
    _max: HospitalInformationMaxAggregateOutputType | null
  }

  export type HospitalInformationAvgAggregateOutputType = {
    id: number | null
  }

  export type HospitalInformationSumAggregateOutputType = {
    id: number | null
  }

  export type HospitalInformationMinAggregateOutputType = {
    id: number | null
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
    id: number | null
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
    id: number
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


  export type HospitalInformationAvgAggregateInputType = {
    id?: true
  }

  export type HospitalInformationSumAggregateInputType = {
    id?: true
  }

  export type HospitalInformationMinAggregateInputType = {
    id?: true
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
    id?: true
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
    id?: true
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
     * Select which fields to average
    **/
    _avg?: HospitalInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalInformationSumAggregateInputType
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
    _avg?: HospitalInformationAvgAggregateInputType
    _sum?: HospitalInformationSumAggregateInputType
    _min?: HospitalInformationMinAggregateInputType
    _max?: HospitalInformationMaxAggregateInputType
  }

  export type HospitalInformationGroupByOutputType = {
    id: number
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
    _avg: HospitalInformationAvgAggregateOutputType | null
    _sum: HospitalInformationSumAggregateOutputType | null
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
    id?: boolean
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

  export type HospitalInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
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
    id?: boolean
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
    id?: boolean
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

  export type HospitalInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "facilityName" | "address" | "city" | "zip" | "state" | "country" | "telephone" | "hospitalType" | "hospitalOwnership" | "hospitalOverallRating" | "hospitalOverallRatingFootnote" | "emergencyServices", ExtArgs["result"]["hospitalInformation"]>

  export type $HospitalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HospitalInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
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
     * // Only select the `id`
     * const hospitalInformationWithIdOnly = await prisma.hospitalInformation.findMany({ select: { id: true } })
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
     * // Create many HospitalInformations and only return the `id`
     * const hospitalInformationWithIdOnly = await prisma.hospitalInformation.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more HospitalInformations and only return the `id`
     * const hospitalInformationWithIdOnly = await prisma.hospitalInformation.updateManyAndReturn({
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
    readonly id: FieldRef<"HospitalInformation", 'Int'>
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
    id: 'id',
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
    id?: IntFilter<"HospitalInformation"> | number
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
  }

  export type HospitalInformationOrderByWithRelationInput = {
    id?: SortOrder
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
  }

  export type HospitalInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
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
  }, "id">

  export type HospitalInformationOrderByWithAggregationInput = {
    id?: SortOrder
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
    _avg?: HospitalInformationAvgOrderByAggregateInput
    _max?: HospitalInformationMaxOrderByAggregateInput
    _min?: HospitalInformationMinOrderByAggregateInput
    _sum?: HospitalInformationSumOrderByAggregateInput
  }

  export type HospitalInformationScalarWhereWithAggregatesInput = {
    AND?: HospitalInformationScalarWhereWithAggregatesInput | HospitalInformationScalarWhereWithAggregatesInput[]
    OR?: HospitalInformationScalarWhereWithAggregatesInput[]
    NOT?: HospitalInformationScalarWhereWithAggregatesInput | HospitalInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HospitalInformation"> | number
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
  }

  export type HospitalInformationUncheckedCreateInput = {
    id?: number
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
  }

  export type HospitalInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
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

  export type HospitalInformationCreateManyInput = {
    id?: number
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
    id?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HospitalInformationCountOrderByAggregateInput = {
    id?: SortOrder
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

  export type HospitalInformationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospitalInformationMaxOrderByAggregateInput = {
    id?: SortOrder
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
    id?: SortOrder
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

  export type HospitalInformationSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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