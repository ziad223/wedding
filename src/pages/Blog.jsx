import React from 'react';
import blog1 from '../images/blog/blog-1.png';
import blog2 from '../images/blog/blog-2.png';
import { Link } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
const Blog = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24'>
      <hr className='#dedede my-16' />
      <h2 className='lg:text-[64px] font-normal lg:w-[922px] lg:h-[176px] mx-auto leading-[1.3] text-xl  text-center ' style={{ wordSpacing: '5px' }}>
        اكتشفي أحدث صيحات فساتين  الزفاف لعام 2024
      </h2>
      <p className='text-xl lg:text-[24px] font-light leading-[1.5] text-center mt-7 lg:w-[1179px] lg:h-[62px] text-[##808080]'>
        استعدي ليومك المميز وتعرفي على آخر صيحات فساتين الزفاف لهذا العام. من التصميمات الكلاسيكية إلى الأساليب العصرية،   جمعنا لكِ كل ما تحتاجينه لإطلالة مثالية ومليئة بالأناقة في ليلة العمر. 
      </p>
      <hr className='#dedede my-16' />
       <div>
        <img loading="lazy" src={blog1} alt="blog1" />
        <div className='lg:px-32 mt-10'>
          <h2 className='lg:text-2xl font-bold text-xl'>اختيارات مستدامة ليومك المميز</h2>
          <p className='my-5 text-lg'>
            في عالم يتجه نحو الاستدامة، تبرز فساتين الزفاف المصممة بمواد صديقة للبيئة كخيار مثالي للعروس العصرية التي تهتم بالمحافظة على البيئة. تعرفي على الفساتين التي تجمع بين الأناقة والمسؤولية البيئية.
          </p>
          <p className='text-lg'>
            سنة 2024 تأتي بالعديد من الخيارات المستدامة التي تساعدك على الحفاظ على جمال الأرض. ستتعرفين في هذا الدليل على أفضل اختيارات فساتين الزفاف الصديقة للبيئة والمصممة لتدوم وتحتفظ بذكرياتك للأبد.
          </p>
        </div>
        <div className='lg:px-32 mt-10'>
          <h2 className='lg:text-2xl font-bold text-xl'>أحدث التقنيات في اختيار فساتين الزفاف عبر الإنترنت</h2>
          <p className='my-5 text-lg'>
            في عصر التكنولوجيا، أصبح من السهل عليك اختيار فستان زفافك المثالي عبر الإنترنت. بفضل تقنية الواقع المعزز، يمكنك تجربة فساتين مختلفة وكأنك في المتجر دون الحاجة إلى مغادرة منزلك.
          </p>
          <p className='text-lg'>
            التسوق عبر الإنترنت أصبح جزءاً لا يتجزأ من حياتنا، ومجال فساتين الزفاف لم يعد استثناءً. اطلعي على كيفية الاستفادة من التكنولوجيا الحديثة لتجربة الفساتين الافتراضية، وتعرفي على الأدوات التي تساعدك على اتخاذ القرار بثقة أكبر.
          </p>
        </div>
        <div className='lg:px-32 mt-10'>
          <h2 className='lg:text-2xl font-bold text-xl'>دليل اختيار فستان الزفاف حسب نوع جسمك </h2>
          <p className='my-5 text-lg'>
            كل عروس تختلف عن الأخرى، واختيار فستان الزفاف المثالي يعتمد على فهمك لنوع جسمك وما يناسبه. اكتشفي كيفية اختيار الفستان الذي يبرز جمالك الطبيعي ويجعلك تتألقين في يومك الخاص.
          </p>
          <p className='text-lg'>
            إذا كنتِ تبحثين عن فستان زفاف يلائم شكل جسمك، فهذه المقالة لكِ. سنقدم لكِ نصائح مهمة تساعدك على اختيار الفستان الذي يجعلك تبدين بأفضل حال، من القصة إلى التفاصيل الدقيقة.
          </p>
        </div>
        <div className='lg:px-32 mt-10'>
          <h2 className='lg:text-2xl font-bold text-xl'>نصائح للعناية بفستان الزفاف قبل وبعد الزفاف</h2>
          <p className='my-5 text-lg'>
            فستان الزفاف هو جزء ثمين من ذكرياتك، ولذا يحتاج لعناية خاصة قبل يومك الكبير وبعده. تعرفي على كيفية العناية به وحفظه لتبقى ذكراه نابضة في قلبك.
          </p>
          <p className='text-lg'>
الحفاظ على فستان الزفاف يبدأ بالعناية الجيدة قبل وبعد الحفل. اكتشفي أفضل الطرق لتنظيفه، تخزينه، والعناية بالتفاصيل الدقيقة لتحافظي عليه كأنه جديد، وتضمني أنه يبقى جزءًا من إرثك الشخصي.
 
          </p>
          <img loading="lazy" src={blog2} alt="blog2" className='mt-14' />
          <div className="mt-10">
            <h2 className='lg:text-2xl font-bold text-xl'> استكشفي سحر فساتين الأفراح في موقعنا</h2>
            <p className='my-5 text-lg'>
              في عالم الزفاف، تعتبر فساتين الأفراح أكثر من مجرد ملابس؛ فهي تجسد أحلام العرائس وتُعدّ رمزاً للأناقة والأنوثة. نحن في موقعنا نفهم تماماً أهمية اختيار الفستان المثالي ليومك الخاص، حيث يتطلب ذلك مزيدًا من العناية والتفاصيل الدقيقة التي تُبرز جمال كل عروس. من اللحظة التي تقررين فيها أن تقولي "نعم"، يسعى فريقنا لتقديم تجربة تسوق فريدة تشمل مجموعة متنوعة من فساتين الأفراح التي تناسب جميع الأذواق.
            </p>
            <Link to='/contact' className='bg-[#907457] px-14 text-lg py-3 text-white rounded-lg d cursor-pointer hover:bg-[#795b3b] transition-all duration-300 block w-max mb-10'>
              تواصلي معنا
            </Link>
          </div>
        </div>
        <hr className='my-10'/>
        <div className=" mb-20">
          <BlogContent/>
        </div>
       </div>
    </div>
  );
}

export default Blog;
