<script lang="ts">
	import {supabase} from "$lib/supabase";
	import {onMount} from "svelte";
    let test = 0;
	onMount(async ()=>{
		const data = await supabase.from('map-list').select();
		console.log(data,'data');
        test = data.status;
	})
</script>

<div class="counter">
    {test}
</div>

<style>

</style>
