export async function getMods(){
    const tags = new FormData(document.getElementById("mod-tags"));
    let modTags = [];

    for (const [key, value] of tags) {
        modTags.push(key);
    }
    
    const itemName = document.getElementById("mod-name-search-bar").value;
    
    const mods = await fetch("/searchMods", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({searchTerm: itemName, tags: modTags})
    });
    
    return await mods.json();
}

