export const fetchArticles = () => {
	// Scrape the first 3 articles from https://www.ctvnews.ca/world
	let articles = [
		{
			title:
				'Sydney lockdown extended statewide, fines hiked as Australia faces "worst" COVID-19 outbreak',
			content:
				'SYDNEY -- Australian police hiked fines for people breaking lockdown rules in Sydney and the rest of its home state on Saturday and strict stay-at-home orders were extended statewide amid a record jump in daily new COVID-19 infections.',
		},
		{
			title: 'Protesters in France denounce COVID-19 health pass',
			content:
				'PARIS -- Thousands of people, from families to far-right sympathizers, marched in cities across France for a fifth straight Saturday to denounce a COVID-19 health pass that is now needed to enter French restaurants, bars and sports arenas or use long-distance trains, planes or buses.',
		},
		{
			title: 'Calif. restaurant set on fire after man denied free soda',
			content:
				'STOCKTON, CA -- (KOVR) -- After an argument broke out between a customer and employee at El Forastero Mexican Food in Stockton, the restaurant went up in flames.',
		},
	];

	return { articles };
};
