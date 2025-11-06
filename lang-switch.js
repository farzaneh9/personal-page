// Language switcher for main description and card overlays

(function() {
  const translations = {
    en: {
      mainDesc: `<span class="name">Farzaneh</span> 
        is a passionate designer pursuing a master's degree in industrial design engineering at Zhejiang University, who loves creating innovative and user-centric designs.
        <br>
        <a href="./About.html" class="about" id="about-link">More About me</a>`,
      aboutLink: "More About me",
      langBtn: "中文"
    },
    zh: {
      mainDesc: `<span class="name">若溪</span>
        是一名热情的设计师，目前在浙江大学攻读工业设计工程硕士学位，热爱创造创新且以用户为中心的设计。
        <br>
        <a href="./About.html" class="about" id="about-link">更多关于我</a>`,
      aboutLink: "更多关于我",
      langBtn: "EN"
    }
  };

  let currentLang = "en";
  const langSwitch = document.getElementById("lang-switch");
  const mainDesc = document.getElementById("main-desc");

  if (langSwitch) {
    langSwitch.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "zh" : "en";
      // Switch main description if present
      if (mainDesc && translations[currentLang].mainDesc) {
        mainDesc.innerHTML = translations[currentLang].mainDesc;
      }
      // Switch overlay texts
      document.querySelectorAll(".card-title, .card-text").forEach(el => {
        if (el.dataset.en && el.dataset.zh) {
          el.textContent = el.dataset[currentLang];
        }
      });
      // Switch button text
      langSwitch.textContent = translations[currentLang].langBtn;
    });
  }
})();
