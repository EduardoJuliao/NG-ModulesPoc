import { Injectable } from '@angular/core';
import { ApiClientService } from 'api-client';

@Injectable()
export class AppService {
  constructor(private client: ApiClientService) {}

  public async getTodo<T>(): Promise<T> {
    return this.client.get({
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    });
  }
}
