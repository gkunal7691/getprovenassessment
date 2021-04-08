import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  setCache(name: string, val: string): void {
    const days = new Date();
    days.setTime(days.getTime() + 1 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + days.toUTCString();
    document.cookie =
      'Authenticate-' + name + '=' + val + ';' + expires + ';path=/';
  }

  getCache(): any {
    const coookie = document.cookie.split(';');
    const userName = coookie[0].split('=')[1];
    if (userName) {
      return userName;
    }
    return null;
  }

  removeCache(name): void {
    document.cookie =
      'Authenticate-' +
      name +
      '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}
