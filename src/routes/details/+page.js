import { supabase } from '$lib/supabase.js';

export async function load({}) {
    const luggages = await supabase.from('details').select('*')
   
    const event = await supabase.from('event').select('*');


    if (luggages && event) {
        return {
            luggages: luggages.data,
            events: event.data
        };
    }

    return {
        error: 'error occured'
    };
}


