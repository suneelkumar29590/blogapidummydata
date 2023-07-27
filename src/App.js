import React, { useState } from 'react';

const DummyDataComponent = () => {
  // Dummy data for the blog list
  const dummyBlogs = [
    {
      id: 1,
      title: 'Graphic Desingner ',
      heading:'Job Description',
      button:'download',
      para:'Angel Broking',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://techcrunch.com/wp-content/uploads/2012/04/microsoft-logo.jpg',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
      
    },
    {
      id: 2,
      title: 'Desingner ',
      heading:'Job Description',
      button:'download',
      para:'Wipro',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
    {
      id: 3,
      title: 'Developer IMB',
      para:'IBM',
      button:'download',
      heading:'Job Description',
      content: 'Full time\n hyderabad/secundrabad,telangana\n fresher.',
      income:'4.5-6 LPA',
      image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
    {
      id: 4,
      title: 'web Desingner  ',
      para:'pab solutions',
      heading:'Job Description',
      button:'download',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://techcrunch.com/wp-content/uploads/2012/04/microsoft-logo.jpg',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
    {
      id: 5,
      title: 'Digital marketing  ',
      para:'pab solutions',
      button:'download',
      heading:'Job Description',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
    {
      id: 6,
      title: 'web Designer',
      button:'download',
      para:'SRT solutions',
      heading:'Job Description',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
    {
      id: 7,
      title: 'web Designer',
      button:'download',
      para:'SRT solutions',
      heading:'Job Description',
      content: 'Full time hyderabad/secundrabad,telangana fresher.',
      income:'4.5-6 LPA',
      image_url:'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
      para1:'Posted: Few Hours Ago Openings:1Job Application:580',
      para2:'Openings:1Job',
      para3:'Application:580',
      description:'Illustrating concepts by designing examples of art arrangement, size, type size, and style and submitting them for approvalor product illustrations, company logos, social media Banners, artwork, and websites with software such as Photoshop.  Creating new graphics for social media, Email Marketing, Brochures, Labels & Stickers for products, Catalogues, etc., using Adobe tools like Photoshop, illustration, and InDesign Coordinating with Artworks, web designer, marketing, printers, and colleagues as necessary. Contributing to team efforts by accomplishing tasks as needed  iewing final layouts and suggesting improvements when necessary.'
    },
      ];
    
    

  const [visibleBlogId, setVisibleBlogId] = useState(null);

  // Function to handle the onClick event and toggle the visibility of blog content
  const handleBlogClick = (blog) => {
   
    setVisibleBlogId(blog);
    
  };

  console.log(visibleBlogId);
  console.log(dummyBlogs.length)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
            <h1>Browse Jobs</h1>
        </div>
        <ul className='col-12 col-md-4 '>
          {dummyBlogs.map((blog)=>
          <div className={`d-flex flex-row justify-content-between card mb-3 p-2 shadow  ${visibleBlogId && visibleBlogId.id === blog.id ? "selected":''}`}
            onClick={((e)=>handleBlogClick(blog))}>
            <div>
            <h4>{blog.title}</h4>
            <p>{blog.para}</p>
            <p>{blog.content}</p>
            </div>
            <h4>{blog.income}</h4>
            
          </div>
          
          
          
          
          )}
         

        </ul>
        <div className='col-md-8 card '>
        { visibleBlogId &&
        <div>
        <div className='card mt-2'>
         <div className='d-flex p-2'>
          <div className='d-flex google p-2'>
          <img src={visibleBlogId. image_url} alt={visibleBlogId.image} className='imagegoogle'/>
          <h1>{visibleBlogId.title}</h1>
          </div>
          <div className='p-3'>
            <h4>{visibleBlogId.income}</h4>
            <p>{visibleBlogId.content}</p>
            


          </div>
          
          
          
         </div>
         <hr></hr>
         <div className='d-flex justify-content-between'>
         <div>
         <p>{visibleBlogId.para1}</p>
         <p>{visibleBlogId.para2}</p>
         <p>{visibleBlogId.para3}</p>
         </div>
         <button className='w-50 h-25 p-4'>{visibleBlogId.button}</button>
        </div>
         </div>
         <h1>{visibleBlogId.heading}</h1>
         <p>{visibleBlogId.description}</p>
         </div>

     
         
         
        
         
          
         }

  

        </div>
      </div>
    </div>
  );
};

export default DummyDataComponent;
