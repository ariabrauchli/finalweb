import React, { useMemo, useState } from "react";

const images = [
  {
    src: "https://as2.ftcdn.net/jpg/02/96/37/51/500_F_296375170_KsdzwK5PTh5ct9TekQG1KCz9HHjHZddj.jpg",
    title: "Rose",
    location: "California",
    category: "Nature",
    description: "Velvety petals with macro texture and shadow play.",
    adobeLink: "https://stock.adobe.com/images/close-up-of-rose-flowers/296375170?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/09/79/95/61/1000_F_979956110_20QUW9S7CmjV6APajZUzjESLoMaMWzqg.jpg",
    title: "Stepping Stones",
    location: "Pompeii, Italy",
    category: "Travel",
    description: "Stepping Stones in Pompeii.",
    adobeLink: "https://as2.ftcdn.net/v2/jpg/09/79/95/61/1000_F_979956110_20QUW9S7CmjV6APajZUzjESLoMaMWzqg.jpg",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/09/79/93/91/1000_F_979939126_fQNxVQUy3cRSs85h3cDRIMvxdOg3LRQC.jpg",
    title: "Kīlauea Iki Crater",
    location: "Hawaii",
    category: "Landscape",
    description: "Aerial view of the crater and surrounding lava fields.",
    adobeLink: "https://stock.adobe.com/contributor/208457991/aria-brauchli?asset_id=979939126",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/09/59/16/01/1000_F_959160155_HcPMCn9bTDawzbegcQSlPwPZp3MOVUml.jpg",
    title: "Pompeii Murals",
    location: "Pompeii, Italy",
    category: "Travel",
    description: "Ancient wall murals glowing in late sunlight.",
    adobeLink: "https://stock.adobe.com/contributor/208457991/aria-brauchli?asset_id=959160155",
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/07/23/43/30/1000_F_723433058_4gvtoyCS5zfQTom5QHT4l84xsd9xcTEb.jpg",
    title: "San Sebastian Overhead",
    location: "San Sebastian, Spain",
    category: "Landscape",
    description: "Bird's eye view of the city.",
    adobeLink: "https://stock.adobe.com/contributor/208457991/aria-brauchli?asset_id=723433058",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/04/39/03/73/1000_F_439037386_KOMSO7amayG4yWMdFQHWOKeYru4UkGHv.jpg",
    title: "Water Lily",
    location: "Bali",
    category: "Nature",
    description: "Serene water lily floating in soft light.",
    adobeLink: "https://stock.adobe.com/contributor/208457991/aria-brauchli?asset_id=439037386",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/04/39/03/73/1000_F_439037379_hDdGDixBCMuxG4ntNlxlqCbbY9ib7Ksf.jpg",
    title: "Alhambra Granada",
    location: "Granada, Spain",
    category: "Travel",
    description: "Courtyard arches and reflecting pools at the Alhambra.",
    adobeLink: "https://stock.adobe.com/contributor/208457991/aria-brauchli?asset_id=439037379",
  },
  {
    src: "https://as1.ftcdn.net/jpg/02/96/37/02/500_F_296370291_VwnmiDcyTRbDa6GRmeYSXrovHpAvuccG.jpg",
    title: "Butterflies",
    location: "Thailand",
    category: "Nature",
    description: "Two yellow butterflies perched on sun-warmed stone.",
    adobeLink: "https://stock.adobe.com/images/two-yellow-butterflies-on-rock/296370291?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/03/07/74/23/500_F_307742323_jEFvtONKw4FNsKDuO6gjBqH1Uq8KZ6M8.jpg",
    title: "Balinese Ritual",
    location: "Bali, Indonesia",
    category: "Travel",
    description: "Morning offering framed by incense smoke.",
    adobeLink: "https://stock.adobe.com/images/daily-balinese-offerings-with-incense/307742323?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/02/96/37/49/500_F_296374980_kGICLjQEWZIwzFBSTifSL6WuPzUHZJT9.jpg",
    title: "Ghost Ship",
    location: "San Francisco, CA",
    category: "Landscape",
    description: "Minimalist dock scene disappearing into fog.",
    adobeLink: "https://stock.adobe.com/images/danger-sign-at-railroad-track/296374980?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/03/55/32/02/500_F_355320256_Duhv9GVqHKqqu475qB4dbWhCi6ZOQj5T.jpg",
    title: "Monuments",
    location: "Washington, D.C.",
    category: "Landscape",
    description: "View of the Washington Monument from the Lincoln Memorial.",
    adobeLink: "https://stock.adobe.com/images/sunrise-view-of-washington-monument-from-lincoln-memorial/355320256?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/03/55/31/62/500_F_355316272_2GJIGmDzaFsz2voAetFv9ao0sg1vpNCh.jpg",
    title: "Black Lives Matter",
    location: "Washington, D.C.",
    category: "Documentary",
    description: "Protest energy with bold typography and silhouettes.",
    adobeLink: "https://stock.adobe.com/images/protestor-holding-up-a-black-lives-matter-sign/355316272?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/02/96/37/38/500_F_296373885_AEeO9nWhJnqdflMmQRXdeJCYY78M8458.jpg",
    title: "Ocean Beach",
    location: "California",
    category: "Landscape",
    description: "Moody shoreline at sunset, framed with pastel skies.",
    adobeLink: "https://stock.adobe.com/images/view-of-beach-during-sunset/296373885?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/02/96/84/51/500_F_296845193_9usgMj2McfaJfUqwgcUAmvBCAlPVKpAK.jpg",
    title: "PUP-kin",
    location: "Colorado",
    category: "Nature",
    description: "Playful autumn portrait with pumpkins and a pup.",
    adobeLink: "https://stock.adobe.com/images/puppy-and-pumpkin/296845193?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/03/00/48/66/500_F_300486613_lZMT2lJmfoSZDdSBnB7f5RX5iUhbb75D.jpg",
    title: "America the Free",
    location: "Washington, D.C.",
    category: "Documentary",
    description: "Washington Monument framed by fencing—quiet tension at dawn.",
    adobeLink: "https://stock.adobe.com/images/washington-monument-behind-a-fence/300486613?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/02/96/37/43/500_F_296374361_XmldzTExoO42WgUbx8MURdSL8BwgQ9Xo.jpg",
    title: "Sand Birds",
    location: "California Coast",
    category: "Nature",
    description: "Flock of dunlins gathered along the shoreline.",
    adobeLink: "https://stock.adobe.com/images/flock-of-dunlins-standing-of-beach/296374361?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/02/97/39/21/500_F_297392174_VvDqCoEsU7IiHKutq8OdqeT1avyRkv76.jpg",
    title: "Walk Away",
    location: "Washington, D.C.",
    category: "Documentary",
    description: "Street moment with a solitary figure moving forward.",
    adobeLink: "https://stock.adobe.com/images/back-view-of-young-man-walking/297392174?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/03/07/08/76/500_F_307087688_BmxT1SI4mFWMmOru7mYDrIykzoD1MioN.jpg",
    title: "Flatirons",
    location: "Boulder, CO",
    category: "Landscape",
    description: "Snow-dusted Flatirons under crisp blue skies.",
    adobeLink: "https://stock.adobe.com/images/mountains-covered-in-snow/307087688?prev_url=detail",
  },
  {
    src: "https://as2.ftcdn.net/jpg/02/96/37/03/500_F_296370348_t1pscJuUW1spj2SfySnaL5ddyUy6LX84.jpg",
    title: "Monkey",
    location: "Thailand",
    category: "Nature",
    description: "Macaque perched beside water with watchful eyes.",
    adobeLink: "https://stock.adobe.com/images/macaque-sitting-by-water/296370348?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/02/96/37/34/500_F_296373448_3gBbqVrWoLNCopi6zNWrr7g4qOHmmHCg.jpg",
    title: "Lotus",
    location: "Southeast Asia",
    category: "Nature",
    description: "Lotus floating in a pond, captured at dusk.",
    adobeLink: "https://stock.adobe.com/images/close-up-of-lotus-flower-in-pond/296373448?prev_url=detail",
  },
  {
    src: "https://as1.ftcdn.net/jpg/02/96/37/06/500_F_296370609_qQK9XVgDBIcBxOax05FnhfhLVCRQFdJv.jpg",
    title: "Elephant",
    location: "Thailand",
    category: "Travel",
    description: "An elephant strolling a rural road.",
    adobeLink: "https://stock.adobe.com/images/african-elephant-walking-on-road/296370609?prev_url=detail",
  },
];

