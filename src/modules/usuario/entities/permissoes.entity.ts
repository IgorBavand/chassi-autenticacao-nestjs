import { Permissao } from '@prisma/client';

export class PermissaoEntity implements Permissao {
  id: number;
  codigo: string;
  descricao: string;
  dataCadastro: Date;
}
