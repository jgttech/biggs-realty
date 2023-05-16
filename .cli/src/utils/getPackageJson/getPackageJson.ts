import { readJsonSync } from 'fs-extra';
import { join } from 'path';
import { PATHS } from '../constants';

export const getPackageJson = () => {
  return readJsonSync(join(PATHS.REPO, 'package.json'), 'utf-8') as PackageJson;
};
