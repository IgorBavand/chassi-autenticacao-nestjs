import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CryptoService } from 'src/shared/services/crypto.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    private readonly prisma: PrismaService,
    private cryptoService: CryptoService,
  ) {}

  async cadastrarUsuario(request: CreateUsuarioDto): Promise<UsuarioEntity> {
    const user = await this.prisma.usuario.create({
      data: {
        ...request,
        senha: await this.cryptoService.generateHash(request.senha),
      },
    });

    return {
      ...user,
      senha: undefined,
    };
  }

  async buscarTodos(): Promise<UsuarioEntity[]> {
    return this.prisma.usuario.findMany({
      include: {
        permissoes: {
          select: {
            permissao: {
              select: {
                codigo: true,
              },
            },
          },
        },
      },
    });
  }

  async findByEmail(email: string): Promise<UsuarioEntity> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      },
      include: {
        permissoes: true,
      },
    });
  }
}
