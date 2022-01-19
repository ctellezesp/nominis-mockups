import { FC } from 'react';

import { IHeader } from '../../models/components/header.model';
import NOMINIS_LOGO from '../../assets/nominis-logo.png';
import HEART from '../../assets/icon-1.png';
import HEART_FILL from '../../assets/icon-2.png';

export const HeaderComponent: FC<IHeader> = ({
	title,
	subtitle,
	currentLives,
	mobile,
}): JSX.Element => {
	const lives = new Array(currentLives).fill(1);
	const attempsTaked = new Array(5 - currentLives).fill(0);

	return (
		<div className={`flex ${mobile ? 'justify-around' : 'justify-start'}`}>
			{mobile ? (
				<img src={NOMINIS_LOGO} alt="Nominis" className="h-8 m-3" />
			) : (
				<div className={`flex flex-col p-3 gap-2 ${!mobile && 'basis-3/4'}`}>
					<span className="text-3xl text-red-800 tracking-wider">{title}</span>
					<span className="text-lg text-red-700 tracking-wide">{subtitle}</span>
				</div>
			)}
			<div className="flex justify-evenly items-center">
				{attempsTaked.map((vallue: number, index: number) => (
					<img key={index} src={HEART} alt="heart" className="h-5 m-1" />
				))}
				{lives.map((vallue: number, index: number) => (
					<img key={index} src={HEART_FILL} alt="heart" className="h-5 m-1" />
				))}
			</div>
		</div>
	);
};
