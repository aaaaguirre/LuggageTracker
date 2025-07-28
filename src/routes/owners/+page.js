import { supabase } from '$lib/supabase.js';

export async function load() {
    try {
        // Fetch details and owners from Supabase
        const { data: details, error: detailsError } = await supabase.from('details').select('*');
        const { data: owners, error: ownersError } = await supabase.from('owner').select('*');
        
        // Check if there's an error while fetching details or owners
        if (detailsError || ownersError) {
            return {
                error: 'An error occurred while fetching data from Supabase',
                detailsError,
                ownersError
            };
        }

        // If data is successfully fetched, return it
        return {
            details: details || [],  // fallback to an empty array if no details
            owners: owners || []      // fallback to an empty array if no owners
        };
    } catch (error) {
        // Catch any other unexpected errors
        return {
            error: 'An unexpected error occurred',
            
        };
    }
}

