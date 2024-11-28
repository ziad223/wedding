import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTimes } from 'react-icons/fa';
import img from '../images/reservation.png';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = ({ handleClose }) => {
  const validationSchema = Yup.object({
    first_name: Yup.string().required('الاسم الأول مطلوب'),
    second_name: Yup.string().required('الاسم الثاني مطلوب'),
    mobile: Yup.string()
      .matches(/^\d{11}$/, 'رقم الهاتف غير صالح')
      .required('رقم الهاتف مطلوب'),
    address: Yup.string().required('العنوان مطلوب'),
    visit_date: Yup.date()
      .required('موعد الزيارة مطلوب')
      .nullable()
      .typeError('يجب أن يكون تاريخًا صالحًا'),
    note: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      second_name: '',
      mobile: '',
      visit_date: '',
      address: '',
      note: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post('https://highleveltecknology.com/bahaa/public/api/bookes', values)
        .then((response) => {
          toast.success('تم حجز موعدك بنجاح!', {
            position: 'top-center',
            autoClose: 3000,
          });
        })
        .catch((error) => {
          toast.error('حصلت مشكلة أثناء حجز الموعد', {
            position: 'top-center',
            autoClose: 3000,
          });
        });
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <ToastContainer />
      <div className="relative lg:w-[70%] w-full mx-auto lg:mt-[-20px]">
        <button
          onClick={handleClose}
          className="text-2xl bg-red-500 absolute top-[-10px] right-[8px] lg:right-[-20px] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 focus:outline-none transition duration-300"
        >
          <FaTimes />
        </button>
        <div className="bg-[#2f2c2c] lg:w-full w-[90%] mx-auto border-gray-400 p-3.5 lg:p-5 flex flex-col lg:flex-row justify-center gap-10 items-center rounded-lg">
          {/* النصوص والنموذج */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-white lg:text-3xl text-xl font-bold text-center lg:text-right">
              احجزي موعدك الآن
            </h2>
            <p className="text-gray-300 my-4 text-sm text-center lg:text-right">
              نحن هنا لمساعدتك في العثور على فستان الأحلام! احجزي موعد لزيارتك في
              الأتيليه لتجربة أفضل الفساتين والحصول على استشارة مخصصة تناسب ذوقك
              وأسلوبك.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col lg:flex-row gap-3 mt-3">
                {/* حقل الاسم الأول */}
                <div className="w-full">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="الأسم الأول"
                    className="bg-[#393737] rounded-sm p-3 text-white outline-none w-full"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.first_name}
                    </div>
                  )}
                </div>

                {/* حقل الاسم الثاني */}
                <div className="w-full">
                  <input
                    type="text"
                    name="second_name"
                    placeholder="الأسم الثاني"
                    className="bg-[#393737] rounded-sm p-3 text-white outline-none w-full"
                    value={formik.values.second_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.second_name && formik.errors.second_name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.second_name}
                    </div>
                  )}
                </div>
              </div>


              <div className="w-full">
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان"
                  className="w-full mt-3 rounded-sm text-white bg-[#393737] p-3 outline-none"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.address}
                  </div>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="mobile"
                  placeholder="رقم الهاتف"
                  className="w-full mt-3 rounded-sm text-white bg-[#393737] p-3 outline-none"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mobile}
                  </div>
                )}
              </div>

              <div className="w-full">
                <input
                  type="date"
                  name="visit_date"
                  placeholder="موعد الزيارة"
                  className="w-full mt-3 rounded-sm text-white bg-[#393737] p-3 outline-none"
                  value={formik.values.visit_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.visit_date && formik.errors.visit_date && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.visit_date}
                  </div>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="note"
                  placeholder="ملاحظة"
                  className="w-full mt-3 rounded-sm text-white bg-[#393737] p-3 outline-none"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <button
                type="submit"
                className="bg-[#907457] px-8 text-lg py-2 mt-5 text-white rounded-sm cursor-pointer hover:bg-[#795b3b] transition-all block w-full duration-300"
              >
                ارسال
              </button>
            </form>
          </div>

          {/* الصورة */}
          <div className="lg:w-1/2 hidden lg:block w-full mt-5 lg:mt-0">
            <img
              src={img}
              alt="reservation"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
