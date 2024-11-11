import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ServicesAccording = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active accordion index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Array of questions and answers
  const data = [
    {
      question: 'كم من الوقت يستغرق تصميم فستان حسب الطلب ؟',
      answer: 'عادةً ما يستغرق تصميم فستان حسب الطلب من 6 إلى 12 أسبوعًا، وذلك يعتمد على تفاصيل التصميم وتوافر الخامات. يُفضل حجز موعد مبكر لضمان استلام الفستان في الوقت المناسب.'
    },
    {
      question: 'هل يمكن إجراء تعديلات طارئة على الفستان ؟',
      answer: 'بالطبع، يمكن إجراء تعديلات طارئة على الفستان إذا لزم الأمر. مع ذلك، قد تختلف مدة التنفيذ والتكلفة اعتمادًا على نوع التعديل ومدى تعقيده. يُفضل التواصل في أقرب وقت ممكن لضمان توفير الوقت الكافي لإجراء التعديلات المطلوبة.'
    },
    {
      question: 'هل يمكنني تعديل التصميم بعد الانتهاء منه؟',
      answer: `عملية تصميم فستان الزفاف تتضمن عدة خطوات لضمان تحقيق التصميم المطلوب بأعلى جودة ممكنة. إليك خطوات العملية:
  
  1. **الاستشارة الأولى**: تبدأ العملية بجلسة استشارية مع المصممة لمناقشة رؤيتك وأفكارك لفستان الزفاف، حيث يمكنك تحديد النمط، الأقمشة، والألوان التي تفضلينها.
  
  2. **التصميم الأولي**: بعد المناقشة، تقوم المصممة بإعداد تصميم أولي للرسم بناءً على أفكارك وملاحظاتك، وستحصلين على تصور مبدئي لشكل الفستان.
  
  3. **اختيار الأقمشة والخامات**: يتم اختيار الأقمشة والخامات بعناية لضمان ملاءمتها للتصميم المطلوب، وقد تكون لديك فرصة لمعاينة القماش والموافقة عليه.
  
  4. **القياسات والتفصيل**: يتم أخذ قياساتك بدقة لضمان التفصيل الملائم لشكل جسمك، ثم تبدأ عملية قص الأقمشة وتجهيز الفستان بناءً على التصميم المتفق عليه.
  
  5. **التجربة الأولى**: بعد التجهيز الأولي للفستان، ستكون هناك تجربة أولى يمكنك خلالها ارتداء الفستان ومعاينة شكله، وتحديد ما إذا كان هناك أي تعديلات ضرورية.
  
  6. **التعديلات النهائية**: بناءً على تجربتك، يتم إجراء التعديلات النهائية على الفستان للتأكد من مطابقته للمواصفات الدقيقة وتلبيته لجميع تطلعاتك.
  
  7. **التجربة النهائية والاستلام**: بعد الانتهاء من التعديلات النهائية، تتم تجربة الفستان مرة أخرى للتأكد من أنه مثالي وجاهز لليوم الكبير.
  
  كل خطوة من هذه الخطوات تضمن تصميم فستان زفاف فريد يلبي جميع رغباتك وتطلعاتك ليومك المميز.`
    },
    {
      question: 'هل يمكنني رؤية عيّنات من الأقمشة المستخدمة ؟',
      answer: 'نعم ,  يمكنك رؤية عيّنات من الأقمشة المستخدمة قبل اتخاذ القرار النهائي. خلال مرحلة اختيار الأقمشة والخامات، ستتمكنين من معاينة الأقمشة المتاحة والموافقة على النوع المفضل لديك. عادةً ما يتوفر لديك مجموعة من الخيارات من الأقمشة المختلفة، بما في ذلك أنواع الأقمشة التي تتناسب مع التصميم المطلوب وتكملته بشكل مثالي'
    },
    {
      question: 'هل يتوفر خدمة مرافقة العروس يوم الزفاف؟',
      answer: 'نعم، نحن نقدم خدمة مرافقة العروس في يوم الزفاف. تشمل هذه الخدمة دعمًا كاملاً خلال التحضيرات، مثل مساعدتك في ارتداء الفستان والتأكد من أن كل شيء يسير بسلاسة في يومك الكبير. سنكون معك في كل خطوة من الطريق لنساعدك في الحفاظ على هدوئك وراحتك أثناء التحضيرات والمراسم.'
    },
    {
      question: 'ما هي خيارات الدفع المتاحة ؟',
      answer: 'الدفع نقدا عند الأستلام -- ويوجد نظام بالتقسيط'
    },
   
  ];

  return (
    <div className='mt-10'>
      <div className='flex flex-col gap-5 justify-center lg:w-[60%] w-[90%] mx-auto'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg  p-4 ${activeIndex === index ? 'bg-[#3d3d3d]' : 'bg-[#2a2a2a]'}`}
          >
            <div
              className='flex items-center justify-between  text-gray-300 cursor-pointer'
              onClick={() => toggleAccordion(index)}
            >
              <span className='lg:text-lg text-sm w-[70%] lg:w-full'>{item.question}</span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {activeIndex === index && (
              <p className='text-gray-300 mt-5 transition-all duration-300 '>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccording;