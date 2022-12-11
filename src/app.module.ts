import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AutenticacaoModule } from './modules/autenticacao/autenticacao.module';

@Module({
  imports: [UsuarioModule, AutenticacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
