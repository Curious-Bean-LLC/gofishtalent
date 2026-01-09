# Songkick Integration Setup

This project includes integration with the Songkick API to display upcoming live shows for each artist on their EPK pages.

## Setup Instructions

### 1. Get Your Songkick API Key

1. Visit [Songkick API Key Request](https://www.songkick.com/api_key_requests/new)
2. Sign up or log in to your Songkick account
3. Fill out the form to request an API key
4. Once approved, you'll receive your API key

### 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder with your actual API key:
   ```
   VITE_SONGKICK_API_KEY=your_actual_api_key_here
   ```

### 3. Find Artist IDs

You need to find the Songkick artist ID for each musician:

1. Go to [Songkick.com](https://www.songkick.com)
2. Search for the artist
3. Look at the URL on the artist's page: `https://www.songkick.com/artists/XXXXXX-artist-name`
4. The number `XXXXXX` is the artist ID

### 4. Update Musicians Data

Edit `/src/constants/musicians.ts` and replace `'YOUR_SONGKICK_ARTIST_ID'` with the actual artist IDs:

```typescript
{
  // ... other fields
  songkickArtistId: '123456', // Replace with actual Songkick artist ID
}
```

## Features

- **Automatic Fetching**: Shows are automatically fetched from Songkick when an EPK page loads
- **Responsive Design**: Show listings adapt to mobile and desktop views
- **Error Handling**: Gracefully handles API errors and missing data
- **Loading States**: Shows a spinner while fetching data
- **Ticket Links**: Direct links to Songkick for ticket purchases

## Troubleshooting

### No Shows Appearing

1. **Check API Key**: Ensure your Songkick API key is correct in `.env`
2. **Check Artist ID**: Verify the artist ID matches the one on Songkick
3. **Restart Dev Server**: After changing `.env`, restart the development server
4. **Check Console**: Open browser dev tools and check for error messages

### "Songkick artist ID not configured" Error

- This means the artist still has the placeholder `'YOUR_SONGKICK_ARTIST_ID'` value
- Replace it with the actual artist ID from Songkick

## API Rate Limits

Songkick API has rate limits:
- Free tier: Limited requests per minute
- Consider caching responses if you have high traffic
- Contact Songkick for higher limits if needed

## Security

- The `.env` file is gitignored to protect your API key
- Never commit your actual API key to version control
- Share `.env.example` instead of `.env` with collaborators
