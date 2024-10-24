"use client";

import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseconfig';

const YourComponent = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data: files, error } = await supabase.storage
        .from('images')
        .list();

      if (error) {
        console.error('Error fetching images:', error.message || error);
        setError('Could not fetch images');
        setLoading(false);
        return;
      }

      const urls = files.map(file => {
        const { data, error: urlError } = supabase.storage.from('images').getPublicUrl(file.name);
        
        if (urlError) {
          console.error('Error getting public URL:', urlError.message);
          return null; 
        }
        
        return data.publicUrl; 
      }).filter(Boolean); 

      setImageUrls(urls);
      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Images from Supabase</h1>
      <ul>
        {imageUrls.map((url, index) => (
          <li key={index}>
            <img src={url} alt={`Image ${index + 1}`} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
