import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/autenticacao/guards/jwt-auth.guard';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioService } from '../service/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async cadastrar(@Body() request: CreateUsuarioDto): Promise<UsuarioEntity> {
    return this.usuarioService.cadastrarUsuario(request);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async buscar(): Promise<UsuarioEntity[]> {
    return this.usuarioService.buscarTodos();
  }
}
