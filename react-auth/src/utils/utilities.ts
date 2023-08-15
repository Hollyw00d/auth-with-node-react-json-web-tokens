export default class Utilities {
  getYear() {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    return year;
  }
}
