-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.3-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para thincode_app
DROP DATABASE IF EXISTS `thincode_app`;
CREATE DATABASE IF NOT EXISTS `thincode_app` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `thincode_app`;

-- Volcando estructura para tabla thincode_app.catcatalog
DROP TABLE IF EXISTS `catcatalog`;
CREATE TABLE IF NOT EXISTS `catcatalog` (
  `idCatCatalog` int(11) NOT NULL AUTO_INCREMENT,
  `idCatCatalogParent` int(10) DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `configuration` int(10) unsigned zerofill DEFAULT NULL,
  `creationDate` datetime DEFAULT NULL,
  `modificationDate` datetime DEFAULT NULL,
  `idCreationUser` int(10) unsigned zerofill NOT NULL,
  `idModificationUser` int(10) unsigned zerofill NOT NULL,
  `idCatStatus` int(11) NOT NULL,
  PRIMARY KEY (`idCatCatalog`),
  KEY `fkCatEstatus1` (`idCatStatus`),
  CONSTRAINT `fkCatEstatus1` FOREIGN KEY (`idCatStatus`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.catcatalog: ~8 rows (aproximadamente)
DELETE FROM `catcatalog`;
/*!40000 ALTER TABLE `catcatalog` DISABLE KEYS */;
INSERT INTO `catcatalog` (`idCatCatalog`, `idCatCatalogParent`, `description`, `configuration`, `creationDate`, `modificationDate`, `idCreationUser`, `idModificationUser`, `idCatStatus`) VALUES
	(1, 0, 'Estatus', 0000000000, '2022-07-22 23:38:29', '2022-07-22 23:38:33', 0000000001, 0000000001, 1),
	(23, 1, 'Perfiles', 0000000000, '2020-10-06 19:12:29', '2020-10-06 19:12:29', 0000000001, 0000000001, 1),
	(99, 0, 'privilegios', 0000000000, '2022-07-29 02:30:13', '2022-07-29 02:30:13', 0000000001, 0000000001, 1),
	(100, 99, 'Menu', 0000000000, '2022-07-29 00:42:34', '2022-07-29 00:42:34', 0000000001, 0000000001, 1),
	(101, 100, 'SubMenu', 0000000000, '2022-07-29 00:48:35', '2022-07-29 00:48:36', 0000000001, 0000000001, 1),
	(102, 0, 'Page', 0000000000, '2022-07-29 01:56:50', '2022-07-29 01:56:51', 0000000001, 0000000001, 1),
	(103, 0, 'Componente', 0000000000, '2022-07-29 01:59:32', '2022-07-29 01:59:33', 0000000001, 0000000001, 1),
	(104, 0, 'GrupoGrid', 0000000000, '2022-08-09 12:16:00', '2022-08-09 12:16:00', 0000000001, 0000000001, 1),
	(201, 200, 'Administracion', 0000000000, '2022-07-29 00:49:11', '2022-07-29 00:49:11', 0000000001, 0000000001, 1);
/*!40000 ALTER TABLE `catcatalog` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.catcatalogvalue
DROP TABLE IF EXISTS `catcatalogvalue`;
CREATE TABLE IF NOT EXISTS `catcatalogvalue` (
  `idCatCatalogValue` int(11) NOT NULL AUTO_INCREMENT,
  `idCatCatalog` int(11) NOT NULL,
  `idCatParentValue` int(11) DEFAULT NULL,
  `description` varchar(600) NOT NULL,
  `creationDate` datetime DEFAULT NULL,
  `modificationDate` datetime DEFAULT NULL,
  `idCreationUser` int(10) unsigned zerofill NOT NULL,
  `idModificationUser` int(10) unsigned zerofill NOT NULL,
  `idCatStatus` int(11) NOT NULL,
  PRIMARY KEY (`idCatCatalogValue`),
  KEY `fkCatCatalogo2` (`idCatCatalog`),
  KEY `fkCatParentValue` (`idCatParentValue`),
  CONSTRAINT `fkCatCatalogo2` FOREIGN KEY (`idCatCatalog`) REFERENCES `catcatalog` (`idCatCatalog`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkCatParentValue` FOREIGN KEY (`idCatParentValue`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.catcatalogvalue: ~8 rows (aproximadamente)
DELETE FROM `catcatalogvalue`;
/*!40000 ALTER TABLE `catcatalogvalue` DISABLE KEYS */;
INSERT INTO `catcatalogvalue` (`idCatCatalogValue`, `idCatCatalog`, `idCatParentValue`, `description`, `creationDate`, `modificationDate`, `idCreationUser`, `idModificationUser`, `idCatStatus`) VALUES
	(1, 1, 0, 'Activo', '2020-10-06 19:12:32', '2020-10-06 19:12:32', 0000000001, 0000000001, 1),
	(2, 104, NULL, 'users_grid', '2022-08-09 12:17:06', '2022-08-09 12:17:07', 0000000001, 0000000001, 1),
	(3, 104, NULL, 'perfil_grid', '2022-08-09 12:19:31', '2022-08-09 12:19:31', 0000000001, 0000000001, 1),
	(144, 23, 0, 'Administrador', '2020-10-06 19:12:51', '2020-10-06 19:12:51', 0000000001, 0000000001, 1),
	(185, 1, 0, 'Inactivo', '2022-07-25 03:01:36', '2022-07-25 03:01:37', 0000000001, 0000000001, 1),
	(300, 23, 0, 'Coordinador', '2022-07-25 19:38:22', '2022-07-25 19:38:22', 0000000001, 0000000001, 1),
	(307, 101, 306, 'Administración', '2022-07-29 02:19:04', '2022-07-29 02:19:04', 0000000001, 0000000001, 1),
	(308, 101, 307, 'Usuarios', '2022-07-29 02:21:20', '2022-07-29 02:21:20', 0000000001, 0000000001, 1);
/*!40000 ALTER TABLE `catcatalogvalue` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.confdatagrid
DROP TABLE IF EXISTS `confdatagrid`;
CREATE TABLE IF NOT EXISTS `confdatagrid` (
  `idconfdatagrid` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `referencedataa` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idconfdatagrid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.confdatagrid: ~9 rows (aproximadamente)
DELETE FROM `confdatagrid`;
/*!40000 ALTER TABLE `confdatagrid` DISABLE KEYS */;
INSERT INTO `confdatagrid` (`idconfdatagrid`, `name`, `referencedataa`, `tipo`) VALUES
	(1, 'ESTATUS', '', 'string'),
	(2, 'USUARIO', '', 'string'),
	(3, 'NOMBRE', '', 'string'),
	(4, 'APELLIDO PATERNO', '', 'string'),
	(5, 'APELLIDO MATERNO', '', 'string'),
	(6, 'CORREO', '', 'string'),
	(7, 'ULTIMO ACCESO AL SISTEMA', '', 'date'),
	(8, 'ULTIMA MODIFICACION DE CONTRASEÑA', '', 'date'),
	(9, 'IDUSER', '', 'number');
/*!40000 ALTER TABLE `confdatagrid` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.configurations
DROP TABLE IF EXISTS `configurations`;
CREATE TABLE IF NOT EXISTS `configurations` (
  `idConfiguration` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(50) NOT NULL COMMENT 'Identificador de la pregunta.',
  `value` varchar(1000) NOT NULL COMMENT 'Sirve para identificar la caracteristica añadida, Ya sea Categoría, Dominio o Dimensión',
  PRIMARY KEY (`idConfiguration`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.configurations: ~8 rows (aproximadamente)
DELETE FROM `configurations`;
/*!40000 ALTER TABLE `configurations` DISABLE KEYS */;
INSERT INTO `configurations` (`idConfiguration`, `key`, `value`) VALUES
	(1, 'key-secret', 'secret'),
	(2, 'psw-encrypt', 'jKuhB17GcZ2B'),
	(3, 'mail-psw', 'rlJ7alWVnGadgKlXjoLX2Rx7EHcFYyhd'),
	(4, 'mail-account', 'advice.system@thincode.com'),
	(5, 'mail-port', '587'),
	(6, 'mail-host', 'mailsettings.thincode.net'),
	(7, 'mail-subject', 'Restablece la contraseña de tu cuenta'),
	(8, 'mail-format', 'La contraseña de tu cuenta ha sido restablecida por una temporal.<br/>&emsp;usuario : <b>{user.userName}</b><br/>&emsp;contraseña : <b>{password}</b><br/><br/>Da clic <a href="%s">aquí</a> para terminar el proceso de cambio de contraseña.');
/*!40000 ALTER TABLE `configurations` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.privilegios
DROP TABLE IF EXISTS `privilegios`;
CREATE TABLE IF NOT EXISTS `privilegios` (
  `idPrivilegio` int(11) NOT NULL AUTO_INCREMENT,
  `parentPrivilegio` int(11) DEFAULT NULL,
  `descripcion` varchar(45) NOT NULL,
  `label` varchar(45) DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPrivilegio`),
  KEY `fk_tipo_idx` (`tipo`),
  CONSTRAINT `fk_tipo` FOREIGN KEY (`tipo`) REFERENCES `catcatalog` (`idCatCatalog`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.privilegios: ~18 rows (aproximadamente)
DELETE FROM `privilegios`;
/*!40000 ALTER TABLE `privilegios` DISABLE KEYS */;
INSERT INTO `privilegios` (`idPrivilegio`, `parentPrivilegio`, `descripcion`, `label`, `link`, `tipo`) VALUES
	(1, 0, 'Menu usuario', 'Menu Usuario', NULL, 100),
	(2, 1, 'Mi perfil', 'Mi perfil', NULL, 101),
	(3, 2, 'Mi perfil', 'Mi perfil', '/home/perfil/mi-perfil', 102),
	(4, 3, 'Generales', 'Mi-Perfil', NULL, 103),
	(5, 4, 'GuardarGenerales', 'Guardar', NULL, 103),
	(6, 4, 'Contrasena', 'Contraseña', NULL, 103),
	(7, 6, 'GuardarContrasena', 'Gurdar', NULL, 103),
	(8, 2, 'Ayuda', 'Ayuda', '/home', 102),
	(9, 2, 'Salir', 'Salir', '', 102),
	(100, 0, 'Menu principal', 'Menu Principal', NULL, 100),
	(101, 100, 'Administracion', 'Administracion', NULL, 101),
	(102, 101, 'Usuarios', 'Usuarios', '/home/administracion/usuarios', 102),
	(103, 102, 'Ver usuario', 'Ver usuario', 'fa fa-eye', 103),
	(104, 102, 'Crear usuario', 'Crear usuario', 'fa fa-user-plus', 103),
	(105, 102, 'Activar usuario', 'Activar usuario', 'fa fa-check', 103),
	(106, 102, 'Desactivar usuario', 'Desactivar usuario', 'fa fa-remove', 103),
	(107, 102, 'Exportar grid', 'Exportar grid', 'fa fa-cloud-download', 103),
	(150, 101, 'Perfiles', 'Perfiles', '/home/administracion/perfiles', 102),
	(250, 100, 'Coordinación de Proyectos', 'Coordinación de Proyectos', NULL, 101),
	(251, 250, 'Mis proyectos', 'Mis proyectos', '/home/proyectos/proyectos', 102);
/*!40000 ALTER TABLE `privilegios` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.profileprivilegios
DROP TABLE IF EXISTS `profileprivilegios`;
CREATE TABLE IF NOT EXISTS `profileprivilegios` (
  `idProfilePrivilegio` int(11) NOT NULL,
  `status_pp` int(11) DEFAULT NULL,
  `fkProfile` int(11) NOT NULL,
  `fkPrivilegios` int(11) NOT NULL,
  PRIMARY KEY (`idProfilePrivilegio`),
  KEY `fk_catcatalogvalue_has_privilegios_privilegios1_idx` (`fkPrivilegios`),
  KEY `fk_catcatalogvalue_has_privilegios_catcatalogvalue1_idx` (`fkProfile`),
  KEY `fk_status_idx` (`status_pp`),
  CONSTRAINT `fk_catcatalogvalue_has_privilegios_catcatalogvalue1` FOREIGN KEY (`fkProfile`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_catcatalogvalue_has_privilegios_privilegios1` FOREIGN KEY (`fkPrivilegios`) REFERENCES `privilegios` (`idPrivilegio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_status` FOREIGN KEY (`status_pp`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.profileprivilegios: ~22 rows (aproximadamente)
DELETE FROM `profileprivilegios`;
/*!40000 ALTER TABLE `profileprivilegios` DISABLE KEYS */;
INSERT INTO `profileprivilegios` (`idProfilePrivilegio`, `status_pp`, `fkProfile`, `fkPrivilegios`) VALUES
	(1, 1, 144, 1),
	(2, 1, 300, 1),
	(3, 1, 144, 2),
	(4, 1, 144, 3),
	(5, 1, 144, 4),
	(6, 1, 144, 5),
	(7, 1, 144, 6),
	(8, 1, 144, 7),
	(9, 1, 300, 2),
	(10, 1, 144, 100),
	(11, 1, 144, 101),
	(12, 1, 144, 8),
	(13, 1, 144, 102),
	(14, 1, 144, 150),
	(15, 1, 144, 250),
	(16, 1, 144, 251),
	(17, 1, 144, 9),
	(18, 1, 144, 104),
	(19, 1, 144, 105),
	(20, 1, 144, 106),
	(21, 1, 144, 107),
	(22, 1, 144, 103);
/*!40000 ALTER TABLE `profileprivilegios` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.routesaccess
DROP TABLE IF EXISTS `routesaccess`;
CREATE TABLE IF NOT EXISTS `routesaccess` (
  `idRouteAccess` int(11) NOT NULL AUTO_INCREMENT,
  `idCatProfile` int(11) NOT NULL COMMENT 'Identificador de la pregunta.',
  `uri` tinytext NOT NULL COMMENT 'Sirve para identificar la caracteristica añadida, Ya sea Categoría, Dominio o Dimensión',
  PRIMARY KEY (`idRouteAccess`),
  KEY `FK_routesaccess_catcatalogvalue` (`idCatProfile`),
  CONSTRAINT `FK_routesaccess_catcatalogvalue` FOREIGN KEY (`idCatProfile`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.routesaccess: ~2 rows (aproximadamente)
DELETE FROM `routesaccess`;
/*!40000 ALTER TABLE `routesaccess` DISABLE KEYS */;
INSERT INTO `routesaccess` (`idRouteAccess`, `idCatProfile`, `uri`) VALUES
	(1, 144, '/api/v1/*'),
	(2, 300, '/api/v1/*');
/*!40000 ALTER TABLE `routesaccess` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.sessions
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `idSession` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL COMMENT 'Identificador de la pregunta.',
  `token` varchar(1000) NOT NULL COMMENT 'Sirve para identificar la caracteristica añadida, Ya sea Categoría, Dominio o Dimensión',
  `status` tinyint(1) unsigned zerofill DEFAULT NULL,
  `ip` tinytext DEFAULT NULL,
  `creationDate` datetime DEFAULT NULL,
  PRIMARY KEY (`idSession`),
  KEY `fkUsers21` (`idUser`),
  CONSTRAINT `fkUsers21` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla thincode_app.sessions: ~1 rows (aproximadamente)
DELETE FROM `sessions`;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`idSession`, `idUser`, `token`, `status`, `ip`, `creationDate`) VALUES
	(44, 1, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImF1dGhvcml0aWVzIjpbIkFkbWluaXN0cmFkb3IiXSwiaWF0IjoxNjYxMTg3Mjk5LCJleHAiOjE2NjEyNzM2OTl9.vrQ01DR6OpCjrvfvc1UOC4vZHi0peA_2wWvJxE_8obJUk_ot5yWwfRqr6PJvZUAGh3h6iiFEd1PvtNjQ7v8TOQ', 1, '200.68.186.109', '2022-08-22 11:54:59'),
	(46, 2, 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDb29yZGluYWRvcjEiLCJhdXRob3JpdGllcyI6WyJDb29yZGluYWRvciJdLCJpYXQiOjE2NTk3MzkzMjYsImV4cCI6MTY1OTgyNTcyNn0.-l0aLa20THJFvIorcxf0HY2Pn8yNPnBK_5TOUZdX5jeRIJUqgdMJJFURF5PetR3tHT-kIBlgpehtwYwmw3HNkQ', 1, '200.68.173.125', '2022-08-05 17:42:06');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(40) NOT NULL,
  `password` longtext CHARACTER SET latin1 NOT NULL,
  `name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `firstLastName` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `secondLastName` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `email` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `idCatProfile` int(11) NOT NULL,
  `lastLoginDate` datetime DEFAULT NULL,
  `creationDate` datetime NOT NULL,
  `modificationDate` datetime NOT NULL,
  `idCreationUser` int(10) unsigned zerofill DEFAULT NULL,
  `idModificationUser` int(10) unsigned zerofill DEFAULT NULL,
  `idCatStatus` int(11) NOT NULL,
  PRIMARY KEY (`idUser`),
  KEY `fkCatEstatus` (`idCatStatus`),
  KEY `fkCatPerfil` (`idCatProfile`),
  CONSTRAINT `fkCatEstatus` FOREIGN KEY (`idCatStatus`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkCatPerfil` FOREIGN KEY (`idCatProfile`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.user: ~4 rows (aproximadamente)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`idUser`, `userName`, `password`, `name`, `firstLastName`, `secondLastName`, `email`, `idCatProfile`, `lastLoginDate`, `creationDate`, `modificationDate`, `idCreationUser`, `idModificationUser`, `idCatStatus`) VALUES
	(1, 'Admin', '$2a$10$Sv5841fdCN54KaTlZne0sO/J4bYyII9FyOf645rNVVc5rULBLh5.C', 'jose', 'duran', 'duran', 'jose@thincode.com', 144, '2022-08-22 11:54:59', '2022-07-22 15:38:56', '2022-08-22 11:54:59', 0000000001, 0000000001, 1),
	(2, 'Coordinador1', '$2a$10$5oaRgTnTx41iEH0iTQWAH.nkSx0M3b.qvWCd5O04yBmQFfgf3X2k6', 'aldo', 'turijan', 'barreto', 'aldo@thincode.com', 300, '2022-08-05 17:42:06', '2022-07-28 17:37:18', '2022-08-05 17:42:06', 0000000001, 0000000001, 1),
	(3, 'Coordinador2', '$2a$10$TngLRspJWslODfVdAnle2uFBFYwmwdY/3ZU.Bqve9RuvY1K9Sc9c2', 'cordinador2', 'cordinador2', 'cordinador2', 'algo@algo.com', 300, '2022-07-29 15:13:40', '2022-07-28 18:55:55', '2022-07-29 15:13:40', 0000000001, 0000000001, 1),
	(4, 'UserSystem', 'confSystem', 'confSystem', 'confSystem', 'confSystem', 'confSystem', 1, '2022-08-09 16:16:29', '2022-08-09 16:16:42', '2022-08-09 16:16:42', 0000000001, 0000000001, 185);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- Volcando estructura para tabla thincode_app.userdatagrid
DROP TABLE IF EXISTS `userdatagrid`;
CREATE TABLE IF NOT EXISTS `userdatagrid` (
  `iduserconfig` int(11) NOT NULL,
  `visible` varchar(45) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `orderby` varchar(50) DEFAULT NULL,
  `filterby` varchar(50) DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  `user` int(11) NOT NULL,
  `datagrid` int(11) NOT NULL,
  PRIMARY KEY (`iduserconfig`),
  KEY `fk_userdatagrid_user1_idx` (`user`),
  KEY `fk_userdatagrid_confdatagrid1_idx` (`datagrid`),
  KEY `fk_grupo` (`group`),
  CONSTRAINT `fk_grupo` FOREIGN KEY (`group`) REFERENCES `catcatalogvalue` (`idCatCatalogValue`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_userdatagrid_confdatagrid1` FOREIGN KEY (`datagrid`) REFERENCES `confdatagrid` (`idconfdatagrid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_userdatagrid_user1` FOREIGN KEY (`user`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Volcando datos para la tabla thincode_app.userdatagrid: ~9 rows (aproximadamente)
DELETE FROM `userdatagrid`;
/*!40000 ALTER TABLE `userdatagrid` DISABLE KEYS */;
INSERT INTO `userdatagrid` (`iduserconfig`, `visible`, `order`, `orderby`, `filterby`, `group`, `user`, `datagrid`) VALUES
	(1, '1', 1, NULL, '', 2, 4, 1),
	(2, '1', 2, NULL, '', 2, 4, 3),
	(3, '1', 3, NULL, 'A', 2, 4, 2),
	(4, '0', 8, NULL, '', 2, 4, 4),
	(5, '0', 6, NULL, '', 2, 4, 5),
	(6, '1', 4, NULL, NULL, 2, 4, 6),
	(7, '1', 5, 'Ascending', NULL, 2, 4, 7),
	(8, '1', 7, NULL, NULL, 2, 4, 8),
	(9, '0', 0, NULL, NULL, 2, 4, 9);
/*!40000 ALTER TABLE `userdatagrid` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
