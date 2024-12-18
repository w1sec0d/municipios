-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: bneeza1c5sfsdlcxfefl-mysql.services.clever-cloud.com    Database: bneeza1c5sfsdlcxfefl
-- ------------------------------------------------------
-- Server version	8.0.15-5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'f41d366d-91e5-11e9-8525-cecd028ee826:1-145832725';

--
-- Table structure for table `DEPARTAMENTO`
--

DROP TABLE IF EXISTS `DEPARTAMENTO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DEPARTAMENTO` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `area` double NOT NULL,
  `poblacion` int(11) NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DEPARTAMENTO`
--

LOCK TABLES `DEPARTAMENTO` WRITE;
/*!40000 ALTER TABLE `DEPARTAMENTO` DISABLE KEYS */;
INSERT INTO `DEPARTAMENTO` VALUES (1,'Antioquia',63154,6592000),(2,'Cundinamarca',24000,2899000),(3,'Valle del Cauca',22140,4644000),(4,'Santander',30500,2280000),(5,'Bolívar',25978,2132000),(6,'Cauca',29308,1528000);
/*!40000 ALTER TABLE `DEPARTAMENTO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EVENTO`
--

DROP TABLE IF EXISTS `EVENTO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EVENTO` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `MUNICIPIO_id_municipio` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `presupuesto` double NOT NULL,
  `descripcion` char(255) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  PRIMARY KEY (`id_evento`),
  KEY `fk_EVENTO_MUNICIPIO1_idx` (`MUNICIPIO_id_municipio`),
  CONSTRAINT `fk_EVENTO_MUNICIPIO1` FOREIGN KEY (`MUNICIPIO_id_municipio`) REFERENCES `MUNICIPIO` (`id_municipio`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EVENTO`
--

