import { randomId } from './script';

export function getRandomId(max) {
  randomId = Math.floor(Math.random() * max);
}
