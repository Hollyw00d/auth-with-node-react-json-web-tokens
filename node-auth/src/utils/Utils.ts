import path from 'path';

export default class Utils {
  // Return absolute directory path
  getDirRootPath() {
    return path.resolve(`${process.cwd()}`);
  }
}
