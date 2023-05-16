import type { ParsedPath } from 'path';

export type Workspace = {
  path: ParsedPath;
  packageJson: PackageJson;
};
