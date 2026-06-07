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

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus

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

```javascript
function getProduct(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop', { products, pageTitle: 'Shop' });
  });
}
```

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

---

| یک جدول | حوشگل |
| ------- | ----- |
| یی      | ییی   |
| یی      | ییی   |
| یی      | ییی   |
