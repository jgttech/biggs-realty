declare type KeysAndValuesOf<T> = T extends Record<infer K, infer V>
  ? {
      Keys: keyof Record<K, V>;
      Values: Record<K, V>[keyof Record<K, V>];
    }
  : never;

declare type PackageJson = {
  name: string;
  version?: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
  template?: {
    cdn: string;
    user: string;
  };
};

declare type StringWithAutocomplete<T> = T | (string & Record<never, never>);
