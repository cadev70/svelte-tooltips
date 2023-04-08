import Tooltip from '$lib/Tooltip.svelte';
import type { Config, Placement, TooltipOptions } from '$lib/tooltip.types';
import { createPopper, type Instance } from '@popperjs/core';

let globalConfig: Config | null = null;
const SHOW_EVENTS = ['mouseenter', 'focus'];
const HIDE_EVENTS = ['mouseleave', 'blur'];

export function tooltip(reference: HTMLElement, options: TooltipOptions) {
	if (!globalConfig) {
		setConfig();
	}
	let _content: string;
	let _disabled: boolean;
	let _offset: number;
	let _placement: Placement;
	let _popper: Instance | null;
	let _showArrow: boolean;
	let _tooltip: Tooltip;
	let _tooltipElement: HTMLElement;

	const updateOptions = (options: TooltipOptions) => {
		const {
			content = '',
			disabled = false,
			offset = globalConfig!.offset!,
			placement = globalConfig!.placement!,
			showArrow = globalConfig!.showArrow!
		} = options;
		_content = content;
		_disabled = disabled;
		_offset = offset;
		_placement = placement;
		_showArrow = showArrow;
	};

	const show = () => {
		if (_disabled) {
			return;
		}
		if (!reference.parentElement) {
			console.warn('Missing parent element of reference element');
			return;
		}
		_tooltip = new Tooltip({
			target: reference.parentElement!,
			props: { content: _content, showArrow: _showArrow }
		});

		if (!_tooltip.element) {
			console.warn('Missing tooltip element.');
			return;
		}
		_tooltipElement = _tooltip.element!;
		_tooltipElement.setAttribute('data-show', '');

		_popper = createPopper(reference, _tooltipElement, {
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, _offset]
					}
				}
			],
			placement: _placement
		});
	};

	const hide = () => {
		_tooltipElement?.removeAttribute('data-show');
		_popper?.destroy();
		_popper = null;
		_tooltip?.$destroy();
	};

	updateOptions(options);

	SHOW_EVENTS.forEach((event) => {
		reference.addEventListener(event, show);
	});
	HIDE_EVENTS.forEach((event) => {
		reference.addEventListener(event, hide);
	});

	return {
		update(options: TooltipOptions) {
			updateOptions(options);
		},
		destroy() {
			_popper?.destroy();
			SHOW_EVENTS.forEach((event) => {
				reference.removeEventListener(event, show);
			});
			HIDE_EVENTS.forEach((event) => {
				reference.removeEventListener(event, hide);
			});
		}
	};
}

export function setConfig(config: Config = {}) {
	globalConfig = {
		offset: config?.offset === undefined || config?.offset === null ? 8 : config?.offset,
		placement: config?.placement || 'top',
		showArrow:
			config?.showArrow === undefined || config?.showArrow === null ? true : config?.showArrow
	};
}
