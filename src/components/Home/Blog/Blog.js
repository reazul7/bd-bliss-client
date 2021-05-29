import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="pt-5">DESIGN BLOG</h1>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://demo1leotheme.b-cdn.net/leo_oobliss_demo/img/leoblog/b/1/9/410_270/b-7.jpg" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://demo1leotheme.b-cdn.net/leo_oobliss_demo/img/leoblog/b/1/8/410_270/b-6.jpg" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://demo1leotheme.b-cdn.net/leo_oobliss_demo/img/leoblog/b/1/7/410_270/b-5.jpg" alt="" />
                        <h5 className="pt-3">NULLAM ULLAMCORPER NISL QUIS ORNARE MOLESTIE</h5>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nobis!</p>
                        <button className="btn-blog">READ MORE</button>
                    </div>
                </div>

                {/* watch our story */}
                <div className="video-area py-5">
                <iframe width="1280" height="550" src="https://www.youtube.com/embed/qhe3Hn4sQD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Blog;