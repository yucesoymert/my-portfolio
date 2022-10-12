import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form";
// icons
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

function ContactMe({}: Props) {

    const { register, handleSubmit  } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:mert.yucesoy1@gmail?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen flex relative justify-center w-full items-center text-center '>
        <div className='absolute top-24 flex flex-col w-full items-center justify-between text-center md:text-left md:flex-col max-w-7xl mx-auto gap-4'>
            <h3 className='flex justify-center text-center w-full uppercase tracking-[14px] text-gray-100 text-2xl'>
                Contact Me
            </h3>

            <div className='w-full flex flex-col pt-5 space-y-7 mx-auto'>
                <h4 className='bg-white/5 mx-14 md:mx-auto md:px-6 p-2 text-2xl rounded-lg font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span>
                        Let's Talk.
                    </span>
                </h4>
                
                <div className='flex flex-col md:flex-row justify-center md:pt-5 items-center max-w-5xl mx-auto gap-4 md:gap-5'>
                    <div className='space-y-7 w-full'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-red-500 h-6 w-6 animate-pulse'/>
                            <p className='text-xl'>+90 538 333 36 52</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-red-500 h-6 w-6 animate-pulse'/>
                            <p className='text-xl'>mert.yucesoy1@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-red-500 h-6 w-6 animate-pulse'/>
                            <p className='text-xl'>Üsküdar/İstanbul</p>
                        </div>
                    </div>

                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col justify-center items-center space-y-2 mx-auto w-full px-7'>
                        <input {...register('name')} placeholder="Name" className="contactInput h-[60px] w-[250px] md:w-[350px]" type="text"></input>
                        <input {...register('email')} placeholder="Email" className="contactInput h-[60px] w-[250px] md:w-[350px]" type="email"></input>
                        <input {...register('subject')} placeholder="Subject" className="contactInput h-[60px] w-[250px] md:w-[350px]" type="text"></input>
                        <textarea {...register('message')} placeholder="Message" className="contactInput h-[100px] w-[250px] md:w-[350px]" />
                        <button 
                        type='submit'
                        className='flex justify-center text-center items-center bg-red-500 py-5 px-10 rounded-md h-[60px] md:h-[50px] text-white font-bold text-lg'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe