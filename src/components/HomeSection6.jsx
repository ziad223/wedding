import React from 'react';
import homeBanner from '../images/home/home-banner.png';
import { Link } from 'react-router-dom';
import { style } from '@mui/system';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Reservation from '../components/Reservation';
import Modal from '@mui/material/Modal';

const HomeSection6 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div
            className="flex items-center justify-center py-20 px-4"
            style={{
                width: '100%',  // استخدام 100% لتغطية كامل العرض
                height: '725px',  // تحديد طول الـ div
                backgroundImage: `url(${homeBanner})`,
                backgroundSize: 'cover',  // لضمان ملء الخلفية بالكامل
                backgroundPosition: 'center',  // لضبط الصورة في منتصف الـ div
                backgroundRepeat: 'no-repeat',  // عدم تكرار الخلفية
            }}
        >
            <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg bg-opacity-60max-w-[95%] sm:max-w-[800px]">
                <p className="text-xl font-bold mb-6 text-white">
                    احجزي موعدك الآن واحصلي على استشارة مجانية مع بهاء الدين لتصميم فستان زفاف أحلامك. العرض لفترة محدودة!
                </p>
                <button
                    onClick={handleOpen}
                    className="bg-[#907457] py-3 px-20 text-xl text-white rounded-lg mt-4 hover:bg-[#7c6246] transition-all duration-300"
                >
                    أحجز الأن
                </button>
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Reservation handleClose={handleClose} />
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default HomeSection6;
