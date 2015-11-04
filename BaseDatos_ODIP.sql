CREATE DATABASE  IF NOT EXISTS `dbodip` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `dbodip`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: dbodip
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `49721sf0x57`
--

DROP TABLE IF EXISTS `49721sf0x57`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `49721sf0x57` (
  `49721sf0x570` int(11) NOT NULL AUTO_INCREMENT,
  `49721sf0x571` text,
  `49721sf0x572` text,
  `49721sf0x573` text,
  `49721sf0x574` text,
  `49721sf0x575` text,
  `49721sf0x576` text,
  `49721sf0x577` text,
  `49721sf0x578` text,
  `49721sf0x579` text,
  `49721sf0x5710` text,
  `49721sf0x5711` text,
  `49721sf0x5712` text,
  `49721sf0x5713` text,
  `49721sf0x5714` text,
  `49721sf0x5715` text,
  `49721sf0x5716` text,
  `49721sf0x5717` text,
  `49721sf0x5718` text,
  `49721sf0x5719` text,
  PRIMARY KEY (`49721sf0x570`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `49721sf0x57`
--

LOCK TABLES `49721sf0x57` WRITE;
/*!40000 ALTER TABLE `49721sf0x57` DISABLE KEYS */;
INSERT INTO `49721sf0x57` VALUES (1,'CODIGO','NOMBRE','DIRECCION_ESTABLECIMIENTO','TELEFONO_ESTABLECIMIENTO','ABIERTO_TODO_ANO','ABIERTO_NAVIDAD','ABIERTO_SEMANA_SANTA','ABIERTO_FIESTAS_LOCALES','ABIERTO_PERIODOS_MULTIPLES','OBSERVACIONES_TEMPORADA','OBSERVACIONES_APERTURA','HORARIO','OBS_HORARIO','NOMBRE_PROVINCIA','LOCA_MUN',NULL,NULL,NULL,NULL),(2,'OT-HU-15-039','OFICINA COMARCAL DE TURISMO DE LOS MONEGROS','AVENIDA FRAGA. S/N - RECINTO FERIAL','974570090','S','','','','','','ABIERTO DE LUNES A VIERNES. CERRADO: FINES DE SEMANA. PUENTES Y FESTIVOS ','M','DE 8 A 15 H.','HUESCA','SARIÑENA213','10','41.7916307','-0.15769130000001041',NULL),(3,'OT-HU-15-023','OFICINA DE TURISMO COMARCAL DEL SOBRARBE','PLAZA DEL CASTILLO DE AINSA','974500512','S','','','','','','VERANO(JULIO Y AGOSTO) ','Y','','HUESCA','AINSA907','10','42.4146941','0.14038110000001325',NULL);
/*!40000 ALTER TABLE `49721sf0x57` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cnae`
--

DROP TABLE IF EXISTS `cnae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cnae` (
  `cnae0` int(11) NOT NULL AUTO_INCREMENT,
  `cnae1` varchar(25) DEFAULT NULL,
  `cnae2` text,
  `cnae3` text,
  `cnae9` int(50) DEFAULT '1',
  `cnae10` float DEFAULT '0',
  `cnae11` float DEFAULT '0',
  `cnae12` float DEFAULT '0',
  `cnae13` float DEFAULT '0',
  `cnae14` float DEFAULT '0',
  `cnae15` float DEFAULT '0',
  `cnae16` float DEFAULT '0',
  `cnae17` float DEFAULT '0',
  `cnae18` float DEFAULT '0',
  `cnae19` float DEFAULT '0',
  `cnae21` float DEFAULT '0',
  `cnae22` float DEFAULT '0',
  `cnae23` float DEFAULT '0',
  `cnae24` float DEFAULT '0',
  `cnae25` float DEFAULT '0',
  `cnae26` float DEFAULT '0',
  `cnae27` float DEFAULT '0',
  `cnae28` float DEFAULT '0',
  `cnae29` float DEFAULT '0',
  `cnae30` float DEFAULT '0',
  `cnae31` float DEFAULT '0',
  `cnae32` float DEFAULT '0',
  `cnae33` float DEFAULT '0',
  `cnae34` float DEFAULT '0',
  `cnae35` float DEFAULT '0',
  `cnae36` float DEFAULT '0',
  `cnae37` float DEFAULT '0',
  `cnae38` float DEFAULT '0',
  `cnae39` float DEFAULT '0',
  `cnae40` float DEFAULT '0',
  `cnae41` float DEFAULT '0',
  `cnae42` float DEFAULT '0',
  `cnae43` float DEFAULT '0',
  `cnae44` float DEFAULT '0',
  `cnae45` float DEFAULT '0',
  `cnae46` float DEFAULT '0',
  `cnae47` float DEFAULT '0',
  `cnae48` float DEFAULT '0',
  `cnae49` float DEFAULT '0',
  `cnae50` float DEFAULT '0',
  `cnae51` float DEFAULT '0',
  `cnae52` float DEFAULT '0',
  `cnae53` float DEFAULT '0',
  PRIMARY KEY (`cnae0`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cnae`
--

LOCK TABLES `cnae` WRITE;
/*!40000 ALTER TABLE `cnae` DISABLE KEYS */;
INSERT INTO `cnae` VALUES (1,'4721','Frutería','Comercio al por menor de frutas y hortalizas en establecimientos especializados',8,4.6,4.1,1.325,4.8,1.25,0.075,0.125,0.775,0.1,0.125,0.775,0,0,0,2,0,0.625,0.125,0.149,0,0.9,0,0,0,0,0.149,0.625,0,0.775,0,0,0.025,0.249,0.025,0,0.625,0.125,0.65,1.75,1.125,1.65,0,0),(2,'8553','Autoescuelas','Actividades de las escuelas de conducción y pilotaje',1,1.5,1.5,2.5,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(3,'8544','Academias de formación','Educación terciaria no universitaria',1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(4,'9511','Tienda informática y reparación','Descripción',1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(5,'9602','Centro de belleza','Descripción',1,0.667,1,2.333,3.333,0,0,0,0,0,0,0.333,0,0,0,0,0,0,0,0.333,0.333,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1.333,1,1,0,0),(6,'9602','Tratamientos de belleza','Peluquería y otros tratamientos de belleza',1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(7,'9602','Peluquería','Descripción',1,0.5,1,1.5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1.5,1,0.5,0,0),(8,'4724','Pastelería','Comercio al por menor de pan y productos de panadería, confitería y pastelería en establecimientos especializados',1,2,1.667,1.333,0,0,0,0,0,0,0,0,0,0,0,0.667,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(9,'4724','Panadería','Comercio al por menor de pan y productos de panadería, confitería y pastelería en establecimientos especializados',1,3.333,1.667,2.333,2,0,0,0,0,0.333,0.667,0.667,0.333,0,0,0,0.333,0,0,0.667,0,0.333,0,0,0,0,0,0,0,0.667,0.333,0,0,2,0.333,0.333,0.333,0.333,0,1,1,0.667,0,0),(10,'4726','Estanco de tabaco','Comercio al por menor de productos de tabaco en establecimientos especializados',1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(11,'4722','Carnicería','Comercio al por menor de carne y productos ',1,3.126,3.5,2.375,2.5,0.875,0,0.625,1.125,0.625,0.25,0.626,0,0,0.5,0.5,0,0.25,0.125,0.25,0.125,0.249,0,0,0,0.25,0,0,0.125,0.125,0.125,0,0.125,2,0,0.125,0.125,0.125,0,0,1,0,0,0),(12,'4723','Pescadería','Comercio al por menor de pescados y mariscos en establecimientos especializados',1,5.498,3.989,4.292,3.838,0,0,0,0.127,0,0,0.111,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0.111,0,0,0,2.583,1,2.586,0,0),(13,'5541','Estaciones de servicio y Gasolineras','Estaciones de servicio y Gasolineras',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(14,'5010','Concesionario de vehículos','Venta de vehículos de motor',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(15,'5020','Taller de vehículos a motor','Mantenimiento y reparación de vehículos de motor ',3,2.333,2.667,4.333,0.667,0,0,0,0,0.667,0.667,0.667,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.667,0.333,0,0.333,0,0,1.333,1.667,0.667,0,0),(16,'5030','Venta de repuestos y accesorios de vehículos de motor ','Venta de repuestos y accesorios de vehículos de motor ',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(17,'5040','Venta, mantenim. reparación de motocicletas y ciclomotores','Venta, mantenim. reparación de motocicletas y ciclomotores',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(18,'5050','Venta al por menor de carburantes para la automoción','Venta al por menor de carburantes para la automoción',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(19,'5220','Comercio al por menor de alimentos,bebidas y tabaco','Comerc .por menor de alimentos,bebidas y tabaco en establ. ',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(20,'9313','Gimnasio','Actividades de los gimnasios',2,4,0.5,1.5,0,0.5,0,0,0.5,0.5,0.5,0,0,0,1,0,0,0,0.5,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0.5,1,0.5,0,0),(21,'9312','Club deportivo','Actividades de los clubes deportivos',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(22,'4741','Tienda de Informática','Comercio al por menor de ordenadores, equipos periféricos y programas informáticos en establecimientos especializados',2,3.5,2.5,4,0.5,0,0,0,0.5,0.5,0.5,0,0,0,1,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,2,0,0.5,0.5,0,0,1,0.5,0.5,0,0),(23,'4743','Tienda de Sonido y Video','Comercio al por menor de equipos de audio y vídeo en establecimientos especializados',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0),(24,'9511','Taller de informática','Reparación de ordenadores y equipos periféricos',1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0);
/*!40000 ALTER TABLE `cnae` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentarios` (
  `comentarios0` int(11) NOT NULL AUTO_INCREMENT,
  `comentarios1` int(11) DEFAULT NULL,
  `comentarios2` text,
  PRIMARY KEY (`comentarios0`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,'Las sugerencias me han gustado, y me han ayudado a tomar la decisión.'),(2,2,'Me gustaría disponer de más resultados. ¿Sería posible?'),(3,1,'Me parece un servicio muy interesante. Y más siendo gratuito.'),(4,5,'Me gusta.'),(5,9,'¿Se podría precisar más los resultados?');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `criterios`
--

DROP TABLE IF EXISTS `criterios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `criterios` (
  `criterios0` int(11) NOT NULL AUTO_INCREMENT,
  `criterios1` int(11) DEFAULT NULL,
  `criterios2` text,
  `criterios3` text,
  PRIMARY KEY (`criterios0`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criterios`
--

LOCK TABLES `criterios` WRITE;
/*!40000 ALTER TABLE `criterios` DISABLE KEYS */;
INSERT INTO `criterios` VALUES (10,1,'Ciudadanos de próximidad','Nº de personas que viven en esa localización.'),(11,1,'Turistas','Nº medio de turistas en plazas hoteleras disponibles.'),(12,1,'Viajeros','Nº medio de viajeros que pasan por estaciones próximas.'),(13,1,'Empresas locales','Nº de empresas ubicadas en la misma ubicación.'),(14,1,'Exportación','Se trata de una empresa que se dedica principalmente a la exportación de productos a otras comunidades autónomas, u otros paises.'),(15,1,'Sexo','Productos dirigidos a un sexo concreto.'),(16,2,'Bebes de 0 a 4 años','Personas que viven en la ubicación entre 0  y 3 años de edad.'),(17,2,'Niños de 5 a 14 años','Personas que viven en la ubicación entre 5 a 14 años de edad.'),(18,2,'Adolescentes de 15 a 19 años','Personas que viven en la ubicación entre 15  y 19 años de edad.'),(19,2,'Jóvenes de 20 a 29 años','Personas que viven en la ubicación entre 20 y 29 años de edad.'),(21,2,'Jóvenes de 30 a 39 años','Personas que viven en la ubicación entre 30 y 39 años de edad.'),(22,2,'Adultos de 40 a 59 años','Personas que viven en la ubicación entre 40 y 49 años de edad.'),(23,2,'Adultos de 50 a 64 años','Personas que viven en la ubicación entre 50 y 64 años de edad.'),(24,2,'Jubilados mayores de 65 años','Personas que viven en la ubicación mayores a 65 años de edad.'),(25,1,'Poder adquisitivo',''),(26,3,'Ubicación por motivos personales',''),(27,4,'Menos de 20 m2',''),(28,4,'Entre 21 m2 y 50 m2',''),(29,4,'Entre 51 m2 y 100 m2',''),(30,4,'Entre 101 m2 y 200 m2',''),(31,4,'Entre 201 m2 y 500 m2',''),(32,4,'Entre 501 m2 y 1000 m2',''),(33,4,'Más de 1000 m2',''),(34,3,'Temperatura',''),(35,5,'Estaciones de esquí',''),(36,5,'Centros deportivos',''),(37,5,'Hospitales y centros médicos',''),(38,5,'Centros de ocio',''),(39,5,'Centros comerciales',''),(40,5,'Calles de gran tránsito',''),(41,5,'Autopistas y carreteras',''),(42,5,'Estaciones de tren y bus',''),(43,5,'Monumentos y puntos de interés',''),(44,5,'Hoteles',''),(45,6,'Internet',''),(46,6,'Internet alta velocidad',''),(47,6,'Cobertura móvil',''),(48,6,'Servicio de taxi',''),(49,6,'Servicio de autobús',''),(50,7,'Nivel de estudios',''),(51,7,'Experiencia',''),(52,7,'Número de empleados',''),(53,5,'Prueba/Vacio','');
/*!40000 ALTER TABLE `criterios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datagente`
--

DROP TABLE IF EXISTS `datagente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datagente` (
  `datagente0` int(11) NOT NULL AUTO_INCREMENT,
  `datagente1` int(11) DEFAULT NULL,
  `datagente2` varchar(45) DEFAULT NULL,
  `datagente3` varchar(45) DEFAULT NULL,
  `datagente4` varchar(45) DEFAULT NULL,
  `datagente5` varchar(45) DEFAULT NULL,
  `datagente6` varchar(45) DEFAULT NULL,
  `datagente7` varchar(45) DEFAULT NULL,
  `datagente8` varchar(45) DEFAULT NULL,
  `datagente9` varchar(45) DEFAULT NULL,
  `datagente10` varchar(45) DEFAULT NULL,
  `datagente11` varchar(45) DEFAULT NULL,
  `datagente12` varchar(45) DEFAULT NULL,
  `datagente13` varchar(45) DEFAULT NULL,
  `datagente14` varchar(45) DEFAULT NULL,
  `datagente15` varchar(45) DEFAULT NULL,
  `datagente16` varchar(45) DEFAULT NULL,
  `datagente17` varchar(45) DEFAULT NULL,
  `datagente18` varchar(45) DEFAULT NULL,
  `datagente19` varchar(45) DEFAULT NULL,
  `datagente20` varchar(45) DEFAULT NULL,
  `datagente21` varchar(45) DEFAULT NULL,
  `datagente22` varchar(45) DEFAULT NULL,
  `datagente23` varchar(45) DEFAULT NULL,
  `datagente24` varchar(45) DEFAULT NULL,
  `datagente25` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`datagente0`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datagente`
--

LOCK TABLES `datagente` WRITE;
/*!40000 ALTER TABLE `datagente` DISABLE KEYS */;
INSERT INTO `datagente` VALUES (1,7,'3.284.606','33728','44','47','52','206','16','49','16','11','Datos de Enero 2014','110783','53165','57618','4002','8419','4473','13264','16821','15704','22527','25573','25403','Observaciones'),(2,8,'299.560.300','9','41','42','38','136','136','73','13','12','Datos de Enero 2014','2595','1431','1164','71','231','145','456','379','372','529','412','179','Observaciones'),(3,19,'1.984.383','23.371','42','46','50','161','19','62','19','13','Datos de Enero 2014','46378','22414','23964','2041','3867','1617','4939','8217','7906','8237','9504','11180','Observaciones'),(4,2,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,12,'6.314.793','6.803','43','47','55','199','14','50','17','12','Datos de Enero 2014','42960','21092','21868','1586','3506','1928','4729','6354','6552','8191','10114','7828','Observaciones'),(13,21,'3.020.154','16.699.81','44','48','56','195','19','51','18','12','Datos de Enero 2014','50436','23301','27135','1957','4204','2249','5387','6775','7303','10534','12027','6681','Observaciones'),(14,22,'3.680.812','18.363','44','47','54','204','16','49','17','12','Datos de Enero 2014','67593','31929','35664','2581','5206','2742','7518','10038','10094','13522','15892','12354','Observaciones'),(15,15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,16,'7.970.473','1.659','36','38','48','44','17','226','30','22','Datos de Enero 2014','13228','6568','6660','1013','1953','575','1096','2418','2719','2141','1313','749','Observaciones'),(17,17,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,18,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,20,'1.808.623','29.538','45','50','62','251','18','40','17','11','Datos de Enero 2014','53424','23926','29498','1851','3948','2075','5311','7051','7304','11312','14572','5482','Observaciones'),(21,23,'3.767.367','6.606','43','45','40','164','13','61','13','11','Datos de Enero 2014','24888','12047','12841','744','1943','1487','3327','2913','3514','6197','4418','3046','Observaciones'),(22,24,'4.339.479','7.216','38','40','47','77','12','130','26','18','Datos de Enero 2014','31316','15590','15726','1960','3727','1437','3424','5632','5247','5529','4360','4409','Observaciones'),(23,25,'123.980.600','17','41','43','40','107','15','94','18','14','Datos de Enero 2014','2152','1088','1064','83','217','116','274','288','296','558','216','146','Observaciones'),(24,26,'111.876.200','338','41','44','50','139','15','72','20','14','Datos de Enero 2014','37843','18516','19327','1818','3490','1586','4209','6681','6106','6578','7375','5847','Observaciones'),(25,27,'20.155.670','1','55','56','92','300','11','33','0','12','Datos de Enero 2014','25','14','11','0','3','1','0','2','3','7','9','0','Observaciones'),(26,28,'8.375.902','9.360','40','42','50','88','13','113','22','18','Datos de Enero 2014','78404','38735','39669','4226','9743','3462','7137','12497','15195','13833','10045','8941','Observaciones'),(27,29,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,30,'66.192.700','596','34','36','37','42','12','239','33','19','Datos de Enero 2014','39476','19850','19626','3865','3654','1440','4020','12632','5774','4941','3150','2521','Observaciones'),(29,31,'9.671.295','6.114','39','40','41','63','10','157','19','18','Datos de Enero 2014','59132','29266','29866','2839','7663','3569','6160','7874','11690','12659','6698','3514','Observaciones'),(30,32,'8.224.553','1403','35','37','48','38','20','262','33','24','Datos de Enero 2014','11546','5696','5850','1013','1705','501','1006','2289','2199','1797','1036','651','Observaciones'),(31,33,'10.885.790','234','39','40','40','69','16','144','16','16','Datos de Enero 2014','2547','1284','1263','140','291','153','296','388','423','558','298','167','Observaciones'),(32,34,'13.608.360','245','42','44','56','133','16','75','21','15','Datos de Enero 2014','3340','1679','1661','153','261','151','354','306','495','536','684','262','Observaciones'),(33,35,'1.934.793','330','41','42','46','92','17','108','13','16','Datos de Enero 2014','639','315','324','22','82','32','65','99','114','129','96','47','Observaciones'),(34,36,'50.927.580','25','41','42','59','94','18','106','26','19','Datos de Enero 2014','1296','655','641','70','177','46','93','218','214','245','233','261','Observaciones'),(35,37,'22.755.570','125','41','44','48','112','21','89','19','15','Datos de Enero 2014','2843','1447','1396','120','317','137','323','382','459','615','490','322','Observaciones'),(36,38,'141.236.300','38','40','42','47','99','16','101','18','16','Datos de Enero 2014','5362','2760','2602','221','637','299','612','738','962','1046','847','570','Observaciones'),(37,39,'9.235.637','108','45','50','75','218','20','46','24','13','Datos de Enero 2014','999','449','550','44','90','43','99','108','130','192','293','114','Observaciones'),(38,40,'13.464.060','143','42','44','51','139','18','72','22','14','Datos de Enero 2014','1932','973','959','90','183','75','217','331','275','382','379','187','Observaciones'),(39,41,'1.151.708','165','37','40','44','61','14','164','26','19','Datos de Enero 2014','190','97','93','14','22','4','18','44','38','28','22','26','Observaciones'),(40,42,'11.312.410','16','40','42','56','81','31','124','39','20','Datos de Enero 2014','182','97','85','13','23','6','17','31','27','36','29','23','Observaciones'),(41,43,'6.345.331','1.170','40','43','40','118','11','85','17','13','Datos de Enero 2014','7424','3861','3563','294','674','353','936','1329','1216','1484','1138','1786','Observaciones');
/*!40000 ALTER TABLE `datagente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grcriterios`
--

DROP TABLE IF EXISTS `grcriterios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grcriterios` (
  `grcriterios0` int(11) NOT NULL AUTO_INCREMENT,
  `grcriterios1` text,
  `grcriterios2` text,
  PRIMARY KEY (`grcriterios0`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grcriterios`
--

LOCK TABLES `grcriterios` WRITE;
/*!40000 ALTER TABLE `grcriterios` DISABLE KEYS */;
INSERT INTO `grcriterios` VALUES (1,'Clientes','Descripción'),(2,'Clientes/Edad','Descripción'),(3,'Ubicación','Descripción'),(4,'Ubicación/Metros cuadrados','Descripción'),(5,'Ubicación/Cerca de','Descripción'),(6,'Ubicación/Servicios','Descripción'),(7,'Personal','Descripción');
/*!40000 ALTER TABLE `grcriterios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `infotablas`
--

DROP TABLE IF EXISTS `infotablas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `infotablas` (
  `infotablas0` int(11) NOT NULL AUTO_INCREMENT,
  `infotablas1` text COMMENT 'Nombre tabla real',
  `infotablas2` text COMMENT 'Nombre tabla máquina',
  `infotablas3` text COMMENT 'el id donde empieza la LAT/LNG/PESO/UBICACIÓN en la tabla.',
  `infotablas4` text COMMENT 'id de la tabla de localizaciones donde se volcarán los resultados obtenidos.',
  `infotablas5` text,
  `infotablas6` text,
  `infotablas7` text,
  `infotablas8` text,
  PRIMARY KEY (`infotablas0`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infotablas`
--

LOCK TABLES `infotablas` WRITE;
/*!40000 ALTER TABLE `infotablas` DISABLE KEYS */;
INSERT INTO `infotablas` VALUES (28,'Oficinas de turismo','49721sf0x57',NULL,'/proyectos/odip/mis_csv/4972-1sf0x57.csv','16','3','CODIGO, NOMBRE, DIRECCION_ESTABLECIMIENTO, TELEFONO_ESTABLECIMIENTO, ABIERTO_TODO_ANO, ABIERTO_NAVIDAD, ABIERTO_SEMANA_SANTA, ABIERTO_FIESTAS_LOCALES, ABIERTO_PERIODOS_MULTIPLES, OBSERVACIONES_TEMPORADA, OBSERVACIONES_APERTURA, HORARIO, OBS_HORARIO, NOMBRE_PROVINCIA, LOCA_MUN',NULL);
/*!40000 ALTER TABLE `infotablas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `items0` int(11) NOT NULL AUTO_INCREMENT,
  `items1` text,
  `items2` text,
  `items3` text,
  `items4` text,
  `items5` text,
  `items6` text,
  PRIMARY KEY (`items0`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Basílica de Nuestra Señora del  Pilar','-','19','','',''),(2,'Catedral del Salvador ( la Seo)','-','19','','',''),(3,'Palacio de la Aljafería','-','7','','',NULL),(4,'Pabellón Jose Luis Abos','-','22','','',NULL),(5,'Galachos de Juslibol','-','8',NULL,NULL,NULL),(6,'Puente de Piedra','-','19',NULL,NULL,NULL),(7,'Puente de Piedra','-','28',NULL,NULL,NULL),(8,'Rio Ebro','-','19',NULL,NULL,NULL),(9,'Rio Ebro','-','28',NULL,NULL,NULL),(10,'Rio Ebro','-','23',NULL,NULL,NULL),(11,'Rio Ebro','-','12',NULL,NULL,NULL),(12,'Iglesia de San Pablo','Calle de San Pablo, 42, 50003 Zaragoza','19',NULL,NULL,NULL),(13,'Basilica de Santa Engracia','Calle Tomás Castellano, 1, 50001 Zaragoza','20',NULL,NULL,NULL),(14,'Iglesia de Santa Maria Magdalena','Plaza de la Magdalena, s/n, Zaragoza','19',NULL,NULL,NULL),(15,'Estadio de la Romareda','-','21',NULL,NULL,NULL),(16,'World Trade Center','Calle de María Zambrano, 31, 50018 Zaragoza','31',NULL,NULL,NULL),(17,'Plaza de España','-','20',NULL,NULL,NULL),(18,'Centro Comercial Gran Casa','Calle de la Poetisa María Zambrano, 35, 50018 Zaragoza','31',NULL,NULL,NULL),(19,'Centro Comercial Aragonia',' Avda. Juan Carlos I, 44, 50009 Zaragoza','21',NULL,NULL,NULL),(20,'Mercado Central','Plaza Lanuza, s/n, 50003 Zaragoza','19',NULL,NULL,NULL),(21,'Centro Comercial Puerto Venecia','Travesía Jardines Reales, 7, 50021 Zaragoza','26',NULL,NULL,NULL),(22,'Centro Comercial Augusta','Av. Navarra, 180, 50011 Zaragoza','7',NULL,NULL,NULL),(23,'Recinto EXPO','Pablo Ruiz Picasso, 61-D, 50018 Zaragoza','31',NULL,NULL,NULL),(24,'Acuario de Zaragoza',' Avda. José Atarés s/n, 50018 Zaragoza','31',NULL,NULL,NULL),(25,'Ciudad de la Justicia','Av. José Atarés, 89-97, 50018 Zaragoza','31',NULL,NULL,NULL),(26,'Torre del Agua','Av. de Ranillas, 109, 50018 Zaragoza','31',NULL,NULL,NULL),(27,'Pabellón Puente','-','31',NULL,NULL,NULL),(28,'Pabellón Puente','-','23',NULL,NULL,NULL),(29,'Parque Grande J.A. Labordeta','Parque Grande José Antonio Labordeta, s/n, 50006 Zaragoza','21',NULL,NULL,NULL),(30,'Universidad de Zaragoza',NULL,'21',NULL,NULL,NULL),(31,'Universidad de Zaragoza',NULL,'31',NULL,NULL,NULL),(32,'Universidad de Zaragoza',NULL,'8',NULL,NULL,NULL),(33,'Federación Aragonesa de Futbol',NULL,'8',NULL,NULL,NULL),(34,'Puente del Tercer Milenio','-','23',NULL,NULL,NULL),(35,'Puerta del Carmen',NULL,'20',NULL,NULL,NULL),(36,'Auditorio de Zaragoza',NULL,'21',NULL,NULL,NULL),(37,'Estación Delicias',NULL,'7',NULL,NULL,NULL),(38,'Real Seminario de San Carlos Borromeo',NULL,'21',NULL,NULL,NULL),(39,'Museo Pablo Serrano',NULL,'20',NULL,NULL,NULL),(40,'Parque del Agua',NULL,'31',NULL,NULL,NULL),(41,'Antigua Fábrica de Chocolates Orus',NULL,'7',NULL,NULL,NULL),(42,'Caixa Forum',NULL,'7',NULL,NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizaciones`
--

DROP TABLE IF EXISTS `localizaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localizaciones` (
  `localizaciones0` int(11) NOT NULL AUTO_INCREMENT,
  `localizaciones1` text,
  `localizaciones2` text,
  `localizaciones3` text,
  `localizaciones4` text,
  `localizaciones5` text,
  `localizaciones6` text,
  `localizaciones7` text,
  `localizaciones10` int(11) DEFAULT '0',
  `localizaciones11` int(11) DEFAULT '0',
  `localizaciones12` int(11) DEFAULT '0',
  `localizaciones13` int(11) DEFAULT '0',
  `localizaciones14` int(11) DEFAULT '0',
  `localizaciones15` int(11) DEFAULT '0',
  `localizaciones16` int(11) DEFAULT '0',
  `localizaciones17` int(11) DEFAULT '0',
  `localizaciones18` int(11) DEFAULT '0',
  `localizaciones19` int(11) DEFAULT '0',
  `localizaciones21` int(11) DEFAULT '0',
  `localizaciones22` int(11) DEFAULT '0',
  `localizaciones23` int(11) DEFAULT '0',
  `localizaciones24` int(11) DEFAULT '0',
  `localizaciones25` int(11) DEFAULT '0',
  `localizaciones26` int(11) DEFAULT '0',
  `localizaciones27` int(11) DEFAULT '0',
  `localizaciones28` int(11) DEFAULT '0',
  `localizaciones29` int(11) DEFAULT '0',
  `localizaciones30` int(11) DEFAULT '0',
  `localizaciones31` int(11) DEFAULT '0',
  `localizaciones32` int(11) DEFAULT '0',
  `localizaciones33` int(11) DEFAULT '0',
  `localizaciones34` int(11) DEFAULT '0',
  `localizaciones35` int(11) DEFAULT '0',
  `localizaciones36` int(11) DEFAULT '0',
  `localizaciones37` int(11) DEFAULT '0',
  `localizaciones38` int(11) DEFAULT '0',
  `localizaciones39` int(11) DEFAULT '0',
  `localizaciones40` int(11) DEFAULT '0',
  `localizaciones41` int(11) DEFAULT '0',
  `localizaciones42` int(11) DEFAULT '0',
  `localizaciones43` int(11) DEFAULT '0',
  `localizaciones44` int(11) DEFAULT '0',
  `localizaciones45` int(11) DEFAULT '0',
  `localizaciones46` int(11) DEFAULT '0',
  `localizaciones47` int(11) DEFAULT '0',
  `localizaciones48` int(11) DEFAULT '0',
  `localizaciones49` int(11) DEFAULT '0',
  `localizaciones50` int(11) DEFAULT '0',
  `localizaciones51` int(11) DEFAULT '0',
  `localizaciones52` int(11) DEFAULT '0',
  `localizaciones53` int(11) DEFAULT '0',
  PRIMARY KEY (`localizaciones0`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizaciones`
--

LOCK TABLES `localizaciones` WRITE;
/*!40000 ALTER TABLE `localizaciones` DISABLE KEYS */;
INSERT INTO `localizaciones` VALUES (1,'0','0','Provincia de Zaragoza',NULL,NULL,'10',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(2,'0','0','Provincia de Huesca',NULL,NULL,'10',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(3,'0','0','Provincia de Teruel',NULL,NULL,'10',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(4,'2','0','Monzón','41.9157645','0.19282160000000204','14',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(5,'2','0','Jaca','42.57171659999999','-0.5470553999999765','14',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(6,'2','0','La hoya de Huesca',NULL,NULL,'10',NULL,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(7,'1','11','Barrio de las Delicias',' 41.6492335',' -0.9091511999999966','15',' ',165,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,25,8,0,0,0,0,0,69,0,0,0),(8,'1','11','Juslibol El Zorongo','41.699705','-0.9223636000000397','14',NULL,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,0,0,0),(9,'1','10','Polígono Industrial Centrovía','41.6086007','-1.0801678000000265','14',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(10,'1','0','La Muela','41.5758184','-1.1161165999999412','14',NULL,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(11,'1','0','Zaragoza (capital)','41.6488226','-0.8890853000000334','15',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(12,'1','11','Barrio de las Fuentes','41.64734809999999','-0.8661078000000089','14',NULL,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,73,0,0,0),(13,'3','0','Teruel (Capital)','40.341029','-1.1102839999999787','12',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(16,'1','11','Barrio de Santa Isabel','41.6704984','-0.8317812999999887','15',NULL,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,61,0,0,0),(17,'2','0','Sabiñanigo','42.51935940000001','-0.3638114000000314','14',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(18,'2','6','Rasal','42.37545799999999','-0.5822401000000355','15',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(19,'1','11','Casco histórico','41.65393570000001','-0.8806230999999798','15',NULL,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,126,0,0,0),(20,'1','11','Centro','41.65393570000001','-0.8806230999999798','15',NULL,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0,0,0,0,0,168,0,0,0),(21,'1','11','Universidad','41.6385149','-0.9088778000000275','15',NULL,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0,0,0,0,0,184,0,0,0),(22,'1','11','Barrio San José','41.63036719999999','-0.8651303000000325','15',NULL,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,73,0,0,0),(23,'1','11','Barrio de La Almozara','41.66637','-0.9248843999999963','15',NULL,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,65,0,0,0),(24,'1','11','Barrio Oliver Valdefierro','41.6481123','-0.9346593999999868','15',NULL,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,64,0,0,0),(25,'1','11','Cartuja Baja','41.66637','-0.9248843999999963','15',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(26,'1','11','Barrio de Torrero La Paz','41.6240333','-0.8782392000000527','15',NULL,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,0,0,0),(27,'1','11','Torrecilla Val Madrid','41.66637','-0.9248843999999963','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(28,'1','11','Margen izquierda Arrabal','41.6666','-0.8803305000000137','14',NULL,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,64,0,0,0),(29,'3','13','Centro histórico','40.3429272','-1.1070872000000236','14',NULL,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(30,'1','11','Barrio de Casablanca','41.6305016','-0.9171108000000459','15',NULL,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,89,0,0,0),(31,'1','11','Barrio del Actur Rey Fernando','41.6716846','-0.8888689999999997','15',NULL,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,87,0,0,0),(32,'1','11','Barrio de Miralbueno','41.6593007','-0.9460759999999482','15',NULL,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,53,0,0,0),(33,'1','11','San Juan Mozarrifar','41.7165025','-0.8424976000000015','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(34,'1','11','Montañana','41.6832179','-0.8286110000000235','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0),(35,'1','11','San Gregorio','41.6923603','-0.8632837999999765','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(36,'1','11','Peñaflor','41.7610053','-0.7966751999999815','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(37,'1','11','Movera','41.6499913','-0.8240433999999368','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(38,'1','11','Garrapinillos','41.6826358','-1.0263029999999844','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,0,0,0),(39,'1','11','Venta del Olivar','41.6720097','-0.9581751000000622','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(40,'1','11','Monzalbarba','41.7043343','-0.9653412000000117','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(41,'1','11','Villarrapa','41.7403839','-1.0762752000000546','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(42,'1','11','Alfocea','41.7237256','-0.9539955000000191','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(43,'1','11','Casetas','41.7186518','-1.0370703999999478','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,0,0,0),(44,'3','0','Albarracín','40.4075581','-1.4438760000000457','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(45,'3','0','Cantavieja','40.5253607','-0.40486090000001695','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(46,'3','0','Fuentespalda','40.806389','0.06358269999998356','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(47,'3','0','Albarracín','40.4075581','-1.4438760000000457','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(48,'3','0','Cantavieja','40.5253607','-0.40486090000001695','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(49,'3','0','Fuentespalda','40.806389','0.06358269999998356','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(50,'3','0','Albarracín','40.4075581','-1.4438760000000457','15',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `localizaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solicitudes` (
  `solicitudes0` int(11) NOT NULL AUTO_INCREMENT,
  `solicitudes1` int(11) DEFAULT NULL,
  `solicitudes2` int(11) DEFAULT NULL,
  `solicitudes3` int(11) DEFAULT NULL,
  `solicitudes4` int(11) DEFAULT NULL,
  `solicitudes5` text,
  `solicitudes10` int(11) DEFAULT NULL,
  `solicitudes11` int(11) DEFAULT NULL,
  `solicitudes12` int(11) DEFAULT NULL,
  `solicitudes13` int(11) DEFAULT NULL,
  `solicitudes14` int(11) DEFAULT NULL,
  `solicitudes15` int(11) DEFAULT NULL,
  `solicitudes16` int(11) DEFAULT NULL,
  `solicitudes17` int(11) DEFAULT NULL,
  `solicitudes18` int(11) DEFAULT NULL,
  `solicitudes19` int(11) DEFAULT NULL,
  `solicitudes21` int(11) DEFAULT NULL,
  `solicitudes22` int(11) DEFAULT NULL,
  `solicitudes23` int(11) DEFAULT NULL,
  `solicitudes24` int(11) DEFAULT NULL,
  `solicitudes25` int(11) DEFAULT NULL,
  `solicitudes26` int(11) DEFAULT NULL,
  `solicitudes27` int(11) DEFAULT NULL,
  `solicitudes28` int(11) DEFAULT NULL,
  `solicitudes29` int(11) DEFAULT NULL,
  `solicitudes30` int(11) DEFAULT NULL,
  `solicitudes31` int(11) DEFAULT NULL,
  `solicitudes32` int(11) DEFAULT NULL,
  `solicitudes33` int(11) DEFAULT NULL,
  `solicitudes34` int(11) DEFAULT NULL,
  `solicitudes35` int(11) DEFAULT NULL,
  `solicitudes36` int(11) DEFAULT NULL,
  `solicitudes37` int(11) DEFAULT NULL,
  `solicitudes38` int(11) DEFAULT NULL,
  `solicitudes39` int(11) DEFAULT NULL,
  `solicitudes40` int(11) DEFAULT NULL,
  `solicitudes41` int(11) DEFAULT NULL,
  `solicitudes42` int(11) DEFAULT NULL,
  `solicitudes43` int(11) DEFAULT NULL,
  `solicitudes44` int(11) DEFAULT NULL,
  `solicitudes45` int(11) DEFAULT NULL,
  `solicitudes46` int(11) DEFAULT NULL,
  `solicitudes47` int(11) DEFAULT NULL,
  `solicitudes48` int(11) DEFAULT NULL,
  `solicitudes49` int(11) DEFAULT NULL,
  `solicitudes50` int(11) DEFAULT NULL,
  `solicitudes51` int(11) DEFAULT NULL,
  `solicitudes52` int(11) DEFAULT NULL,
  `solicitudes53` int(11) DEFAULT NULL,
  PRIMARY KEY (`solicitudes0`)
) ENGINE=InnoDB AUTO_INCREMENT=490 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
INSERT INTO `solicitudes` VALUES (270,0,0,0,0,'2015-10-20',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(271,0,0,0,0,'2015-10-21',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(272,8,2,1,2,'2015-10-21',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(273,5,1,2,2,'2015-10-21',0,0,0,3,5,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0),(274,5,2,1,2,'2015-10-22',1,2,3,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,0),(275,11,2,2,2,'2015-10-22',1,3,9,3,2,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0),(276,11,1,4,3,'2015-10-22',5,9,7,3,2,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,2,1,3,0),(277,11,2,2,1,'2015-10-22',1,1,2,3,4,2,0,0,0,1,0,1,0,0,2,2,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0),(278,1,1,2,3,'2015-10-24',1,4,4,3,2,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,2,1,1,0),(279,0,0,0,0,'2015-10-24',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(280,1,1,2,1,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(281,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(282,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(283,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(284,0,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(285,0,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(286,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(287,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(288,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(289,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(290,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(291,1,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(292,0,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(293,10,0,0,0,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0),(294,11,0,0,0,'2015-10-24',0,0,4,4,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0),(311,9,1,2,1,'2015-10-24',3,4,2,3,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,2,2,1,0),(314,1,2,2,2,'2015-10-24',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(315,11,1,1,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(316,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(317,2,1,2,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(318,1,2,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(319,9,2,2,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(320,11,2,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(321,9,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(322,9,1,3,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(323,1,2,4,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(324,1,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(325,11,2,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(326,8,2,2,3,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(327,9,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(328,1,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(329,11,1,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(330,9,1,2,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(331,1,1,2,3,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(332,9,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(333,11,2,0,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(334,11,1,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(335,9,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(336,11,1,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(337,1,0,0,0,'2015-10-25',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(338,1,1,2,2,'2015-10-25',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(339,11,1,1,1,'2015-10-25',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(340,8,1,2,2,'2015-10-25',4,6,5,4,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(341,1,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(342,11,2,1,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(343,1,2,2,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(344,11,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(345,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(346,1,2,1,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(347,1,2,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(348,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(349,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(350,1,2,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(351,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(352,1,1,2,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(353,1,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(354,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(355,1,2,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(356,1,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(357,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(358,11,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(359,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(360,11,1,1,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(361,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(362,0,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(363,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(364,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(365,11,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(366,11,1,1,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(367,11,2,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(368,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(369,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(370,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(371,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(372,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(373,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(374,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(375,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(376,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(377,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(378,11,2,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(379,11,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(380,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(381,12,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(382,11,1,2,2,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(383,11,0,0,0,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(384,11,2,0,3,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(385,11,2,2,3,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(386,11,2,4,4,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(387,11,1,3,1,'2015-10-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(388,11,1,3,3,'2015-10-25',6,3,4,2,6,1,0,0,0,0,1,1,0,0,2,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0),(389,11,0,0,0,'2015-10-27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(390,11,0,0,0,'2015-10-28',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(391,0,0,0,0,'2015-10-28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(392,11,1,2,2,'2015-10-28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(393,0,0,0,0,'2015-10-28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(394,0,0,0,0,'2015-10-28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(395,11,0,0,0,'2015-10-28',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(396,11,1,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(397,11,1,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(398,11,0,0,0,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(399,11,1,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(400,11,1,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(401,11,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(402,11,1,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(403,11,2,2,1,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(404,1,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(405,11,2,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(406,1,2,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(407,1,0,4,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(408,1,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(409,11,1,0,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(410,1,2,4,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(411,9,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(412,9,2,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(413,1,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(414,11,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(415,10,2,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(416,11,2,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(417,9,0,0,0,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(418,0,1,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(419,11,1,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(420,1,2,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(421,9,2,3,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(422,6,2,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(423,1,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(424,1,1,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(425,3,2,2,3,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(426,11,2,2,2,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(427,1,2,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(428,1,2,2,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(429,1,1,4,4,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(430,1,1,2,1,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(431,1,2,2,1,'2015-11-01',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(432,1,1,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(433,10,2,2,3,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(434,1,2,2,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(435,1,2,2,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(436,11,2,3,4,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(437,1,1,4,4,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(438,11,2,2,4,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(439,1,2,1,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(440,9,1,4,4,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(441,1,2,2,3,'2015-11-02',9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0),(442,1,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(443,1,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(444,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(445,11,1,1,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(446,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(447,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(448,0,1,4,3,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(449,11,1,4,3,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(450,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(451,11,2,2,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(452,11,1,4,3,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(453,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(454,1,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(455,1,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(456,11,1,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(457,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(458,1,1,3,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(459,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(460,11,1,1,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(461,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(462,11,2,1,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(463,11,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(464,11,1,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(465,1,2,2,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(466,1,2,2,2,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(467,1,2,2,1,'2015-11-02',5,5,4,0,7,2,0,0,1,0,0,1,0,0,0,3,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,2,1,2,0),(468,1,2,2,1,'2015-11-02',5,5,4,0,7,2,0,0,1,0,0,1,0,0,0,3,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,2,1,2,0),(469,1,2,2,1,'2015-11-02',5,5,4,0,7,2,0,0,1,0,0,1,0,0,0,3,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,2,1,2,0),(470,1,2,2,1,'2015-11-02',5,5,4,0,7,2,0,0,1,0,0,1,0,0,0,3,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,2,1,2,0),(471,1,2,2,1,'2015-11-02',5,5,4,0,7,2,0,0,1,0,0,1,0,0,0,3,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,2,1,2,0),(472,1,2,2,1,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(473,1,1,2,2,'2015-11-02',2,3,4,4,2,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,2,2,0),(474,0,0,0,0,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(475,0,0,0,0,'2015-11-02',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(476,1,1,1,1,'2015-11-02',9,8,8,6,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,2,1,1,0),(477,9,2,2,2,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(478,22,2,2,2,'2015-11-03',9,7,5,8,1,0,0,0,1,1,1,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,2,1,1,0),(479,11,2,2,2,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(480,12,2,2,1,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(481,24,2,2,1,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(482,22,2,2,2,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(483,24,2,2,1,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(484,23,1,2,1,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(485,15,0,2,1,'2015-11-03',8,3,2,7,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,0),(486,24,1,1,3,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(487,15,1,2,3,'2015-11-03',8,1,6,6,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,2,1,0),(488,20,1,2,1,'2015-11-03',8,5,1,3,0,1,0,0,1,1,1,0,0,0,2,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0),(489,2,1,1,2,'2015-11-03',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-04 19:51:40
