<script lang="ts" context="module">
	import { setConfig, tooltip } from '$lib/tooltip';
	import type { Placement } from '$lib/tooltip.types';

	setConfig({
		offset: 0,
		placement: 'bottom',
		showArrow: false
	});
</script>

<script lang="ts">
	let content: string = 'Tips Content';
	let placement: Placement = 'top';
	let offset: number = 8;
	let disabled: boolean = false;
	let showArrow: boolean = true;

	const PLACEMENTS = [
		'top-start',
		'top',
		'top-end',
		'right-start',
		'right',
		'right-end',
		'bottom-start',
		'bottom',
		'bottom-end',
		'left-start',
		'left',
		'left-end'
	];
</script>

<div>
	<button
		class="reference"
		use:tooltip={{
			content: content,
			disabled: disabled,
			offset: offset,
			placement: placement,
			showArrow: showArrow
		}}>Button</button
	>
	<button
		class="reference"
		use:tooltip={{
			content: `${content} (Global Config)`
		}}>Button</button
	>
	<textarea bind:value={content} />
	<select bind:value={placement}>
		{#each PLACEMENTS as placementValue}
			<option value={placementValue}>{placementValue}</option>
		{/each}
	</select>
	<input type="number" bind:value={offset} />
	<button on:click={() => (disabled = !disabled)}>Disabled: {disabled}</button>
	<button on:click={() => (showArrow = !showArrow)}>Show Arrow: {showArrow}</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.reference {
		height: 100px;
		margin: 50px;
		width: 100px;
	}
</style>
