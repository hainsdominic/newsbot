import { Audio, useCurrentFrame, useVideoConfig } from 'remotion';
import music from '../assets/music.mp3';
import { Article } from './Article';

export const Articles: React.FC<{
	articles: { title: string; content: string }[];
}> = ({ articles }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			{/* Couldn't iterate over the the array */}
			<Article article={articles[0]} startFrame={0} duration={300} />;
			<Article
				article={articles[1]}
				startFrame={videoConfig.durationInFrames / 3}
				duration={300}
			/>
			<Article
				article={articles[2]}
				startFrame={(videoConfig.durationInFrames / 3) * 2}
				duration={300}
			/>
			<Audio src={music} />
		</div>
	);
};
