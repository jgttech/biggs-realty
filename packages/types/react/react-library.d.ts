declare type FC<T = {}> = React.FC<T>;
declare type ReactNode = React.ReactNode;
declare type Children = ReactNode | ReactNode[];
declare type JSXElementConstructor<T> = React.JSXElementConstructor<T>;
declare type ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>
> = React.ReactElement<P, T>;
declare type ForwardRefRenderFunction<T, P = {}> = React.ForwardRefRenderFunction<T, P>;
declare type RefObject<T> = React.RefObject<T>;
