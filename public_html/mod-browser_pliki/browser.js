import {getMods} from 'getMods.js'

async function getModList(){
    const modTemplate = document.getElementById("mod-article");
    
    const modList = await getMods();
    
    const modListSize = modList.length;
        
    for (let i = 0; i < Math.min(modListSize, 12); i += 1) {
        const newMod = document.importNode(modTemplate.content, true);
        const rating = modList[i].modRating;
        const star_container = newMod.querySelector("div");
        for(let star = 0; star < rating; star++) {
            const newStar = document.createElement("span");
            newStar.setAttribute("class", "material-symbols--star-high");
            star_container.appendChild(newStar);
        }
        
        for(let star = rating; star < 5; star++){
            const newStar = document.createElement("span");
            newStar.setAttribute("class", "material-symbols");
            star_container.appendChild(newStar);
        }
        
        newMod.querySelector("img").setAttribute("src", modList[i].modImage);
        newMod.querySelector("h3").textContent = modList[i].modName;
        
        document.getElementById("Group_19").appendChild(newMod);
    }
}
