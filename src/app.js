const search = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const xIconSearch =document.getElementById('xIconSearch');

// seach box events 


searchIcon.addEventListener('click',()=>{
searchIcon.style.display ="none";
xIconSearch.style.display ="flex";

});

searchInput.addEventListener('click',()=>{
searchIcon.style.display ="none";
xIconSearch.style.display ="flex";

});

 xIconSearch.addEventListener('click',()=>
{
    searchIcon.style.display ="block";
    xIconSearch.style.display="none";
    searchInput.value =''
});
document.addEventListener('click', (event) => {
    // Check if the click target is outside the search element
    if (!search.contains(event.target) && !searchInput.contains(event.target)) {
        searchIcon.style.display = "block";  // Show the search icon
        xIconSearch.style.display = "none";  // Hide the X icon
        searchInput.value = '';              // Optionally clear the input field
    }
});
// header pc 
const logoPC = document.getElementById('logoPC')
const headerPc = document.getElementById('headerPC');
const navElements =document.querySelectorAll('#navbarPC a')
const navElementsText =document.querySelectorAll('#navbarPC a div')
const searchPC= document.getElementById('searchPC');
const morePCText= document.querySelector('#morePC div');
const morePCBtn= document.querySelector('#morePC');
const homebtnPC= document.querySelector('#homeBtnPC');
searchPC.addEventListener('click',()=>
{
   
    headerPc.style.width="50px";

    logoPC.style.padding="20px 10px";
   

    logoPC.innerHTML =`<a href="#" ><i class="fa-brands fa-instagram text-2xl hover:scale-105" style="color: #ffffff;"></i> </a>`
    
    
    searchPC.style.background="black";
    searchPC.style.border ="1px solid white";
    searchPC.style.padding ="0px";
    navElementsText.forEach((e)=>{
        e.style.display="none";
        
    });
    navElements.forEach((e)=>{
        
    })
    morePCText.style.display="none";
    
    
});
// home btn event






/// revert back after click outside from the nav
document.addEventListener('click', (event) => {
    // If the clicked element is not the searchPC element, revert styles
    if (!headerPc.contains(event.target) ) {
        headerPc.style.width = "";
        searchPC.style.background = "";
        searchPC.style.border = "";
        searchPC.style.padding = "";
        logoPC.innerHTML =`<a href="#" ><img id="logoImgPC" class="max-h-10 " src="src/assets/logoWhite.png" alt="logo"></i> </a>`
        
        navElementsText.forEach((e) => {
            e.style.display = "";
        });
        navElements.forEach((e) => {
            e.style.background = "";
        });
        morePCText.style.display = "";
    }
});


/* <section id="userImageSliderSection" class="h-20 p-2 px-4 max-h-20 bg-black flex relative items-center">
  <div id="nextPrevBtn"> 
   <span id="userImagePrev" class="hidden"> > </span>
    <span id="userImageNext" class="hidden"> > </span>

   </div>

    <div class="flex flex-col item-center m-2">
      <!-- user 1-->
    <img class="h-12 w-12 rounded-full border border-red-800 border-solid border-double" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="">
    <span class="text-white text-[0.600rem]">user-name</span>
    
  </div>
     
  </section> */

const userImageSliderSection =document.getElementById('userImageSliderSection');
console.log(userImageSliderSection);
const userObj= [
    {
        username : 'mahesh-kumar',
        imageURL: 'https://xsgames.co/randomusers/avatar.php?g=male'
    },
    {
        username : 'diya0787agrawal',
        imageURL: 'https://xsgames.co/randomusers/avatar.php?g=female'
    },
    {
        username:'ccrtahjh',
        imageURL:'https://xsgames.co/randomusers/avatar.php?g=pixel'
    }
];

for(let i=0;i<5;i++){
    userObj.forEach((user)=>
    userImageSliderSection.innerHTML += ` <div class="flex flex-col item-center m-0.5 p-2 min-h-16 min-w-16 justify-center overflow-hidden" >
      <!-- user 1-->
    <img class="min-h-12 min-w-12 rounded-full border border-red-800 border-double" src="${user.imageURL}" alt="">
    <span class="text-white text-[0.600rem] text-center flex-nowrap text-nowrap pt-0.5 flex justify-center items-center">${user.username}</span>
    
  </div>`
    )
}

///userr section

