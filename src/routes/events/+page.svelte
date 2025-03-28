
<script>
	//@ts-nocheck
		import * as db from '$lib/data_access.js';
		import {format_timestamp} from '$lib/utilities.js';
		import { AuthWeakPasswordError } from '@supabase/supabase-js';

		import { writable } from 'svelte/store'
		export let data;

	
		let luggages = data.luggages;

		let search_text = '';

		let events = writable([...data.events])
	
		async function filterByLuggage(filter_id=0) {
			let filtered = [];
	
			if (filter_id > 0) {
				filtered = await db.get_events_by_luggage_id(filter_id);
			} else {
				filtered = await db.get_all_events();
				from('events').select('*');
			}
			console.log(filtered);
			$events = filtered;
	
		}

		async function search_events(){
			
			if (search_text == ''){
				alert('invalid search');
				return false;
			}
			const result = await db.search_events(search_text);

			$events = result;

		}

		async function delete_event(events_id = 0){

			if (isNaN(events_id)){
				alert('cannot delete event with invalid ID');
				return false
			}
			if (confirm('Permanently deleting product with ID= ${events_id}\n\nAre you sure?')) {
				const result = await db.delete_event_by_id(events_id);
				alert('Event with id ${events_id} deleted')
			}
			return true;
		}

		const table_sort = {
			events_id: false,
			timestamp: false,
			luggage_id: false,
			checked_in: false,
			status: false,
			airport: false,
			airport_dest: false
		};

		async function sort_by_col(col){

			let db_sort_col = col;

			table_sort[col] = !table_sort[col];

			const sorted = await db.get_all_events(db_sort_col.table_sort[col]);
		}

		$events = sorted;

		console.log('${col} ; ${table_sort[col]}')

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
					<button on:click={() => filterByLuggage()} class="list-group-item list-group-item-action">All Luggage</button>
					{#each luggages as luggage}
						<button on:click={() => {filterByLuggage(Number(luggage.luggage_id))}} class="list-group-item list-group-item-action">
							{luggage.luggage_id}
						</button>
					{/each}
				</div>
			</div>
			<!-- End computer col -->
			<div class="col-sm-10">

				<!--Search box-->
				<form>
					<div class="row m-4">
						<div class="col-md-4 d-flex">
						<input type="text" bind:value={search_text} class="form-control" name="search" placeholder="search Events"/>
						</div>
						<!--Submit button-->
						<div class="col-md-1">
							<button on:click={search_events} class="btn btn-primary">Search</button>
						</div>
					</div>
				</form>

				<!-- Page Body Right Side (Content goes here) -->
				<div id="events">
					<table class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th class="click-text" on:click={() => sort_by_col('events_id')}><i class={table_sort['events_id'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Event ID</th>
								<th class="click-text" on:click={() => sort_by_col('luggage_id')}><i class={table_sort['luggage_id'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Luggage ID</th>
								<th class="click-text" on:click={() => sort_by_col('owner_id')}><i class={table_sort['owner_id'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Owner ID</th>
								<th class="click-text" on:click={() => sort_by_col('checked_in')}><i class={table_sort['checked_in'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Checked in?</th>
								<th class="click-text" on:click={() => sort_by_col('status')}><i class={table_sort['status'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Luggage Status</th>
								<th class="click-text" on:click={() => sort_by_col('airport')}><i class={table_sort['airport'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Airport Start</th>
								<th class="click-text" on:click={() => sort_by_col('airport_dest')}><i class={table_sort['airport_dest'] ? 'bi bi-sort-down' : 'bi bi-sort-up'}></i>Airport Destination</th>
							</tr>
						</thead>
						<tbody>
							{#each $events as event}
								<tr>
									<td><a href="/event_details/{event.events_id}">{event.events_id}</a></td>
									<td>{format_timestamp(event.luggage_id)}</td>
									<td>{event.owner_id}</td>
									<td>{event.checked_in}</td>
									<td>{event.status}</td>
									<td>{event.airport}</td>
									<td>{event.airport_dest}</td>
									<td>
										<!-- svelte-ignore a11y_consider_explicit_label -->
										<button
											on:click={() => delete_event(event.events_id)}
											class= "btn btn-sm btn-outline-danger">
											<!-- svelte-ignore element_invalid_self_closing_tag -->
											<span class="bi bi-trash"/>
											</button>
									</td>
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
	 <style>
		h2 {
			color: pink;
			text-align: center;
		}
	
	 </style>
	
	