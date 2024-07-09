class PublicHPWelcome{
    #welcomePElement
    constructor(welcomePElement){
        const backgroundImages = ["./images/Public/Main/Welcome/photo1.png", "./images/Public/Main/Welcome/photo2.png", "./images/Public/Main/Welcome/photo3.png", "./images/Public/Main/Welcome/photo4.png", "./images/Public/Main/Welcome/photo5.png"]
        this.#welcomePElement = welcomePElement
        this.#megjelenit(this.#welcomePElement)
        this.#megjelenitBackground(this.#welcomePElement, backgroundImages)
    }

    #megjelenit(PElement){
        let text = "<h1>Üdvözöljük a <span id='serviceName'>Lucchese Towing Service</span> hivatalos weboldalán!"
        PElement.html(text);
    }

    #megjelenitBackground(backgroundImage, imageList){
        const gSzam = parseInt(Math.random() * imageList.length);
        backgroundImage.css("background-image", `url('${imageList[gSzam]}')`);
        backgroundImage.css("background-position", "center");
        backgroundImage.css("background", `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #0b0010), url('${imageList[gSzam]}') no-repeat center center`);

    }
}

export default PublicHPWelcome