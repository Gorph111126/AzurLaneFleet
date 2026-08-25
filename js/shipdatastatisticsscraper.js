const stats = require('F:\\Users\\Downloads\\ship_data_statistics.json');
const template = require('F:\\Users\\Downloads\\ship_data_template.json');
const strengthen = require('F:\\Users\\Downloads\\ship_data_strengthen.json');

const newships = ["U-31", "John Rodgers", "Bennington", "Vicksburg", "Harrison", "Collett", "Griffin", "Surrey", "Superb", "L'Intrépide", "Arromanches", "Cherbourg", "Unzen-chan", "Z15", "Z14", "Prinz Moritz", "U-2501", "Götz von Berlichingen", "Musashi-chan", "Nayoro", "Kizu", "Unryuu", "Bogatyr", "Krasny Kavkaz", "Ozornoy", "Moskva", "Hai Chou", "Chang Wu"];
const highestships = {};

for (const ship of Object.values(stats)) {
    if (newships.includes(ship.name)) {
        const current = highestships[ship.name];

        if (!current || ship.star > current.star) {
            highestships[ship.name] = ship;
        }
    }
}




const output = {};
for (const ship of Object.values(highestships)) {
    let retrofitbonus = 0;
    let strid = Math.floor(ship.id / 10);
    if (ship.retro == null) {
        ship.retro = 0;
    }
    if (strengthen[strid]) {
        enhance = strengthen[strid].durability[4];
    }
    else {
        enhance = 0;
    }
    const otherData = template[ship.id]
    output[ship.skin_id] = {
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
        tw_name: ship.name,
        equip_1: otherData.equip_1,
        equip_2: otherData.equip_2,
        equip_3: otherData.equip_3,
        equip_4: otherData.equip_4,
        equip_5: otherData.equip_5,
        eq_p: ship.equipment_proficiency,
        reload: [ship.attrs[5], ship.attrs_growth[5], ship.attrs_growth_extra[5], enhance, retrofitbonus]
    };

}
console.log(output);
console.log("done")
