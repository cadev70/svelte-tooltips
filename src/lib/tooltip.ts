import Tooltip from '$lib/Tooltip.svelte';
import type { Placement, TooltipOptions } from '$lib/tooltip.types';
import { createPopper, type Instance } from '@popperjs/core';

const SHOW_EVENTS = ['mouseenter', 'focus'];
const HIDE_EVENTS = ['mouseleave', 'blur'];
let _content: string;
let _disabled: boolean;
let _offset: number;
let _placement: Placement;
let _popper: Instance | null;
let _reference: HTMLElement;
let _showArrow: boolean;
let _tooltip: Tooltip;
let _tooltipElement: HTMLElement;

export function tooltip(reference: HTMLElement, options: TooltipOptions) {
	_reference = reference;
	updateOptions(options);

	SHOW_EVENTS.forEach((event) => {
		_reference.addEventListener(event, show);
	});
	HIDE_EVENTS.forEach((event) => {
		_reference.addEventListener(event, hide);
	});

	return {
		update(options: TooltipOptions) {
			updateOptions(options);
		},
		destroy() {
			_popper?.destroy();
			SHOW_EVENTS.forEach((event) => {
				_reference.removeEventListener(event, show);
			});
			HIDE_EVENTS.forEach((event) => {
				_reference.removeEventListener(event, hide);
			});
		}
	};
}

function updateOptions(options: TooltipOptions) {
	const {
		content = '',
		disabled = false,
		offset = 8,
		placement = 'top',
		showArrow = true
	} = options;
	_content = content;
	_disabled = disabled;
	_offset = offset;
	_placement = placement;
	_showArrow = showArrow;
}

function show() {
	if (_disabled) {
		return;
	}
	if (!_reference.parentElement) {
		console.warn('Missing parent element of reference element');
		return;
	}
	_tooltip = new Tooltip({
		target: _reference.parentElement!,
		props: { content: _content, showArrow: _showArrow }
	});

	if (!_tooltip.element) {
		console.warn('Missing tooltip element.');
		return;
	}
	_tooltipElement = _tooltip.element!;
	_tooltipElement.setAttribute('data-show', '');

	_popper = createPopper(_reference, _tooltipElement, {
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
}

function hide() {
	_tooltipElement?.removeAttribute('data-show');
	_popper?.destroy();
	_popper = null;
	_tooltip?.$destroy();
}
