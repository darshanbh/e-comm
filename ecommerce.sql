-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce_db
-- ------------------------------------------------------
-- Server version	8.0.42

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

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Logitech MX Master','Wireless ergonomic mouse',7500.00,'mouselogitech.jpeg','Electronics',50),(2,'Samsung Note pen S25','Official Samsung stylus',2999.00,'S pen.jpg','Accessories',30),(3,'Zebronics Zeb-transformer','Gaming keyboard and mouse combo',1499.00,'zeb Keyboard.jpg','Gaming',20),(4,'Apple AirPods Pro','Wireless earbuds with ANC',24999.00,'apple airbud.jpg','Audio',15),(5,'JBL 720BT wireless','over ear',4499.00,'jbl headphone.jpg','Electronics',50),(6,'Samsung S24 Ultra ','Official Samsung stylus',119999.00,'samsung s24 ultra.jpg','mobile',30),(7,'Haier 109cm 43 Inch Google tv','tv ',28770.00,'haier tv.jpg','home',20),(8,'Apple iPhone 16 pro Max','Titanium',137900.00,'iphone 16 pro max.jpg','mobile',15),(9,'Realme Buds T110 with 12.4mm drive','Black',1199.00,'realme buds.jpg','electronics',15),(10,'Samsung Smart watch 7','Titanium',8700.00,'samsung watch.jpg','accesiories',15);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Darshan','darshan@gmail.com','$2b$10$WSqVisyTI.RpPflFmq4CIOerRFxk9GQ4IPV2atA2ZVtvlEau.0FIy'),(2,'Johan','Johan@gmail.com','$2b$10$5uOVaC./A7klrCDii.WtZe/lnhaMDw8Ow1QtP1oQRUYMDAKmGs2dW'),(3,'Prajwal','prajwal@gmail.com','$2b$10$8nVQffLkO76gNn16uw0zuu.PeATvfZ5x.8YJ9L5pB3NsGOEfLy/SG'),(4,'abhi','abhi@gmail.com','$2b$10$Y5eAe0eW4zJquXtUgzwgpun6Hgi.mzSTCh3e6rpwYE2s37xYhL5TK'),(5,'david','david@gmail.com','$2b$10$kOx3UNLi0jjPqbxSYo9ieuwIGUYboRRTriwS9xSL2Awh/wcZBIYze');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-04 15:41:05
