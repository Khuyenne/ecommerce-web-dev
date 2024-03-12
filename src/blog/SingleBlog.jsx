import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../compoments/PageHeader";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
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
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Serenity hasir taken poseson myping entre
                                  soung these swwt morngs sring which enoywith
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot which the blissouls
                                  like mineing am so happy my dearsi fewnd
                                  absoribed the exquste sense enjoy my whole
                                  hearts along and fee the charm of exstenceths
                                  spotsi which was the blis of soul is mineing
                                  amsoing dear frend soingu absorbed the exqust
                                  singe wonderful serenty has taken possesison
                                  of my entre soulng these sweet present monent
                                  and yet feel that never was greater artst
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recaptiualize distributed
                                    technologies is wherease turnkey channels
                                    and onotonectally provide access to resource
                                    leveling expertise vias worldwide
                                    deliverables uolisticly extend aserser are
                                    diverse vorals
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot which the blissouls
                                  like mineing am so happy my dearsi fewnd
                                  absoribed the exquste sense enjoy my whole
                                  hearts along and fee the charm of exstenceths
                                  spotsi which was the blis of soul is mineing
                                  amsoing dear frend soingu absorbed the exqust
                                  singe wonderful serenty has taken possesison
                                  of my entre soulng these sweet present monent
                                  and yet feel that never was greater artst
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Serenity hasir taken poseson myping entre
                                  soung these swwt morngs sring which enoywith
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot which the blissouls
                                  like mineing am so happy my dearsi fewnd
                                  absoribed the exquste sense enjoy my whole
                                  hearts along and fee the charm of exstenceths
                                  spotsi which was the blis of soul is mineing
                                  amsoing dear frend soingu absorbed the exqust
                                  singe wonderful serenty has taken possesison
                                  of my entre soulng these sweet present monent
                                  and yet feel that never was greater artst
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://www.youtube.com/watch?v=kOkQ4T5WO9E&list=RDSTO4-8vkG0U&index=11"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot which the blissouls
                                  like mineing am so happy my dearsi fewnd
                                  absoribed the exquste sense enjoy my whole
                                  hearts along and fee the charm of exstenceths
                                  spotsi which was the blis of soul is mineing
                                  amsoing dear frend soingu absorbed the exqust
                                  singe wonderful serenty has taken possesison
                                  of my entre soulng these sweet present monent
                                  and yet feel that never was greater artst
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i>
                                Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Models Authoritative
                            </a>
                        </div>

                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i>
                                Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate Parallel Processes via Technica Sound Models Authoritative
                            </a>
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
  );
};

export default SingleBlog;