const categories = ["All", "Landscape", "Documentary", "Travel", "Nature"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <p className="eyebrow">Selected work</p>
        <h2>Gallery</h2>
        <p className="hero-subtitle gallery-subtitle">
          Landscapes, travel stories, documentary moments, and nature details from recent shoots and collaborations.
        </p>
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${cat === activeCategory ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="gallery-grid">
        {filtered.map((item, idx) => (
          <button
            className="gallery-card"
            key={`${item.title}-${idx}`}
            onClick={() => openModal(idx)}
            type="button"
          >
            <div className="card-image">
              <img src={item.src} alt={item.title} />
              <div className="card-overlay">
                <span>{item.category}</span>
                <a
                  className="card-adobe"
                  href={item.adobeLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Buy on Adobe
                </a>
              </div>
            </div>
            <div className="card-meta">
              <h4>{item.title}</h4>
              <p>{item.location}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="gallery-footer">
        <a
          className="btn primary"
          href="https://stock.adobe.com/contributor/208457991/aria-brauchli"
          target="_blank"
          rel="noreferrer"
        >
          View more on Adobe
        </a>
      </div>

      {activeItem && (
        <div className="gallery-modal">
          <div className="modal-backdrop" onClick={closeModal} />
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div className="modal-image-wrap">
              <img src={activeItem.src} alt={activeItem.title} />
              <div className="modal-nav">
                <button onClick={showPrev} aria-label="Previous">‹</button>
                <button onClick={showNext} aria-label="Next">›</button>
              </div>
            </div>
            <div className="modal-details">
              <p className="eyebrow">{activeItem.category}</p>
              <h3>{activeItem.title}</h3>
              <p className="modal-location">{activeItem.location}</p>
              <p className="modal-description">{activeItem.description}</p>
              <div className="modal-actions">
                <a className="btn primary" href={activeItem.adobeLink} target="_blank" rel="noreferrer">
                  View on Adobe
                </a>
                <button
                  className="btn ghost"
                  onClick={() => {
                    setActiveCategory(activeItem.category);
                    setActiveIndex(null);
                  }}
                >
                  More from this series
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
