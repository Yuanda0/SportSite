import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type ProductType = {
  id: number;
  image: string;
  product: string;
  price: number;
};

const validationSchema = Yup.object({
  fullName: Yup.string().required('Please enter your full name.'),
  address: Yup.string().required('Please enter your delivery address.'),
  creditCardNumber: Yup.string()
    .required('Please enter your credit card number.'),
  cvv: Yup.string().required('Please enter your CVV number.'),
});

const BuyPage = () => {

  const [product, setProduct] = useState<ProductType | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/store/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    fullName: '',
    address: '',
    creditCardNumber: '',
    cvv: '',
  };

  const handleSubmit = () => {
    window.alert('Your order has been received.');
  };
  const formatCreditCardNumber = (creditCardNumber: string) => {
    const cleanedNumber = creditCardNumber.replace(/[^\d]/g, ''); 
    const chunkedNumber = cleanedNumber.match(/.{1,4}/g); 
    if (chunkedNumber) {
      return chunkedNumber.join('-'); 
    }
    return cleanedNumber;
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-1/2 xl:w-1/3'>
        <h1 className='text-xl font-semibold mb-4'>{product.product}</h1>
        <img src={product.image} alt={product.product} className='mb-4 rounded-lg' />
        <p className='mb-4'>Price: ${product.price}</p>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({values, setFieldValue}) => (
          <Form className='flex flex-col'>
            <div className='mb-2'>
              <label htmlFor='fullName' className='font-semibold mb-1'>
                Full Name:
              </label>
              <Field
                type='text'
                id='fullName'
                name='fullName'
                className='border rounded px-3 py-2'
                placeholder='John Doe'
              />
              <ErrorMessage name='fullName' component='div' className='text-red-600' />
            </div>

            <div className='mb-2'>
              <label htmlFor='address' className='font-semibold mb-1'>
                Delivery Address:
              </label>
              <Field
                as='textarea'
                id='address'
                name='address'
                className='border rounded px-3 py-2'
                placeholder='123 Main St, City, Country'
              />
              <ErrorMessage name='address' component='div' className='text-red-600' />
            </div>

            <div className='mb-2'>
              <label htmlFor='creditCardNumber' className='font-semibold mb-1'>
                Credit Card Number:
              </label>
              <Field

                id='creditCardNumber'
                name='creditCardNumber'
                className='border rounded px-3 py-2'
                placeholder='XXXX-XXXX-XXXX-XXXX'
                value={formatCreditCardNumber(values.creditCardNumber)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('creditCardNumber', e.target.value);
                }}
              />
              <ErrorMessage name='creditCardNumber' component='div' className='text-red-600' />
            </div>

            <div className='mb-2'>
              <label htmlFor='cvv' className='font-semibold mb-1'>
                CVV Number:
              </label>
              <Field
                type='text'
                id='cvv'
                name='cvv'
                className='border rounded px-3 py-2'
                placeholder='123'
              />
              <ErrorMessage name='cvv' component='div' className='text-red-600' />
            </div>

            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-4'
            >
              Place Order
            </button>
          </Form>

          )}
          
        </Formik>
      </div>
    </div>
  );
};

export default BuyPage;