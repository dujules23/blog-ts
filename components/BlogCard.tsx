import { FC } from 'react';

interface Props {
  title: string,
  description: string
}

const BlogCard: FC<Props> = ({title, description}): JSX.Element => {
  return <div className="bg-green-100 p-2 rounded">
  <h1 className='text-3xl text-gray-900 font-semibold'>{title}</h1>
  <p className='text-gray-500'>{description}</p>
</div>
};

export default BlogCard;