LOCK TABLES `EVENTO` WRITE;
/*!40000 ALTER TABLE `EVENTO` DISABLE KEYS */;
INSERT INTO `EVENTO` VALUES (1,1,'Feria de las Floresfsadfa',50000000,'Evento anual de la Feria de las Flores','2024-08-05','2024-08-11'),(2,2,'Festival de Cine',75000000,'Festival internacional de cine','2024-09-01','2024-09-07'),(3,3,'Carnaval de Bogotá',100000000,'Carnaval anual de Bogotá','2024-12-01','2024-12-07'),(5,5,'Feria del Libro',80000000,'Feria internacional del libro','2024-10-01','2024-10-07'),(6,6,'Maratón de Cali',55000000,'Maratón anual de Cali','2024-07-01','2024-07-02');
/*!40000 ALTER TABLE `EVENTO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MUNICIPIO`
--

DROP TABLE IF EXISTS `MUNICIPIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MUNICIPIO` (
  `id_municipio` int(11) NOT NULL AUTO_INCREMENT,
  `PERSONA_id_persona` int(11) DEFAULT NULL,
  `DEPARTAMENTO_id_departamento` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `area` double NOT NULL,
  `presupuesto` double NOT NULL,
  PRIMARY KEY (`id_municipio`),
  KEY `fk_MUNICIPIO_PERSONA_idx` (`PERSONA_id_persona`),
  KEY `fk_MUNICIPIO_DEPARTAMENTO1_idx` (`DEPARTAMENTO_id_departamento`),
  CONSTRAINT `fk_MUNICIPIO_DEPARTAMENTO1` FOREIGN KEY (`DEPARTAMENTO_id_departamento`) REFERENCES `DEPARTAMENTO` (`id_departamento`),
  CONSTRAINT `fk_MUNICIPIO_PERSONA` FOREIGN KEY (`PERSONA_id_persona`) REFERENCES `PERSONA` (`id_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MUNICIPIO`
--

LOCK TABLES `MUNICIPIO` WRITE;
/*!40000 ALTER TABLE `MUNICIPIO` DISABLE KEYS */;
INSERT INTO `MUNICIPIO` VALUES (1,3,2,'Rionegro',1234,5000000),(2,2,1,'Sabaneta',15,80000000),(3,3,2,'Chía',79,120000000),(4,4,2,'Zipaquirá',197,100000000),(5,5,3,'Yumbo',220,90000000),(6,6,3,'Jamundí',362,110000000),(7,7,4,'Girón',125,85000000),(8,8,4,'Piedecuesta',254,95000000),(9,9,5,'Turbaco',177,70000000),(10,10,5,'Arjona',144,60000000),(14,3,1,'Soacha',20,0),(17,2,2,'Radiador springs',3,2),(18,2,1,'Mosquera',500000,350),(19,3,2,'Soledad',598000,63);
/*!40000 ALTER TABLE `MUNICIPIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERSONA`
--

DROP TABLE IF EXISTS `PERSONA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERSONA` (
  `id_persona` int(11) NOT NULL AUTO_INCREMENT,
  `VIVIENDA_id_vivienda` int(11) DEFAULT NULL,
  `PERSONA_id_persona` int(11) DEFAULT NULL,
  `nombre` varchar(45) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `fk_PERSONA_VIVIENDA1_idx` (`VIVIENDA_id_vivienda`),
  KEY `fk_PERSONA_PERSONA1_idx` (`PERSONA_id_persona`),
  CONSTRAINT `fk_PERSONA_PERSONA1` FOREIGN KEY (`PERSONA_id_persona`) REFERENCES `PERSONA` (`id_persona`),
  CONSTRAINT `fk_PERSONA_VIVIENDA1` FOREIGN KEY (`VIVIENDA_id_vivienda`) REFERENCES `VIVIENDA` (`id_vivienda`)
) ENGINE=InnoDB AUTO_INCREMENT=1193115030 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERSONA`
--

LOCK TABLES `PERSONA` WRITE;
/*!40000 ALTER TABLE `PERSONA` DISABLE KEYS */;
INSERT INTO `PERSONA` VALUES (1,NULL,NULL,'Joao Pedro','3413849502',26,'M'),(2,2,NULL,'Joao Pedro','3413849502',24,'M'),(3,3,NULL,'Joao Pedro','3413849502',24,'M'),(4,4,1,'Carlo Reload','2002146747',13,'M'),(5,5,3,'Luis Fernandez','+57 30398763',28,'M'),(6,6,2,'Laura Sanchez','+7 3044567812',33,'F'),(7,7,NULL,'Pedro Ramirez','+57 30512345',45,'M'),(8,8,7,'Sofia Lopez','+57 30698765',29,'F'),(9,9,NULL,'Jorge Torres','+57 30745678',38,'M'),(10,10,9,'Elena Diaz','+57 3081234721',33,'F'),(42,1,1,'Car','2002146747',13,'M'),(2112211,NULL,NULL,'Julio Enciso','3214567890',21,'M'),(104652313,NULL,NULL,'Joao Pedro','3413849502',24,'M'),(1193115029,1,1,'Carl','3002158473',23,'M');
/*!40000 ALTER TABLE `PERSONA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PERSONA_has_VIVIENDA`
--

DROP TABLE IF EXISTS `PERSONA_has_VIVIENDA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PERSONA_has_VIVIENDA` (
  `PERSONA_id_persona` int(11) NOT NULL,
  `VIVIENDA_id_vivienda` int(11) NOT NULL,
  PRIMARY KEY (`PERSONA_id_persona`,`VIVIENDA_id_vivienda`),
  KEY `fk_PERSONA_has_VIVIENDA_VIVIENDA1_idx` (`VIVIENDA_id_vivienda`),
  KEY `fk_PERSONA_has_VIVIENDA_PERSONA1_idx` (`PERSONA_id_persona`),
  CONSTRAINT `fk_PERSONA_has_VIVIENDA_PERSONA1` FOREIGN KEY (`PERSONA_id_persona`) REFERENCES `PERSONA` (`id_persona`),
  CONSTRAINT `fk_PERSONA_has_VIVIENDA_VIVIENDA1` FOREIGN KEY (`VIVIENDA_id_vivienda`) REFERENCES `VIVIENDA` (`id_vivienda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PERSONA_has_VIVIENDA`
--

LOCK TABLES `PERSONA_has_VIVIENDA` WRITE;
/*!40000 ALTER TABLE `PERSONA_has_VIVIENDA` DISABLE KEYS */;
INSERT INTO `PERSONA_has_VIVIENDA` VALUES (1,1),(1,2),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(2,10),(10,10);
/*!40000 ALTER TABLE `PERSONA_has_VIVIENDA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PROYECTO`
--

DROP TABLE IF EXISTS `PROYECTO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PROYECTO` (
  `id_proyecto` int(11) NOT NULL AUTO_INCREMENT,
  `MUNICIPIO_id_municipio` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `presupuesto` double NOT NULL,
  `descripcion` char(255) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `estado` varchar(45) NOT NULL,
  PRIMARY KEY (`id_proyecto`),
  KEY `fk_PROYECTO_MUNICIPIO1_idx` (`MUNICIPIO_id_municipio`),
  CONSTRAINT `fk_PROYECTO_MUNICIPIO1` FOREIGN KEY (`MUNICIPIO_id_municipio`) REFERENCES `MUNICIPIO` (`id_municipio`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PROYECTO`
--

LOCK TABLES `PROYECTO` WRITE;
/*!40000 ALTER TABLE `PROYECTO` DISABLE KEYS */;
INSERT INTO `PROYECTO` VALUES (1,1,'Construcción de Parque321',12312312,'Construcción de un nuevo parque en el centro del municipio','2024-01-01','2024-12-31','En progreso'),(2,2,'Mejoramiento de Vías',150000000,'Reparación y mejoramiento de las vías principales','2024-02-01','2024-11-30','Completado'),(3,3,'Construcción de Hospital',300000000,'Construcción de un nuevo hospital en el sur del municipio','2024-03-01','2025-02-28','En progreso'),(4,4,'Renovación de Escuelas',100000000,'Renovación de las escuelas públicas','2024-04-01','2024-10-31','En progreso'),(5,5,'Ampliación de Aeropuerto',400000000,'Ampliación del aeropuerto municipal','2024-05-01','2025-04-30','En progreso'),(6,6,'Construcción de Biblioteca',120000000,'Construcción de una nueva biblioteca pública','2024-06-01','2024-12-31','En progreso'),(8,2,'fsfad',213,'dafad','2024-12-16','2024-12-19','esfa');
/*!40000 ALTER TABLE `PROYECTO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RESPONSABLE`
--

DROP TABLE IF EXISTS `RESPONSABLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RESPONSABLE` (
  `PROYECTO_id_proyecto` int(11) NOT NULL AUTO_INCREMENT,
  `PERSONA_id_persona` int(11) NOT NULL,
  PRIMARY KEY (`PROYECTO_id_proyecto`,`PERSONA_id_persona`),
  KEY `fk_PROYECTO_has_PERSONA_PERSONA1_idx` (`PERSONA_id_persona`),
  KEY `fk_PROYECTO_has_PERSONA_PROYECTO1_idx` (`PROYECTO_id_proyecto`),
  CONSTRAINT `fk_PROYECTO_has_PERSONA_PERSONA1` FOREIGN KEY (`PERSONA_id_persona`) REFERENCES `PERSONA` (`id_persona`),
  CONSTRAINT `fk_PROYECTO_has_PERSONA_PROYECTO1` FOREIGN KEY (`PROYECTO_id_proyecto`) REFERENCES `PROYECTO` (`id_proyecto`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RESPONSABLE`
--

LOCK TABLES `RESPONSABLE` WRITE;
/*!40000 ALTER TABLE `RESPONSABLE` DISABLE KEYS */;
INSERT INTO `RESPONSABLE` VALUES (1,1),(2,2),(3,3),(4,4),(3,5),(5,5),(6,6);
/*!40000 ALTER TABLE `RESPONSABLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VIVIENDA`
--

DROP TABLE IF EXISTS `VIVIENDA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VIVIENDA` (
  `id_vivienda` int(11) NOT NULL AUTO_INCREMENT,
  `MUNICIPIO_id_municipio` int(11) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `niveles` int(11) NOT NULL,
  PRIMARY KEY (`id_vivienda`),
  KEY `fk_VIVIENDA_MUNICIPIO1_idx` (`MUNICIPIO_id_municipio`),
  CONSTRAINT `fk_VIVIENDA_MUNICIPIO1` FOREIGN KEY (`MUNICIPIO_id_municipio`) REFERENCES `MUNICIPIO` (`id_municipio`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VIVIENDA`
--

LOCK TABLES `VIVIENDA` WRITE;
/*!40000 ALTER TABLE `VIVIENDA` DISABLE KEYS */;
INSERT INTO `VIVIENDA` VALUES (1,1,'Calle 10 #20-32',5,2),(2,2,'Calle 10 #20-35',5,2),(3,3,'Avenida 68 #45-61',6,1),(4,4,'Calle 50 #10-20',3,2),(5,5,'Carrera 30 #50-70',7,4),(6,6,'Calle 100 #20-30',5,2),(7,7,'Calle 20 #30-40',4,3),(8,8,'Carrera 40 #50-60',6,2),(9,9,'Avenida 80 #70-90',5,3),(10,10,'Calle 90 #100-110',4,1);
/*!40000 ALTER TABLE `VIVIENDA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vistaEventosMunicipio`
--

DROP TABLE IF EXISTS `vistaEventosMunicipio`;
/*!50001 DROP VIEW IF EXISTS `vistaEventosMunicipio`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaEventosMunicipio` AS SELECT 
 1 AS `id_evento`,
 1 AS `nombre`,
 1 AS `presupuesto`,
 1 AS `descripcion`,
 1 AS `fecha_inicio`,
 1 AS `fecha_fin`,
 1 AS `id_municipio`,
 1 AS `nombre_municipio`,
 1 AS `id_alcalde`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaMunicipioDepartamento`
--

DROP TABLE IF EXISTS `vistaMunicipioDepartamento`;
/*!50001 DROP VIEW IF EXISTS `vistaMunicipioDepartamento`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaMunicipioDepartamento` AS SELECT 
 1 AS `id_municipio`,
 1 AS `nombre`,
 1 AS `ara`,
 1 AS `presupuesto`,
 1 AS `id_departamento`,
 1 AS `nombre_departamento`,
 1 AS `area_departamento`,
 1 AS `poblacion_departamento`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaPersonaCabezaFamilia`
--

DROP TABLE IF EXISTS `vistaPersonaCabezaFamilia`;
/*!50001 DROP VIEW IF EXISTS `vistaPersonaCabezaFamilia`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaPersonaCabezaFamilia` AS SELECT 
 1 AS `id_persona`,
 1 AS `nombre`,
 1 AS `telefono`,
 1 AS `edad`,
 1 AS `sexo`,
 1 AS `id_cabeza_familia`,
 1 AS `nombre_cabeza_familia`,
 1 AS `telefono_cabeza_familia`,
 1 AS `edad_cabeza_familia`,
 1 AS `sexo_cabeza_familia`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaPropiedad`
--

DROP TABLE IF EXISTS `vistaPropiedad`;
/*!50001 DROP VIEW IF EXISTS `vistaPropiedad`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaPropiedad` AS SELECT 
 1 AS `id_persona`,
 1 AS `nombre`,
 1 AS `telefono`,
 1 AS `edad`,
 1 AS `sexo`,
 1 AS `id_vivienda`,
 1 AS `direccion`,
 1 AS `capacidad`,
 1 AS `niveles`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaResidenciaPersona`
--

DROP TABLE IF EXISTS `vistaResidenciaPersona`;
/*!50001 DROP VIEW IF EXISTS `vistaResidenciaPersona`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaResidenciaPersona` AS SELECT 
 1 AS `id_persona`,
 1 AS `nombre`,
 1 AS `telefono`,
 1 AS `edad`,
 1 AS `sexo`,
 1 AS `id_vivienda`,
 1 AS `direccion`,
 1 AS `capacidad`,
 1 AS `niveles`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vistaResponsableProyecto`
--

DROP TABLE IF EXISTS `vistaResponsableProyecto`;
/*!50001 DROP VIEW IF EXISTS `vistaResponsableProyecto`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaResponsableProyecto` AS SELECT 
 1 AS `id_persona`,
 1 AS `nombre`,
 1 AS `telefono`,
 1 AS `id_proyecto`,
 1 AS `nombre_proyecto`,
 1 AS `presupuesto`,
 1 AS `descripcion`,
 1 AS `fecha_inicio`,
 1 AS `fecha_fin`,
 1 AS `estado`,
 1 AS `id_municipio`,
 1 AS `nombre_municipio`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vistaEventosMunicipio`
--

/*!50001 DROP VIEW IF EXISTS `vistaEventosMunicipio`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaEventosMunicipio` AS select `e`.`id_evento` AS `id_evento`,`e`.`nombre` AS `nombre`,`e`.`presupuesto` AS `presupuesto`,`e`.`descripcion` AS `descripcion`,`e`.`fecha_inicio` AS `fecha_inicio`,`e`.`fecha_fin` AS `fecha_fin`,`m`.`id_municipio` AS `id_municipio`,`m`.`nombre` AS `nombre_municipio`,`m`.`PERSONA_id_persona` AS `id_alcalde` from (`EVENTO` `e` join `MUNICIPIO` `m` on((`e`.`MUNICIPIO_id_municipio` = `m`.`id_municipio`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaMunicipioDepartamento`
--

/*!50001 DROP VIEW IF EXISTS `vistaMunicipioDepartamento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaMunicipioDepartamento` AS select `m`.`id_municipio` AS `id_municipio`,`m`.`nombre` AS `nombre`,`m`.`area` AS `ara`,`m`.`presupuesto` AS `presupuesto`,`d`.`id_departamento` AS `id_departamento`,`d`.`nombre` AS `nombre_departamento`,`d`.`area` AS `area_departamento`,`d`.`poblacion` AS `poblacion_departamento` from (`MUNICIPIO` `m` join `DEPARTAMENTO` `d` on((`m`.`DEPARTAMENTO_id_departamento` = `d`.`id_departamento`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaPersonaCabezaFamilia`
--

/*!50001 DROP VIEW IF EXISTS `vistaPersonaCabezaFamilia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaPersonaCabezaFamilia` AS select `p1`.`id_persona` AS `id_persona`,`p1`.`nombre` AS `nombre`,`p1`.`telefono` AS `telefono`,`p1`.`edad` AS `edad`,`p1`.`sexo` AS `sexo`,`p2`.`id_persona` AS `id_cabeza_familia`,`p2`.`nombre` AS `nombre_cabeza_familia`,`p2`.`telefono` AS `telefono_cabeza_familia`,`p2`.`edad` AS `edad_cabeza_familia`,`p2`.`sexo` AS `sexo_cabeza_familia` from (`PERSONA` `p1` left join `PERSONA` `p2` on((`p1`.`PERSONA_id_persona` = `p2`.`id_persona`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaPropiedad`
--

/*!50001 DROP VIEW IF EXISTS `vistaPropiedad`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaPropiedad` AS select `p`.`id_persona` AS `id_persona`,`p`.`nombre` AS `nombre`,`p`.`telefono` AS `telefono`,`p`.`edad` AS `edad`,`p`.`sexo` AS `sexo`,`v`.`id_vivienda` AS `id_vivienda`,`v`.`direccion` AS `direccion`,`v`.`capacidad` AS `capacidad`,`v`.`niveles` AS `niveles` from ((`PERSONA` `p` join `PERSONA_has_VIVIENDA` `phv` on((`p`.`id_persona` = `phv`.`PERSONA_id_persona`))) join `VIVIENDA` `v` on((`phv`.`VIVIENDA_id_vivienda` = `v`.`id_vivienda`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaResidenciaPersona`
--

/*!50001 DROP VIEW IF EXISTS `vistaResidenciaPersona`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaResidenciaPersona` AS select `p`.`id_persona` AS `id_persona`,`p`.`nombre` AS `nombre`,`p`.`telefono` AS `telefono`,`p`.`edad` AS `edad`,`p`.`sexo` AS `sexo`,`v`.`id_vivienda` AS `id_vivienda`,`v`.`direccion` AS `direccion`,`v`.`capacidad` AS `capacidad`,`v`.`niveles` AS `niveles` from (`PERSONA` `p` left join `VIVIENDA` `v` on((`p`.`VIVIENDA_id_vivienda` = `v`.`id_vivienda`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vistaResponsableProyecto`
--

/*!50001 DROP VIEW IF EXISTS `vistaResponsableProyecto`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`u4s8fzw4ekx5fxl4`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaResponsableProyecto` AS select `p`.`id_persona` AS `id_persona`,`p`.`nombre` AS `nombre`,`p`.`telefono` AS `telefono`,`pr`.`id_proyecto` AS `id_proyecto`,`pr`.`nombre` AS `nombre_proyecto`,`pr`.`presupuesto` AS `presupuesto`,`pr`.`descripcion` AS `descripcion`,`pr`.`fecha_inicio` AS `fecha_inicio`,`pr`.`fecha_fin` AS `fecha_fin`,`pr`.`estado` AS `estado`,`m`.`id_municipio` AS `id_municipio`,`m`.`nombre` AS `nombre_municipio` from (((`RESPONSABLE` `r` join `PERSONA` `p` on((`r`.`PERSONA_id_persona` = `p`.`id_persona`))) join `PROYECTO` `pr` on((`r`.`PROYECTO_id_proyecto` = `pr`.`id_proyecto`))) join `MUNICIPIO` `m` on((`pr`.`MUNICIPIO_id_municipio` = `m`.`id_municipio`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-18 10:25:26
