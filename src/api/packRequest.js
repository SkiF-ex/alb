export const packRequest = async (stickerPacks) => {
  const response = await fetch('http://localhost:3004/packs/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({packs: stickerPacks - 1})
  });

  return await response.json();
}
