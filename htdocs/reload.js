var count = sessionStorage.getItem(window.location) || 0;
if(count < 5) {
  count++;
  sessionStorage.setItem(window.location, count);
  
  window.location.reload();
} else {
  sessionStorage.removeItem(window.location);
}