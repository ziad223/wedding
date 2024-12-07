import React from 'react';
import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';  // استيراد sweetalert2
import { FaThreads } from 'react-icons/fa6';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('الاسم مطلوب'),
      email: Yup.string().email('البريد الألكتروني غير صحيح').required('البريد الألكتروني مطلوب'),
      message: Yup.string().required('الرسالة مطلوبة'),
    }),
    onSubmit: async (values) => {
      try {
        // إرسال البيانات إلى API
        const response = await axios.post('https://highleveltecknology.com/bahaa/public/api/contacts', values);
        console.log(response);
       
        // التحقق من حالة الاستجابة
        if (response.status === 201) {
          console.log('asa');

          formik.resetForm();
           
          Swal.fire({
            icon: 'success',
            title: 'تم إرسال الرسالة بنجاح!',
            timer : 2000,
            showConfirmButton : false

          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'حدث خطأ أثناء إرسال الرسالة',
          text: 'حاول مرة أخرى لاحقاً.',
          confirmButtonText: 'حسناً',
        });
      }
    },
  });

  return (
    <div>
      <div className='bg-[#f5f2f0] h-80'></div>
      <div className='lg:w-[950px] lg:px-12 lg:h-[663px] w-[90%] mx-auto shadow p-7 relative -top-32 bg-white rounded-lg'>
        <h2 className='border-b-2 text-xl lg:text-[24px] font-normal lg:w-[159px] mx-auto text-center w-max py-4'>
          تواصلي معانا
        </h2>
        <div className="flex flex-col lg:flex-row justify-between lg:gap-16 gap-10 mt-12">
          {/* القسم الأول: نموذج التواصل */}
          <div className='w-full lg:w-1/2 h-full'>
            <h2 className='text-xl mb-6'>تواصل معنا الآن</h2>
            <form onSubmit={formik.handleSubmit} className='space-y-5'>
              <input
                type="text"
                name="name"
                placeholder='الأسم'
                className='outline-none block border p-2 w-full'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}

              <input
                type="email"
                name="email"
                placeholder='البريد الألكتروني'
                className='outline-none block border p-2 w-full'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}

              <textarea
                rows={7}
                name="message"
                placeholder='الرسالة'
                className='outline-none block border p-2 w-full'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && <div className="text-red-500">{formik.errors.message}</div>}

              <button type="submit" className='bg-[#907457] text-white w-full py-3 mt-6'>
                أرسال
              </button>
            </form>
          </div>

          {/* القسم الثاني: الموقع */}
          <div className='w-full lg:w-1/2 h-full'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-3 items-center justify-start lg:justify-end'>
                <span> Egypt - Mansoura - Al Mashaya Al Sofli Street</span>
                <IoLocationOutline className='text-xl' />
              </div>
              <div className='flex gap-3 items-center justify-start lg:justify-end'>
                <span> 01000249942 - 01507000754</span>
                <HiOutlinePhone className='text-xl' />
              </div>
              <div className='flex gap-3 items-center justify-start lg:justify-end'>
                <span> Bahaa@gmail.com</span>
                <FaRegEnvelope className='text-xl' />
              </div>
              <div className='flex justify-end items-center gap-6 mt-5'>
                <a href="https://www.instagram.com/bahaaeldin.couture/">
                  <FaInstagram className='text-xl' />
                </a>
                <a href="https://www.facebook.com/bahaaeldin.couture">
                  <FaFacebookF className='text-xl' />
                </a>
                <a href="https://www.youtube.com/@BahaaEldin-couture">
                  <FaYoutube className='text-xl' />
                </a>
                <a href="https://www.tiktok.com/@bahaaeldin_couture">
                  <FaTiktok className='text-xl' />
                </a>
                <a href="https://www.threads.net/@bahaaeldin.couture">
                  <FaThreads className='text-xl' />
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.835603593735!2d31.235711315321315!3d30.044419381884795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTQnMDQuNyJF!5e0!3m2!1sen!2seg!4v1692535187608!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
