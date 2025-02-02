import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Blog = () => {
  const navigate = useNavigate();
  const blogs = [
    { title: "Blog Hakkında Bilgi", description: "[Blog İçin Buraya Tıklayın](https://atomland.xyz)", url: "development" },
  ]

  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <Navbar />

      <div className='sm:ml-32'>
        <div className='mx-auto max-w-4xl px-8 sm:px-0'>
          <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.2 }}>
            <h1 className='text-5xl font-bold'>Blog</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.3 }}>
            <p className='text-gray-400 mt-2'>Aşşağdaki Linkte Benim Hakkımda Her Şeyi Öğrenebilirsiniz ve Projelerime göz atabilirsiniz!</p>
          </motion.div>

          <motion.div className='mt-8' initial={{ opacity: 0, translateY: 30 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5 }}>
            {blogs.map((blog, index) => (
              <div key={index} onClick={() => navigate(`${blog.url}`)} className='cursor-pointer mt-6'>
                <h2 className='text-3xl max-w-lg font-bold tracking-tight'>{blog.title}</h2>
                <p className='mt-2 text-gray-600 dark:text-gray-400 max-w-xl'>{blog.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className='fixed bottom-0 left-0 ml-4 mb-4'>
        <span className="top-20 left-20 right-20 shadow-[30px_0_1000px_70px_#3730a3]"></span>
      </div>
    </div>
  )
}

export default Blog