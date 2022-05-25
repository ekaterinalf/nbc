## Ссылка на собранный проект
https://nbc-beta.vercel.app/

## Задание 
Разработать мини-аналог Instagram – небольшое одностраничное веб-приложение, состоящее из сетки миниатюр изображений, при нажатии на каждое из которых, должен показываться оригинал изображения, а также список комментариев к нему.

По умолчанию, на странице должно выводиться не более ~21 изображения, остальные должны подгружаться по мере прокрутки страницы.
Веб-приложение должно быть адаптивно и приемлимо отображаться на мобильных устройствах размера 425px и ниже. (Десктоп и планшет делать необязательно)

Изображния получаем отсюда – https://jsonplaceholder.typicode.com/photos
Комментарии для каждого изображения отсюда – https://jsonplaceholder.typicode.com/comments?postId={id изображения}

Дополнительно: Добавьте возможность оставлять комментарии любым возможным способом (jsonplaceholder не позволяет добавлять данные)

## Стек
React + NextJS
TypeScript
AntDesign

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
