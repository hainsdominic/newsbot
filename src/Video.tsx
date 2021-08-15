import { Composition } from 'remotion';
import { fetchArticles } from '../fetchArticles';
import { Articles } from './Articles';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="Articles"
			component={Articles}
			durationInFrames={900}
			fps={30}
			width={720}
			height={1280}
			defaultProps={fetchArticles()}
		/>
	);
};
