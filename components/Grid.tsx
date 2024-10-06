import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {
            gridItems.map(({id, title, description, titleClassName, imgClassName, spareImg, img, className}) => (
                <BentoGridItem id={id} key={id}
                    title={title} description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                >

                </BentoGridItem>
            ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
