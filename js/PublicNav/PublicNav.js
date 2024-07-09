import PublicNavMegjelenit from "./PublicNavMegjelenit.js"

class PublicNav{
    constructor(){
        const mainParentE = $("nav")
        const navigationBarElements = ["áraink", "kollégák", "jelentkezés", "nyereményjáték"]
        new PublicNavMegjelenit(mainParentE, navigationBarElements)
    }
}

export default PublicNav