import type { Locale } from "@/lib/i18n/locales"

export type CommonStrings = {
  greeting: (name: string) => string
  stepsTitle: string
  noticeLabel: string
  help: string
  footerTagline: string
}

export const commonStrings: Record<Locale, CommonStrings> = {
  nl: {
    greeting: (name) => `Hallo ${name},`,
    stepsTitle: "Zo werkt het",
    noticeLabel: "Let op.",
    help: "Lukt het niet? Vraag hulp aan je docent, trajectbegeleider of Nederlands de Baas.",
    footerTagline: "Groeibaas – jouw voortgang in taal en participatie",
  },
  ar: {
    greeting: (name) => `مرحبًا ${name}،`,
    stepsTitle: "طريقة الاستخدام",
    noticeLabel: "انتبه:",
    help: "هل تحتاج إلى مساعدة؟ اسأل معلّمك أو مرشد المسار أو Nederlands de Baas.",
    footerTagline: "Groeibaas – تقدّمك في اللغة والمشاركة في المجتمع",
  },
  fa: {
    greeting: (name) => `سلام ${name}،`,
    stepsTitle: "روش کار",
    noticeLabel: "توجه:",
    help: "مشکلی دارید؟ از معلم، راهنمای مسیر یا Nederlands de Baas کمک بخواهید.",
    footerTagline: "Groeibaas – پیشرفت شما در زبان و مشارکت اجتماعی",
  },
  ti: {
    greeting: (name) => `ሰላም ${name}፣`,
    stepsTitle: "ከመይ ይሰርሕ",
    noticeLabel: "ተጠንቀቑ።",
    help: "ሓገዝ የድልየኩም ድዩ? መምህርኩም፣ ኣማኻሪ መስመርኩም ወይ Nederlands de Baas ሕተቱ።",
    footerTagline: "Groeibaas – ምዕባለኹም ኣብ ቋንቋን ተሳትፎን",
  },
  tr: {
    greeting: (name) => `Merhaba ${name},`,
    stepsTitle: "Nasıl çalışır?",
    noticeLabel: "Dikkat.",
    help: "Yardıma mı ihtiyacın var? Öğretmenine, süreç danışmanına veya Nederlands de Baas'a sor.",
    footerTagline: "Groeibaas – dilde ve topluma katılımda ilerlemen",
  },
  en: {
    greeting: (name) => `Hello ${name},`,
    stepsTitle: "How it works",
    noticeLabel: "Please note.",
    help: "Need help? Ask your teacher, your programme coach or Nederlands de Baas.",
    footerTagline: "Groeibaas – your progress in language and participation",
  },
  es: {
    greeting: (name) => `Hola ${name}:`,
    stepsTitle: "Cómo funciona",
    noticeLabel: "Atención.",
    help: "¿Necesitas ayuda? Pregunta a tu profesor/a, a tu orientador/a o a Nederlands de Baas.",
    footerTagline: "Groeibaas – tu progreso en el idioma y la participación",
  },
  zh: {
    greeting: (name) => `你好，${name}：`,
    stepsTitle: "使用方法",
    noticeLabel: "请注意：",
    help: "需要帮助？请询问你的老师、辅导员或 Nederlands de Baas。",
    footerTagline: "Groeibaas – 你在语言和社会参与方面的进步",
  },
  fr: {
    greeting: (name) => `Bonjour ${name},`,
    stepsTitle: "Comment ça marche",
    noticeLabel: "Attention.",
    help: "Besoin d'aide ? Demande à ton enseignant, à ton accompagnateur ou à Nederlands de Baas.",
    footerTagline: "Groeibaas – tes progrès en langue et en participation",
  },
  ku: {
    greeting: (name) => `Silav ${name},`,
    stepsTitle: "Çawa dixebite",
    noticeLabel: "Hişyar be.",
    help: "Alîkarî lazim e? Ji mamosteyê xwe, şêwirmendê xwe yan Nederlands de Baas bipirse.",
    footerTagline: "Groeibaas – pêşketina te di ziman û beşdariyê de",
  },
}
