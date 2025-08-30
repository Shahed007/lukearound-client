import React from 'react';
import EmployerBrandingSection from '../home/employee/EmployeBrandingSection';
import LiveOpportunities from '../liveOpurtunuites/liveOpertunites';
import SuccessStories from '../home/successStories/successStories';

const CandidateSection = () => {
	return (
		<div>
			<EmployerBrandingSection/>
			<LiveOpportunities/>
			<SuccessStories/>
		</div>
	);
}

export default CandidateSection;
