/**
 * 递归类型
 *
 * @example <caption>递归类型示例用法 - 不改变值类型</caption>
 * type X<T> = Recursive<T>
 *
 * @example <caption>递归类型示例用法 - 改变值类型</caption>
 * type Y<T> = Recursive<T, number>;
 */
type Recursive<T, V = any> = {
  [U in keyof T]: T[U] extends object ? Recursive<T[U], V> : V extends undefined ? T[U] : V;
};

/**
 * 移除只读属性
 */
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * 改变值为 Promise
 */
type Deferred<T> = {
  [P in keyof T]: Promise<T[P]>;
};

/**
 * 添加代理
 */
type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}

// Partial      - 转换可选
// Nullable     - 转换为可 null
// Required     - 转换为必选
// Readonly     - 转换为只读
// Pick         - 取部分
// Exclude      - 排除
// Extract      - 提取
// NonNullable  - 非null
// ReturnType   - 函数返回值
// InstanceType - 获取构造函数类型的实例类型。
// Omit
// Record
