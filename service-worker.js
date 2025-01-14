self.addEventListener('install', (event) => {
    console.log('Service Worker 설치 완료');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('요청 처리 중:', event.request.url);
  });
  