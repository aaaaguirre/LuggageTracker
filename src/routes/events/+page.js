import * as db from '$lib/data_access.js';

export async function load({}) {

    const details = await db.get_all_details();
    //console.log('details: ', details);

    const event = await db.get_all_events();

    

    if (details && event){
        return {
            details: details,
            events: event
        };
    }

    return{
        error: 'error occured'
    };
}



