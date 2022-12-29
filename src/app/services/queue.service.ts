import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  getQueue = () => {
    return new Promise<QueueConfiguration>((result, reject) => {
      setTimeout(() => {
        result({
          server: 'localhost',
          queueName: 'PDFTransformation',
          exchange: 'CapturePDFExchange',
          username: 'guest',
          password: 'guest',
          virtualhost: '/',
          port: 5672,
          prefetch: 5,
          prefetchSize: 5,
          heartbeat: 5
        } as QueueConfiguration)
      }, 5000)
    })
  }
}

export interface QueueConfiguration {
  server: string
  queueName: string
  exchange: string
  username: string,
  password: string,
  virtualhost: string,
  port: number,
  prefetchSize: number,
  prefetch: number,
  heartbeat: number,
}
