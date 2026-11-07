import Link from "next/link";

export default function HomePage() {
  console.log("February 15, 2026");
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center font-nastaliq"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 py-20">
        <div className="flex justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-rose-200">
            ❤️ سوگند ادیز به سوگندش ❤️
          </h1>
        </div>

        <div className="mt-8 sm:mt-12 flex items-center justify-center">
          <div className="w-[80vw] max-w-100 h-[60vh] max-h-145 rounded-2xl overflow-hidden shadow-2xl shadow-rose-900/10 ring-1 ring-white/5">
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

        <div className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto">
          <div className="w-12 h-0.5 bg-rose-600/40 mx-auto mb-6" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-right font-bold mb-6 text-rose-100">
            تو عجب زنی هستی،
          </h1>

          <p className="text-gray-300 text-right text-xl sm:text-2xl leading-[2.2] sm:leading-[2.5]">
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
          <div className="mt-12 flex justify-center">
            <Link
              href="/love"
              className="
      group relative inline-flex items-center justify-center
      rounded-full
      bg-gradient-to-r from-rose-700 via-rose-500 to-pink-600
      px-12 py-5
      text-xl sm:text-2xl font-bold text-white
      shadow-lg shadow-rose-600/30
      transition-all duration-300
      hover:scale-110
      hover:shadow-2xl hover:shadow-rose-500/50
      active:scale-95
    "
            >
              <span className="relative z-10">❤️ Love You ❤️</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
