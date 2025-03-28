<h1>Details</h1>
<script>
	//@ts-nocheck
	import { supabase } from '$lib/supabase.js';

	export let data;

	let luggages = data.luggages;
	let details = data.details; 

	async function filterByLuggage(filter_id = 0) {
		let filtered = [];

		if (filter_id > 0) {
			filtered = await supabase.from('details').select('*').eq('lugg_id', filter_id);
		} else {
			filtered = await supabase.from('details').select('*');
		}

		details = filtered.data;
	}
</script>

<!-- The HTML content of the page-->

<div class="container">
	<div class="row">
		<!-- Page Header -->
		<h2 class="mt-5">Events Log from Supabase</h2>
	</div>
	<div class="row">
		<div class="col-sm-2">
			<!-- Page Body Left Column (menu) -->
			<div id="luggage" class="list-group">
				<!-- luggage links -->
				<button on:click={() => filterByLuggage} class="list-group-item list-group-item-action"
					>All Luggage</button
				>
				{#each luggages as luggage}
					<button
						on:click={() => {
							filterByLuggage(Number(luggage.lugg_id));
						}}
						class="list-group-item list-group-item-action"
					>
						{luggage.lugg_id}
					</button>
				{/each}
			</div>
		</div>
		<!-- End computer col -->
		<div class="col-sm-10">
			<!-- Page Body Right Side (Content goes here) -->
			<div id="events">
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>Event ID</th>
							<th>Luggage ID</th>
							<th>Owner ID</th>
							<th>Checked in?</th>
							<th>Luggage Status</th>
							<th>Airport Start</th>
							<th>Airport Destination</th>
						</tr>
					</thead>
					<tbody>
						{#each events as event}
							<tr>
								<td>{event.events_id}</td>
								<td>{event.luggage_id}</td>
								<td>{event.owner_id}</td>
								<td>{event.checked_in}</td>
								<td>{event.status}</td>
								<td>{event.airport}</td>
								<td>{event.airport_dest}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		<!-- End events col -->
	</div>
	<!-- End Row -->
</div>
<!-- End Main Content-->

<!-- The CSS content of the page-->
