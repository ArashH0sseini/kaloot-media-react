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
          name: "Name",
          author: "author:",
          subject: "What area do you need advertising for?",
          email: "Email",
          arash: "Arash Hosseini",
          blog: "Sura AI is an advanced system with amazing capabilities that helps you analyze data, optimize processes, and make smarter decisions. This technology, powered by machine learning and natural language processing, provides an innovative solution...",
          view: "View",
          publicationDate: "Publication Date",
          date: "January 11, 2025",
          address: "Kaloot Studio Address: Kerman, Pezeshk Boulevard, Bihaghi Street, Alley 4",
          copyrightfirst: "Developed With",
          copyrightsecond: "at Kaloot Studio",
          fillFieldsError: "Please fill out all fields.",
          invalidPhoneError: "The entered phone number is invalid.",
          messageSentSuccess: "Message sent successfully!",
          messageSendError: "There was an error sending the message.",
          connectionError: "Error connecting to the server.",
          sendingMessage: "Sending...",
          phoneError: "Phone number must start with 09 and be 11 digits long.",
          "videoPage": {
            "header": {
              "title": "Videography",
              "description": "Our professional videography, using advanced techniques, transforms your brand's moments into stunning visuals that convey your message in the best possible way."
            },
            "videos": [
              {
                "title": "🌟 Lifestyle of a Successful Trader! 🌟",
                "description": "In this video, we take a unique look at the lifestyle of a forex trader; a world full of excitement, focus, and big decisions. 📈💼\nHow can one achieve both financial freedom and an ideal personal life in this dynamic market? 🎯✨\nThe secrets that bring you closer to a professional and flexible lifestyle await you here!\n📌 Step into the world of success and transform your lifestyle! 🏖🚀",
                "cards": [
                  {
                    "title": "Client",
                    "name": "Mr. Khosravi"
                  },
                  {
                    "title": "Camera",
                    "name": "SONY FX30 CINEMA LINE"
                  },
                  {
                    "title": "Lens",
                    "name": "16 MM F1.4 SIGMA / 50 MM F1.8 SONY"
                  },
                  {
                    "title": "Software",
                    "name": "Adobe Premiere, Adobe After Effect, Blender"
                  }
                ]
              },
              {
                "title": "🌟 Beauty, Science in Our Hands! 🌟",
                "description": "In this video, we take you to a world where science and art come together to enhance your natural beauty. ✨🩺\nSee how Dr. uses the most advanced methods and modern technologies to offer an extraordinary journey of rejuvenating your skin's vitality. 💎💆‍♀️\nYour beauty, our expertise! It's time to rediscover your shine. 🌹💖",
                "cards": [
                  {
                    "title": "Client",
                    "name": "Dr. Foroughi"
                  },
                  {
                    "title": "Camera",
                    "name": "SONY ALPHA 6400"
                  },
                  {
                    "title": "Lens",
                    "name": "16 MM F1.4 SIGMA / 33 MM F2.5 SONY"
                  },
                  {
                    "title": "Software",
                    "name": "Adobe Premiere, Adobe After Effect, CINEMA4D"
                  }
                ]
              },
              {
                "title": "🌟 Revolution in Hair Removal! 🌟",
                "description": "In this video, discover the advanced technology of the Filler laser hair removal device; a painless, fast, and highly effective way to achieve smooth and radiant skin. ✨💆‍♀️\nFiller is designed with precision and safety to bring you a luxurious and professional experience.\n📌 Take a step toward lasting beauty and boost your confidence! 🌹🔥",
                "cards": [
                  {
                    "title": "Client",
                    "name": "Dr. Soltani"
                  },
                  {
                    "title": "Camera",
                    "name": "SONY ALPHA 7 S2"
                  },
                  {
                    "title": "Lens",
                    "name": "16 MM F1.4 SIGMA / 50 MM F2.5 SONY"
                  },
                  {
                    "title": "Software",
                    "name": "Adobe Premiere, Adobe After Effect, CINEMA4D, Blender"
                  }
                ]
              }
            ]
          },
          "VFXPage": {
            "header": {
              "title": "Special Effects",
              "description": "Transform your story into stunning and unforgettable visuals with professional special effects."
            },
            "videos": [
              {
                "title": "A Glimpse into the Unknown: Substance VFX Reconstruction",
                "description": "In this video, witness the reconstruction of an astonishing scene from the film Substance; the moment when the main character steps into a dimension beyond ordinary understanding as their pupils split. This special effect is a fusion of advanced VFX techniques and storytelling art, capturing the suspense and wonder of this moment. \nWhat secrets lie within their eyes?✨",
              },
              {
                "title": "When the World of Apps Comes to Life",
                "description": "In this video, experience an explosion of creativity and technology; the moment when mobile apps emerge from the phone and showcase a live, interactive world. 📱✨\n🎬 This special effect is carefully designed to depict a revolution in the relationship with apps and technology. A blend of motion graphics, VFX, and storytelling that creates an unforgettable experience.",
              },
              {
                "title": "KPMG Tower Toronto with Special Effects",
                "description": "In this video, witness special effects of the famous Toronto tower, where a giant lion emerges from inside the tower.",
              },
              {
                "title": "Coffee Cups Suspended in the Air",
                "description": "In this video, watch coffee cups fall from above with special effects, showcasing an advertisement for a café in the Arg Square of Kerman.",
              },
              {
                "title": "PS5 Advertisements at the First Tower of Kerman",
                "description": "In this video, see PlayStation 5 advertisements with special effects at the First Tower of Kerman.",
              }
            ]
          },
          "MotionGraphicsPage": {
            "header": {
              "title": "Motion Graphics",
              "description": "Our 3D motion graphic teasers narrate your brand story in an eye-catching and captivating way, creating a memorable experience for your audience."
            },
            "videos": [
              {
                "title": "The Amazing Transformation of Chocolate into a World of Colors",
                "description": "The roasting of a chocolate with fire in a magical moment, where the heat of the flames transforms a simple chocolate into a piece of art. Dancing flames adorn the surface of the chocolate with golden hues and sweet fragrance, as if the taste of life is engraved in every piece. This is a story of transformation, from heat to softness, from simplicity to unmatched freshness. 🔥✨"
              },
              {
                "title": "3D Blue Lotus in the Sea",
                "description": "In the heart of the sea, where silence blends with the calm sound of the waves, a blue lotus blooms with grace and splendor. This symbol of life and balance portrays the beauty of nature in its purest form. The lotus’s journey through the boundless waters represents an eternal bond between tranquility and strength."
              },
              {
                "title": "Transformative Robot with Modern and Creative Design 🤖✨",
                "description": "A spherical robot with a distinct robotic camera design, featuring a spherical body that is always ready to explore and capture. Its sleek, futuristic body houses advanced, intelligent cameras. This robot embodies technology and creativity, capable of capturing every angle of the world with unparalleled precision. It’s as though the world is redefined through the lens of this robot."
              },
              {
                "title": "Jellyfish Dance in the Blue Depths 🌊✨",
                "description": "In this motion graphic, you witness the mesmerizing and synchronized movement of two jellyfish in shades of blue and purple, ascending toward the light. These beautiful creatures, with their smooth and rhythmic motions, depict the tranquility and wonder of the underwater world. Their dance in the ocean's darkness reflects the natural beauty and mysterious life of the ocean depths, inviting the viewer on an imaginary journey to the unknown."
              },
              {
                "title": "The Emergence of a Skeleton from Floating Bullets 💀✨",
                "description": "A 3D skeleton emerges from between bullets in a storm of gunfire that shatters the darkness, revealing a pure truth from the heart of the ashes. The skeleton slowly rises amidst the chaos, symbolizing resilience and rebirth. This scene illustrates the beautiful paradox between destruction and creation, a journey toward light in the shadows."
              }
            ]
          },
            "campaignPage": {
              "header": {
                "title": "Advertising Campaign",
                "description": "You are an amazing brand, but do your audience know that? We are here to make sure that not only you get seen, but you shine!"
              },
              "main": {
                "campaignDefinition": {
                  "title": "What is an advertising campaign?",
                  "description": "A campaign is a cohesive and purposeful set of promotional content designed and executed digitally or physically to convey a specific message to the audience. This message can be inspirational, informative, or persuasive and is delivered through a mix of channels and communication methods in a way that leaves a lasting impact on the audience's mind and emotions. The main goal of a campaign is to establish an effective and deep connection with the audience, encouraging them to take a specific action, whether it's purchasing a product or joining a social movement."
                },
                "whyChooseUs": {
                  "title": "Why are we the best choice for you?",
                  "strategy": {
                    "title": "Your brand's unique strategy",
                    "description": "Every brand has its own story. We listen to you, discover your story, and create a unique strategy tailored specifically for you."
                  },
                  "creativeContent": {
                    "title": "Creative and eye-catching content",
                    "description": "From stunning graphic designs to creating videos that captivate the audience in seconds, our team creates everything for your brand."
                  },
                  "socialMediaManagement": {
                    "title": "Professional social media management",
                    "description": "We manage your presence on social media platforms like Instagram, LinkedIn, or even TikTok to ensure that every post you make is impactful."
                  },
                  "analytics": {
                    "title": "Continuous analysis and optimization",
                    "description": "We never stop working. By analyzing data, we measure results and continuously improve your campaign."
                  }
                }
              }
            },
            start:"Start Animation",
            stop:"Stop Animation"
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
          name: "نام",
          author: "نویسنده:",
          subject: "در چه زمینه‌ای نیاز به تبلیغات دارید؟",
          email: "پست الکترونیکی",
          arash: "آرش حسینی",
          blog: "هوش مصنوعی سورا یک سیستم پیشرفته با قابلیت‌های شگفت‌انگیز است که به شما کمک می‌کند تا داده‌ها را تحلیل کنید، فرایندها را بهینه‌سازی کنید و تصمیمات هوشمندانه‌تری بگیرید. این فناوری با یادگیری ماشینی و پردازش زبان طبیعی، راه‌حلی نوآورانه برای چالش های دنیای مدرن...",
          view: "مشاهده",
          publicationDate: "تاریخ انتشار:",
          date: "22 1403 دی",
          address: "آدرس استودیو کلوت: کرمان،بلوار پزشک،خیابان بیهقی،کوچه4",
          copyrightfirst: "طراحی شده با",
          copyrightsecond: "در استودیو کلوت",
          fillFieldsError: "لطفاً تمامی فیلدها را پر کنید.",
          invalidPhoneError: "شماره موبایل وارد شده صحیح نیست.",
          messageSentSuccess: "پیام با موفقیت ارسال شد!",
          messageSendError: "ارسال پیام با خطا مواجه شد.",
          connectionError: "خطا در اتصال به سرور.",
          sendingMessage: "در حال ارسال...",
          phoneError: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد.",
          "videoPage": {
            "header": {
              "title": "تصویربرداری",
              "description": "تصویربرداری حرفه‌ای ما با استفاده از تکنیک‌های پیشرفته، لحظات برند شما را به تصاویری شگفت‌انگیز تبدیل می‌کند که پیام شما را به بهترین شکل ممکن به مخاطب منتقل می‌کند."
            },
            "videos": [
              {
                "title": "🌟 زندگی به سبک یک تریدر موفق! 🌟",
                "description": "در این ویدیو، نگاهی متفاوت به لایف‌استایل یک تریدر فارکس خواهیم داشت؛ دنیایی پر از هیجان، تمرکز، و تصمیم‌های بزرگ. 📈💼\nچگونه می‌توان در این بازار پویا هم آزادی مالی داشت و هم زندگی شخصی ایده‌آل را تجربه کرد؟ 🎯✨\nرازهایی که شما را به یک سبک زندگی حرفه‌ای و انعطاف‌پذیر نزدیک‌تر می‌کند، اینجا منتظر شماست!\n📌 قدم به دنیای موفقیت بگذارید و سبک زندگی خود را تغییر دهید! 🏖🚀",
                "cards": [
                  {
                    "title": "مشتری",
                    "name": "آقای خسروی"
                  },
                  {
                    "title": "دوربین",
                    "name": "SONY FX30 CINEMA LINE"
                  },
                  {
                    "title": "لنز",
                    "name": "16 MM F1.4 SIGMA / 50 MM F1.8 SONY"
                  },
                  {
                    "title": "نرم‌افزار",
                    "name": "Adobe Premiere, Adobe After Effect, Blender"
                  }
                ]
              },
              {
                "title": "🌟 زیبایی، علمی که در دستان ماست! 🌟",
                "description": "در این ویدیو، شما را به دنیایی می‌بریم که در آن علم و هنر دست‌به‌دست هم داده‌اند تا زیبایی طبیعی شما را درخشان‌تر کنند. ✨🩺\nدر این ویدیو می‌بینیم که خانم دکتر چجوری با پیشرفته‌ترین روش‌ها و تکنولوژی‌های روز، سفری بی‌نظیر برای بازگرداندن شادابی و طراوت به پوست شما ارائه می‌دهد. 💎💆‍♀️\nزیبایی شما، تخصص ماست! وقت آن رسیده که درخشش خود را دوباره کشف کنید. 🌹💖",
                "cards": [
                  {
                    "title": "مشتری",
                    "name": "خانم دکتر فروغی"
                  },
                  {
                    "title": "دوربین",
                    "name": "SONY ALPHA 6400"
                  },
                  {
                    "title": "لنز",
                    "name": "16 MM F1.4 SIGMA / 33 MM F2.5 SONY"
                  },
                  {
                    "title": "نرم‌افزار",
                    "name": "Adobe Premiere, Adobe After Effect, CINEMA4D"
                  }
                ]
              },
              {
                "title": "🌟 انقلابی در حذف موهای زائد! 🌟",
                "description": "در این ویدیو، با تکنولوژی پیشرفته دستگاه لیزر موهای زائد فیلر آشنا شوید؛ روشی بی‌درد، سریع و فوق‌العاده موثر برای داشتن پوستی صاف و درخشان. ✨💆‍♀️\nفیلر با دقت و ایمنی بالا طراحی شده تا تجربه‌ای لوکس و حرفه‌ای را برای شما به ارمغان آورد.\n📌 قدمی به سوی زیبایی ماندگار بردارید و اعتماد به نفس خود را دوچندان کنید! 🌹🔥",
                "cards": [
                  {
                    "title": "مشتری",
                    "name": "خانم دکتر سلطانی"
                  },
                  {
                    "title": "دوربین",
                    "name": "SONY ALPHA 7 S2"
                  },
                  {
                    "title": "لنز",
                    "name": "16 MM F1.4 SIGMA / 50 MM F2.5 SONY"
                  },
                  {
                    "title": "نرم‌افزار",
                    "name": "Adobe Premiere, Adobe After Effect, CINEMA4D, Blender"
                  }
                ]
              }
            ]
          },
          "VFXPage": {
            "header": {
              "title": "جلوه های ویژه",
              "description": "با جلوه‌های ویژه حرفه‌ای، داستانتان را به تصاویری خیره‌کننده و فراموش‌ نشدنی تبدیل کنید."
            },
            "videos": [
              {
                "title": "چشمی به سوی ناشناخته‌ها: بازسازی جلوه ویژه Substance",
                "description": "در این ویدیو، بازسازی صحنه‌ای حیرت‌انگیز از فیلم Substance را مشاهده می‌کنید؛ لحظه‌ای که شخصیت اصلی با دوتا شدن مردمک چشم‌هایش، به بُعدی فراتر از درک معمولی قدم می‌گذارد. این جلوه ویژه، تلفیقی از تکنیک‌های پیشرفته VFX و هنر روایتگری است که حس تعلیق و شگفتی این صحنه را به تصویر می‌کشد. \nراز نهفته در چشمان او چیست؟✨",
              },
              {
                "title": "وقتی دنیای اپلیکیشن‌ها زنده می‌شود",
                "description": "در این ویدیو، شاهد انفجاری از خلاقیت و تکنولوژی هستید؛ لحظه‌ای که اپلیکیشن‌های موبایل از دل گوشی بیرون می‌آیند و دنیایی زنده و تعاملی را به نمایش می‌گذارند. 📱✨\n🎬 این جلوه ویژه به‌دقت طراحی شده تا تحولی نوین را در ارتباط با اپلیکیشن‌ها و فناوری به تصویر بکشد. تلفیقی از موشن گرافیک، VFX و هنر داستان‌گویی که تجربه‌ای فراموش‌نشدنی خلق کرده است.",
              },
              {
                "title": "برج KPMG تورنتو با جلوه های ویژه",
                "description": "در این ویدیو، شاهد جلوه‌های ویژه‌ای از برج معروف تورنتو خواهید بود که در آن یک شیر عظیم از داخل برج به بیرون می‌آید",
              },
              {
                "title": "لیوان‌های قهوه معلق در هوا",
                "description": "در این ویدیو، لیوان‌های قهوه را مشاهده کنید که با جلوه‌های ویژه از بالا سقوط می‌کنند و تبلیغات یک کافه در میدان ارگ کرمان را به نمایش می‌گذارند.",
              },
              {
                "title": "تبلیغات PS5 در برج اول کرمان",
                "description": "در این ویدیو، تبلیغات PlayStation 5 را همراه با جلوه‌های ویژه در برج اول کرمان خواهید دید.",
              }
            ]
          },
          "MotionGraphicsPage": {
            "header": {
              "title": "موشن گرافیک",
              "description": "تیزرهای موشن گرافیک سه بعدی ما، داستان برند شما را به شکلی جذاب و چشم نواز روایت میکنند و تجربه ای بیاد ماندنی برای مخاطبانتان خلق میکنند"
            },
            "videos": [
              {
                "title": "تغییر شگفت‌انگیز شکلات به دنیای رنگ‌ها",
                "description": " برشته شدن یک شکلات با آتش لحظه‌ای جادویی که گرمای آتش، شکلاتی ساده را به اثری هنری تبدیل می‌کند. شعله‌های رقصان، سطح شکلات را با رنگ طلایی و عطر شیرین می‌آرایند، گویی که طعم زندگی را در هر تکه آن حک کرده‌اند. این داستان از دگرگونی است، از گرما تا لطافت، از سادگی تا طراوت بی‌نظیر.🔥✨",
              },
              {
                "title": "نیلوفر آبی سه‌بعدی در دریا",
                "description": "در قلب دریا، جایی که سکوت با صدای آرام امواج درآمیخته، نیلوفری آبی، با لطافت و شکوه، شکوفا می‌شود. این نماد زندگی و تعادل، زیبایی طبیعت را در اوج خلوصش به تصویر می‌کشد. سفر نیلوفر در آب‌های بی‌کران، گویای پیوند جاودانه‌ای بین آرامش و قدرت است."

              },
              {
                "title": "ربات تحول‌آفرین با طراحی مدرن و خلاقانه 🤖✨",
                "description": "ربات کروی با دوربین رباتی متمایز، با طراحی کروی که هر لحظه آماده کشف و ثبت است. بدنی صیقلی و آینده‌نگرانه که از آن دوربین‌هایی پیشرفته و هوشمند بیرون می‌آیند. این ربات، تجسم فناوری و خلاقیت است که می‌تواند هر زاویه‌ای از جهان را با دقتی بی‌نظیر به تصویر بکشد. گویی که خود جهان، از دریچه نگاه این ربات، بازتعریف می‌شود.",
              },
              {
                "title": "رقص عروس‌های دریایی در عمق آبی 🌊✨",
                "description": "در این موشن گرافیک، شاهد حرکت دل‌انگیز و هماهنگ دو عروس دریایی در رنگ‌های آبی و بنفش هستید که به‌سوی روشنایی صعود می‌کنند. این موجودات زیبا با حرکات نرم و ریتمیک خود، حس آرامش و شگفتی دنیای زیر آب را به تصویر می‌کشند. رقص آن‌ها در تاریکی دریا، بازتابی از زیبایی طبیعی و زندگی پررمز و راز اعماق اقیانوس‌هاست که بیننده را به سفری خیالی به دنیای ناشناخته‌ها دعوت می‌کند",
              },
              {
                "title": "ظهور اسکلت از میان فشنگ‌های معلق 💀✨",
                "description": "بیرون آمدن یک اسکلت سه‌بعدی از میان گلوله‌ها در میان طوفان گلوله‌ها و شلیک‌هایی که تاریکی را می‌شکافند، حقیقتی ناب از دل خاکستر بیرون می‌آید. اسکلت سه‌بعدی که به آرامی از میان هرج‌ومرج سر برمی‌آورد، نماد استقامت و بازگشت است. این صحنه نشان‌دهنده تناقضی زیبا بین نابودی و خلق دوباره است؛ سفر به سوی نور در میان سایه‌ها.",
              }
            ]
          },
            "campaignPage": {
              "header": {
                "title": "کمپین تبلیغاتی",
                "description": "شما یک برند شگفت‌انگیز هستید، اما آیا مخاطبانتان هم همین را می‌دانند؟ ما اینجاییم تا کاری کنیم که شما نه‌تنها دیده شوید، بلکه درخشان باشید!"
              },
              "main": {
                "campaignDefinition": {
                  "title": "کمپین تبلیغاتی چیست؟",
                  "description": "کمپین، مجموعه‌ای منسجم و هدفمند از محتواهای تبلیغاتی است که به صورت دیجیتال یا میدانی طراحی و اجرا می‌شود تا یک پیام مشخص را به مخاطبان منتقل کند. این پیام می‌تواند الهام‌بخش، اطلاع‌رسان یا ترغیب‌کننده باشد و از طریق ترکیبی از کانال‌ها و روش‌های ارتباطی مختلف به گونه‌ای ارائه می‌شود که تأثیری ماندگار بر ذهن و احساسات مخاطب بگذارد. هدف اصلی کمپین، ایجاد ارتباطی مؤثر و عمیق با مخاطبان است تا آن‌ها را به واکنش یا اقدامی خاص ترغیب کند، خواه خرید یک محصول باشد یا پیوستن به یک حرکت اجتماعی."
                },
                "whyChooseUs": {
                  "title": "چرا ما بهترین انتخاب برای شما هستیم؟",
                  "strategy": {
                    "title": "استراتژی خاص برند شما",
                    "description": "هر برند داستان خودش را دارد. ما به شما گوش می‌دهیم، داستان شما را کشف می‌کنیم و یک استراتژی منحصربه‌فرد می‌سازیم که مخصوص شماست."
                  },
                  "creativeContent": {
                    "title": "محتوای خلاقانه و چشم‌نواز",
                    "description": "از طراحی گرافیک‌های خیره‌کننده تا تولید ویدیوهایی که در چند ثانیه مخاطبان را جذب کند، تیم ما همه‌چیز را برای برند شما خلق می‌کند."
                  },
                  "socialMediaManagement": {
                    "title": "مدیریت حرفه‌ای شبکه‌های اجتماعی",
                    "description": "ما حضورتان را در شبکه‌های اجتماعی مثل اینستاگرام، لینکدین یا حتی تیک‌تاک مدیریت می‌کنیم تا مطمئن شویم هر پست شما تأثیرگذار است."
                  },
                  "analytics": {
                    "title": "تحلیل و بهینه‌سازی مداوم",
                    "description": "ما هیچ‌وقت دست از کار نمی‌کشیم. با تحلیل داده‌ها، نتایج را می‌سنجیم و کمپین شما را بهتر و بهتر می‌کنیم."
                  }
                }
              }
            },
            start:"اجرای انیمیشن",
            stop:"توقف انیمیشن"    
        }
      }
    },
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
