import Hero from '@/components/Hero'
import HomeProperties from '@/components/HomeProperties'
import InfoBoxes from '@/components/InfoBoxes'
import React from 'react'

const HomePage = async () => {
	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</>
	)
}

export default HomePage
