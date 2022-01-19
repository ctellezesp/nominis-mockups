import { FC } from 'react';

import { IScreenAnswer } from '../../models/components/screen-answer.model';
import './screen-answer.styles.css';

export const ScreenAnswerComponent: FC<IScreenAnswer> = ({
	text,
}): JSX.Element => {
	return (
		<p
			className="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mt-2 mb-2 screen"
			data-testid="screen"
		>
			{text}
		</p>
	);
};
