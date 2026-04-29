CREATE SCHEMA `faxina_db`;

CREATE TABLE `faxina_db`.`usuario` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `cpf` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `tipo_usuario` ENUM("cliente", "funcionario", "adm") NULL,
  `password_hash` VARCHAR(255) NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE);

  CREATE TABLE `faxina_db`.`agendamento` (
  `agendamento_id` INT NOT NULL,
  `data_hora` DATETIME NULL,
  `endereco_cliente` VARCHAR(100) NULL,
  PRIMARY KEY (`agendamento_id`),
  UNIQUE INDEX `agendamento_id_UNIQUE` (`agendamento_id` ASC) VISIBLE);

ALTER TABLE `faxina_db`.`agendamento` 
ADD COLUMN `hora` TIME NULL AFTER `data`,
ADD COLUMN `servico` ENUM("residencial", "comercial", "profunda") NULL AFTER `endereco_cliente`,
CHANGE COLUMN `data_hora` `data` DATE NULL DEFAULT NULL ;
