import { Command, Option } from 'clipanion';
import AdmZip from 'adm-zip';
import { join } from 'path';
import { ensureDirSync, ensureFileSync, existsSync, rmSync, writeFileSync } from 'fs-extra';
import { $$, getUpdatedTag, getLatestTag, getWorkspaces, getPackageJson } from 'utils';
import { PATHS } from 'utils/constants';
import type { Workspace } from 'models/Workspace';

export class Release extends Command {
  static paths = [['release']];

  username = Option.String({ required: true });
  repo = Option.String({ required: true });
  patch = Option.Boolean('-p,--patch');
  minor = Option.Boolean('-m,--minor');
  major = Option.Boolean('-M,--major');

  async execute(): Promise<number | void> {
    const packageJson = getPackageJson();
    const name = packageJson.name;
    const cdn = packageJson?.template?.cdn as string;
    const user = packageJson?.template?.user as string;
    const update = this.major ? 'major' : this.minor ? 'minor' : this.patch ? 'patch' : 'patch';
    const wksp = getWorkspaces('@biggs-realty/chatbot-embed') as Workspace;
    const buildDir = join(wksp.path.dir, 'dist');
    const current = await getLatestTag();
    const version = await getUpdatedTag(update);
    const commit = `Release ${version}`;
    const zip = new AdmZip();
    const archiveDir = join(PATHS.REPO, 'release', version);
    const archiveFile = join(archiveDir, 'dist.zip');
    const embedTxt = join(archiveDir, 'embed.txt');
    const script = `${cdn}/${user}/${name}/${version}/apps/chatbot-embed/dist/index.js`;

    console.log('Release:', current.yellow.bold, 'to', version.green.bold);

    if (existsSync(archiveFile)) {
      rmSync(archiveFile);
    }

    if (existsSync(embedTxt)) {
      rmSync(embedTxt);
    }

    // Ensure that the archive directory exists.
    ensureDirSync(archiveDir);
    ensureFileSync(embedTxt);

    zip.addLocalFolder(buildDir);
    zip.writeZip(archiveFile);

    // Create the TXT file for embedding that release.
    writeFileSync(embedTxt, `<script type='module' src='${script}'></script>`);

    await $$`yarn build`;
    await $$`git fetch`;
    await $$`git add .`;
    await $$`git commit -m ${commit}`;
    await $$`git push`;
    await $$`gh release create ${version} ${archiveFile}`;
  }
}
