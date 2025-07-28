<script>
    //@ts-nocheck
    import { supabase } from '$lib/supabase.js';
  
    export let data;
  
    // Destructure details and owners from the passed data
    let details = data.details;
    let owners = data.owners; 
    let filteredOwners = owners; // Initialize with all owners for now

    // Check if the data is loaded correctly
    console.log("Details: ", details);
    console.log("Owners: ", owners);

    // Function to handle the filtering of owners by owner_id
    async function filterByOwner(filter_id = 0) {
        let filtered = [];

        if (filter_id > 0) {
            console.log("Filtering by owner_id: ", filter_id);
            const { data, error } = await supabase.from('owner').select('*').eq('owner_id', filter_id);
            if (error) {
                console.error('Error fetching filtered owners:', error);
            } else {
                console.log('Filtered data:', data);
                filtered = data;
            }
        } else {
            // If no filter, fetch all owners
            const { data, error } = await supabase.from('owner').select('*');
            if (error) {
                console.error('Error fetching all owners:', error);
            } else {
                console.log('Fetched all owners:', data);
                filtered = data;
            }
        }

        // Update filteredOwners with the fetched data
        filteredOwners = filtered;
    }
</script>

<div class="container">
    <div class="row">
        <h2 class="mt-5">Owners Log from Supabase</h2>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <div id="luggage" class="list-group">
                <!-- Button to show all owners -->
                <button on:click={() => filterByOwner()} class="list-group-item list-group-item-action">
                    All Owners
                </button>

                <!-- Loop over owners to create buttons for each owner -->
                {#each owners as owner}
                    <button
                        on:click={() => filterByOwner(Number(owner.owner_id))}
                        class="list-group-item list-group-item-action"
                    >
                        {owner.owner_id}
                    </button>
                {/each}
            </div>
        </div>

        <div class="col-sm-10">
            <div id="events">
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Owner ID</th>
                            <th>Luggage ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Airport Destination</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Loop through filteredOwners to display filtered data -->
                        {#each filteredOwners as owner}
                            <tr>
                                <td>{owner.owner_id}</td>
                                <td>{owner.luggage_id}</td>
                                <td>{owner.fname}</td>
                                <td>{owner.lname}</td>
                                <td>{owner.email}</td>
                                <td>{owner.phone}</td>
                                <td>{owner.address}</td>
                                <td>{owner.airport_dest}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
