-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2015 a las 08:22:12
-- Versión del servidor: 5.5.44
-- Versión de PHP: 5.3.10-1ubuntu3.21
CREATE DATABASE IF NOT EXISTS precios;
use precios;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `precios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE IF NOT EXISTS `articulos` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(30) NOT NULL,
  `dolares` decimal(6,2) NOT NULL,
  `euros` decimal(6,2) NOT NULL,
  `libras` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `descripcion`, `dolares`, `euros`, `libras`) VALUES
(1, 'Pendrive 16GB', 23.00, 21.61, 34.75),
(2, 'Disco Serial ATA', 45.00, 42.28, 29.78),
(3, 'Pantalla Sony 28 pulgadas', 154.00, 144.70, 101.92),
(4, 'HP Laser Color ', 245.00, 230.21, 162.14),
(5, 'fffff', 33.33, 43.22, 43.12),
(6, 'otro', 22.22, 33.33, 44.44);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
