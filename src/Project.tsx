import { EnvironmentType, WorkType } from "./Enums";

export class Project {
    img: string;
    imgAltText: string;
    gameTitle: string;
    workType: WorkType;
    environmentType: EnvironmentType;
    workTypeText: string;
    environmentTypeText: string;
    intro: string;
    details: string[];
    responsibleAreas: ResponsibleArea[];
    playDemoLink: string;
    repoLink: string;
    
    constructor(img: string, imgAltText: string, gameTitle: string, workType: WorkType, environmentType: EnvironmentType, workTypeText: string, environmentTypeText: string, intro: string, details: string[], responsibleAreas: ResponsibleArea[], playDemoLink: string, repoLink: string) {
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

export class ResponsibleArea
{
    description: string;
    demoGifs?: DemoGif[];
    
    constructor(description: string, demoGifs?: DemoGif[])
    {
        this.description = description;
        this.demoGifs = demoGifs;
    }
}

export class DemoGif
{
    gif: string;
    altText: string;
    
    constructor(gif: string, altText: string)
    {
        this.gif = gif;
        this.altText = altText;
    }
}
