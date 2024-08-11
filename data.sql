-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2024 at 02:50 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `order_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `history_prints`
--

CREATE TABLE `history_prints` (
  `id` int(11) NOT NULL,
  `printer_id` varchar(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `table_number` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `table_number`, `total_price`, `createdAt`, `updatedAt`) VALUES
(1, 1, 87000, '2024-08-07 17:36:40', '2024-08-07 17:36:40');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product` varchar(50) NOT NULL,
  `category` varchar(25) NOT NULL,
  `variant` varchar(20) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `sub_total` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product`, `category`, `variant`, `quantity`, `price`, `sub_total`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Jeruk', 'Minuman', 'Dingin', 1, 12000, 12000, '2024-08-07 17:36:40', '2024-08-07 17:36:40'),
(2, 1, 'Kopi', 'Minuman', 'Panas', 1, 6000, 6000, '2024-08-07 17:36:40', '2024-08-07 17:36:40'),
(3, 1, 'Nasi Goreng + Jeruk Dingin', 'Promo|Makanan|Minuman', NULL, 2, 23000, 46000, '2024-08-07 17:36:40', '2024-08-07 17:36:40'),
(4, 1, 'Teh', 'Minuman', 'Manis', 1, 8000, 8000, '2024-08-07 17:36:40', '2024-08-07 17:36:40'),
(5, 1, 'Mie', 'Makanan', 'Goreng', 1, 15000, 15000, '2024-08-07 17:36:40', '2024-08-07 17:36:40');

-- --------------------------------------------------------

--
-- Table structure for table `printers`
--

CREATE TABLE `printers` (
  `id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `category` varchar(20) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `printers`
--

INSERT INTO `printers` (`id`, `name`, `category`, `createdAt`, `updatedAt`) VALUES
('A', 'Printer Kasir', NULL, '2024-08-07 01:35:01', '2024-08-07 01:35:01'),
('B', 'Printer Dapur', 'Makanan', '2024-08-07 01:35:25', '2024-08-07 01:35:25'),
('C', 'Printer Bar', 'Minuman', '2024-08-07 01:35:40', '2024-08-07 01:35:40');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product` varchar(50) NOT NULL,
  `category` varchar(25) NOT NULL,
  `variant` varchar(25) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product`, `category`, `variant`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Jeruk', 'Minuman', 'Dingin', 12000, '2024-08-07 02:10:40', '2024-08-07 02:10:40'),
(2, 'Jeruk', 'Minuman', 'Panas', 10000, '2024-08-07 02:10:40', '2024-08-07 14:53:53'),
(3, 'Teh', 'Minuman', 'Manis', 8000, '2024-08-07 02:10:40', '2024-08-07 02:10:40'),
(4, 'Teh', 'Minuman', 'Tawar', 5000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(5, 'Kopi', 'Minuman', 'Dingin', 8000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(6, 'Kopi', 'Minuman', 'Panas', 6000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(7, 'Extra Es Batu', 'Minuman', NULL, 2000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(8, 'Mie', 'Makanan', 'Goreng', 15000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(9, 'Mie', 'Makanan', 'Kuah', 15000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(10, 'Nasi Goreng', 'Makanan', NULL, 6000, '2024-08-07 02:15:05', '2024-08-07 02:15:05'),
(11, 'Nasi Goreng + Jeruk Dingin', 'Promo|Makanan|Minuman', NULL, 23000, '2024-08-07 15:00:20', '2024-08-07 15:01:50');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `table_number` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `table_number`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Meja No 1', '2024-08-07 02:18:18', '2024-08-07 14:39:36'),
(2, 2, 'Meja No 2', '2024-08-07 02:18:18', '2024-08-07 14:39:41'),
(3, 3, 'Meja No 3', '2024-08-07 02:18:18', '2024-08-07 14:39:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history_prints`
--
ALTER TABLE `history_prints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `printers`
--
ALTER TABLE `printers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history_prints`
--
ALTER TABLE `history_prints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
