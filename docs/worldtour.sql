-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 02, 2022 at 05:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `worldtour`
--

-- --------------------------------------------------------

--
-- Table structure for table `choix`
--

CREATE TABLE `choix` (
  `id_choix` int(11) NOT NULL,
  `id_question` int(11) NOT NULL,
  `intitule` varchar(255) NOT NULL,
  `isCorrect` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `choix`
--

INSERT INTO `choix` (`id_choix`, `id_question`, `intitule`, `isCorrect`) VALUES
(1, 1, 'Berlin', 0),
(2, 1, 'Paris', 1),
(3, 1, 'Alger', 0),
(4, 2, 'Emmanuel Macron', 1),
(5, 2, 'Donald Trump', 0),
(6, 2, 'Sergio Mattarella', 0),
(7, 3, 'Notre Patrie', 0),
(8, 3, 'La Marseillaise', 1),
(9, 3, 'L\'Aube Nouvelle', 0),
(10, 4, 'Livre', 0),
(11, 4, 'Dinar', 0),
(12, 4, 'Euro', 1),
(13, 5, 'Français', 1),
(14, 5, 'Anglais', 0),
(15, 5, 'Allemand', 0),
(16, 6, 'Le fromage', 1),
(17, 6, 'Le lard', 0),
(18, 6, 'Les oeufs', 0),
(19, 7, 'La sauce gribiche', 1),
(20, 7, 'La sauce madère', 0),
(21, 7, 'La sauce mayonnaise', 0),
(22, 8, 'Paul Bocuse', 0),
(23, 8, 'Michel Bras', 1),
(24, 8, 'Jacques Pic', 1),
(25, 9, 'La meringue italienne', 1),
(26, 9, 'La meringue française', 0),
(27, 9, 'La meringue suisse', 0),
(28, 10, 'Une soupe à base d\'ail', 0),
(29, 10, 'Une soupe à base d\'oignons', 0),
(30, 10, 'Une soupe à base de basilic', 1),
(46, 11, 'Le piano', 1),
(47, 9, 'Le cajón', 0),
(48, 11, 'Les castagnettes', 0),
(49, 12, '6', 0),
(50, 12, '7', 1),
(51, 12, '8', 0),
(52, 14, 'Oranger', 0),
(53, 14, 'Oreiller', 0),
(54, 14, 'Oreille', 1),
(55, 13, 'Le flamenco', 0),
(56, 13, 'La jota', 1),
(57, 13, 'La sardane', 0),
(58, 15, 'David Bisbal', 0),
(59, 15, 'Jordi Savall', 0),
(60, 15, 'Julio Iglesias', 1),
(61, 16, '1895', 0),
(62, 16, '1900', 1),
(63, 16, '1904', 0),
(64, 17, '5-0', 0),
(65, 17, '7-5', 0),
(66, 17, '9-0', 1),
(67, 18, '2', 0),
(68, 18, '3', 0),
(69, 18, '4', 1),
(70, 19, 'Lothar Matthäus', 1),
(71, 19, 'Jurgen Klinsmann', 0),
(72, 19, 'Sepp Maier', 0),
(73, 20, 'Miroslav Klose', 0),
(74, 20, 'Gert Muller', 1),
(75, 20, 'Joachim Streich', 0),
(76, 21, 'Hyperréalisme', 0),
(77, 21, 'Maniérisme', 0),
(78, 21, 'Gothique', 1),
(79, 22, 'Jésus et la Samaritaine', 0),
(80, 22, 'Le Condottiere', 0),
(81, 22, 'Descente de Croix', 1),
(82, 23, 'Le Printemps', 0),
(83, 23, 'La Vierge aux rochers', 1),
(84, 23, 'Adoration des mages', 0),
(85, 24, 'Deux divinités des vents', 1),
(86, 24, 'Rien', 0),
(87, 24, 'Des coquillages', 0),
(88, 25, 'L\'architecture', 0),
(89, 25, 'La sculpture', 0),
(90, 25, 'La poésie', 1);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id_question` int(11) NOT NULL,
  `id_quiz` int(11) NOT NULL,
  `intitule` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id_question`, `id_quiz`, `intitule`) VALUES
