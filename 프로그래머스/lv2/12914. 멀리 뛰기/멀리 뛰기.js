function solution(n) {
    let dp = Array.from({length: 2001}, () => 0)
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i = 3; i <= 2000; i++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }

    return dp[n];
}