export default function Page2() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center font-nastaliq"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 py-20">
        <div className="flex justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-rose-200">
            دومین برگ از دفتر عشق
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
              <source src="/Sogandam2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto">
          <div className="w-12 h-0.5 bg-rose-600/40 mx-auto mb-6" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-right font-bold mb-6 text-rose-100">
            باز هم تویی،
          </h1>

          <div className="text-gray-300 text-right text-xl sm:text-2xl leading-[2.2] sm:leading-[2.5]">
            <p>چه پروانه باشم در آسمان و چه کرمی در اعماق زمین،</p>
            <p>برگ اول دفتر را که باز می‌کنم تو را می‌بینم، فقط همین.</p>
            <p>در این برگی که از تن من خیاطی شده،</p>
            <p>بیت به بیت بند به بند نام تو نقاشی شده.</p>
            <p className="mt-6">من قلم باشم تویی جوهرم،</p>
            <p>نمی‌نویسم تا که تو رو می‌بینم،</p>
            <p>چه در خواب باشم و چه در رویا</p>
            <p>فقط و فقط بر دامن تو آروم می‌گیرم.</p>
            <p className="mt-6">بگذار آسمانم زمین رو لمس کنه،</p>
            <p>بگذار صدای تو جهانم رو فتح کنه،</p>
            <p>تا زمانی که تپش های قلبت رو در سینه ام حس می‌کنم،</p>
            <p>بگذار قلمت چشمامو پر رنگ کنه.</p>
            <p className="mt-6">تو اینگونه در قصه ام جا داری</p>
            <p>که نه هم‌شکلی داری و نه هم‌ذاتی،</p>
            <p>تو که قدم میزنی گل می‌روید،</p>
            <p>بگو کی داره مثل تو حریر پاکی.</p>
            <p className="mt-6">در همین یک برگ دفتر مجنون گشتم،</p>
            <p>از چشمانت دنیا و از روحت زندگی را جستم،</p>
            <p>نه زیباتر از سیرتت دیده ام و نه پاک تر از روحت یافته ام.</p>
            <p className="mt-6">اگر من بمیرم اندر راه تو، نیست اشکال،</p>
            <p>من هستم فدایی نگاه تو،</p>
            <p>تو برگ اول دنیای منی،</p>
            <p>از تو شروع میشه قصه ام بانو.</p>
            <p className="mt-6">برگ اول تویی و تویی و تویی،</p>
            <p>از سر این داستان جاودانه شدی،</p>
            <p>که وقتی برگ اول را ورق زدم،</p>
            <p>دیدم برگ دوم، سوم، چهارم... تا انتها تویی.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
