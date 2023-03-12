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
export interface TooltipOptions {
	content: string;
	disabled?: boolean;
	offset?: number;
	placement?: Placement;
	showArrow?: boolean;
}
