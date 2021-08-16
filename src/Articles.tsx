import { Audio, useCurrentFrame, useVideoConfig } from 'remotion';
import { Article } from './Article';
import music from './assets/music.mp3';

export const Articles: React.FC<{
	articles: { title: string; content: string }[];
}> = ({ articles }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			{articles.map((article, idx) => (
				<Article
					article={article}
					startFrame={(videoConfig.durationInFrames / 3) * idx}
					duration={300}
				/>
			))}
			<Audio src={music} />
		</div>
	);
};
