// حفظ المستخدمين محلياً
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({email, password});
  localStorage.setItem('users', JSON.stringify(users));
  alert('تم التسجيل بنجاح');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if(user) {
    localStorage.setItem('currentUser', email);
    window.location.href = 'index.html';
  } else {
    alert('Email أو Password خاطئ');
  }
}

// Feed
function addPost() {
  const caption = document.getElementById('caption').value;
  const image = document.getElementById('imageURL').value;
  
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.unshift({caption, image});
  localStorage.setItem('posts', JSON.stringify(posts));
  renderPosts();
}

function renderPosts() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  posts.forEach(post => {
    feed.innerHTML += `
      <div class="post">
        <img src="${post.image}" alt="Photo">
        <p>${post.caption}</p>
      </div>
    `;
  });
}

// عرض المنشورات عند فتح الصفحة
if(document.getElementById('feed')) {
  renderPosts();
}
