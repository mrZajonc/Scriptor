// Zaawansowany plik cookie manager
const CookieManager = {
  
    setCookie: function(name, value, days, path = "/", domain = null, secure = false, httpOnly = false) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      let cookieString = `${name}=${encodeURIComponent(value)}${expires}; path=${path}`;
      
      if (domain) {
        cookieString += `; domain=${domain}`;
      }
      if (secure) {
        cookieString += "; secure";
      }
      if (httpOnly) {
        cookieString += "; HttpOnly";
      }
      
      document.cookie = cookieString;
    },
    
    getCookie: function(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
      return null;
    },
    
    deleteCookie: function(name, path = "/", domain = null) {
      this.setCookie(name, "", -1, path, domain);
    },
  
    listCookies: function() {
      const cookies = document.cookie.split("; ");
      let cookieList = [];
      cookies.forEach(cookie => {
        const [name, value] = cookie.split("=");
        cookieList.push({ name, value: decodeURIComponent(value) });
      });
      return cookieList;
    }
  };
  
  // Przykładowe użycie:
  // Ustawienie cookie
  CookieManager.setCookie('user', 'John Doe', 7, "/", "example.com", true);
  
  // Pobranie cookie
  console.log(CookieManager.getCookie('user'));
  
  // Usunięcie cookie
  CookieManager.deleteCookie('user');
  
  // Wylistowanie wszystkich cookies
  console.log(CookieManager.listCookies());
  