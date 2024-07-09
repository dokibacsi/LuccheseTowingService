import PublicHPWelcome from "./Welcome/PublicHPWelcome.js"
import PublicHPAboutUS from "./AboutUs/PublicHPAboutUS.js"  
import { HomePageDescriptions } from "../../DescriptionList.js"

class PublicHPArticle{
    constructor(){
        const welcomePElement = $("#welcome")
        const articlePElement = $("article")
        new PublicHPWelcome(welcomePElement)
        new PublicHPAboutUS(HomePageDescriptions, articlePElement)
    }
}

export default PublicHPArticle