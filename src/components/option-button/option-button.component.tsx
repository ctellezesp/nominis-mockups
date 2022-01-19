import { FC } from 'react';

import { IOptionButton } from '../../models/components/option-button.model';

export const OptionButtonComponent: FC<IOptionButton> = ({
	text,
	disabled,
	handler,
}): JSX.Element => {
	return (
		<button
			className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border rounded-md shadow text-lg disabled:bg-gray-100 disabled:text-gray-300"
			disabled={disabled}
			onClick={handler}
		>
			{text}
		</button>
	);
};
