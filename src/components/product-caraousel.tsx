import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface ImageCarouselProps {
	images: string[]
	autoPlayInitially: boolean
	height: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoPlayInitially, height }) => {
	const [autoPlay, setAutoPlay] = useState(autoPlayInitially)

	const handleMouseEnter = () => {
		if (!autoPlayInitially) {
			setAutoPlay(true)
		}
	}

	const handleMouseLeave = () => {
		if (!autoPlayInitially) {
			setAutoPlay(false)
		}
	}

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Carousel
				autoPlay={autoPlay}
				infiniteLoop
				showThumbs={false}
				showIndicators={false}
				showStatus={false}
				stopOnHover
				interval={2000}
				transitionTime={500}
				dynamicHeight={true}
			>
				{images.map((image, index) => (
					<div key={index}>
						<img
							style={{ height: height, objectFit: 'cover', width: '100%' }}
							src={image}
							alt={`Product Image ${index + 1}`}
							className="rounded-t-lg"
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default ImageCarousel
