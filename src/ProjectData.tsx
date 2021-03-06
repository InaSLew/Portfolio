import { EnvironmentType, WorkType } from './Enums';
import crytalMountain from './Images/crystalMountainThumbnail.png';
import nightOfMutantPumpkins from './Images/pumpkinMadnessThumbnail.png';
import smallTheftAuto from './Images/smallTheftAutoThumbnail.png';
import littleLight from './Images/LittleLight.png'
import inventoryDemoGif0 from './Images/inventory0.gif';
import inventoryDemoGif1 from './Images/inventory1.gif';
import {DemoGif, Project, ResponsibleArea} from './Project';

const projectData: Project[] = [
    new Project(
        littleLight,
        'Thumbnail for Little Light',
        'Little Light',
        WorkType.SchoolProject,
        EnvironmentType.MadeInUnity,
        'School project',
        'Made in Unity',
        'A 3D ARPG featuring 3 levels with combat and inventory systems',
        ['I worked with my fellow students (5 programmers, 3 game designers and 3 game artists). My working areas included'],
        [
            new ResponsibleArea('Design and implement the inventory system', [new DemoGif(inventoryDemoGif0, 'Demo gif for inventory'), new DemoGif(inventoryDemoGif1, 'Demo gif for inventory')]),
            new ResponsibleArea('Script the first version of Health script used by all agents in the game that is damagable'),
            new ResponsibleArea('Script an abstract base class Entity that is used by both Enemy and Destructible in the game')
        ],
        '',
        'https://github.com/forsbergsskola-se/game21-2021-1129-arpg-team-2'
        ),
    new Project(
        crytalMountain,
        'Thumbnail for my game Crystal Mountain',
        'Crytal Mountain',
        WorkType.Independent,
        EnvironmentType.MadeInUnity,
        'Independent',
        'Made in Unity',
        'A 2D side-scrolling, ice-spike-dodging runner game featuring self-drawn pixel art.',
        ['Originally a school project, I expanded the core gameplay (i.e. dodging 2 types of obstacles through jumping) by implementing one more obstacle variant and a second way of dodging (ducking).'],
        [],
        'https://inaslew.github.io/Play-Crystal-Mountain/',
        'https://github.com/InaSLew/Crystal-Mountain'
        ),
    new Project(
        nightOfMutantPumpkins,
        'Thumbnail for Night of the Mutant Pumpkins',
        'Night of the Mutant Pumpkins',
        WorkType.GameJam,
        EnvironmentType.MadeInUnity,
        'Game jam',
        'Made in Unity',
        'A group effort for Forsbergsskola\'s 2021 Autumn Game Jam : Pumpkin Madness (27/10/2021 - 29/10/2021).',
        ['I worked with my fellow students (3 programmers and 2 game designers) and the game was produced in 3 days. My working areas included'],
        [
            new ResponsibleArea('spawning enemies'),
            new ResponsibleArea('the underlying base class which both enemies and player share')
        ],
        'https://play.unity.com/mg/other/night-of-the-mutant-pumpkins',
        'https://github.com/InaSLew/AutumnGameJam-PumpkinMadness'
        ),
    new Project(
        smallTheftAuto,
        'Thumbnail for Small Theft Auto',
        'Small Theft Auto',
        WorkType.SchoolProject,
        EnvironmentType.MadeInUnity,
        'School project',
        'Made in Unity',
        'A very down-scaled, simplified clone of the old classic Grand Theft Auto 2',
        ['In this group effort of me and other 3 programming students, my main working areas included'],
        [
            new ResponsibleArea('scripts of base classes for Car and Player'),
            new ResponsibleArea('scripts for player\'s attack and equipping/swapping between 3 types of weapons (1 melee and 2 guns)'),
            new ResponsibleArea('scripts of base class for Weapon and the interfaces needed to work with player\'s attack')
        ],
        'https://inaslew.github.io/Play-Small-Theft-Auto/',
        'https://github.com/forsbergsskola-se/gp21-1018-unity-introduction-smalltheftauto-train-in-vain/tree/main/projects/SmallTheftAuto'
        )
];

export default projectData;


