class PublicNavMegjelenit{
    #PElement
    #ElementList
    constructor(PElement, ElementList){
        this.#PElement = PElement
        this.#ElementList = ElementList
        this.#mindMegjelenit(this.#PElement, this.#ElementList)
    }

    #egyMegjelenit(szuloelem, element){
        let text = `<li>${element}</li>`
        return text;
    }

    #mindMegjelenit(szuloElem, ElementList){
        let txt = "<ul>"
        txt += "<img src='./images/Public/Nav/oldalLogo.png' alt='vontatas_logo'>"
        const szuloGyerekElem = $("ul")
        ElementList.forEach(element => {
            txt += this.#egyMegjelenit(szuloGyerekElem, element)
        });
        txt += "</ul>"
        szuloElem.html(txt)
    }
}

export default PublicNavMegjelenit