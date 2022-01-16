import crytalMountain from './Images/crystalMountainThumbnail.png';
import nightOfMutantPumpkins from './Images/pumpkinMadnessThumbnail.png';
import smallTheftAuto from './Images/smallTheftAutoThumbnail.png';
import Project from './Project';

const projectData: Project[] = [
    new Project(
        crytalMountain,
        'Thumbnail for my game Crystal Mountain',
        'Crytal Mountain',
        'A 2D side-scrolling, ice-spike-dodging runner game featuring self-drawn pixel art.',
        ['Originally a school project, I expanded the core gameplay (i.e. dodging 2 types of obstacles through jumping) by implementing one more obstacle variant and a second way of dodging (ducking).'],
        [''],
        'https://inaslew.github.io/Play-Crystal-Mountain/',
        'https://github.com/InaSLew/Crystal-Mountain'
        ),
    new Project(
        nightOfMutantPumpkins,
        'Thumbnail for Night of the Mutant Pumpkins',
        'Night of the Mutant Pumpkins',
        'A group effort for Forsbergsskola\'s 2021 Autumn Game Jam : Pumpkin Madness (27/10/2021 - 29/10/2021).',
        ['I worked with my fellow students (3 programmers and 2 game designers) and the game was produced in 3 days. My working areas included'],
        ['spawning enemies', 'the underlying base class which both enemies and player share'],
        'https://play.unity.com/mg/other/night-of-the-mutant-pumpkins',
        'https://github.com/InaSLew/AutumnGameJam-PumpkinMadness'
        ),
    new Project(
        smallTheftAuto,
        'Thumbnail for Small Theft Auto',
        'Small Theft Auto',
        'A very down-scaled, simplified clone of the old classic <i>Grand Theft Auto 2</i>',
        ['In this group effort of me and other 3 programming students, my main working areas included'],
        ['scripts of base classes for Car and Player', 'scripts for player\'s attack and equipping/swapping between 3 types of weapons (1 melee and 2 guns)', 'scripts of base class for Weapon and the interfaces needed to work with player\'s attack'],
        'https://inaslew.github.io/Play-Small-Theft-Auto/',
        'https://github.com/forsbergsskola-se/gp21-1018-unity-introduction-smalltheftauto-train-in-vain/tree/main/projects/SmallTheftAuto'
        )
];

export default projectData;


