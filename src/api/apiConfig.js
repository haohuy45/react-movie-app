const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f989e94b3eae76569a9d7b25f24aad1c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;