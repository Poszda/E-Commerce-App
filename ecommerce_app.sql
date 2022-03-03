-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2022 at 06:08 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `ordered_items`
--

CREATE TABLE `ordered_items` (
  `id` int(100) NOT NULL,
  `order_id` int(100) NOT NULL,
  `product_id` int(100) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordered_items`
--

INSERT INTO `ordered_items` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(3, 41, 3, 13),
(4, 41, 5, 7),
(32, 58, 1, 2),
(33, 58, 2, 3),
(34, 59, 1, 1),
(35, 60, 1, 2),
(36, 61, 1, 1),
(37, 62, 2, 4),
(38, 63, 2, 1),
(39, 63, 3, 2),
(40, 64, 1, 3),
(41, 64, 2, 1),
(42, 65, 6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `total_price` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `country` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` timestamp(6) NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `total_price`, `address`, `country`, `fullname`, `phone_number`, `created_at`) VALUES
(41, '5100$', 'Str.Mioritei BL.11 Scara 1 Ap.15', 'Romania', 'Posdarescu Mihai', '+40772091928', '2022-02-12 14:34:47.665502'),
(58, '1500$', 'Adresa Miorita 7', 'Romania', 'Popescu Ionela', '0733987465', '2022-02-12 16:49:28.067407'),
(59, '450$', 'a', 'a', 'a', 'a', '2022-02-15 17:26:08.237182'),
(60, '900$', 'a', 'a', 'a', 'a', '2022-02-15 17:27:19.073345'),
(61, '450$', 'e', 'e', 'e', 'e', '2022-02-15 17:28:14.073885'),
(62, '800$', 'r', 'r', 'r', 'r', '2022-02-15 17:28:55.162381'),
(63, '500$', 's', 's', 's', 's', '2022-02-15 17:30:23.069494'),
(64, '1550$', 'r', 'r', 'r', 'r', '2022-02-15 17:34:42.518072'),
(65, '3960$', 'Gorj', 'Germania', 'Bazdoaca Mihai', '0999', '2022-02-16 11:40:05.294949');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `img2` varchar(100) NOT NULL,
  `img3` varchar(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `img`, `img2`, `img3`, `quantity`, `category`, `description`, `details`) VALUES
(1, 'SMSG R8-99 Robot', '450$', '/images/robot2.png', '/images/robot2_2.png', '/images/robot2_3.png', 0, 'robots', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae tristique risus, et accumsan neque. Vestibulum luctus eu enim ac rhoncus. Etiam et urna faucibus, scelerisque velit eget, lobortis ipsum. Integer pulvinar, arcu nec lobortis ultrices, ex elit accumsan lectus.', 'Taurillon Oujan leather \\n 26 x 19 x 11 cm \\n Made in Belg'),
(2, 'Flying Spring Drone', '200$', '/images/drone1.png', '/images/drone1_2.png', '/images/drone1_3.png', 19, 'drones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper massa sit amet sem pulvinar vehicula. Vestibulum molestie purus ac sem ornare interdum. Nulla felis quam, blandit ultrices porta et, volutpat quis justo. Vestibulum dignissim ut libero vel pellentesque. Fusce.', 'Taurillon Oujan leather \\n 190 x 212 x 111 cm \\n Made in USA'),
(3, 'Biotic Meta Fly Drone', '150$', '/images/drone2.png', '/images/drone2_2.png', '/images/drone2_3.png', 20, 'drones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper massa sit amet sem pulvinar vehicula. Vestibulum molestie purus ac sem ornare interdum. Nulla felis quam, blandit ultrices porta et, volutpat quis justo. Vestibulum dignissim ut libero vel pellentesque. Fusce.', 'Taurillon Oujan leather \\n 25 x 59 x 67 cm \\n Made in Italy'),
(4, 'Axiom ZH-999 VR', '220$', '/images/oculus1.png', '/images/oculus1_2.png', '/images/oculus1_3.png', 4, 'VR', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius posuere orci vitae lobortis. Morbi nec mauris a nisi interdum sagittis id ut ligula. Aliquam volutpat vulputate mauris. Morbi commodo pharetra ligula, vitae varius eros dictum et. Etiam in enim.', 'Taurillon Oujan leather \\n 123 x 223 x 99 cm \\n Made in France'),
(5, 'Nokia Bionic 9 Robot', '450$', '/images/robot1.png', '/images/robot1_2.png', '/images/robot1_3.png', 11, 'robots', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien libero, tempus eu lacinia nec, fermentum in mi. Sed id risus id lorem pharetra lacinia sed sit amet enim. Morbi nec erat eu ante vestibulum euismod nec sed velit. Curabitur.', 'Taurillon Oujan leather \\n 26 x 19 x 11 cm \\n Made in Germany'),
(6, 'SMSG 1800 PH Drone', '990$', '/images/drone3.png', '/images/drone3_2.png', '/images/drone3_3.png', 96, 'drones', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et felis a augue ultricies rhoncus et nec sapien. Morbi pharetra sed nulla at cursus. Morbi vitae arcu augue. Vivamus accumsan porttitor erat, vel tempus purus lobortis sed. Duis ultrices purus.', 'Taurillon Oujan leather \\n 26 x 19 x 11 cm \\n Made in Japan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ordered_items`
--
ALTER TABLE `ordered_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `constrangere1` (`order_id`),
  ADD KEY `constrangere2` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ordered_items`
--
ALTER TABLE `ordered_items`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ordered_items`
--
ALTER TABLE `ordered_items`
  ADD CONSTRAINT `constrangere1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `constrangere2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
