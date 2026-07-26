const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is visible -> add the show class
      entry.target.classList.add('show');
    } else {
      // Optional: remove class to replay animation when scrolling up
      entry.target.classList.remove('show');
    }
  });
}, {
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

// for audio
 const audio = document.getElementById("myAudio");
  const btn = document.getElementById("music-button")
  audio.src = "Rollin_LB.mp3";
  audio.loop = true;

  btn.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      btn.textContent = "Pause the Jam!";
    } else {
      audio.pause();
      btn.textContent = "Jam Out with Me!";
    }
});

       const postForm = document.getElementById('postForm');
        const postInput = document.getElementById('postInput');
        const postsContainer = document.getElementById('postsContainer');

        let posts = JSON.parse(localStorage.getItem('savedPosts')) || [];

        function displayPosts() {
            postsContainer.innerHTML = ''; 
          
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <p>${post.text}</p>
                    <div class="post-time">${post.date}</div>
                `;
                postsContainer.appendChild(postDiv);
            });
        }

        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
          
            const postText = postInput.value.trim();
            if (postText === '') return;

            const newPost = {
                text: postText,
                date: new Date().toLocaleString()
            };

            posts.unshift(newPost);

            localStorage.setItem('savedPosts', JSON.stringify(posts));

            // Refresh the display and clear input field
            displayPosts();
            postInput.value = '';
        });

        displayPosts();