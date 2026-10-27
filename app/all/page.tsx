"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function AllProductsPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("0");

  return (
    <div>
       <section className="relative block p-[140px]">
          <div className="container max-w-6xl flex flex-wrap p-0 m-auto">

            <div className="row w-full m-0 flex flex-wrap justify-between items-start gap-4">
              <div className="col-sm-6 w-full md:max-w-4/9 flex flex-col border-2 border-red-200 float">
                <div className="product-gallery absolute top-0 left-0 h-[550px] flex mb-2 pb-4 relative bg-yellow-100 ">
                    <Link className="gallery" href="/assets/images/shop/product-7.jpg">
                      <Image 
                        src="/assets/images/shop/product-7.jpg" alt="Single Product Image"
                        fill 
                        className="w-full h-full"
                      />
                    </Link>
                </div>
                <ul className="product-gallery w-full flex flex-row p-0 m-0 gap-2 justify-start items-center overflow-x-auto">
                  <li><a className="gallery" href="/assets/images/shop/product-8.jpg"></a><Image src="/assets/images/shop/product-8.jpg" alt="Single Product" width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-9.jpg"></a><Image src="/assets/images/shop/product-9.jpg" alt="Single Product"  width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-10.jpg"></a><Image src="/assets/images/shop/product-10.jpg" alt="Single Product"  width={100} height={100}/></li>
                </ul>
              </div>
              <div className="col-sm-6 float-left w-full md:w-1/2 bg-orange-100 p-6">
                <div className="row">
                  <div className="col-sm-12 mt-0 my-8">
                    <h1 className="product-title text-4xl">Accessories Pack</h1>
                  </div>
                </div>
                <div className="row w-full my-4 ">
                  <div className="col-sm-12"><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><a className="open-tab section-scroll" href="#reviews">-2customer reviews</a>
                  </div>
                </div>
                <div className="row w-full mt-4 mb-8">
                  <div className="col-sm-12">
                    <div className="price tracking-widest uppercase text-3xl"><span className="amount">£20.00</span></div>
                  </div>
                </div>
                <div className="row mb-18">
                  <div className="col-sm-12">
                    <div className="description">
                      <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                    </div>
                  </div>
                </div>
                <div className="row w-full flex my-2 justify-between items-center">
                  <div className="col-sm-4 bg-rose-100 w-3xs mx-auto my-2 flex items-center justify-center">
                    <input className="form-control border border-gray-300 px-4 py-2 w-4/5" type="number" name="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} max="40" min="1" required />
                  </div>
                  <div className="col-sm-8 bg-black w-full mx-auto my-2 flex items-center justify-center">
                    <Link className="btn px-6 py-2 uppercase text-white" href="#">Add To Cart</Link>
                  </div>
                </div>
                <div className="row mb-18">
                  <div className="col-sm-12">
                    <div className="product_meta">Categories:<a href="#"> Man, </a><a href="#">Clothing, </a><a href="#">T-shirts</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-70">
              <div className="col-sm-12">
                <ul className="nav nav-tabs font-alt" role="tablist">
                  <li className="active"><a href="#description" data-toggle="tab" aria-expanded="true"><span className="icon-tools-2"></span>Description</a></li>
                  <li className=""><a href="#data-sheet" data-toggle="tab" aria-expanded="false"><span className="icon-tools-2"></span>Data sheet</a></li>
                  <li className=""><a href="#reviews" data-toggle="tab" aria-expanded="false"><span className="icon-tools-2"></span>Reviews (2)</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="description">
                    <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                  </div>
                  <div className="tab-pane" id="data-sheet">
                    <table className="table table-striped ds-table table-responsive">
                      <tbody>
                        <tr>
                          <th>Title</th>
                          <th>Info</th>
                        </tr>
                        <tr>
                          <td>Compositions</td>
                          <td>Jeans</td>
                        </tr>
                        <tr>
                          <td>Size</td>
                          <td>44, 46, 48</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Black</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>Somebrand</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="reviews">
                    <div className="comments reviews">
                      <div className="comment clearfix">
                        <div className="comment-avatar"><Image src="/assets/images/shop/avatar-1.jpg" alt="avatar" width={100} height={100} /></div>
                        <div className="comment-content clearfix">
                          <div className="comment-author font-alt"><a href="#">John Doe</a></div>
                          <div className="comment-body">
                            <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                          </div>
                          <div className="comment-meta font-alt">Today, 14:55 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span>
                          </div>
                        </div>
                      </div>
                      <div className="comment clearfix">
                        <div className="comment-avatar"><Image src="/assets/images/shop/avatar-2.jpg" alt="avatar" width={100} height={100} /></div>
                        <div className="comment-content clearfix">
                          <div className="comment-author font-alt"><a href="#">MarkStone</a></div>
                          <div className="comment-body">
                            <p>Europe uses the same vocabulary. The European languages are members of the same family. Their separate existence is a myth.</p>
                          </div>
                          <div className="comment-meta font-alt">Today, 14:59 -<span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><span><i className="fa fa-star star-off"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form mt-30">
                      <h4 className="comment-form-title font-alt">Add review</h4>
                      <form method="post">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="sr-only" htmlFor="name">Name</label>
                              <input className="form-control" id="name" type="text" name="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="sr-only" htmlFor="email">Email</label>
                              <input className="form-control" id="email" type="text" name="email" placeholder="E-mail" />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">  
                              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="form-control">
                                <option value="0" disabled>Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea className="form-control" id="" name="" rows={4} placeholder="Review"></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <button className="btn btn-round btn-d" type="submit">Submit Review</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

                        </div>
          </div>
        </section>
        <div id="divider" className="divider divider-center block p-[2rem]">
          <div className="max-w-[42rem] m-auto inline">
              <div className="flex m-0 p-0 text-center justify-center items-center">
                <div className="w-full m-0 p-0 border border-gray-300"></div>
                  <i className="fa fa-star-o">*</i>
                <div className="w-full m-0 p-0 border border-rose-300"></div>
              </div>
          </div>
        
        </div>
    </div>
  )
}
