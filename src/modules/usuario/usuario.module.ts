import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { UsuarioController } from './controller/usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioRepository } from './repository/usuario.repository';
import { CryptoService } from 'src/shared/services/crypto.service';
import { PermissaoRepository } from './repository/permissao.repository';

@Module({
  providers: [
    UsuarioService,
    PrismaService,
    UsuarioRepository,
    CryptoService,
    PermissaoRepository,
  ],
  controllers: [UsuarioController],
  exports: [UsuarioService, UsuarioRepository, PrismaService],
})
export class UsuarioModule {}
