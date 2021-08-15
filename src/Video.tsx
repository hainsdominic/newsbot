import { Composition } from 'remotion';
import { Articles } from './Articles';

let articles = [
	{ title: 'article 1', content: 'content 1' },
	{ title: 'article 2', content: 'content 2' },
	{ title: 'article 3', content: 'content 3' },
];

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="Articles"
			component={Articles}
			durationInFrames={900}
			fps={30}
			width={720}
			height={1280}
			defaultProps={{ articles }}
		/>
	);
};
