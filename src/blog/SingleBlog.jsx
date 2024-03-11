import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../compoments/PageHeader';

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const {id} = useParams();
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
  return (
    <div>
        <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

        <div className="blog-section blog-single padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="section-wrapper">
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className="col">
                                        <div className="post-item style-2">
                                            <div className="post-inner">
                                                {
                                                    result.map((item) =>(
                                                        <div key={item.id}>
                                                            <div className="post-thumb">
                                                                <img src={item.imgUrl} alt="" className='w-100' />
                                                            </div>

                                                            <div className="post-content">
                                                                {/**3:02:43 */}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">Right Side</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog