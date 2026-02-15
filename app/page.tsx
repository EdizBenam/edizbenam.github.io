export default function HomePage() {
  console.log("February 15, 2026");
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="w-full max-w-5xl px-4">
        <div className="mt-8 flex justify-center text-center md:text-left max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            🤍 سوگند ادیز به سوگندش 🤍
          </h1>
        </div>
        {/* Video Centered */}
        <div className="mt-10 flex items-center justify-center">
          <div className="w-[80vw] max-w-100 h-[60vh] max-h-145 rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Sogandam.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 text-center md:text-left max-w-3xl mx-auto">
          <h1 className="text-2xl text-right md:text-4xl font-bold mb-4">
            تو عجب زنی هستی،
          </h1>

          <p className="text-gray-300 text-right md:text-lg leading-relaxed">
            کمندت طوری در نسیم می‌رقصد که نه چشمانم آروم و قرار دارند و نه روحم.
            خواهان رقص با تک تک تارهایت می‌شوم در جهانی که از خاکه و آسمانش از
            گرد. آیا میتوانم از مژه هایت میله بسازم و تا ابد پشت آنها حبس شوم؟
            برای آزادی از حبست نه تحسن می‌کنم و نه اعتصاب چرا که آزادی من موجود
            تنها در بندهای توست. جوانه میزنم زیر مهر انگشت هایت، میوه میدهم در
            روند نگاهت، مرا چیست عمر و زندگی اگر نباشم در بند چشم هایت؟ سوگند
            چیست مگر یک عهد که قلب من با وجود تو بسته، عهدی از رگ و خونی که در
            آن جاریست. از صدا های کلاس درس تا نداهای سحر، روز من روشن است و
            خورشید آسمونم سیمای تو. چه فکرم بر آینده باشد و چه حال آنچه در
            هرکدام جاریست فقط تویی و تویی و تویی و تو. از رختخوابم تا صدر بهشت،
            می‌درخشی والاگوهر، بانوی عشق، ندارم مگر تو در این دنیا جان که باشد
            عشق من موکل و شاهدش. یه نوری که از هر جهت تابیدی، از آسمون ها مثل
            گلبرگ رز باریدی، ادیز قدری خوش شانس و عاشق بوده، که نور در آغوش عشق
            او دمیدی. من این نور را در رگ هام حبس می‌کنم، در نفس هایم نور را
            شریک می‌کنم، از تن و جان و روح و دلم، قسم که عشقم رو یکتا می‌دونم.
            اگر سال ها بگذرد و در ساعت ها گم شویم باز هم چشمانمان مسیرمان خواهد
            شد، تو به هر زبان سپندارمذگان منی، سوگند در هر برهه تاریخی قلبم
            متعلق به تو خواهد بود.
          </p>
        </div>
      </div>
    </main>
  );
}
