export type Placement =
	| 'top-start'
	| 'top'
	| 'top-end'
	| 'right-start'
	| 'right'
	| 'right-end'
	| 'bottom-start'
	| 'bottom'
	| 'bottom-end'
	| 'left-start'
	| 'left'
	| 'left-end';
export interface TooltipOptions extends Config {
	content: string;
	disabled?: boolean;
}

export interface Config {
	offset?: number;
	placement?: Placement;
	showArrow?: boolean;
}
