import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home Page",
          mag: "Kaloot Mag",
          portfolios: "Portfolios",
          kaloot: "Kaloot Multi Media",
          slogan: "Where art and technology come together to create your image",
          about: "Kaloot, a content creation and digital advertising agency, brings you a unique experience in digital marketing through expertise in designing, managing, and executing advertising campaigns. Leveraging AA+ grade imaging equipment, innovative 3D scene creation technology, and exclusive visual content, we introduce your brand to your audience in a distinctive and impactful way.",
          services: "Our Services",
          campaign: "Advertising Campaign",
          videography: "Videography",
          motion: "Motion Graphics",
          vfx: "Visual Effects",
          consultation: "Consultation",
          instagram: "Instagram",
          callConsultation: "If you need expert advice on advertising for your business, simply click the button below to get in touch with us.",
          formConsultation: "Or, by filling out the form, we’ll reach out to you at the earliest opportunity.",
          send: "Send",
          phone: "Phone Number",
          name:"Name",
          author:"author:",
          subject:"What area do you need advertising for?",
          email: "Email",
          arash:"Arash Hosseini",
          blog:"Sura AI is an advanced system with amazing capabilities that helps you analyze data, optimize processes, and make smarter decisions. This technology, powered by machine learning and natural language processing, provides an innovative solution...",
          view:"View",
          publicationDate:"Publication Date",
          date:"January 11, 2025",
          address: "Kaloot Studio Address: Kerman, Pezeshk Boulevard, Bihaghi Street, Alley 4",
          copyrightfirst: "Developed With",
          copyrightsecond: "at Kaloot Studio",
          fillFieldsError: "Please fill out all fields.",
          invalidPhoneError: "The entered phone number is invalid.",
          messageSentSuccess: "Message sent successfully!",
          messageSendError: "There was an error sending the message.",
          connectionError: "Error connecting to the server.",
          sendingMessage: "Sending...",
          phoneError: "Phone number must start with 09 and be 11 digits long."
        }
      },
      fa: {
        translation: {
          home: "صفحه اصلی",
          mag: "کلوت مگ",
          portfolios: "نمونه کارها",
          kaloot: "کلوت مولتی مدیا",
          slogan: "جایی که هنر و فناوری دست به دست هم می دهند تا تصویر شما خلق شود",
          about: "کلوت آژانس تولید محتوا و تبلیغات دیجیتال، با تخصص در طراحی، مدیریت و اجرای کمپین‌های تبلیغاتی، تجربه‌ای متفاوت از بازاریابی دیجیتال را با شما به اشتراک میگذارد. ما با بهره‌گیری از تجهیزات تصویر برداری سطح AA+ و تکنولوژی خلق صحنه های سه‌بعدی خلاقانه و محتوای بصری منحصر‌به‌فرد، برند شما را به شکلی متمایز و تاثیرگذار به مخاطبانتان معرفی می‌کنیم",
          services: "خدمات ما",
          campaign: "کمپین تبلیغاتی",
          videography: "تصویربرداری",
          motion: "موشن گرافیک",
          vfx: "جلوه های ویژه",
          consultation: "مشاوره تخصصی",
          instagram: "اینستاگرام کلوت",
          callConsultation: "اگه نیاز به مشاوره تخصصی در زمینه تبلیغات کسب و کارت داشتی میتونی با زدن دکمه زیر باهامون در تماس باشی",
          formConsultation: "یا با پر کردن فرم در اولین فرصت باهات تماس میگیریم",
          send: "ارسال پیام",
          phone: "شماره تماس",
          name:"نام",
          author:"نویسنده:",
          subject:"در چه زمینه‌ای نیاز به تبلیغات دارید؟",
          email: "پست الکترونیکی",
          arash:"آرش حسینی",
          blog:"هوش مصنوعی سورا یک سیستم پیشرفته با قابلیت‌های شگفت‌انگیز است که به شما کمک می‌کند تا داده‌ها را تحلیل کنید، فرایندها را بهینه‌سازی کنید و تصمیمات هوشمندانه‌تری بگیرید. این فناوری با یادگیری ماشینی و پردازش زبان طبیعی، راه‌حلی نوآورانه برای چالش های دنیای مدرن...",
          view:"مشاهده",
          publicationDate:"تاریخ انتشار:",
          date:"22 1403 دی",
          address: "آدرس استودیو کلوت: کرمان،بلوار پزشک،خیابان بیهقی،کوچه4",
          copyrightfirst: "طراحی شده با",
          copyrightsecond: "در استودیو کلوت",
          fillFieldsError: "لطفاً تمامی فیلدها را پر کنید.",
          invalidPhoneError: "شماره موبایل وارد شده صحیح نیست.",
          messageSentSuccess: "پیام با موفقیت ارسال شد!",
          messageSendError: "ارسال پیام با خطا مواجه شد.",
          connectionError: "خطا در اتصال به سرور.",
          sendingMessage: "در حال ارسال...",
          phoneError: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد."
        }
      }
    },
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
