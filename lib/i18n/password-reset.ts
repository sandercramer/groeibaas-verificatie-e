import type { Locale } from "@/lib/i18n/locales"

export type PasswordResetStrings = {
  subject: string
  preheader: string
  title: string
  intro: string
  ctaIntro: string
  ctaLabel: string
  steps: readonly [string, string, string]
  expiry: string
  notRequested: string
  fallback: string
}

export const passwordResetStrings: Record<Locale, PasswordResetStrings> = {
  nl: {
    subject: "Maak een nieuw wachtwoord voor Groeibaas",
    preheader: "Klik op de knop om een nieuw wachtwoord te maken.",
    title: "Nieuw wachtwoord maken",
    intro: "Je wilt een nieuw wachtwoord voor de Groeibaas app.",
    ctaIntro: "Klik op de knop. Dan kun je een nieuw wachtwoord maken.",
    ctaLabel: "Maak nieuw wachtwoord",
    steps: [
      "Klik op Maak nieuw wachtwoord.",
      "Kies een nieuw wachtwoord. Kies een wachtwoord dat alleen jij weet.",
      "Open de Groeibaas app en log in met je nieuwe wachtwoord.",
    ],
    expiry: "De link werkt maar 1 keer en is maar kort geldig.",
    notRequested: "Heb je dit niet gevraagd? Dan hoef je niets te doen. Je wachtwoord blijft hetzelfde.",
    fallback: "Werkt de knop niet? Kopieer deze link en plak hem in je browser:",
  },
  ar: {
    subject: "أنشئ كلمة مرور جديدة لـ Groeibaas",
    preheader: "اضغط على الزر لإنشاء كلمة مرور جديدة.",
    title: "إنشاء كلمة مرور جديدة",
    intro: "لقد طلبت كلمة مرور جديدة لتطبيق Groeibaas.",
    ctaIntro: "اضغط على الزر. بعد ذلك يمكنك إنشاء كلمة مرور جديدة.",
    ctaLabel: "أنشئ كلمة مرور جديدة",
    steps: [
      "اضغط على «أنشئ كلمة مرور جديدة».",
      "اختر كلمة مرور جديدة. اختر كلمة مرور لا يعرفها أحد غيرك.",
      "افتح تطبيق Groeibaas وسجّل الدخول بكلمة المرور الجديدة.",
    ],
    expiry: "الرابط يعمل مرة واحدة فقط وصالح لوقت قصير.",
    notRequested: "لم تطلب ذلك؟ لا تحتاج إلى فعل أي شيء. تبقى كلمة المرور كما هي.",
    fallback: "الزر لا يعمل؟ انسخ هذا الرابط والصقه في المتصفح:",
  },
  fa: {
    subject: "یک رمز عبور جدید برای Groeibaas بسازید",
    preheader: "روی دکمه بزنید تا رمز عبور جدید بسازید.",
    title: "ساختن رمز عبور جدید",
    intro: "شما برای اپلیکیشن Groeibaas رمز عبور جدید خواسته‌اید.",
    ctaIntro: "روی دکمه بزنید. بعد می‌توانید رمز عبور جدید بسازید.",
    ctaLabel: "ساختن رمز عبور جدید",
    steps: [
      "روی «ساختن رمز عبور جدید» بزنید.",
      "یک رمز عبور جدید انتخاب کنید. رمزی انتخاب کنید که فقط خودتان می‌دانید.",
      "اپلیکیشن Groeibaas را باز کنید و با رمز عبور جدید وارد شوید.",
    ],
    expiry: "این لینک فقط یک بار کار می‌کند و مدت کوتاهی معتبر است.",
    notRequested: "این را درخواست نکرده‌اید؟ لازم نیست کاری بکنید. رمز عبور شما تغییر نمی‌کند.",
    fallback: "دکمه کار نمی‌کند؟ این لینک را کپی کنید و در مرورگر خود بچسبانید:",
  },
  ti: {
    subject: "ን Groeibaas ሓድሽ ፓስዋርድ ስርሑ",
    preheader: "ሓድሽ ፓስዋርድ ንምስራሕ ነቲ መጠወቒ ጠውቑ።",
    title: "ሓድሽ ፓስዋርድ ምስራሕ",
    intro: "ንናይ Groeibaas ኣፕሊኬሽን ሓድሽ ፓስዋርድ ሓቲትኩም ኢኹም።",
    ctaIntro: "ነቲ መጠወቒ ጠውቑ። ድሕሪኡ ሓድሽ ፓስዋርድ ክትሰርሑ ትኽእሉ ኢኹም።",
    ctaLabel: "ሓድሽ ፓስዋርድ ስርሑ",
    steps: [
      "ኣብ «ሓድሽ ፓስዋርድ ስርሑ» ጠውቑ።",
      "ሓድሽ ፓስዋርድ ምረጹ። ንስኹም ጥራይ እትፈልጥዎ ፓስዋርድ ምረጹ።",
      "ናይ Groeibaas ኣፕሊኬሽን ከፊትኩም ብሓድሽ ፓስዋርድኩም እተዉ።",
    ],
    expiry: "እዚ ሊንክ ሓንሳብ ጥራይ እዩ ዝሰርሕ፣ ንሓጺር እዋን ጥራይ ድማ ይሰርሕ።",
    notRequested: "እዚ ዘይሓተትኩም እንተኾይንኩም ገለ ክትገብሩ ኣየድልየኩምን። ፓስዋርድኩም ከምቲ ዘሎ ይጸንሕ።",
    fallback: "እቲ መጠወቒ ኣይሰርሕን ድዩ? ነዚ ሊንክ ቀዲሕኩም ኣብ ብራውዘርኩም ለጥፍዎ፦",
  },
  tr: {
    subject: "Groeibaas için yeni bir şifre oluştur",
    preheader: "Yeni bir şifre oluşturmak için butona tıkla.",
    title: "Yeni şifre oluşturma",
    intro: "Groeibaas uygulaması için yeni bir şifre istedin.",
    ctaIntro: "Butona tıkla. Sonra yeni bir şifre oluşturabilirsin.",
    ctaLabel: "Yeni şifre oluştur",
    steps: [
      "Yeni şifre oluştur butonuna tıkla.",
      "Yeni bir şifre seç. Sadece senin bildiğin bir şifre seç.",
      "Groeibaas uygulamasını aç ve yeni şifrenle giriş yap.",
    ],
    expiry: "Bağlantı sadece 1 kez çalışır ve kısa bir süre geçerlidir.",
    notRequested: "Bunu sen istemedin mi? O zaman bir şey yapmana gerek yok. Şifren aynı kalır.",
    fallback: "Buton çalışmıyor mu? Bu bağlantıyı kopyala ve tarayıcına yapıştır:",
  },
  en: {
    subject: "Create a new password for Groeibaas",
    preheader: "Click the button to create a new password.",
    title: "Create a new password",
    intro: "You asked for a new password for the Groeibaas app.",
    ctaIntro: "Click the button. Then you can create a new password.",
    ctaLabel: "Create new password",
    steps: [
      "Click Create new password.",
      "Choose a new password. Choose a password that only you know.",
      "Open the Groeibaas app and log in with your new password.",
    ],
    expiry: "The link works only once and is valid for a short time.",
    notRequested: "Did you not ask for this? Then you do not need to do anything. Your password stays the same.",
    fallback: "Is the button not working? Copy this link and paste it into your browser:",
  },
  es: {
    subject: "Crea una contraseña nueva para Groeibaas",
    preheader: "Pulsa el botón para crear una contraseña nueva.",
    title: "Crear una contraseña nueva",
    intro: "Has pedido una contraseña nueva para la app Groeibaas.",
    ctaIntro: "Pulsa el botón. Después puedes crear una contraseña nueva.",
    ctaLabel: "Crear contraseña nueva",
    steps: [
      "Pulsa Crear contraseña nueva.",
      "Elige una contraseña nueva. Elige una contraseña que solo sepas tú.",
      "Abre la app Groeibaas e inicia sesión con tu contraseña nueva.",
    ],
    expiry: "El enlace solo funciona 1 vez y es válido durante poco tiempo.",
    notRequested: "¿No lo has pedido tú? Entonces no tienes que hacer nada. Tu contraseña sigue igual.",
    fallback: "¿El botón no funciona? Copia este enlace y pégalo en tu navegador:",
  },
  zh: {
    subject: "为 Groeibaas 设置新密码",
    preheader: "点击按钮，设置新密码。",
    title: "设置新密码",
    intro: "你申请了 Groeibaas 应用的新密码。",
    ctaIntro: "点击下面的按钮，然后就可以设置新密码。",
    ctaLabel: "设置新密码",
    steps: [
      "点击“设置新密码”。",
      "选择一个新密码。请选择只有你自己知道的密码。",
      "打开 Groeibaas 应用，用新密码登录。",
    ],
    expiry: "这个链接只能使用 1 次，并且有效时间很短。",
    notRequested: "如果不是你申请的，你不需要做任何事。你的密码不会改变。",
    fallback: "按钮无法使用？请复制这个链接，粘贴到浏览器中：",
  },
  fr: {
    subject: "Crée un nouveau mot de passe pour Groeibaas",
    preheader: "Clique sur le bouton pour créer un nouveau mot de passe.",
    title: "Créer un nouveau mot de passe",
    intro: "Tu as demandé un nouveau mot de passe pour l'application Groeibaas.",
    ctaIntro: "Clique sur le bouton. Ensuite, tu peux créer un nouveau mot de passe.",
    ctaLabel: "Créer un nouveau mot de passe",
    steps: [
      "Clique sur Créer un nouveau mot de passe.",
      "Choisis un nouveau mot de passe. Choisis un mot de passe que toi seul connais.",
      "Ouvre l'application Groeibaas et connecte-toi avec ton nouveau mot de passe.",
    ],
    expiry: "Le lien ne fonctionne qu'une seule fois et n'est valable que peu de temps.",
    notRequested: "Tu n'as pas fait cette demande ? Alors tu n'as rien à faire. Ton mot de passe reste le même.",
    fallback: "Le bouton ne fonctionne pas ? Copie ce lien et colle-le dans ton navigateur :",
  },
  ku: {
    subject: "Ji bo Groeibaas şîfreyeke nû çêke",
    preheader: "Li bişkokê bitikîne da ku şîfreyeke nû çêkî.",
    title: "Şîfreyeke nû çêke",
    intro: "Te ji bo sepana Groeibaas şîfreyeke nû xwest.",
    ctaIntro: "Li bişkokê bitikîne. Paşê tu dikarî şîfreyeke nû çêkî.",
    ctaLabel: "Şîfreya nû çêke",
    steps: [
      "Li Şîfreya nû çêke bitikîne.",
      "Şîfreyeke nû hilbijêre. Şîfreyekê hilbijêre ku tenê tu dizanî.",
      "Sepana Groeibaas veke û bi şîfreya xwe ya nû têkeve.",
    ],
    expiry: "Ev girêdan tenê 1 car dixebite û tenê demeke kurt derbasdar e.",
    notRequested: "Te ev daxwaz nekir? Wê demê ne hewce ye ku tu tiştekî bikî. Şîfreya te wek xwe dimîne.",
    fallback: "Bişkok naxebite? Vê girêdanê kopî bike û têxe geroka xwe:",
  },
}
