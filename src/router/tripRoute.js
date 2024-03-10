import About from '../pages/About'
import PostPages from '../pages/PostPages'
import PostIdPage from '../pages/PostIdPage'



export const tripRoute = [
    {path: '/about', element: About },
    {path: '/postPages', element: PostPages },
    {path: '/posts:id', element: PostIdPage }
]
    // {path="/about" element={<About />}},
    // {path="/postPages" element={<PostPages />}},
    // {path="/posts/:id" element={<PostIdPage />}},
    //   {path="/*" element={<Error />}}