(1, 1, 'Quelle est la capitale de la France ?'),
(2, 1, 'Quel est le nom du président de la République ?'),
(3, 1, 'Comment s\'appelle l\'hymne national ?'),
(4, 1, 'Quelle monnaie circule ?'),
(5, 1, 'Quelle langue est parlée ?'),
(6, 2, 'Quel ingrédient n’est pas présent dans la quiche lorraine traditionnelle ?'),
(7, 2, 'Quelle sauce accompagne traditionnellement la tête de veau ?'),
(8, 2, 'Quel chef a inventé le moelleux au chocolat ?'),
(9, 2, 'Laquelle de ces 3 meringues se prépare avec du sucre cuit ?'),
(10, 2, 'Qu\'est-ce que la provençale soupe au pistou ?'),
(11, 4, 'Parmi ces instruments, lequel ne fait pas partie des instruments du flamenco ?'),
(12, 4, 'Combien y a-t-il de périodes musicales différentes en Espagne ?'),
(13, 4, 'Quelle musique traditionnelle espagnole est née en Aragon ?'),
(14, 4, 'Quelle est la traduction de \"oreja\" ?'),
(15, 4, 'Qui est le plus grand artiste espagnol ?'),
(16, 7, 'En quelle année a été créée la fédération allemande de football ?'),
(17, 7, 'En 1909 les Allemands rencontrent les Anglais à Oxford et perdent. Quel fut le score ?'),
(18, 7, 'L\'Allemagne a gagné 3 Coupes du monde. Pour combien de finales perdues ?'),
(19, 7, 'Quel joueur allemand compte le plus de sélections en équipe nationale (150) ?'),
(20, 7, 'Qui est le meilleur buteur de la sélection allemande avec 68 buts ?'),
(21, 9, 'Giotto di Bondone est un célébre peintre et sculpteur italien . Quel était son mouvement artistique ?'),
(22, 9, 'Fra Angelico est un peintre du Quattrocento , parmi les oeuvres suivantes , de quelle oeuvre est-il l\'auteur ?'),
(23, 9, 'Laquelle de ces oeuvres n\'est pas de Sandro Botticelli ?'),
(24, 9, 'Le tableau le plus connu de Sandro Botticelli est \'La naissance de Vénus\' . Sur ce tableau qu\'est représenté à la gauche du personnage ?'),
(25, 9, 'Lequel de ces arts n\'a jamais étudié ou pratiqué Leonard de Vinci ?');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id_quiz` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `Pays` varchar(255) NOT NULL,
  `Theme` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id_quiz`, `nom`, `Pays`, `Theme`) VALUES
(1, 'France - Facile', 'France', ''),
(2, 'France - Cuisine', 'France', 'Cuisine'),
(4, 'Espagne - Musique', 'Espagne', 'Musique'),
(7, 'Allemagne - Sport', 'Allemagne', 'Sport'),
(9, 'Italie - Art', 'Italie', 'Art');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `theme` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `theme`) VALUES
(1, 'Ines', 'ines@gmail.com', 'Cuisine,Sport,'),
(2, 'Maroua', 'maroua@gmail.com', '0'),
(3, 'Ha Phuong', 'Haphuong@gmail.com', '0'),
(4, 'Elodie', 'elodie@gmail.com', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `choix`
--
ALTER TABLE `choix`
  ADD PRIMARY KEY (`id_choix`),
  ADD KEY `questions_choix` (`id_question`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_question`),
  ADD KEY `quiz_questions` (`id_quiz`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id_quiz`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `choix`
--
ALTER TABLE `choix`
  MODIFY `id_choix` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id_question` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id_quiz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `choix`
--
ALTER TABLE `choix`
  ADD CONSTRAINT `questions_choix` FOREIGN KEY (`id_question`) REFERENCES `questions` (`id_question`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `quiz_questions` FOREIGN KEY (`id_quiz`) REFERENCES `quiz` (`id_quiz`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
