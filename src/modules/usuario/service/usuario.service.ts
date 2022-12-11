import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioRepository } from '../repository/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async cadastrarUsuario(request: CreateUsuarioDto): Promise<UsuarioEntity> {
    return this.usuarioRepository.cadastrarUsuario(request);
  }

  async buscarTodos(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.buscarTodos();
  }

  async findByEmail(email: string): Promise<UsuarioEntity> {
    return this.usuarioRepository.findByEmail(email);
  }
}
