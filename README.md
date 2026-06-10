# h1 - How's your life?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris

## h2 - Nothing much

گزاشتن لینک

click here to see my github [meee](https://github.com/amin-dev3232/test)

### h3 - Take care

---

خط افقی

گزاشتن عکس

![alt text](img.png)

**bold text**

_italic text_

> به طور خلاصه در این دوره شما هر آنچه برای مسلط شدن به Next.js نیاز داشته باشید به شما آموزش داده میشه. یعنی ابتدا یه سری نکات کلی در مورد سئو در فرانت اند به شما آموزش داده میشه که توصیه میکنیم حتما این قسمت‌های اول رو که رایگان هم هستن ببینید تا علاوه بر اصلاح و تکمیل تسلط شما به این موضوع، آمادگی خوبی برای مطالب بعدی پیدا کنید. در مرحله بعد کانسپت های اصلی و اساسی Next.js رو به صورت کامل و عمیق آموزش می بینید به صورتی که بتونید در پروژه های واقعی و کاربردی ازشون استفاده کنید. در واقع در این مرحله هست که به صورت عمیق با Next.js و قدرت اون آشنا خواهید شد. بعد از اینکه تونستید با کانسپت های اصلی Next.js آشنا بشید، وارد مرحله جذاب پروژه های عملی میشید و اونجا با چهار تا مینی پروژه مطالب رو مرور خواهید کرد. بعد از اون یک پروژه خیلی خوب توسعه میدید تا مطمئن بشیم به تسلط کامل رسیدید.

---

- hi mu dasda
- hi mu dasda
- hi mu dasda
  - hi mu dasda
  - hi mu dasda
- hi mu dasda

---

my code `function getProduct(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      pageTitle: 'Shop'
    });
  });
}`

---

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Git - Github</title>
  </head>
  <body></body>
</html>
```

کامپوننت اسلایدر عکس

```tsx
export default function ImageSlider({ images }: { images: ImagesTypes[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3 * 1000); // هر چند ثانیه عکس تغییر کند

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative h-full w-full rounded-xl">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`rounded-xl object-cover transition-[transform,opacity] duration-500 ease-in-out will-change-transform ${
            index === currentImageIndex ? 'z-[1] translate-x-0 rotate-0 scale-100 opacity-100' : '-rotate-5 -translate-x-4 scale-110 opacity-0'
          }`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // برای دارک مود ضروریه
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-yekan)', 'sans-serif'] },
    },
  },
  plugins: [],
};

function getProduct(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop', { products, pageTitle: 'Shop' });
  });
}
```

---

| یک جدول | حوشگل |
| ------- | ----- |
| یی      | ییی   |
| یی      | ییی   |
| یی      | ییی   |
