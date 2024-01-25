'use client';

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/util/email-util';
import './page.css';
import { Link } from '@nextui-org/react';

export type FormData = {
  honeypot: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    if (submitted) return;
    setSubmitting(true);
    const response = await sendEmail(data);
    if (!response.ok) {
      setError(true);
    }
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <section className="dark:bg-gray-900 lg:p-12">
        <div className="w-full lg:w-1/2 bg-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-lg">
          {submitting && (
            <>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Please wait...</h2>
              <p className="mt-4 lg:mt-8 mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Your message is being submitted.</p>
            </>
          )}
          {submitted && error && (
            <>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Error sending message</h2>
              <p className="mt-4 lg:mt-8 mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Your message was unable to be sent.</p>
            </>
          )}
          {submitted && !error && (
            <>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Message Received</h2>
              <p className="mt-4 lg:mt-8 mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Thank you for your message I will get back to you as soon as I can.</p>
            </>
          )}
          {!submitting && !submitted && (
            <>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Leave me a message</h2>
              <p className="m-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please use the form below if you would like to contact me regarding a role or project, I will get back to you as soon as I can.</p>
              <form action="#" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="name-input">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">This field should be blank</label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Your name"
                    {...register('honeypot', { required: false })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="your@email.com"
                    {...register('email', { required: true })}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Subject"
                    {...register('subject', { required: true })}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                    {...register('message', { required: true })}
                  />
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
            </>
          )}
          <p className="m-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Back to <Link href="/">My Résumé</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
