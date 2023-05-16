import type { Workspace } from 'models/Workspace';
import { Command, Option } from 'clipanion';
import { readdirSync, ensureFileSync, writeFileSync, rmSync, existsSync } from 'fs-extra';
import { join, parse } from 'path';
import { getUpdatedTag, getWorkspaces, getPackageJson, createEmbeddableTemplate } from 'utils';

export class Build extends Command {
  static paths = [['build']];

  project = Option.String({ required: true });
  embeddable = Option.Boolean('-e,--embeddable');
  patch = Option.Boolean('-p,--patch');
  minor = Option.Boolean('-m,--minor');
  major = Option.Boolean('-M,--major');

  async execute(): Promise<number | void> {
    const packageJson = getPackageJson();
    const name = packageJson.name;
    const cdn = packageJson?.template?.cdn as string;
    const user = packageJson?.template?.user as string;
    const update = this.major ? 'major' : this.minor ? 'minor' : this.patch ? 'patch' : undefined;
    const version = await getUpdatedTag(update);
    const wksp = getWorkspaces(this.project) as Workspace;
    const distPath = join(wksp.path.dir, 'dist');
    const assetsPath = join(distPath, 'assets');
    const assets = readdirSync(assetsPath);
    const files = assets.map(file => parse(join(assetsPath, file)));
    const indexPath = join(distPath, 'index.js');
    const removeAssets = ['index.html', 'manifest.json', 'biggs-realty.png'];

    if (this.embeddable) {
      ensureFileSync(indexPath);
      writeFileSync(indexPath, createEmbeddableTemplate({
        baseUrl: cdn,
        project: name,
        user,
        version,
        files,
      }));

      removeAssets.forEach(file => {
        const target = join(distPath, file);

        if (existsSync(target)) {
          rmSync(target, { recursive: true });
        }
      });

      console.log('READY FOR RELEASE VERSION:'.yellow.underline, version.green.bold);
    }
  }
}
