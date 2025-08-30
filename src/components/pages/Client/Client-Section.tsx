import React from 'react';
import WhatWeAre from '../home/whatWeAre/WhatWeAre';
import TechnologyIntelligence from '../home/technologyIntelignce/TechnologyInteligence';
import HowItWorks from '../home/howItWork/HowItWork';
import PricingSection from '../home/pricing/Pricing';
import TestimonialsCarousel from '../home/testimonial/Testimonial';

const ClientSection = () => {
	return (
		<div>
			<WhatWeAre/>
			<TechnologyIntelligence/>
			<HowItWorks/>
			<PricingSection/>
			<TestimonialsCarousel/>
		</div>
	);
}

export default ClientSection;
