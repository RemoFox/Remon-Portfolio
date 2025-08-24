       let Home = document.querySelector('#home');
       let About=document.querySelector('#about');
       let Education=document.querySelector('#education');
       let Experience=document.querySelector('#experience');
       let Projects=document.querySelector('#projects');
       let Skills=document.querySelector('#skills');
       let Contact=document.querySelector('#contact');
       
       function home(){
         Home.style.boxShadow="0 0 5px 5px #fff ";
         About.style.boxShadow="none ";
         Education.style.boxShadow="none ";
         Experience.style.boxShadow="none ";
         Projects.style.boxShadow="none ";
         Skills.style.boxShadow="none ";
         Contact.style.boxShadow="none ";
        }
        function about(){
            Home.style.boxShadow="none ";
            About.style.boxShadow="0 0 5px 5px #fff ";
            Education.style.boxShadow="none ";
            Experience.style.boxShadow="none ";
            Projects.style.boxShadow="none ";
            Skills.style.boxShadow="none ";
            Contact.style.boxShadow="none ";
            }
            function education(){
                Home.style.boxShadow="none ";
                About.style.boxShadow="none";
                Education.style.boxShadow="0 0 5px 5px #fff  ";
                Experience.style.boxShadow="none ";
                Projects.style.boxShadow="none ";
                Skills.style.boxShadow="none ";
                Contact.style.boxShadow="none ";
                }
                function experience(){
                    Home.style.boxShadow="none ";
                    About.style.boxShadow="none";
                    Education.style.boxShadow="none ";
                    Experience.style.boxShadow="0 0 5px 5px #fff  ";
                    Projects.style.boxShadow="none ";
                    Skills.style.boxShadow="none ";
                    Contact.style.boxShadow="none ";
                    }
       function projects(){
        Home.style.boxShadow="none ";
        About.style.boxShadow="none";
        Education.style.boxShadow="none ";
        Experience.style.boxShadow="none  ";
        Projects.style.boxShadow="0 0 5px 5px #fff  ";
        Skills.style.boxShadow="none ";
        Contact.style.boxShadow="none ";
            }
     
      function skills(){
        Home.style.boxShadow="none ";
        About.style.boxShadow="none";
        Education.style.boxShadow="none ";
        Experience.style.boxShadow="none  ";
        Projects.style.boxShadow="none ";
        Skills.style.boxShadow="0 0 5px 5px #fff  ";
        Contact.style.boxShadow="none ";
      }
     
        function contact(){
            Home.style.boxShadow="none ";
            About.style.boxShadow="none";
            Education.style.boxShadow="none ";
            Experience.style.boxShadow="none  ";
            Projects.style.boxShadow="none ";
            Skills.style.boxShadow="none";
            Contact.style.boxShadow="0 0 5px 5px #fff ";
            }

          

            ScrollReveal().reveal('h3', {
                duration: 700,
                origin: 'top',
                distance: '50px',
                delay: 300,
                easing: 'ease-in-out',
                interval: 200 ,
                reset:true,
            });
            ScrollReveal().reveal('.sec-4 .row .technical p',{
              duration: 500,
              origin: 'top',
              distance: '50px',
              delay: 300,
              easing: 'ease-in-out',
              interval: 200 ,
              reset:true,
          });
          ScrollReveal().reveal('.sec-4 .row .soft p',{
            duration: 500,
            origin: 'top',
            distance: '50px',
            delay: 300,
            easing: 'ease-in-out',
            interval: 200 ,
            reset:true,
        });


        

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 25,
      grabcursor:true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
       
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
         
        },
      },
    });

if (window.innerWidth > 768) {
      window.onscroll = function()
             { 
                value = scrollY;
                console.log(value);

              if(scrollY >=0 && scrollY <=300)
             {
               home();   
             }

               if(scrollY >=600 && scrollY <=900)
               {
            about();
               }

             if(scrollY >=1150 && scrollY <=1300)
               {
           education();
            }

           if(scrollY >=1750 && scrollY <=2100)
            {
            skills();
             }

               if(scrollY >=2500 && scrollY <=3800)
             {
           experience();
            }

            if(scrollY >=4050 && scrollY <=4400 )
              {
           projects();
            }

            if(scrollY >=4550  && scrollY <=4900)
              {
           contact();
            }
           }
          }



