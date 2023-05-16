import { Command } from 'clipanion';
import { $$ } from 'utils';

export class Refresh extends Command {
  static paths = [['refresh']];

  async execute(): Promise<number | void> {
    await $$`yarn clean`;
    await $$`yarn`;
  }
}
