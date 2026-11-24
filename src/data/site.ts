// Content of the Harwind homepage. Source: veon/client.json (facts W-F001…W-F018) and design/concept.md 8.1.
// Phones: only the permanent numbers (W-F014, W-F016). No call-tracking numbers.

export const NOTE = "Розділ у розробці";

export interface Phone { label: string; display: string; tel: string; }

export const phones = {
  sales: { label: "Відділ продажу", display: "067 463 10 92", tel: "+380674631092" },
  service: { label: "Сервісний центр", display: "044 364 84 84", tel: "+380443648484" },
  charity: { label: "Благодійникам", display: "067 350 67 74", tel: "+380673506774" },
  office: { label: "Центральний офіс", display: "044 365 05 25", tel: "+380443650525" },
} satisfies Record<string, Phone>;

export const email = "info@harwind.com.ua";
export const telegram = "https://t.me/harwindcompany_bot";
export const hours = "Пн–Пт 09:00–18:00";

const map = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const addresses = {
  office: { label: "Центральний офіс", line: "вул. Автозаводська, 54/19 А", city: "Київ, 04114", map: map("Київ, вул. Автозаводська, 54/19 А") },
  service: { label: "Сервісний центр", line: "вул. Вербова, 4 А", city: "Київ", map: map("Київ, вул. Вербова, 4 А") },
};

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/1harwind/" },
  { name: "Instagram", href: "https://www.instagram.com/harwind_team/" },
  { name: "YouTube", href: "https://www.youtube.com/@HARWIND" },
];

export const nav = [
  { href: "#napryamy", label: "Обладнання" },
  { href: "#aprobatsiia", label: "Апробація" },
  { href: "#suprovid", label: "Сервіс і навчання" },
  { href: "#keisy", label: "Кейси" },
  { href: "#blagodiinykam", label: "Благодійникам" },
  { href: "#kontakty", label: "Контакти" },
];

export interface Direction { name: string; img: string; w: number; h: number; specialist?: boolean; models?: string; }

// company.business_lines; clinical specialists per W-F017; models per W-F006.
export const directions: Direction[] = [
  { name: "Ультразвукова діагностика", img: "dir-uzd", w: 427, h: 640, specialist: true, models: "Mindray МХ3, МХ6, Consona N5" },
  { name: "Ендоскопічне обладнання", img: "dir-endo", w: 241, h: 350, specialist: true },
  { name: "Рентгенологічне обладнання", img: "dir-rentgen", w: 564, h: 640 },
  { name: "Життєзабезпечення", img: "dir-life", w: 434, h: 640, specialist: true, models: "Mindray A1" },
  { name: "Акушерське обладнання", img: "dir-akush", w: 249, h: 350 },
  { name: "Кардіологічне обладнання", img: "dir-kardio", w: 427, h: 640 },
  { name: "Операційне обладнання", img: "dir-oper", w: 500, h: 600 },
  { name: "Неонатологічне обладнання", img: "dir-neo", w: 427, h: 640 },
];

export interface Model { kind: string; name: string; img: string; w: number; h: number; alt: string; }

export const models: Model[] = [
  { kind: "Ультразвукова діагностика", name: "Mindray МХ3", img: "mindray-mx3", w: 960, h: 640, alt: "Ультразвукова система Mindray МХ3 з двома датчиками" },
  { kind: "Ультразвукова діагностика", name: "Mindray МХ6", img: "mindray-mx6", w: 960, h: 640, alt: "Ультразвукова система Mindray МХ6" },
  { kind: "Ультразвукова діагностика", name: "Mindray Consona N5", img: "consona-n5", w: 640, h: 960, alt: "Ультразвукова система Mindray Consona N5 на візку" },
  { kind: "Наркозно-дихальний апарат", name: "Mindray A1", img: "mindray-a1", w: 640, h: 960, alt: "Наркозно-дихальний апарат Mindray A1" },
];

// W-F002: brands the site lists (self-declared official representation).
export const brandsLead = ["Mindray", "Fujifilm"];
export const brands = [
  "Weyer", "LELTEK", "SLE", "4L Health", "Almax Imaging", "Eternal Medical Technology", "Biomedical Instruments",
  "HUONS", "IBA Dosimetry", "iTD", "Keewell", "Pardo", "PIXXGEN", "Contec", "Luckcome", "ALPHA MEDICAL",
  "WANDONG", "Kernel", "Dentis", "Anke", "ZERONE", "Xavant", "Insighters", "EKOM", "FSN",
];

// concept.md 8.1 №7 (audit/screens/pro-nas-desktop-s04.png).
export const cases = [
  { date: "2025-12-15", dateText: "15 грудня 2025", title: "Добробут і Harwind: історія довіри та довгострокового партнерства", partner: "Добробут" },
  { date: "2022-05-26", dateText: "26 травня 2022", title: "Технології, що повертають до життя", partner: "Superhumans" },
  { date: "2022-05-12", dateText: "12 травня 2022", title: "300 наркозно-дихальних апаратів по всій країні", partner: "МОЗ, Світовий банк" },
];

export const routes = [
  { key: "buy", task: "Купівля і підбір", phone: phones.sales, text: "Підбір обладнання під ваше відділення, ціни й умови постачання.", subject: "Купівля і підбір обладнання" },
  { key: "trial", task: "Апробація", phone: phones.sales, text: "Тест обладнання у вашому відділенні перед покупкою.", subject: "Запит на апробацію" },
  { key: "service", task: "Сервіс", phone: phones.service, text: "Гарантійний і платний ремонт, підмінний фонд. Вербова, 4 А.", subject: "Сервіс обладнання" },
  { key: "charity", task: "Благодійна закупівля", phone: phones.charity, text: "Закупівля обладнання для лікарні від фонду чи донорів.", subject: "Благодійна закупівля" },
];
