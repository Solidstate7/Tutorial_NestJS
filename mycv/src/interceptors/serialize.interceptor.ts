import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass, plainToInstance } from 'class-transformer';

interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler
    // console.log('Running before the handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something befoe the response is sent out
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
          // class to json
        });
        // console.log('Running before response is sent out', data);
      }),
    );
  }
}
