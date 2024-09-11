export const renderStars = (rating: number) => {
    const maxStars = 5; // Define the maximum number of stars (5)
    const scaledRating = rating / 2; // Scale the rating down from 10 to 5
    const fullStars = Math.floor(scaledRating); // Number of full stars
    const hasHalfStar = scaledRating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
  
    const stars = [];
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
  
    // Add half star if applicable
    if (hasHalfStar) {
      stars.push('half');
    }
  
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }
  
    // Render the star icons
    return stars.map((type, index) => {
      switch (type) {
        case 'full':
          return (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        case 'half':
          return (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03 3.656-3.563a1.535 1.535 0 0 0-.851-2.622l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033V2.5Z" />
            </svg>
          );
        case 'empty':
          return (
            <svg
              key={index}
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        default:
          return null;
      }
    });
  };
  