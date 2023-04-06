const images = document.querySelectorAll('img');
const iframe = $('iframe');
const shorts = document.querySelectorAll('.image_short');
const heading =  document.querySelectorAll('h2');
const video = document.getElementById("1");
const listItems = $('.list');
const tags = document.querySelector("tag-content");
const popup = document.querySelector('#popup');


 // filter

 const filterItems = document.querySelectorAll('.project-filter li');
 const imageContents = document.querySelectorAll('.image_content');
 const headings = document.querySelectorAll('.heading-video');
 
 filterItems.forEach(item => {
    item.addEventListener('click', () => {
      const filterValue = item.getAttribute('data-filter');
      let matchingContents = false;
  
      imageContents.forEach(content => {
        if (content.classList.contains(filterValue) || filterValue === 'ALL') {
          content.style.display = 'block';
          matchingContents = true;
        } else {
          content.style.display = 'none';
        }
      });
  
      headings.forEach(heading => {
        const headingFilter = heading.getAttribute('data-filter');
        if (headingFilter === filterValue || filterValue === 'ALL') {
          heading.style.display = 'block';
        } else {
          heading.style.display = 'none';
        }
      });
  
    });
  });


// image functions 
$(".image_content").on("click" , ()=>{
    $(".pop-ups").css("display", "block");
    $(".parent_continer").addClass("overlay");
    $("body").css("overflow" , "hidden");
    $(".pop-ups").add('slide-up');

    
    
    
})

$(".close_btn").on("click" , ()=>{
    $(".pop-ups").css("display", "none");
    $(".parent_continer").removeClass("overlay");
    $("body").css("overflow-y" , "visible");
    
    


      
})

$(".parent_continer ").on("click" , () => {
    $(".pop-ups").css("display", "none");
    $(".parent_continer").removeClass("overlay");
    $("body").css("overflow-y" , "visible");


})



images.forEach(function(image){
    image.addEventListener('click' , function(){
        const videourl = image.getAttribute('data-video-url');
        iframe.attr("src", videourl);
        const videoTitle = image.getAttribute('data-tite');
        const titleElement = document.getElementById('video-title');
      titleElement.innerText = videoTitle;
      const videoTags = image.getAttribute('data-tags');
      const tagElement = document.getElementById('video-tags');
      tagElement.innerText = videoTags;

    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }
    })
})

images.forEach((el) => observer.observe(el));
shorts.forEach((el) => observer.observe(el));
heading.forEach((el) => observer.observe(el));
tags.forEach((el) => observer.observe(el));

