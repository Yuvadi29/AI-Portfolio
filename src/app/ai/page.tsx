import BlurFadeText from '@/components/magicui/blur-fade-text'
import React from 'react'

const BLUR_FADE_DELAY = 0.04;

const page = () => {
    return (
        <div>
            <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={"Page is Under Development"}
            />
        </div>
    )
}

export default page