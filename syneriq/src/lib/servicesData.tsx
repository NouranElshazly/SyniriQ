import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import BuildIcon from '@mui/icons-material/Build';
import PowerIcon from '@mui/icons-material/Power';
import SpeedIcon from '@mui/icons-material/Speed';
import BoltIcon from '@mui/icons-material/Bolt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import * as React from 'react';

export interface ServiceItem {
  slug: string;
  icon: React.ReactNode;
  titleEN: string; titleAR: string;
  taglineEN: string; taglineAR: string;
  subtitleEN: string; subtitleAR: string;
  descEN: string; descAR: string;
  image: string;
  whoWeServe: { en: string; ar: string }[];
  sections: { titleEN: string; titleAR: string; items: { en: string; ar: string }[] }[];
  whySyneriq: { en: string; ar: string }[];
  calloutEN?: string; calloutAR?: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    slug: 'diesel-power',
    icon: <ElectricBoltIcon fontSize="large" />,
    titleEN: 'Diesel Power Solutions', titleAR: 'حلول الطاقة بالديزل',
    taglineEN: 'RELIABLE POWER. BUILT TO PERFORM.', taglineAR: 'طاقة موثوقة. مبنية للأداء.',
    subtitleEN: 'Generator Supply & Installation Solutions', subtitleAR: 'حلول توريد وتركيب المولدات',
    descEN: 'Delivering complete generator solutions from sizing and supply to installation and commissioning — ensuring reliable performance for critical and industrial applications.',
    descAR: 'تقديم حلول مولدات متكاملة من التحجيم والتوريد إلى التركيب والتشغيل — لضمان الأداء الموثوق للتطبيقات الحرجة والصناعية.',
    image: '/energy-solutions.png',
    whoWeServe: [
      { en: 'Industrial & Manufacturing', ar: 'الصناعة والتصنيع' },
      { en: 'Construction & Infrastructure', ar: 'البناء والبنية التحتية' },
      { en: 'Commercial Buildings', ar: 'المباني التجارية' },
      { en: 'Hospitals & Critical Power', ar: 'المستشفيات والطاقة الحرجة' },
    ],
    sections: [
      { titleEN: 'Generator Supply', titleAR: 'توريد المولدات', items: [{ en: 'Diesel generators 50–2500 kVA', ar: 'مولدات ديزل 50–2500 كيلو فولت أمبير' }, { en: 'Prime & standby configurations', ar: 'تكوينات رئيسية واحتياطية' }, { en: 'Open / silent / containerized', ar: 'مفتوح / صامت / محوصل' }, { en: 'Tier-1 brands (Cummins, Perkins, Mitsubishi)', ar: 'علامات تجارية من الدرجة الأولى' }] },
      { titleEN: 'Installation & Site Execution', titleAR: 'التركيب والتنفيذ الميداني', items: [{ en: 'Complete site-ready installation', ar: 'تركيب كامل جاهز للموقع' }, { en: 'Mechanical & electrical installation', ar: 'تركيب ميكانيكي وكهربائي' }, { en: 'Cable laying & termination', ar: 'مد الكابلات والتوصيل' }, { en: 'Fuel system integration', ar: 'تكامل نظام الوقود' }, { en: 'Exhaust & ventilation design', ar: 'تصميم العادم والتهوية' }] },
      { titleEN: 'Commissioning & Testing', titleAR: 'التشغيل والاختبار', items: [{ en: 'Full system testing & performance verification', ar: 'اختبار كامل للنظام والتحقق من الأداء' }, { en: 'Load bank testing', ar: 'اختبار بنك الحمل' }, { en: 'Performance validation', ar: 'التحقق من الأداء' }, { en: 'Client handover & training', ar: 'تسليم العميل والتدريب' }] },
    ],
    whySyneriq: [{ en: 'Engineering-driven solutions', ar: 'حلول هندسية' }, { en: 'Site-based system design', ar: 'تصميم مبني على الموقع' }, { en: 'Experience in critical power', ar: 'خبرة في الطاقة الحرجة' }, { en: 'Reliable execution from start to finish', ar: 'تنفيذ موثوق من البداية للنهاية' }],
    calloutEN: 'Complete power solution — from design to operation with reliable performance & long-term stability',
    calloutAR: 'حل طاقة متكامل — من التصميم إلى التشغيل بأداء موثوق واستقرار طويل الأمد',
  },
  {
    slug: 'installation-commissioning',
    icon: <EngineeringIcon fontSize="large" />,
    titleEN: 'Installation & Commissioning', titleAR: 'التركيب والتشغيل',
    taglineEN: 'PRECISION INSTALLATION. ZERO COMPROMISE.', taglineAR: 'تركيب دقيق. بلا تنازلات.',
    subtitleEN: 'Complete Site Execution & System Handover', subtitleAR: 'تنفيذ ميداني كامل وتسليم النظام',
    descEN: 'Complete site-ready installation with mechanical, electrical, fuel system integration, and full system testing before handover.',
    descAR: 'تركيب كامل جاهز للموقع مع التكامل الميكانيكي والكهربائي وأنظمة الوقود واختبار كامل قبل التسليم.',
    image: '/EngineeringServices.jpg',
    whoWeServe: [{ en: 'Industrial Facilities', ar: 'المنشآت الصناعية' }, { en: 'Construction Projects', ar: 'مشاريع البناء' }, { en: 'Commercial Buildings', ar: 'المباني التجارية' }, { en: 'Hospitals & Critical Applications', ar: 'المستشفيات والتطبيقات الحرجة' }],
    sections: [
      { titleEN: 'Mechanical & Electrical', titleAR: 'الميكانيكي والكهربائي', items: [{ en: 'Complete mechanical installation', ar: 'تركيب ميكانيكي كامل' }, { en: 'Electrical wiring & connections', ar: 'الأسلاك والتوصيلات الكهربائية' }, { en: 'ATS & control panel integration', ar: 'تكامل ATS ولوحة التحكم' }, { en: 'Cable laying & termination', ar: 'مد الكابلات والتوصيل' }] },
      { titleEN: 'Commissioning & Testing', titleAR: 'التشغيل والاختبار', items: [{ en: 'Pre-commissioning checks', ar: 'فحوصات ما قبل التشغيل' }, { en: 'On-site testing & verification', ar: 'اختبار وتحقق ميداني' }, { en: 'Load bank testing', ar: 'اختبار بنك الحمل' }, { en: 'Client handover & training', ar: 'تسليم العميل والتدريب' }] },
    ],
    whySyneriq: [{ en: 'Engineering-driven approach', ar: 'نهج هندسي' }, { en: 'Site-based execution', ar: 'تنفيذ ميداني' }, { en: 'Experienced installation teams', ar: 'فرق تركيب ذات خبرة' }, { en: 'Reliable handover process', ar: 'عملية تسليم موثوقة' }],
  },
  {
    slug: 'maintenance-service',
    icon: <BuildIcon fontSize="large" />,
    titleEN: 'Maintenance & Service', titleAR: 'الصيانة والخدمة',
    taglineEN: 'MAXIMUM UPTIME. ZERO UNEXPECTED FAILURES.', taglineAR: 'أقصى وقت تشغيل. صفر أعطال مفاجئة.',
    subtitleEN: 'Engineering-Driven Generator Maintenance Solutions', subtitleAR: 'حلول صيانة مولدات هندسية',
    descEN: 'Ensure reliable operation, reduce downtime, and protect your equipment with engineering-driven maintenance solutions tailored to real site conditions.',
    descAR: 'ضمان التشغيل الموثوق وتقليل وقت التوقف وحماية معداتك بحلول صيانة هندسية مصممة لظروف الموقع الحقيقية.',
    image: '/combine-machine-service.jpg',
    whoWeServe: [{ en: 'Industrial & Factory Facilities', ar: 'المنشآت الصناعية والمصانع' }, { en: 'Construction Projects', ar: 'مشاريع البناء' }, { en: 'Commercial Buildings', ar: 'المباني التجارية' }, { en: 'Hospitals & Critical Facilities', ar: 'المستشفيات والمنشآت الحرجة' }],
    sections: [
      { titleEN: 'Maintenance Contracts', titleAR: 'عقود الصيانة', items: [{ en: 'Scheduled preventive maintenance', ar: 'صيانة وقائية مجدولة' }, { en: 'Full mechanical & electrical inspection', ar: 'فحص ميكانيكي وكهربائي كامل' }, { en: 'Oil & filters replacement', ar: 'استبدال الزيت والفلاتر' }, { en: 'Performance testing & reporting', ar: 'اختبار الأداء وإعداد التقارير' }] },
      { titleEN: 'On-Demand Services', titleAR: 'الخدمات عند الطلب', items: [{ en: 'Troubleshooting & fault diagnostics', ar: 'استكشاف الأخطاء وتشخيص الأعطال' }, { en: 'Load bank testing', ar: 'اختبار بنك الحمل' }, { en: 'Cooling & fuel system servicing', ar: 'صيانة أنظمة التبريد والوقود' }, { en: 'Major repairs & overhaul', ar: 'الإصلاحات الكبرى والإصلاح الشامل' }] },
      { titleEN: 'Preventive Packages', titleAR: 'حزم الصيانة الوقائية', items: [{ en: 'ESSENTIAL — Oil & filters replacement', ar: 'أساسي — استبدال الزيت والفلاتر' }, { en: 'ADVANCED — Full inspection + cleaning + filters', ar: 'متقدم — فحص كامل + تنظيف + فلاتر' }] },
    ],
    whySyneriq: [{ en: 'Engineering-based approach', ar: 'نهج هندسي' }, { en: 'Fast response across KSA', ar: 'استجابة سريعة في المملكة' }, { en: 'Site-driven solutions', ar: 'حلول مبنية على الموقع' }, { en: 'Focus on reliability', ar: 'التركيز على الموثوقية' }],
    calloutEN: 'Reduce unexpected breakdowns by up to 40%',
    calloutAR: 'قلل الأعطال غير المتوقعة بنسبة تصل إلى 40%',
  },
  {
    slug: 'rental-power',
    icon: <PowerIcon fontSize="large" />,
    titleEN: 'Rental Power', titleAR: 'الطاقة الإيجارية',
    taglineEN: 'INSTANT POWER. ZERO DOWNTIME.', taglineAR: 'طاقة فورية. صفر توقف.',
    subtitleEN: 'Reliable Rental Power Solutions', subtitleAR: 'حلول طاقة إيجارية موثوقة',
    descEN: 'Get immediate, reliable power whenever you need it with flexible rental solutions designed for construction, industrial, and emergency applications.',
    descAR: 'احصل على طاقة فورية وموثوقة متى احتجتها مع حلول إيجار مرنة مصممة للتطبيقات الإنشائية والصناعية والطارئة.',
    image: '/img1.jpg',
    whoWeServe: [{ en: 'Construction Projects', ar: 'مشاريع البناء' }, { en: 'Industrial Sites', ar: 'المواقع الصناعية' }, { en: 'Events & Temporary Power', ar: 'الفعاليات والطاقة المؤقتة' }, { en: 'Emergency Backup Applications', ar: 'تطبيقات الطاقة الاحتياطية الطارئة' }],
    sections: [
      { titleEN: 'Generator Rental', titleAR: 'تأجير المولدات', items: [{ en: 'Diesel generators 50–1500 kVA', ar: 'مولدات ديزل 50–1500 كيلو فولت أمبير' }, { en: 'Ready for immediate deployment', ar: 'جاهزة للنشر الفوري' }, { en: 'Prime & standby operation', ar: 'تشغيل رئيسي واحتياطي' }, { en: 'Silent / soundproof options', ar: 'خيارات صامتة وعازلة للصوت' }] },
      { titleEN: 'Complete Power Setup', titleAR: 'إعداد الطاقة الكامل', items: [{ en: 'Synchronization systems', ar: 'أنظمة المزامنة' }, { en: 'Transformers (LV/MV)', ar: 'محولات (جهد منخفض/متوسط)' }, { en: 'Fuel system & cabling', ar: 'نظام الوقود والكابلات' }, { en: 'Full turnkey power setup', ar: 'إعداد طاقة متكامل' }] },
      { titleEN: 'Support Services', titleAR: 'خدمات الدعم', items: [{ en: 'Delivery & installation', ar: 'التوصيل والتركيب' }, { en: 'On-site technicians', ar: 'فنيون ميدانيون' }, { en: '24/7 technical support', ar: 'دعم فني 24/7' }, { en: 'Maintenance during rental period', ar: 'صيانة خلال فترة الإيجار' }, { en: 'Fuel management (optional)', ar: 'إدارة الوقود (اختياري)' }] },
    ],
    whySyneriq: [{ en: 'Guaranteed fast mobilization across KSA', ar: 'تعبئة سريعة مضمونة في المملكة' }, { en: 'Ready-to-deploy fleet', ar: 'أسطول جاهز للنشر' }, { en: 'Engineering-based system setup', ar: 'إعداد نظام هندسي' }, { en: 'Reliable operation for critical loads', ar: 'تشغيل موثوق للأحمال الحرجة' }],
  },
  {
    slug: 'load-bank-testing',
    icon: <SpeedIcon fontSize="large" />,
    titleEN: 'Load Bank Testing', titleAR: 'اختبار بنك الحمل',
    taglineEN: 'TESTED PERFORMANCE. GUARANTEED RELIABILITY.', taglineAR: 'أداء مختبر. موثوقية مضمونة.',
    subtitleEN: 'Load Bank Testing & Performance Verification', subtitleAR: 'اختبار بنك الحمل والتحقق من الأداء',
    descEN: 'Validate generator performance under real operating conditions using professional load bank testing services designed to ensure reliability, stability, and full operational readiness.',
    descAR: 'التحقق من أداء المولد في ظروف التشغيل الحقيقية باستخدام خدمات اختبار بنك الحمل الاحترافية.',
    image: '/img2.jpg',
    whoWeServe: [{ en: 'Industrial & Manufacturing', ar: 'الصناعة والتصنيع' }, { en: 'Construction & Infrastructure', ar: 'البناء والبنية التحتية' }, { en: 'Hospitals & Critical Facilities', ar: 'المستشفيات والمنشآت الحرجة' }, { en: 'Data Centers & Commercial Buildings', ar: 'مراكز البيانات والمباني التجارية' }],
    sections: [
      { titleEN: 'Load Bank Testing', titleAR: 'اختبار بنك الحمل', items: [{ en: 'Resistive load testing', ar: 'اختبار الحمل المقاوم' }, { en: 'Medium voltage testing up to 13.8 kV', ar: 'اختبار الجهد المتوسط حتى 13.8 كيلو فولت' }, { en: 'Generator performance validation', ar: 'التحقق من أداء المولد' }, { en: 'Testing for standby & prime generators', ar: 'اختبار المولدات الاحتياطية والرئيسية' }] },
      { titleEN: 'Testing Scope', titleAR: 'نطاق الاختبار', items: [{ en: 'Voltage and frequency stability', ar: 'استقرار الجهد والتردد' }, { en: 'Load response & performance behavior', ar: 'استجابة الحمل وسلوك الأداء' }, { en: 'Cooling system performance validation', ar: 'التحقق من أداء نظام التبريد' }, { en: 'Fuel & Oil system performance check', ar: 'فحص أداء نظام الوقود والزيت' }, { en: 'Full system stress testing', ar: 'اختبار إجهاد النظام الكامل' }] },
      { titleEN: 'Commissioning & Testing', titleAR: 'التشغيل والاختبار', items: [{ en: 'Pre-commissioning testing', ar: 'اختبار ما قبل التشغيل' }, { en: 'On-site testing & verification', ar: 'اختبار وتحقق ميداني' }, { en: 'System readiness confirmation', ar: 'تأكيد جاهزية النظام' }, { en: 'Client handover support', ar: 'دعم تسليم العميل' }] },
    ],
    whySyneriq: [{ en: 'Accurate real load simulation', ar: 'محاكاة حمل حقيقية دقيقة' }, { en: 'Engineering-based testing approach', ar: 'نهج اختبار هندسي' }, { en: 'Reliable performance verification', ar: 'تحقق موثوق من الأداء' }, { en: 'Detailed reporting & analysis', ar: 'تقارير وتحليلات مفصلة' }],
    calloutEN: 'Ensure your generator performs exactly when it matters',
    calloutAR: 'تأكد من أن مولدك يعمل بالضبط عند الحاجة',
  },
  {
    slug: 'ups-power-continuity',
    icon: <BoltIcon fontSize="large" />,
    titleEN: 'UPS & Power Continuity', titleAR: 'UPS واستمرارية الطاقة',
    taglineEN: 'UNINTERRUPTED POWER. CRITICAL LOAD PROTECTION.', taglineAR: 'طاقة متواصلة. حماية الأحمال الحرجة.',
    subtitleEN: 'Reliable UPS & Power Continuity Solutions', subtitleAR: 'حلول UPS موثوقة واستمرارية الطاقة',
    descEN: 'Ensure continuous operation and protect your critical loads with advanced UPS systems designed to deliver stable, uninterrupted performance.',
    descAR: 'ضمان التشغيل المستمر وحماية أحمالك الحرجة بأنظمة UPS متقدمة مصممة لتقديم أداء مستقر ومتواصل.',
    image: '/img3.jpg',
    whoWeServe: [{ en: 'Data Centers & Server Rooms', ar: 'مراكز البيانات وغرف الخوادم' }, { en: 'Hospitals & Critical Facilities', ar: 'المستشفيات والمنشآت الحرجة' }, { en: 'Commercial Buildings', ar: 'المباني التجارية' }, { en: 'Industrial Applications', ar: 'التطبيقات الصناعية' }],
    sections: [
      { titleEN: 'UPS Solutions', titleAR: 'حلول UPS', items: [{ en: 'Supply of 1PH & 3PH UPS systems', ar: 'توريد أنظمة UPS أحادية وثلاثية الطور' }, { en: 'Scalable & modular UPS solutions', ar: 'حلول UPS قابلة للتوسع والتعديل' }, { en: 'Backup power for critical loads', ar: 'طاقة احتياطية للأحمال الحرجة' }, { en: 'Battery systems & monitoring', ar: 'أنظمة البطاريات والمراقبة' }] },
      { titleEN: 'System Integration', titleAR: 'تكامل النظام', items: [{ en: 'UPS system installation & configuration', ar: 'تركيب وتكوين نظام UPS' }, { en: 'Power distribution integration', ar: 'تكامل توزيع الطاقة' }, { en: 'Battery bank installation', ar: 'تركيب بنك البطاريات' }, { en: 'System testing & commissioning', ar: 'اختبار النظام والتشغيل' }] },
    ],
    whySyneriq: [{ en: 'Engineering-driven solutions', ar: 'حلول هندسية' }, { en: 'Site-based system design', ar: 'تصميم نظام مبني على الموقع' }, { en: 'Experience in critical power systems', ar: 'خبرة في أنظمة الطاقة الحرجة' }, { en: 'Reliable execution from start to finish', ar: 'تنفيذ موثوق من البداية للنهاية' }],
    calloutEN: 'Ensure uninterrupted power for your critical operations',
    calloutAR: 'ضمان الطاقة المتواصلة لعملياتك الحرجة',
  },
  {
    slug: 'fuel-systems',
    icon: <LocalGasStationIcon fontSize="large" />,
    titleEN: 'Fuel Systems', titleAR: 'أنظمة الوقود',
    taglineEN: 'RELIABLE FUEL. CONTINUOUS OPERATION.', taglineAR: 'وقود موثوق. تشغيل متواصل.',
    subtitleEN: 'Complete Fuel System Solutions', subtitleAR: 'حلول أنظمة وقود متكاملة',
    descEN: 'Complete fuel system solutions — tanks, piping, filtration, and fuel management systems for all generator applications.',
    descAR: 'حلول أنظمة وقود متكاملة — خزانات وأنابيب وتصفية وأنظمة إدارة الوقود لجميع تطبيقات المولدات.',
    image: '/energy-solutions-1.jpg',
    whoWeServe: [{ en: 'Industrial Facilities', ar: 'المنشآت الصناعية' }, { en: 'Construction Sites', ar: 'مواقع البناء' }, { en: 'Commercial Buildings', ar: 'المباني التجارية' }, { en: 'Critical Infrastructure', ar: 'البنية التحتية الحرجة' }],
    sections: [
      { titleEN: 'Fuel Storage & Supply', titleAR: 'تخزين الوقود وتوريده', items: [{ en: 'Fuel tank supply & installation', ar: 'توريد وتركيب خزانات الوقود' }, { en: 'Above & underground tank solutions', ar: 'حلول خزانات فوق وتحت الأرض' }, { en: 'Piping & filtration systems', ar: 'أنظمة الأنابيب والتصفية' }, { en: 'Fuel transfer pumps', ar: 'مضخات نقل الوقود' }] },
      { titleEN: 'Fuel Management', titleAR: 'إدارة الوقود', items: [{ en: 'Fuel management & monitoring systems', ar: 'أنظمة إدارة ومراقبة الوقود' }, { en: 'Leak detection & safety systems', ar: 'أنظمة كشف التسرب والسلامة' }, { en: 'Fuel consumption reporting', ar: 'تقارير استهلاك الوقود' }, { en: 'Preventive maintenance for fuel systems', ar: 'الصيانة الوقائية لأنظمة الوقود' }] },
    ],
    whySyneriq: [{ en: 'Complete fuel system expertise', ar: 'خبرة كاملة في أنظمة الوقود' }, { en: 'Safety-first approach', ar: 'نهج السلامة أولاً' }, { en: 'Integrated with generator systems', ar: 'متكامل مع أنظمة المولدات' }, { en: 'Reliable long-term operation', ar: 'تشغيل موثوق طويل الأمد' }],
  },
];
