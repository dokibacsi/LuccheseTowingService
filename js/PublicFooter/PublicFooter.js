class PublicFooter{
    constructor(){
         const pElement = $("footer")
         this.#osszerak(pElement)
    }

    #osszerak(pElem){
        let text = "<p>Székhely: <br>Rockshore West<br>(Déli Rákászat)</p>"
        text += "<p>All rights reserved</p>"
        text += "<p>Cégvezető telefonszáma: +38-76-238-8819</p>"
        pElem.html(text)
    }    
}

export default PublicFooter