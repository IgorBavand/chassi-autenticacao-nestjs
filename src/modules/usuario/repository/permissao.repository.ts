import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissaoEntity } from '../entities/permissoes.entity';

@Injectable()
export class PermissaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async buscarPermissoes(): Promise<PermissaoEntity[]> {
    return this.prisma.permissao.findMany();
  }
}
