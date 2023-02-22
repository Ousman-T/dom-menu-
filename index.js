// 1.0
const mainEl = document.querySelector('main');
// 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'
// 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
console.log(mainEl);
// 1.3
mainEl.classList.add('flex-ctr');
console.log(mainEl);
// 2.0
topMenuEl = document.querySelector('#top-menu');
console.log(topMenuEl);
// 2.1
topMenuEl.style.height = '100%';
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
console.log(topMenuEl);
// 2.3
topMenuEl.classList.add = ('flex-around');
console.dir(topMenuEl);
// 3.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  //   3.1
  menuLinks.forEach (obj => {
    const a = document.createElement('a');
    a.setAttribute('href', obj.href);
    a.textContent = obj.text;
    topMenuEl.append(a);
    console.log(a);
  })
  
  console.log(menuLinks);

  // 4.0
  subMenuEl = document.getElementById('sub-menu');
  
  // 4.1
  subMenuEl.style.height = '100%';
  console.log(subMenuEl);

  // 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

  // 4.3
  subMenuEl.classList.add = ('flex-around');
  
  // 4.4
  subMenuEl.style.position = ('absolute');

  // 4.5
  subMenuEl.style.top = '0';

  // 5.0

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

 // 5.1
   topMenuLinks = document.querySelectorAll('a');
   console.dir(topMenuLinks);
   showingSubMenu = false;

// 5.2

 topMenuEl.addEventListener('click', function(event){
   event.preventDefault();
   console.log('a');
   if(event.target.tagName !== 'a'){
   return;
   }
  
  });
  
  //  5.3





