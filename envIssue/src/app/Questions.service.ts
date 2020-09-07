import { Injectable } from '@angular/core';
import { Question } from './Question';
@Injectable({
	providedIn: 'root'
})
export class QuestionsService {
	private currQuestion = 0;
	constructor() {}

	public getQuestion(index: number) {
		if (index == this.questionList.length) return null;
		return this.questionList[index];
	}

	public getQuestionList() {
		return this.questionList;
	}

	private questionList: Question[] = [
		new Question(
			'What statement is TRUE about the tropospheric ozone?',
			[
				'CFCs is the major chemical which caused the tropospheric ozone hole in the 1970s',
				'The tropospheric ozone absorbs most of the biologically damaging ultraviolet sunlight(called UV - B)',
				'The tropospheric ozone can trigger a variety of health problems including chest pain, coughing, throat irritation, and airway inflammation when being inhaled',
				'The largest ozone hole is found in South California, United States'
			],
			2,
			'Unlike the stratospheric ozone, the tropospheric ozone or ground level ozone is one of the major pollutants, and it has no benefit for human health.',
			[ 'https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics' ]
		),
		new Question(
			'The largest ozone hole discovered in the 1970s over Antarctica is…',
			[
				'getting significantly larger since discovery.',
				'getting slightly bigger since discovery.',
				'getting smaller since discovery.',
				'unchanged since discovery.'
			],
			2,
			'There are two factors contributing to the reduction of ozone depletion. The first factor is the success of the Montreal Protocol, which regulated man-made ozone depleting chemicals. The second factor is that the stratospheric layer has been warmer in recent years, which advances the ozone recovery process.',
			[
				'https://www.nasa.gov/feature/goddard/2019/2019-ozone-hole-is-the-smallest-on-record-since-its-discovery'
			]
		),
		new Question(
			'Which air pollutant is NOT one of the six major pollutants regulated by the Clean Air Act?',
			[ 'Ground level ozone', 'Particulate Matter', 'CFCs', 'Lead' ],
			2,
			'The six major pollutants regulated by the Clean Air Act are: PM (particulate matter or particle pollution), ozone, sulfur dioxide, nitrogen dioxide, carbon monoxide, and lead.',
			[ 'https://www.epa.gov/clean-air-act-overview/clean-air-act-requirements-and-history' ]
		),
		new Question(
			'What is a good AQI (Air Quality Index) value range?',
			[ '0 to 50', '51 to 100', '101 to 150', '151 to 200' ],
			0,
			'The AQI is an index for reporting daily air quality. The higher the AQI, the more polluted your air is.',
			[ 'https://www.airnow.gov/' ]
		),
		new Question(
			'What greenhouse pollutant is emitted during agricultural activities, such as application of synthetic and organic fertilizers and other cropping practices, the management of manure, or burning of agricultural residues?',
			[ 'Carbon dioxide (CO2)', 'Nitrous Oxide (N2O)', 'Methane (CH4)', 'Fluorinated gases' ],
			1,
			'',
			[ 'https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide' ]
		),
		new Question(
			'What international treaty aims to reduce greenhouse gasses emissions in developed countries?',
			[ 'The Paris Agreement', 'The Kyoto Protocol', 'The Clean Air Act', 'The Montreal Protocol' ],
			1,
			'',
			null
		),
		new Question(
			'What greenhouse pollutant is released from thawing permafrost?',
			[ 'Carbon dioxide (CO2)', 'Nitrous Oxide (N2O)', 'Methane (CH4)', 'Fluorinated gases' ],
			2,
			'',
			[ 'https://www.youtube.com/watch?v=YegdEOSQotE&feature=youtu.be' ]
		),
		new Question(
			'What air pollutant is not emitted directly to the air, but is formed as a result of sunlight acting on other chemicals in the air?',
			[ 'Carbon dioxide (CO2)', 'Carbon Monoxide (CO)', 'Nitrous Oxide (N2O)', 'Ground Level Ozone (O3)' ],
			3,
			'',
			null
		),
		new Question(
			'What are the impacts of indoor air pollution on human health?',
			[
				'chronic obstructive pulmonary disease, pneumonia, lung cancer, stroke, heart diseases',
				'irritation of the eyes, nose, and throat, headaches, dizziness, and fatigue',
				'Both A and B',
				'unlike outdoor air pollution, indoor air pollution does not cause any health issue'
			],
			2,
			'',
			[ 'https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health' ]
		),
		new Question(
			'What is the number of people killed by diseases related to air pollution per year?',
			[ 'About 100, 000 people', 'About 400, 000 people', 'About 1 million people', 'About 7 million people' ],
			3,
			'only 1.35 million people are killed in car accidents each year.',
			[ 'http://www9.who.int/airpollution/en/', 'https://www.asirt.org/safe-travel/road-safety-facts/' ]
		),
		new Question(
			'How many gallons of air does a normal people inhale a day? ',
			[ 'About 34 gallons', 'About 340 gallons', 'About 3400 gallons', 'About 34,000 gallons' ],
			2,
			'',
			[ 'https://www.conserve-energy-future.com/various-air-pollution-facts.php' ]
		),
		new Question(
			'Which reason below causes indoor pollution?',
			[ 'Cleaning house with chemicals', 'Cooking', 'Burning candles', 'All of the above' ],
			3,
			'',
			null
		),
		new Question(
			'The Great Smog is one of the most hazardous air pollution event in world history. People were trapped in a 30-mile-wide air mass, teeming with acrid sulfur particles, and deadly cloud of fog and pollution for five days. The Great Smog was responsible for 4000 deaths and affected the healths of other 8000 people. What city did The Great Smog occur at?',
			[ 'New Delhi – India', 'Detroit – United States', 'Bejing – China', 'London – England' ],
			3,
			'',
			[ 'https://www.history.com/news/the-killer-fog-that-blanketed-london-60-years-ago' ]
		),
		new Question(
			'Pure water has a pH of 7. What is the typical pH of acid rain?',
			[ '5 – 6.5', '4 – 5.5', '3 – 4.5', '2 – 3.5' ],
			1,
			'',
			[ 'https://www.epa.gov/indoor-air-quality-iaq/introduction-indoor-air-quality#immediate' ]
		),
		new Question(
			'What is the difference between pH 7 and pH 4?',
			[
				'pH 4 is 3 times more acidic than pH 7',
				'pH 4 is 30 times more acidic than pH 7',
				'pH 4 is 100 times more acidic than pH 7',
				'pH 4 is 1000 times more acidic than pH 7'
			],
			3,
			'',
			null
		),
		new Question(
			'What are the main compounds of acid rain?',
			[
				'Sulfur dioxide and nitrogen oxides',
				'Sulfur dioxide and carbon dioxide',
				'Sulfur dioxide and PM2.5',
				'Sulfur dioxide and methane'
			],
			0,
			'',
			[ 'https://www3.epa.gov/acidrain/education/site_students/whatcauses.html' ]
		),
		new Question(
			'Which one below is NOT an effect of acid rain?',
			[ 'kill fishes and trees', 'cause or worsen respiratory diseases', 'burn your skin', 'peel paint in cars' ],
			2,
			'',
			[
				'http://projects.ncsu.edu/project/bio183de/Black/chemreview/chemreview_reading/acid_rain.html',
				'https://www3.epa.gov/acidrain/education/site_students/whyharmful.html'
			]
		),
		new Question(
			'Why carbon dioxide (CO2) is a dangerous pollutant?',
			[
				'it is the most hazardous pollutant to human health',
				'it is the second most abundant component of dry air',
				'it traps heat, helping to drive global warming',
				'All answers above'
			],
			2,
			'CO2 has contributed more than any driver to climate change between 1750 and 2011.',
			[ 'https://www.ucsusa.org/resources/why-does-co2-get-more-attention-other-gases' ]
		),
		new Question(
			'PM (Particulate Matter) is one of the five major pollutants calculated for the AQI (Air Quality Index). Which one of the answers below best describes the numbers 10 and 2.5 in PM10 and PM 2.5?',
			[ 'Their sizes', 'Their weights', 'Their lethal levels', 'Their abundance levels in dry air' ],
			0,
			'',
			[
				'https://www.epa.gov/pm-pollution/setting-and-reviewing-standards-control-particulate-matter-pm-pollution#standards'
			]
		),
		new Question(
			'Which country was NOT in top 10 rankings by per capita emissions by 2017 (the most recent available data)?',
			[ 'United States', 'Canada', 'South Korea', 'China' ],
			3,
			'China ranked 12.',
			[ 'https://www.ucsusa.org/resources/each-countrys-share-co2-emissions' ]
		),
		new Question(
			'What was the United States ranking by per capita emissions by 2017?',
			[ 'First', 'Second', 'Third', 'Tenth' ],
			2,
			'Saudi Arabia had the first rank.',
			[ 'https://www.ucsusa.org/resources/each-countrys-share-co2-emissions' ]
		),
		new Question(
			'The main components of air are oxygen, carbon dioxide, nitrogen, argon, and water vapour. Besides carbon dioxide, which gas is also a greenhouse gas?',
			[ 'Oxygen', 'Nitrogen', 'Argon', 'Water Vapour' ],
			3,
			'',
			null
		),
		new Question(
			'Benzene is known as a cancer-causing substance, it is also a common outdoor and indoor air pollutant. Which one below is NOT a source of benzene?',
			[ 'gasoline and car exhaust', 'tobacco and cigarette smoke', 'drinking water and vegetables', 'red meats' ],
			2,
			'Benzene can be found in fishes, fruits, and drinking water but in a very small amount and is not harmful to human.',
			[
				'https://www.chemicalsafetyfacts.org/benzene/',
				'https://emergency.cdc.gov/agent/benzene/basics/facts.asp'
			]
		),
		new Question(
			'What gas is 300 times more potent than carbon dioxide and stay in the atmosphere for an average of 114 years?',
			[ 'Methane', 'Benzene', 'Fluorinated Gases', 'Nitrous Oxide' ],
			3,
			'',
			[ 'https://www.epa.gov/ghgemissions/overview-greenhouse-gases' ]
		),
		new Question(
			'Chlorofluorocarbons (CFCs) was the most popular air conditioner refrigerant used in 1970s. It is also the chief contributor of ozone depletion and was banned by the Montreal Protocol. What is the safest alternative to CFCs?',
			[
				'Hydro - chlorofluorocarbons(HCFCs)',
				'Hydrofluorocarbons(HFCs)',
				'Refrigerant Blends("azeotropic" and "zeotropic")',
				'There is no safe alternative to CFCs'
			],
			2,
			'',
			[
				'https://www.conserve-energy-future.com/ozone-layer-and-causes-of-ozone-depletion.php',
				'https://www.airconditioning-systems.com/air-conditioner-refrigerant.html'
			]
		),
		new Question(
			'Why is HFCs NOT a good alternative for CFCs?',
			[ 'It causes respiratory diseases', 'It is a greenhouse gas', 'It is very expensive', 'All answers above' ],
			1,
			'',
			null
		),
		new Question(
			'How many percent of refrigerant on the market nowadays is CFCs?',
			[ '0%', '2%', '5%', 'no data' ],
			0,
			'Production of CFCs ceased in 1995 by the Montreal Protocol',
			null
		),
		new Question(
			'Particulate matter (PM2.5) is an air pollutant that can penatrate deeply into human respiratory system. How small is particulate matter?',
			[
				'PM2.5 diameter is less than 20 % of the diameter of human hair',
				'PM2.5 diameter is less than 10 % of the diameter of human hair',
				'PM2.5 diameter is less than 5 % of the diameter of human hair',
				'PM2.5 diameter is less than 2 % of the diameter of human hair'
			],
			2,
			'',
			[ 'https://www.epa.gov/pm-pollution/particulate-matter-pm-basics#effects' ]
		),
		new Question(
			'What is the source of particulate matter (PM2.5)?',
			[ 'Vehicle exhausts', 'Combustion of fossile fuels', 'Vocanoes, wild fires', 'All answers above' ],
			3,
			'',
			null
		),
		new Question(
			'What is the effect of PM2.5?',
			[
				'Lung and heart diseases',
				'Premature death',
				'Reduced lung function growth in children',
				'All answers above'
			],
			3,
			'',
			[ 'https://www.epa.gov/pm-pollution/particulate-matter-pm-basics#effects' ]
		),
		new Question(
			'What statement is TRUE about lead?',
			[
				'Lead particles are heavy and cannot travel long distance',
				'The only way that humans get exposed to lead is through incidental ingestion because lead is a common element in house paint, furnitures, and cosmetics',
				'Lead is more harmful to children, adults only get affected by lead under a high dose',
				'Lead can accumulate in the bones and adversely affect the nervous system'
			],
			3,
			'',
			[ 'https://www.tceq.texas.gov/airquality/sip/criteria-pollutants/sip-lead' ]
		),
		new Question(
			'What is the effect of lead on children?',
			[ 'low IQ', 'developmental delay', 'seizures', 'all answers above' ],
			3,
			'',
			[ 'https://www.mayoclinic.org/diseases-conditions/lead-poisoning/symptoms-causes/syc-20354717' ]
		),
		new Question(
			'You are driving past a factory and you see a column of reddish-brown smog comming out of the factory chimmey. You guess the factory is emitting…',
			[ 'Carbon dioxide', 'Nitrogen dioxide', 'Sulfur dioxide', 'Methane' ],
			1,
			'Carbon dioxide, sulfur dioxide, methane, and nitrous oxide (NO) are colorless. Nitrogen dioxide (NO2) is reddish-brown (or yellowish-brown) when being burned at high temperature.',
			null
		),
		new Question(
			'What is the largest source of nitrogen oxides (NOx)?',
			[
				'Natural sources, such as volcanoes, and lightning strikes',
				'Agricultural activities',
				'Burning of fossil fuels',
				'Transportation'
			],
			0,
			'The largest man-made source of nitrogen oxides is from agricultural activities.',
			[
				'http://www.airqualityontario.com/science/pollutants/nitrogen.php',
				'https://scied.ucar.edu/nitrogen-oxides'
			]
		),
		new Question(
			'What is NOT true about nitrogen oxides (NOx)?',
			[
				'They are in acid rain',
				'They are the most abundant greenhouse gasses ',
				'High level of NOx exposure decreases female fertility',
				'Nitrous oxide is used as an anesthetic'
			],
			1,
			'',
			[ 'https://toxtown.nlm.nih.gov/chemicals-and-contaminants/nitrogen-oxides' ]
		),
		new Question(
			'The most abundant greenhouse gas in the atmosphere is',
			[ 'Water vapor', 'Carbon dioxide', 'Methane', 'Ground level ozone' ],
			0,
			'',
			null
		),
		new Question(
			'Which is NOT a COMMON disease caused by air pollution?',
			[ 'Leukemia – a type of blood cancer', 'Autism', 'Obesity', 'Birth defects and immune system defect' ],
			2,
			'',
			[
				'https://www.environmentalpollutioncenters.org/air/diseases/',
				'https://medium.com/@auzairind/10-most-common-diseases-caused-by-air-pollution-8faf75f51f8d'
			]
		),
		new Question(
			'What percent of the world’s population lives in places where air quality exceeds WHO guideline limits?',
			[ 'About 60%', 'About 70%', 'About 80%', 'About 90%' ],
			3,
			'',
			[ 'http://www9.who.int/airpollution/en/' ]
		),
		new Question(
			'What federal agency is responsible for air quality in the United States?',
			[
				'United States Department of Energy',
				'National Oceanic and Atmospheric Administration',
				'United States Environmental Protection Agency',
				'United States Department of Health and Human Services'
			],
			2,
			'',
			null
		),
		new Question(
			'What is the largest source of greenhouse gas emissions in the United States in 2019?',
			[ 'Transportation', 'Power', 'Agriculture', 'Factory' ],
			0,
			'',
			[
				'https://insideclimatenews.org/news/07012020/infographic-united-states-emissions-2019-climate-change-greenhouse-gas-coal-transportation'
			]
		),
		new Question(
			'In 2019, the United States was able to cut CO2 emissions in the power section by 10%, the biggest cut in decades, thanks to shifting away from coal power generation. What was the reason for the decline of coal consumption?',
			[
				'Natural gas and renewable energies are more affordable than coal',
				'Coal employment has declined significantly due to the implementation of automation in coal mining',
				'Regulations such as the Clean Power Plan and the Paris Agreement put pressure on states to reduce coal consumption',
				'All answers above'
			],
			3,
			'',
			[
				'https://insideclimatenews.org/news/07012020/infographic-united-states-emissions-2019-climate-change-greenhouse-gas-coal-transportation'
			]
		),
		new Question(
			'What are the three mechanisms of the Kyoto Protocol?',
			[
				'International Emissions Trading, Clean Development Mechanism, Joint Implementation',
				'Emission Banking and Trading Mechanism, Peer Pressure Mechanism, Joint Implementation',
				'International Emissions Trading, Clean Development Mechanism, Renewable Technology Implementation',
				'Emission Banking and Trading Mechanism, Peer Preview Mechanism, Renewable Technology Implementation'
			],
			0,
			'',
			null
		),
		new Question(
			'What regulation does the EPA (United States Environmental Protection Agency) regulate air pollution issues under?',
			[
				'The Public Health and Welfare Control',
				'The Clean Air Act',
				'Convention on The Atmosphere and Freshwater Protection',
				'The Clean Development and Climate Act'
			],
			1,
			'',
			null
		),
		new Question(
			'Which statement below is FALSE?',
			[
				'Kyoto binds emissions reduction targets(as well as penalties for noncompliance) for developed nations only, while the Paris Agreement requires that all countries — rich, poor, developed, and developing — do their part and slash greenhouse gas emissions.',
				'The Kyoto Protocol has three mechanisms, while the Paris Agreement does not have any mechanism.',
				'Similar to the Kyoto Protocol, the Paris Agreement’s goal is to fight against climate change by reducing greenhouse gas emissions, but its goal is extended to monitor water pollution and deforestation issues.',
				'The Kyoto Protocol sets emission targets to each country, while the Paris Agreement lets each country set their own emission targets.'
			],
			2,
			'',
			[ 'https://www.nrdc.org/stories/paris-climate-agreement-everything-you-need-know#sec-important' ]
		),
		new Question(
			'Which statement below is TRUE about the Paris Agreement?',
			[
				'The Paris Agreement is the oldest international treaties on environmental issues',
				'The Paris Agreement will fully replace the Kyoto Protocol by 2020',
				'China and India are not members of the Paris Agreement',
				'Pressident Trump formally extended the United States membership for the next round of the Paris Agreement'
			],
			1,
			'',
			null
		),
		new Question(
			'What action below can help reduce air pollution?',
			[
				'Using electrical appliances that have the ENERGY STAR label',
				'Using public transportations when possible',
				'Eat less meat',
				'All answers above'
			],
			3,
			'',
			[ 'https://www.energystar.gov/about/origins_mission/energy_star_overview/about_energy_star_products' ]
		),
		new Question(
			'Which energy source is clean (carbon free)?',
			[ 'Nuclear power ', 'Biomass', 'Geothermal energy', 'All answers above' ],
			3,
			'',
			[ 'https://www.energy.gov/science-innovation/clean-energy' ]
		),
		new Question(
			'What is the largest source of clean energy in the United States?',
			[ 'Solar ', 'Water', 'Nuclear', 'Natural gas' ],
			2,
			'Nuclear power provides 55% of America’s clean energy. Natural gas is the largest source of power in the U.S., but it is not a clean energy.',
			[ 'https://www.energy.gov/ne/articles/5-fast-facts-about-nuclear-energy' ]
		),
		new Question(
			'Flourinated gases or F-gases, including HFCs, PFCs, NF3, SF6, etc. are very potent greenhouse gases. What statement is TRUE about F-gases?',
			[
				'Fluorinated gases have no natural sources and only come from human-related activities',
				'The maximum lifetime of flourinated gases in the atmosphere can be up to 1000 years',
				'Fluorinated gases are the second most potent type of greenhouse gases, after nitrous oxide',
				'The Montreal Protocol has reduced flourinated gases emissions in the United States to less than 10% compared to flourinated gases emissions in the 1970s'
			],
			0,
			'Perfluorocarbons (PFCs) can last from 2,600–50,000 years. Fluorinated gases are the most potent greenhouse gases, most of them are more than 10 thousand times more potent than carbon dioxide. Finally, fluorinated gas emissions in the United States have increased by about 83.4 percent between 1990 and 2018.',
			[ 'https://www.epa.gov/ghgemissions/overview-greenhouse-gases#CO2-references' ]
		),
		new Question(
			'Who is responsible for reducing air pollution?',
			[
				'Gorvernment agencies, such as the EPA',
				'Companies and factories that emit air pollutants',
				'International organizations, such as WHO',
				'Every one'
			],
			3,
			'',
			[]
		)
	];
}
