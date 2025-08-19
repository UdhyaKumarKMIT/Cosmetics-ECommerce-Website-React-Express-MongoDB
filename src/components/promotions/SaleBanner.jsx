#include <bits/stdc++.h>
using namespace std;

long long robLinear(vector<int>& nums, int l, int r) {
    long long prev2 = 0, prev1 = 0; // prev2 = dp[i-2], prev1 = dp[i-1]
    for (int i = l; i <= r; i++) {
        long long pick = nums[i] + prev2;
        long long notPick = prev1;
        long long cur = max(pick, notPick);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}

long long int houseRobber(vector<int>& valueInHouse) {
    int n = valueInHouse.size();
    if (n == 0) return 0;
    if (n == 1) return valueInHouse[0];
    // Case 1: Exclude last house
    long long case1 = robLinear(valueInHouse, 0, n-2);
    // Case 2: Exclude first house
    long long case2 = robLinear(valueInHouse, 1, n-1);
    return max(case1, case2);
}

// Example usage
int main() {
    vector<int> houses = {2, 3, 2};
    cout << houseRobber(houses) << endl; // Output: 3
    return 0;
}
