export default function Page3() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center font-nastaliq"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 py-20">
        <div className="flex justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-rose-200">
            🌙 سومین شب از شب‌های بی‌پایان 🌙
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
            شب‌ها بدون تو
          </h1>

          <p className="text-gray-300 text-right text-xl sm:text-2xl leading-[2.2] sm:leading-[2.5]">
            شب‌ها که از راه می‌رسند، ماه در آسمان به دنبال تو می‌گردد. ستاره‌ها
            قصه عشق ما را برای هم زمزمه می‌کنند. من در تاریکی، روشنایی نگاهت
            را حس می‌کنم. گویی تو خود مهتابی شده‌ای که راه را به من نشان
            می‌دهی.
          </p>
          <p className="text-gray-300 text-right text-xl sm:text-2xl leading-[2.2] sm:leading-[2.5] mt-6">
            در سکوت شب، صدای تو را می‌شنوم که نامم را صدا می‌زنی. در هر
            نسیمی، عطر تو را حس می‌کنم که مرا به یاد روزهای خوش می‌اندازد.
            سوگند من، تو نه فقط عشق من، که تمام هستی منی. هر چه دارم از تو
            دارم و هر چه هستم به خاطر تو هستم.
          </p>
          <p className="text-gray-300 text-right text-xl sm:text-2xl leading-[2.2] sm:leading-[2.5] mt-6">
            اگر روزی صد سال دیگر هم بگذرد، باز هم من همان ادیز خواهم بود که
            دیوانه‌وار عاشق توست. همان ادیز که در نگاه تو غرق می‌شود و در
            کلمات تو زندگی می‌کند. تو برای من تمام دنیایی، و من برای همیشه
            ساکن قلب تو خواهم ماند.
          </p>
        </div>
      </div>
    </div>
  );
}
