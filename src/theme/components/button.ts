/* eslint-disable @typescript-eslint/naming-convention */

const disabledButton = {
	opacity: "0.4 !important",
	cursor: "not-allowed",
};

export const Button = {
	variants: {
		"default": {
			bg: "vividPrimary",
			color: "primary",
			border: "1px solid",
			borderColor: "transparent",
			_hover: {
				opacity: 0.8,
				_disabled: {
					bg: "vividPrimary",
				},
			},
			_focus: {
				opacity: 0.8,
				boxShadow: "0 0 0 3px var(--chakra-colors-outlineSecondary)",
			},
			_active: {
				opacity: 0.8,
				boxShadow: "0 0 0 3px var(--chakra-colors-outlineSecondary)",
			},
			_disabled: disabledButton,
		},
		"with-outline": {
			border: "2px solid",
			borderColor: "outlinePrimary",
			bg: "inherit",
			color: "firstText",
			_hover: {
				bg: "inherit",
				opacity: 0.8,
				_disabled: {
					bg: "inherit",
				},
			},
			_focus: {
				opacity: 0.8,
			},
			_active: {
				opacity: 0.8,
			},
			_disabled: disabledButton,
		},
		"transparent": {
			border: "2px solid",
			borderColor: "transparent",
			bg: "transparent",
			color: "firstText",
			_hover: {
				bg: "transparent",
				opacity: 0.8,
				_disabled: {
					bg: "transparent",
				},
			},
			_focus: {
				opacity: 0.8,
			},
			_active: {
				opacity: 0.8,
			},
			_disabled: disabledButton,
		},
	},
	defaultProps: {
		variant: "default",
	},
};
