const bookData = [
  {
    title: "The Scorpion and the Night Blossom",
    author: "Amélie Wen Zhao",
    release: "March 4, 2025",
    publisher: "Penguin Random House",
    genre: "Young Adult",
    perksEnd: "March 3, 2025",
    perks: ["Books purchased from Books of Wonder or Yu and Me Books receive two art prints and three bookmarks featuring character art. Share proof of purchase from an indie retailer and you'll also receive a special bonus pin."],
    link: "https://www.getunderlined.com/contest/enter-the-scorpion-and-the-night-blossom-gift-with-purchase-giveaway/?ref=PRHD13630F4FEA5&aid=randohouseinc49499-20&linkid=PRHD13630F4FEA5"
  },
  {
    title: "Dawn and Dust",
    author: "Hayley Whiteley",
    release: "March 10, 2025",
    publisher: "Storm Hollow Press",
    genre: "Young Adult",
    perksEnd: "March 9, 2025",
    perks: ["Receive 2 art prints and a preview of the first 2 chapters."],
    link: "https://dashboard.mailerlite.com/forms/772307/127649502961076117/share"
  },
  {
    title: "Mama Needs a Minute!",
    author: "Mary Catherine Starr",
    release: "March 11, 2025",
    publisher: "Chronicle Books",
    genre: "Other",
    perksEnd: "March 10, 2025",
    perks: ["Receive a printable laundry-themed coloring booklet."],
    link: "https://www.marycatherinestarr.com/my-book-mama-needs-a-minute"
  },
  {
    title: "An Overdue Match",
    author: "Sarah Monzon",
    release: "February 18, 2025",
    publisher: "Bethany House Publishers",
    genre: "Romance",
    perksEnd: "February 17, 2025",
    perks: ["Receive 40% off, free shipping, a bookmark, signed bookplate and sticker"],
    link: "https://www.sarahmonzonwrites.com/"
  },
  {
    title: "The Scorpion and the Night Blossom",
    author: "Amélie Wen Zhao",
    release: "March 4, 2025",
    publisher: "Penguin Random House",
    genre: "Young Adult",
    perksEnd: "March 3, 2025",
    perks: ["Books purchased from Books of Wonder or Yu and Me Books receive two art prints and three bookmarks featuring character art. Share proof of purchase from an indie retailer and you'll also receive a special bonus pin."],
    link: "https://www.getunderlined.com/contest/enter-the-scorpion-and-the-night-blossom-gift-with-purchase-giveaway/?ref=PRHD13630F4FEA5&aid=randohouseinc49499-20&linkid=PRHD13630F4FEA5"
  },
  {
    title: "Dawn and Dust",
    author: "Hayley Whiteley",
    release: "March 10, 2025",
    publisher: "Storm Hollow Press",
    genre: "Young Adult",
    perksEnd: "March 9, 2025",
    perks: ["Receive 2 art prints and a preview of the first 2 chapters."],
    link: "https://dashboard.mailerlite.com/forms/772307/127649502961076117/share"
  },
  {
    title: "Mama Needs a Minute!",
    author: "Mary Catherine Starr",
    release: "March 11, 2025",
    publisher: "Chronicle Books",
    genre: "Other",
    perksEnd: "March 10, 2025",
    perks: ["Receive a printable laundry-themed coloring booklet."],
    link: "https://www.marycatherinestarr.com/my-book-mama-needs-a-minute"
  },
  {
    title: "An Overdue Match",
    author: "Sarah Monzon",
    release: "February 18, 2025",
    publisher: "Bethany House Publishers",
    genre: "Romance",
    perksEnd: "February 17, 2025",
    perks: ["Receive 40% off, free shipping, a bookmark, signed bookplate and sticker"],
    link: "https://www.sarahmonzonwrites.com/"
  }
];

function showDetails(index) {
  const book = bookData[index];
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  const cardHTML = `
    <span class="close-button" onclick="closeModal()">&times;</span>
    <div class="modal-book-card modal-card">
        <img class="modal-img" src="./images/book-${index + 1}.png" alt="${book.title}">
        <div class="modal-info">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Release Date:</strong> ${book.release}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <h3>Preorder Perks:</h3>
        <ul>${book.perks.map(p => `<li>${p}</li>`).join("")}</ul>
        <p><strong>Perks End:</strong> ${book.perksEnd}</p>
        <a href="${book.link}" class="preorder-btn" target="_blank">Preorder Now</a>
        </div>
    </div>
    `;

    

  content.innerHTML = cardHTML;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});


function toggleFilter() {
  const panel = document.getElementById("filter-panel");
  panel.classList.toggle("open");
}

document.querySelectorAll('input[name="genre"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterBooks);
  });
  
function filterBooks() {
    const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
    .map(cb => cb.value);

    const cards = document.querySelectorAll(".book-card");
        let visibleCount = 0;

    cards.forEach(card => {
        const cardGenres = card.dataset.genre.split(",").map(g => g.trim());
        const matches = selectedGenres.length === 0 || selectedGenres.some(genre => cardGenres.includes(genre));

        if (matches) {
            card.classList.remove("fade-out");
            card.classList.add("fade-in");
            card.style.display = "block";
            visibleCount++;
        } else {
            card.classList.remove("fade-in");
            card.classList.add("fade-out");
            setTimeout(() => (card.style.display = "none"), 300); // after fade
        }
    });

    // Show or hide "no results" message
    const noResults = document.getElementById("no-results");
    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

function togglePriceTiers() {
    const checkbox = document.getElementById("promotePerkCheckbox");
    const tiers = document.getElementById("priceTiers");
    tiers.style.display = checkbox.checked ? "block" : "none";
  }