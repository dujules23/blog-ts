import BlogCard from '@/components/BlogCard';
import { NextPage } from 'next';

interface Props {}

const Blogs: NextPage<Props> = () => {
   return (
   <div className=' max-w-3xl mx-auto p-5 space-y-5'>
    <BlogCard title="This is my blog" description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, accusamus. Eveniet earum error accusamus vero voluptatem neque sit quod inventore.'/>
    <BlogCard title="This is my blog" description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, accusamus. Eveniet earum error accusamus vero voluptatem neque sit quod inventore.'/>
    <BlogCard title="This is my blog" description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, accusamus. Eveniet earum error accusamus vero voluptatem neque sit quod inventore.'/>
   </div>
   )
}

export default Blogs