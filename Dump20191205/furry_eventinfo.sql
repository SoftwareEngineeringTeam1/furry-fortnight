CREATE DATABASE  IF NOT EXISTS `furry` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `furry`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: furry
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventinfo`
--

DROP TABLE IF EXISTS `eventinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventinfo` (
  `EventID` mediumint(9) NOT NULL AUTO_INCREMENT,
  `EventName` varchar(255) NOT NULL,
  `CategoryID` mediumint(9) NOT NULL,
  `LocationID` mediumint(9) NOT NULL,
  `EventTime` time NOT NULL,
  `EventDate` date NOT NULL,
  `CreatedBy` mediumint(9) NOT NULL,
  `CreatedDate` date NOT NULL,
  `ModifiedDate` date NOT NULL,
  `Capacity` varchar(255) NOT NULL,
  `EventDescription` varchar(255) DEFAULT NULL,
  `EndTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`EventID`),
  KEY `FK_EVENT_CATEGORY` (`CategoryID`),
  KEY `FK_EVENTLOCATION_EVENT` (`LocationID`),
  KEY `FK_USERCREATED_EVENT` (`CreatedBy`),
  CONSTRAINT `FK_EVENTLOCATION_EVENT` FOREIGN KEY (`LocationID`) REFERENCES `eventlocation` (`LocationID`),
  CONSTRAINT `FK_EVENT_CATEGORY` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`),
  CONSTRAINT `FK_USERCREATED_EVENT` FOREIGN KEY (`CreatedBy`) REFERENCES `usertable` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventinfo`
--

LOCK TABLES `eventinfo` WRITE;
/*!40000 ALTER TABLE `eventinfo` DISABLE KEYS */;
INSERT INTO `eventinfo` VALUES (100,'Playing UNO on GC',4,3,'13:00:00','2019-11-26',1,'2019-11-23','2019-11-23','4','Let\'s play UNO!','15:00:00'),(101,'ShellHacks',2,3,'18:00:00','2019-11-30',3,'2019-10-01','2019-10-01','100','Hackathon Time!!','23:59:00');
/*!40000 ALTER TABLE `eventinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-05 11:27:45
