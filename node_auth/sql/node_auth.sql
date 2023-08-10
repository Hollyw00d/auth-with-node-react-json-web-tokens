-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (x86_64)
--
-- Host: localhost    Database: node_auth
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `reset`
--

DROP TABLE IF EXISTS `reset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset`
--

LOCK TABLES `reset` WRITE;
/*!40000 ALTER TABLE `reset` DISABLE KEYS */;
INSERT INTO `reset` VALUES (1,'zzzz@zzzz.com','aj581h64ij'),(2,'zzzz@zzzz.com','cde025768c'),(3,'zzzz@zzzz.com','0h26db4e26'),(4,'zzzz@zzzz.com','jabfb6j8da'),(5,'zzzz@zzzz.com','786dddg0j1'),(6,'zzzz@zzzz.com','146h624ig8'),(7,'zzzz@zzzz.com','dfg2hh1aab'),(8,'zzzz@zzzz.com','f3fbb5006c'),(9,'zzzz@zzzz.com','619i7ea5ba'),(10,'zzzz@zzzz.com','165c103he1'),(11,'zzzz@zzzz.com','3f719b6dif'),(12,'zzzz@zzzz.com','f5766hh6i8'),(13,'zzzz@zzzz.com','hhd6ec9f2a'),(14,'zzzz@zzzz.com','i561ffj2fa'),(15,'zzzz@zzzz.com','a3i27f6865'),(16,'zzzz@zzzz.com','9i9d5168f2');
/*!40000 ALTER TABLE `reset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'a','a','d@a.com','$2a$12$ALmYfyAiHYI2HE1vIF8fAuE/kkNBcn2OyIStLEjWGGILiUkhP1wbC'),(5,'a','a','e@a.com','$2a$12$DMzd2zBwWRSGEHcrm5ag4.SMrjg0fdGhnnXqTOSGGFADvVm0e8/CC'),(6,'a','a','f@a.com','$2a$12$3jT4UUk6fVgkMiTZz9OlJucrL7AeE/PJOiexfJ8NB/Am6aKfTqpqG'),(7,'a','a','g@a.com','$2a$12$YByzxyXVXB9LorRfRoTiXuw78fNCd49jwLorCouUNlUGpoJLePazG'),(8,'a','a','h@a.com','$2a$12$E9Yl0dLPRC53Y9jV/st22eU6SUNWOUu2PFcZigE11GSDeF.9I0Oxa'),(9,'a','a','i@a.com','$2a$12$nsBXjCVHRAsmpVKXBANSH.swEuUvX/AgRP2C6DYhAq5Hi/uKTfQCi'),(10,'a','a','j@a.com','$2a$12$.sPA5zmlz5zTPfYlpQUFCObJAiveCvB9P3.iAxaS9.LHVawvyHita'),(12,'a','a','k@a.com','$2a$12$RDDOSvjzyY/EsldDumlOtebmpsIaS3dtrsltU5ik9yZcqopp4LnsO'),(13,'a','a','l@a.com','$2a$12$7kXytKAQmny.kfsy/lRAJeL.gBAm2bIkCNqj1X1v5DjYcWzB/U4SS'),(14,'Blah','Beeboo','w@a.com','$2a$12$/4tySnUhWYQjtFyGDjQcA.W63krz5WvR7YFrRof2l2a.KDu9v4Mza'),(16,'Blah','Beeboo','w@w.com','$2a$12$0iMO.3qxZUH0wTjiG87jTuV5Efv02.t94LnFr3qr.xG0Rg4ewTVp6'),(17,'Blah','Beeboo','bbb@w.com','$2a$12$Bxaug9XWHimFHABYuwtaGeXzLf0zk1SWr/iCWsHlYunyy8kCaAXYG'),(18,'Blah','Beeboo','bbb@wwwwww.com','$2a$12$fgcgRLyDLWI30sZ81Lmu3ukSnykA2.Dn/.8cnK9E5fFa66hLNphAy'),(19,'Blah','Beeboo','abbb@wwwwww.com','$2a$12$I/qzaVGLeE28PV56XrK0Tu0dX6efYT.TD0gh1dL0gyx9yLUspt3by'),(20,'Blah','Beeboo','aaaaabbb@wwwwww.com','$2a$12$ob0dQZYtHEO5cU0cQN6Pwe1zCyKk2vzVzocvX3rJJdvbs8GA3bQqe'),(21,'Blah','Beeboo','aaagsfdgfsdkgfdjabbb@wwwwww.com','$2a$12$64KZmVSQ.dc480WYqH4Hm.Tkdq4jUxVbZrXJr1O9EdDSv0QtmXBim'),(22,'Blah','Beeboo','aaagsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$NVxTsZTeAEEWMGiWz9YGzOlQRdXP35oBu3zo2VIpxqPEUCyxTmTL2'),(23,'Blah','Beeboo','aaagasdfdaksfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$BAC9jDb4DvNtsardyoFV0OVQRiaWgsUBd3NJgFHOAzUmeKIUZWOG.'),(24,'Blah','Beeboo','aaagasdfdaasdfkdfjssfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$Tx9dr2PPUMJtqfgRhhQfFO5Eoa/pxGP3mAEhJN1Zry01Q7W.EWG0i'),(25,'Blah','Beeboo','aaagasdfdaasasdfdskjdfkdfjssfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$DFPI2JpWCYl39rA9ydLR6uPM9UKBw.Kl9IEWzY5xr9dteeDUpOM32'),(26,'Blah','Beeboo','aaagasdfdaasasdfdskjdfkdasdfkdsjfjssfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$xQEkIhw60rIW7QRGUoQ9NeLG3QYBV5uT.uZnwyldUJ3DG4yogYn3W'),(27,'Blah','Beeboo','aaagasdfdaasasdfdskjdasdkfjdfskjfkdasdfkdsjfjssfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$Z0uGUpSoWU7LTH6VNCqrJet7Q.2TpHmPbwVCdToKL352kYBPf5qOW'),(28,'Blah','Beeboo','aaagasdfdadfkdsjfjssfjsfdgfsdkgfdfsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$/VyRmuBuHsKYDzwIKywER.DVOU2QqnzTnG.glYczyx1aCVQqbc0Tq'),(29,'Blah','Beeboo','aaagasdfdsdgfdkgjgfdkjabbb@wwwwww.com','$2a$12$O.jEfr.mOAjWEHP7uws98OPR8FkPEV1xr/33HCtsKBp0IKLu6u/B6'),(31,'Blah','Beeboo','aaagasdfdsdgfdkgasdfkdsafjjgfdkjabbb@wwwwww.com','$2a$12$YKv0IRy9u5efPILQ2IKxB.ApOwqabGkzvK5dMpg09862NheI1Dn0G'),(32,'Blah','Beeboo','aaagasdfdsdgfdkgabbbbbsdfkdsafjjgfdkjabbb@wwwwww.com','$2a$12$LmXgO0YIEN9YzYveCcLyHOfqgrv3i96L4jF5y2ck371VKQQmJHnzW'),(33,'Blah','Beeboo','aaagasdfdsdgfdkdfadskfjsdfksjj99gabbbbbsdfkdsafjjgfdkjabbb@wwwwww.com','$2a$12$G/I6C37qkwfrV.FLn0isqeQd9dLNqgP8BZ3St9mF4aXz8cwYGH6Uu'),(34,'Blah','Beeboo','999@wwwwww.com','$2a$12$K2exGfz44eOajkzbXjjf7uWVCt4MTprLZklo6Fx5DDUYsRaoRchm.'),(35,'Blah','Beeboo','999@wwwwww9999.com','$2a$12$w8ypxmsAUKkHJmpQR5CzNuXUj2h5dDV51ewJhVp9djNoYa8axhQo2'),(36,'Blah','Beeboo','999@wwwwww9999000.com','$2a$12$pqoJWygFxB69gNUch8q1dO7FKnYQSkXjKjQzoMXzzyXTgADlFGDgW'),(37,'E','EEEK','e@e.com','$2a$12$o8k.x4Bsc3fNSQWU9RLbd.G6kmn7//fYt.VEOeyL5SX9h9GVPcIJO'),(39,'g','G','g@g.com','$2a$12$o2AkzkT9feMe1zzEg8/r8OakqlJcCjJd.vS8PusZeQ.ZzidjLcA1y'),(40,'h','H','h@h.com','$2a$12$F1UbAKSn5aPG0/Nuq4ErB.qPURPMvIx8KZQ0pqL0ZkKooE6E00fnW'),(41,'x','X','x@x.com','$2a$12$2umfw5K85Yw1.J9xj2OlceXeGQvtra6eRdn98tuWZHNCANXqn1EoO'),(43,'y','y','y@y.com','$2a$12$g/8m/iNRbXvdJ.YTvwVSG.C0.gFx5mrdMFS.9B27ECOwfFAJfuymm'),(45,'ww','ww','ww@ww.com','$2a$12$kCzg4.nP7vUXr1WFYDVXp.VwEdyhWCJIdNsO0r6Kxg.XBZgtvCmUC'),(46,'z','z','z@z.com','$2a$12$4KW/BmmXkgH6kbeYwIlVUeFp9l9h1/YBLTPkpccoEU6MktjKADiQ2'),(47,'zz','zz','zz@zz.com','$2a$12$mRJAZkKl32Au3GxfBtMC6.FcI/OelrcjpyCYm2F7YJLstI4o5yL1i'),(48,'aa','aa','aa@aa.com','$2a$12$PifTFPXH1/nlW8Fdjh8Plu5mpSq/7QdEdkLhzIO451AP4wEf5t0aO'),(49,'cc','cc','cc@cc.com','$2a$12$gzWXtGPRKpUc5Jyv526p/.M3i7lLFIOXpJtLDNpxUPR9oPFt/aW5i'),(50,'dd','dd','dd@dd.com','$2a$12$l5Da09c5l8CQ2/GxORdvGOyT103Poq3wA3zwl8Wxyl0.QOhf8.1nq'),(51,'zzz','zzz','zzz@zzz.com','$2a$12$58EYHkVvrxqXYUJRMhMn8uu3eCstq/7X10sPscOixpJu/3WkTL/Gy'),(52,'aaa','aaa','aaa@aaa.com','$2a$12$.QsXeW8ae.Fys7rsDHFF2uryh4ieBr5yEGDbuJyI6wbWhEtsz7xuG'),(53,'bbb','bbb','bbb@bbb.com','$2a$12$kTtMMQJQUZAUpG1X/Uofv.nNgzstr3p7LLicSy0mKbWXVYCMDECNS'),(54,'uw','uw','uw@uw.com','$2a$12$E7D8jYbscTP8hPlFWR4zGOsXPX/u4de5lW3gYkKlkOUxecetdQZzu'),(55,'SCC','SCC','scc@scc.com','$2a$12$9kVK5u5ixyKtHeQ94wFKw.Ku/tQYwU9N9H4vBQgJ388Pb5sTMPEzq'),(56,'BC','BC','bc@bc.com','$2a$12$6q3bF9ORGkqLKVXRbUxnjeC.SO.C41DKn1QDetnyYRWIs7Y0ugA4C'),(57,'USA','USA','usa@usa.com','$2a$12$NxRDlat1rDQcDgPQTK5whO7b/ASduNhMUrt5RXf8mwOl4EeKXUUFG'),(58,'uk','uk','uk@uk.com','$2a$12$poXJWLqZUwE0akwfhHl5L.rLBJVjFLKmrz4Km5QCllfDAf9MYKCkq'),(59,'oo','oo','oo@oo.com','$2a$12$9kcggroxvneCmB5nIH9yLOTqpZA3DZmj66Ceob1v4ds3FUh5XgLNC'),(60,'pp','pp','pp@pp.com','$2a$12$BdUCaRisC.TLXdJuxZlGgubYoSQG9a7kRMA6R1t/TwaOQQynXDHy2'),(61,'mmm','mmm','mmm@mmm.com','$2a$12$/ne/ChpzhYeJz9BgDvoNP.F5iVzgGgXn1rZ/tPCsxIZmI12B/H7HW'),(62,'zzzz','zzzz','zzzz@zzzz.com','$2a$12$Gn9QIpq0wRRw32L.uQQJQO/NvlX/3ZFWdVU3n3C0ITQTfKdYnGXVe'),(63,'aaaa','aaaa','aaaa@aaaa.com','$2a$12$JSIeymMhP8/0nrNyLM5w8ugFIUYaBHSpfS68aVdF68MEVsAMMgDwi');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-07 12:09:31
