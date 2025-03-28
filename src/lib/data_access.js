// @ts-nocheck
// import supabase client
import { supabase } from './supabase.js'

export async function get_all_luggages() {
    const result = await supabase
    .from('luggages')
    .select('*')
    .order('name', { ascending: true });

    if (result.error){
        console.log('get all luggages error: ${result.error}');
    }
    
    return result.data;
}

export async function get_all_events(order_col = 'luggage_id', order_dir = true){
    const result = await supabase
    .from('events')
    .select('*, luggages(name)')
    .order(order_col, {ascending: order_dir});

    if (result.error){
        console.log('get all events error: ${result.error}');
    }

    return result.data;
}

export async function get_events_by_luggage_id(luggage_id){
    const result = await supabase
    .from('events')

    .select('*, luggages(name)')
    .eq('luggage_id', luggage_id)
    .order('timestamp', { ascending: true });

    if (result.error){
        console.log('get all events error: ${result.error}')
    }
    return result.data;
}

export async function delete_event_by_id(events_id){

    const result =  await supabase
    .from('events')
    .delete()
    .eq('id', events_id)

    if (result.error){
        console.log('get all events error: ${result.error}');
        return false;
    }

    return true;

}

export async function search_events(search_text){
    const result = await supabase
    .from('events')
    .select('*, luggages(name)')
    .or ('description.ilike.%${search_text}%,level.ilike.%${search_text}%')
    .order('timestamp', { ascending: true });

    if (result.error){
        console.log('get all events error: ${result.error}');
        return false;
    }

    return result.data;
}

export async function get_event_by_events_id(events_id) {
    const result = await supabase
    .from('events')
    .select('*, events(*)')
    .eq('events_id', events_id)

    if (result.error){
        console.log('get all events error: ${result.error}');
        return false;
    }

    return result.data;
}