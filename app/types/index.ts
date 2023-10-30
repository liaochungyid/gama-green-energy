export interface INavgationBar {
    lang: 'zh' | 'en';
    pages: {
        name: string;
        pathName: string;
    }[]
}

export interface IHeroSection {
    title: string;
    subtitle: string;
}

export interface IAboutUsSection {
    imagePart: {
        title: string;
        description: string;
    }[];
    descriptionPart: {
        title: string;
        titileDes: string;
        subtitleFirstLine: string;
        subtitleSecondLine: string;
        contentFirstPara: string;
        contentSecondPara: string;
    };
}

export interface ISolutionSection {
    title: string;
    titleDes: string;
    subtitleFirst: string;
    contentFirst: string[];
    subtitleSecond: string[];
    contentSecond: string[];
    subtitleThird: string;
    contentThird: string[];
}

export interface ICostEffectivenessSection {
    title: string;
    titleDes: string;
    stage: string[];
    listDescription: string[];
}

export interface IPracticalCaseSection {
    title: string;
    subtitleFirst: string;
    contentFirst: string;
    subtitleSecond: string;
    contentSecond: string[];
    subtitleThird: string;
    contentThird: string;
    picGridSubtitle: string[];
}

export interface IOurStrengthSection {
    title: string;
    cards: {
        title: string;
        titleDes: string;
    }[];
}

export interface IFaqSection {
    title: string;
    subtitleFuel: string;
    qaFuel: {
        q: string;
        a: string;
    }[];
    subtitleTechnology: string;
    qaTechnology: {
        q: string;
        a: string;
    }[];
    subtitlePowGen: string;
    qaPowGen: {
        q: string;
        a: string;
    }[];
    subtitleApplication: string;
    qaApplication: {
        q: string;
        a: string;
    }[];
}

export interface IPartnerSection {
    title: string;
    titleDes: string;
}

export interface IFooterSection {
    title: string;
    office: string;
    phone: string;
    fax: string;
    workHour: string;
    email: string;
    cta: string;
}

export default interface IPageProps {
    NavgationBar: INavgationBar;
    HeroSection: IHeroSection;
    AboutUsSection: IAboutUsSection;
    SolutionSection: ISolutionSection;
    CostEffectivenessSection: ICostEffectivenessSection;
    PracticalCaseSection: IPracticalCaseSection;
    OurStrengthSection: IOurStrengthSection;
    FaqSection: IFaqSection;
    PartnerSection: IPartnerSection;
    FooterSection: IFooterSection;
} 