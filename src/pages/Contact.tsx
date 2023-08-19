import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface JoinFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const initialValues: JoinFormValues = {
  name: '',
  email: '',
  phoneNumber: '',
  message: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required')
});

export default function JoinUs() {
  const handleSubmit = (values: JoinFormValues, actions: FormikHelpers<JoinFormValues>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 400);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Join Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Phone Number"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your Message"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Join Now
              </button>
            </div>
            <div className="col-span-2 text-center mt-4">
              <p className="text-gray-700">
                For inquiries, contact:<br />
                Email: <span className="text-blue-500">sportfitness@gmail.com</span><br />
                Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
