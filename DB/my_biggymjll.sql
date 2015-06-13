-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 13, 2015 alle 18:49
-- Versione del server: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_biggymjll`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `AboutUs`
--

CREATE TABLE IF NOT EXISTS `AboutUs` (
  `History` text NOT NULL,
  `Goal` text NOT NULL,
  `Contact` text NOT NULL,
  `Testimonial` varchar(200) DEFAULT NULL,
  `key` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `AboutUs`
--

INSERT INTO `AboutUs` (`History`, `Goal`, `Contact`, `Testimonial`, `key`) VALUES
('The BigGYM is a A.S.D. born in 2014 .<br><br>Founded by a group of volunteers and fans of the sports .<br>This association aims to teach children of all ages is it and what does the sports .<br>Wants to teach values ??such as commitment to achieve results ,<br>the importance of keeping fit ,<br>the importance of having fun and being together!<br><br>Members of the Board of Directors:<br>Jegher Andrea, Lattanzio Emanuele, Lomazzi Riccardo.', 'We change attitudes, build belief<br>and transform the capabilities of people<br>at work through our pioneering learning experiences.<br>From delighting customers to accelerating change,<br>We try to make a mighty difference from the other clubs.<br>Discipline is main rule, and it only takes you to fullfillit.', '18139 Davis St., \nMiami,\nFlorida 92018 <br><br>Email: <a href=''mailto:webfract@tin.it'' class="link">info@biggym.com</a><br><br>Phone: +39 3397038712<br>Fax: +39 0331547897<br><br>Opening Times<br>Weekdays: 7:00 am - 9:00 pm<br>Weekends: 9:00 am - 16:00 pm', 'Testimonial1|Testimonial2|Testimonial3|Testimonial4', '2015-06-13 14:40:29');

-- --------------------------------------------------------

--
-- Struttura della tabella `awards`
--

CREATE TABLE IF NOT EXISTS `awards` (
  `award` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `iconurl` varchar(250) NOT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`award`),
  UNIQUE KEY `Award` (`award`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `awards`
--

INSERT INTO `awards` (`award`, `description`, `iconurl`, `comment`) VALUES
('InstructorOfTheMonth', 'Instructor Of The Month', '../RES/IMAGES/AWARDS/monthIcon.svg', 'Awarded With Best Instructor of The Month On:'),
('InstructorOfTheYear', 'Instructor Of The Year', '../RES/IMAGES/AWARDS/yearIcon.svg', 'Awarded With Best Instructor of the Year On:'),
('MostActiveOfTheMonth', 'Most Active Instructor of the Month', '../RES/IMAGES/AWARDS/activeIcon.svg', 'Awarded With Most Active of the Month On:'),
('SeniorInstructor', 'Senior Instructor', '../RES/IMAGES/AWARDS/seniorIcon.svg', 'Awarded With Senior Instructor On:'),
('TopUserRatingofTheMonth', 'Best User Rating Of The Month', '../RES/IMAGES/AWARDS/ratingIcon.svg', 'Awarded With Top User Rating of the Month On:');

-- --------------------------------------------------------

--
-- Struttura della tabella `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `idcourse` int(11) NOT NULL AUTO_INCREMENT,
  `id_course_category` int(11) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `main_image_path` text NOT NULL,
  `priceKids` int(11) NOT NULL,
  `priceAdults` int(11) NOT NULL,
  PRIMARY KEY (`idcourse`,`id_course_category`),
  KEY `course_category` (`id_course_category`),
  KEY `idcourse` (`idcourse`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Tabella per la raccolta dei corsi' AUTO_INCREMENT=6 ;

--
-- Dump dei dati per la tabella `courses`
--

INSERT INTO `courses` (`idcourse`, `id_course_category`, `course_name`, `description`, `main_image_path`, `priceKids`, `priceAdults`) VALUES
(1, 1, 'VibraFit', 'Consists of a group training on vibrating treadmills, great for working with high intensity on all of the muscle groups.\n\nVibrafit is now a well estabilished trademark of vibrating treadmills that can adapt to the user by letting him full customization of the programs. Exercises are best done i 10 minutes with little rest afterwards to increase cardio and resistance of the muscles.', '../RES/Images/courses/vibrafit.jpg', 6, 12),
(1, 2, 'Cardio Kickboxing', 'Cardio Kickboxing is a popular training program that is a fun, action-packed workout that combines martial arts, boxing and dance moves. You get a challenging cardiovascular and full body workout as you kick, punch, block and move in each Cardio Kickboxing class.\n\nThe techniques used during the one-hour classes, using conventional heavy bags and training pads, are based on authentic kickboxing techniques which provide both resistance training and cardiovascular benefits to its participants.', '../RES/IMAGES/courses/kickboxing.jpg', 25, 50),
(1, 3, 'Zumba', 'It''s hard to keep your body from moving when Latin rhythms fill the room, and that''s just one of the reasons Zumba has become such a popular exercise. This dance-based fitness class set to Latin beats is influenced by salsa, merengue, flamenco and other international dance styles, with some hip-hop and freestyle mixed in.\nDeveloped in Miami in 2001, Zumba was named for a slang Colombian expression meaning to move fast or buzz like a bee. And in class, your whole body moves. Generally, you start by moving your legs, then you add a change, such as moving your arms or changing direction, so you go side to side or forward and backward. But it''s one change at a time, making it simpler and easier to follow for those who feel like they have two left feet.\n\nAccording to Patusky, "Zumba feels like a dance party. It''s a joyful experience, and you leave feeling good and knowing that you burned calories." Zumba is a great activity for children and adults alike.', '../RES/IMAGES/courses/zumba.jpg', 13, 14),
(1, 4, 'Basketball', 'Just for starters, basketball requires speed, strength, stamina, explosiveness, power and amazing hand-eye coordination.\r\nWe''d start out by running three laps around the court.\r\n\r\nNext, the players would stretch their calf muscles and Achilles tendons by stretching against a wall. These sites can be prone to injury due to the frequent use among running and jumping athletes.\r\n\r\nFor an excellent calf stretch, face and lean against a wall keeping the leg or legs straight while keeping the heels down.\r\n\r\nAdditionally, keep the toes pointed inward. When stretching the Achilles tendon, the same stretch, however, the knees should be bent and once again the heels remain on the floor.\r\nNext in our warm-up sessions, we would spend 2-3 minutes jumping rope while doing various routines. This is a great way to warm-up the legs while preparing the ankle and knee joints for practice.\r\nAfter stretching as a team, we put our players on the baseline and continue with a running warm-up for three minutes.', '../RES/IMAGES/courses/basketball.jpg', 16, 19),
(2, 1, 'CrossFit', 'CrossFit is many things. Primarily, it’s a fitness regimen developed by Coach Greg Glassman over several decades. He was the first person in history to define fitness in a meaningful, measurable way (increased work capacity across broad time and modal domains). CrossFit itself is defined as that which optimizes fitness (constantly varied functional movements performed at relatively high intensity). CrossFit is also the community that spontaneously arises when people do these workouts together. In fact, the communal aspect of CrossFit is a key component of why it’s so effective. \r\n\r\n<table class="table">\r\n      <caption>Exercise list.</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Exercise</th>\r\n          <th>Weight</th>\r\n          <th>Reps</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope="row">1</th>\r\n          <td>Air squat</td>\r\n          <td>10 Kilos</td>\r\n          <td>3/Failure</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">2</th>\r\n          <td>Overhead Squat</td>\r\n          <td>20 kilos</td>\r\n          <td>10/10</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">3</th>\r\n          <td>Front Squat</td>\r\n          <td>15 kilos</td>\r\n          <td>5/10</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>', '../RES/IMAGES/courses/crossfit.jpg', 20, 25),
(2, 2, 'Karate', 'This course will involve physical aspects of Karate including blocking, punching, striking, kicking and body shifting techniques in correct stance and the application of these techniques against an opponent. The course will also introduce the mental aspects of Karate illustrating the ideals of "the way" (including principles such as character, concentration, self control, manners and self discipline) and how they can be applied in everyday life to benefit themselves and society, this will be achieved through meditation and training. There are three primary components of Karate training; fundamentals (basics), sparring and Kata or forms. The basic techniques consist of blocks, punches, strikes, kicks and combinations of these techniques in correct stance or body position. Sparring can take one of three forms; single step, controlled multi-step sparring and free sparing. Only the second form (both controlled and non-contact) is taught in this introductory class. The third component, kata, consists of a series of predefined blocking, striking and kicking techniques performed by an individual and used to simulate defense against multiple opponents. The forms are used to perfect the fundamental techniques to teach balance and timing of techniques so that they then may be applied to sparring. Throughout the semester students will improve in physical fitness and learn how Karate contributes to improved fitness and overall wellness. The basic principles of organizing, planning and implementing a physical fitness program will be taught using martial arts training as a method of exercise. The fitness principles learned in class can be applied to any form of activity the student chooses. At the end of the course the student will be invited to explore, through a term paper, their personal health and fitness goals and how karate training may be incorporated into their lifelong fitness plan.', '../RES/IMAGES/courses/karate.jpg', 10, 30),
(2, 3, 'Pilates', 'Strip classical Pilates back to its core, essential principles. Modifications are applied to ensure challenge and/or support. Build core strength and stamina while learning the foundation of Pilates. Optional equipment block, Pilates ball or Pilates circle.\r\nPilates classes are great for posture, flexibility and finding those deep muscles in your body. Classes put emphasis on spinal and pelvic alignment, breathing and developing core strength.\r\nThis is a fairly hard dynamic Pilates class. The focus is on fitness, strength and flexibility and correct muscle isolation. Beginners may find this challenging, but modifications will be made.', '../RES/IMAGES/courses/pilates.jpg', 20, 40),
(2, 4, 'Dodgeball', 'BigGym ups its game with trampoline dodgeball. This is not your gym class dodgeball! It is fast-paced, competitive, and an intense workout. It is the most fun you will have on the field of battlefield, come down and let loose. Come alone or with friends and jump into one of our pickup games.', '../RES/IMAGES/courses/dodgeball.jpg', 20, 50),
(3, 1, 'Functional Circuit', 'A course entirely dedicated to body development, with freestyle exercises of high intensity.\nThis is a bare bones list of exercises.\n<table class="table">\n      <caption>Exercise list.</caption>\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Exercise</th>\n          <th>Weight</th>\n          <th>Reps</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope="row">1</th>\n          <td>Cable Crossover	</td>\n          <td>15RM</td>\n          <td>3/Failure</td>\n        </tr>\n        <tr>\n          <th scope="row">2</th>\n          <td>Barbell Bentover Row</td>\n          <td>15RM</td>\n          <td>10/10</td>\n        </tr>\n        <tr>\n          <th scope="row">3</th>\n          <td>Straight-Arm Pulldown</td>\n          <td>15RM</td>\n          <td>5/10</td>\n        </tr>\n      </tbody>\n    </table>\n', '../RES/IMAGES/courses/functional.jpg', 20, 45),
(3, 2, 'C.O.B.R.A.', 'C.O.B.R.A.™ is the most eye-opening & rewarding self-defense system for the REAL world. Combining experience in law enforcement, close quarter combat techniques, martial arts & the psychology of criminal intent, the Combat Objective Battle Ready Applications, or C.O.B.R.A.™, self-defense system is a 10 Week course to be highly effective in real world situations where your survival is on the line.\n\nEx-street cop, sheriff and corrections officer, Joe Lewis-blackbelt, school owner, author and C.O.B.R.A.™ founder Chris Sutton has written the book (literally) on the pyschology of self-defense. This is not simply a collection of "cool moves," but a complete system covering both the mental and physical aspects of self-defense with a unique emphasis on scenario training.', '../RES/IMAGES/courses/cobra.jpg', 25, 40),
(3, 3, 'Smart Bells Training', 'Designed as a more "intelligent" fitness tool than a dumbbell, SmartBellshave a circular shape with two oval cutouts for handles. These colorful metal weights resemble an oval steering wheel and are used for strength training. They range from 1½ pounds up to 12 pounds and more, but group classes tend to use 5- or 6-pounders.\r\n\r\nUnlike dumbbells, which are primarily used for linear -- up and down or side to side -- movements, SmartBells have a unique shape that also lets them be used for more arcing or curving patterns. You hold on to one with both hands gripping the outer or inner handles, which allows for more swinging movements.', '../RES/IMAGES/courses/smartbells.jpg', 16, 35),
(4, 1, 'Agility Circuit', 'Course dedicated to agility, with exercises for coordination and tonification of all the body. High intensity course. Some exercises are displayed here.\r\n\r\n<table class="table">\r\n      <caption>Exercise list</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Exercise</th>\r\n          <th>Weight</th>\r\n          <th>Reps</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope="row">1</th>\r\n          <td>Crunch</td>\r\n          <td>Body weight</td>\r\n          <td>10/10</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">2</th>\r\n          <td>Dead/Curl/Press</td>\r\n          <td>Light dumbbells</td>\r\n          <td>10/10</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">3</th>\r\n          <td>Bench Press</td>\r\n          <td>10RM (From Test)</td>\r\n          <td>3* / Failure</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n', '../RES/IMAGES/courses/agility.jpg', 15, 40),
(4, 2, 'Judo', 'BigGym’s highly-regarded beginners course has attracted newcomers from across the country to the Olympic and Paralympic sport. \r\nJudo is one of the world’s most widely participated sports and the beginners course is designed to provide a fun-fuelled, exciting experience while you receive expert tuition and become familiar with judo’s highly-motivating and rewarding non-competitive grading scheme.\r\nThe course enables you to develop your fitness levels, balance, coordination and flexibility develop in a no-pressure environment amd provides the opportunity to start a new sport at a resonsable price with like minded beginners.\r\n\r\nBeginners courses are exactly that, an introduction to the sport of judo for those with no or little experience of judo.\r\n\r\nYou have to be at least 5 years old to take part in a Beginner''s course, other than that, anyone can!\r\n\r\nABC is an abbreviation of Adult Beginners Course & only targets senior players (16+). JBC is a Junior Beginners Course & only targets juniors (5-U16). You can run either an ABC or a JBC or alternatively there''s nothing stopping a club running them both simultaneously; providing they have the mat space, venue availability & coaching capacity to do so.\r\nNote: there may be some instances where you include 14 & 15 year olds in an ABC as from 14 they can hold a senior licence. ', '../RES/IMAGES/courses/judo.jpg', 17, 37),
(4, 3, 'Urban Rebounding', 'If you haven''t been on a trampoline since childhood, urban rebounding might make you feel like a kid again. The class is taught on a mini-trampoline, used for much of the session.\r\n\r\nThe trampoline provides an unstable surface to jump on that makes the exercise more challenging; it also cushions the landing and places less stress on your joints than a floor-based workout.\r\n\r\nUrban rebounding requires some coordination, because your arms and legs will often be moving simultaneously, and you''ll get a high-energy, heart-thumping, whole-body workout in the process.\r\n\r\n\r\nThe activity not only improves your balance but also builds aerobic conditioning as well as arm, leg and core strength.', '../RES/IMAGES/courses/urban.jpg', 20, 38),
(5, 1, 'Spinning', 'A 30-minutes spinning workout, fast, fun and efficient. High Intensity training. \r\n<table class="table">\r\n      <caption>Exercise list</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>Minutes</th>\r\n          <th>Position</th>\r\n          <th>Speed(RPM)</th>\r\n          <th>Tension</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope="row">0-10</th>\r\n          <td>Seated with hands in normal position</td>\r\n          <td>80RPM</td>\r\n          <td>Light</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">11-20</th>\r\n          <td>Spin with hands far from the handlebars</td>\r\n          <td>70PRM</td>\r\n          <td>Moderate. Increase resistance</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope="row">21-30</th>\r\n          <td>Jog. Increase speed.</td>\r\n          <td>90RPM</td>\r\n          <td>Decrease resistance</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>', '../RES/IMAGES/courses/spinning.jpg', 21, 40),
(5, 2, 'Choy Li Fut', 'Choy Lee Fut is probably the most popular fighting style in Hong Kong and Canton, and has historically been one of the most successful styles in inter-style competitions in Hong Kong and South East Asia.\r\nCLF includes long and short range punches, kicks, sweeps, take downs, lethal pressure point attacks, joint locks and grappling. CLF also includes training with 53 types of traditional Chinese weapons, including short weapons like the broadsword, long weapons like the staff or spear, flexible weapons like the chain whip and three sectional staff, and twin weapons like the double hook swords.\r\nClasses are designed for ALL ages, ability and gender and are fun, thorough, and provide a safe learning experience.\r\n \r\nThey not only provide stress-relieving workouts, but produce unsurpassed fighting ability as well.  The studio''s fitness programme is also an ideal way to get in shape while learning practical self-defence.\r\n \r\nThe high-energy classes build strength, flexibility, balance, and coordination, while improving cardiovascular fitness and toning the entire body.  Martial arts training is also a great way to develop agility for other sports.\r\n \r\n \r\nStudents can study in the adult group classes from the age of 14 upwards.  Teenagers learn self defence skills that are unrivaled in their effectiveness, and they develop self-discipline, focus and self-confidence.  Mature students can also benefit from classes through maintaining and strengthening mind and body. Classes provide a comprehensive workout at appropriate intensity levels, and Choy Li Fut is well known for it''s outstanding health benefits, such as longevity, stress-relief, digestion and lowering blood pressure.\r\n ', '../RES/IMAGES/courses/choylifut.jpg', 22, 21),
(5, 3, 'Bosu', 'The novel twist in this class is that it is taught on a Bosu ball, a piece of exercise equipment shaped like a half-dome. Bosu is an acronym that stands for "both sides utilized" because you can face the blue rubber shaped dome up and exercise on top of its surface or flip it over and work with the base of the device.\r\n\r\nMany of the moves are similar to those in a step aerobics class, but the main difference is that the Bosu offers a wobblier surface than the step. You can stand on the Bosu, lie down or place your knee on it or use your arms to push off of it.\r\n\r\nAny exercise you would do on the ground, whether it''s lunges, squats, crunches or pushups, becomes trickier when attempted on a Bosu ball. Participants develop balance, and it tones muscles as the class works the upper and lower body as well as the midsection. Bosu training also has cardio elements to it.', '../RES/IMAGES/courses/bosu.jpg', 26, 50);

-- --------------------------------------------------------

--
-- Struttura della tabella `courses_timetable`
--

CREATE TABLE IF NOT EXISTS `courses_timetable` (
  `day` varchar(9) NOT NULL,
  `id_course_category` int(11) NOT NULL,
  `idcourse` int(11) NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  PRIMARY KEY (`day`,`id_course_category`,`idcourse`),
  KEY `id_course_category` (`id_course_category`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `courses_timetable`
--

INSERT INTO `courses_timetable` (`day`, `id_course_category`, `idcourse`, `startTime`, `endTime`) VALUES
('Everyday', 1, 5, '16:00:00', '18:00:00'),
('Everyday', 2, 1, '16:00:00', '18:00:00'),
('Everyday', 2, 2, '16:00:00', '18:00:00'),
('Everyday', 2, 3, '16:00:00', '18:00:00'),
('Everyday', 2, 4, '14:00:00', '18:00:00'),
('Everyday', 2, 5, '14:00:00', '18:00:00'),
('Everyday', 4, 1, '14:00:00', '18:00:00'),
('Everyday', 4, 2, '14:00:00', '18:00:00'),
('Friday', 1, 2, '20:00:00', '21:00:00'),
('Friday', 3, 2, '18:00:00', '20:00:00'),
('Monday', 1, 1, '10:00:00', '12:00:00'),
('Monday', 1, 4, '11:00:00', '14:00:00'),
('Monday', 3, 5, '08:00:00', '10:00:00'),
('Saturday', 1, 2, '11:00:00', '12:00:00'),
('Saturday', 1, 3, '09:00:00', '10:00:00'),
('Saturday', 3, 1, '18:00:00', '20:00:00'),
('Sunday', 1, 4, '11:00:00', '14:00:00'),
('Sunday', 3, 4, '18:00:00', '21:00:00'),
('Thursday', 3, 3, '18:00:00', '21:00:00'),
('Tuesday', 1, 1, '10:00:00', '10:00:00'),
('Wednesday', 1, 3, '11:00:00', '11:30:00');

-- --------------------------------------------------------

--
-- Struttura della tabella `course_categories`
--

CREATE TABLE IF NOT EXISTS `course_categories` (
  `id_course_category` int(11) NOT NULL AUTO_INCREMENT,
  `course_category` text NOT NULL,
  `cat_bg_img_path` text NOT NULL,
  UNIQUE KEY `id_course_category_2` (`id_course_category`),
  KEY `id_course_category` (`id_course_category`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `course_categories`
--

INSERT INTO `course_categories` (`id_course_category`, `course_category`, `cat_bg_img_path`) VALUES
(1, 'Basic Workouts', '../RES/IMAGES/course_categories/basic_workouts.jpg'),
(2, 'Fighting', '../RES/IMAGES/course_categories/fighting.jpg'),
(3, 'Dancing & Fitness', '../RES/IMAGES/course_categories/dance&fitness.jpg'),
(4, 'Sports', '../RES/IMAGES/course_categories/sports.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `footer`
--

CREATE TABLE IF NOT EXISTS `footer` (
  `address` text NOT NULL,
  `opening_times` text NOT NULL,
  `special_openings` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `footer`
--

INSERT INTO `footer` (`address`, `opening_times`, `special_openings`) VALUES
('<br>18139 Davis St.<br> Miami <br> Florida 92018<br>', 'Weekdays: 7:00am - 9:00pm\r\n                            <br>\r\n                            Weekends: 9:00am - 7:00pm', '<ul id="ul_footer_content" class="list-group">\r\n                                   <li class="list-group-item"> 01/08/2015 </li>\r\n                                    <li class="list-group-item"> 01/09/2015 </li>\r\n                                   <li class="list-group-item">01/01/2016 </li>\r\n                                </ul>');

-- --------------------------------------------------------

--
-- Struttura della tabella `home`
--

CREATE TABLE IF NOT EXISTS `home` (
  `description` text NOT NULL,
  `about` text NOT NULL,
  `courses` text NOT NULL,
  `offer` text NOT NULL,
  `social` text NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `home`
--

INSERT INTO `home` (`description`, `about`, `courses`, `offer`, `social`, `id`) VALUES
('You are perfect the way you are.<br><br>But if you feel like losing a few pounds,<br>eating healthier and making a few friends in the process,<br>then BigGym is the place for you.', '<div class=''index-container''><p class=''index-title''>FIND OUT WHO WE ARE</p><p class=''index-text''>and see if we suit you<br><br></p><a href=''WEBSITE/HTML/AboutUs.html''><div class=''btn-group btn-group-lg'' role=''group'' aria-label=''...''><button type=''button'' class=''btn btn-default''>About us</button></div></a></div>', '<div class=''index-container''><p class=''index-title''>Dedication is all you need</p><p class=''index-text''>with all the courses we provide you.<br>You just have to rise... from your sofa.<br><br>Zumba, Pilates, Yoga, GAG, Cross-Fit<br>and a lot more are waiting for you<br><br></p><a href=''WEBSITE/HTML/course_category.html''><div class=''btn-group btn-group-lg'' role=''group'' aria-label=''...''><button type=''button'' class=''btn btn-default''>See Our Courses</button></div> </a></div>', '<div class=''index-container''><div class=''index-home'' id=''index-offers-left''><p class=''index-title''>We have the best offers<br><a href=''WEBSITE/HTML/Registration.html''><div class=''btn-group btn-group-lg'' role=''group'' aria-label=''...''><button type=''button'' class=''btn btn-default''>Get In</button></div> </a><br><br></p></div><div class=''index-home panel panel-default'' id=''index-offers-right''><p class=''index-title''>Offer of the month<br>Zumba Starter Pack from<br>4,99€</p><p class=''index-text''>*view other offers <a class=''index-nocolor''  href=''WEBSITE/HTML/FEEs.html''>here</a></p></div></div>', '<div class=''index-container''><p class=''index-title''>Got any question? Want to follow us?</p><p class=''index-text''>You''re free to ask us anything at our Facebook and Twitter pages.<br>Like to follow us!<br><br></p><div class=''panel panel-default''><a href=''https://www.facebook.com/biggymsrl''><img class=''index-social'' src=''WEBSITE/RES/IMAGES/index/facebook_logo.png''></img></a><a href=''https://twitter.com/BigGymSRL''><img class=''index-social'' src=''WEBSITE/RES/IMAGES/index/twitter.png''></img></a> </div></div>', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `instructors`
--

CREATE TABLE IF NOT EXISTS `instructors` (
  `personid` varchar(16) NOT NULL COMMENT 'Person unique identificator',
  `firstname` varchar(50) NOT NULL,
  `secondname` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `membersince` date NOT NULL,
  `birth` date NOT NULL,
  `favouritecolor` varchar(50) NOT NULL,
  `description` mediumtext NOT NULL,
  `shortdescription` varchar(255) NOT NULL,
  `certifications` mediumtext NOT NULL,
  `motto` mediumtext NOT NULL,
  `userrating` float(2,1) NOT NULL,
  `bigimage` varchar(200) NOT NULL,
  `smallimage` varchar(200) NOT NULL,
  PRIMARY KEY (`personid`),
  UNIQUE KEY `PersonID` (`personid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructors`
--

INSERT INTO `instructors` (`personid`, `firstname`, `secondname`, `surname`, `height`, `weight`, `membersince`, `birth`, `favouritecolor`, `description`, `shortdescription`, `certifications`, `motto`, `userrating`, `bigimage`, `smallimage`) VALUES
('CLRMYJ98E58Z404S', 'Jennifer', 'Mary', 'Clarence', 170, 60, '2014-07-29', '1992-05-18', 'Light Blue', 'Master Teacher Jay Grimes, Peter Fiasca, Cary Regan, Michael Rooks, Alan Herdman and others have trained Elisabet over the years. She has a broad international insight in to the pilates method extending from Australia, through England, to the United States all the way to Canada. After all her years of studying the method she returned to the original, Traditional Pilates.', 'Practicing for 5 years now </br>and started teaching 2 years ago', 'Ballet Academy of Gothenburg,Swedish Kinesiology School', ' Love begins with loving yourself', 8.5, '../RES/IMAGES/INSTRUCTORS/JenniferClarenceFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/JenniferClarencePortrait.jpg'),
('CNNLRA89S46Z404D', 'Lara', 'S.', 'Connor', 160, 54, '2012-02-02', '1989-11-06', 'Blue', 'I''ve been practicing yoga regularly for about 6 years now. After my freshman year of college I moved to Colorado and got my yoga instructor’s certificate at the Fort Collins Colorado Core Power. Yoga changed my life, it helped me understand myself and connect with my spirituality.', 'Very hard working and sensitive.</br>Funny and professional', '200 hour RYT Yoga Certification', 'Don''t just dare to dream, dare to have a vision as well. While dreams keep you up at night thinking of where you would like to be in life.', 8.0, '../RES/IMAGES/INSTRUCTORS/LaraConnorFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/LaraConnorPortrait.jpg'),
('MYRLCA89P51Z404P', 'Alice', '', 'Mayer', 175, 65, '2015-04-08', '1989-12-05', 'Violet', 'As an artist, dancer and teacher I always knew I was meant to help facilitate change in the world. When I was three, I immersed myself in dance and pilates and gained body awareness. In 2005 I discovered yoga in the lush jungles of Costa Rica and it has since become my daily path. A desire to help people brought my attention to education.', 'Very hard working and sensitive.</br>Funny and professional', 'ACE Certified Group Fitness Instructor,</br> NETA Group Exercise Certification', ' Wherever you are is perfect.</br> Be stronger than your excuses!', 8.0, '../RES/IMAGES/INSTRUCTORS/AliceMayerFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/AliceMayerPortrait.jpg'),
('SMMLEE90M12Z404Y', 'Lee', '', 'Summers', 195, 95, '2013-06-02', '1990-08-12', 'Yellow', ' have been personal training, coaching and teaching classes since 2007. Working with all types of people, with a variety of goals. I have always been involved with athletics. Growing up I played softball, hockey, tennis, swam. In college I started to run which then lead me to the sport of triathlon.', 'Teacher of our basic </br>training and fit courses  ', 'Pedal Wild Certified', 'Nothing looks as good as healthy feels.\r\nThe study of asana is not about mastering posture. It’s about using posture to understand and transform yourself.', 8.5, '../RES/IMAGES/INSTRUCTORS/LeeSummersFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/LeeSummersPortrait.jpg'),
('SMTRRT85P04Z404F', 'Robert', '', 'Smith', 189, 80, '2010-07-12', '1985-04-09', 'Green', 'My group spinning instructing career kicked off in May 2009. My whole life has been surrounded by sports and athletics. Gymnastics along with track & field have created the foundation for my passion, dedication and success in athletics and fitness.', 'Joined us five years ago</br> as a teacher in our spinning lesson', 'Ace Personal Trainer,</br> studied exercize science', 'Run faster </br>and then run faster', 7.0, '../RES/IMAGES/INSTRUCTORS/RobertSmithFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/RobertSmithPortrait.jpg'),
('SNGPLA89C02Z404K', 'Paul', '', 'Singer', 190, 80, '2013-07-12', '1989-02-03', 'Red', 'He is a 2x Ironman athlete and Ultra - endurance sport racer where Ironman is ''short.'' Longest races include Adventure Races of 10 days and a single day road bike race of 207 miles', 'Main teacher of</br>our KickBox lesson.', 'Ace Personal Trainer,</br>studied excercize scinece', 'Keep reaching for the stars</br> and never give up', 9.5, '../RES/IMAGES/INSTRUCTORS/PaulSingerFullBody.jpg', '../RES/IMAGES/INSTRUCTORS/PaulSingerPortrait.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructors_awards`
--

CREATE TABLE IF NOT EXISTS `instructors_awards` (
  `personid` varchar(16) NOT NULL,
  `award` varchar(255) NOT NULL,
  `dayawarded` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructors_awards`
--

INSERT INTO `instructors_awards` (`personid`, `award`, `dayawarded`) VALUES
('SNGPLA89C02Z404K', 'InstructorOfTheMonth', '2015-06-01'),
('SNGPLA89C02Z404K', 'TopUserRatingofTheMonth', '2015-03-18'),
('CNNLRA89S46Z404D', 'MostActiveOfTheMonth', '2014-10-21'),
('MYRLCA89P51Z404P', 'InstructorOfTheYear', '2014-01-01'),
('SMMLEE90M12Z404Y', 'SeniorInstructor', '2015-06-12'),
('SMTRRT85P04Z404F', 'SeniorInstructor', '2015-04-04'),
('MYRLCA89P51Z404P', 'SeniorInstructor', '2015-04-04');

-- --------------------------------------------------------

--
-- Struttura della tabella `instructors_courses`
--

CREATE TABLE IF NOT EXISTS `instructors_courses` (
  `personid` varchar(16) NOT NULL,
  `idcourse` int(11) NOT NULL,
  `id_course_category` int(11) NOT NULL,
  PRIMARY KEY (`personid`,`idcourse`,`id_course_category`),
  KEY `PersonID` (`personid`),
  KEY `idcourse` (`idcourse`),
  KEY `id_course_category` (`id_course_category`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructors_courses`
--

INSERT INTO `instructors_courses` (`personid`, `idcourse`, `id_course_category`) VALUES
('CNNLRA89S46Z404D', 1, 3),
('SMTRRT85P04Z404F', 1, 1),
('SNGPLA89C02Z404K', 1, 2),
('CNNLRA89S46Z404D', 2, 3),
('SMTRRT85P04Z404F', 2, 2),
('SNGPLA89C02Z404K', 2, 1),
('SNGPLA89C02Z404K', 2, 4),
('MYRLCA89P51Z404P', 3, 3),
('SMMLEE90M12Z404Y', 3, 2),
('CNNLRA89S46Z404D', 4, 2),
('MYRLCA89P51Z404P', 4, 3),
('SMMLEE90M12Z404Y', 5, 3),
('SMTRRT85P04Z404F', 5, 1),
('SMTRRT85P04Z404F', 5, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `offers`
--

CREATE TABLE IF NOT EXISTS `offers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `offers`
--

INSERT INTO `offers` (`id`, `description`) VALUES
(1, 'Funky Friday!</br>Free lessons for\nnewcomers every friday!'),
(2, 'Late Night Workout!</br>Sale available only after 8:00 p.m.'),
(3, 'Bring a friend!</br>You will get \na 20% discount\nbonus!\n\n\n\n'),
(4, 'Good Morning Gym!</br>Sale available\nonly between 7:00 a.m and 9:00 a.m.'),
(5, 'Whenever you want!</br>Discount of 20% for students!'),
(6, 'Children Classes!</br>Unlimited Monthy\nPass for 75$!');

-- --------------------------------------------------------

--
-- Struttura della tabella `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `room_name` varchar(25) NOT NULL,
  `room_description` text NOT NULL,
  `equipment` text NOT NULL,
  `courses-link` text NOT NULL,
  PRIMARY KEY (`room_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `rooms`
--

INSERT INTO `rooms` (`room_name`, `room_description`, `equipment`, `courses-link`) VALUES
('Game', 'this is the perfect room for children or everyone who just want to practice light workouts.', '2 sets of nets for tennis', '<a href="">bho1</a>;<a href="">bho2</a>'),
('Fight', 'kick gugu please', 'ring;rong;rung', 'Dance;bla;bla'),
('Water', 'dczhsk', 'ssjd;sdfgh', 'sjhgx;hscfhs');

-- --------------------------------------------------------

--
-- Struttura della tabella `weekdays`
--

CREATE TABLE IF NOT EXISTS `weekdays` (
  `day` varchar(9) NOT NULL,
  PRIMARY KEY (`day`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `weekdays`
--

INSERT INTO `weekdays` (`day`) VALUES
('Everyday'),
('Friday'),
('Monday'),
('Saturday'),
('Sunday'),
('Thursday'),
('Tuesday'),
('Wednesday');

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`id_course_category`) REFERENCES `course_categories` (`id_course_category`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `courses_timetable`
--
ALTER TABLE `courses_timetable`
  ADD CONSTRAINT `courses_timetable_ibfk_1` FOREIGN KEY (`id_course_category`) REFERENCES `course_categories` (`id_course_category`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dayc` FOREIGN KEY (`day`) REFERENCES `weekdays` (`day`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `instructors_courses`
--
ALTER TABLE `instructors_courses`
  ADD CONSTRAINT `instructors_courses_ibfk_2` FOREIGN KEY (`personid`) REFERENCES `instructors` (`personid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IDCOURSE` FOREIGN KEY (`idcourse`) REFERENCES `courses` (`idcourse`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IDCOURSECATEGORY` FOREIGN KEY (`id_course_category`) REFERENCES `courses` (`id_course_category`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `instructors_courses_ibfk_1` FOREIGN KEY (`PersonID`) REFERENCES `instructors` (`PersonID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
