import { FC, useState } from 'react';

import { ISectionOptions } from '../../models/components/section-options.model';
import { OptionButtonComponent } from '../option-button/option-button.component';
import { Option } from '../../models/option.model';
import { ScreenAnswerComponent } from '../screen-answer/screen-answer.component';
import RESET_ICON from '../../assets/icon-3.png';

export const SectionOptionsComponent: FC<ISectionOptions> = ({
	options,
}): JSX.Element => {
	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	const [currentText, setCurrentText] = useState<string>('');

	const handleClick = (option: Option): void => {
		const nextOptions = [...selectedOptions, option];
		setSelectedOptions(nextOptions);
		setCurrentText(nextOptions.map((option: Option) => option.label).join(' '));
	};

	const handleReset = (): void => {
		setSelectedOptions([]);
		setCurrentText('');
	};

	return (
		<div className="flex justify-center items-center w-full h-full">
			<div className="flex flex-col h-full justify-center items-center w-3/4 p-2">
				<div className="flex justify-end p-2 w-full">
					<img
						src={RESET_ICON}
						alt="reset"
						className="h-10 w-10"
						onClick={handleReset}
					/>
				</div>
				<ScreenAnswerComponent text={currentText} />
				<div className="flex gap-2">
					{options.length > 0 &&
						options.map((option: Option) => (
							<OptionButtonComponent
								text={option.label}
								key={option.id}
								disabled={selectedOptions.some(
									(selected: Option) => selected.id === option.id
								)}
								handler={() => handleClick(option)}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
