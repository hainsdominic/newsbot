import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Content } from './Article/Content';
import { Title } from './Article/Title';

export const Article: React.FC<{
	article: { title: string; content: string };
	startFrame: number;
	duration: number;
}> = ({ article: { title, content }, startFrame, duration }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	// Fade out
	const opacity = interpolate(
		frame,
		[startFrame + duration - 25, startFrame + duration - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const transitionStart = 25;

	return (
		<div style={{ opacity: 1 }}>
			<Sequence from={startFrame} durationInFrames={duration}>
				<Title titleText={title} />
			</Sequence>
			<Sequence
				from={startFrame + transitionStart + 5}
				durationInFrames={duration - transitionStart - 5}
			>
				<Content contentText={content} />
			</Sequence>
		</div>
	);
};
