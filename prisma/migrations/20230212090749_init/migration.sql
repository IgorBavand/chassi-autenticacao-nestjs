-- CreateTable
CREATE TABLE `permissoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data_cadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissao_usuario` (
    `usuario_id` INTEGER NOT NULL,
    `permissao_id` INTEGER NOT NULL,

    PRIMARY KEY (`usuario_id`, `permissao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `permissao_usuario` ADD CONSTRAINT `permissao_usuario_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissao_usuario` ADD CONSTRAINT `permissao_usuario_permissao_id_fkey` FOREIGN KEY (`permissao_id`) REFERENCES `permissoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
