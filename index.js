
function MathJs(){}


MathJs.prototype = {
    
    /**
     * Euler function https://en.wikipedia.org/wiki/Euler%27s_totient_function
     */
    euler : function(n){
        var result = n;
        for(var i = 2; i * i <= n; ++i){
            if(n % i == 0){
                while(n % i == 0){
                    n /= i;
                }
                result -= result / i;
            }
        }
        if(n > 1){
            result -= result / n;
        }
        return result;
    },

    /**
     * Greatest Common Devider https://en.wikipedia.org/wiki/Greatest_common_divisor
     */
    gcd: function(a,b){
        if(b == 0) {
            return a;
        }else{
            if(a > b){
                return this.gcd(b, a % b);
            }else {
                return this.gcd(a, b % a);
            }
        }
    }

}

exports.MathJs = new MathJs();
