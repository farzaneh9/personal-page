function loadMicrosoftTranslator() {
  Microsoft.Translator.Widget.Initialize({
    from: 'fa',  // زبان اصلی سایت (fa برای پارسی، en برای انگلیسی)
    to: ['fa', 'zh-Hans'],  // زبان‌های هدف (پارسی و چینی ساده‌شده)
    autoTranslate: false,  // ترجمه خودکار غیرفعال (کاربر باید زبان رو انتخاب کنه)
    ui: {
      type: 'dropdown',  // نوع نمایش: dropdown یا button
      position: 'bottom',  // موقعیت منو (top, bottom, left, right)
      defaultLanguage: 'fa'  // زبان پیش‌فرض
    }
  });
}

// لود widget بعد از بارگذاری صفحه
window.onload = loadMicrosoftTranslator;

// هندل کردن کلیک دکمه‌ها
document.getElementById('lang-fa').addEventListener('click', function() {
  Microsoft.Translator.Widget.Translate('fa');
});

document.getElementById('lang-zh').addEventListener('click', function() {
  Microsoft.Translator.Widget.Translate('zh-Hans');
});


