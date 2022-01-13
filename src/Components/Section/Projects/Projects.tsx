import './Projects.css';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="project-container">
                <article className="project-card">
                    <img className="project-image" src="src/images/crystalMountainThumbnail.png" alt="School project Crystal Mountain image"/>
                    <h3>Crystal Mountain</h3>

                    <div className="pill-button pill-button-project-independent">Independent</div>
                    <div className="pill-button pill-button-madein-unity">Made in Unity</div>

                    <p className="subtext">
                        A 2D side-scrolling, ice-spike-dodging runner game featuring self-drawn pixel art.
                    </p>
                    
                    <div className="project-card-detail">
                        <hr/>
                        <p className="subtext">
                            Originally a school project, I expanded the core gameplay (i.e. dodging 2 types of obstacles through jumping) by implementing one more obstacle variant and a second way of dodging (ducking).
                        </p>
                        <p className="subtext"><a className="project-link" href="https://inaslew.github.io/Play-Crystal-Mountain/" target="_blank">Play here</a></p>
                        <p className="subtext"><a className="project-link" href="https://github.com/InaSLew/Crystal-Mountain" target="_blank">Project repo here</a></p>
                    </div>
                </article>
                
                <article className="project-card">
                    <img className="project-image" src="src/images/pumpkinMadnessThumbnail.png" alt="Gamejam project Night of the Mutant Pumpkins image"/>
                    <h3>Night of the Mutant Pumpkins</h3>

                    <div className="pill-button pill-button-project-game-jam">Game jam</div>
                    <div className="pill-button pill-button-madein-unity">Made in Unity</div>

                    <p className="subtext">
                        A 2D mediumly fast-paced platformer survival game featuring a spooky Halloween theme.
                    </p>
                    
                    <div className="project-card-detail">
                        <hr/>
                        <p className="subtext">
                            A group effort for Forsbergsskola's 2021 Autumn Game Jam : Pumpkin Madness (27/10/2021 - 29/10/2021).
                        </p>
                        <p className="subtext">
                            I worked with my fellow students (3 programmers and 2 game designers) and the game was produced in 3 days. My working areas included
                            <ul>
                                <li className="subtext">spawning enemies</li>
                                <li className="subtext">the underlying base className which both enemies and player share</li>
                            </ul>
                        </p>
                        <p className="subtext"><a className="project-link" href="https://play.unity.com/mg/other/night-of-the-mutant-pumpkins" target="_blank">Play here</a></p>
                        <p className="subtext"><a className="project-link" href="https://github.com/InaSLew/AutumnGameJam-PumpkinMadness" target="_blank">Project repo here</a></p>
                    </div>
                </article>

                <article className="project-card">
                    <img className="project-image" src="src/images/smallTheftAutoThumbnail.png" alt="School project Small Theft Auto image"/>
                    <h3>Small Theft Auto</h3>

                    <div className="pill-button pill-button-project-school">School project</div>
                    <div className="pill-button pill-button-madein-unity">Made in Unity</div>

                    <p className="subtext">
                        A very down-scaled, simplified clone of the old classic <i>Grand Theft Auto 2</i>.
                    </p>
                    
                    <div className="project-card-detail">
                        <hr/>
                        <p className="subtext">
                            In this group effort of me and other 3 programming students, my main working areas included
                            <ul>
                                <li className="subtext">scripts of base classes for Car and Player</li>
                                <li className="subtext">scripts for player's attack and equipping/swapping between 3 types of weapons (1 melee and 2 guns)</li>
                                <li className="subtext">scripts of base class for Weapon and the interfaces needed to work with player's attack</li>
                            </ul>
                        </p>
                        <p className="subtext"><a className="project-link" href="https://inaslew.github.io/Play-Small-Theft-Auto/" target="_blank">Play here</a></p>
                        <p className="subtext"><a className="project-link" href="https://github.com/forsbergsskola-se/gp21-1018-unity-introduction-smalltheftauto-train-in-vain/tree/main/projects/SmallTheftAuto" target="_blank">Project repo here</a></p>
                    </div>
                </article>

            </div>
        </div>
    );
}
export default Projects;

