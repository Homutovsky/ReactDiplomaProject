import React, { useState, useEffect } from 'react';
// import { Carousel } from 'primereact/carousel';
// import { Button } from 'primereact/button';
// import './CarouselDemo.css';
// import axios from 'axios';

// export const CarouselComponent:any = () => {

//     const [products, setProducts] = useState<any>([]);
//     const responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 3,
//             numScroll: 3
//         },
//         {
//             breakpoint: '600px',
//             numVisible: 2,
//             numScroll: 2
//         },
//         {
//             breakpoint: '480px',
//             numVisible: 1,
//             numScroll: 1
//         }
//     ];

//     const getFilmByName = async () => {
//       try {
//         const responce = await axios.get(`https://api.kinopoisk.dev/movie?field=name&search=Мстители&token=FSXPQXQ-36BMCB3-Q3NNZNY-2XH0CGJ`)
//         if (responce.data.docs.length) {
//           setProducts(responce)
//         } 
//       }
//       catch (error) {
//     }
//   }


//     useEffect(() => {
//       getFilmByName()
//     }, []); 

//     console.log('products',products)

//     const productTemplate = (product:any) => {
//         return (
//           <div className="product-item">
//                 <div className="product-item-content">
//                     <div className="mb-3">
//                         <img src={`images/product/${product.image}`} onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
//                     </div>
//                     <div>
//                         <h4 className="mb-1">{product.name}</h4>
//                         <h6 className="mt-0 mb-3">${product.price}</h6>
//                         <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
//                         <div className="car-buttons mt-5">
//                             <Button icon="pi pi-search" className="p-button p-button-rounded mr-2" />
//                             <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded mr-2" />
//                             <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             // <div className="product-item">
//             //     <div className="product-item-content">
//             //         <div className="mb-3">
//             //             {products?.data?.docs[1]?.posters?.products?.previewUr}
//             //         </div>
//             //     </div>
//             // </div>
//         );
//     }

//     return (
//         <div className="carousel-demo">
//             <div className="card">
//                 <Carousel value={products?.data?.docs[1]?.posters?.products?.previewUr} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
//                     autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
//             </div>
//         </div>
//     );
//   }
