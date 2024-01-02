import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      // clean the request
      whitelist: true,
      // Send message
      forbidNonWhitelisted: true,
    }),
  );
  
  // Aument endpoint global
  app.setGlobalPrefix('api/v2')
  await app.listen(3000);
}
bootstrap();
