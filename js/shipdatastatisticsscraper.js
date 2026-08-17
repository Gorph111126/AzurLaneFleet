const stats = require('F:\\Users\\Downloads\\ship_data_statistics.json'); 
const template = require('F:\\Users\\Downloads\\ship_data_template.json');
const strengthen = require('F:\\Users\\Downloads\\ship_data_strengthen.json');

const newships = ["Z47","U-31","Z43","Strasbourg","John Rodgers","Bennington","Vicksburg","Harrison","Collett","Griffin","Surrey","Superb","L'Intrépide","Arromanches","Cherbourg","Unzen-chan","Z15","Z14","Prinz Moritz","U-2501","Götz von Berlichingen","Musashi-chan","Nayoro","Kizu","Unryuu","Bogatyr","Krasny Kavkaz","Ozornoy","Moskva","Hai Chou","Chang Wu","Fujinami","Ugolino Vivaldi","Alberto di Giussano","Francesco Caracciolo","Pasadena","Clarence K. Bronson","Cowpens","Lexington II","Adventure","Royal James","Pearl","Lyme","Queen Anne's Revenge","Minase","Asama","Oumi","I-404","Taekaze","Hakuhou","Duguay-Trouin","Le Hardi","Duquesne","Bois Belleau","Masséna","Little Ägir","Z13","U-552","Admiral Zenker","Little Anchorage","Trinidad","Gallant","Cleopatra","Trafalgar","Oleg","Evertsen","De Zeven Provinciën","Kazan","Miller","Santa Fe","Franklin","Bartolomeo Colleoni","Giosuè Carducci","Maggiore Baracca","Maggiore Baracca","Raffaello","Fu Po","Chang Feng","Hai Yung","Chien Wu","Z11","Z9","Duisburg","Z52","Fritz Rumey","Dolphin","Portsmouth Adventure","Amity","Fancy","Ganj-i-Sawai","Suzunami","Ayase","Watarase","Amagi(CV)","Bell","Herring","Fargo","Pittsburgh","Pittsburgh","L'Audacieux"];
const highestships ={};

for (const ship of Object.values(stats)) {
    if (newships.includes(ship.name)) {
        const current = highestships[ship.name];

        if (!current || ship.star > current.star) {
            highestships[ship.name] = ship;
        }
    }
}




const output = {}; 
for (const ship of Object.values(highestships)){
    let retrofitbonus = 0;
    let strid = Math.floor(ship.id/10);
    if(ship.retro == null){
        ship.retro = 0;
    }
    if(strengthen[strid]){
        enhance = strengthen[strid].durability[4]; 
    }
    else{
        enhance = 0;
    }
    const otherData = template[ship.id]
    output[ship.id] = {
        nationality: ship.nationality,
        type: ship.type,
        base_list: ship.base_list,
        id: ship.id,
        skin_id: ship.skin_id,
        english_name: ship.english_name,
        star: ship.star,
        rarity: ship.rarity,
        retro: ship.retro,
        //data statistics ends here, now use data template

        uni_id: ship.id,
        painting: ship.id,
        jp_name: ship.jp_name,
        en_name: ship.english_name,
        cn_name: ship.cn_name,
        tw_name: ship.tw_name,
        equip_1: otherData.equip_1,
        equip_2: otherData.equip_2,
        equip_3: otherData.equip_3,
        equip_4: otherData.equip_4,
        equip_5: otherData.equip_5,
        eq_p: ship.equipment_proficiency,
        reload: [ship.attrs[5],ship.attrs_growth[5],ship.attrs_growth_extra[5],enhance,retrofitbonus]
    };
    
}
console.log(output);
console.log("done")
