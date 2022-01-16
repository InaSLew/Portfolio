import { EnvironmentType, WorkType } from "./Enums";

class Project {
    img: string;
    imgAltText: string;
    gameTitle: string;
    workType: WorkType;
    environmentType: EnvironmentType;
    workTypeText: string;
    environmentTypeText: string;
    intro: string;
    details: string[];
    responsibleAreas: string[];
    playDemoLink: string;
    repoLink: string;
    
    constructor(img: string, imgAltText: string, gameTitle: string, workType: WorkType, environmentType: EnvironmentType, workTypeText: string, environmentTypeText: string, intro: string, details: string[], responsibleAreas: string[], playDemoLink: string, repoLink: string) {
        this.img = img;
        this.imgAltText = imgAltText;
        this.gameTitle = gameTitle;
        this.workType = workType;
        this.environmentType = environmentType;
        this.workTypeText = workTypeText;
        this.environmentTypeText = environmentTypeText;
        this.intro = intro;
        this.details = details;
        this.responsibleAreas = responsibleAreas;
        this.playDemoLink = playDemoLink;
        this.repoLink = repoLink;
    }
}

export default Project;
