import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import { HeaderComponent } from './components/header/header.component';
import { SectionOptionsComponent } from './components/section-options/section-options.component';
import { InformationComponent } from './components/information/information.component';
import { Option } from './models/option.model';
import DESKTOP_BG from './assets/desktop-background.png';
import MOBILE_BG from './assets/mobile-background.png';
import SOUND_ICON from './assets/icon-4.png';

const App: FC = (): JSX.Element => {
	const options: Option[] = [
		{
			id: '1',
			label: 'teeth.',
		},
		{
			id: '2',
			label: 'brush',
		},
		{
			id: '3',
			label: 'my',
		},
		{
			id: '4',
			label: 'I',
		},
	];

	const mobile = useMediaQuery({ query: '(max-width: 1200px)' });

	return (
		<div
			className={`flex justify-center h-screen bg-cover ${
				mobile ? 'bg-bottom-top flex-col' : 'flex'
			}`}
			style={{ backgroundImage: `url('${mobile ? MOBILE_BG : DESKTOP_BG}')` }}
		>
			<div className="flex-1">
				<HeaderComponent
					title="Story Title"
					subtitle="Episode 1"
					currentLives={3}
					mobile={mobile}
				/>
				<InformationComponent
					title="Let's practice"
					instructions="Put the words in order to make a correct sentence."
				/>
			</div>
			<div className="flex-1">
				<SectionOptionsComponent options={options} />
			</div>
			<img
				src={SOUND_ICON}
				alt="sound"
				className={`h-6 fixed right-5 ${mobile ? 'bottom-5' : 'top-5'}`}
			/>
		</div>
	);
};

export default App;
