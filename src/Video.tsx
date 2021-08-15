import { Composition } from 'remotion';
import { Article } from './Articles';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="Article"
			component={Article}
			durationInFrames={150}
			fps={30}
			width={720}
			height={1280}
			defaultProps={{
				titleText: 'Article Title',
				titleColor: 'black',
			}}
		/>
	);
};
