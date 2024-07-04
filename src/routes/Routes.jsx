import Home from '../pages/Home.jsx'
import Blogs from '../pages/Blogs.jsx'
import BookMarks from '../pages/BookMarks.jsx'
import Mainlayout from '../layouts/Mainlayout.jsx'
import Blog from '../pages/Blog.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Content from '../components/Content.jsx'
import Author from '../components/Author.jsx'
export const router = createBrowserRouter([
{
    path: '/',
    element: <Mainlayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: '/blogs',
            loader: () => fetch('https://dev.to/api/articles?per_page=20&top=20'),
            element: <Blogs />
        },
        {
            path: '/blog/:id',
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            element: <Blog />,
            children: [
                {
                    index: true,
                    loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    element: <Content />
                },
                {
                    path: 'author',
                    loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    element: <Author />
                }
            ]
        },
        {
            path: '/bookmarks',
            element: <BookMarks />
        }
    ]
}
])