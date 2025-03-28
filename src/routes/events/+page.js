import * as db from '$lib/data_access.js';

export async function load({}) {

    const luggages = await db.get_all_luggages();

    const event = await db.get_all_events();

    console.log(event);

    if (luggages && event){
        return {
            luggages: luggages,
            events: event
        };
    }

    return{
        error: 'error occured'
    };
}



