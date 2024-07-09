class PublicHPAboutUS{
    #list
    #pElement
    constructor(list, pElement){
         this.#list = list
         this.#pElement = pElement
         this.#osszerak(this.#list, this.#pElement)
    }

    #osszerak(list, pElem){
        let text = "<div id='about-us'>"
        list.forEach(element => {
            text += `<h1>${element.title}</h1>`
            text += `<p>${element.description}</p>`
        });
        text += "</div>"
        pElem.append(text)
    }    
}

export default PublicHPAboutUS