import React from 'react';
import { FaFacebookF, FaInstagram, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';  // استيراد sweetalert2

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
                <span> 01000034492</span>
                <HiOutlinePhone className='text-xl' />
              </div>
              <div className='flex gap-3 items-center justify-start lg:justify-end'>
                <span> Bahaa@gmail.com</span>
                <FaRegEnvelope className='text-xl' />
              </div>
              <div className='flex justify-end items-center gap-6 mt-5'>
                <FaInstagram className='text-xl' />
                <FaFacebookF className='text-xl' />
                <FaTwitter className='text-xl' />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9422267281653!2d31.365895574366095!3d31.050324476744596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d004fbd7b27%3A0x8e2b1106c47a8d8b!2z2KfZhNin2YTYqtiqINmE2YTYr9iz2YrZhtinINmG2YTZiNin2YYg2KfZhNmI2KjYp9mE2Kkg2YHZhNmE2YjYrA!5e0!3m2!1sar!2seg!4v1690728392707!5m2!1sar!2seg"
                className="h-max w-full mt-6 lg:h-[155px] lg:w-[366px]"
                title="Location"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
