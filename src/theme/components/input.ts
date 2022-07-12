/* eslint-disable @typescript-eslint/naming-convention */

export const Input = {
	variants: {
		"with-outline": {
			field: {
				border: "1px solid",
				borderColor: "border",
				bg: "inherit",
				_readOnly: {
					boxShadow: "none !important",
					userSelect: "all",
				},
				_disabled: {
					opacity: 0.4,
					cursor: "not-allowed",
				},
				_invalid: {
					borderColor: "error",
					boxShadow: "0 0 0 1px error",
				},
				_focusVisible: {
					zIndex: 1,
					borderColor: "outlinePrimary",
					boxShadow: "0 0 0 1px outlinePrimary",
				},
			},
		},
	},
};
