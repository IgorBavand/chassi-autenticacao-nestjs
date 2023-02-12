import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestInterceptor } from './modules/common/errors/interceptors/bad-request.interceptor';
import { ConflictInterceptor } from './modules/common/errors/interceptors/conflict.interceptor';
import { DataBaseInterceptor } from './modules/common/errors/interceptors/database-error.interceptor';
import { UnauthorizedInterceptor } from './modules/common/errors/interceptors/unauthorized.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new BadRequestInterceptor());
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new DataBaseInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());

  await app.listen(3000);
}
bootstrap();
