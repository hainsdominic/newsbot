import {
	Audio,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import music from '../assets/music.mp3';
import { Subtitle } from './Article/Subtitle';
import { Title } from './Article/Title';

export const Article: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({ titleText, titleColor }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			<div style={{ opacity }}>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence
					from={transitionStart + 5}
					durationInFrames={videoConfig.durationInFrames}
				>
					<Subtitle />
				</Sequence>
				<Audio src={music} />
			</div>
		</div>
	);
};
