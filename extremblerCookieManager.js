/**
* Tiny Little JS librabry to create|read cookies
* Author : Extrembler Team
* 
*/
var ExtremblerCookieManager = {
	cookieLiveTime: 100,
    cookieName: '',
    baseUrl: '',
    
    /**
    * Set Cookie Live time on current ExtremblerCookieManager object
    */
    setCookieLiveTime: function(value)
    {
        this.cookieLiveTime = value;
    },
    
    /**
    * Set Cookie name on current ExtremblerCookieManager object
    */
    setCookieName: function(value)
    {
        this.cookieName = value;
    },
    
    /**
    * un set Cookie name from current ExtremblerCookieManager object
    */ 
    unsetCookieName: function(value)
    {
        this.cookieName = '';
    },

    /**
    * setting Base url on cookie if need
    */
    setBaseUrl: function(url)
    {
        this.baseUrl = url;
    },
    
    /**
    * return Base url opn current object
    */
    getBaseUrl: function(url)
    {
        return this.baseUrl;
    },

    /**
    * Create Cookie based on param
    */
    createCookie: function(name) {
        if(name != ''){
            this.setCookieName(name);
            var days = this.cookieLiveTime;
            var value = 1;
            var name = this.cookieName;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = escape(name)+"="+escape(value)+expires+"; path=/";
        }
    },
    
    /**
    * Read cookie
    * return null (if cookie not exist or cookie not specified) |1 (if cookie exist)
    */ 
    readCookie: function(name) {
        if(name != ''){
            this.setCookieName(name);
            var name = this.cookieName;
            var nameEQ = escape(name) + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
            }
            return null;
        }
        return null;
    },
};
