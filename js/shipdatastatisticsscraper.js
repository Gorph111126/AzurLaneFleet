const stats = require('F:\\Users\\Downloads\\ship_data_statistics.json'); 
const template = require('F:\\Users\\Downloads\\ship_data_template.json');
const strengthen = require('F:\\Users\\Downloads\\ship_data_strengthen.json');

const newships = ["Z47","U-31","Z43","Strasbourg"];
const highestships ={};

for (const ship of Object.values(stats)){
    //is it a ship I want
    if (newships.includes(ship.name)) {
        //have we seen it before
        if (!highestships[ship.name] || ship.rarity > highestships[ship.name].star){
            highestships[ship.name] = ship;
        }
            
    }
    
}

const output = {}; 
for (const ship of Object.values(highestships)){
    let strid = Math.floor(ship.id/10);
    if(ship.retro == null){
        ship.retro = 0;
    }
    otherData = template[ship.id]
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
        reload: [ship.attrs[5],ship.attrs_growth[5],ship.attrs_growth_extra[5], strengthen[strid].durability[4]]
    };
    console.log(output)
}

console.log("done")



// let stats = shipstats["404061"]
// strengthid = stats.strengthen_id;
// console.log(stats.strengthen_id)