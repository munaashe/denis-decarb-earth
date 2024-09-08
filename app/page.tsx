'use client'

import * as animationData from '@/public/assets/lottie-files/environment.lottie.json'
import Lottie from 'react-lottie';
import { useTranslation } from "react-i18next";
import Text from "@/components/text";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const { t } = useTranslation()
  const router = useRouter()
  const onSignUpClick = () => {
    router.push('/sign-up')
  }
  return (
    <main className="flex flex-col items-center justify-between">
      <section className='min-h-[80vh] pt-16 relative items-center flex gap-4 md:gap-8 justify-center flex-col-reverse lg:flex-row max-h-860-px md:mx-12'>
        <div className="container items-center flex flex-wrap">
          <div className="w-full px-4">
            <div className="pt-32 sm:pt-0">
              <Text color="dark-green" weight="bold" size="lg" variant="title1">
                Decarbonising the planet
              </Text>
              <Text additional='mt-8' variant='body1'>
                We leverage innovative technologies and sustainable practices to provide practical solutions
                to reduce carbon footprints and promote environmental stewardship.
                Explore our dynamic features designed to facilitate your journey towards a greener future.
              </Text>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">

              </p>
              <div className="mt-12 flex gap-4">

                <Button variant='primary'>
                  Login
                </Button>
                <Button colorScheme="blue" onClick={onSignUpClick}>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 lg:mx-24 flex items-center justify-center">
          <Lottie options={defaultOptions} />
        </div>
      </section>
    </main>
  );
}
