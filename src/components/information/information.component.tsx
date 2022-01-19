import { FC } from 'react';

import { IInformation } from '../../models/components/information.model';

export const InformationComponent: FC<IInformation> = ({
	title,
	instructions,
}): JSX.Element => {
	return (
		<div className="flex flex-col gap-3 p-8 mt-10 mb-10">
			<span className="text-5xl text-gray-700 tracking-wide">{title}</span>
			<span className="text-2xl text-gray-500 tracking-wider">
				{instructions}
			</span>
		</div>
	);
};
