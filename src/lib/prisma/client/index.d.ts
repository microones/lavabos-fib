
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
 * Model Lavabo
 * 
 */
export type Lavabo = $Result.DefaultSelection<Prisma.$LavaboPayload>
/**
 * Model Frase
 * 
 */
export type Frase = $Result.DefaultSelection<Prisma.$FrasePayload>
/**
 * Model Comentari
 * 
 */
export type Comentari = $Result.DefaultSelection<Prisma.$ComentariPayload>
/**
 * Model Ressenya
 * 
 */
export type Ressenya = $Result.DefaultSelection<Prisma.$RessenyaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genere: {
  masculi: 'masculi',
  femeni: 'femeni',
  mixt: 'mixt'
};

export type Genere = (typeof Genere)[keyof typeof Genere]


export const Idioma: {
  catala: 'catala',
  castella: 'castella',
  catala_i_castella: 'catala_i_castella',
  angles: 'angles',
  frances: 'frances'
};

export type Idioma = (typeof Idioma)[keyof typeof Idioma]

}

export type Genere = $Enums.Genere

export const Genere: typeof $Enums.Genere

export type Idioma = $Enums.Idioma

export const Idioma: typeof $Enums.Idioma

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lavabos
 * const lavabos = await prisma.lavabo.findMany()
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
   * // Fetch zero or more Lavabos
   * const lavabos = await prisma.lavabo.findMany()
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
   * `prisma.lavabo`: Exposes CRUD operations for the **Lavabo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lavabos
    * const lavabos = await prisma.lavabo.findMany()
    * ```
    */
  get lavabo(): Prisma.LavaboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frase`: Exposes CRUD operations for the **Frase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frases
    * const frases = await prisma.frase.findMany()
    * ```
    */
  get frase(): Prisma.FraseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentari`: Exposes CRUD operations for the **Comentari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentaris
    * const comentaris = await prisma.comentari.findMany()
    * ```
    */
  get comentari(): Prisma.ComentariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ressenya`: Exposes CRUD operations for the **Ressenya** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressenyas
    * const ressenyas = await prisma.ressenya.findMany()
    * ```
    */
  get ressenya(): Prisma.RessenyaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Lavabo: 'Lavabo',
    Frase: 'Frase',
    Comentari: 'Comentari',
    Ressenya: 'Ressenya'
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
      modelProps: "lavabo" | "frase" | "comentari" | "ressenya"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Lavabo: {
        payload: Prisma.$LavaboPayload<ExtArgs>
        fields: Prisma.LavaboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LavaboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LavaboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          findFirst: {
            args: Prisma.LavaboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LavaboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          findMany: {
            args: Prisma.LavaboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>[]
          }
          create: {
            args: Prisma.LavaboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          createMany: {
            args: Prisma.LavaboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LavaboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>[]
          }
          delete: {
            args: Prisma.LavaboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          update: {
            args: Prisma.LavaboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          deleteMany: {
            args: Prisma.LavaboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LavaboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LavaboUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>[]
          }
          upsert: {
            args: Prisma.LavaboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LavaboPayload>
          }
          aggregate: {
            args: Prisma.LavaboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLavabo>
          }
          groupBy: {
            args: Prisma.LavaboGroupByArgs<ExtArgs>
            result: $Utils.Optional<LavaboGroupByOutputType>[]
          }
          count: {
            args: Prisma.LavaboCountArgs<ExtArgs>
            result: $Utils.Optional<LavaboCountAggregateOutputType> | number
          }
        }
      }
      Frase: {
        payload: Prisma.$FrasePayload<ExtArgs>
        fields: Prisma.FraseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FraseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FraseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          findFirst: {
            args: Prisma.FraseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FraseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          findMany: {
            args: Prisma.FraseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>[]
          }
          create: {
            args: Prisma.FraseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          createMany: {
            args: Prisma.FraseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FraseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>[]
          }
          delete: {
            args: Prisma.FraseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          update: {
            args: Prisma.FraseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          deleteMany: {
            args: Prisma.FraseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FraseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FraseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>[]
          }
          upsert: {
            args: Prisma.FraseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrasePayload>
          }
          aggregate: {
            args: Prisma.FraseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrase>
          }
          groupBy: {
            args: Prisma.FraseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FraseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FraseCountArgs<ExtArgs>
            result: $Utils.Optional<FraseCountAggregateOutputType> | number
          }
        }
      }
      Comentari: {
        payload: Prisma.$ComentariPayload<ExtArgs>
        fields: Prisma.ComentariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          findFirst: {
            args: Prisma.ComentariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          findMany: {
            args: Prisma.ComentariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>[]
          }
          create: {
            args: Prisma.ComentariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          createMany: {
            args: Prisma.ComentariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>[]
          }
          delete: {
            args: Prisma.ComentariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          update: {
            args: Prisma.ComentariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          deleteMany: {
            args: Prisma.ComentariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>[]
          }
          upsert: {
            args: Prisma.ComentariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariPayload>
          }
          aggregate: {
            args: Prisma.ComentariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentari>
          }
          groupBy: {
            args: Prisma.ComentariGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentariGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentariCountArgs<ExtArgs>
            result: $Utils.Optional<ComentariCountAggregateOutputType> | number
          }
        }
      }
      Ressenya: {
        payload: Prisma.$RessenyaPayload<ExtArgs>
        fields: Prisma.RessenyaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RessenyaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RessenyaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          findFirst: {
            args: Prisma.RessenyaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RessenyaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          findMany: {
            args: Prisma.RessenyaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>[]
          }
          create: {
            args: Prisma.RessenyaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          createMany: {
            args: Prisma.RessenyaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RessenyaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>[]
          }
          delete: {
            args: Prisma.RessenyaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          update: {
            args: Prisma.RessenyaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          deleteMany: {
            args: Prisma.RessenyaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RessenyaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RessenyaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>[]
          }
          upsert: {
            args: Prisma.RessenyaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessenyaPayload>
          }
          aggregate: {
            args: Prisma.RessenyaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessenya>
          }
          groupBy: {
            args: Prisma.RessenyaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessenyaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RessenyaCountArgs<ExtArgs>
            result: $Utils.Optional<RessenyaCountAggregateOutputType> | number
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
    lavabo?: LavaboOmit
    frase?: FraseOmit
    comentari?: ComentariOmit
    ressenya?: RessenyaOmit
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
   * Count Type LavaboCountOutputType
   */

  export type LavaboCountOutputType = {
    frases: number
    ressenyes: number
  }

  export type LavaboCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frases?: boolean | LavaboCountOutputTypeCountFrasesArgs
    ressenyes?: boolean | LavaboCountOutputTypeCountRessenyesArgs
  }

  // Custom InputTypes
  /**
   * LavaboCountOutputType without action
   */
  export type LavaboCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LavaboCountOutputType
     */
    select?: LavaboCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LavaboCountOutputType without action
   */
  export type LavaboCountOutputTypeCountFrasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FraseWhereInput
  }

  /**
   * LavaboCountOutputType without action
   */
  export type LavaboCountOutputTypeCountRessenyesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessenyaWhereInput
  }


  /**
   * Count Type FraseCountOutputType
   */

  export type FraseCountOutputType = {
    comentaris: number
  }

  export type FraseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentaris?: boolean | FraseCountOutputTypeCountComentarisArgs
  }

  // Custom InputTypes
  /**
   * FraseCountOutputType without action
   */
  export type FraseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraseCountOutputType
     */
    select?: FraseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FraseCountOutputType without action
   */
  export type FraseCountOutputTypeCountComentarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentariWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Lavabo
   */

  export type AggregateLavabo = {
    _count: LavaboCountAggregateOutputType | null
    _avg: LavaboAvgAggregateOutputType | null
    _sum: LavaboSumAggregateOutputType | null
    _min: LavaboMinAggregateOutputType | null
    _max: LavaboMaxAggregateOutputType | null
  }

  export type LavaboAvgAggregateOutputType = {
    id: number | null
  }

  export type LavaboSumAggregateOutputType = {
    id: number | null
  }

  export type LavaboMinAggregateOutputType = {
    id: number | null
    edifici: string | null
    planta: string | null
    genere: $Enums.Genere | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LavaboMaxAggregateOutputType = {
    id: number | null
    edifici: string | null
    planta: string | null
    genere: $Enums.Genere | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LavaboCountAggregateOutputType = {
    id: number
    edifici: number
    planta: number
    genere: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LavaboAvgAggregateInputType = {
    id?: true
  }

  export type LavaboSumAggregateInputType = {
    id?: true
  }

  export type LavaboMinAggregateInputType = {
    id?: true
    edifici?: true
    planta?: true
    genere?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LavaboMaxAggregateInputType = {
    id?: true
    edifici?: true
    planta?: true
    genere?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LavaboCountAggregateInputType = {
    id?: true
    edifici?: true
    planta?: true
    genere?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LavaboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lavabo to aggregate.
     */
    where?: LavaboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lavabos to fetch.
     */
    orderBy?: LavaboOrderByWithRelationInput | LavaboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LavaboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lavabos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lavabos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lavabos
    **/
    _count?: true | LavaboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LavaboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LavaboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LavaboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LavaboMaxAggregateInputType
  }

  export type GetLavaboAggregateType<T extends LavaboAggregateArgs> = {
        [P in keyof T & keyof AggregateLavabo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLavabo[P]>
      : GetScalarType<T[P], AggregateLavabo[P]>
  }




  export type LavaboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LavaboWhereInput
    orderBy?: LavaboOrderByWithAggregationInput | LavaboOrderByWithAggregationInput[]
    by: LavaboScalarFieldEnum[] | LavaboScalarFieldEnum
    having?: LavaboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LavaboCountAggregateInputType | true
    _avg?: LavaboAvgAggregateInputType
    _sum?: LavaboSumAggregateInputType
    _min?: LavaboMinAggregateInputType
    _max?: LavaboMaxAggregateInputType
  }

  export type LavaboGroupByOutputType = {
    id: number
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt: Date
    updatedAt: Date
    _count: LavaboCountAggregateOutputType | null
    _avg: LavaboAvgAggregateOutputType | null
    _sum: LavaboSumAggregateOutputType | null
    _min: LavaboMinAggregateOutputType | null
    _max: LavaboMaxAggregateOutputType | null
  }

  type GetLavaboGroupByPayload<T extends LavaboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LavaboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LavaboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LavaboGroupByOutputType[P]>
            : GetScalarType<T[P], LavaboGroupByOutputType[P]>
        }
      >
    >


  export type LavaboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edifici?: boolean
    planta?: boolean
    genere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frases?: boolean | Lavabo$frasesArgs<ExtArgs>
    ressenyes?: boolean | Lavabo$ressenyesArgs<ExtArgs>
    _count?: boolean | LavaboCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lavabo"]>

  export type LavaboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edifici?: boolean
    planta?: boolean
    genere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lavabo"]>

  export type LavaboSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edifici?: boolean
    planta?: boolean
    genere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lavabo"]>

  export type LavaboSelectScalar = {
    id?: boolean
    edifici?: boolean
    planta?: boolean
    genere?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LavaboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "edifici" | "planta" | "genere" | "createdAt" | "updatedAt", ExtArgs["result"]["lavabo"]>
  export type LavaboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frases?: boolean | Lavabo$frasesArgs<ExtArgs>
    ressenyes?: boolean | Lavabo$ressenyesArgs<ExtArgs>
    _count?: boolean | LavaboCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LavaboIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LavaboIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LavaboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lavabo"
    objects: {
      frases: Prisma.$FrasePayload<ExtArgs>[]
      ressenyes: Prisma.$RessenyaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      edifici: string
      planta: string
      genere: $Enums.Genere
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lavabo"]>
    composites: {}
  }

  type LavaboGetPayload<S extends boolean | null | undefined | LavaboDefaultArgs> = $Result.GetResult<Prisma.$LavaboPayload, S>

  type LavaboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LavaboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LavaboCountAggregateInputType | true
    }

  export interface LavaboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lavabo'], meta: { name: 'Lavabo' } }
    /**
     * Find zero or one Lavabo that matches the filter.
     * @param {LavaboFindUniqueArgs} args - Arguments to find a Lavabo
     * @example
     * // Get one Lavabo
     * const lavabo = await prisma.lavabo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LavaboFindUniqueArgs>(args: SelectSubset<T, LavaboFindUniqueArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lavabo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LavaboFindUniqueOrThrowArgs} args - Arguments to find a Lavabo
     * @example
     * // Get one Lavabo
     * const lavabo = await prisma.lavabo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LavaboFindUniqueOrThrowArgs>(args: SelectSubset<T, LavaboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lavabo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboFindFirstArgs} args - Arguments to find a Lavabo
     * @example
     * // Get one Lavabo
     * const lavabo = await prisma.lavabo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LavaboFindFirstArgs>(args?: SelectSubset<T, LavaboFindFirstArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lavabo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboFindFirstOrThrowArgs} args - Arguments to find a Lavabo
     * @example
     * // Get one Lavabo
     * const lavabo = await prisma.lavabo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LavaboFindFirstOrThrowArgs>(args?: SelectSubset<T, LavaboFindFirstOrThrowArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lavabos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lavabos
     * const lavabos = await prisma.lavabo.findMany()
     * 
     * // Get first 10 Lavabos
     * const lavabos = await prisma.lavabo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lavaboWithIdOnly = await prisma.lavabo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LavaboFindManyArgs>(args?: SelectSubset<T, LavaboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lavabo.
     * @param {LavaboCreateArgs} args - Arguments to create a Lavabo.
     * @example
     * // Create one Lavabo
     * const Lavabo = await prisma.lavabo.create({
     *   data: {
     *     // ... data to create a Lavabo
     *   }
     * })
     * 
     */
    create<T extends LavaboCreateArgs>(args: SelectSubset<T, LavaboCreateArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lavabos.
     * @param {LavaboCreateManyArgs} args - Arguments to create many Lavabos.
     * @example
     * // Create many Lavabos
     * const lavabo = await prisma.lavabo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LavaboCreateManyArgs>(args?: SelectSubset<T, LavaboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lavabos and returns the data saved in the database.
     * @param {LavaboCreateManyAndReturnArgs} args - Arguments to create many Lavabos.
     * @example
     * // Create many Lavabos
     * const lavabo = await prisma.lavabo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lavabos and only return the `id`
     * const lavaboWithIdOnly = await prisma.lavabo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LavaboCreateManyAndReturnArgs>(args?: SelectSubset<T, LavaboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lavabo.
     * @param {LavaboDeleteArgs} args - Arguments to delete one Lavabo.
     * @example
     * // Delete one Lavabo
     * const Lavabo = await prisma.lavabo.delete({
     *   where: {
     *     // ... filter to delete one Lavabo
     *   }
     * })
     * 
     */
    delete<T extends LavaboDeleteArgs>(args: SelectSubset<T, LavaboDeleteArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lavabo.
     * @param {LavaboUpdateArgs} args - Arguments to update one Lavabo.
     * @example
     * // Update one Lavabo
     * const lavabo = await prisma.lavabo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LavaboUpdateArgs>(args: SelectSubset<T, LavaboUpdateArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lavabos.
     * @param {LavaboDeleteManyArgs} args - Arguments to filter Lavabos to delete.
     * @example
     * // Delete a few Lavabos
     * const { count } = await prisma.lavabo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LavaboDeleteManyArgs>(args?: SelectSubset<T, LavaboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lavabos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lavabos
     * const lavabo = await prisma.lavabo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LavaboUpdateManyArgs>(args: SelectSubset<T, LavaboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lavabos and returns the data updated in the database.
     * @param {LavaboUpdateManyAndReturnArgs} args - Arguments to update many Lavabos.
     * @example
     * // Update many Lavabos
     * const lavabo = await prisma.lavabo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lavabos and only return the `id`
     * const lavaboWithIdOnly = await prisma.lavabo.updateManyAndReturn({
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
    updateManyAndReturn<T extends LavaboUpdateManyAndReturnArgs>(args: SelectSubset<T, LavaboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lavabo.
     * @param {LavaboUpsertArgs} args - Arguments to update or create a Lavabo.
     * @example
     * // Update or create a Lavabo
     * const lavabo = await prisma.lavabo.upsert({
     *   create: {
     *     // ... data to create a Lavabo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lavabo we want to update
     *   }
     * })
     */
    upsert<T extends LavaboUpsertArgs>(args: SelectSubset<T, LavaboUpsertArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lavabos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboCountArgs} args - Arguments to filter Lavabos to count.
     * @example
     * // Count the number of Lavabos
     * const count = await prisma.lavabo.count({
     *   where: {
     *     // ... the filter for the Lavabos we want to count
     *   }
     * })
    **/
    count<T extends LavaboCountArgs>(
      args?: Subset<T, LavaboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LavaboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lavabo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LavaboAggregateArgs>(args: Subset<T, LavaboAggregateArgs>): Prisma.PrismaPromise<GetLavaboAggregateType<T>>

    /**
     * Group by Lavabo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LavaboGroupByArgs} args - Group by arguments.
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
      T extends LavaboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LavaboGroupByArgs['orderBy'] }
        : { orderBy?: LavaboGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LavaboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLavaboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lavabo model
   */
  readonly fields: LavaboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lavabo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LavaboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    frases<T extends Lavabo$frasesArgs<ExtArgs> = {}>(args?: Subset<T, Lavabo$frasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ressenyes<T extends Lavabo$ressenyesArgs<ExtArgs> = {}>(args?: Subset<T, Lavabo$ressenyesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lavabo model
   */
  interface LavaboFieldRefs {
    readonly id: FieldRef<"Lavabo", 'Int'>
    readonly edifici: FieldRef<"Lavabo", 'String'>
    readonly planta: FieldRef<"Lavabo", 'String'>
    readonly genere: FieldRef<"Lavabo", 'Genere'>
    readonly createdAt: FieldRef<"Lavabo", 'DateTime'>
    readonly updatedAt: FieldRef<"Lavabo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lavabo findUnique
   */
  export type LavaboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter, which Lavabo to fetch.
     */
    where: LavaboWhereUniqueInput
  }

  /**
   * Lavabo findUniqueOrThrow
   */
  export type LavaboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter, which Lavabo to fetch.
     */
    where: LavaboWhereUniqueInput
  }

  /**
   * Lavabo findFirst
   */
  export type LavaboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter, which Lavabo to fetch.
     */
    where?: LavaboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lavabos to fetch.
     */
    orderBy?: LavaboOrderByWithRelationInput | LavaboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lavabos.
     */
    cursor?: LavaboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lavabos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lavabos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lavabos.
     */
    distinct?: LavaboScalarFieldEnum | LavaboScalarFieldEnum[]
  }

  /**
   * Lavabo findFirstOrThrow
   */
  export type LavaboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter, which Lavabo to fetch.
     */
    where?: LavaboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lavabos to fetch.
     */
    orderBy?: LavaboOrderByWithRelationInput | LavaboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lavabos.
     */
    cursor?: LavaboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lavabos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lavabos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lavabos.
     */
    distinct?: LavaboScalarFieldEnum | LavaboScalarFieldEnum[]
  }

  /**
   * Lavabo findMany
   */
  export type LavaboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter, which Lavabos to fetch.
     */
    where?: LavaboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lavabos to fetch.
     */
    orderBy?: LavaboOrderByWithRelationInput | LavaboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lavabos.
     */
    cursor?: LavaboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lavabos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lavabos.
     */
    skip?: number
    distinct?: LavaboScalarFieldEnum | LavaboScalarFieldEnum[]
  }

  /**
   * Lavabo create
   */
  export type LavaboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * The data needed to create a Lavabo.
     */
    data: XOR<LavaboCreateInput, LavaboUncheckedCreateInput>
  }

  /**
   * Lavabo createMany
   */
  export type LavaboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lavabos.
     */
    data: LavaboCreateManyInput | LavaboCreateManyInput[]
  }

  /**
   * Lavabo createManyAndReturn
   */
  export type LavaboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * The data used to create many Lavabos.
     */
    data: LavaboCreateManyInput | LavaboCreateManyInput[]
  }

  /**
   * Lavabo update
   */
  export type LavaboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * The data needed to update a Lavabo.
     */
    data: XOR<LavaboUpdateInput, LavaboUncheckedUpdateInput>
    /**
     * Choose, which Lavabo to update.
     */
    where: LavaboWhereUniqueInput
  }

  /**
   * Lavabo updateMany
   */
  export type LavaboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lavabos.
     */
    data: XOR<LavaboUpdateManyMutationInput, LavaboUncheckedUpdateManyInput>
    /**
     * Filter which Lavabos to update
     */
    where?: LavaboWhereInput
    /**
     * Limit how many Lavabos to update.
     */
    limit?: number
  }

  /**
   * Lavabo updateManyAndReturn
   */
  export type LavaboUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * The data used to update Lavabos.
     */
    data: XOR<LavaboUpdateManyMutationInput, LavaboUncheckedUpdateManyInput>
    /**
     * Filter which Lavabos to update
     */
    where?: LavaboWhereInput
    /**
     * Limit how many Lavabos to update.
     */
    limit?: number
  }

  /**
   * Lavabo upsert
   */
  export type LavaboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * The filter to search for the Lavabo to update in case it exists.
     */
    where: LavaboWhereUniqueInput
    /**
     * In case the Lavabo found by the `where` argument doesn't exist, create a new Lavabo with this data.
     */
    create: XOR<LavaboCreateInput, LavaboUncheckedCreateInput>
    /**
     * In case the Lavabo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LavaboUpdateInput, LavaboUncheckedUpdateInput>
  }

  /**
   * Lavabo delete
   */
  export type LavaboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
    /**
     * Filter which Lavabo to delete.
     */
    where: LavaboWhereUniqueInput
  }

  /**
   * Lavabo deleteMany
   */
  export type LavaboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lavabos to delete
     */
    where?: LavaboWhereInput
    /**
     * Limit how many Lavabos to delete.
     */
    limit?: number
  }

  /**
   * Lavabo.frases
   */
  export type Lavabo$frasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    where?: FraseWhereInput
    orderBy?: FraseOrderByWithRelationInput | FraseOrderByWithRelationInput[]
    cursor?: FraseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FraseScalarFieldEnum | FraseScalarFieldEnum[]
  }

  /**
   * Lavabo.ressenyes
   */
  export type Lavabo$ressenyesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    where?: RessenyaWhereInput
    orderBy?: RessenyaOrderByWithRelationInput | RessenyaOrderByWithRelationInput[]
    cursor?: RessenyaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessenyaScalarFieldEnum | RessenyaScalarFieldEnum[]
  }

  /**
   * Lavabo without action
   */
  export type LavaboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lavabo
     */
    select?: LavaboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lavabo
     */
    omit?: LavaboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LavaboInclude<ExtArgs> | null
  }


  /**
   * Model Frase
   */

  export type AggregateFrase = {
    _count: FraseCountAggregateOutputType | null
    _avg: FraseAvgAggregateOutputType | null
    _sum: FraseSumAggregateOutputType | null
    _min: FraseMinAggregateOutputType | null
    _max: FraseMaxAggregateOutputType | null
  }

  export type FraseAvgAggregateOutputType = {
    id: number | null
    any: number | null
    resposta: number | null
    lavaboId: number | null
  }

  export type FraseSumAggregateOutputType = {
    id: number | null
    any: number | null
    resposta: number | null
    lavaboId: number | null
  }

  export type FraseMinAggregateOutputType = {
    id: number | null
    contingut: string | null
    idioma: $Enums.Idioma | null
    any: number | null
    resposta: number | null
    fitxerImg: string | null
    lavaboId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FraseMaxAggregateOutputType = {
    id: number | null
    contingut: string | null
    idioma: $Enums.Idioma | null
    any: number | null
    resposta: number | null
    fitxerImg: string | null
    lavaboId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FraseCountAggregateOutputType = {
    id: number
    contingut: number
    idioma: number
    any: number
    resposta: number
    fitxerImg: number
    lavaboId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FraseAvgAggregateInputType = {
    id?: true
    any?: true
    resposta?: true
    lavaboId?: true
  }

  export type FraseSumAggregateInputType = {
    id?: true
    any?: true
    resposta?: true
    lavaboId?: true
  }

  export type FraseMinAggregateInputType = {
    id?: true
    contingut?: true
    idioma?: true
    any?: true
    resposta?: true
    fitxerImg?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FraseMaxAggregateInputType = {
    id?: true
    contingut?: true
    idioma?: true
    any?: true
    resposta?: true
    fitxerImg?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FraseCountAggregateInputType = {
    id?: true
    contingut?: true
    idioma?: true
    any?: true
    resposta?: true
    fitxerImg?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FraseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frase to aggregate.
     */
    where?: FraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frases to fetch.
     */
    orderBy?: FraseOrderByWithRelationInput | FraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frases
    **/
    _count?: true | FraseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FraseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FraseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FraseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FraseMaxAggregateInputType
  }

  export type GetFraseAggregateType<T extends FraseAggregateArgs> = {
        [P in keyof T & keyof AggregateFrase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrase[P]>
      : GetScalarType<T[P], AggregateFrase[P]>
  }




  export type FraseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FraseWhereInput
    orderBy?: FraseOrderByWithAggregationInput | FraseOrderByWithAggregationInput[]
    by: FraseScalarFieldEnum[] | FraseScalarFieldEnum
    having?: FraseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FraseCountAggregateInputType | true
    _avg?: FraseAvgAggregateInputType
    _sum?: FraseSumAggregateInputType
    _min?: FraseMinAggregateInputType
    _max?: FraseMaxAggregateInputType
  }

  export type FraseGroupByOutputType = {
    id: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta: number | null
    fitxerImg: string | null
    lavaboId: number
    createdAt: Date
    updatedAt: Date
    _count: FraseCountAggregateOutputType | null
    _avg: FraseAvgAggregateOutputType | null
    _sum: FraseSumAggregateOutputType | null
    _min: FraseMinAggregateOutputType | null
    _max: FraseMaxAggregateOutputType | null
  }

  type GetFraseGroupByPayload<T extends FraseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FraseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FraseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FraseGroupByOutputType[P]>
            : GetScalarType<T[P], FraseGroupByOutputType[P]>
        }
      >
    >


  export type FraseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    idioma?: boolean
    any?: boolean
    resposta?: boolean
    fitxerImg?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
    comentaris?: boolean | Frase$comentarisArgs<ExtArgs>
    _count?: boolean | FraseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frase"]>

  export type FraseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    idioma?: boolean
    any?: boolean
    resposta?: boolean
    fitxerImg?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frase"]>

  export type FraseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    idioma?: boolean
    any?: boolean
    resposta?: boolean
    fitxerImg?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frase"]>

  export type FraseSelectScalar = {
    id?: boolean
    contingut?: boolean
    idioma?: boolean
    any?: boolean
    resposta?: boolean
    fitxerImg?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FraseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contingut" | "idioma" | "any" | "resposta" | "fitxerImg" | "lavaboId" | "createdAt" | "updatedAt", ExtArgs["result"]["frase"]>
  export type FraseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
    comentaris?: boolean | Frase$comentarisArgs<ExtArgs>
    _count?: boolean | FraseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FraseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }
  export type FraseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }

  export type $FrasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frase"
    objects: {
      lavabo: Prisma.$LavaboPayload<ExtArgs>
      comentaris: Prisma.$ComentariPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contingut: string
      idioma: $Enums.Idioma
      any: number
      resposta: number | null
      fitxerImg: string | null
      lavaboId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["frase"]>
    composites: {}
  }

  type FraseGetPayload<S extends boolean | null | undefined | FraseDefaultArgs> = $Result.GetResult<Prisma.$FrasePayload, S>

  type FraseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FraseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FraseCountAggregateInputType | true
    }

  export interface FraseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frase'], meta: { name: 'Frase' } }
    /**
     * Find zero or one Frase that matches the filter.
     * @param {FraseFindUniqueArgs} args - Arguments to find a Frase
     * @example
     * // Get one Frase
     * const frase = await prisma.frase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FraseFindUniqueArgs>(args: SelectSubset<T, FraseFindUniqueArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FraseFindUniqueOrThrowArgs} args - Arguments to find a Frase
     * @example
     * // Get one Frase
     * const frase = await prisma.frase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FraseFindUniqueOrThrowArgs>(args: SelectSubset<T, FraseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseFindFirstArgs} args - Arguments to find a Frase
     * @example
     * // Get one Frase
     * const frase = await prisma.frase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FraseFindFirstArgs>(args?: SelectSubset<T, FraseFindFirstArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseFindFirstOrThrowArgs} args - Arguments to find a Frase
     * @example
     * // Get one Frase
     * const frase = await prisma.frase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FraseFindFirstOrThrowArgs>(args?: SelectSubset<T, FraseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frases
     * const frases = await prisma.frase.findMany()
     * 
     * // Get first 10 Frases
     * const frases = await prisma.frase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fraseWithIdOnly = await prisma.frase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FraseFindManyArgs>(args?: SelectSubset<T, FraseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frase.
     * @param {FraseCreateArgs} args - Arguments to create a Frase.
     * @example
     * // Create one Frase
     * const Frase = await prisma.frase.create({
     *   data: {
     *     // ... data to create a Frase
     *   }
     * })
     * 
     */
    create<T extends FraseCreateArgs>(args: SelectSubset<T, FraseCreateArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frases.
     * @param {FraseCreateManyArgs} args - Arguments to create many Frases.
     * @example
     * // Create many Frases
     * const frase = await prisma.frase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FraseCreateManyArgs>(args?: SelectSubset<T, FraseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frases and returns the data saved in the database.
     * @param {FraseCreateManyAndReturnArgs} args - Arguments to create many Frases.
     * @example
     * // Create many Frases
     * const frase = await prisma.frase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frases and only return the `id`
     * const fraseWithIdOnly = await prisma.frase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FraseCreateManyAndReturnArgs>(args?: SelectSubset<T, FraseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Frase.
     * @param {FraseDeleteArgs} args - Arguments to delete one Frase.
     * @example
     * // Delete one Frase
     * const Frase = await prisma.frase.delete({
     *   where: {
     *     // ... filter to delete one Frase
     *   }
     * })
     * 
     */
    delete<T extends FraseDeleteArgs>(args: SelectSubset<T, FraseDeleteArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frase.
     * @param {FraseUpdateArgs} args - Arguments to update one Frase.
     * @example
     * // Update one Frase
     * const frase = await prisma.frase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FraseUpdateArgs>(args: SelectSubset<T, FraseUpdateArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frases.
     * @param {FraseDeleteManyArgs} args - Arguments to filter Frases to delete.
     * @example
     * // Delete a few Frases
     * const { count } = await prisma.frase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FraseDeleteManyArgs>(args?: SelectSubset<T, FraseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frases
     * const frase = await prisma.frase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FraseUpdateManyArgs>(args: SelectSubset<T, FraseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frases and returns the data updated in the database.
     * @param {FraseUpdateManyAndReturnArgs} args - Arguments to update many Frases.
     * @example
     * // Update many Frases
     * const frase = await prisma.frase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Frases and only return the `id`
     * const fraseWithIdOnly = await prisma.frase.updateManyAndReturn({
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
    updateManyAndReturn<T extends FraseUpdateManyAndReturnArgs>(args: SelectSubset<T, FraseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Frase.
     * @param {FraseUpsertArgs} args - Arguments to update or create a Frase.
     * @example
     * // Update or create a Frase
     * const frase = await prisma.frase.upsert({
     *   create: {
     *     // ... data to create a Frase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frase we want to update
     *   }
     * })
     */
    upsert<T extends FraseUpsertArgs>(args: SelectSubset<T, FraseUpsertArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseCountArgs} args - Arguments to filter Frases to count.
     * @example
     * // Count the number of Frases
     * const count = await prisma.frase.count({
     *   where: {
     *     // ... the filter for the Frases we want to count
     *   }
     * })
    **/
    count<T extends FraseCountArgs>(
      args?: Subset<T, FraseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FraseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FraseAggregateArgs>(args: Subset<T, FraseAggregateArgs>): Prisma.PrismaPromise<GetFraseAggregateType<T>>

    /**
     * Group by Frase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraseGroupByArgs} args - Group by arguments.
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
      T extends FraseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FraseGroupByArgs['orderBy'] }
        : { orderBy?: FraseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FraseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFraseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frase model
   */
  readonly fields: FraseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FraseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lavabo<T extends LavaboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LavaboDefaultArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentaris<T extends Frase$comentarisArgs<ExtArgs> = {}>(args?: Subset<T, Frase$comentarisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Frase model
   */
  interface FraseFieldRefs {
    readonly id: FieldRef<"Frase", 'Int'>
    readonly contingut: FieldRef<"Frase", 'String'>
    readonly idioma: FieldRef<"Frase", 'Idioma'>
    readonly any: FieldRef<"Frase", 'Int'>
    readonly resposta: FieldRef<"Frase", 'Int'>
    readonly fitxerImg: FieldRef<"Frase", 'String'>
    readonly lavaboId: FieldRef<"Frase", 'Int'>
    readonly createdAt: FieldRef<"Frase", 'DateTime'>
    readonly updatedAt: FieldRef<"Frase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Frase findUnique
   */
  export type FraseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter, which Frase to fetch.
     */
    where: FraseWhereUniqueInput
  }

  /**
   * Frase findUniqueOrThrow
   */
  export type FraseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter, which Frase to fetch.
     */
    where: FraseWhereUniqueInput
  }

  /**
   * Frase findFirst
   */
  export type FraseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter, which Frase to fetch.
     */
    where?: FraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frases to fetch.
     */
    orderBy?: FraseOrderByWithRelationInput | FraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frases.
     */
    cursor?: FraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frases.
     */
    distinct?: FraseScalarFieldEnum | FraseScalarFieldEnum[]
  }

  /**
   * Frase findFirstOrThrow
   */
  export type FraseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter, which Frase to fetch.
     */
    where?: FraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frases to fetch.
     */
    orderBy?: FraseOrderByWithRelationInput | FraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frases.
     */
    cursor?: FraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frases.
     */
    distinct?: FraseScalarFieldEnum | FraseScalarFieldEnum[]
  }

  /**
   * Frase findMany
   */
  export type FraseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter, which Frases to fetch.
     */
    where?: FraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frases to fetch.
     */
    orderBy?: FraseOrderByWithRelationInput | FraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frases.
     */
    cursor?: FraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frases.
     */
    skip?: number
    distinct?: FraseScalarFieldEnum | FraseScalarFieldEnum[]
  }

  /**
   * Frase create
   */
  export type FraseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * The data needed to create a Frase.
     */
    data: XOR<FraseCreateInput, FraseUncheckedCreateInput>
  }

  /**
   * Frase createMany
   */
  export type FraseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frases.
     */
    data: FraseCreateManyInput | FraseCreateManyInput[]
  }

  /**
   * Frase createManyAndReturn
   */
  export type FraseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * The data used to create many Frases.
     */
    data: FraseCreateManyInput | FraseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frase update
   */
  export type FraseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * The data needed to update a Frase.
     */
    data: XOR<FraseUpdateInput, FraseUncheckedUpdateInput>
    /**
     * Choose, which Frase to update.
     */
    where: FraseWhereUniqueInput
  }

  /**
   * Frase updateMany
   */
  export type FraseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frases.
     */
    data: XOR<FraseUpdateManyMutationInput, FraseUncheckedUpdateManyInput>
    /**
     * Filter which Frases to update
     */
    where?: FraseWhereInput
    /**
     * Limit how many Frases to update.
     */
    limit?: number
  }

  /**
   * Frase updateManyAndReturn
   */
  export type FraseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * The data used to update Frases.
     */
    data: XOR<FraseUpdateManyMutationInput, FraseUncheckedUpdateManyInput>
    /**
     * Filter which Frases to update
     */
    where?: FraseWhereInput
    /**
     * Limit how many Frases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Frase upsert
   */
  export type FraseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * The filter to search for the Frase to update in case it exists.
     */
    where: FraseWhereUniqueInput
    /**
     * In case the Frase found by the `where` argument doesn't exist, create a new Frase with this data.
     */
    create: XOR<FraseCreateInput, FraseUncheckedCreateInput>
    /**
     * In case the Frase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FraseUpdateInput, FraseUncheckedUpdateInput>
  }

  /**
   * Frase delete
   */
  export type FraseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
    /**
     * Filter which Frase to delete.
     */
    where: FraseWhereUniqueInput
  }

  /**
   * Frase deleteMany
   */
  export type FraseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frases to delete
     */
    where?: FraseWhereInput
    /**
     * Limit how many Frases to delete.
     */
    limit?: number
  }

  /**
   * Frase.comentaris
   */
  export type Frase$comentarisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    where?: ComentariWhereInput
    orderBy?: ComentariOrderByWithRelationInput | ComentariOrderByWithRelationInput[]
    cursor?: ComentariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentariScalarFieldEnum | ComentariScalarFieldEnum[]
  }

  /**
   * Frase without action
   */
  export type FraseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frase
     */
    select?: FraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frase
     */
    omit?: FraseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FraseInclude<ExtArgs> | null
  }


  /**
   * Model Comentari
   */

  export type AggregateComentari = {
    _count: ComentariCountAggregateOutputType | null
    _avg: ComentariAvgAggregateOutputType | null
    _sum: ComentariSumAggregateOutputType | null
    _min: ComentariMinAggregateOutputType | null
    _max: ComentariMaxAggregateOutputType | null
  }

  export type ComentariAvgAggregateOutputType = {
    id: number | null
    fraseId: number | null
    resposta: number | null
  }

  export type ComentariSumAggregateOutputType = {
    id: number | null
    fraseId: number | null
    resposta: number | null
  }

  export type ComentariMinAggregateOutputType = {
    id: number | null
    contingut: string | null
    fraseId: number | null
    data: Date | null
    autor: string | null
    resposta: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComentariMaxAggregateOutputType = {
    id: number | null
    contingut: string | null
    fraseId: number | null
    data: Date | null
    autor: string | null
    resposta: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComentariCountAggregateOutputType = {
    id: number
    contingut: number
    fraseId: number
    data: number
    autor: number
    resposta: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComentariAvgAggregateInputType = {
    id?: true
    fraseId?: true
    resposta?: true
  }

  export type ComentariSumAggregateInputType = {
    id?: true
    fraseId?: true
    resposta?: true
  }

  export type ComentariMinAggregateInputType = {
    id?: true
    contingut?: true
    fraseId?: true
    data?: true
    autor?: true
    resposta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComentariMaxAggregateInputType = {
    id?: true
    contingut?: true
    fraseId?: true
    data?: true
    autor?: true
    resposta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComentariCountAggregateInputType = {
    id?: true
    contingut?: true
    fraseId?: true
    data?: true
    autor?: true
    resposta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComentariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentari to aggregate.
     */
    where?: ComentariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentaris to fetch.
     */
    orderBy?: ComentariOrderByWithRelationInput | ComentariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentaris
    **/
    _count?: true | ComentariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentariAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentariSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentariMaxAggregateInputType
  }

  export type GetComentariAggregateType<T extends ComentariAggregateArgs> = {
        [P in keyof T & keyof AggregateComentari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentari[P]>
      : GetScalarType<T[P], AggregateComentari[P]>
  }




  export type ComentariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentariWhereInput
    orderBy?: ComentariOrderByWithAggregationInput | ComentariOrderByWithAggregationInput[]
    by: ComentariScalarFieldEnum[] | ComentariScalarFieldEnum
    having?: ComentariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentariCountAggregateInputType | true
    _avg?: ComentariAvgAggregateInputType
    _sum?: ComentariSumAggregateInputType
    _min?: ComentariMinAggregateInputType
    _max?: ComentariMaxAggregateInputType
  }

  export type ComentariGroupByOutputType = {
    id: number
    contingut: string
    fraseId: number
    data: Date
    autor: string | null
    resposta: number | null
    createdAt: Date
    updatedAt: Date
    _count: ComentariCountAggregateOutputType | null
    _avg: ComentariAvgAggregateOutputType | null
    _sum: ComentariSumAggregateOutputType | null
    _min: ComentariMinAggregateOutputType | null
    _max: ComentariMaxAggregateOutputType | null
  }

  type GetComentariGroupByPayload<T extends ComentariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentariGroupByOutputType[P]>
            : GetScalarType<T[P], ComentariGroupByOutputType[P]>
        }
      >
    >


  export type ComentariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    fraseId?: boolean
    data?: boolean
    autor?: boolean
    resposta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentari"]>

  export type ComentariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    fraseId?: boolean
    data?: boolean
    autor?: boolean
    resposta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentari"]>

  export type ComentariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contingut?: boolean
    fraseId?: boolean
    data?: boolean
    autor?: boolean
    resposta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentari"]>

  export type ComentariSelectScalar = {
    id?: boolean
    contingut?: boolean
    fraseId?: boolean
    data?: boolean
    autor?: boolean
    resposta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComentariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contingut" | "fraseId" | "data" | "autor" | "resposta" | "createdAt" | "updatedAt", ExtArgs["result"]["comentari"]>
  export type ComentariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }
  export type ComentariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }
  export type ComentariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    frase?: boolean | FraseDefaultArgs<ExtArgs>
  }

  export type $ComentariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentari"
    objects: {
      frase: Prisma.$FrasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contingut: string
      fraseId: number
      data: Date
      autor: string | null
      resposta: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comentari"]>
    composites: {}
  }

  type ComentariGetPayload<S extends boolean | null | undefined | ComentariDefaultArgs> = $Result.GetResult<Prisma.$ComentariPayload, S>

  type ComentariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentariCountAggregateInputType | true
    }

  export interface ComentariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentari'], meta: { name: 'Comentari' } }
    /**
     * Find zero or one Comentari that matches the filter.
     * @param {ComentariFindUniqueArgs} args - Arguments to find a Comentari
     * @example
     * // Get one Comentari
     * const comentari = await prisma.comentari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentariFindUniqueArgs>(args: SelectSubset<T, ComentariFindUniqueArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentariFindUniqueOrThrowArgs} args - Arguments to find a Comentari
     * @example
     * // Get one Comentari
     * const comentari = await prisma.comentari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentariFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariFindFirstArgs} args - Arguments to find a Comentari
     * @example
     * // Get one Comentari
     * const comentari = await prisma.comentari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentariFindFirstArgs>(args?: SelectSubset<T, ComentariFindFirstArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariFindFirstOrThrowArgs} args - Arguments to find a Comentari
     * @example
     * // Get one Comentari
     * const comentari = await prisma.comentari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentariFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentariFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentaris
     * const comentaris = await prisma.comentari.findMany()
     * 
     * // Get first 10 Comentaris
     * const comentaris = await prisma.comentari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentariWithIdOnly = await prisma.comentari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentariFindManyArgs>(args?: SelectSubset<T, ComentariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentari.
     * @param {ComentariCreateArgs} args - Arguments to create a Comentari.
     * @example
     * // Create one Comentari
     * const Comentari = await prisma.comentari.create({
     *   data: {
     *     // ... data to create a Comentari
     *   }
     * })
     * 
     */
    create<T extends ComentariCreateArgs>(args: SelectSubset<T, ComentariCreateArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentaris.
     * @param {ComentariCreateManyArgs} args - Arguments to create many Comentaris.
     * @example
     * // Create many Comentaris
     * const comentari = await prisma.comentari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentariCreateManyArgs>(args?: SelectSubset<T, ComentariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentaris and returns the data saved in the database.
     * @param {ComentariCreateManyAndReturnArgs} args - Arguments to create many Comentaris.
     * @example
     * // Create many Comentaris
     * const comentari = await prisma.comentari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentaris and only return the `id`
     * const comentariWithIdOnly = await prisma.comentari.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentariCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentari.
     * @param {ComentariDeleteArgs} args - Arguments to delete one Comentari.
     * @example
     * // Delete one Comentari
     * const Comentari = await prisma.comentari.delete({
     *   where: {
     *     // ... filter to delete one Comentari
     *   }
     * })
     * 
     */
    delete<T extends ComentariDeleteArgs>(args: SelectSubset<T, ComentariDeleteArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentari.
     * @param {ComentariUpdateArgs} args - Arguments to update one Comentari.
     * @example
     * // Update one Comentari
     * const comentari = await prisma.comentari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentariUpdateArgs>(args: SelectSubset<T, ComentariUpdateArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentaris.
     * @param {ComentariDeleteManyArgs} args - Arguments to filter Comentaris to delete.
     * @example
     * // Delete a few Comentaris
     * const { count } = await prisma.comentari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentariDeleteManyArgs>(args?: SelectSubset<T, ComentariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentaris
     * const comentari = await prisma.comentari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentariUpdateManyArgs>(args: SelectSubset<T, ComentariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentaris and returns the data updated in the database.
     * @param {ComentariUpdateManyAndReturnArgs} args - Arguments to update many Comentaris.
     * @example
     * // Update many Comentaris
     * const comentari = await prisma.comentari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentaris and only return the `id`
     * const comentariWithIdOnly = await prisma.comentari.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComentariUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentari.
     * @param {ComentariUpsertArgs} args - Arguments to update or create a Comentari.
     * @example
     * // Update or create a Comentari
     * const comentari = await prisma.comentari.upsert({
     *   create: {
     *     // ... data to create a Comentari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentari we want to update
     *   }
     * })
     */
    upsert<T extends ComentariUpsertArgs>(args: SelectSubset<T, ComentariUpsertArgs<ExtArgs>>): Prisma__ComentariClient<$Result.GetResult<Prisma.$ComentariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariCountArgs} args - Arguments to filter Comentaris to count.
     * @example
     * // Count the number of Comentaris
     * const count = await prisma.comentari.count({
     *   where: {
     *     // ... the filter for the Comentaris we want to count
     *   }
     * })
    **/
    count<T extends ComentariCountArgs>(
      args?: Subset<T, ComentariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentariAggregateArgs>(args: Subset<T, ComentariAggregateArgs>): Prisma.PrismaPromise<GetComentariAggregateType<T>>

    /**
     * Group by Comentari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariGroupByArgs} args - Group by arguments.
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
      T extends ComentariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentariGroupByArgs['orderBy'] }
        : { orderBy?: ComentariGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentari model
   */
  readonly fields: ComentariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    frase<T extends FraseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FraseDefaultArgs<ExtArgs>>): Prisma__FraseClient<$Result.GetResult<Prisma.$FrasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comentari model
   */
  interface ComentariFieldRefs {
    readonly id: FieldRef<"Comentari", 'Int'>
    readonly contingut: FieldRef<"Comentari", 'String'>
    readonly fraseId: FieldRef<"Comentari", 'Int'>
    readonly data: FieldRef<"Comentari", 'DateTime'>
    readonly autor: FieldRef<"Comentari", 'String'>
    readonly resposta: FieldRef<"Comentari", 'Int'>
    readonly createdAt: FieldRef<"Comentari", 'DateTime'>
    readonly updatedAt: FieldRef<"Comentari", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentari findUnique
   */
  export type ComentariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter, which Comentari to fetch.
     */
    where: ComentariWhereUniqueInput
  }

  /**
   * Comentari findUniqueOrThrow
   */
  export type ComentariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter, which Comentari to fetch.
     */
    where: ComentariWhereUniqueInput
  }

  /**
   * Comentari findFirst
   */
  export type ComentariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter, which Comentari to fetch.
     */
    where?: ComentariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentaris to fetch.
     */
    orderBy?: ComentariOrderByWithRelationInput | ComentariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentaris.
     */
    cursor?: ComentariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentaris.
     */
    distinct?: ComentariScalarFieldEnum | ComentariScalarFieldEnum[]
  }

  /**
   * Comentari findFirstOrThrow
   */
  export type ComentariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter, which Comentari to fetch.
     */
    where?: ComentariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentaris to fetch.
     */
    orderBy?: ComentariOrderByWithRelationInput | ComentariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentaris.
     */
    cursor?: ComentariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentaris.
     */
    distinct?: ComentariScalarFieldEnum | ComentariScalarFieldEnum[]
  }

  /**
   * Comentari findMany
   */
  export type ComentariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter, which Comentaris to fetch.
     */
    where?: ComentariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentaris to fetch.
     */
    orderBy?: ComentariOrderByWithRelationInput | ComentariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentaris.
     */
    cursor?: ComentariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentaris.
     */
    skip?: number
    distinct?: ComentariScalarFieldEnum | ComentariScalarFieldEnum[]
  }

  /**
   * Comentari create
   */
  export type ComentariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentari.
     */
    data: XOR<ComentariCreateInput, ComentariUncheckedCreateInput>
  }

  /**
   * Comentari createMany
   */
  export type ComentariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentaris.
     */
    data: ComentariCreateManyInput | ComentariCreateManyInput[]
  }

  /**
   * Comentari createManyAndReturn
   */
  export type ComentariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * The data used to create many Comentaris.
     */
    data: ComentariCreateManyInput | ComentariCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentari update
   */
  export type ComentariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentari.
     */
    data: XOR<ComentariUpdateInput, ComentariUncheckedUpdateInput>
    /**
     * Choose, which Comentari to update.
     */
    where: ComentariWhereUniqueInput
  }

  /**
   * Comentari updateMany
   */
  export type ComentariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentaris.
     */
    data: XOR<ComentariUpdateManyMutationInput, ComentariUncheckedUpdateManyInput>
    /**
     * Filter which Comentaris to update
     */
    where?: ComentariWhereInput
    /**
     * Limit how many Comentaris to update.
     */
    limit?: number
  }

  /**
   * Comentari updateManyAndReturn
   */
  export type ComentariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * The data used to update Comentaris.
     */
    data: XOR<ComentariUpdateManyMutationInput, ComentariUncheckedUpdateManyInput>
    /**
     * Filter which Comentaris to update
     */
    where?: ComentariWhereInput
    /**
     * Limit how many Comentaris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentari upsert
   */
  export type ComentariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentari to update in case it exists.
     */
    where: ComentariWhereUniqueInput
    /**
     * In case the Comentari found by the `where` argument doesn't exist, create a new Comentari with this data.
     */
    create: XOR<ComentariCreateInput, ComentariUncheckedCreateInput>
    /**
     * In case the Comentari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentariUpdateInput, ComentariUncheckedUpdateInput>
  }

  /**
   * Comentari delete
   */
  export type ComentariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
    /**
     * Filter which Comentari to delete.
     */
    where: ComentariWhereUniqueInput
  }

  /**
   * Comentari deleteMany
   */
  export type ComentariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentaris to delete
     */
    where?: ComentariWhereInput
    /**
     * Limit how many Comentaris to delete.
     */
    limit?: number
  }

  /**
   * Comentari without action
   */
  export type ComentariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentari
     */
    select?: ComentariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentari
     */
    omit?: ComentariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariInclude<ExtArgs> | null
  }


  /**
   * Model Ressenya
   */

  export type AggregateRessenya = {
    _count: RessenyaCountAggregateOutputType | null
    _avg: RessenyaAvgAggregateOutputType | null
    _sum: RessenyaSumAggregateOutputType | null
    _min: RessenyaMinAggregateOutputType | null
    _max: RessenyaMaxAggregateOutputType | null
  }

  export type RessenyaAvgAggregateOutputType = {
    id: number | null
    puntuacio: number | null
    lavaboId: number | null
  }

  export type RessenyaSumAggregateOutputType = {
    id: number | null
    puntuacio: number | null
    lavaboId: number | null
  }

  export type RessenyaMinAggregateOutputType = {
    id: number | null
    autor: string | null
    contingut: string | null
    puntuacio: number | null
    data: Date | null
    lavaboId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RessenyaMaxAggregateOutputType = {
    id: number | null
    autor: string | null
    contingut: string | null
    puntuacio: number | null
    data: Date | null
    lavaboId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RessenyaCountAggregateOutputType = {
    id: number
    autor: number
    contingut: number
    puntuacio: number
    data: number
    lavaboId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RessenyaAvgAggregateInputType = {
    id?: true
    puntuacio?: true
    lavaboId?: true
  }

  export type RessenyaSumAggregateInputType = {
    id?: true
    puntuacio?: true
    lavaboId?: true
  }

  export type RessenyaMinAggregateInputType = {
    id?: true
    autor?: true
    contingut?: true
    puntuacio?: true
    data?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RessenyaMaxAggregateInputType = {
    id?: true
    autor?: true
    contingut?: true
    puntuacio?: true
    data?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RessenyaCountAggregateInputType = {
    id?: true
    autor?: true
    contingut?: true
    puntuacio?: true
    data?: true
    lavaboId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RessenyaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressenya to aggregate.
     */
    where?: RessenyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressenyas to fetch.
     */
    orderBy?: RessenyaOrderByWithRelationInput | RessenyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RessenyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressenyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressenyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ressenyas
    **/
    _count?: true | RessenyaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RessenyaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RessenyaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessenyaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessenyaMaxAggregateInputType
  }

  export type GetRessenyaAggregateType<T extends RessenyaAggregateArgs> = {
        [P in keyof T & keyof AggregateRessenya]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessenya[P]>
      : GetScalarType<T[P], AggregateRessenya[P]>
  }




  export type RessenyaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessenyaWhereInput
    orderBy?: RessenyaOrderByWithAggregationInput | RessenyaOrderByWithAggregationInput[]
    by: RessenyaScalarFieldEnum[] | RessenyaScalarFieldEnum
    having?: RessenyaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessenyaCountAggregateInputType | true
    _avg?: RessenyaAvgAggregateInputType
    _sum?: RessenyaSumAggregateInputType
    _min?: RessenyaMinAggregateInputType
    _max?: RessenyaMaxAggregateInputType
  }

  export type RessenyaGroupByOutputType = {
    id: number
    autor: string | null
    contingut: string
    puntuacio: number
    data: Date
    lavaboId: number
    createdAt: Date
    updatedAt: Date
    _count: RessenyaCountAggregateOutputType | null
    _avg: RessenyaAvgAggregateOutputType | null
    _sum: RessenyaSumAggregateOutputType | null
    _min: RessenyaMinAggregateOutputType | null
    _max: RessenyaMaxAggregateOutputType | null
  }

  type GetRessenyaGroupByPayload<T extends RessenyaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessenyaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessenyaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessenyaGroupByOutputType[P]>
            : GetScalarType<T[P], RessenyaGroupByOutputType[P]>
        }
      >
    >


  export type RessenyaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autor?: boolean
    contingut?: boolean
    puntuacio?: boolean
    data?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressenya"]>

  export type RessenyaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autor?: boolean
    contingut?: boolean
    puntuacio?: boolean
    data?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressenya"]>

  export type RessenyaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autor?: boolean
    contingut?: boolean
    puntuacio?: boolean
    data?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ressenya"]>

  export type RessenyaSelectScalar = {
    id?: boolean
    autor?: boolean
    contingut?: boolean
    puntuacio?: boolean
    data?: boolean
    lavaboId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RessenyaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autor" | "contingut" | "puntuacio" | "data" | "lavaboId" | "createdAt" | "updatedAt", ExtArgs["result"]["ressenya"]>
  export type RessenyaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }
  export type RessenyaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }
  export type RessenyaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lavabo?: boolean | LavaboDefaultArgs<ExtArgs>
  }

  export type $RessenyaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ressenya"
    objects: {
      lavabo: Prisma.$LavaboPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      autor: string | null
      contingut: string
      puntuacio: number
      data: Date
      lavaboId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ressenya"]>
    composites: {}
  }

  type RessenyaGetPayload<S extends boolean | null | undefined | RessenyaDefaultArgs> = $Result.GetResult<Prisma.$RessenyaPayload, S>

  type RessenyaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RessenyaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessenyaCountAggregateInputType | true
    }

  export interface RessenyaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ressenya'], meta: { name: 'Ressenya' } }
    /**
     * Find zero or one Ressenya that matches the filter.
     * @param {RessenyaFindUniqueArgs} args - Arguments to find a Ressenya
     * @example
     * // Get one Ressenya
     * const ressenya = await prisma.ressenya.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RessenyaFindUniqueArgs>(args: SelectSubset<T, RessenyaFindUniqueArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ressenya that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RessenyaFindUniqueOrThrowArgs} args - Arguments to find a Ressenya
     * @example
     * // Get one Ressenya
     * const ressenya = await prisma.ressenya.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RessenyaFindUniqueOrThrowArgs>(args: SelectSubset<T, RessenyaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressenya that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaFindFirstArgs} args - Arguments to find a Ressenya
     * @example
     * // Get one Ressenya
     * const ressenya = await prisma.ressenya.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RessenyaFindFirstArgs>(args?: SelectSubset<T, RessenyaFindFirstArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressenya that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaFindFirstOrThrowArgs} args - Arguments to find a Ressenya
     * @example
     * // Get one Ressenya
     * const ressenya = await prisma.ressenya.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RessenyaFindFirstOrThrowArgs>(args?: SelectSubset<T, RessenyaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressenyas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressenyas
     * const ressenyas = await prisma.ressenya.findMany()
     * 
     * // Get first 10 Ressenyas
     * const ressenyas = await prisma.ressenya.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressenyaWithIdOnly = await prisma.ressenya.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RessenyaFindManyArgs>(args?: SelectSubset<T, RessenyaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ressenya.
     * @param {RessenyaCreateArgs} args - Arguments to create a Ressenya.
     * @example
     * // Create one Ressenya
     * const Ressenya = await prisma.ressenya.create({
     *   data: {
     *     // ... data to create a Ressenya
     *   }
     * })
     * 
     */
    create<T extends RessenyaCreateArgs>(args: SelectSubset<T, RessenyaCreateArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressenyas.
     * @param {RessenyaCreateManyArgs} args - Arguments to create many Ressenyas.
     * @example
     * // Create many Ressenyas
     * const ressenya = await prisma.ressenya.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RessenyaCreateManyArgs>(args?: SelectSubset<T, RessenyaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ressenyas and returns the data saved in the database.
     * @param {RessenyaCreateManyAndReturnArgs} args - Arguments to create many Ressenyas.
     * @example
     * // Create many Ressenyas
     * const ressenya = await prisma.ressenya.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ressenyas and only return the `id`
     * const ressenyaWithIdOnly = await prisma.ressenya.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RessenyaCreateManyAndReturnArgs>(args?: SelectSubset<T, RessenyaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ressenya.
     * @param {RessenyaDeleteArgs} args - Arguments to delete one Ressenya.
     * @example
     * // Delete one Ressenya
     * const Ressenya = await prisma.ressenya.delete({
     *   where: {
     *     // ... filter to delete one Ressenya
     *   }
     * })
     * 
     */
    delete<T extends RessenyaDeleteArgs>(args: SelectSubset<T, RessenyaDeleteArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ressenya.
     * @param {RessenyaUpdateArgs} args - Arguments to update one Ressenya.
     * @example
     * // Update one Ressenya
     * const ressenya = await prisma.ressenya.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RessenyaUpdateArgs>(args: SelectSubset<T, RessenyaUpdateArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressenyas.
     * @param {RessenyaDeleteManyArgs} args - Arguments to filter Ressenyas to delete.
     * @example
     * // Delete a few Ressenyas
     * const { count } = await prisma.ressenya.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RessenyaDeleteManyArgs>(args?: SelectSubset<T, RessenyaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressenyas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressenyas
     * const ressenya = await prisma.ressenya.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RessenyaUpdateManyArgs>(args: SelectSubset<T, RessenyaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressenyas and returns the data updated in the database.
     * @param {RessenyaUpdateManyAndReturnArgs} args - Arguments to update many Ressenyas.
     * @example
     * // Update many Ressenyas
     * const ressenya = await prisma.ressenya.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ressenyas and only return the `id`
     * const ressenyaWithIdOnly = await prisma.ressenya.updateManyAndReturn({
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
    updateManyAndReturn<T extends RessenyaUpdateManyAndReturnArgs>(args: SelectSubset<T, RessenyaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ressenya.
     * @param {RessenyaUpsertArgs} args - Arguments to update or create a Ressenya.
     * @example
     * // Update or create a Ressenya
     * const ressenya = await prisma.ressenya.upsert({
     *   create: {
     *     // ... data to create a Ressenya
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressenya we want to update
     *   }
     * })
     */
    upsert<T extends RessenyaUpsertArgs>(args: SelectSubset<T, RessenyaUpsertArgs<ExtArgs>>): Prisma__RessenyaClient<$Result.GetResult<Prisma.$RessenyaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressenyas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaCountArgs} args - Arguments to filter Ressenyas to count.
     * @example
     * // Count the number of Ressenyas
     * const count = await prisma.ressenya.count({
     *   where: {
     *     // ... the filter for the Ressenyas we want to count
     *   }
     * })
    **/
    count<T extends RessenyaCountArgs>(
      args?: Subset<T, RessenyaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessenyaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressenya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RessenyaAggregateArgs>(args: Subset<T, RessenyaAggregateArgs>): Prisma.PrismaPromise<GetRessenyaAggregateType<T>>

    /**
     * Group by Ressenya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessenyaGroupByArgs} args - Group by arguments.
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
      T extends RessenyaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RessenyaGroupByArgs['orderBy'] }
        : { orderBy?: RessenyaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RessenyaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessenyaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ressenya model
   */
  readonly fields: RessenyaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ressenya.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RessenyaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lavabo<T extends LavaboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LavaboDefaultArgs<ExtArgs>>): Prisma__LavaboClient<$Result.GetResult<Prisma.$LavaboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ressenya model
   */
  interface RessenyaFieldRefs {
    readonly id: FieldRef<"Ressenya", 'Int'>
    readonly autor: FieldRef<"Ressenya", 'String'>
    readonly contingut: FieldRef<"Ressenya", 'String'>
    readonly puntuacio: FieldRef<"Ressenya", 'Int'>
    readonly data: FieldRef<"Ressenya", 'DateTime'>
    readonly lavaboId: FieldRef<"Ressenya", 'Int'>
    readonly createdAt: FieldRef<"Ressenya", 'DateTime'>
    readonly updatedAt: FieldRef<"Ressenya", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ressenya findUnique
   */
  export type RessenyaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter, which Ressenya to fetch.
     */
    where: RessenyaWhereUniqueInput
  }

  /**
   * Ressenya findUniqueOrThrow
   */
  export type RessenyaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter, which Ressenya to fetch.
     */
    where: RessenyaWhereUniqueInput
  }

  /**
   * Ressenya findFirst
   */
  export type RessenyaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter, which Ressenya to fetch.
     */
    where?: RessenyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressenyas to fetch.
     */
    orderBy?: RessenyaOrderByWithRelationInput | RessenyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressenyas.
     */
    cursor?: RessenyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressenyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressenyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressenyas.
     */
    distinct?: RessenyaScalarFieldEnum | RessenyaScalarFieldEnum[]
  }

  /**
   * Ressenya findFirstOrThrow
   */
  export type RessenyaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter, which Ressenya to fetch.
     */
    where?: RessenyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressenyas to fetch.
     */
    orderBy?: RessenyaOrderByWithRelationInput | RessenyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressenyas.
     */
    cursor?: RessenyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressenyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressenyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressenyas.
     */
    distinct?: RessenyaScalarFieldEnum | RessenyaScalarFieldEnum[]
  }

  /**
   * Ressenya findMany
   */
  export type RessenyaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter, which Ressenyas to fetch.
     */
    where?: RessenyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressenyas to fetch.
     */
    orderBy?: RessenyaOrderByWithRelationInput | RessenyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ressenyas.
     */
    cursor?: RessenyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressenyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressenyas.
     */
    skip?: number
    distinct?: RessenyaScalarFieldEnum | RessenyaScalarFieldEnum[]
  }

  /**
   * Ressenya create
   */
  export type RessenyaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ressenya.
     */
    data: XOR<RessenyaCreateInput, RessenyaUncheckedCreateInput>
  }

  /**
   * Ressenya createMany
   */
  export type RessenyaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ressenyas.
     */
    data: RessenyaCreateManyInput | RessenyaCreateManyInput[]
  }

  /**
   * Ressenya createManyAndReturn
   */
  export type RessenyaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * The data used to create many Ressenyas.
     */
    data: RessenyaCreateManyInput | RessenyaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ressenya update
   */
  export type RessenyaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ressenya.
     */
    data: XOR<RessenyaUpdateInput, RessenyaUncheckedUpdateInput>
    /**
     * Choose, which Ressenya to update.
     */
    where: RessenyaWhereUniqueInput
  }

  /**
   * Ressenya updateMany
   */
  export type RessenyaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ressenyas.
     */
    data: XOR<RessenyaUpdateManyMutationInput, RessenyaUncheckedUpdateManyInput>
    /**
     * Filter which Ressenyas to update
     */
    where?: RessenyaWhereInput
    /**
     * Limit how many Ressenyas to update.
     */
    limit?: number
  }

  /**
   * Ressenya updateManyAndReturn
   */
  export type RessenyaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * The data used to update Ressenyas.
     */
    data: XOR<RessenyaUpdateManyMutationInput, RessenyaUncheckedUpdateManyInput>
    /**
     * Filter which Ressenyas to update
     */
    where?: RessenyaWhereInput
    /**
     * Limit how many Ressenyas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ressenya upsert
   */
  export type RessenyaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ressenya to update in case it exists.
     */
    where: RessenyaWhereUniqueInput
    /**
     * In case the Ressenya found by the `where` argument doesn't exist, create a new Ressenya with this data.
     */
    create: XOR<RessenyaCreateInput, RessenyaUncheckedCreateInput>
    /**
     * In case the Ressenya was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RessenyaUpdateInput, RessenyaUncheckedUpdateInput>
  }

  /**
   * Ressenya delete
   */
  export type RessenyaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
    /**
     * Filter which Ressenya to delete.
     */
    where: RessenyaWhereUniqueInput
  }

  /**
   * Ressenya deleteMany
   */
  export type RessenyaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressenyas to delete
     */
    where?: RessenyaWhereInput
    /**
     * Limit how many Ressenyas to delete.
     */
    limit?: number
  }

  /**
   * Ressenya without action
   */
  export type RessenyaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressenya
     */
    select?: RessenyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressenya
     */
    omit?: RessenyaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RessenyaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LavaboScalarFieldEnum: {
    id: 'id',
    edifici: 'edifici',
    planta: 'planta',
    genere: 'genere',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LavaboScalarFieldEnum = (typeof LavaboScalarFieldEnum)[keyof typeof LavaboScalarFieldEnum]


  export const FraseScalarFieldEnum: {
    id: 'id',
    contingut: 'contingut',
    idioma: 'idioma',
    any: 'any',
    resposta: 'resposta',
    fitxerImg: 'fitxerImg',
    lavaboId: 'lavaboId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FraseScalarFieldEnum = (typeof FraseScalarFieldEnum)[keyof typeof FraseScalarFieldEnum]


  export const ComentariScalarFieldEnum: {
    id: 'id',
    contingut: 'contingut',
    fraseId: 'fraseId',
    data: 'data',
    autor: 'autor',
    resposta: 'resposta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComentariScalarFieldEnum = (typeof ComentariScalarFieldEnum)[keyof typeof ComentariScalarFieldEnum]


  export const RessenyaScalarFieldEnum: {
    id: 'id',
    autor: 'autor',
    contingut: 'contingut',
    puntuacio: 'puntuacio',
    data: 'data',
    lavaboId: 'lavaboId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RessenyaScalarFieldEnum = (typeof RessenyaScalarFieldEnum)[keyof typeof RessenyaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Genere'
   */
  export type EnumGenereFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genere'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Idioma'
   */
  export type EnumIdiomaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Idioma'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LavaboWhereInput = {
    AND?: LavaboWhereInput | LavaboWhereInput[]
    OR?: LavaboWhereInput[]
    NOT?: LavaboWhereInput | LavaboWhereInput[]
    id?: IntFilter<"Lavabo"> | number
    edifici?: StringFilter<"Lavabo"> | string
    planta?: StringFilter<"Lavabo"> | string
    genere?: EnumGenereFilter<"Lavabo"> | $Enums.Genere
    createdAt?: DateTimeFilter<"Lavabo"> | Date | string
    updatedAt?: DateTimeFilter<"Lavabo"> | Date | string
    frases?: FraseListRelationFilter
    ressenyes?: RessenyaListRelationFilter
  }

  export type LavaboOrderByWithRelationInput = {
    id?: SortOrder
    edifici?: SortOrder
    planta?: SortOrder
    genere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frases?: FraseOrderByRelationAggregateInput
    ressenyes?: RessenyaOrderByRelationAggregateInput
  }

  export type LavaboWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LavaboWhereInput | LavaboWhereInput[]
    OR?: LavaboWhereInput[]
    NOT?: LavaboWhereInput | LavaboWhereInput[]
    edifici?: StringFilter<"Lavabo"> | string
    planta?: StringFilter<"Lavabo"> | string
    genere?: EnumGenereFilter<"Lavabo"> | $Enums.Genere
    createdAt?: DateTimeFilter<"Lavabo"> | Date | string
    updatedAt?: DateTimeFilter<"Lavabo"> | Date | string
    frases?: FraseListRelationFilter
    ressenyes?: RessenyaListRelationFilter
  }, "id">

  export type LavaboOrderByWithAggregationInput = {
    id?: SortOrder
    edifici?: SortOrder
    planta?: SortOrder
    genere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LavaboCountOrderByAggregateInput
    _avg?: LavaboAvgOrderByAggregateInput
    _max?: LavaboMaxOrderByAggregateInput
    _min?: LavaboMinOrderByAggregateInput
    _sum?: LavaboSumOrderByAggregateInput
  }

  export type LavaboScalarWhereWithAggregatesInput = {
    AND?: LavaboScalarWhereWithAggregatesInput | LavaboScalarWhereWithAggregatesInput[]
    OR?: LavaboScalarWhereWithAggregatesInput[]
    NOT?: LavaboScalarWhereWithAggregatesInput | LavaboScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lavabo"> | number
    edifici?: StringWithAggregatesFilter<"Lavabo"> | string
    planta?: StringWithAggregatesFilter<"Lavabo"> | string
    genere?: EnumGenereWithAggregatesFilter<"Lavabo"> | $Enums.Genere
    createdAt?: DateTimeWithAggregatesFilter<"Lavabo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lavabo"> | Date | string
  }

  export type FraseWhereInput = {
    AND?: FraseWhereInput | FraseWhereInput[]
    OR?: FraseWhereInput[]
    NOT?: FraseWhereInput | FraseWhereInput[]
    id?: IntFilter<"Frase"> | number
    contingut?: StringFilter<"Frase"> | string
    idioma?: EnumIdiomaFilter<"Frase"> | $Enums.Idioma
    any?: IntFilter<"Frase"> | number
    resposta?: IntNullableFilter<"Frase"> | number | null
    fitxerImg?: StringNullableFilter<"Frase"> | string | null
    lavaboId?: IntFilter<"Frase"> | number
    createdAt?: DateTimeFilter<"Frase"> | Date | string
    updatedAt?: DateTimeFilter<"Frase"> | Date | string
    lavabo?: XOR<LavaboScalarRelationFilter, LavaboWhereInput>
    comentaris?: ComentariListRelationFilter
  }

  export type FraseOrderByWithRelationInput = {
    id?: SortOrder
    contingut?: SortOrder
    idioma?: SortOrder
    any?: SortOrder
    resposta?: SortOrderInput | SortOrder
    fitxerImg?: SortOrderInput | SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lavabo?: LavaboOrderByWithRelationInput
    comentaris?: ComentariOrderByRelationAggregateInput
  }

  export type FraseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FraseWhereInput | FraseWhereInput[]
    OR?: FraseWhereInput[]
    NOT?: FraseWhereInput | FraseWhereInput[]
    contingut?: StringFilter<"Frase"> | string
    idioma?: EnumIdiomaFilter<"Frase"> | $Enums.Idioma
    any?: IntFilter<"Frase"> | number
    resposta?: IntNullableFilter<"Frase"> | number | null
    fitxerImg?: StringNullableFilter<"Frase"> | string | null
    lavaboId?: IntFilter<"Frase"> | number
    createdAt?: DateTimeFilter<"Frase"> | Date | string
    updatedAt?: DateTimeFilter<"Frase"> | Date | string
    lavabo?: XOR<LavaboScalarRelationFilter, LavaboWhereInput>
    comentaris?: ComentariListRelationFilter
  }, "id">

  export type FraseOrderByWithAggregationInput = {
    id?: SortOrder
    contingut?: SortOrder
    idioma?: SortOrder
    any?: SortOrder
    resposta?: SortOrderInput | SortOrder
    fitxerImg?: SortOrderInput | SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FraseCountOrderByAggregateInput
    _avg?: FraseAvgOrderByAggregateInput
    _max?: FraseMaxOrderByAggregateInput
    _min?: FraseMinOrderByAggregateInput
    _sum?: FraseSumOrderByAggregateInput
  }

  export type FraseScalarWhereWithAggregatesInput = {
    AND?: FraseScalarWhereWithAggregatesInput | FraseScalarWhereWithAggregatesInput[]
    OR?: FraseScalarWhereWithAggregatesInput[]
    NOT?: FraseScalarWhereWithAggregatesInput | FraseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Frase"> | number
    contingut?: StringWithAggregatesFilter<"Frase"> | string
    idioma?: EnumIdiomaWithAggregatesFilter<"Frase"> | $Enums.Idioma
    any?: IntWithAggregatesFilter<"Frase"> | number
    resposta?: IntNullableWithAggregatesFilter<"Frase"> | number | null
    fitxerImg?: StringNullableWithAggregatesFilter<"Frase"> | string | null
    lavaboId?: IntWithAggregatesFilter<"Frase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Frase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Frase"> | Date | string
  }

  export type ComentariWhereInput = {
    AND?: ComentariWhereInput | ComentariWhereInput[]
    OR?: ComentariWhereInput[]
    NOT?: ComentariWhereInput | ComentariWhereInput[]
    id?: IntFilter<"Comentari"> | number
    contingut?: StringFilter<"Comentari"> | string
    fraseId?: IntFilter<"Comentari"> | number
    data?: DateTimeFilter<"Comentari"> | Date | string
    autor?: StringNullableFilter<"Comentari"> | string | null
    resposta?: IntNullableFilter<"Comentari"> | number | null
    createdAt?: DateTimeFilter<"Comentari"> | Date | string
    updatedAt?: DateTimeFilter<"Comentari"> | Date | string
    frase?: XOR<FraseScalarRelationFilter, FraseWhereInput>
  }

  export type ComentariOrderByWithRelationInput = {
    id?: SortOrder
    contingut?: SortOrder
    fraseId?: SortOrder
    data?: SortOrder
    autor?: SortOrderInput | SortOrder
    resposta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    frase?: FraseOrderByWithRelationInput
  }

  export type ComentariWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentariWhereInput | ComentariWhereInput[]
    OR?: ComentariWhereInput[]
    NOT?: ComentariWhereInput | ComentariWhereInput[]
    contingut?: StringFilter<"Comentari"> | string
    fraseId?: IntFilter<"Comentari"> | number
    data?: DateTimeFilter<"Comentari"> | Date | string
    autor?: StringNullableFilter<"Comentari"> | string | null
    resposta?: IntNullableFilter<"Comentari"> | number | null
    createdAt?: DateTimeFilter<"Comentari"> | Date | string
    updatedAt?: DateTimeFilter<"Comentari"> | Date | string
    frase?: XOR<FraseScalarRelationFilter, FraseWhereInput>
  }, "id">

  export type ComentariOrderByWithAggregationInput = {
    id?: SortOrder
    contingut?: SortOrder
    fraseId?: SortOrder
    data?: SortOrder
    autor?: SortOrderInput | SortOrder
    resposta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComentariCountOrderByAggregateInput
    _avg?: ComentariAvgOrderByAggregateInput
    _max?: ComentariMaxOrderByAggregateInput
    _min?: ComentariMinOrderByAggregateInput
    _sum?: ComentariSumOrderByAggregateInput
  }

  export type ComentariScalarWhereWithAggregatesInput = {
    AND?: ComentariScalarWhereWithAggregatesInput | ComentariScalarWhereWithAggregatesInput[]
    OR?: ComentariScalarWhereWithAggregatesInput[]
    NOT?: ComentariScalarWhereWithAggregatesInput | ComentariScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentari"> | number
    contingut?: StringWithAggregatesFilter<"Comentari"> | string
    fraseId?: IntWithAggregatesFilter<"Comentari"> | number
    data?: DateTimeWithAggregatesFilter<"Comentari"> | Date | string
    autor?: StringNullableWithAggregatesFilter<"Comentari"> | string | null
    resposta?: IntNullableWithAggregatesFilter<"Comentari"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Comentari"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comentari"> | Date | string
  }

  export type RessenyaWhereInput = {
    AND?: RessenyaWhereInput | RessenyaWhereInput[]
    OR?: RessenyaWhereInput[]
    NOT?: RessenyaWhereInput | RessenyaWhereInput[]
    id?: IntFilter<"Ressenya"> | number
    autor?: StringNullableFilter<"Ressenya"> | string | null
    contingut?: StringFilter<"Ressenya"> | string
    puntuacio?: IntFilter<"Ressenya"> | number
    data?: DateTimeFilter<"Ressenya"> | Date | string
    lavaboId?: IntFilter<"Ressenya"> | number
    createdAt?: DateTimeFilter<"Ressenya"> | Date | string
    updatedAt?: DateTimeFilter<"Ressenya"> | Date | string
    lavabo?: XOR<LavaboScalarRelationFilter, LavaboWhereInput>
  }

  export type RessenyaOrderByWithRelationInput = {
    id?: SortOrder
    autor?: SortOrderInput | SortOrder
    contingut?: SortOrder
    puntuacio?: SortOrder
    data?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lavabo?: LavaboOrderByWithRelationInput
  }

  export type RessenyaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RessenyaWhereInput | RessenyaWhereInput[]
    OR?: RessenyaWhereInput[]
    NOT?: RessenyaWhereInput | RessenyaWhereInput[]
    autor?: StringNullableFilter<"Ressenya"> | string | null
    contingut?: StringFilter<"Ressenya"> | string
    puntuacio?: IntFilter<"Ressenya"> | number
    data?: DateTimeFilter<"Ressenya"> | Date | string
    lavaboId?: IntFilter<"Ressenya"> | number
    createdAt?: DateTimeFilter<"Ressenya"> | Date | string
    updatedAt?: DateTimeFilter<"Ressenya"> | Date | string
    lavabo?: XOR<LavaboScalarRelationFilter, LavaboWhereInput>
  }, "id">

  export type RessenyaOrderByWithAggregationInput = {
    id?: SortOrder
    autor?: SortOrderInput | SortOrder
    contingut?: SortOrder
    puntuacio?: SortOrder
    data?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RessenyaCountOrderByAggregateInput
    _avg?: RessenyaAvgOrderByAggregateInput
    _max?: RessenyaMaxOrderByAggregateInput
    _min?: RessenyaMinOrderByAggregateInput
    _sum?: RessenyaSumOrderByAggregateInput
  }

  export type RessenyaScalarWhereWithAggregatesInput = {
    AND?: RessenyaScalarWhereWithAggregatesInput | RessenyaScalarWhereWithAggregatesInput[]
    OR?: RessenyaScalarWhereWithAggregatesInput[]
    NOT?: RessenyaScalarWhereWithAggregatesInput | RessenyaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ressenya"> | number
    autor?: StringNullableWithAggregatesFilter<"Ressenya"> | string | null
    contingut?: StringWithAggregatesFilter<"Ressenya"> | string
    puntuacio?: IntWithAggregatesFilter<"Ressenya"> | number
    data?: DateTimeWithAggregatesFilter<"Ressenya"> | Date | string
    lavaboId?: IntWithAggregatesFilter<"Ressenya"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ressenya"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ressenya"> | Date | string
  }

  export type LavaboCreateInput = {
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    frases?: FraseCreateNestedManyWithoutLavaboInput
    ressenyes?: RessenyaCreateNestedManyWithoutLavaboInput
  }

  export type LavaboUncheckedCreateInput = {
    id?: number
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    frases?: FraseUncheckedCreateNestedManyWithoutLavaboInput
    ressenyes?: RessenyaUncheckedCreateNestedManyWithoutLavaboInput
  }

  export type LavaboUpdateInput = {
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frases?: FraseUpdateManyWithoutLavaboNestedInput
    ressenyes?: RessenyaUpdateManyWithoutLavaboNestedInput
  }

  export type LavaboUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frases?: FraseUncheckedUpdateManyWithoutLavaboNestedInput
    ressenyes?: RessenyaUncheckedUpdateManyWithoutLavaboNestedInput
  }

  export type LavaboCreateManyInput = {
    id?: number
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LavaboUpdateManyMutationInput = {
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LavaboUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FraseCreateInput = {
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lavabo: LavaboCreateNestedOneWithoutFrasesInput
    comentaris?: ComentariCreateNestedManyWithoutFraseInput
  }

  export type FraseUncheckedCreateInput = {
    id?: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    lavaboId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comentaris?: ComentariUncheckedCreateNestedManyWithoutFraseInput
  }

  export type FraseUpdateInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lavabo?: LavaboUpdateOneRequiredWithoutFrasesNestedInput
    comentaris?: ComentariUpdateManyWithoutFraseNestedInput
  }

  export type FraseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    lavaboId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentaris?: ComentariUncheckedUpdateManyWithoutFraseNestedInput
  }

  export type FraseCreateManyInput = {
    id?: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    lavaboId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FraseUpdateManyMutationInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FraseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    lavaboId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariCreateInput = {
    contingut: string
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    frase: FraseCreateNestedOneWithoutComentarisInput
  }

  export type ComentariUncheckedCreateInput = {
    id?: number
    contingut: string
    fraseId: number
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComentariUpdateInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frase?: FraseUpdateOneRequiredWithoutComentarisNestedInput
  }

  export type ComentariUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    fraseId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariCreateManyInput = {
    id?: number
    contingut: string
    fraseId: number
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComentariUpdateManyMutationInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    fraseId?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaCreateInput = {
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lavabo: LavaboCreateNestedOneWithoutRessenyesInput
  }

  export type RessenyaUncheckedCreateInput = {
    id?: number
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    lavaboId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RessenyaUpdateInput = {
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lavabo?: LavaboUpdateOneRequiredWithoutRessenyesNestedInput
  }

  export type RessenyaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lavaboId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaCreateManyInput = {
    id?: number
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    lavaboId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RessenyaUpdateManyMutationInput = {
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    lavaboId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenereFilter<$PrismaModel = never> = {
    equals?: $Enums.Genere | EnumGenereFieldRefInput<$PrismaModel>
    in?: $Enums.Genere[]
    notIn?: $Enums.Genere[]
    not?: NestedEnumGenereFilter<$PrismaModel> | $Enums.Genere
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FraseListRelationFilter = {
    every?: FraseWhereInput
    some?: FraseWhereInput
    none?: FraseWhereInput
  }

  export type RessenyaListRelationFilter = {
    every?: RessenyaWhereInput
    some?: RessenyaWhereInput
    none?: RessenyaWhereInput
  }

  export type FraseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RessenyaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LavaboCountOrderByAggregateInput = {
    id?: SortOrder
    edifici?: SortOrder
    planta?: SortOrder
    genere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LavaboAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LavaboMaxOrderByAggregateInput = {
    id?: SortOrder
    edifici?: SortOrder
    planta?: SortOrder
    genere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LavaboMinOrderByAggregateInput = {
    id?: SortOrder
    edifici?: SortOrder
    planta?: SortOrder
    genere?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LavaboSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumGenereWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genere | EnumGenereFieldRefInput<$PrismaModel>
    in?: $Enums.Genere[]
    notIn?: $Enums.Genere[]
    not?: NestedEnumGenereWithAggregatesFilter<$PrismaModel> | $Enums.Genere
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenereFilter<$PrismaModel>
    _max?: NestedEnumGenereFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIdiomaFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaFilter<$PrismaModel> | $Enums.Idioma
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LavaboScalarRelationFilter = {
    is?: LavaboWhereInput
    isNot?: LavaboWhereInput
  }

  export type ComentariListRelationFilter = {
    every?: ComentariWhereInput
    some?: ComentariWhereInput
    none?: ComentariWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComentariOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FraseCountOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    idioma?: SortOrder
    any?: SortOrder
    resposta?: SortOrder
    fitxerImg?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FraseAvgOrderByAggregateInput = {
    id?: SortOrder
    any?: SortOrder
    resposta?: SortOrder
    lavaboId?: SortOrder
  }

  export type FraseMaxOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    idioma?: SortOrder
    any?: SortOrder
    resposta?: SortOrder
    fitxerImg?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FraseMinOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    idioma?: SortOrder
    any?: SortOrder
    resposta?: SortOrder
    fitxerImg?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FraseSumOrderByAggregateInput = {
    id?: SortOrder
    any?: SortOrder
    resposta?: SortOrder
    lavaboId?: SortOrder
  }

  export type EnumIdiomaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaWithAggregatesFilter<$PrismaModel> | $Enums.Idioma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdiomaFilter<$PrismaModel>
    _max?: NestedEnumIdiomaFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FraseScalarRelationFilter = {
    is?: FraseWhereInput
    isNot?: FraseWhereInput
  }

  export type ComentariCountOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    fraseId?: SortOrder
    data?: SortOrder
    autor?: SortOrder
    resposta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComentariAvgOrderByAggregateInput = {
    id?: SortOrder
    fraseId?: SortOrder
    resposta?: SortOrder
  }

  export type ComentariMaxOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    fraseId?: SortOrder
    data?: SortOrder
    autor?: SortOrder
    resposta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComentariMinOrderByAggregateInput = {
    id?: SortOrder
    contingut?: SortOrder
    fraseId?: SortOrder
    data?: SortOrder
    autor?: SortOrder
    resposta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComentariSumOrderByAggregateInput = {
    id?: SortOrder
    fraseId?: SortOrder
    resposta?: SortOrder
  }

  export type RessenyaCountOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    contingut?: SortOrder
    puntuacio?: SortOrder
    data?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RessenyaAvgOrderByAggregateInput = {
    id?: SortOrder
    puntuacio?: SortOrder
    lavaboId?: SortOrder
  }

  export type RessenyaMaxOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    contingut?: SortOrder
    puntuacio?: SortOrder
    data?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RessenyaMinOrderByAggregateInput = {
    id?: SortOrder
    autor?: SortOrder
    contingut?: SortOrder
    puntuacio?: SortOrder
    data?: SortOrder
    lavaboId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RessenyaSumOrderByAggregateInput = {
    id?: SortOrder
    puntuacio?: SortOrder
    lavaboId?: SortOrder
  }

  export type FraseCreateNestedManyWithoutLavaboInput = {
    create?: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput> | FraseCreateWithoutLavaboInput[] | FraseUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: FraseCreateOrConnectWithoutLavaboInput | FraseCreateOrConnectWithoutLavaboInput[]
    createMany?: FraseCreateManyLavaboInputEnvelope
    connect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
  }

  export type RessenyaCreateNestedManyWithoutLavaboInput = {
    create?: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput> | RessenyaCreateWithoutLavaboInput[] | RessenyaUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: RessenyaCreateOrConnectWithoutLavaboInput | RessenyaCreateOrConnectWithoutLavaboInput[]
    createMany?: RessenyaCreateManyLavaboInputEnvelope
    connect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
  }

  export type FraseUncheckedCreateNestedManyWithoutLavaboInput = {
    create?: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput> | FraseCreateWithoutLavaboInput[] | FraseUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: FraseCreateOrConnectWithoutLavaboInput | FraseCreateOrConnectWithoutLavaboInput[]
    createMany?: FraseCreateManyLavaboInputEnvelope
    connect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
  }

  export type RessenyaUncheckedCreateNestedManyWithoutLavaboInput = {
    create?: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput> | RessenyaCreateWithoutLavaboInput[] | RessenyaUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: RessenyaCreateOrConnectWithoutLavaboInput | RessenyaCreateOrConnectWithoutLavaboInput[]
    createMany?: RessenyaCreateManyLavaboInputEnvelope
    connect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenereFieldUpdateOperationsInput = {
    set?: $Enums.Genere
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FraseUpdateManyWithoutLavaboNestedInput = {
    create?: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput> | FraseCreateWithoutLavaboInput[] | FraseUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: FraseCreateOrConnectWithoutLavaboInput | FraseCreateOrConnectWithoutLavaboInput[]
    upsert?: FraseUpsertWithWhereUniqueWithoutLavaboInput | FraseUpsertWithWhereUniqueWithoutLavaboInput[]
    createMany?: FraseCreateManyLavaboInputEnvelope
    set?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    disconnect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    delete?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    connect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    update?: FraseUpdateWithWhereUniqueWithoutLavaboInput | FraseUpdateWithWhereUniqueWithoutLavaboInput[]
    updateMany?: FraseUpdateManyWithWhereWithoutLavaboInput | FraseUpdateManyWithWhereWithoutLavaboInput[]
    deleteMany?: FraseScalarWhereInput | FraseScalarWhereInput[]
  }

  export type RessenyaUpdateManyWithoutLavaboNestedInput = {
    create?: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput> | RessenyaCreateWithoutLavaboInput[] | RessenyaUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: RessenyaCreateOrConnectWithoutLavaboInput | RessenyaCreateOrConnectWithoutLavaboInput[]
    upsert?: RessenyaUpsertWithWhereUniqueWithoutLavaboInput | RessenyaUpsertWithWhereUniqueWithoutLavaboInput[]
    createMany?: RessenyaCreateManyLavaboInputEnvelope
    set?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    disconnect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    delete?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    connect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    update?: RessenyaUpdateWithWhereUniqueWithoutLavaboInput | RessenyaUpdateWithWhereUniqueWithoutLavaboInput[]
    updateMany?: RessenyaUpdateManyWithWhereWithoutLavaboInput | RessenyaUpdateManyWithWhereWithoutLavaboInput[]
    deleteMany?: RessenyaScalarWhereInput | RessenyaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FraseUncheckedUpdateManyWithoutLavaboNestedInput = {
    create?: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput> | FraseCreateWithoutLavaboInput[] | FraseUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: FraseCreateOrConnectWithoutLavaboInput | FraseCreateOrConnectWithoutLavaboInput[]
    upsert?: FraseUpsertWithWhereUniqueWithoutLavaboInput | FraseUpsertWithWhereUniqueWithoutLavaboInput[]
    createMany?: FraseCreateManyLavaboInputEnvelope
    set?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    disconnect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    delete?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    connect?: FraseWhereUniqueInput | FraseWhereUniqueInput[]
    update?: FraseUpdateWithWhereUniqueWithoutLavaboInput | FraseUpdateWithWhereUniqueWithoutLavaboInput[]
    updateMany?: FraseUpdateManyWithWhereWithoutLavaboInput | FraseUpdateManyWithWhereWithoutLavaboInput[]
    deleteMany?: FraseScalarWhereInput | FraseScalarWhereInput[]
  }

  export type RessenyaUncheckedUpdateManyWithoutLavaboNestedInput = {
    create?: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput> | RessenyaCreateWithoutLavaboInput[] | RessenyaUncheckedCreateWithoutLavaboInput[]
    connectOrCreate?: RessenyaCreateOrConnectWithoutLavaboInput | RessenyaCreateOrConnectWithoutLavaboInput[]
    upsert?: RessenyaUpsertWithWhereUniqueWithoutLavaboInput | RessenyaUpsertWithWhereUniqueWithoutLavaboInput[]
    createMany?: RessenyaCreateManyLavaboInputEnvelope
    set?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    disconnect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    delete?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    connect?: RessenyaWhereUniqueInput | RessenyaWhereUniqueInput[]
    update?: RessenyaUpdateWithWhereUniqueWithoutLavaboInput | RessenyaUpdateWithWhereUniqueWithoutLavaboInput[]
    updateMany?: RessenyaUpdateManyWithWhereWithoutLavaboInput | RessenyaUpdateManyWithWhereWithoutLavaboInput[]
    deleteMany?: RessenyaScalarWhereInput | RessenyaScalarWhereInput[]
  }

  export type LavaboCreateNestedOneWithoutFrasesInput = {
    create?: XOR<LavaboCreateWithoutFrasesInput, LavaboUncheckedCreateWithoutFrasesInput>
    connectOrCreate?: LavaboCreateOrConnectWithoutFrasesInput
    connect?: LavaboWhereUniqueInput
  }

  export type ComentariCreateNestedManyWithoutFraseInput = {
    create?: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput> | ComentariCreateWithoutFraseInput[] | ComentariUncheckedCreateWithoutFraseInput[]
    connectOrCreate?: ComentariCreateOrConnectWithoutFraseInput | ComentariCreateOrConnectWithoutFraseInput[]
    createMany?: ComentariCreateManyFraseInputEnvelope
    connect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
  }

  export type ComentariUncheckedCreateNestedManyWithoutFraseInput = {
    create?: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput> | ComentariCreateWithoutFraseInput[] | ComentariUncheckedCreateWithoutFraseInput[]
    connectOrCreate?: ComentariCreateOrConnectWithoutFraseInput | ComentariCreateOrConnectWithoutFraseInput[]
    createMany?: ComentariCreateManyFraseInputEnvelope
    connect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
  }

  export type EnumIdiomaFieldUpdateOperationsInput = {
    set?: $Enums.Idioma
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LavaboUpdateOneRequiredWithoutFrasesNestedInput = {
    create?: XOR<LavaboCreateWithoutFrasesInput, LavaboUncheckedCreateWithoutFrasesInput>
    connectOrCreate?: LavaboCreateOrConnectWithoutFrasesInput
    upsert?: LavaboUpsertWithoutFrasesInput
    connect?: LavaboWhereUniqueInput
    update?: XOR<XOR<LavaboUpdateToOneWithWhereWithoutFrasesInput, LavaboUpdateWithoutFrasesInput>, LavaboUncheckedUpdateWithoutFrasesInput>
  }

  export type ComentariUpdateManyWithoutFraseNestedInput = {
    create?: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput> | ComentariCreateWithoutFraseInput[] | ComentariUncheckedCreateWithoutFraseInput[]
    connectOrCreate?: ComentariCreateOrConnectWithoutFraseInput | ComentariCreateOrConnectWithoutFraseInput[]
    upsert?: ComentariUpsertWithWhereUniqueWithoutFraseInput | ComentariUpsertWithWhereUniqueWithoutFraseInput[]
    createMany?: ComentariCreateManyFraseInputEnvelope
    set?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    disconnect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    delete?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    connect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    update?: ComentariUpdateWithWhereUniqueWithoutFraseInput | ComentariUpdateWithWhereUniqueWithoutFraseInput[]
    updateMany?: ComentariUpdateManyWithWhereWithoutFraseInput | ComentariUpdateManyWithWhereWithoutFraseInput[]
    deleteMany?: ComentariScalarWhereInput | ComentariScalarWhereInput[]
  }

  export type ComentariUncheckedUpdateManyWithoutFraseNestedInput = {
    create?: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput> | ComentariCreateWithoutFraseInput[] | ComentariUncheckedCreateWithoutFraseInput[]
    connectOrCreate?: ComentariCreateOrConnectWithoutFraseInput | ComentariCreateOrConnectWithoutFraseInput[]
    upsert?: ComentariUpsertWithWhereUniqueWithoutFraseInput | ComentariUpsertWithWhereUniqueWithoutFraseInput[]
    createMany?: ComentariCreateManyFraseInputEnvelope
    set?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    disconnect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    delete?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    connect?: ComentariWhereUniqueInput | ComentariWhereUniqueInput[]
    update?: ComentariUpdateWithWhereUniqueWithoutFraseInput | ComentariUpdateWithWhereUniqueWithoutFraseInput[]
    updateMany?: ComentariUpdateManyWithWhereWithoutFraseInput | ComentariUpdateManyWithWhereWithoutFraseInput[]
    deleteMany?: ComentariScalarWhereInput | ComentariScalarWhereInput[]
  }

  export type FraseCreateNestedOneWithoutComentarisInput = {
    create?: XOR<FraseCreateWithoutComentarisInput, FraseUncheckedCreateWithoutComentarisInput>
    connectOrCreate?: FraseCreateOrConnectWithoutComentarisInput
    connect?: FraseWhereUniqueInput
  }

  export type FraseUpdateOneRequiredWithoutComentarisNestedInput = {
    create?: XOR<FraseCreateWithoutComentarisInput, FraseUncheckedCreateWithoutComentarisInput>
    connectOrCreate?: FraseCreateOrConnectWithoutComentarisInput
    upsert?: FraseUpsertWithoutComentarisInput
    connect?: FraseWhereUniqueInput
    update?: XOR<XOR<FraseUpdateToOneWithWhereWithoutComentarisInput, FraseUpdateWithoutComentarisInput>, FraseUncheckedUpdateWithoutComentarisInput>
  }

  export type LavaboCreateNestedOneWithoutRessenyesInput = {
    create?: XOR<LavaboCreateWithoutRessenyesInput, LavaboUncheckedCreateWithoutRessenyesInput>
    connectOrCreate?: LavaboCreateOrConnectWithoutRessenyesInput
    connect?: LavaboWhereUniqueInput
  }

  export type LavaboUpdateOneRequiredWithoutRessenyesNestedInput = {
    create?: XOR<LavaboCreateWithoutRessenyesInput, LavaboUncheckedCreateWithoutRessenyesInput>
    connectOrCreate?: LavaboCreateOrConnectWithoutRessenyesInput
    upsert?: LavaboUpsertWithoutRessenyesInput
    connect?: LavaboWhereUniqueInput
    update?: XOR<XOR<LavaboUpdateToOneWithWhereWithoutRessenyesInput, LavaboUpdateWithoutRessenyesInput>, LavaboUncheckedUpdateWithoutRessenyesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenereFilter<$PrismaModel = never> = {
    equals?: $Enums.Genere | EnumGenereFieldRefInput<$PrismaModel>
    in?: $Enums.Genere[]
    notIn?: $Enums.Genere[]
    not?: NestedEnumGenereFilter<$PrismaModel> | $Enums.Genere
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumGenereWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genere | EnumGenereFieldRefInput<$PrismaModel>
    in?: $Enums.Genere[]
    notIn?: $Enums.Genere[]
    not?: NestedEnumGenereWithAggregatesFilter<$PrismaModel> | $Enums.Genere
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenereFilter<$PrismaModel>
    _max?: NestedEnumGenereFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIdiomaFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaFilter<$PrismaModel> | $Enums.Idioma
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumIdiomaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Idioma | EnumIdiomaFieldRefInput<$PrismaModel>
    in?: $Enums.Idioma[]
    notIn?: $Enums.Idioma[]
    not?: NestedEnumIdiomaWithAggregatesFilter<$PrismaModel> | $Enums.Idioma
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdiomaFilter<$PrismaModel>
    _max?: NestedEnumIdiomaFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FraseCreateWithoutLavaboInput = {
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comentaris?: ComentariCreateNestedManyWithoutFraseInput
  }

  export type FraseUncheckedCreateWithoutLavaboInput = {
    id?: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comentaris?: ComentariUncheckedCreateNestedManyWithoutFraseInput
  }

  export type FraseCreateOrConnectWithoutLavaboInput = {
    where: FraseWhereUniqueInput
    create: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput>
  }

  export type FraseCreateManyLavaboInputEnvelope = {
    data: FraseCreateManyLavaboInput | FraseCreateManyLavaboInput[]
  }

  export type RessenyaCreateWithoutLavaboInput = {
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RessenyaUncheckedCreateWithoutLavaboInput = {
    id?: number
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RessenyaCreateOrConnectWithoutLavaboInput = {
    where: RessenyaWhereUniqueInput
    create: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput>
  }

  export type RessenyaCreateManyLavaboInputEnvelope = {
    data: RessenyaCreateManyLavaboInput | RessenyaCreateManyLavaboInput[]
  }

  export type FraseUpsertWithWhereUniqueWithoutLavaboInput = {
    where: FraseWhereUniqueInput
    update: XOR<FraseUpdateWithoutLavaboInput, FraseUncheckedUpdateWithoutLavaboInput>
    create: XOR<FraseCreateWithoutLavaboInput, FraseUncheckedCreateWithoutLavaboInput>
  }

  export type FraseUpdateWithWhereUniqueWithoutLavaboInput = {
    where: FraseWhereUniqueInput
    data: XOR<FraseUpdateWithoutLavaboInput, FraseUncheckedUpdateWithoutLavaboInput>
  }

  export type FraseUpdateManyWithWhereWithoutLavaboInput = {
    where: FraseScalarWhereInput
    data: XOR<FraseUpdateManyMutationInput, FraseUncheckedUpdateManyWithoutLavaboInput>
  }

  export type FraseScalarWhereInput = {
    AND?: FraseScalarWhereInput | FraseScalarWhereInput[]
    OR?: FraseScalarWhereInput[]
    NOT?: FraseScalarWhereInput | FraseScalarWhereInput[]
    id?: IntFilter<"Frase"> | number
    contingut?: StringFilter<"Frase"> | string
    idioma?: EnumIdiomaFilter<"Frase"> | $Enums.Idioma
    any?: IntFilter<"Frase"> | number
    resposta?: IntNullableFilter<"Frase"> | number | null
    fitxerImg?: StringNullableFilter<"Frase"> | string | null
    lavaboId?: IntFilter<"Frase"> | number
    createdAt?: DateTimeFilter<"Frase"> | Date | string
    updatedAt?: DateTimeFilter<"Frase"> | Date | string
  }

  export type RessenyaUpsertWithWhereUniqueWithoutLavaboInput = {
    where: RessenyaWhereUniqueInput
    update: XOR<RessenyaUpdateWithoutLavaboInput, RessenyaUncheckedUpdateWithoutLavaboInput>
    create: XOR<RessenyaCreateWithoutLavaboInput, RessenyaUncheckedCreateWithoutLavaboInput>
  }

  export type RessenyaUpdateWithWhereUniqueWithoutLavaboInput = {
    where: RessenyaWhereUniqueInput
    data: XOR<RessenyaUpdateWithoutLavaboInput, RessenyaUncheckedUpdateWithoutLavaboInput>
  }

  export type RessenyaUpdateManyWithWhereWithoutLavaboInput = {
    where: RessenyaScalarWhereInput
    data: XOR<RessenyaUpdateManyMutationInput, RessenyaUncheckedUpdateManyWithoutLavaboInput>
  }

  export type RessenyaScalarWhereInput = {
    AND?: RessenyaScalarWhereInput | RessenyaScalarWhereInput[]
    OR?: RessenyaScalarWhereInput[]
    NOT?: RessenyaScalarWhereInput | RessenyaScalarWhereInput[]
    id?: IntFilter<"Ressenya"> | number
    autor?: StringNullableFilter<"Ressenya"> | string | null
    contingut?: StringFilter<"Ressenya"> | string
    puntuacio?: IntFilter<"Ressenya"> | number
    data?: DateTimeFilter<"Ressenya"> | Date | string
    lavaboId?: IntFilter<"Ressenya"> | number
    createdAt?: DateTimeFilter<"Ressenya"> | Date | string
    updatedAt?: DateTimeFilter<"Ressenya"> | Date | string
  }

  export type LavaboCreateWithoutFrasesInput = {
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    ressenyes?: RessenyaCreateNestedManyWithoutLavaboInput
  }

  export type LavaboUncheckedCreateWithoutFrasesInput = {
    id?: number
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    ressenyes?: RessenyaUncheckedCreateNestedManyWithoutLavaboInput
  }

  export type LavaboCreateOrConnectWithoutFrasesInput = {
    where: LavaboWhereUniqueInput
    create: XOR<LavaboCreateWithoutFrasesInput, LavaboUncheckedCreateWithoutFrasesInput>
  }

  export type ComentariCreateWithoutFraseInput = {
    contingut: string
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComentariUncheckedCreateWithoutFraseInput = {
    id?: number
    contingut: string
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComentariCreateOrConnectWithoutFraseInput = {
    where: ComentariWhereUniqueInput
    create: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput>
  }

  export type ComentariCreateManyFraseInputEnvelope = {
    data: ComentariCreateManyFraseInput | ComentariCreateManyFraseInput[]
  }

  export type LavaboUpsertWithoutFrasesInput = {
    update: XOR<LavaboUpdateWithoutFrasesInput, LavaboUncheckedUpdateWithoutFrasesInput>
    create: XOR<LavaboCreateWithoutFrasesInput, LavaboUncheckedCreateWithoutFrasesInput>
    where?: LavaboWhereInput
  }

  export type LavaboUpdateToOneWithWhereWithoutFrasesInput = {
    where?: LavaboWhereInput
    data: XOR<LavaboUpdateWithoutFrasesInput, LavaboUncheckedUpdateWithoutFrasesInput>
  }

  export type LavaboUpdateWithoutFrasesInput = {
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressenyes?: RessenyaUpdateManyWithoutLavaboNestedInput
  }

  export type LavaboUncheckedUpdateWithoutFrasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressenyes?: RessenyaUncheckedUpdateManyWithoutLavaboNestedInput
  }

  export type ComentariUpsertWithWhereUniqueWithoutFraseInput = {
    where: ComentariWhereUniqueInput
    update: XOR<ComentariUpdateWithoutFraseInput, ComentariUncheckedUpdateWithoutFraseInput>
    create: XOR<ComentariCreateWithoutFraseInput, ComentariUncheckedCreateWithoutFraseInput>
  }

  export type ComentariUpdateWithWhereUniqueWithoutFraseInput = {
    where: ComentariWhereUniqueInput
    data: XOR<ComentariUpdateWithoutFraseInput, ComentariUncheckedUpdateWithoutFraseInput>
  }

  export type ComentariUpdateManyWithWhereWithoutFraseInput = {
    where: ComentariScalarWhereInput
    data: XOR<ComentariUpdateManyMutationInput, ComentariUncheckedUpdateManyWithoutFraseInput>
  }

  export type ComentariScalarWhereInput = {
    AND?: ComentariScalarWhereInput | ComentariScalarWhereInput[]
    OR?: ComentariScalarWhereInput[]
    NOT?: ComentariScalarWhereInput | ComentariScalarWhereInput[]
    id?: IntFilter<"Comentari"> | number
    contingut?: StringFilter<"Comentari"> | string
    fraseId?: IntFilter<"Comentari"> | number
    data?: DateTimeFilter<"Comentari"> | Date | string
    autor?: StringNullableFilter<"Comentari"> | string | null
    resposta?: IntNullableFilter<"Comentari"> | number | null
    createdAt?: DateTimeFilter<"Comentari"> | Date | string
    updatedAt?: DateTimeFilter<"Comentari"> | Date | string
  }

  export type FraseCreateWithoutComentarisInput = {
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lavabo: LavaboCreateNestedOneWithoutFrasesInput
  }

  export type FraseUncheckedCreateWithoutComentarisInput = {
    id?: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    lavaboId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FraseCreateOrConnectWithoutComentarisInput = {
    where: FraseWhereUniqueInput
    create: XOR<FraseCreateWithoutComentarisInput, FraseUncheckedCreateWithoutComentarisInput>
  }

  export type FraseUpsertWithoutComentarisInput = {
    update: XOR<FraseUpdateWithoutComentarisInput, FraseUncheckedUpdateWithoutComentarisInput>
    create: XOR<FraseCreateWithoutComentarisInput, FraseUncheckedCreateWithoutComentarisInput>
    where?: FraseWhereInput
  }

  export type FraseUpdateToOneWithWhereWithoutComentarisInput = {
    where?: FraseWhereInput
    data: XOR<FraseUpdateWithoutComentarisInput, FraseUncheckedUpdateWithoutComentarisInput>
  }

  export type FraseUpdateWithoutComentarisInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lavabo?: LavaboUpdateOneRequiredWithoutFrasesNestedInput
  }

  export type FraseUncheckedUpdateWithoutComentarisInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    lavaboId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LavaboCreateWithoutRessenyesInput = {
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    frases?: FraseCreateNestedManyWithoutLavaboInput
  }

  export type LavaboUncheckedCreateWithoutRessenyesInput = {
    id?: number
    edifici: string
    planta: string
    genere: $Enums.Genere
    createdAt?: Date | string
    updatedAt?: Date | string
    frases?: FraseUncheckedCreateNestedManyWithoutLavaboInput
  }

  export type LavaboCreateOrConnectWithoutRessenyesInput = {
    where: LavaboWhereUniqueInput
    create: XOR<LavaboCreateWithoutRessenyesInput, LavaboUncheckedCreateWithoutRessenyesInput>
  }

  export type LavaboUpsertWithoutRessenyesInput = {
    update: XOR<LavaboUpdateWithoutRessenyesInput, LavaboUncheckedUpdateWithoutRessenyesInput>
    create: XOR<LavaboCreateWithoutRessenyesInput, LavaboUncheckedCreateWithoutRessenyesInput>
    where?: LavaboWhereInput
  }

  export type LavaboUpdateToOneWithWhereWithoutRessenyesInput = {
    where?: LavaboWhereInput
    data: XOR<LavaboUpdateWithoutRessenyesInput, LavaboUncheckedUpdateWithoutRessenyesInput>
  }

  export type LavaboUpdateWithoutRessenyesInput = {
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frases?: FraseUpdateManyWithoutLavaboNestedInput
  }

  export type LavaboUncheckedUpdateWithoutRessenyesInput = {
    id?: IntFieldUpdateOperationsInput | number
    edifici?: StringFieldUpdateOperationsInput | string
    planta?: StringFieldUpdateOperationsInput | string
    genere?: EnumGenereFieldUpdateOperationsInput | $Enums.Genere
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    frases?: FraseUncheckedUpdateManyWithoutLavaboNestedInput
  }

  export type FraseCreateManyLavaboInput = {
    id?: number
    contingut: string
    idioma: $Enums.Idioma
    any: number
    resposta?: number | null
    fitxerImg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RessenyaCreateManyLavaboInput = {
    id?: number
    autor?: string | null
    contingut: string
    puntuacio: number
    data?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FraseUpdateWithoutLavaboInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentaris?: ComentariUpdateManyWithoutFraseNestedInput
  }

  export type FraseUncheckedUpdateWithoutLavaboInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comentaris?: ComentariUncheckedUpdateManyWithoutFraseNestedInput
  }

  export type FraseUncheckedUpdateManyWithoutLavaboInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    idioma?: EnumIdiomaFieldUpdateOperationsInput | $Enums.Idioma
    any?: IntFieldUpdateOperationsInput | number
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    fitxerImg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaUpdateWithoutLavaboInput = {
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaUncheckedUpdateWithoutLavaboInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessenyaUncheckedUpdateManyWithoutLavaboInput = {
    id?: IntFieldUpdateOperationsInput | number
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    contingut?: StringFieldUpdateOperationsInput | string
    puntuacio?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariCreateManyFraseInput = {
    id?: number
    contingut: string
    data?: Date | string
    autor?: string | null
    resposta?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComentariUpdateWithoutFraseInput = {
    contingut?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariUncheckedUpdateWithoutFraseInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentariUncheckedUpdateManyWithoutFraseInput = {
    id?: IntFieldUpdateOperationsInput | number
    contingut?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableIntFieldUpdateOperationsInput | number | null
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