-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2017 at 12:29 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `ID` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `content` varchar(400) NOT NULL,
  `author_name` varchar(20) NOT NULL,
  `upvote` int(11) NOT NULL,
  `downvote` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`ID`, `title`, `content`, `author_name`, `upvote`, `downvote`) VALUES
(1, 'test title', 'test content qwerty asd xzcv asfsd', 'tester', 20, 10),
(3, 'post', 'post', 'post', 4, 3),
(4, 'post2', 'post2', 'post2', 3, 2),
(5, 's', 's', 's', 0, 0),
(6, 'sample', 'this is first', 'praveen', 0, 0),
(7, 'Layoff', 'layoff at microsoft', 'praveen', 0, 0),
(8, 'Demonitisation', 'To kill black money', 'PM', 0, 0),
(9, 'good', 'good luck', 'god', 0, 0),
(10, 'sample', 'bla bla', 'unknown', 0, 0),
(11, '', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `comment` varchar(50) NOT NULL,
  `comment_author` varchar(20) NOT NULL,
  `blogid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`ID`, `comment`, `comment_author`, `blogid`) VALUES
(1, 'test comment', 'tesster2', 1),
(2, 'test comment next', 'tesster2 next', 1),
(3, 'post', 'post', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
