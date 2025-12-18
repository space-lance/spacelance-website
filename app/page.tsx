'use client'
import { hover, motion } from 'motion/react'
import Image from 'next/image';
import { useRef, useState } from 'react';
import Marquee from "react-fast-marquee";

export default function Home() {
  const [hovereCard, setHover] = useState('ui-ux')
  const [hoverProject, setProject] = useState('')
  const videoRef: any = useRef(null);

  return (
    <div className='px-16 scroll-smooth scroll-p-4'>
      <section className='h-screen flex flex-col justify-center items-center relative mb-24'>
        <Image className='absolute w-screen h-screen -z-10 bottom-14' height={500} width={500} src={'/hero-background.jpg'} alt='hero-background' />
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute top-[18%] left-[25%]" />
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 2.3, ease: 'easeInOut' }} className="z-0 w-10 h-10 rounded-xl bg-linear-to-b from-neutral-700 to-neutral-400 absolute left-[30%] top-[72%]" />
        <motion.div animate={{ y: [-2, 6, -2] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 0.2 }} className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute left-[85%] top-[20%]" />
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut', delay: 0.4 }} className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-700 to-neutral-400 absolute left-[76%] top-[65%]" />
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut', delay: 0.6 }} className="w-10 h-10 rounded-xl bg-linear-to-b from-neutral-800 to-neutral-500 absolute top-[40%] left-[10%]" />
        <div className='mx-auto text-center gap-6 flex flex-col z-10'>
          <h1 className='text-6xl text-transparent bg-[linear-gradient(to_right,#525252_0%,#f5f5f5_40%,#f5f5f5_60%,#525252_100%)] bg-neutra bg-clip-text'>Precision-crafted digital products<br />for real-world performance</h1>
          <p className='text-neutral-400'>A full-spectrum digital studio delivering design, engineering, motion, and content <br /> through a single, controlled production pipeline focused on quality, consistency, and long-term performance.</p>
          <div>
            <button className='px-4 py-3 bg-neutral-300 text-neutral-800 rounded-4xl mx-4 hover:bg-neutral-400'>Explore Services</button>
            <button className='px-4 py-3 border border-neutral-400 rounded-4xl mx-4 hover:bg-neutral-800'>Watch Demo</button>
          </div>
        </div>
      </section>
      <section className='h-[92vh] flex flex-col px-20 my-24'>
        <h2 className='text-[2.5rem]/12 font-semibold'>Providing Creative Services<br />Tailoured for your Business</h2>
        <p className='text-neutral-400 w-6/12 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati eos architecto rerum tempore tempora aliquam amet quaerat asperiores eveniet.</p>
        <div className='flex justify-between items-center mt-16'>

          <motion.div onMouseEnter={() => setHover('web-dev')} animate={hovereCard == 'web-dev' ? { width: '45%', padding: '1.5rem 1.5rem 0 1.5rem', backgroundColor: '#262626' } : { width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bebebe' }} transition={{ duration: 0.6 }} className='w-[8%] flex flex-col rounded-2xl relative h-90 pt-6 overflow-hidden'>
            <motion.p animate={hovereCard == 'web-dev' ? { position: 'static', display: 'flex', backgroundColor: '#f5f5f5 ', color: '#000000', fontSize: '28px' } : { position: 'absolute', top: '1.5rem', fontSize: '28px' }} className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'>01</motion.p>
            <motion.p animate={hovereCard == 'web-dev' ? { fontSize: '34px', fontWeight: 700, width: 'fit-content', marginTop: '0.75rem', color: '#ffffff', rotate: 0 } : { rotate: '90deg', color: '#000000', marginTop: '2.5rem', width: '15rem', fontSize: '28px', fontWeight: 500 }} transition={{ duration: 0.5 }} className='origin-center mr-1'>Web Development</motion.p>
            <motion.span animate={hovereCard == 'web-dev' ? { width: '100%' } : { width: '0', overflow: 'hidden', display: 'none' }} transition={{ duration: 0.1 }}>
              <p className='text-base text-neutral-400 text-pretty mt-6 pr-12 min-w-104'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt delectus aut, repellat nobis numquam iure aspernatur expedita porro amet commodi placeat similique beatae magni saepe minima, asperiores labore minus doloremque eum quia</p>
              <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer'>Discover More</button>
            </motion.span>
          </motion.div>

          <motion.div onMouseEnter={() => setHover('ui-ux')} animate={hovereCard == 'ui-ux' ? { width: '45%', padding: '1.5rem 1.5rem 0 1.5rem', backgroundColor: '#262626' } : { width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bebebe' }} transition={{ duration: 0.6 }} className='w-[8%] flex flex-col rounded-2xl relative h-90 pt-6 overflow-hidden'>
            <motion.p animate={hovereCard == 'ui-ux' ? { position: 'static', display: 'flex', backgroundColor: '#f5f5f5 ', color: '#000000', fontSize: '28px' } : { position: 'absolute', top: '1.5rem', fontSize: '28px' }} className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'>02</motion.p>
            <motion.p animate={hovereCard == 'ui-ux' ? { fontSize: '34px', fontWeight: 700, width: 'fit-content', marginTop: '0.75rem', color: '#ffffff', rotate: 0 } : { rotate: '90deg', color: '#000000', marginTop: '2.5rem', width: '15rem', fontSize: '28px', fontWeight: 500 }} transition={{ duration: 0.5 }} className='origin-center mr-1'>UI & UX Design</motion.p>
            <motion.span animate={hovereCard == 'ui-ux' ? { width: '100%' } : { width: '0', overflow: 'hidden', display: 'none' }} transition={{ duration: 0.1 }}>
              <p className='text-base text-neutral-400 text-pretty mt-6 pr-12 min-w-104'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt delectus aut, repellat nobis numquam iure aspernatur expedita porro amet commodi placeat similique beatae magni saepe minima, asperiores labore minus doloremque eum quia</p>
              <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer'>Discover More</button>
            </motion.span>
          </motion.div>

          <motion.div onMouseEnter={() => setHover('content-creation')} animate={hovereCard == 'content-creation' ? { width: '45%', padding: '1.5rem 1.5rem 0 1.5rem', backgroundColor: '#262626' } : { width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bebebe' }} transition={{ duration: 0.6 }} className='w-[8%] flex flex-col rounded-2xl relative h-90 pt-6 overflow-hidden'>
            <motion.p animate={hovereCard == 'content-creation' ? { position: 'static', display: 'flex', backgroundColor: '#f5f5f5 ', color: '#000000', fontSize: '28px' } : { position: 'absolute', top: '1.5rem', fontSize: '28px' }} className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'>03</motion.p>
            <motion.p animate={hovereCard == 'content-creation' ? { fontSize: '34px', fontWeight: 700, width: 'fit-content', marginTop: '0.75rem', color: '#ffffff', rotate: 0 } : { rotate: '90deg', color: '#000000', marginTop: '2.5rem', width: '15rem', fontSize: '28px', fontWeight: 500 }} transition={{ duration: 0.5 }} className='origin-center mr-1'>Software Systems</motion.p>
            <motion.span animate={hovereCard == 'content-creation' ? { width: '100%' } : { width: '0', overflow: 'hidden', display: 'none' }} transition={{ duration: 0.1 }}>
              <p className='text-base text-neutral-400 text-pretty mt-6 pr-12 min-w-104'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt delectus aut, repellat nobis numquam iure aspernatur expedita porro amet commodi placeat similique beatae magni saepe minima, asperiores labore minus doloremque eum quia</p>
              <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer'>Discover More</button>
            </motion.span>
          </motion.div>

          <motion.div onMouseEnter={() => setHover('software')} animate={hovereCard == 'software' ? { width: '45%', padding: '1.5rem 1.5rem 0 1.5rem', backgroundColor: '#262626' } : { width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bebebe' }} transition={{ duration: 0.6 }} className='w-[8%] flex flex-col rounded-2xl relative h-90 pt-6 overflow-hidden'>
            <motion.p animate={hovereCard == 'software' ? { position: 'static', display: 'flex', backgroundColor: '#f5f5f5 ', color: '#000000', fontSize: '28px' } : { position: 'absolute', top: '1.5rem', fontSize: '28px' }} className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'>04</motion.p>
            <motion.p animate={hovereCard == 'software' ? { fontSize: '34px', fontWeight: 700, width: 'fit-content', marginTop: '0.75rem', color: '#ffffff', rotate: 0 } : { rotate: '90deg', color: '#000000', marginTop: '2.5rem', width: '15rem', fontSize: '28px', fontWeight: 500 }} transition={{ duration: 0.5 }} className='origin-center mr-1'>Content Creation</motion.p>
            <motion.span animate={hovereCard == 'software' ? { width: '100%' } : { width: '0', overflow: 'hidden', display: 'none' }} transition={{ duration: 0.1 }}>
              <p className='text-base text-neutral-400 text-pretty mt-6 pr-12 min-w-104'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt delectus aut, repellat nobis numquam iure aspernatur expedita porro amet commodi placeat similique beatae magni saepe minima, asperiores labore minus doloremque eum quia</p>
              <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer'>Discover More</button>
            </motion.span>
          </motion.div>

          <motion.div onMouseEnter={() => setHover('vfx')} animate={hovereCard == 'vfx' ? { width: '45%', padding: '1.5rem 1.5rem 0 1.5rem', backgroundColor: '#262626' } : { width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bebebe' }} transition={{ duration: 0.6 }} className='w-[8%] flex flex-col rounded-2xl relative h-90 pt-6 overflow-hidden'>
            <motion.p animate={hovereCard == 'vfx' ? { position: 'static', display: 'flex', backgroundColor: '#f5f5f5 ', color: '#000000', fontSize: '28px' } : { position: 'absolute', top: '1.5rem', fontSize: '28px' }} className='text-black flex justify-center items-center w-14 h-14 text-3xl rounded-full font-extrabold text-center'>05</motion.p>
            <motion.p animate={hovereCard == 'vfx' ? { fontSize: '34px', fontWeight: 700, width: 'fit-content', marginTop: '0.75rem', color: '#ffffff', rotate: 0 } : { rotate: '90deg', color: '#000000', marginTop: '2.5rem', width: '15rem', fontSize: '28px', fontWeight: 500 }} transition={{ duration: 0.5 }} className='origin-center mr-1'>Motion & VFX</motion.p>
            <motion.span animate={hovereCard == 'vfx' ? { width: '100%' } : { width: '0', overflow: 'hidden', display: 'none' }} transition={{ duration: 0.1 }}>
              <p className='text-base text-neutral-400 text-pretty mt-6 pr-12 min-w-104'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt delectus aut, repellat nobis numquam iure aspernatur expedita porro amet commodi placeat similique beatae magni saepe minima, asperiores labore minus doloremque eum quia</p>
              <button className='absolute bg-green-400 bottom-0 right-0 px-6 py-3 rounded-tl-2xl text-green-800 font-bold text-lg cursor-pointer'>Discover More</button>
            </motion.span>
          </motion.div>

        </div>
      </section>
      <section className='h-[90vh] px-20 flex flex-col my-24'>
        <h2 className='text-[2.5rem]/12 font-bold'>Our Projects</h2>
        <p className='text-neutral-400 w-6/12 mt-4'>From concept to launch, these projects reflect how we turn ideas into reliable, production-ready digital products.</p>
        <div className='mt-12 flex h-9/12 gap-1'>
          <div className='w-5/12 flex flex-col gap-1'>
            <div onMouseEnter={() => {
              setProject('web-dev')
              const v = videoRef.current;
              if (!v) return;
              v.currentTime = 0; // reset to start
              v.play();
            }} onMouseLeave={() => { setProject(''), videoRef.current?.pause() }} className='h-[60%] border border-neutral-400 rounded-3xl px-2 py-2 flex flex-col justify-between overflow-hidden relative pb-3 bg-[url("/project_thumb.png")] bg-center'>
              <motion.video loop muted ref={videoRef} animate={hoverProject == 'web-dev' ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5 }} className='left-0 absolute w-full top-0' src="/project-vid.mp4"></motion.video>
              <motion.div animate={hoverProject == 'web-dev' ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='h-12 w-12 border border-neutral-400 rounded-full'></motion.div>
              <motion.div animate={hoverProject == 'web-dev' ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='flex flex-col mx-4 w-10/12 gap-2'>
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos laudantium fugiat adipisci quo placeat quos suscipit modi incidunt.</p>
              </motion.div>
            </div>
            <div onMouseEnter={() => setProject('ui-ux')} onMouseLeave={() => setProject('')} className='h-[40%] border border-neutral-400 rounded-3xl px-2 py-2 flex flex-col justify-between overflow-hidden pb-3'>
              <motion.div animate={hoverProject == 'ui-ux' ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='h-12 w-12 border border-neutral-400 rounded-full'></motion.div>
              <motion.div animate={hoverProject == 'ui-ux' ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='flex flex-col mx-4 w-10/12 gap-2'>
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos laudantium fugiat adipisci quo placeat quos suscipit modi incidunt.</p>
              </motion.div>
            </div>
          </div>
          <div className='w-7/12 grid grid-cols-2 gap-1'>
            <div onMouseEnter={() => setProject('content')} onMouseLeave={() => setProject('')} className='border h-full border-neutral-400 rounded-3xl col-span-2 w-full px-2 py-2 flex flex-col justify-between overflow-hidden pb-3'>
              <motion.div animate={hoverProject == 'content' ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='h-12 w-12 border border-neutral-400 rounded-full'></motion.div>
              <motion.div animate={hoverProject == 'content' ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='flex flex-col mx-4 w-10/12 gap-2'>
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos laudantium fugiat adipisci quo placeat quos suscipit modi incidunt.</p>
              </motion.div>
            </div>
            <div onMouseEnter={() => setProject('software')} onMouseLeave={() => setProject('')} className='border border-neutral-400 rounded-3xl col-span-1 w-full px-2 py-2 flex flex-col justify-between overflow-hidden pb-3'>
              <motion.div animate={hoverProject == 'software' ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='h-12 w-12 border border-neutral-400 rounded-full'></motion.div>
              <motion.div animate={hoverProject == 'software' ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='flex flex-col mx-4 w-10/12 gap-2'>
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos laudantium fugiat adipisci quo placeat quos suscipit modi incidunt.</p>
              </motion.div>
            </div>
            <div onMouseEnter={() => setProject('vfx')} onMouseLeave={() => setProject('')} className='border border-neutral-400 rounded-3xl col-span-1 w-full px-2 py-2 flex  flex-col justify-between overflow-hidden pb-3'>
              <motion.div animate={hoverProject == 'vfx' ? { y: '-3rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='h-12 w-12 border border-neutral-400 rounded-full'></motion.div>
              <motion.div animate={hoverProject == 'vfx' ? { y: '4rem', opacity: 0 } : { y: 0, opacity: 100 }} transition={{ duration: 0.5 }} className='flex flex-col mx-4 w-10/12 gap-2'>
                <p className='font-semibold text-lg'>Project Name</p>
                <p className='text-sm text-pretty text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem eos laudantium fugiat adipisci quo placeat quos suscipit modi incidunt.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-[92vh] px-12 flex flex-col my-24'>
        <h2 className='text-[2.5rem]/12 font-bold text-center'>Built on Client Trust</h2>
        <p className='text-center text-neutral-400 w-6/12 mx-auto mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae quas quaerat, reprehenderit voluptatum unde eius dolores porro culpa dolorum, officia deleniti nobis cumque iste incidunt odio sequi iure optio?</p>
        <div className='mt-12 flex flex-col mask-[linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]'>
          <Marquee direction='right' className='py-6'>
            <div className='flex gap-6 mx-3'>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
            </div>
          </Marquee>
          <Marquee className='py-6'>
            <div className='flex gap-6 mx-3'>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
              <div className='bg-neutral-800 w-[28vw] px-4 rounded-2xl py-4'>
                <div className='h-12 w-12 border bg-neutral-400 rounded-full -mt-10'></div>
                <p className='text-neutral-300 mt-2 text-pretty'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quo illo eius aliquid aliquam ea minima qui, repudiandae reprehenderit obcaecati!</p>
                <div className='w-full h-px bg-neutral-400 my-4' />
                <div className='flex justify-between'>
                  <p className='font-semibold'>Ankit Mishra</p>
                  <span className='flex gap-1'>
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                    <div className='h-4 w-4 bg-neutral-400 rounded-full' />
                  </span>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
}
