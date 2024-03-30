"use client"

import Image from '@/node_modules/next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Graph Central
                </h1>
                <p className='hero__subtitle'>
                    Your go-to source for in-depth insights and metrics on Grants and Governance Improvement Proposals in The Graph's thriving ecosystem.
                </p>

                <CustomButton
                    title="Explore Projects"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <h1 className='mt-12 hero__title-overlay'>
                        Grants <br /> Governance Improvement <br /> Proposals [GIPs] <br /> ...and Others
                    </h1>
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero