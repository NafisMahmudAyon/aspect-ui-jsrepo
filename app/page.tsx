// import Image from "next/image";
// 'use client'
import Dark from '@/components/Dark';
import AccordionDemo from '@/components/test/Accordion'
import AvatarDemo from '@/components/test/Avatar';
import BreadcrumbDemo from '@/components/test/Breadcrumb';
import ButtonDemo from '@/components/test/Button'
import CardDemo from '@/components/test/Card';
import CircularProgressDemo from '@/components/test/CircularProgress';
import ImageDemo from '@/components/test/Image';
import ModalDemo from '@/components/test/Modal';
import ProgressBarDemo from '@/components/test/ProgressBar';
import SliderDemo from '@/components/test/Slider';
import TabsDemo from '@/components/test/Tabs';

export default function Home() {
  
  
  return (
    <main className='mx-auto min-h-screen py-24'>
      <Dark />
      <AccordionDemo />
      {/* <ButtonDemo /> */}
      {/* <CardDemo /> */}
      {/* <ImageDemo /> */}
      {/* <AvatarDemo />
      <ProgressBarDemo />
      <CircularProgressDemo />
      <SliderDemo /> */}
      {/* <BreadcrumbDemo /> */}
      {/* <ModalDemo /> */}
      {/* <TabsDemo /> */}
    </main>
  )
}
