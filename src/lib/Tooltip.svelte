<svelte:options accessors={true} />

<script lang="ts">
	export let content: string = '';
	export let element: HTMLElement | null = null;
	export let showArrow: boolean = true;
</script>

<div id="s3-tooltip" role="tooltip" bind:this={element}>
	{@html content}
	{#if showArrow}
		<div id="s3-tooltip__arrow" data-popper-arrow />
	{/if}
</div>

<style>
	:root {
		--s3-tooltip-background-color: #333333;
		--s3-tooltip-border-radius: 4px;
		--s3-tooltip-color: white;
		--s3-tooltip-font-size: 13px;
		--s3-tooltip-padding: 4px 8px;
		--s3-tooltip-arrow-size: 8px;
		--s3-tooltip-arrow-position-offset: -4px;
	}

	#s3-tooltip {
		background: var(--s3-tooltip-background-color);
		border-radius: var(--s3-tooltip-border-radius);
		color: var(--s3-tooltip-color);
		font-size: var(--s3-tooltip-font-size);
		padding: var(--s3-tooltip-padding);
	}

	#s3-tooltip__arrow,
	#s3-tooltip__arrow::before {
		position: absolute;
		width: var(--s3-tooltip-arrow-size);
		height: var(--s3-tooltip-arrow-size);
		background: inherit;
	}

	#s3-tooltip__arrow {
		visibility: hidden;
	}

	#s3-tooltip__arrow::before {
		visibility: visible;
		content: '';
		transform: rotate(45deg);
	}

	:global(#s3-tooltip[data-popper-placement^='bottom'] > #s3-tooltip__arrow) {
		top: var(--s3-tooltip-arrow-position-offset);
	}

	:global(#s3-tooltip[data-popper-placement^='top'] > #s3-tooltip__arrow) {
		bottom: var(--s3-tooltip-arrow-position-offset);
	}

	:global(#s3-tooltip[data-popper-placement^='left'] > #s3-tooltip__arrow) {
		right: var(--s3-tooltip-arrow-position-offset);
	}

	:global(#s3-tooltip[data-popper-placement^='right'] > #s3-tooltip__arrow) {
		left: var(--s3-tooltip-arrow-position-offset);
	}
</style>
