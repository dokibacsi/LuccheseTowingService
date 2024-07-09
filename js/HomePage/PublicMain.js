import PublicMainArticle from "./PublicHPArticle/PublicHPArticle.js";
import PublicNav from "../PublicNav/PublicNav.js";
import PublicFooter from "../PublicFooter/PublicFooter.js";

class PublicMain{
    constructor(){
        new PublicNav();
        new PublicMainArticle();
        new PublicFooter();
    }
}

export default PublicMain